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
        "word": "graph-wrapper"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExposes things that are considered to be too unstable for inclusion in the exports of \u003ca\u003eData.Graph.Wrapper\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eUse of this module should be avoided as it will change frequently and changes to this module alone will not necessarily\n follow the Package Versioning Policy.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "Internal",
          "package": "graph-wrapper",
          "source": "src/Data-Graph-Wrapper-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Exposes things that are considered to be too unstable for inclusion in the exports of Data.Graph.Wrapper Use of this module should be avoided as it will change frequently and changes to this module alone will not necessarily follow the Package Versioning Policy",
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "Internal",
          "package": "graph-wrapper",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn edge from the first vertex to the second\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "Edge",
          "package": "graph-wrapper",
          "source": "src/Data-Graph-Wrapper-Internal.html#Edge",
          "type": "type"
        },
        "index": {
          "description": "An edge from the first vertex to the second",
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "Edge",
          "package": "graph-wrapper",
          "partial": "Edge",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#t:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA directed graph\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "Graph",
          "package": "graph-wrapper",
          "source": "src/Data-Graph-Wrapper-Internal.html#Graph",
          "type": "data"
        },
        "index": {
          "description": "directed graph",
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "Graph",
          "package": "graph-wrapper",
          "partial": "Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#t:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Wrapper.Internal",
          "name": "G",
          "package": "graph-wrapper",
          "signature": "G",
          "source": "src/Data-Graph-Wrapper-Internal.html#Graph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "G",
          "package": "graph-wrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:G"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExhaustive list of edges in the graph\n\u003c/p\u003e",
          "module": "[\"Data.Graph.Wrapper.Internal\",\"Data.Graph.Wrapper\"]",
          "name": "edges",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e [Edge i]",
          "source": "src/Data-Graph-Wrapper-Internal.html#edges",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:edges\",\"http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:edges\"]"
        },
        "index": {
          "description": "Exhaustive list of edges in the graph",
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "edges",
          "normalized": "Graph a b-\u003e[Edge a]",
          "package": "graph-wrapper",
          "signature": "Graph i v-\u003e[Edge i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:edges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Wrapper.Internal",
          "name": "gVertexIndex",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e Vertex -\u003e i",
          "source": "src/Data-Graph-Wrapper-Internal.html#gVertexIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "gVertexIndex",
          "normalized": "Graph a b-\u003eVertex-\u003ea",
          "package": "graph-wrapper",
          "partial": "Vertex Index",
          "signature": "Graph i v-\u003eVertex-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:gVertexIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Wrapper.Internal",
          "name": "gVertexVertex",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e Vertex -\u003e v",
          "source": "src/Data-Graph-Wrapper-Internal.html#gVertexVertex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "gVertexVertex",
          "normalized": "Graph a b-\u003eVertex-\u003eb",
          "package": "graph-wrapper",
          "partial": "Vertex Vertex",
          "signature": "Graph i v-\u003eVertex-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:gVertexVertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Wrapper.Internal",
          "name": "gVertexVertexArray",
          "package": "graph-wrapper",
          "signature": "Array Vertex v",
          "source": "src/Data-Graph-Wrapper-Internal.html#Graph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "gVertexVertexArray",
          "package": "graph-wrapper",
          "partial": "Vertex Vertex Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:gVertexVertexArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Wrapper.Internal",
          "name": "graph",
          "package": "graph-wrapper",
          "signature": "Graph",
          "source": "src/Data-Graph-Wrapper-Internal.html#Graph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "graph",
          "package": "graph-wrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Wrapper.Internal",
          "name": "indexGVertex",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e i -\u003e Vertex",
          "source": "src/Data-Graph-Wrapper-Internal.html#indexGVertex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "indexGVertex",
          "normalized": "Graph a b-\u003ea-\u003eVertex",
          "package": "graph-wrapper",
          "partial": "GVertex",
          "signature": "Graph i v-\u003ei-\u003eVertex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:indexGVertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Wrapper.Internal",
          "name": "indexGVertex'",
          "package": "graph-wrapper",
          "signature": "Array Vertex i -\u003e i -\u003e Vertex",
          "source": "src/Data-Graph-Wrapper-Internal.html#indexGVertex%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "indexGVertex'",
          "normalized": "Array Vertex a-\u003ea-\u003eVertex",
          "package": "graph-wrapper",
          "partial": "GVertex'",
          "signature": "Array Vertex i-\u003ei-\u003eVertex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:indexGVertex-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Wrapper.Internal",
          "name": "indexGVertex'_maybe",
          "package": "graph-wrapper",
          "signature": "Array Vertex i -\u003e i -\u003e Maybe Vertex",
          "source": "src/Data-Graph-Wrapper-Internal.html#indexGVertex%27_maybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "indexGVertex'_maybe",
          "normalized": "Array Vertex a-\u003ea-\u003eMaybe Vertex",
          "package": "graph-wrapper",
          "partial": "GVertex'",
          "signature": "Array Vertex i-\u003ei-\u003eMaybe Vertex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:indexGVertex-39-_maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Wrapper.Internal",
          "name": "indexGVertexArray",
          "package": "graph-wrapper",
          "signature": "Array Vertex i",
          "source": "src/Data-Graph-Wrapper-Internal.html#Graph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "indexGVertexArray",
          "package": "graph-wrapper",
          "partial": "GVertex Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:indexGVertexArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Graph.Wrapper.Internal\",\"Data.Graph.Wrapper\"]",
          "name": "traverseWithKey",
          "package": "graph-wrapper",
          "signature": "(i -\u003e a -\u003e t b) -\u003e Graph i a -\u003e t (Graph i b)",
          "source": "src/Data-Graph-Wrapper-Internal.html#traverseWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:traverseWithKey\",\"http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:traverseWithKey\"]"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "traverseWithKey",
          "normalized": "(a-\u003eb-\u003ec d)-\u003eGraph a b-\u003ec(Graph a d)",
          "package": "graph-wrapper",
          "partial": "With Key",
          "signature": "(i-\u003ea-\u003et b)-\u003eGraph i a-\u003et(Graph i b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:traverseWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve data associated with the vertex\n\u003c/p\u003e",
          "module": "[\"Data.Graph.Wrapper.Internal\",\"Data.Graph.Wrapper\"]",
          "name": "vertex",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e i -\u003e v",
          "source": "src/Data-Graph-Wrapper-Internal.html#vertex",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:vertex\",\"http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:vertex\"]"
        },
        "index": {
          "description": "Retrieve data associated with the vertex",
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "vertex",
          "normalized": "Graph a b-\u003ea-\u003eb",
          "package": "graph-wrapper",
          "signature": "Graph i v-\u003ei-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:vertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExhaustive list of vertices in the graph\n\u003c/p\u003e",
          "module": "[\"Data.Graph.Wrapper.Internal\",\"Data.Graph.Wrapper\"]",
          "name": "vertices",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e [i]",
          "source": "src/Data-Graph-Wrapper-Internal.html#vertices",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:vertices\",\"http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:vertices\"]"
        },
        "index": {
          "description": "Exhaustive list of vertices in the graph",
          "hierarchy": "Data Graph Wrapper Internal",
          "module": "Data.Graph.Wrapper.Internal",
          "name": "vertices",
          "normalized": "Graph a b-\u003e[a]",
          "package": "graph-wrapper",
          "signature": "Graph i v-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper-Internal.html#v:vertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA wrapper around the types and functions from \u003ca\u003eData.Graph\u003c/a\u003e to make programming with them less painful. Also\n implements some extra useful goodies such as \u003ccode\u003e\u003ca\u003esuccessors\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esccGraph\u003c/a\u003e\u003c/code\u003e, and improves the documentation of\n the behaviour of some functions.\n\u003c/p\u003e\u003cp\u003eAs it wraps \u003ca\u003eData.Graph\u003c/a\u003e, this module only supports directed graphs with unlabelled edges.\n\u003c/p\u003e\u003cp\u003eIncorporates code from the \u003ccode\u003econtainers\u003c/code\u003e package which is (c) The University of Glasgow 2002 and based\n on code described in:\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eLazy Depth-First Search and Linear Graph Algorithms in Haskell\u003c/em\u003e,\n   by David King and John Launchbury\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "Wrapper",
          "package": "graph-wrapper",
          "source": "src/Data-Graph-Wrapper.html",
          "type": "module"
        },
        "index": {
          "description": "wrapper around the types and functions from Data.Graph to make programming with them less painful Also implements some extra useful goodies such as successors and sccGraph and improves the documentation of the behaviour of some functions As it wraps Data.Graph this module only supports directed graphs with unlabelled edges Incorporates code from the containers package which is The University of Glasgow and based on code described in Lazy Depth-First Search and Linear Graph Algorithms in Haskell by David King and John Launchbury",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "Wrapper",
          "package": "graph-wrapper",
          "partial": "Wrapper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn edge from the first vertex to the second\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "Edge",
          "package": "graph-wrapper",
          "source": "src/Data-Graph-Wrapper-Internal.html#Edge",
          "type": "type"
        },
        "index": {
          "description": "An edge from the first vertex to the second",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "Edge",
          "package": "graph-wrapper",
          "partial": "Edge",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#t:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA directed graph\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "Graph",
          "package": "graph-wrapper",
          "source": "src/Data-Graph-Wrapper-Internal.html#Graph",
          "type": "data"
        },
        "index": {
          "description": "directed graph",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "Graph",
          "package": "graph-wrapper",
          "partial": "Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#t:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Wrapper",
          "name": "SCC",
          "package": "graph-wrapper",
          "source": "src/Data-Graph-Wrapper.html#SCC",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "SCC",
          "package": "graph-wrapper",
          "partial": "SCC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#t:SCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Wrapper",
          "name": "AcyclicSCC",
          "package": "graph-wrapper",
          "signature": "AcyclicSCC i",
          "source": "src/Data-Graph-Wrapper.html#SCC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "AcyclicSCC",
          "package": "graph-wrapper",
          "partial": "Acyclic SCC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:AcyclicSCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Wrapper",
          "name": "CyclicSCC",
          "package": "graph-wrapper",
          "signature": "CyclicSCC [i]",
          "source": "src/Data-Graph-Wrapper.html#SCC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "CyclicSCC",
          "normalized": "CyclicSCC[a]",
          "package": "graph-wrapper",
          "partial": "Cyclic SCC",
          "signature": "CyclicSCC[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:CyclicSCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber the vertices in the graph by how far away they are from the given roots. The roots themselves have depth 0,\n and every subsequent link we traverse adds 1 to the depth. If a vertex is not reachable it will have a depth of \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "depthNumbering",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e [i] -\u003e Graph i (v, Maybe Int)",
          "source": "src/Data-Graph-Wrapper.html#depthNumbering",
          "type": "function"
        },
        "index": {
          "description": "Number the vertices in the graph by how far away they are from the given roots The roots themselves have depth and every subsequent link we traverse adds to the depth If vertex is not reachable it will have depth of Nothing",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "depthNumbering",
          "normalized": "Graph a b-\u003e[a]-\u003eGraph a(b,Maybe Int)",
          "package": "graph-wrapper",
          "partial": "Numbering",
          "signature": "Graph i v-\u003e[i]-\u003eGraph i(v,Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:depthNumbering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e that contains the given vertex data, linked up according to the supplied index and edge list.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003egraphFromEdges\u003c/a\u003e\u003c/code\u003e, indexes in the edge list that do not correspond to the index of some item in the\n input list are reported as an error.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "fromList",
          "package": "graph-wrapper",
          "signature": "[(i, v, [i])] -\u003e Graph i v",
          "source": "src/Data-Graph-Wrapper.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Construct Graph that contains the given vertex data linked up according to the supplied index and edge list Unlike graphFromEdges indexes in the edge list that do not correspond to the index of some item in the input list are reported as an error",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "fromList",
          "normalized": "[(a,b,[a])]-\u003eGraph a b",
          "package": "graph-wrapper",
          "partial": "List",
          "signature": "[(i,v,[i])]-\u003eGraph i v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e that contains the given vertex data, linked up according to the supplied key extraction\n function and edge list.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003egraphFromEdges\u003c/a\u003e\u003c/code\u003e, indexes in the edge list that do not correspond to the index of some item in the\n input list are reported as an error.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "fromListBy",
          "package": "graph-wrapper",
          "signature": "(v -\u003e i) -\u003e [(v, [i])] -\u003e Graph i v",
          "source": "src/Data-Graph-Wrapper.html#fromListBy",
          "type": "function"
        },
        "index": {
          "description": "Construct Graph that contains the given vertex data linked up according to the supplied key extraction function and edge list Unlike graphFromEdges indexes in the edge list that do not correspond to the index of some item in the input list are reported as an error",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "fromListBy",
          "normalized": "(a-\u003eb)-\u003e[(a,[b])]-\u003eGraph b a",
          "package": "graph-wrapper",
          "partial": "List By",
          "signature": "(v-\u003ei)-\u003e[(v,[i])]-\u003eGraph i v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:fromListBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e that contains the given vertex data, linked up according to the supplied index and edge list.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egraphFromEdges\u003c/a\u003e\u003c/code\u003e, indexes in the edge list that do not correspond to the index of some item in the\n input list are silently ignored.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "fromListLenient",
          "package": "graph-wrapper",
          "signature": "[(i, v, [i])] -\u003e Graph i v",
          "source": "src/Data-Graph-Wrapper.html#fromListLenient",
          "type": "function"
        },
        "index": {
          "description": "Construct Graph that contains the given vertex data linked up according to the supplied index and edge list Like graphFromEdges indexes in the edge list that do not correspond to the index of some item in the input list are silently ignored",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "fromListLenient",
          "normalized": "[(a,b,[a])]-\u003eGraph a b",
          "package": "graph-wrapper",
          "partial": "List Lenient",
          "signature": "[(i,v,[i])]-\u003eGraph i v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:fromListLenient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e where the vertex data double up as the indices.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003egraphFromEdges\u003c/a\u003e\u003c/code\u003e, vertex data that is listed as edges that are not actually themselves\n present in the input list are reported as an error.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "fromListSimple",
          "package": "graph-wrapper",
          "signature": "[(v, [v])] -\u003e Graph v v",
          "source": "src/Data-Graph-Wrapper.html#fromListSimple",
          "type": "function"
        },
        "index": {
          "description": "Construct Graph where the vertex data double up as the indices Unlike graphFromEdges vertex data that is listed as edges that are not actually themselves present in the input list are reported as an error",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "fromListSimple",
          "normalized": "[(a,[a])]-\u003eGraph a a",
          "package": "graph-wrapper",
          "partial": "List Simple",
          "signature": "[(v,[v])]-\u003eGraph v v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:fromListSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e directly from a list of vertices (and vertex data).\n\u003c/p\u003e\u003cp\u003eIf either end of an \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e does not correspond to a supplied vertex, an error will be raised.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "fromVerticesEdges",
          "package": "graph-wrapper",
          "signature": "[(i, v)] -\u003e [Edge i] -\u003e Graph i v",
          "source": "src/Data-Graph-Wrapper.html#fromVerticesEdges",
          "type": "function"
        },
        "index": {
          "description": "Construct Graph directly from list of vertices and vertex data If either end of an Edge does not correspond to supplied vertex an error will be raised",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "fromVerticesEdges",
          "normalized": "[(a,b)]-\u003e[Edge a]-\u003eGraph a b",
          "package": "graph-wrapper",
          "partial": "Vertices Edges",
          "signature": "[(i,v)]-\u003e[Edge i]-\u003eGraph i v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:fromVerticesEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the second vertex reachable by following edges from the first vertex?\n\u003c/p\u003e\u003cp\u003eIt is worth sharing a partial application of \u003ccode\u003e\u003ca\u003ehasPath\u003c/a\u003e\u003c/code\u003e to the first vertex if you are testing for several\n vertices being reachable from it.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "hasPath",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e i -\u003e i -\u003e Bool",
          "source": "src/Data-Graph-Wrapper.html#hasPath",
          "type": "function"
        },
        "index": {
          "description": "Is the second vertex reachable by following edges from the first vertex It is worth sharing partial application of hasPath to the first vertex if you are testing for several vertices being reachable from it",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "hasPath",
          "normalized": "Graph a b-\u003ea-\u003ea-\u003eBool",
          "package": "graph-wrapper",
          "partial": "Path",
          "signature": "Graph i v-\u003ei-\u003ei-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:hasPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of edges going in to the vertex.\n\u003c/p\u003e\u003cp\u003eIt is worth sharing a partial application of \u003ccode\u003e\u003ca\u003eindegree\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e argument if you intend to query\n for the indegrees of a number of vertices.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "indegree",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e i -\u003e Int",
          "source": "src/Data-Graph-Wrapper.html#indegree",
          "type": "function"
        },
        "index": {
          "description": "Number of edges going in to the vertex It is worth sharing partial application of indegree to the Graph argument if you intend to query for the indegrees of number of vertices",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "indegree",
          "normalized": "Graph a b-\u003ea-\u003eInt",
          "package": "graph-wrapper",
          "signature": "Graph i v-\u003ei-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:indegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of edges going out of the vertex.\n\u003c/p\u003e\u003cp\u003eIt is worth sharing a partial application of \u003ccode\u003e\u003ca\u003eoutdegree\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e argument if you intend to query\n for the outdegrees of a number of vertices.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "outdegree",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e i -\u003e Int",
          "source": "src/Data-Graph-Wrapper.html#outdegree",
          "type": "function"
        },
        "index": {
          "description": "Number of edges going out of the vertex It is worth sharing partial application of outdegree to the Graph argument if you intend to query for the outdegrees of number of vertices",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "outdegree",
          "normalized": "Graph a b-\u003ea-\u003eInt",
          "package": "graph-wrapper",
          "signature": "Graph i v-\u003ei-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:outdegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all of the vertices reachable from the given starting point\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "reachableVertices",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e i -\u003e [i]",
          "source": "src/Data-Graph-Wrapper.html#reachableVertices",
          "type": "function"
        },
        "index": {
          "description": "List all of the vertices reachable from the given starting point",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "reachableVertices",
          "normalized": "Graph a b-\u003ea-\u003e[a]",
          "package": "graph-wrapper",
          "partial": "Vertices",
          "signature": "Graph i v-\u003ei-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:reachableVertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe graph formed by the strongly connected components of the input graph. Each node in the resulting\n graph is indexed by the set of vertex indices from the input graph that it contains.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "sccGraph",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e Graph (Set i) (Map i v)",
          "source": "src/Data-Graph-Wrapper.html#sccGraph",
          "type": "function"
        },
        "index": {
          "description": "The graph formed by the strongly connected components of the input graph Each node in the resulting graph is indexed by the set of vertex indices from the input graph that it contains",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "sccGraph",
          "normalized": "Graph a b-\u003eGraph(Set a)(Map a b)",
          "package": "graph-wrapper",
          "partial": "Graph",
          "signature": "Graph i v-\u003eGraph(Set i)(Map i v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:sccGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrongly connected components (\u003ca\u003ehttp://en.wikipedia.org/wiki/Strongly_connected_component\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe SCCs are listed in a *reverse topological order*. That is to say, any edges *to* a node in the SCC\n originate either *from*:\n\u003c/p\u003e\u003cp\u003e1) Within the SCC itself (in the case of a \u003ccode\u003e\u003ca\u003eCyclicSCC\u003c/a\u003e\u003c/code\u003e only)\n   2) Or from a node in a SCC later on in the list\n\u003c/p\u003e\u003cp\u003eVertex \u003cem\u003ei\u003c/em\u003e strictly precedes \u003cem\u003ej\u003c/em\u003e in the output whenever \u003cem\u003ei\u003c/em\u003e is reachable from \u003cem\u003ej\u003c/em\u003e but not vice versa.\n Vertex \u003cem\u003ei\u003c/em\u003e occurs in the same SCC as \u003cem\u003ej\u003c/em\u003e whenever both \u003cem\u003ei\u003c/em\u003e is reachable from \u003cem\u003ej\u003c/em\u003e and \u003cem\u003ej\u003c/em\u003e is reachable from \u003cem\u003ei\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "stronglyConnectedComponents",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e [SCC i]",
          "source": "src/Data-Graph-Wrapper.html#stronglyConnectedComponents",
          "type": "function"
        },
        "index": {
          "description": "Strongly connected components http en.wikipedia.org wiki Strongly connected component The SCCs are listed in reverse topological order That is to say any edges to node in the SCC originate either from Within the SCC itself in the case of CyclicSCC only Or from node in SCC later on in the list Vertex strictly precedes in the output whenever is reachable from but not vice versa Vertex occurs in the same SCC as whenever both is reachable from and is reachable from",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "stronglyConnectedComponents",
          "normalized": "Graph a b-\u003e[SCC a]",
          "package": "graph-wrapper",
          "partial": "Connected Components",
          "signature": "Graph i v-\u003e[SCC i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:stronglyConnectedComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the vertices we can reach from a vertex with the given indentity\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "successors",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e i -\u003e [i]",
          "source": "src/Data-Graph-Wrapper.html#successors",
          "type": "function"
        },
        "index": {
          "description": "Find the vertices we can reach from vertex with the given indentity",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "successors",
          "normalized": "Graph a b-\u003ea-\u003e[a]",
          "package": "graph-wrapper",
          "signature": "Graph i v-\u003ei-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:successors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMorally, the inverse of \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e. The order of the elements in the output list is unspecified, as is the order of the edges\n in each node's adjacency list. For this reason, \u003ccode\u003etoList . fromList\u003c/code\u003e is not necessarily the identity function.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "toList",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e [(i, v, [i])]",
          "source": "src/Data-Graph-Wrapper.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Morally the inverse of fromList The order of the elements in the output list is unspecified as is the order of the edges in each node adjacency list For this reason toList fromList is not necessarily the identity function",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "toList",
          "normalized": "Graph a b-\u003e[(a,b,[a])]",
          "package": "graph-wrapper",
          "partial": "List",
          "signature": "Graph i v-\u003e[(i,v,[i])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTopological sort of of the graph (\u003ca\u003ehttp://en.wikipedia.org/wiki/Topological_sort\u003c/a\u003e). If the graph is acyclic,\n vertices will only appear in the list once all of those vertices with arrows to them have already appeared.\n\u003c/p\u003e\u003cp\u003eVertex \u003cem\u003ei\u003c/em\u003e precedes \u003cem\u003ej\u003c/em\u003e in the output whenever \u003cem\u003ej\u003c/em\u003e is reachable from \u003cem\u003ei\u003c/em\u003e but not vice versa.\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "topologicalSort",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e [i]",
          "source": "src/Data-Graph-Wrapper.html#topologicalSort",
          "type": "function"
        },
        "index": {
          "description": "Topological sort of of the graph http en.wikipedia.org wiki Topological sort If the graph is acyclic vertices will only appear in the list once all of those vertices with arrows to them have already appeared Vertex precedes in the output whenever is reachable from but not vice versa",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "topologicalSort",
          "normalized": "Graph a b-\u003e[a]",
          "package": "graph-wrapper",
          "partial": "Sort",
          "signature": "Graph i v-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:topologicalSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe graph formed by flipping all the edges, so edges from i to j now go from j to i\n\u003c/p\u003e",
          "module": "Data.Graph.Wrapper",
          "name": "transpose",
          "package": "graph-wrapper",
          "signature": "Graph i v -\u003e Graph i v",
          "source": "src/Data-Graph-Wrapper.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "The graph formed by flipping all the edges so edges from to now go from to",
          "hierarchy": "Data Graph Wrapper",
          "module": "Data.Graph.Wrapper",
          "name": "transpose",
          "normalized": "Graph a b-\u003eGraph a b",
          "package": "graph-wrapper",
          "signature": "Graph i v-\u003eGraph i v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-wrapper/docs/Data-Graph-Wrapper.html#v:transpose"
      }
    }
  ]
]