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
        "word": "Etage-Graph"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePlease read the \u003ca\u003eControl.Etage\u003c/a\u003e framework documentation for general information how it works. Also check included \u003ccode\u003etest\u003c/code\u003e program for\nan example of how to work with the algorithms bellow.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Etage",
          "name": "Etage",
          "package": "Etage-Graph",
          "source": "src/Data-Graph-Etage.html",
          "type": "module"
        },
        "index": {
          "description": "Please read the Control.Etage framework documentation for general information how it works Also check included test program for an example of how to work with the algorithms bellow",
          "hierarchy": "Data Graph Etage",
          "module": "Data.Graph.Etage",
          "name": "Etage",
          "package": "Etage-Graph",
          "partial": "Etage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Etage-Graph/docs/Data-Graph-Etage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Etage",
          "name": "GraphImpulse",
          "package": "Etage-Graph",
          "source": "src/Data-Graph-Etage.html#GraphImpulse",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Graph Etage",
          "module": "Data.Graph.Etage",
          "name": "GraphImpulse",
          "package": "Etage-Graph",
          "partial": "Graph Impulse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Etage-Graph/docs/Data-Graph-Etage.html#t:GraphImpulse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInform the node that new outbound edges have been \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003eed to it, giving the node their weights.\n\u003c/p\u003e",
          "module": "Data.Graph.Etage",
          "name": "AddOutEdges",
          "package": "Etage-Graph",
          "signature": "AddOutEdges",
          "source": "src/Data-Graph-Etage.html#GraphImpulse",
          "type": "function"
        },
        "index": {
          "description": "Inform the node that new outbound edges have been attach ed to it giving the node their weights",
          "hierarchy": "Data Graph Etage",
          "module": "Data.Graph.Etage",
          "name": "AddOutEdges",
          "package": "Etage-Graph",
          "partial": "Add Out Edges",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Etage-Graph/docs/Data-Graph-Etage.html#v:AddOutEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInforms nodes that topology has changed and the algorithm should be triggered (again).\n\u003c/p\u003e",
          "module": "Data.Graph.Etage",
          "name": "TopologyChange",
          "package": "Etage-Graph",
          "signature": "TopologyChange",
          "source": "src/Data-Graph-Etage.html#GraphImpulse",
          "type": "function"
        },
        "index": {
          "description": "Informs nodes that topology has changed and the algorithm should be triggered again",
          "hierarchy": "Data Graph Etage",
          "module": "Data.Graph.Etage",
          "name": "TopologyChange",
          "package": "Etage-Graph",
          "partial": "Topology Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Etage-Graph/docs/Data-Graph-Etage.html#v:TopologyChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInforms nodes about possible improvement in the topology information, like a newly discovered shortest path.\n\u003c/p\u003e",
          "module": "Data.Graph.Etage",
          "name": "TopologyUpdate",
          "package": "Etage-Graph",
          "signature": "TopologyUpdate",
          "source": "src/Data-Graph-Etage.html#GraphImpulse",
          "type": "function"
        },
        "index": {
          "description": "Informs nodes about possible improvement in the topology information like newly discovered shortest path",
          "hierarchy": "Data Graph Etage",
          "module": "Data.Graph.Etage",
          "name": "TopologyUpdate",
          "package": "Etage-Graph",
          "partial": "Topology Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Etage-Graph/docs/Data-Graph-Etage.html#v:TopologyUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Etage",
          "name": "destination",
          "package": "Etage-Graph",
          "signature": "LNode a",
          "source": "src/Data-Graph-Etage.html#GraphImpulse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Etage",
          "module": "Data.Graph.Etage",
          "name": "destination",
          "package": "Etage-Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Etage-Graph/docs/Data-Graph-Etage.html#v:destination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Etage",
          "name": "impulseTimestamp",
          "package": "Etage-Graph",
          "signature": "ImpulseTime",
          "source": "src/Data-Graph-Etage.html#GraphImpulse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Etage",
          "module": "Data.Graph.Etage",
          "name": "impulseTimestamp",
          "package": "Etage-Graph",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Etage-Graph/docs/Data-Graph-Etage.html#v:impulseTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Etage",
          "name": "newOutEdges",
          "package": "Etage-Graph",
          "signature": "Adj b",
          "source": "src/Data-Graph-Etage.html#GraphImpulse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Etage",
          "module": "Data.Graph.Etage",
          "name": "newOutEdges",
          "package": "Etage-Graph",
          "partial": "Out Edges",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Etage-Graph/docs/Data-Graph-Etage.html#v:newOutEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Etage",
          "name": "originator",
          "package": "Etage-Graph",
          "signature": "LNode a",
          "source": "src/Data-Graph-Etage.html#GraphImpulse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Etage",
          "module": "Data.Graph.Etage",
          "name": "originator",
          "package": "Etage-Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Etage-Graph/docs/Data-Graph-Etage.html#v:originator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Etage",
          "name": "path",
          "package": "Etage-Graph",
          "signature": "SPath b",
          "source": "src/Data-Graph-Etage.html#GraphImpulse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Etage",
          "module": "Data.Graph.Etage",
          "name": "path",
          "package": "Etage-Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Etage-Graph/docs/Data-Graph-Etage.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInform nodes that topology has changed (new nodes have been added or removed, weights changed).\n\u003c/p\u003e\u003cp\u003eCurrently it should only be invoked after the data-flow graph structure has been built (for example with \u003ccode\u003e\u003ca\u003eshortestPaths\u003c/a\u003e\u003c/code\u003e). As\ngraph topology changing interface (and thus incremental nature of algorithms) is not yet implemented.\n\u003c/p\u003e",
          "module": "Data.Graph.Etage",
          "name": "sendTopologyChange",
          "package": "Etage-Graph",
          "signature": "Map Node (Nerve (GraphImpulse a b) AxonConductive (GraphImpulse a b) AxonConductive) -\u003e Incubation ()",
          "source": "src/Data-Graph-Etage.html#sendTopologyChange",
          "type": "function"
        },
        "index": {
          "description": "Inform nodes that topology has changed new nodes have been added or removed weights changed Currently it should only be invoked after the data-flow graph structure has been built for example with shortestPaths As graph topology changing interface and thus incremental nature of algorithms is not yet implemented",
          "hierarchy": "Data Graph Etage",
          "module": "Data.Graph.Etage",
          "name": "sendTopologyChange",
          "normalized": "Map Node(Nerve(GraphImpulse a b)AxonConductive(GraphImpulse a b)AxonConductive)-\u003eIncubation()",
          "package": "Etage-Graph",
          "partial": "Topology Change",
          "signature": "Map Node(Nerve(GraphImpulse a b)AxonConductive(GraphImpulse a b)AxonConductive)-\u003eIncubation()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Etage-Graph/docs/Data-Graph-Etage.html#v:sendTopologyChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortest paths algorithm (from all to all nodes) using message (\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es in the \u003ca\u003eControl.Etage\u003c/a\u003e terminology) passing between the\nnodes along the edges of the graph to compute shortest paths. Loosely based on the algorithm used in the Babel routing\nprotocol, \u003ca\u003ehttp://www.pps.jussieu.fr/~jch/software/babel/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIt takes a \u003ca\u003eData.Graph.Inductive\u003c/a\u003e graph as an input and produces a map between source nodes and its corresponding \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es, over which\n\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es about shortest paths search will be send. To trigger the search \u003ccode\u003e\u003ca\u003esendTopologyChange\u003c/a\u003e\u003c/code\u003e should be used on returned \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eOne way how to collect this \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es into an array for querying about shortest paths can be found in the \u003ccode\u003etest\u003c/code\u003e program found in\nthis package.\n\u003c/p\u003e\u003cp\u003eWhile shortest paths search is lasting, information about suboptimal paths is already available. This algorithm also allows effective\nincremental search after graph topology changes (new nodes are added or removed, weights are changed) but this is not yet implemented.\n\u003c/p\u003e",
          "module": "Data.Graph.Etage",
          "name": "shortestPaths",
          "package": "Etage-Graph",
          "signature": "gr a b -\u003e Incubation (Map Node (Nerve (GraphImpulse a b) AxonConductive (GraphImpulse a b) AxonConductive))",
          "source": "src/Data-Graph-Etage.html#shortestPaths",
          "type": "function"
        },
        "index": {
          "description": "Shortest paths algorithm from all to all nodes using message Impulse in the Control.Etage terminology passing between the nodes along the edges of the graph to compute shortest paths Loosely based on the algorithm used in the Babel routing protocol http www.pps.jussieu.fr jch software babel It takes Data.Graph.Inductive graph as an input and produces map between source nodes and its corresponding Nerve over which Impulse about shortest paths search will be send To trigger the search sendTopologyChange should be used on returned Nerve One way how to collect this Impulse into an array for querying about shortest paths can be found in the test program found in this package While shortest paths search is lasting information about suboptimal paths is already available This algorithm also allows effective incremental search after graph topology changes new nodes are added or removed weights are changed but this is not yet implemented",
          "hierarchy": "Data Graph Etage",
          "module": "Data.Graph.Etage",
          "name": "shortestPaths",
          "normalized": "a b c-\u003eIncubation(Map Node(Nerve(GraphImpulse b c)AxonConductive(GraphImpulse b c)AxonConductive))",
          "package": "Etage-Graph",
          "partial": "Paths",
          "signature": "gr a b-\u003eIncubation(Map Node(Nerve(GraphImpulse a b)AxonConductive(GraphImpulse a b)AxonConductive))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Etage-Graph/docs/Data-Graph-Etage.html#v:shortestPaths"
      }
    }
  ]
]