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
        "word": "Graphalyze"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClustering and grouping algorithms that are graph-invariant and require\n   no user intervention.\n\u003c/p\u003e\u003cp\u003eFor a clustering algorithm that works only on directed graphs, see\n   \u003ccode\u003elevelGraph\u003c/code\u003e in \u003ca\u003eData.Graph.Analysis.Algorithms.Directed\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "Clustering",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Algorithms-Clustering.html",
          "type": "module"
        },
        "index": {
          "description": "Clustering and grouping algorithms that are graph-invariant and require no user intervention For clustering algorithm that works only on directed graphs see levelGraph in Data.Graph.Analysis.Algorithms.Directed",
          "hierarchy": "Data Graph Analysis Algorithms Clustering",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "Clustering",
          "package": "Graphalyze",
          "partial": "Clustering",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Clustering.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collapsed node contains a list of nodes that it represents.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "CNodes",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Algorithms-Clustering.html#CNodes",
          "type": "type"
        },
        "index": {
          "description": "collapsed node contains list of nodes that it represents",
          "hierarchy": "Data Graph Analysis Algorithms Clustering",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "CNodes",
          "package": "Graphalyze",
          "partial": "CNodes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Clustering.html#t:CNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual Chinese Whispers algorithm.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "chineseWhispers",
          "package": "Graphalyze",
          "signature": "g -\u003e gr a b -\u003e gr (GenCluster a) b",
          "source": "src/Data-Graph-Analysis-Algorithms-Clustering.html#chineseWhispers",
          "type": "function"
        },
        "index": {
          "description": "The actual Chinese Whispers algorithm",
          "hierarchy": "Data Graph Analysis Algorithms Clustering",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "chineseWhispers",
          "normalized": "a-\u003eb c d-\u003eb(GenCluster c)d",
          "package": "Graphalyze",
          "partial": "Whispers",
          "signature": "g-\u003egr a b-\u003egr(GenCluster a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Clustering.html#v:chineseWhispers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the given functions to determine which nodes to collapse,\n   with a new label to represent the collapsed nodes.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "collapseAndReplace",
          "package": "Graphalyze",
          "signature": "[gr a b -\u003e [(NGroup, a)]] -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Analysis-Algorithms-Clustering.html#collapseAndReplace",
          "type": "function"
        },
        "index": {
          "description": "Use the given functions to determine which nodes to collapse with new label to represent the collapsed nodes",
          "hierarchy": "Data Graph Analysis Algorithms Clustering",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "collapseAndReplace",
          "normalized": "[a b c-\u003e[(NGroup,b)]]-\u003ea b c-\u003ea b c",
          "package": "Graphalyze",
          "partial": "And Replace",
          "signature": "[gr a b-\u003e[(NGroup,a)]]-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Clustering.html#v:collapseAndReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003ecollapseAndReplace\u003c/a\u003e\u003c/code\u003e, but also return the\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eNGroup\u003c/a\u003e\u003c/code\u003e, a)\u003c/code\u003e's calculated with the functions provided.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "collapseAndReplace'",
          "package": "Graphalyze",
          "signature": "[gr a b -\u003e [(NGroup, a)]] -\u003e gr a b -\u003e (gr a b, [(NGroup, a)])",
          "source": "src/Data-Graph-Analysis-Algorithms-Clustering.html#collapseAndReplace%27",
          "type": "function"
        },
        "index": {
          "description": "As with collapseAndReplace but also return the NGroup calculated with the functions provided",
          "hierarchy": "Data Graph Analysis Algorithms Clustering",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "collapseAndReplace'",
          "normalized": "[a b c-\u003e[(NGroup,b)]]-\u003ea b c-\u003e(a b c,[(NGroup,b)])",
          "package": "Graphalyze",
          "partial": "And Replace'",
          "signature": "[gr a b-\u003e[(NGroup,a)]]-\u003egr a b-\u003e(gr a b,[(NGroup,a)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Clustering.html#v:collapseAndReplace-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollapse the cliques, cycles and chains in the graph down.  Note\n   that this doesn't work too well on undirected graphs, since every\n   pair of nodes forms a K_2 subgraph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "collapseGraph",
          "package": "Graphalyze",
          "signature": "gr a b -\u003e gr (CNodes a) b",
          "source": "src/Data-Graph-Analysis-Algorithms-Clustering.html#collapseGraph",
          "type": "function"
        },
        "index": {
          "description": "Collapse the cliques cycles and chains in the graph down Note that this doesn work too well on undirected graphs since every pair of nodes forms subgraph",
          "hierarchy": "Data Graph Analysis Algorithms Clustering",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "collapseGraph",
          "normalized": "a b c-\u003ea(CNodes b)c",
          "package": "Graphalyze",
          "partial": "Graph",
          "signature": "gr a b-\u003egr(CNodes a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Clustering.html#v:collapseGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the given functions to determine which nodes to collapse.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "collapseGraphBy",
          "package": "Graphalyze",
          "signature": "[gr (CNodes a) b -\u003e [NGroup]] -\u003e gr a b -\u003e gr (CNodes a) b",
          "source": "src/Data-Graph-Analysis-Algorithms-Clustering.html#collapseGraphBy",
          "type": "function"
        },
        "index": {
          "description": "Use the given functions to determine which nodes to collapse",
          "hierarchy": "Data Graph Analysis Algorithms Clustering",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "collapseGraphBy",
          "normalized": "[a(CNodes b)c-\u003e[NGroup]]-\u003ea b c-\u003ea(CNodes b)c",
          "package": "Graphalyze",
          "partial": "Graph By",
          "signature": "[gr(CNodes a)b-\u003e[NGroup]]-\u003egr a b-\u003egr(CNodes a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Clustering.html#v:collapseGraphBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe renamed CLUSTER algorithm.  Attempts to cluster a graph by using\n   the spatial locations used by Graphviz.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "relativeNeighbourhood",
          "package": "Graphalyze",
          "signature": "Bool -\u003e gr a b -\u003e gr (GenCluster a) b",
          "source": "src/Data-Graph-Analysis-Algorithms-Clustering.html#relativeNeighbourhood",
          "type": "function"
        },
        "index": {
          "description": "The renamed CLUSTER algorithm Attempts to cluster graph by using the spatial locations used by Graphviz",
          "hierarchy": "Data Graph Analysis Algorithms Clustering",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "relativeNeighbourhood",
          "normalized": "Bool-\u003ea b c-\u003ea(GenCluster b)c",
          "package": "Graphalyze",
          "partial": "Neighbourhood",
          "signature": "Bool-\u003egr a b-\u003egr(GenCluster a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Clustering.html#v:relativeNeighbourhood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the collapsed graph is either a singleton node\n   or else isomorphic to the original graph (i.e. not collapsed at all).\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "trivialCollapse",
          "package": "Graphalyze",
          "signature": "gr (CNodes a) b -\u003e Bool",
          "source": "src/Data-Graph-Analysis-Algorithms-Clustering.html#trivialCollapse",
          "type": "function"
        },
        "index": {
          "description": "Return True if the collapsed graph is either singleton node or else isomorphic to the original graph i.e not collapsed at all",
          "hierarchy": "Data Graph Analysis Algorithms Clustering",
          "module": "Data.Graph.Analysis.Algorithms.Clustering",
          "name": "trivialCollapse",
          "normalized": "a(CNodes b)c-\u003eBool",
          "package": "Graphalyze",
          "partial": "Collapse",
          "signature": "gr(CNodes a)b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Clustering.html#v:trivialCollapse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines algorithms that work on both undirected and\n   directed graphs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "Common",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Defines algorithms that work on both undirected and directed graphs",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "Common",
          "package": "Graphalyze",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all chains in the given graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "chainsIn",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [LNGroup a]",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html#chainsIn",
          "type": "function"
        },
        "index": {
          "description": "Find all chains in the given graph",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "chainsIn",
          "normalized": "a b c-\u003e[LNGroup b]",
          "package": "Graphalyze",
          "partial": "In",
          "signature": "g a b-\u003e[LNGroup a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#v:chainsIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all chains in the given graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "chainsIn'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [NGroup]",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html#chainsIn%27",
          "type": "function"
        },
        "index": {
          "description": "Find all chains in the given graph",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "chainsIn'",
          "normalized": "a b c-\u003e[NGroup]",
          "package": "Graphalyze",
          "partial": "In'",
          "signature": "g a b-\u003e[NGroup]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#v:chainsIn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all cliques (i.e. maximal complete subgraphs) in the given graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "cliquesIn",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [[LNode a]]",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html#cliquesIn",
          "type": "function"
        },
        "index": {
          "description": "Finds all cliques i.e maximal complete subgraphs in the given graph",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "cliquesIn",
          "normalized": "a b c-\u003e[[LNode b]]",
          "package": "Graphalyze",
          "partial": "In",
          "signature": "g a b-\u003e[[LNode a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#v:cliquesIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all cliques in the graph, without including labels.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "cliquesIn'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [NGroup]",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html#cliquesIn%27",
          "type": "function"
        },
        "index": {
          "description": "Finds all cliques in the graph without including labels",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "cliquesIn'",
          "normalized": "a b c-\u003e[NGroup]",
          "package": "Graphalyze",
          "partial": "In'",
          "signature": "g a b-\u003e[NGroup]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#v:cliquesIn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all connected components of a graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "componentsOf",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [g a b]",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html#componentsOf",
          "type": "function"
        },
        "index": {
          "description": "Find all connected components of graph",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "componentsOf",
          "normalized": "a b c-\u003e[a b c]",
          "package": "Graphalyze",
          "partial": "Of",
          "signature": "g a b-\u003e[g a b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#v:componentsOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all cycles in the given graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "cyclesIn",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [LNGroup a]",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html#cyclesIn",
          "type": "function"
        },
        "index": {
          "description": "Find all cycles in the given graph",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "cyclesIn",
          "normalized": "a b c-\u003e[LNGroup b]",
          "package": "Graphalyze",
          "partial": "In",
          "signature": "g a b-\u003e[LNGroup a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#v:cyclesIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all cycles in the given graph, returning just the nodes.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "cyclesIn'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [NGroup]",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html#cyclesIn%27",
          "type": "function"
        },
        "index": {
          "description": "Find all cycles in the given graph returning just the nodes",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "cyclesIn'",
          "normalized": "a b c-\u003e[NGroup]",
          "package": "Graphalyze",
          "partial": "In'",
          "signature": "g a b-\u003e[NGroup]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#v:cyclesIn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all regular subgraphs of the given graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "findRegular",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [[Node]]",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html#findRegular",
          "type": "function"
        },
        "index": {
          "description": "Find all regular subgraphs of the given graph",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "findRegular",
          "normalized": "a b c-\u003e[[Node]]",
          "package": "Graphalyze",
          "partial": "Regular",
          "signature": "g a b-\u003e[[Node]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#v:findRegular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if the list of nodes represents a regular subgraph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "isRegular",
          "package": "Graphalyze",
          "signature": "g a b -\u003e NGroup -\u003e Bool",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html#isRegular",
          "type": "function"
        },
        "index": {
          "description": "Determines if the list of nodes represents regular subgraph",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "isRegular",
          "normalized": "a b c-\u003eNGroup-\u003eBool",
          "package": "Graphalyze",
          "partial": "Regular",
          "signature": "g a b-\u003eNGroup-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#v:isRegular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all possible paths from this given node, avoiding loops,\n   cycles, etc.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "pathTree",
          "package": "Graphalyze",
          "signature": "Decomp g a b -\u003e [NGroup]",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html#pathTree",
          "type": "function"
        },
        "index": {
          "description": "Find all possible paths from this given node avoiding loops cycles etc",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "pathTree",
          "normalized": "Decomp a b c-\u003e[NGroup]",
          "package": "Graphalyze",
          "partial": "Tree",
          "signature": "Decomp g a b-\u003e[NGroup]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#v:pathTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all cycles in the given graph, excluding those that are also cliques.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "uniqueCycles",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [LNGroup a]",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html#uniqueCycles",
          "type": "function"
        },
        "index": {
          "description": "Find all cycles in the given graph excluding those that are also cliques",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "uniqueCycles",
          "normalized": "a b c-\u003e[LNGroup b]",
          "package": "Graphalyze",
          "partial": "Cycles",
          "signature": "g a b-\u003e[LNGroup a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#v:uniqueCycles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all cycles in the given graph, excluding those that are also cliques.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "uniqueCycles'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [NGroup]",
          "source": "src/Data-Graph-Analysis-Algorithms-Common.html#uniqueCycles%27",
          "type": "function"
        },
        "index": {
          "description": "Find all cycles in the given graph excluding those that are also cliques",
          "hierarchy": "Data Graph Analysis Algorithms Common",
          "module": "Data.Graph.Analysis.Algorithms.Common",
          "name": "uniqueCycles'",
          "normalized": "a b c-\u003e[NGroup]",
          "package": "Graphalyze",
          "partial": "Cycles'",
          "signature": "g a b-\u003e[NGroup]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Common.html#v:uniqueCycles-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines algorithms that work on directed graphs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "Directed",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html",
          "type": "module"
        },
        "index": {
          "description": "Defines algorithms that work on directed graphs",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "Directed",
          "package": "Graphalyze",
          "partial": "Directed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that can be reached from the provided \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "accessibleFrom",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [Node] -\u003e [Node]",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#accessibleFrom",
          "type": "function"
        },
        "index": {
          "description": "Find all Node that can be reached from the provided Node",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "accessibleFrom",
          "normalized": "a b c-\u003e[Node]-\u003e[Node]",
          "package": "Graphalyze",
          "partial": "From",
          "signature": "g a b-\u003e[Node]-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:accessibleFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that can be reached from the provided nodes\n   using \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003es rather than lists.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "accessibleFrom'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e Set Node -\u003e Set Node",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#accessibleFrom%27",
          "type": "function"
        },
        "index": {
          "description": "Find all Node that can be reached from the provided nodes using Set rather than lists",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "accessibleFrom'",
          "normalized": "a b c-\u003eSet Node-\u003eSet Node",
          "package": "Graphalyze",
          "partial": "From'",
          "signature": "g a b-\u003eSet Node-\u003eSet Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:accessibleFrom-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind those \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that are reachable only from the provided\n   \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "accessibleOnlyFrom",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [Node] -\u003e [Node]",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#accessibleOnlyFrom",
          "type": "function"
        },
        "index": {
          "description": "Find those Node that are reachable only from the provided Node",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "accessibleOnlyFrom",
          "normalized": "a b c-\u003e[Node]-\u003e[Node]",
          "package": "Graphalyze",
          "partial": "Only From",
          "signature": "g a b-\u003e[Node]-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:accessibleOnlyFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind those \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that are reachable only from the provided\n   \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es, using \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003es rather than lists.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "accessibleOnlyFrom'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e Set Node -\u003e Set Node",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#accessibleOnlyFrom%27",
          "type": "function"
        },
        "index": {
          "description": "Find those Node that are reachable only from the provided Node using Set rather than lists",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "accessibleOnlyFrom'",
          "normalized": "a b c-\u003eSet Node-\u003eSet Node",
          "package": "Graphalyze",
          "partial": "Only From'",
          "signature": "g a b-\u003eSet Node-\u003eSet Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:accessibleOnlyFrom-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003ecore\u003c/em\u003e of the graph is the part of the graph containing all the\n   cycles, etc.  Depending on the context, it could be interpreted as\n   the part of the graph where all the \u003ca\u003ework\u003c/a\u003e is done.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "coreOf",
          "package": "Graphalyze",
          "signature": "g a b -\u003e g a b",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#coreOf",
          "type": "function"
        },
        "index": {
          "description": "The core of the graph is the part of the graph containing all the cycles etc Depending on the context it could be interpreted as the part of the graph where all the work is done",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "coreOf",
          "normalized": "a b c-\u003ea b c",
          "package": "Graphalyze",
          "partial": "Of",
          "signature": "g a b-\u003eg a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:coreOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003es that meet the ending criteria.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "endBy",
          "package": "Graphalyze",
          "signature": "(g a b -\u003e Node -\u003e NGroup) -\u003e g a b -\u003e LNGroup a",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#endBy",
          "type": "function"
        },
        "index": {
          "description": "Find all LNode that meet the ending criteria",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "endBy",
          "normalized": "(a b c-\u003eNode-\u003eNGroup)-\u003ea b c-\u003eLNGroup b",
          "package": "Graphalyze",
          "partial": "By",
          "signature": "(g a b-\u003eNode-\u003eNGroup)-\u003eg a b-\u003eLNGroup a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:endBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that match the ending criteria.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "endBy'",
          "package": "Graphalyze",
          "signature": "(g a b -\u003e Node -\u003e NGroup) -\u003e g a b -\u003e NGroup",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#endBy%27",
          "type": "function"
        },
        "index": {
          "description": "Find all Node that match the ending criteria",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "endBy'",
          "normalized": "(a b c-\u003eNode-\u003eNGroup)-\u003ea b c-\u003eNGroup",
          "package": "Graphalyze",
          "partial": "By'",
          "signature": "(g a b-\u003eNode-\u003eNGroup)-\u003eg a b-\u003eNGroup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:endBy-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if this \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e is an ending node.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "endNode",
          "package": "Graphalyze",
          "signature": "(g a b -\u003e Node -\u003e NGroup) -\u003e g a b -\u003e LNode a -\u003e Bool",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#endNode",
          "type": "function"
        },
        "index": {
          "description": "Determine if this LNode is an ending node",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "endNode",
          "normalized": "(a b c-\u003eNode-\u003eNGroup)-\u003ea b c-\u003eLNode b-\u003eBool",
          "package": "Graphalyze",
          "partial": "Node",
          "signature": "(g a b-\u003eNode-\u003eNGroup)-\u003eg a b-\u003eLNode a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:endNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if this \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is an ending node.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "endNode'",
          "package": "Graphalyze",
          "signature": "(g a b -\u003e Node -\u003e NGroup) -\u003e g a b -\u003e Node -\u003e Bool",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#endNode%27",
          "type": "function"
        },
        "index": {
          "description": "Determine if this Node is an ending node",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "endNode'",
          "normalized": "(a b c-\u003eNode-\u003eNGroup)-\u003ea b c-\u003eNode-\u003eBool",
          "package": "Graphalyze",
          "partial": "Node'",
          "signature": "(g a b-\u003eNode-\u003eNGroup)-\u003eg a b-\u003eNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:endNode-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if this \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e is a leaf.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "isLeaf",
          "package": "Graphalyze",
          "signature": "g a b -\u003e LNode a -\u003e Bool",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#isLeaf",
          "type": "function"
        },
        "index": {
          "description": "Returns True if this LNode is leaf",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "isLeaf",
          "normalized": "a b c-\u003eLNode b-\u003eBool",
          "package": "Graphalyze",
          "partial": "Leaf",
          "signature": "g a b-\u003eLNode a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:isLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if this \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is a leaf.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "isLeaf'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e Node -\u003e Bool",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#isLeaf%27",
          "type": "function"
        },
        "index": {
          "description": "Returns True if this Node is leaf",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "isLeaf'",
          "normalized": "a b c-\u003eNode-\u003eBool",
          "package": "Graphalyze",
          "partial": "Leaf'",
          "signature": "g a b-\u003eNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:isLeaf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if this \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e is a root.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "isRoot",
          "package": "Graphalyze",
          "signature": "g a b -\u003e LNode a -\u003e Bool",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#isRoot",
          "type": "function"
        },
        "index": {
          "description": "Returns True if this LNode is root",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "isRoot",
          "normalized": "a b c-\u003eLNode b-\u003eBool",
          "package": "Graphalyze",
          "partial": "Root",
          "signature": "g a b-\u003eLNode a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:isRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if this \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is a root.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "isRoot'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e Node -\u003e Bool",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#isRoot%27",
          "type": "function"
        },
        "index": {
          "description": "Returns True if this Node is root",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "isRoot'",
          "normalized": "a b c-\u003eNode-\u003eBool",
          "package": "Graphalyze",
          "partial": "Root'",
          "signature": "g a b-\u003eNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:isRoot-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if this \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e is a singleton.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "isSingleton",
          "package": "Graphalyze",
          "signature": "g a b -\u003e LNode a -\u003e Bool",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#isSingleton",
          "type": "function"
        },
        "index": {
          "description": "Returns True if this LNode is singleton",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "isSingleton",
          "normalized": "a b c-\u003eLNode b-\u003eBool",
          "package": "Graphalyze",
          "partial": "Singleton",
          "signature": "g a b-\u003eLNode a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:isSingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if this \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is a singleton.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "isSingleton'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e Node -\u003e Bool",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#isSingleton%27",
          "type": "function"
        },
        "index": {
          "description": "Returns True if this Node is singleton",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "isSingleton'",
          "normalized": "a b c-\u003eNode-\u003eBool",
          "package": "Graphalyze",
          "partial": "Singleton'",
          "signature": "g a b-\u003eNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:isSingleton-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe shortest paths to each of the leaves in the graph (excluding\n   singletons).  This can be used to obtain an indication of the\n   overall height/depth of the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "leafMinPaths",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [LNGroup a]",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#leafMinPaths",
          "type": "function"
        },
        "index": {
          "description": "The shortest paths to each of the leaves in the graph excluding singletons This can be used to obtain an indication of the overall height depth of the graph",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "leafMinPaths",
          "normalized": "a b c-\u003e[LNGroup b]",
          "package": "Graphalyze",
          "partial": "Min Paths",
          "signature": "g a b-\u003e[LNGroup a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:leafMinPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe shortest paths to each of the leaves in the graph (excluding\n   singletons).  This can be used to obtain an indication of the\n   overall height/depth of the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "leafMinPaths'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [NGroup]",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#leafMinPaths%27",
          "type": "function"
        },
        "index": {
          "description": "The shortest paths to each of the leaves in the graph excluding singletons This can be used to obtain an indication of the overall height depth of the graph",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "leafMinPaths'",
          "normalized": "a b c-\u003e[NGroup]",
          "package": "Graphalyze",
          "partial": "Min Paths'",
          "signature": "g a b-\u003e[NGroup]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:leafMinPaths-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all leaves of the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "leavesOf",
          "package": "Graphalyze",
          "signature": "g a b -\u003e LNGroup a",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#leavesOf",
          "type": "function"
        },
        "index": {
          "description": "Find all leaves of the graph",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "leavesOf",
          "normalized": "a b c-\u003eLNGroup b",
          "package": "Graphalyze",
          "partial": "Of",
          "signature": "g a b-\u003eLNGroup a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:leavesOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all leaves of the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "leavesOf'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e NGroup",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#leavesOf%27",
          "type": "function"
        },
        "index": {
          "description": "Find all leaves of the graph",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "leavesOf'",
          "normalized": "a b c-\u003eNGroup",
          "package": "Graphalyze",
          "partial": "Of'",
          "signature": "g a b-\u003eNGroup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:leavesOf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCluster the nodes in the graph based upon how far away they are\n   from a root node.  Root nodes are in the cluster labelled \u003ccode\u003e\u003ca\u003eminLevel\u003c/a\u003e\u003c/code\u003e,\n   nodes in level \"n\" (with \u003ccode\u003en \u003e minLevel\u003c/code\u003e) are at least \u003cem\u003en\u003c/em\u003e edges away\n   from a root node.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "levelGraph",
          "package": "Graphalyze",
          "signature": "g a b -\u003e g (GenCluster a) b",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#levelGraph",
          "type": "function"
        },
        "index": {
          "description": "Cluster the nodes in the graph based upon how far away they are from root node Root nodes are in the cluster labelled minLevel nodes in level with minLevel are at least edges away from root node",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "levelGraph",
          "normalized": "a b c-\u003ea(GenCluster b)c",
          "package": "Graphalyze",
          "partial": "Graph",
          "signature": "g a b-\u003eg(GenCluster a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:levelGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003elevelGraph\u003c/a\u003e\u003c/code\u003e but provide a custom grouping of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es to\n   consider as the \"roots\".\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "levelGraphFrom",
          "package": "Graphalyze",
          "signature": "NGroup -\u003e g a b -\u003e g (GenCluster a) b",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#levelGraphFrom",
          "type": "function"
        },
        "index": {
          "description": "As with levelGraph but provide custom grouping of Node to consider as the roots",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "levelGraphFrom",
          "normalized": "NGroup-\u003ea b c-\u003ea(GenCluster b)c",
          "package": "Graphalyze",
          "partial": "Graph From",
          "signature": "NGroup-\u003eg a b-\u003eg(GenCluster a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:levelGraphFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe level of the nodes in the \u003ccode\u003e\u003ca\u003eNGroup\u003c/a\u003e\u003c/code\u003e provided to\n   \u003ccode\u003e\u003ca\u003elevelGraphFrom\u003c/a\u003e\u003c/code\u003e (or the root nodes for \u003ccode\u003e\u003ca\u003elevelGraph\u003c/a\u003e\u003c/code\u003e).  A level\n   less than this indicates that the node is not accessible.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "minLevel",
          "package": "Graphalyze",
          "signature": "Int",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#minLevel",
          "type": "function"
        },
        "index": {
          "description": "The level of the nodes in the NGroup provided to levelGraphFrom or the root nodes for levelGraph level less than this indicates that the node is not accessible",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "minLevel",
          "package": "Graphalyze",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:minLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all roots of the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "rootsOf",
          "package": "Graphalyze",
          "signature": "g a b -\u003e LNGroup a",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#rootsOf",
          "type": "function"
        },
        "index": {
          "description": "Find all roots of the graph",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "rootsOf",
          "normalized": "a b c-\u003eLNGroup b",
          "package": "Graphalyze",
          "partial": "Of",
          "signature": "g a b-\u003eLNGroup a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:rootsOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all roots of the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "rootsOf'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e NGroup",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#rootsOf%27",
          "type": "function"
        },
        "index": {
          "description": "Find all roots of the graph",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "rootsOf'",
          "normalized": "a b c-\u003eNGroup",
          "package": "Graphalyze",
          "partial": "Of'",
          "signature": "g a b-\u003eNGroup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:rootsOf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all singletons of the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "singletonsOf",
          "package": "Graphalyze",
          "signature": "g a b -\u003e LNGroup a",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#singletonsOf",
          "type": "function"
        },
        "index": {
          "description": "Find all singletons of the graph",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "singletonsOf",
          "normalized": "a b c-\u003eLNGroup b",
          "package": "Graphalyze",
          "partial": "Of",
          "signature": "g a b-\u003eLNGroup a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:singletonsOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all singletons of the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "singletonsOf'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e NGroup",
          "source": "src/Data-Graph-Analysis-Algorithms-Directed.html#singletonsOf%27",
          "type": "function"
        },
        "index": {
          "description": "Find all singletons of the graph",
          "hierarchy": "Data Graph Analysis Algorithms Directed",
          "module": "Data.Graph.Analysis.Algorithms.Directed",
          "name": "singletonsOf'",
          "normalized": "a b c-\u003eNGroup",
          "package": "Graphalyze",
          "partial": "Of'",
          "signature": "g a b-\u003eNGroup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms-Directed.html#v:singletonsOf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports all the algorithms found in the\n   \u003ccode\u003eData.Graph.Analysis.Algorithms.*\u003c/code\u003e modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Analysis.Algorithms",
          "name": "Algorithms",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Algorithms.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports all the algorithms found in the Data.Graph.Analysis.Algorithms modules",
          "hierarchy": "Data Graph Analysis Algorithms",
          "module": "Data.Graph.Analysis.Algorithms",
          "name": "Algorithms",
          "package": "Graphalyze",
          "partial": "Algorithms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Algorithms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module uses \u003cem\u003ePandoc\u003c/em\u003e to generate documents:\n   \u003ca\u003ehttp://johnmacfarlane.net/pandoc/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eNote that Pandoc is released under GPL-2 or later, however\n   according to the Free Software Foundation, I am indeed allowed to\n   use it:\n   \u003ca\u003ehttp://www.fsf.org/licensing/licenses/gpl-faq.html#IfLibraryIsGPL\u003c/a\u003e\n   since the 2-Clause BSD license that I'm using is GPL-compatible:\n   \u003ca\u003ehttp://www.fsf.org/licensing/licenses/index_html#GPLCompatibleLicenses\u003c/a\u003e\n   (search for \u003cem\u003eFreeBSD License\u003c/em\u003e, which is another name for it).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "Pandoc",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Reporting-Pandoc.html",
          "type": "module"
        },
        "index": {
          "description": "This module uses Pandoc to generate documents http johnmacfarlane.net pandoc Note that Pandoc is released under GPL-2 or later however according to the Free Software Foundation am indeed allowed to use it http www.fsf.org licensing licenses gpl-faq.html IfLibraryIsGPL since the Clause BSD license that using is GPL-compatible http www.fsf.org licensing licenses index html GPLCompatibleLicenses search for FreeBSD License which is another name for it",
          "hierarchy": "Data Graph Analysis Reporting Pandoc",
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "Pandoc",
          "package": "Graphalyze",
          "partial": "Pandoc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting-Pandoc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of a Pandoc Document.  Size measurements are in inches,\n   and a 6:4 ratio is used for width:length.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "PandocDocument",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Reporting-Pandoc.html#PandocDocument",
          "type": "data"
        },
        "index": {
          "description": "Definition of Pandoc Document Size measurements are in inches and ratio is used for width length",
          "hierarchy": "Data Graph Analysis Reporting Pandoc",
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "PandocDocument",
          "package": "Graphalyze",
          "partial": "Pandoc Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting-Pandoc.html#t:PandocDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlso save the generated Dot code to file when creating visualisations.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "alsoSaveDot",
          "package": "Graphalyze",
          "signature": "PandocDocument -\u003e PandocDocument",
          "source": "src/Data-Graph-Analysis-Reporting-Pandoc.html#alsoSaveDot",
          "type": "function"
        },
        "index": {
          "description": "Also save the generated Dot code to file when creating visualisations",
          "hierarchy": "Data Graph Analysis Reporting Pandoc",
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "alsoSaveDot",
          "normalized": "PandocDocument-\u003ePandocDocument",
          "package": "Graphalyze",
          "partial": "Save Dot",
          "signature": "PandocDocument-\u003ePandocDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting-Pandoc.html#v:alsoSaveDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "pandocHtml",
          "package": "Graphalyze",
          "signature": "PandocDocument",
          "source": "src/Data-Graph-Analysis-Reporting-Pandoc.html#pandocHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting Pandoc",
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "pandocHtml",
          "package": "Graphalyze",
          "partial": "Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting-Pandoc.html#v:pandocHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "pandocLaTeX",
          "package": "Graphalyze",
          "signature": "PandocDocument",
          "source": "src/Data-Graph-Analysis-Reporting-Pandoc.html#pandocLaTeX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting Pandoc",
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "pandocLaTeX",
          "package": "Graphalyze",
          "partial": "La Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting-Pandoc.html#v:pandocLaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "pandocMarkdown",
          "package": "Graphalyze",
          "signature": "PandocDocument",
          "source": "src/Data-Graph-Analysis-Reporting-Pandoc.html#pandocMarkdown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting Pandoc",
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "pandocMarkdown",
          "package": "Graphalyze",
          "partial": "Markdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting-Pandoc.html#v:pandocMarkdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "pandocRtf",
          "package": "Graphalyze",
          "signature": "PandocDocument",
          "source": "src/Data-Graph-Analysis-Reporting-Pandoc.html#pandocRtf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting Pandoc",
          "module": "Data.Graph.Analysis.Reporting.Pandoc",
          "name": "pandocRtf",
          "package": "Graphalyze",
          "partial": "Rtf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting-Pandoc.html#v:pandocRtf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the report framework used.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Reporting",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Reporting.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the report framework used",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Reporting",
          "package": "Graphalyze",
          "partial": "Reporting",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElements of a document.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DocElement",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocElement",
          "type": "data"
        },
        "index": {
          "description": "Elements of document",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DocElement",
          "package": "Graphalyze",
          "partial": "Doc Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#t:DocElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the \u003ccode\u003e\u003ca\u003eDotGraph\u003c/a\u003e\u003c/code\u003e to turn into an image, its filename (sans\n   extension) and its caption.  The \u003ccode\u003e\u003ca\u003eDotGraph\u003c/a\u003e\u003c/code\u003e should not have a\n   \u003ccode\u003e\u003ca\u003eSize\u003c/a\u003e\u003c/code\u003e set.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DocGraph",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocGraph",
          "type": "data"
        },
        "index": {
          "description": "Specify the DotGraph to turn into an image its filename sans extension and its caption The DotGraph should not have Size set",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DocGraph",
          "package": "Graphalyze",
          "partial": "Doc Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#t:DocGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline elements of a document.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DocInline",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocInline",
          "type": "data"
        },
        "index": {
          "description": "Inline elements of document",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DocInline",
          "package": "Graphalyze",
          "partial": "Doc Inline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#t:DocInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a document.  The document is to be stored in\n   the directory \u003ccode\u003e\u003ca\u003erootDirectory\u003c/a\u003e\u003c/code\u003e, and the main file is to have a\n   filename of \u003ccode\u003e\u003ccode\u003e\u003ca\u003efileFront\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c.\u003e\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003edocExtension\u003c/a\u003e\u003c/code\u003e dg)\u003c/code\u003e, where \u003ccode\u003edg\u003c/code\u003e is an\n   instance of \u003ccode\u003e\u003ca\u003eDocumentGenerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Document",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Reporting.html#Document",
          "type": "data"
        },
        "index": {
          "description": "Representation of document The document is to be stored in the directory rootDirectory and the main file is to have filename of fileFront docExtension dg where dg is an instance of DocumentGenerator",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Document",
          "package": "Graphalyze",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the class of document generators.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DocumentGenerator",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocumentGenerator",
          "type": "class"
        },
        "index": {
          "description": "Represents the class of document generators",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DocumentGenerator",
          "package": "Graphalyze",
          "partial": "Document Generator",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#t:DocumentGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the size the \u003ccode\u003e\u003ca\u003eDotGraph\u003c/a\u003e\u003c/code\u003e should be at.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "GraphSize",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Reporting.html#GraphSize",
          "type": "data"
        },
        "index": {
          "description": "Specify the size the DotGraph should be at",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "GraphSize",
          "package": "Graphalyze",
          "partial": "Graph Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#t:GraphSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a location, either on the internet or locally.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Location",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Reporting.html#Location",
          "type": "data"
        },
        "index": {
          "description": "Representation of location either on the internet or locally",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Location",
          "package": "Graphalyze",
          "partial": "Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the parameters used for creating visualisations of\n   graphs.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "VisParams",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Reporting.html#VisParams",
          "type": "data"
        },
        "index": {
          "description": "Defines the parameters used for creating visualisations of graphs",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "VisParams",
          "package": "Graphalyze",
          "partial": "Vis Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#t:VisParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specification on how to visualise a \u003ccode\u003e\u003ca\u003eDocGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "VisProperties",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Reporting.html#VisProperties",
          "type": "data"
        },
        "index": {
          "description": "specification on how to visualise DocGraph",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "VisProperties",
          "package": "Graphalyze",
          "partial": "Vis Properties",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#t:VisProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "BlankSpace",
          "package": "Graphalyze",
          "signature": "BlankSpace",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "BlankSpace",
          "package": "Graphalyze",
          "partial": "Blank Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:BlankSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Bold",
          "package": "Graphalyze",
          "signature": "Bold DocInline",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Bold",
          "package": "Graphalyze",
          "partial": "Bold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:Bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DG",
          "package": "Graphalyze",
          "signature": "DG",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DG",
          "package": "Graphalyze",
          "partial": "DG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:DG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet GraphViz choose an appropriate size.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DefaultSize",
          "package": "Graphalyze",
          "signature": "DefaultSize",
          "source": "src/Data-Graph-Analysis-Reporting.html#GraphSize",
          "type": "function"
        },
        "index": {
          "description": "Let GraphViz choose an appropriate size",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DefaultSize",
          "package": "Graphalyze",
          "partial": "Default Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:DefaultSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Definitions",
          "package": "Graphalyze",
          "signature": "Definitions [(DocInline, DocInline)]",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Definitions",
          "normalized": "Definitions[(DocInline,DocInline)]",
          "package": "Graphalyze",
          "partial": "Definitions",
          "signature": "Definitions[(DocInline,DocInline)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:Definitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Doc",
          "package": "Graphalyze",
          "signature": "Doc",
          "source": "src/Data-Graph-Analysis-Reporting.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Doc",
          "package": "Graphalyze",
          "partial": "Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DocImage",
          "package": "Graphalyze",
          "signature": "DocImage DocInline Location",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DocImage",
          "package": "Graphalyze",
          "partial": "Doc Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:DocImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DocLink",
          "package": "Graphalyze",
          "signature": "DocLink DocInline Location",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "DocLink",
          "package": "Graphalyze",
          "partial": "Doc Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:DocLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Emphasis",
          "package": "Graphalyze",
          "signature": "Emphasis DocInline",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Emphasis",
          "package": "Graphalyze",
          "partial": "Emphasis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:Emphasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Enumeration",
          "package": "Graphalyze",
          "signature": "Enumeration [DocElement]",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Enumeration",
          "normalized": "Enumeration[DocElement]",
          "package": "Graphalyze",
          "partial": "Enumeration",
          "signature": "Enumeration[DocElement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:Enumeration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "File",
          "package": "Graphalyze",
          "signature": "File FilePath",
          "source": "src/Data-Graph-Analysis-Reporting.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "File",
          "package": "Graphalyze",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the maximum size to use.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "GivenSize",
          "package": "Graphalyze",
          "signature": "GivenSize GraphSize",
          "source": "src/Data-Graph-Analysis-Reporting.html#GraphSize",
          "type": "function"
        },
        "index": {
          "description": "Specify the maximum size to use",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "GivenSize",
          "package": "Graphalyze",
          "partial": "Given Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:GivenSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "GraphImage",
          "package": "Graphalyze",
          "signature": "GraphImage DocGraph",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "GraphImage",
          "package": "Graphalyze",
          "partial": "Graph Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:GraphImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Grouping",
          "package": "Graphalyze",
          "signature": "Grouping [DocInline]",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Grouping",
          "normalized": "Grouping[DocInline]",
          "package": "Graphalyze",
          "partial": "Grouping",
          "signature": "Grouping[DocInline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:Grouping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Itemized",
          "package": "Graphalyze",
          "signature": "Itemized [DocElement]",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Itemized",
          "normalized": "Itemized[DocElement]",
          "package": "Graphalyze",
          "partial": "Itemized",
          "signature": "Itemized[DocElement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:Itemized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Paragraph",
          "package": "Graphalyze",
          "signature": "Paragraph [DocInline]",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Paragraph",
          "normalized": "Paragraph[DocInline]",
          "package": "Graphalyze",
          "partial": "Paragraph",
          "signature": "Paragraph[DocInline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:Paragraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Section",
          "package": "Graphalyze",
          "signature": "Section DocInline [DocElement]",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Section",
          "normalized": "Section DocInline[DocElement]",
          "package": "Graphalyze",
          "partial": "Section",
          "signature": "Section DocInline[DocElement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:Section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Text",
          "package": "Graphalyze",
          "signature": "Text String",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Text",
          "package": "Graphalyze",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "VParams",
          "package": "Graphalyze",
          "signature": "VParams",
          "source": "src/Data-Graph-Analysis-Reporting.html#VisParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "VParams",
          "package": "Graphalyze",
          "partial": "VParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:VParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "VProps",
          "package": "Graphalyze",
          "signature": "VProps",
          "source": "src/Data-Graph-Analysis-Reporting.html#VisProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "VProps",
          "package": "Graphalyze",
          "partial": "VProps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:VProps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Web",
          "package": "Graphalyze",
          "signature": "Web String",
          "source": "src/Data-Graph-Analysis-Reporting.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "Web",
          "package": "Graphalyze",
          "partial": "Web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:Web"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the legend section and add it to the document proper.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "addLegend",
          "package": "Graphalyze",
          "signature": "FilePath -\u003e FilePath -\u003e VisProperties -\u003e Document -\u003e IO Document",
          "source": "src/Data-Graph-Analysis-Reporting.html#addLegend",
          "type": "function"
        },
        "index": {
          "description": "Create the legend section and add it to the document proper",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "addLegend",
          "normalized": "FilePath-\u003eFilePath-\u003eVisProperties-\u003eDocument-\u003eIO Document",
          "package": "Graphalyze",
          "partial": "Legend",
          "signature": "FilePath-\u003eFilePath-\u003eVisProperties-\u003eDocument-\u003eIO Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:addLegend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "author",
          "package": "Graphalyze",
          "signature": "String",
          "source": "src/Data-Graph-Analysis-Reporting.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "author",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "content",
          "package": "Graphalyze",
          "signature": "[DocElement]",
          "source": "src/Data-Graph-Analysis-Reporting.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "content",
          "normalized": "[DocElement]",
          "package": "Graphalyze",
          "signature": "[DocElement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert idealised \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e values into actual documents,\n   returning the document file created.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "createDocument",
          "package": "Graphalyze",
          "signature": "dg -\u003e Document -\u003e IO (Maybe FilePath)",
          "source": "src/Data-Graph-Analysis-Reporting.html#createDocument",
          "type": "method"
        },
        "index": {
          "description": "Convert idealised Document values into actual documents returning the document file created",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "createDocument",
          "normalized": "a-\u003eDocument-\u003eIO(Maybe FilePath)",
          "package": "Graphalyze",
          "partial": "Document",
          "signature": "dg-\u003eDocument-\u003eIO(Maybe FilePath)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:createDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to create image files (with the given filename in the\n   given directory) from the graph.  If the second \u003ccode\u003e\u003ca\u003eVisProperties\u003c/a\u003e\u003c/code\u003e\n   not \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, then the first image links to the second.  The\n   whole result is wrapped in a \u003ccode\u003e\u003ca\u003eParagraph\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eunDotPath\u003c/a\u003e\u003c/code\u003e is applied\n   to the filename in the \u003ccode\u003e\u003ca\u003eDocGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003esaveDot\u003c/a\u003e\u003c/code\u003e is true, then it is assumed that the \u003ccode\u003e\u003ca\u003eformat\u003c/a\u003e\u003c/code\u003e isn't\n   \u003ccode\u003e\u003ca\u003eCanon\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDotOutput\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eXDot\u003c/a\u003e\u003c/code\u003e (because of filename clashes).\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "createGraph",
          "package": "Graphalyze",
          "signature": "VisParams-\u003e DocGraph-\u003e IO DocElement",
          "type": "function"
        },
        "index": {
          "description": "Attempts to create image files with the given filename in the given directory from the graph If the second VisProperties not Nothing then the first image links to the second The whole result is wrapped in Paragraph unDotPath is applied to the filename in the DocGraph If saveDot is true then it is assumed that the format isn Canon DotOutput or XDot because of filename clashes",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "createGraph",
          "normalized": "VisParams-\u003eDocGraph-\u003eIO DocElement",
          "package": "Graphalyze",
          "partial": "Graph",
          "signature": "VisParams-\u003eDocGraph-\u003eIO DocElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:createGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing a 6:4 ratio, create the given \u003ccode\u003ePoint\u003c/code\u003e representing\n   width,height from the width.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "createSize",
          "package": "Graphalyze",
          "signature": "Double -\u003e GraphSize",
          "source": "src/Data-Graph-Analysis-Reporting.html#createSize",
          "type": "function"
        },
        "index": {
          "description": "Using ratio create the given Point representing width height from the width",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "createSize",
          "normalized": "Double-\u003eGraphSize",
          "package": "Graphalyze",
          "partial": "Size",
          "signature": "Double-\u003eGraphSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:createSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "date",
          "package": "Graphalyze",
          "signature": "String",
          "source": "src/Data-Graph-Analysis-Reporting.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "date",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default visualisation.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "defaultImage",
          "package": "Graphalyze",
          "signature": "VisProperties",
          "source": "src/Data-Graph-Analysis-Reporting.html#VisParams",
          "type": "function"
        },
        "index": {
          "description": "The default visualisation",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "defaultImage",
          "package": "Graphalyze",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:defaultImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "description",
          "package": "Graphalyze",
          "signature": "DocInline",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "description",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe extension of all document-style files created.  Note that\n   this doesn't preclude the creation of other files, e.g. images.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "docExtension",
          "package": "Graphalyze",
          "signature": "dg -\u003e String",
          "source": "src/Data-Graph-Analysis-Reporting.html#docExtension",
          "type": "method"
        },
        "index": {
          "description": "The extension of all document-style files created Note that this doesn preclude the creation of other files e.g images",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "docExtension",
          "normalized": "a-\u003eString",
          "package": "Graphalyze",
          "partial": "Extension",
          "signature": "dg-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:docExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "dotGraph",
          "package": "Graphalyze",
          "signature": "DotGraph Node",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "dotGraph",
          "package": "Graphalyze",
          "partial": "Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:dotGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "fileFront",
          "package": "Graphalyze",
          "signature": "String",
          "source": "src/Data-Graph-Analysis-Reporting.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "fileFront",
          "package": "Graphalyze",
          "partial": "Front",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:fileFront"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "format",
          "package": "Graphalyze",
          "signature": "GraphvizOutput",
          "source": "src/Data-Graph-Analysis-Reporting.html#VisProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "format",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage sub-directory.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "graphDir",
          "package": "Graphalyze",
          "signature": "FilePath",
          "source": "src/Data-Graph-Analysis-Reporting.html#VisParams",
          "type": "function"
        },
        "index": {
          "description": "Image sub-directory",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "graphDir",
          "package": "Graphalyze",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:graphDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sub-directory of \u003ccode\u003e\u003ca\u003erootDirectory\u003c/a\u003e\u003c/code\u003e,\n   where graphs are to be created.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "graphDirectory",
          "package": "Graphalyze",
          "signature": "FilePath",
          "source": "src/Data-Graph-Analysis-Reporting.html#Document",
          "type": "function"
        },
        "index": {
          "description": "The sub-directory of rootDirectory where graphs are to be created",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "graphDirectory",
          "package": "Graphalyze",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:graphDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat name to provide the image file\n   (without an extension).\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "imageFile",
          "package": "Graphalyze",
          "signature": "FilePath",
          "source": "src/Data-Graph-Analysis-Reporting.html#DocGraph",
          "type": "function"
        },
        "index": {
          "description": "What name to provide the image file without an extension",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "imageFile",
          "package": "Graphalyze",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:imageFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e vp'\u003c/code\u003e, then a larger\n   visualisation is linked to from the\n   default one.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "largeImage",
          "package": "Graphalyze",
          "signature": "Maybe VisProperties",
          "source": "src/Data-Graph-Analysis-Reporting.html#VisParams",
          "type": "function"
        },
        "index": {
          "description": "If Just vp then larger visualisation is linked to from the default one",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "largeImage",
          "package": "Graphalyze",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:largeImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain-matter\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "legend",
          "package": "Graphalyze",
          "signature": "[(Either DocGraph DocInline, DocInline)]",
          "source": "src/Data-Graph-Analysis-Reporting.html#Document",
          "type": "function"
        },
        "index": {
          "description": "Main-matter",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "legend",
          "normalized": "[(Either DocGraph DocInline,DocInline)]",
          "package": "Graphalyze",
          "signature": "[(Either DocGraph DocInline,DocInline)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:legend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot directory of the document.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "rootDir",
          "package": "Graphalyze",
          "signature": "FilePath",
          "source": "src/Data-Graph-Analysis-Reporting.html#VisParams",
          "type": "function"
        },
        "index": {
          "description": "Root directory of the document",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "rootDir",
          "package": "Graphalyze",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:rootDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument location\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "rootDirectory",
          "package": "Graphalyze",
          "signature": "FilePath",
          "source": "src/Data-Graph-Analysis-Reporting.html#Document",
          "type": "function"
        },
        "index": {
          "description": "Document location",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "rootDirectory",
          "package": "Graphalyze",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:rootDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould the Dot source code be saved as well?\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "saveDot",
          "package": "Graphalyze",
          "signature": "Bool",
          "source": "src/Data-Graph-Analysis-Reporting.html#VisParams",
          "type": "function"
        },
        "index": {
          "description": "Should the Dot source code be saved as well",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "saveDot",
          "package": "Graphalyze",
          "partial": "Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:saveDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Reporting",
          "name": "size",
          "package": "Graphalyze",
          "signature": "GraphSize",
          "source": "src/Data-Graph-Analysis-Reporting.html#VisProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "size",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePre-matter\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "title",
          "package": "Graphalyze",
          "signature": "DocInline",
          "source": "src/Data-Graph-Analysis-Reporting.html#Document",
          "type": "function"
        },
        "index": {
          "description": "Pre-matter",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "title",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn today's date as a string, e.g. \"Monday 1 January, 2000\".\n   This arbitrary format is chosen as there doesn't seem to be a way\n   of determining the correct format as per the user's locale settings.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "today",
          "package": "Graphalyze",
          "signature": "IO String",
          "source": "src/Data-Graph-Analysis-Reporting.html#today",
          "type": "function"
        },
        "index": {
          "description": "Return today date as string e.g Monday January This arbitrary format is chosen as there doesn seem to be way of determining the correct format as per the user locale settings",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "today",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:today"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to create the specified directly, returning \u003ccode\u003eTrue\u003c/code\u003e\n   if successful (or if the directory already exists), \u003ccode\u003eFalse\u003c/code\u003e\n   if an error occurred.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "tryCreateDirectory",
          "package": "Graphalyze",
          "signature": "FilePath -\u003e IO Bool",
          "source": "src/Data-Graph-Analysis-Reporting.html#tryCreateDirectory",
          "type": "function"
        },
        "index": {
          "description": "Attempts to create the specified directly returning True if successful or if the directory already exists False if an error occurred",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "tryCreateDirectory",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "Graphalyze",
          "partial": "Create Directory",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:tryCreateDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all \u003ccode\u003e.\u003c/code\u003e with \u003ccode\u003e-\u003c/code\u003e in the given \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e, since some output\n   formats (e.g. LaTeX) don't like extraneous \u003ccode\u003e.\u003c/code\u003e's in the filename.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "unDotPath",
          "package": "Graphalyze",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Data-Graph-Analysis-Reporting.html#unDotPath",
          "type": "function"
        },
        "index": {
          "description": "Replace all with in the given FilePath since some output formats e.g LaTeX don like extraneous in the filename",
          "hierarchy": "Data Graph Analysis Reporting",
          "module": "Data.Graph.Analysis.Reporting",
          "name": "unDotPath",
          "normalized": "FilePath-\u003eFilePath",
          "package": "Graphalyze",
          "partial": "Dot Path",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Reporting.html#v:unDotPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the various types and classes utilised\n   by the Graphalyze library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "Types",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the various types and classes utilised by the Graphalyze library",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "Types",
          "package": "Graphalyze",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for the type of graph being used by default.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "AGr",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Types.html#AGr",
          "type": "type"
        },
        "index": {
          "description": "An alias for the type of graph being used by default",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "AGr",
          "package": "Graphalyze",
          "partial": "AGr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#t:AGr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese types and classes represent useful label types.\n\u003c/p\u003e\u003cp\u003eThe class of outputs of a clustering algorithm.  This class is\n   mainly used for visualization purposes, with the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance\n   required for grouping.  Instances of this class are intended for\n   use as the label type of graphs.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "ClusterLabel",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Types.html#ClusterLabel",
          "type": "class"
        },
        "index": {
          "description": "These types and classes represent useful label types The class of outputs of clustering algorithm This class is mainly used for visualization purposes with the Ord instance required for grouping Instances of this class are intended for use as the label type of graphs",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "ClusterLabel",
          "package": "Graphalyze",
          "partial": "Cluster Label",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#t:ClusterLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic cluster-label type.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "GenCluster",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Types.html#GenCluster",
          "type": "data"
        },
        "index": {
          "description": "generic cluster-label type",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "GenCluster",
          "package": "Graphalyze",
          "partial": "Gen Cluster",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#t:GenCluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents information about the graph being analysed.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "GraphData",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Types.html#GraphData",
          "type": "data"
        },
        "index": {
          "description": "Represents information about the graph being analysed",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "GraphData",
          "package": "Graphalyze",
          "partial": "Graph Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#t:GraphData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA polymorphic type that covers all possible ID values allowed by\n   Dot syntax.  Note that whilst the \u003ccode\u003e\u003ca\u003eParseDot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePrintDot\u003c/a\u003e\u003c/code\u003e\n   instances for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e will properly take care of the special\n   cases for numbers, they are treated differently here.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "GraphID",
          "package": "Graphalyze",
          "type": "data"
        },
        "index": {
          "description": "polymorphic type that covers all possible ID values allowed by Dot syntax Note that whilst the ParseDot and PrintDot instances for String will properly take care of the special cases for numbers they are treated differently here",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "GraphID",
          "package": "Graphalyze",
          "partial": "Graph ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#t:GraphID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA grouping of \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "LNGroup",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Types.html#LNGroup",
          "type": "type"
        },
        "index": {
          "description": "grouping of LNode",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "LNGroup",
          "package": "Graphalyze",
          "partial": "LNGroup",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#t:LNGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA grouping of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "NGroup",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Types.html#NGroup",
          "type": "type"
        },
        "index": {
          "description": "grouping of Node",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "NGroup",
          "package": "Graphalyze",
          "partial": "NGroup",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#t:NGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel type for storing node positions.  Note that this isn't an\n   instance of \u003ccode\u003e\u003ca\u003eClusterLabel\u003c/a\u003e\u003c/code\u003e since there's no clear indication on\n   which cluster a node belongs to at this stage.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "PosLabel",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Types.html#PosLabel",
          "type": "data"
        },
        "index": {
          "description": "Label type for storing node positions Note that this isn an instance of ClusterLabel since there no clear indication on which cluster node belongs to at this stage",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "PosLabel",
          "package": "Graphalyze",
          "partial": "Pos Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#t:PosLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relationship between two nodes with a label.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "Rel",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Internal.html#Rel",
          "type": "type"
        },
        "index": {
          "description": "relationship between two nodes with label",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "Rel",
          "package": "Graphalyze",
          "partial": "Rel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#t:Rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Types",
          "name": "Dbl",
          "package": "Graphalyze",
          "signature": "Dbl Double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "Dbl",
          "package": "Graphalyze",
          "partial": "Dbl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:Dbl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Types",
          "name": "GC",
          "package": "Graphalyze",
          "signature": "GC",
          "source": "src/Data-Graph-Analysis-Types.html#GenCluster",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "GC",
          "package": "Graphalyze",
          "partial": "GC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:GC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Types",
          "name": "GraphData",
          "package": "Graphalyze",
          "signature": "GraphData",
          "source": "src/Data-Graph-Analysis-Types.html#GraphData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "GraphData",
          "package": "Graphalyze",
          "partial": "Graph Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:GraphData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Types",
          "name": "Int",
          "package": "Graphalyze",
          "signature": "Int Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "Int",
          "package": "Graphalyze",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Types",
          "name": "PLabel",
          "package": "Graphalyze",
          "signature": "PLabel",
          "source": "src/Data-Graph-Analysis-Types.html#PosLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "PLabel",
          "package": "Graphalyze",
          "partial": "PLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:PLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Types",
          "name": "Str",
          "package": "Graphalyze",
          "signature": "Str Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "Str",
          "package": "Graphalyze",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd extra expected root nodes.  No checks are made that these\n   are valid \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "addRoots",
          "package": "Graphalyze",
          "signature": "GraphData n e -\u003e NGroup -\u003e GraphData n e",
          "source": "src/Data-Graph-Analysis-Types.html#addRoots",
          "type": "function"
        },
        "index": {
          "description": "Add extra expected root nodes No checks are made that these are valid Node values",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "addRoots",
          "normalized": "GraphData a b-\u003eNGroup-\u003eGraphData a b",
          "package": "Graphalyze",
          "partial": "Roots",
          "signature": "GraphData n e-\u003eNGroup-\u003eGraphData n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:addRoots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a filtering function to find extra root nodes to add.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "addRootsBy",
          "package": "Graphalyze",
          "signature": "(LNode n -\u003e Bool) -\u003e GraphData n e -\u003e GraphData n e",
          "source": "src/Data-Graph-Analysis-Types.html#addRootsBy",
          "type": "function"
        },
        "index": {
          "description": "Use filtering function to find extra root nodes to add",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "addRootsBy",
          "normalized": "(LNode a-\u003eBool)-\u003eGraphData a b-\u003eGraphData a b",
          "package": "Graphalyze",
          "partial": "Roots By",
          "signature": "(LNode n-\u003eBool)-\u003eGraphData n e-\u003eGraphData n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:addRootsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an algorithm to the data to be analysed.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "applyAlg",
          "package": "Graphalyze",
          "signature": "(AGr n e -\u003e a) -\u003e GraphData n e -\u003e a",
          "source": "src/Data-Graph-Analysis-Types.html#applyAlg",
          "type": "function"
        },
        "index": {
          "description": "Apply an algorithm to the data to be analysed",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "applyAlg",
          "normalized": "(AGr a b-\u003ec)-\u003eGraphData a b-\u003ec",
          "package": "Graphalyze",
          "partial": "Alg",
          "signature": "(AGr n e-\u003ea)-\u003eGraphData n e-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:applyAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an algorithm that requires knowledge about whether the\n   graph is directed (\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e) or undirected (\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e) to the data to\n   be analysed.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "applyDirAlg",
          "package": "Graphalyze",
          "signature": "(Bool -\u003e AGr n e -\u003e a) -\u003e GraphData n e -\u003e a",
          "source": "src/Data-Graph-Analysis-Types.html#applyDirAlg",
          "type": "function"
        },
        "index": {
          "description": "Apply an algorithm that requires knowledge about whether the graph is directed True or undirected False to the data to be analysed",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "applyDirAlg",
          "normalized": "(Bool-\u003eAGr a b-\u003ec)-\u003eGraphData a b-\u003ec",
          "package": "Graphalyze",
          "partial": "Dir Alg",
          "signature": "(Bool-\u003eAGr n e-\u003ea)-\u003eGraphData n e-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:applyDirAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Types",
          "name": "clust",
          "package": "Graphalyze",
          "signature": "Int",
          "source": "src/Data-Graph-Analysis-Types.html#GenCluster",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "clust",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:clust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cluster the node label belongs in.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "cluster",
          "package": "Graphalyze",
          "signature": "cl -\u003e Cluster cl",
          "source": "src/Data-Graph-Analysis-Types.html#cluster",
          "type": "method"
        },
        "index": {
          "description": "The cluster the node label belongs in",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "cluster",
          "normalized": "a-\u003eCluster a",
          "package": "Graphalyze",
          "signature": "cl-\u003eCluster cl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:cluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the data this graph represents\n   directed in nature?\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "directedData",
          "package": "Graphalyze",
          "signature": "Bool",
          "source": "src/Data-Graph-Analysis-Types.html#GraphData",
          "type": "function"
        },
        "index": {
          "description": "Is the data this graph represents directed in nature",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "directedData",
          "package": "Graphalyze",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:directedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe use a graph type with no edge labels.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "graph",
          "package": "Graphalyze",
          "signature": "AGr n e",
          "source": "src/Data-Graph-Analysis-Types.html#GraphData",
          "type": "function"
        },
        "index": {
          "description": "We use graph type with no edge labels",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "graph",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all the data points.\n   This might be useful in circumstances where you want to reduce\n   the data type used to a simpler one, etc.  The function is also\n   applied to the datums in \u003ccode\u003e\u003ca\u003eunusedRelationships\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "mapAllNodes",
          "package": "Graphalyze",
          "signature": "(a -\u003e b) -\u003e GraphData a e -\u003e GraphData b e",
          "source": "src/Data-Graph-Analysis-Types.html#mapAllNodes",
          "type": "function"
        },
        "index": {
          "description": "Apply function to all the data points This might be useful in circumstances where you want to reduce the data type used to simpler one etc The function is also applied to the datums in unusedRelationships",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "mapAllNodes",
          "normalized": "(a-\u003eb)-\u003eGraphData a c-\u003eGraphData b c",
          "package": "Graphalyze",
          "partial": "All Nodes",
          "signature": "(a-\u003eb)-\u003eGraphData a e-\u003eGraphData b e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:mapAllNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the first function to nodes in the graph, and the second\n   function to those unknown datums in \u003ccode\u003e\u003ca\u003eunusedRelationships\u003c/a\u003e\u003c/code\u003e.\n   As a sample reason for this function, it can be used to apply a\n   two-part constructor (e.g. \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e) to\n   the nodes such that the wanted and unwanted datums can be\n   differentiated before calling \u003ccode\u003e\u003ca\u003emergeUnused\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "mapNodeType",
          "package": "Graphalyze",
          "signature": "(a -\u003e b) -\u003e (a -\u003e b) -\u003e GraphData a e -\u003e GraphData b e",
          "source": "src/Data-Graph-Analysis-Types.html#mapNodeType",
          "type": "function"
        },
        "index": {
          "description": "Apply the first function to nodes in the graph and the second function to those unknown datums in unusedRelationships As sample reason for this function it can be used to apply two-part constructor e.g Left and Right from Either to the nodes such that the wanted and unwanted datums can be differentiated before calling mergeUnused",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "mapNodeType",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003eGraphData a c-\u003eGraphData b c",
          "package": "Graphalyze",
          "partial": "Node Type",
          "signature": "(a-\u003eb)-\u003e(a-\u003eb)-\u003eGraphData a e-\u003eGraphData b e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:mapNodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge the \u003ccode\u003e\u003ca\u003eunusedRelationships\u003c/a\u003e\u003c/code\u003e into the graph by adding the\n   appropriate nodes.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "mergeUnused",
          "package": "Graphalyze",
          "signature": "GraphData n e -\u003e GraphData n e",
          "source": "src/Data-Graph-Analysis-Types.html#mergeUnused",
          "type": "function"
        },
        "index": {
          "description": "Merge the unusedRelationships into the graph by adding the appropriate nodes",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "mergeUnused",
          "normalized": "GraphData a b-\u003eGraphData a b",
          "package": "Graphalyze",
          "partial": "Unused",
          "signature": "GraphData n e-\u003eGraphData n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:mergeUnused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Types",
          "name": "nLbl",
          "package": "Graphalyze",
          "signature": "a",
          "source": "src/Data-Graph-Analysis-Types.html#GenCluster",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "nLbl",
          "package": "Graphalyze",
          "partial": "Lbl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:nLbl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual label.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "nodeLabel",
          "package": "Graphalyze",
          "signature": "cl -\u003e NodeLabel cl",
          "source": "src/Data-Graph-Analysis-Types.html#nodeLabel",
          "type": "method"
        },
        "index": {
          "description": "The actual label",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "nodeLabel",
          "normalized": "a-\u003eNodeLabel a",
          "package": "Graphalyze",
          "partial": "Label",
          "signature": "cl-\u003eNodeLabel cl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:nodeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Types",
          "name": "plabel",
          "package": "Graphalyze",
          "signature": "a",
          "source": "src/Data-Graph-Analysis-Types.html#PosLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "plabel",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:plabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Types",
          "name": "pnode",
          "package": "Graphalyze",
          "signature": "Node",
          "source": "src/Data-Graph-Analysis-Types.html#PosLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "pnode",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:pnode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to set \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunusedRelationships\u003c/a\u003e\u003c/code\u003e = []\u003c/code\u003e.  This is of use when\n   they are unneeded or because there is no sensible mapping\n   function to use when applying a mapping function to the nodes in\n   the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "removeUnused",
          "package": "Graphalyze",
          "signature": "GraphData n e -\u003e GraphData n e",
          "source": "src/Data-Graph-Analysis-Types.html#removeUnused",
          "type": "function"
        },
        "index": {
          "description": "Used to set unusedRelationships This is of use when they are unneeded or because there is no sensible mapping function to use when applying mapping function to the nodes in the graph",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "removeUnused",
          "normalized": "GraphData a b-\u003eGraphData a b",
          "package": "Graphalyze",
          "partial": "Unused",
          "signature": "GraphData n e-\u003eGraphData n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:removeUnused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnused relationships (i.e. not in\n   the actual graph).  These are the\n   edges containing nodes not in the\n   graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "unusedRelationships",
          "package": "Graphalyze",
          "signature": "[Rel n e]",
          "source": "src/Data-Graph-Analysis-Types.html#GraphData",
          "type": "function"
        },
        "index": {
          "description": "Unused relationships i.e not in the actual graph These are the edges containing nodes not in the graph",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "unusedRelationships",
          "normalized": "[Rel a b]",
          "package": "Graphalyze",
          "partial": "Relationships",
          "signature": "[Rel n e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:unusedRelationships"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the current graph by applying a function to it.  To\n   ensure type safety, \u003ccode\u003e\u003ca\u003eremoveUnused\u003c/a\u003e\u003c/code\u003e is applied.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "updateGraph",
          "package": "Graphalyze",
          "signature": "(AGr a b -\u003e AGr c d) -\u003e GraphData a b -\u003e GraphData c d",
          "source": "src/Data-Graph-Analysis-Types.html#updateGraph",
          "type": "function"
        },
        "index": {
          "description": "Replace the current graph by applying function to it To ensure type safety removeUnused is applied",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "updateGraph",
          "normalized": "(AGr a b-\u003eAGr c d)-\u003eGraphData a b-\u003eGraphData c d",
          "package": "Graphalyze",
          "partial": "Graph",
          "signature": "(AGr a b-\u003eAGr c d)-\u003eGraphData a b-\u003eGraphData c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:updateGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the current graph by applying a function to it, where the\n   function depends on whether the graph is directed (\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e) or\n   undirected (\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e).  To ensure type safety, \u003ccode\u003e\u003ca\u003eremoveUnused\u003c/a\u003e\u003c/code\u003e is\n   applied.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "updateGraph'",
          "package": "Graphalyze",
          "signature": "(Bool -\u003e AGr a b -\u003e AGr c d) -\u003e GraphData a b -\u003e GraphData c d",
          "source": "src/Data-Graph-Analysis-Types.html#updateGraph%27",
          "type": "function"
        },
        "index": {
          "description": "Replace the current graph by applying function to it where the function depends on whether the graph is directed True or undirected False To ensure type safety removeUnused is applied",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "updateGraph'",
          "normalized": "(Bool-\u003eAGr a b-\u003eAGr c d)-\u003eGraphData a b-\u003eGraphData c d",
          "package": "Graphalyze",
          "partial": "Graph'",
          "signature": "(Bool-\u003eAGr a b-\u003eAGr c d)-\u003eGraphData a b-\u003eGraphData c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:updateGraph-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expected root nodes in the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "wantedRootNodes",
          "package": "Graphalyze",
          "signature": "NGroup",
          "source": "src/Data-Graph-Analysis-Types.html#GraphData",
          "type": "function"
        },
        "index": {
          "description": "The expected root nodes in the graph",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "wantedRootNodes",
          "package": "Graphalyze",
          "partial": "Root Nodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:wantedRootNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expected roots in the data to be analysed.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Types",
          "name": "wantedRoots",
          "package": "Graphalyze",
          "signature": "GraphData n e -\u003e LNGroup n",
          "source": "src/Data-Graph-Analysis-Types.html#wantedRoots",
          "type": "function"
        },
        "index": {
          "description": "The expected roots in the data to be analysed",
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "wantedRoots",
          "normalized": "GraphData a b-\u003eLNGroup a",
          "package": "Graphalyze",
          "partial": "Roots",
          "signature": "GraphData n e-\u003eLNGroup n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:wantedRoots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Types",
          "name": "xPos",
          "package": "Graphalyze",
          "signature": "Int",
          "source": "src/Data-Graph-Analysis-Types.html#PosLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "xPos",
          "package": "Graphalyze",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:xPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Types",
          "name": "yPos",
          "package": "Graphalyze",
          "signature": "Int",
          "source": "src/Data-Graph-Analysis-Types.html#PosLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Types",
          "module": "Data.Graph.Analysis.Types",
          "name": "yPos",
          "package": "Graphalyze",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Types.html#v:yPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines various utility functions used throughout.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "Utils",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines various utility functions used throughout",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "Utils",
          "package": "Graphalyze",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the labels for a list of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es.\n   It is assumed that each \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is indeed present in the given graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "addLabels",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [Node] -\u003e [LNode a]",
          "source": "src/Data-Graph-Analysis-Internal.html#addLabels",
          "type": "function"
        },
        "index": {
          "description": "Obtain the labels for list of Node It is assumed that each Node is indeed present in the given graph",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "addLabels",
          "normalized": "a b c-\u003e[Node]-\u003e[LNode b]",
          "package": "Graphalyze",
          "partial": "Labels",
          "signature": "g a b-\u003e[Node]-\u003e[LNode a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:addLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the labels for a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es.\n   It is assumed that each \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is indeed present in the given graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "addLabels'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e Set Node -\u003e Set (LNode a)",
          "source": "src/Data-Graph-Analysis-Internal.html#addLabels%27",
          "type": "function"
        },
        "index": {
          "description": "Obtain the labels for Set of Node It is assumed that each Node is indeed present in the given graph",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "addLabels'",
          "normalized": "a b c-\u003eSet Node-\u003eSet(LNode b)",
          "package": "Graphalyze",
          "partial": "Labels'",
          "signature": "g a b-\u003eSet Node-\u003eSet(LNode a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:addLabels-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the length of each sublist.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "addLengths",
          "package": "Graphalyze",
          "signature": "[[a]] -\u003e [(Int, [a])]",
          "source": "src/Data-Graph-Analysis-Utils.html#addLengths",
          "type": "function"
        },
        "index": {
          "description": "Add the length of each sublist",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "addLengths",
          "normalized": "[[a]]-\u003e[(Int,[a])]",
          "package": "Graphalyze",
          "partial": "Lengths",
          "signature": "[[a]]-\u003e[(Int,[a])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:addLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e of the size of each cluster.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "clusterCount",
          "package": "Graphalyze",
          "signature": "g (GenCluster a) b -\u003e IntMap Int",
          "source": "src/Data-Graph-Analysis-Utils.html#clusterCount",
          "type": "function"
        },
        "index": {
          "description": "Create an IntMap of the size of each cluster",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "clusterCount",
          "normalized": "a(GenCluster b)c-\u003eIntMap Int",
          "package": "Graphalyze",
          "partial": "Count",
          "signature": "g(GenCluster a)b-\u003eIntMap Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:clusterCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjoin duplicate edges by grouping the labels together.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "compact",
          "package": "Graphalyze",
          "signature": "gr a b -\u003e gr a [b]",
          "source": "src/Data-Graph-Analysis-Utils.html#compact",
          "type": "function"
        },
        "index": {
          "description": "Adjoin duplicate edges by grouping the labels together",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "compact",
          "normalized": "a b c-\u003ea b[c]",
          "package": "Graphalyze",
          "signature": "gr a b-\u003egr a[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:compact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompact the graph by counting how many multiple edges there are\n   (considering only the two nodes and not the labels).\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "compact'",
          "package": "Graphalyze",
          "signature": "gr a b -\u003e gr a Int",
          "source": "src/Data-Graph-Analysis-Utils.html#compact%27",
          "type": "function"
        },
        "index": {
          "description": "Compact the graph by counting how many multiple edges there are considering only the two nodes and not the labels",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "compact'",
          "normalized": "a b c-\u003ea b Int",
          "package": "Graphalyze",
          "signature": "gr a b-\u003egr a Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:compact-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompact the graph by adjoining identical duplicate edges.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "compactSame",
          "package": "Graphalyze",
          "signature": "gr a b -\u003e gr a (Int, b)",
          "source": "src/Data-Graph-Analysis-Utils.html#compactSame",
          "type": "function"
        },
        "index": {
          "description": "Compact the graph by adjoining identical duplicate edges",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "compactSame",
          "normalized": "a b c-\u003ea b(Int,c)",
          "package": "Graphalyze",
          "partial": "Same",
          "signature": "gr a b-\u003egr a(Int,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:compactSame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a cluster-lookup \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "createLookup",
          "package": "Graphalyze",
          "signature": "[[Node]] -\u003e IntMap Int",
          "source": "src/Data-Graph-Analysis-Utils.html#createLookup",
          "type": "function"
        },
        "index": {
          "description": "Create cluster-lookup IntMap",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "createLookup",
          "normalized": "[[Node]]-\u003eIntMap Int",
          "package": "Graphalyze",
          "partial": "Lookup",
          "signature": "[[Node]]-\u003eIntMap Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:createLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete these labelled nodes from the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "delLNodes",
          "package": "Graphalyze",
          "signature": "LNGroup a -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Analysis-Utils.html#delLNodes",
          "type": "function"
        },
        "index": {
          "description": "Delete these labelled nodes from the graph",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "delLNodes",
          "normalized": "LNGroup a-\u003eb a c-\u003eb a c",
          "package": "Graphalyze",
          "partial": "LNodes",
          "signature": "LNGroup a-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:delLNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe label of an \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "eLabel",
          "package": "Graphalyze",
          "signature": "LEdge b -\u003e b",
          "source": "src/Data-Graph-Analysis-Utils.html#eLabel",
          "type": "function"
        },
        "index": {
          "description": "The label of an LEdge",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "eLabel",
          "normalized": "LEdge a-\u003ea",
          "package": "Graphalyze",
          "partial": "Label",
          "signature": "LEdge b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:eLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "edge",
          "package": "Graphalyze",
          "signature": "LEdge b -\u003e Edge",
          "source": "src/Data-Graph-Analysis-Utils.html#edge",
          "type": "function"
        },
        "index": {
          "description": "Extract the Edge from the LEdge",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "edge",
          "normalized": "LEdge a-\u003eEdge",
          "package": "Graphalyze",
          "signature": "LEdge b-\u003eEdge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all the labelled nodes in the graph that match the given predicate.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "filterNodes",
          "package": "Graphalyze",
          "signature": "(g a b -\u003e LNode a -\u003e Bool) -\u003e g a b -\u003e [LNode a]",
          "source": "src/Data-Graph-Analysis-Internal.html#filterNodes",
          "type": "function"
        },
        "index": {
          "description": "Find all the labelled nodes in the graph that match the given predicate",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "filterNodes",
          "normalized": "(a b c-\u003eLNode b-\u003eBool)-\u003ea b c-\u003e[LNode b]",
          "package": "Graphalyze",
          "partial": "Nodes",
          "signature": "(g a b-\u003eLNode a-\u003eBool)-\u003eg a b-\u003e[LNode a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:filterNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all the nodes in the graph that match the given predicate.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "filterNodes'",
          "package": "Graphalyze",
          "signature": "(g a b -\u003e Node -\u003e Bool) -\u003e g a b -\u003e [Node]",
          "source": "src/Data-Graph-Analysis-Internal.html#filterNodes%27",
          "type": "function"
        },
        "index": {
          "description": "Find all the nodes in the graph that match the given predicate",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "filterNodes'",
          "normalized": "(a b c-\u003eNode-\u003eBool)-\u003ea b c-\u003e[Node]",
          "package": "Graphalyze",
          "partial": "Nodes'",
          "signature": "(g a b-\u003eNode-\u003eBool)-\u003eg a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:filterNodes-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the fixed point of a function with the given initial value.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "fixPoint",
          "package": "Graphalyze",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Data-Graph-Analysis-Utils.html#fixPoint",
          "type": "function"
        },
        "index": {
          "description": "Find the fixed point of function with the given initial value",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "fixPoint",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "Graphalyze",
          "partial": "Point",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:fixPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the fixed point of a function with the given initial value,\n   using the given equality function.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "fixPointBy",
          "package": "Graphalyze",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Data-Graph-Analysis-Utils.html#fixPointBy",
          "type": "function"
        },
        "index": {
          "description": "Find the fixed point of function with the given initial value using the given equality function",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "fixPointBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "Graphalyze",
          "partial": "Point By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:fixPointBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the fixed point of a graph transformation function.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "fixPointGraphs",
          "package": "Graphalyze",
          "signature": "(g a b -\u003e g a b) -\u003e g a b -\u003e g a b",
          "source": "src/Data-Graph-Analysis-Utils.html#fixPointGraphs",
          "type": "function"
        },
        "index": {
          "description": "Find the fixed point of graph transformation function",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "fixPointGraphs",
          "normalized": "(a b c-\u003ea b c)-\u003ea b c-\u003ea b c",
          "package": "Graphalyze",
          "partial": "Point Graphs",
          "signature": "(g a b-\u003eg a b)-\u003eg a b-\u003eg a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:fixPointGraphs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the labels for a list of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es.\n   It is assumed that each \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is indeed present in the given graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "getLabels",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [Node] -\u003e [a]",
          "source": "src/Data-Graph-Analysis-Internal.html#getLabels",
          "type": "function"
        },
        "index": {
          "description": "Obtain the labels for list of Node It is assumed that each Node is indeed present in the given graph",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "getLabels",
          "normalized": "a b c-\u003e[Node]-\u003e[b]",
          "package": "Graphalyze",
          "partial": "Labels",
          "signature": "g a b-\u003e[Node]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:getLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the labels for a list of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es.\n   It is assumed that each \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is indeed present in the given graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "getLabels'",
          "package": "Graphalyze",
          "signature": "g a b -\u003e Set Node -\u003e Set a",
          "source": "src/Data-Graph-Analysis-Internal.html#getLabels%27",
          "type": "function"
        },
        "index": {
          "description": "Obtain the labels for list of Node It is assumed that each Node is indeed present in the given graph",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "getLabels'",
          "normalized": "a b c-\u003eSet Node-\u003eSet b",
          "package": "Graphalyze",
          "partial": "Labels'",
          "signature": "g a b-\u003eSet Node-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:getLabels-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the positions of the nodes in the graph, as found using\n   Graphviz.  The \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e parameter denotes if the graph is directed\n   or not.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "getPositions",
          "package": "Graphalyze",
          "signature": "Bool -\u003e gr a b -\u003e [PosLabel a]",
          "source": "src/Data-Graph-Analysis-Utils.html#getPositions",
          "type": "function"
        },
        "index": {
          "description": "Returns the positions of the nodes in the graph as found using Graphviz The Bool parameter denotes if the graph is directed or not",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "getPositions",
          "normalized": "Bool-\u003ea b c-\u003e[PosLabel b]",
          "package": "Graphalyze",
          "partial": "Positions",
          "signature": "Bool-\u003egr a b-\u003e[PosLabel a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:getPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup elements by the given grouping function.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "groupElems",
          "package": "Graphalyze",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [(b, [a])]",
          "source": "src/Data-Graph-Analysis-Utils.html#groupElems",
          "type": "function"
        },
        "index": {
          "description": "Group elements by the given grouping function",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "groupElems",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[(b,[a])]",
          "package": "Graphalyze",
          "partial": "Elems",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[(b,[a])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:groupElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe label of an \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "label",
          "package": "Graphalyze",
          "signature": "LNode a -\u003e a",
          "source": "src/Data-Graph-Analysis-Internal.html#label",
          "type": "function"
        },
        "index": {
          "description": "The label of an LNode",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "label",
          "normalized": "LNode a-\u003ea",
          "package": "Graphalyze",
          "signature": "LNode a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe labels of all nodes in a tree.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "labels",
          "package": "Graphalyze",
          "signature": "g a b -\u003e [a]",
          "source": "src/Data-Graph-Analysis-Utils.html#labels",
          "type": "function"
        },
        "index": {
          "description": "The labels of all nodes in tree",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "labels",
          "normalized": "a b c-\u003e[b]",
          "package": "Graphalyze",
          "signature": "g a b-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:labels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis.Utils",
          "name": "lengthSort",
          "package": "Graphalyze",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Data-Graph-Analysis-Utils.html#lengthSort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "lengthSort",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "Graphalyze",
          "partial": "Sort",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:lengthSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf we need to only tell if the list contains more than \u003ccode\u003en\u003c/code\u003e elements,\n   there's no need to find its length.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "longerThan",
          "package": "Graphalyze",
          "signature": "Int -\u003e [a] -\u003e Bool",
          "source": "src/Data-Graph-Analysis-Utils.html#longerThan",
          "type": "function"
        },
        "index": {
          "description": "If we need to only tell if the list contains more than elements there no need to find its length",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "longerThan",
          "normalized": "Int-\u003e[a]-\u003eBool",
          "package": "Graphalyze",
          "partial": "Than",
          "signature": "Int-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:longerThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the longest list in a list of lists.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "longest",
          "package": "Graphalyze",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Data-Graph-Analysis-Utils.html#longest",
          "type": "function"
        },
        "index": {
          "description": "Returns the longest list in list of lists",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "longest",
          "normalized": "[[a]]-\u003e[a]",
          "package": "Graphalyze",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:longest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient mean function by Don Stewart, available from:\n   \u003ca\u003ehttp://cgi.cse.unsw.edu.au/~dons/blog/2008/05/16#fast\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "mean",
          "package": "Graphalyze",
          "signature": "[Double] -\u003e Double",
          "source": "src/Data-Graph-Analysis-Utils.html#mean",
          "type": "function"
        },
        "index": {
          "description": "An efficient mean function by Don Stewart available from http cgi.cse.unsw.edu.au dons blog fast",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "mean",
          "normalized": "[Double]-\u003eDouble",
          "package": "Graphalyze",
          "signature": "[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes the graph a simple one, by removing all duplicate edges and loops.\n   The edges removed if duplicates exist are arbitrary.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "mkSimple",
          "package": "Graphalyze",
          "signature": "gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Analysis-Utils.html#mkSimple",
          "type": "function"
        },
        "index": {
          "description": "Makes the graph simple one by removing all duplicate edges and loops The edges removed if duplicates exist are arbitrary",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "mkSimple",
          "normalized": "a b c-\u003ea b c",
          "package": "Graphalyze",
          "partial": "Simple",
          "signature": "gr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:mkSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap over the labels on the nodes, using the node values as well.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "nlmap",
          "package": "Graphalyze",
          "signature": "(LNode a -\u003e c) -\u003e gr a b -\u003e gr c b",
          "source": "src/Data-Graph-Analysis-Utils.html#nlmap",
          "type": "function"
        },
        "index": {
          "description": "Map over the labels on the nodes using the node values as well",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "nlmap",
          "normalized": "(LNode a-\u003eb)-\u003ec a d-\u003ec b d",
          "package": "Graphalyze",
          "signature": "(LNode a-\u003ec)-\u003egr a b-\u003egr c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:nlmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe node number of an \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "node",
          "package": "Graphalyze",
          "signature": "LNode a -\u003e Node",
          "source": "src/Data-Graph-Analysis-Internal.html#node",
          "type": "function"
        },
        "index": {
          "description": "The node number of an LNode",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "node",
          "normalized": "LNode a-\u003eNode",
          "package": "Graphalyze",
          "signature": "LNode a-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a pseudo-inverse of \u003ccode\u003e\u003ca\u003eundir\u003c/a\u003e\u003c/code\u003e: any edges that are both successor\n   and predecessor become successor edges only.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "oneWay",
          "package": "Graphalyze",
          "signature": "g a b -\u003e g a b",
          "source": "src/Data-Graph-Analysis-Utils.html#oneWay",
          "type": "function"
        },
        "index": {
          "description": "This is pseudo-inverse of undir any edges that are both successor and predecessor become successor edges only",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "oneWay",
          "normalized": "a b c-\u003ea b c",
          "package": "Graphalyze",
          "partial": "Way",
          "signature": "g a b-\u003eg a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:oneWay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the actual \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003es from an \u003ccode\u003e\u003ca\u003eLPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "pathValues",
          "package": "Graphalyze",
          "signature": "LPath a -\u003e [LNode a]",
          "source": "src/Data-Graph-Analysis-Utils.html#pathValues",
          "type": "function"
        },
        "index": {
          "description": "Extract the actual LNode from an LPath",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "pathValues",
          "normalized": "LPath a-\u003e[LNode a]",
          "package": "Graphalyze",
          "partial": "Values",
          "signature": "LPath a-\u003e[LNode a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:pathValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the cluster values in the graph by having the largest cluster\n   have the smallest cluster label.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "reCluster",
          "package": "Graphalyze",
          "signature": "g (GenCluster a) b -\u003e g (GenCluster a) b",
          "source": "src/Data-Graph-Analysis-Utils.html#reCluster",
          "type": "function"
        },
        "index": {
          "description": "Change the cluster values in the graph by having the largest cluster have the smallest cluster label",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "reCluster",
          "normalized": "a(GenCluster b)c-\u003ea(GenCluster b)c",
          "package": "Graphalyze",
          "partial": "Cluster",
          "signature": "g(GenCluster a)b-\u003eg(GenCluster a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:reCluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the cluster values using the given lookup \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "reClusterBy",
          "package": "Graphalyze",
          "signature": "IntMap Int -\u003e g (GenCluster a) b -\u003e g (GenCluster a) b",
          "source": "src/Data-Graph-Analysis-Utils.html#reClusterBy",
          "type": "function"
        },
        "index": {
          "description": "Change the cluster values using the given lookup IntMap",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "reClusterBy",
          "normalized": "IntMap Int-\u003ea(GenCluster b)c-\u003ea(GenCluster b)c",
          "package": "Graphalyze",
          "partial": "Cluster By",
          "signature": "IntMap Int-\u003eg(GenCluster a)b-\u003eg(GenCluster a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:reClusterBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when the clusters are assigned in a lookup \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "setCluster",
          "package": "Graphalyze",
          "signature": "IntMap Int -\u003e gr a b -\u003e gr (GenCluster a) b",
          "source": "src/Data-Graph-Analysis-Utils.html#setCluster",
          "type": "function"
        },
        "index": {
          "description": "Used when the clusters are assigned in lookup IntMap instance",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "setCluster",
          "normalized": "IntMap Int-\u003ea b c-\u003ea(GenCluster b)c",
          "package": "Graphalyze",
          "partial": "Cluster",
          "signature": "IntMap Int-\u003egr a b-\u003egr(GenCluster a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:setCluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShuffle a list of elements.\n   This isn't the most efficient version, but should serve for small lists.\n   Adapted from:\n   \u003ca\u003ehttp://www.cse.unsw.edu.au/~tsewell/shuffle.html\u003c/a\u003e\n   The adaptation mainly involved altering the code so that the new\n   random seed is also returned.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "shuffle",
          "package": "Graphalyze",
          "signature": "g -\u003e [a] -\u003e ([a], g)",
          "source": "src/Data-Graph-Analysis-Utils.html#shuffle",
          "type": "function"
        },
        "index": {
          "description": "Shuffle list of elements This isn the most efficient version but should serve for small lists Adapted from http www.cse.unsw.edu.au tsewell shuffle.html The adaptation mainly involved altering the code so that the new random seed is also returned",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "shuffle",
          "normalized": "a-\u003e[b]-\u003e([b],a)",
          "package": "Graphalyze",
          "signature": "g-\u003e[a]-\u003e([a],g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn true if and only if the list contains a single element.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "single",
          "package": "Graphalyze",
          "signature": "[a] -\u003e Bool",
          "source": "src/Data-Graph-Analysis-Utils.html#single",
          "type": "function"
        },
        "index": {
          "description": "Return true if and only if the list contains single element",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "single",
          "normalized": "[a]-\u003eBool",
          "package": "Graphalyze",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the unique elements of the list in ascending order,\n   as well as the minimum and maximum elements.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "sortMinMax",
          "package": "Graphalyze",
          "signature": "[a] -\u003e ([a], a, a)",
          "source": "src/Data-Graph-Analysis-Utils.html#sortMinMax",
          "type": "function"
        },
        "index": {
          "description": "Returns the unique elements of the list in ascending order as well as the minimum and maximum elements",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "sortMinMax",
          "normalized": "[a]-\u003e([a],a,a)",
          "package": "Graphalyze",
          "partial": "Min Max",
          "signature": "[a]-\u003e([a],a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:sortMinMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the mean and standard deviation of a list of elements.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "statistics",
          "package": "Graphalyze",
          "signature": "[Double]-\u003e (Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Calculate the mean and standard deviation of list of elements",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "statistics",
          "normalized": "[Double]-\u003e(Double,Double)",
          "package": "Graphalyze",
          "signature": "[Double]-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:statistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the mean and standard deviation of a list of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "statistics'",
          "package": "Graphalyze",
          "signature": "[Int]-\u003e (Int, Int)",
          "type": "function"
        },
        "index": {
          "description": "Calculate the mean and standard deviation of list of Int values",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "statistics'",
          "normalized": "[Int]-\u003e(Int,Int)",
          "package": "Graphalyze",
          "signature": "[Int]-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:statistics-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the graph into one with positions stored in the node\n   labels.  The \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e parameter denotes if the graph is directed or\n   not.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "toPosGraph",
          "package": "Graphalyze",
          "signature": "Bool -\u003e gr a b -\u003e gr (PosLabel a) b",
          "source": "src/Data-Graph-Analysis-Utils.html#toPosGraph",
          "type": "function"
        },
        "index": {
          "description": "Convert the graph into one with positions stored in the node labels The Bool parameter denotes if the graph is directed or not",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "toPosGraph",
          "normalized": "Bool-\u003ea b c-\u003ea(PosLabel b)c",
          "package": "Graphalyze",
          "partial": "Pos Graph",
          "signature": "Bool-\u003egr a b-\u003egr(PosLabel a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:toPosGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake the graph undirected, i.e. for every edge from A to B, there\n   exists an edge from B to A.  The provided function\n   \u003ccode\u003e\u003ca\u003eundir\u003c/a\u003e\u003c/code\u003e duplicates loops as well, which\n   isn't wanted.  It is assumed that no edges are already duplicates\n   [i.e. if there exists an edge (n1,n2), then there doesn't exist\n   (n2,n1)].  This function also preserves edge labels: if two edges\n   exist between two nodes with different edge labels, then both edges\n   will be duplicated.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Utils",
          "name": "undir",
          "package": "Graphalyze",
          "signature": "gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Analysis-Utils.html#undir",
          "type": "function"
        },
        "index": {
          "description": "Make the graph undirected i.e for every edge from to there exists an edge from to The provided function undir duplicates loops as well which isn wanted It is assumed that no edges are already duplicates i.e if there exists an edge n1 n2 then there doesn exist n2 n1 This function also preserves edge labels if two edges exist between two nodes with different edge labels then both edges will be duplicated",
          "hierarchy": "Data Graph Analysis Utils",
          "module": "Data.Graph.Analysis.Utils",
          "name": "undir",
          "normalized": "a b c-\u003ea b c",
          "package": "Graphalyze",
          "signature": "gr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Utils.html#v:undir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to assist in visualising graphs and components of graphs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "Visualisation",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis-Visualisation.html",
          "type": "module"
        },
        "index": {
          "description": "Functions to assist in visualising graphs and components of graphs",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "Visualisation",
          "package": "Graphalyze",
          "partial": "Visualisation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to convert an \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e to the required \u003ccode\u003e\u003ca\u003eLNodeCluster\u003c/a\u003e\u003c/code\u003e\n   for use with the GraphViz library.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "assignCluster",
          "package": "Graphalyze",
          "signature": "LNode cl -\u003e LNodeCluster (Cluster cl) (NodeLabel cl)",
          "source": "src/Data-Graph-Analysis-Visualisation.html#assignCluster",
          "type": "function"
        },
        "index": {
          "description": "function to convert an LNode to the required LNodeCluster for use with the GraphViz library",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "assignCluster",
          "normalized": "LNode a-\u003eLNodeCluster(Cluster a)(NodeLabel a)",
          "package": "Graphalyze",
          "partial": "Cluster",
          "signature": "LNode cl-\u003eLNodeCluster(Cluster cl)(NodeLabel cl)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:assignCluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to convert the \u003ccode\u003eString\u003c/code\u003e form of a list into\n   as much of a square shape as possible, using a single\n   space as a separation string.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "blockPrint",
          "package": "Graphalyze",
          "signature": "[a] -\u003e String",
          "source": "src/Data-Graph-Analysis-Visualisation.html#blockPrint",
          "type": "function"
        },
        "index": {
          "description": "Attempt to convert the String form of list into as much of square shape as possible using single space as separation string",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "blockPrint",
          "normalized": "[a]-\u003eString",
          "package": "Graphalyze",
          "partial": "Print",
          "signature": "[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:blockPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to convert a list of \u003ccode\u003eString\u003c/code\u003es into a single \u003ccode\u003eString\u003c/code\u003e\n   that is roughly a square shape, with a single space as a row\n   separator.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "blockPrint'",
          "package": "Graphalyze",
          "signature": "[String] -\u003e String",
          "source": "src/Data-Graph-Analysis-Visualisation.html#blockPrint%27",
          "type": "function"
        },
        "index": {
          "description": "Attempt to convert list of String into single String that is roughly square shape with single space as row separator",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "blockPrint'",
          "normalized": "[String]-\u003eString",
          "package": "Graphalyze",
          "partial": "Print'",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:blockPrint-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to convert the \u003ccode\u003eString\u003c/code\u003e form of a list into\n   as much of a square shape as possible, separating values\n   with commas.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "blockPrintList",
          "package": "Graphalyze",
          "signature": "[a] -\u003e String",
          "source": "src/Data-Graph-Analysis-Visualisation.html#blockPrintList",
          "type": "function"
        },
        "index": {
          "description": "Attempt to convert the String form of list into as much of square shape as possible separating values with commas",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "blockPrintList",
          "normalized": "[a]-\u003eString",
          "package": "Graphalyze",
          "partial": "Print List",
          "signature": "[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:blockPrintList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to combine a list of \u003ccode\u003eString\u003c/code\u003es into as much of a\n   square shape as possible, separating values with commas.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "blockPrintList'",
          "package": "Graphalyze",
          "signature": "[String] -\u003e String",
          "source": "src/Data-Graph-Analysis-Visualisation.html#blockPrintList%27",
          "type": "function"
        },
        "index": {
          "description": "Attempt to combine list of String into as much of square shape as possible separating values with commas",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "blockPrintList'",
          "normalized": "[String]-\u003eString",
          "package": "Graphalyze",
          "partial": "Print List'",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:blockPrintList-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to convert the \u003ccode\u003eString\u003c/code\u003e form of a list into\n   as much of a square shape as possible, using the given\n   separation string between elements in the same row.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "blockPrintWith",
          "package": "Graphalyze",
          "signature": "String -\u003e [a] -\u003e String",
          "source": "src/Data-Graph-Analysis-Visualisation.html#blockPrintWith",
          "type": "function"
        },
        "index": {
          "description": "Attempt to convert the String form of list into as much of square shape as possible using the given separation string between elements in the same row",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "blockPrintWith",
          "normalized": "String-\u003e[a]-\u003eString",
          "package": "Graphalyze",
          "partial": "Print With",
          "signature": "String-\u003e[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:blockPrintWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to convert the combined form of a list of \u003ccode\u003eString\u003c/code\u003es\n   into as much of a square shape as possible, using the given\n   separation string between elements in the same row.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "blockPrintWith'",
          "package": "Graphalyze",
          "signature": "String -\u003e [String] -\u003e String",
          "source": "src/Data-Graph-Analysis-Visualisation.html#blockPrintWith%27",
          "type": "function"
        },
        "index": {
          "description": "Attempt to convert the combined form of list of String into as much of square shape as possible using the given separation string between elements in the same row",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "blockPrintWith'",
          "normalized": "String-\u003e[String]-\u003eString",
          "package": "Graphalyze",
          "partial": "Print With'",
          "signature": "String-\u003e[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:blockPrintWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the \u003ccode\u003e\u003ca\u003eGraphData\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eDotGraph\u003c/a\u003e\u003c/code\u003e format.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "graphviz",
          "package": "Graphalyze",
          "signature": "GraphvizParams Node nl el cl l -\u003e GraphData nl el -\u003e DotGraph Node",
          "source": "src/Data-Graph-Analysis-Visualisation.html#graphviz",
          "type": "function"
        },
        "index": {
          "description": "Convert the GraphData into DotGraph format",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "graphviz",
          "normalized": "GraphvizParams Node a b c d-\u003eGraphData a b-\u003eDotGraph Node",
          "package": "Graphalyze",
          "signature": "GraphvizParams Node nl el cl l-\u003eGraphData nl el-\u003eDotGraph Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:graphviz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the clustered \u003ccode\u003e\u003ca\u003eGraphData\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eDotGraph\u003c/a\u003e\u003c/code\u003e format.\n   Cluster the nodes based upon their \u003ccode\u003e\u003ca\u003eClusterLabel\u003c/a\u003e\u003c/code\u003e clusters.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "graphvizClusters",
          "package": "Graphalyze",
          "signature": "GraphvizParams Node nl el (Cluster nl) (NodeLabel nl) -\u003e GraphData nl el -\u003e DotGraph Node",
          "source": "src/Data-Graph-Analysis-Visualisation.html#graphvizClusters",
          "type": "function"
        },
        "index": {
          "description": "Convert the clustered GraphData into DotGraph format Cluster the nodes based upon their ClusterLabel clusters",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "graphvizClusters",
          "normalized": "GraphvizParams Node a b(Cluster a)(NodeLabel a)-\u003eGraphData a b-\u003eDotGraph Node",
          "package": "Graphalyze",
          "partial": "Clusters",
          "signature": "GraphvizParams Node nl el(Cluster nl)(NodeLabel nl)-\u003eGraphData nl el-\u003eDotGraph Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:graphvizClusters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cross between \u003ccode\u003e\u003ca\u003eapplyDirAlg\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetDirectedness\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "setDir",
          "package": "Graphalyze",
          "signature": "(GraphvizParams Node nl el cl l -\u003e AGr nl el -\u003e a) -\u003e GraphvizParams Node nl el cl l -\u003e GraphData nl el -\u003e a",
          "source": "src/Data-Graph-Analysis-Visualisation.html#setDir",
          "type": "function"
        },
        "index": {
          "description": "cross between applyDirAlg and setDirectedness",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "setDir",
          "normalized": "(GraphvizParams Node a b c d-\u003eAGr a b-\u003ee)-\u003eGraphvizParams Node a b c d-\u003eGraphData a b-\u003ee",
          "package": "Graphalyze",
          "partial": "Dir",
          "signature": "(GraphvizParams Node nl el cl l-\u003eAGr nl el-\u003ea)-\u003eGraphvizParams Node nl el cl l-\u003eGraphData nl el-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:setDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a cycle: copies the first node to the end of the list,\n   and then calls \u003ccode\u003e\u003ca\u003eshowPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "showCycle",
          "package": "Graphalyze",
          "signature": "[a] -\u003e String",
          "source": "src/Data-Graph-Analysis-Visualisation.html#showCycle",
          "type": "function"
        },
        "index": {
          "description": "Print cycle copies the first node to the end of the list and then calls showPath",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "showCycle",
          "normalized": "[a]-\u003eString",
          "package": "Graphalyze",
          "partial": "Cycle",
          "signature": "[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:showCycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a cycle: copies the first node to the end of the list,\n   and then calls \u003ccode\u003e\u003ca\u003eshowPath'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "showCycle'",
          "package": "Graphalyze",
          "signature": "(a -\u003e String) -\u003e [a] -\u003e String",
          "source": "src/Data-Graph-Analysis-Visualisation.html#showCycle%27",
          "type": "function"
        },
        "index": {
          "description": "Print cycle copies the first node to the end of the list and then calls showPath",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "showCycle'",
          "normalized": "(a-\u003eString)-\u003e[a]-\u003eString",
          "package": "Graphalyze",
          "partial": "Cycle'",
          "signature": "(a-\u003eString)-\u003e[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:showCycle-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a group of nodes, with no implicit ordering.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "showNodes",
          "package": "Graphalyze",
          "signature": "[a] -\u003e String",
          "source": "src/Data-Graph-Analysis-Visualisation.html#showNodes",
          "type": "function"
        },
        "index": {
          "description": "Show group of nodes with no implicit ordering",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "showNodes",
          "normalized": "[a]-\u003eString",
          "package": "Graphalyze",
          "partial": "Nodes",
          "signature": "[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:showNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a group of nodes, with no implicit ordering.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "showNodes'",
          "package": "Graphalyze",
          "signature": "(a -\u003e String) -\u003e [a] -\u003e String",
          "source": "src/Data-Graph-Analysis-Visualisation.html#showNodes%27",
          "type": "function"
        },
        "index": {
          "description": "Show group of nodes with no implicit ordering",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "showNodes'",
          "normalized": "(a-\u003eString)-\u003e[a]-\u003eString",
          "package": "Graphalyze",
          "partial": "Nodes'",
          "signature": "(a-\u003eString)-\u003e[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:showNodes-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a path, with \"-\u003e\" between each element.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "showPath",
          "package": "Graphalyze",
          "signature": "[a] -\u003e String",
          "source": "src/Data-Graph-Analysis-Visualisation.html#showPath",
          "type": "function"
        },
        "index": {
          "description": "Print path with between each element",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "showPath",
          "normalized": "[a]-\u003eString",
          "package": "Graphalyze",
          "partial": "Path",
          "signature": "[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:showPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a path, with \"-\u003e\" between each element.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "showPath'",
          "package": "Graphalyze",
          "signature": "(a -\u003e String) -\u003e [a] -\u003e String",
          "source": "src/Data-Graph-Analysis-Visualisation.html#showPath%27",
          "type": "function"
        },
        "index": {
          "description": "Print path with between each element",
          "hierarchy": "Data Graph Analysis Visualisation",
          "module": "Data.Graph.Analysis.Visualisation",
          "name": "showPath'",
          "normalized": "(a-\u003eString)-\u003e[a]-\u003eString",
          "package": "Graphalyze",
          "partial": "Path'",
          "signature": "(a-\u003eString)-\u003e[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis-Visualisation.html#v:showPath-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the root module of the \u003cem\u003eGraphalyze\u003c/em\u003e library, which aims to\n   provide a way of analysing the relationships inherent in discrete\n   data as a graph.\n\u003c/p\u003e\u003cp\u003eThe original version of this library was written as part of my\n   mathematics honours thesis,\n   \u003cem\u003eGraph-Theoretic Analysis of the Relationships in Discrete Data\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Analysis",
          "name": "Analysis",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis.html",
          "type": "module"
        },
        "index": {
          "description": "This is the root module of the Graphalyze library which aims to provide way of analysing the relationships inherent in discrete data as graph The original version of this library was written as part of my mathematics honours thesis Graph-Theoretic Analysis of the Relationships in Discrete Data",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "Analysis",
          "package": "Graphalyze",
          "partial": "Analysis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis represents the information that's being passed in that we want\n   to analyse.  If the graph is undirected, it is better to list each\n   edge once rather than both directions.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "ImportParams",
          "package": "Graphalyze",
          "source": "src/Data-Graph-Analysis.html#ImportParams",
          "type": "data"
        },
        "index": {
          "description": "This represents the information that being passed in that we want to analyse If the graph is undirected it is better to list each edge once rather than both directions",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "ImportParams",
          "package": "Graphalyze",
          "partial": "Import Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#t:ImportParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Analysis",
          "name": "ImpParams",
          "package": "Graphalyze",
          "signature": "ImpParams",
          "source": "src/Data-Graph-Analysis.html#ImportParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "ImpParams",
          "package": "Graphalyze",
          "partial": "Imp Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:ImpParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare the actual roots in the graph with those that are expected\n   (i.e. those in \u003ccode\u003e\u003ca\u003ewantedRootNodes\u003c/a\u003e\u003c/code\u003e).  Returns (in order):\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Those roots that are expected (i.e. elements of \u003ccode\u003e\u003ca\u003ewantedRootNodes\u003c/a\u003e\u003c/code\u003e\n     that are roots).\n\u003c/li\u003e\u003cli\u003e Those roots that are expected but not present (i.e. elements of\n     \u003ccode\u003e\u003ca\u003ewantedRootNodes\u003c/a\u003e\u003c/code\u003e that \u003cem\u003earen't\u003c/em\u003e roots.\n\u003c/li\u003e\u003cli\u003e Unexpected roots (i.e. those roots that aren't present in\n     \u003ccode\u003e\u003ca\u003ewantedRootNodes\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Graph.Analysis",
          "name": "classifyRoots",
          "package": "Graphalyze",
          "signature": "GraphData n e -\u003e (Set Node, Set Node, Set Node)",
          "source": "src/Data-Graph-Analysis.html#classifyRoots",
          "type": "function"
        },
        "index": {
          "description": "Compare the actual roots in the graph with those that are expected i.e those in wantedRootNodes Returns in order Those roots that are expected i.e elements of wantedRootNodes that are roots Those roots that are expected but not present i.e elements of wantedRootNodes that aren roots Unexpected roots i.e those roots that aren present in wantedRootNodes",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "classifyRoots",
          "normalized": "GraphData a b-\u003e(Set Node,Set Node,Set Node)",
          "package": "Graphalyze",
          "partial": "Roots",
          "signature": "GraphData n e-\u003e(Set Node,Set Node,Set Node)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:classifyRoots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003ecollapseAndReplace\u003c/a\u003e\u003c/code\u003e, but also update the\n   \u003ccode\u003e\u003ca\u003ewantedRootNodes\u003c/a\u003e\u003c/code\u003e to contain the possibly compressed nodes.\n   Since the datums they refer to may no longer exist (as they are\n   compressed), \u003ccode\u003e\u003ca\u003eunusedRelationships\u003c/a\u003e\u003c/code\u003e is set to \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "collapseAndUpdate",
          "package": "Graphalyze",
          "signature": "[AGr n e -\u003e [(NGroup, n)]] -\u003e GraphData n e -\u003e GraphData n e",
          "source": "src/Data-Graph-Analysis.html#collapseAndUpdate",
          "type": "function"
        },
        "index": {
          "description": "As with collapseAndReplace but also update the wantedRootNodes to contain the possibly compressed nodes Since the datums they refer to may no longer exist as they are compressed unusedRelationships is set to",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "collapseAndUpdate",
          "normalized": "[AGr a b-\u003e[(NGroup,a)]]-\u003eGraphData a b-\u003eGraphData a b",
          "package": "Graphalyze",
          "partial": "And Update",
          "signature": "[AGr n e-\u003e[(NGroup,n)]]-\u003eGraphData n e-\u003eGraphData n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:collapseAndUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003ecollapseAndUpdate\u003c/a\u003e\u003c/code\u003e, but also includes a lookup \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\n   from the old label to the new.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "collapseAndUpdate'",
          "package": "Graphalyze",
          "signature": "[AGr n e -\u003e [(NGroup, n)]] -\u003e GraphData n e -\u003e (GraphData n e, Map n n)",
          "source": "src/Data-Graph-Analysis.html#collapseAndUpdate%27",
          "type": "function"
        },
        "index": {
          "description": "As with collapseAndUpdate but also includes lookup Map from the old label to the new",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "collapseAndUpdate'",
          "normalized": "[AGr a b-\u003e[(NGroup,a)]]-\u003eGraphData a b-\u003e(GraphData a b,Map a a)",
          "package": "Graphalyze",
          "partial": "And Update'",
          "signature": "[AGr n e-\u003e[(NGroup,n)]]-\u003eGraphData n e-\u003e(GraphData n e,Map n n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:collapseAndUpdate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe discrete points.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "dataPoints",
          "package": "Graphalyze",
          "signature": "[n]",
          "source": "src/Data-Graph-Analysis.html#ImportParams",
          "type": "function"
        },
        "index": {
          "description": "The discrete points",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "dataPoints",
          "normalized": "[a]",
          "package": "Graphalyze",
          "partial": "Points",
          "signature": "[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:dataPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if relationships are symmetric\n   (i.e. an undirected graph).\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "directed",
          "package": "Graphalyze",
          "signature": "Bool",
          "source": "src/Data-Graph-Analysis.html#ImportParams",
          "type": "function"
        },
        "index": {
          "description": "False if relationships are symmetric i.e an undirected graph",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "directed",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:directed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport data into a format suitable for analysis.  This function is\n   \u003cem\u003eedge-safe\u003c/em\u003e: if any datums are listed in the edges of\n   \u003ccode\u003e\u003ca\u003eImportParams\u003c/a\u003e\u003c/code\u003e that aren't listed in the data points, then those\n   edges are ignored.  Thus, no sanitation of the \u003ccode\u003e\u003ca\u003erelationships\u003c/a\u003e\u003c/code\u003e in\n   \u003ccode\u003eImportParams\u003c/code\u003e is necessary.  The unused relations are stored in\n   \u003ccode\u003e\u003ca\u003eunusedRelationships\u003c/a\u003e\u003c/code\u003e.  Note that it is assumed that all datums in\n   \u003ccode\u003e\u003ca\u003eroots\u003c/a\u003e\u003c/code\u003e are also contained within \u003ccode\u003e\u003ca\u003edataPoints\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "importData",
          "package": "Graphalyze",
          "signature": "ImportParams n e -\u003e GraphData n e",
          "source": "src/Data-Graph-Analysis.html#importData",
          "type": "function"
        },
        "index": {
          "description": "Import data into format suitable for analysis This function is edge-safe if any datums are listed in the edges of ImportParams that aren listed in the data points then those edges are ignored Thus no sanitation of the relationships in ImportParams is necessary The unused relations are stored in unusedRelationships Note that it is assumed that all datums in roots are also contained within dataPoints",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "importData",
          "normalized": "ImportParams a b-\u003eGraphData a b",
          "package": "Graphalyze",
          "partial": "Data",
          "signature": "ImportParams n e-\u003eGraphData n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:importData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the nodes that are not reachable from the expected roots\n   (i.e. those in \u003ccode\u003e\u003ca\u003ewantedRootNodes\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "inaccessibleNodes",
          "package": "Graphalyze",
          "signature": "GraphData n e -\u003e Set Node",
          "source": "src/Data-Graph-Analysis.html#inaccessibleNodes",
          "type": "function"
        },
        "index": {
          "description": "Find the nodes that are not reachable from the expected roots i.e those in wantedRootNodes",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "inaccessibleNodes",
          "normalized": "GraphData a b-\u003eSet Node",
          "package": "Graphalyze",
          "partial": "Nodes",
          "signature": "GraphData n e-\u003eSet Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:inaccessibleNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly return those chains (see \u003ccode\u003e\u003ca\u003echainsIn\u003c/a\u003e\u003c/code\u003e) where the non-initial\n   nodes are \u003cem\u003enot\u003c/em\u003e expected roots.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "interiorChains",
          "package": "Graphalyze",
          "signature": "GraphData n e -\u003e [LNGroup n]",
          "source": "src/Data-Graph-Analysis.html#interiorChains",
          "type": "function"
        },
        "index": {
          "description": "Only return those chains see chainsIn where the non-initial nodes are not expected roots",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "interiorChains",
          "normalized": "GraphData a b-\u003e[LNGroup a]",
          "package": "Graphalyze",
          "partial": "Chains",
          "signature": "GraphData n e-\u003e[LNGroup n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:interiorChains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the mean and standard deviations of the lengths of the sublists,\n   as well all those lists more than one standard deviation longer than\n   the mean.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "lengthAnalysis",
          "package": "Graphalyze",
          "signature": "[[a]] -\u003e (Int, Int, [(Int, [a])])",
          "source": "src/Data-Graph-Analysis.html#lengthAnalysis",
          "type": "function"
        },
        "index": {
          "description": "Returns the mean and standard deviations of the lengths of the sublists as well all those lists more than one standard deviation longer than the mean",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "lengthAnalysis",
          "normalized": "[[a]]-\u003e(Int,Int,[(Int,[a])])",
          "package": "Graphalyze",
          "partial": "Analysis",
          "signature": "[[a]]-\u003e(Int,Int,[(Int,[a])])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:lengthAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003elevelGraph\u003c/a\u003e\u003c/code\u003e, but use the expected roots rather than the\n   actual roots.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "levelGraphFromRoot",
          "package": "Graphalyze",
          "signature": "GraphData n e -\u003e GraphData (GenCluster n) e",
          "source": "src/Data-Graph-Analysis.html#levelGraphFromRoot",
          "type": "function"
        },
        "index": {
          "description": "As with levelGraph but use the expected roots rather than the actual roots",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "levelGraphFromRoot",
          "normalized": "GraphData a b-\u003eGraphData(GenCluster a)b",
          "package": "Graphalyze",
          "partial": "Graph From Root",
          "signature": "GraphData n e-\u003eGraphData(GenCluster n)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:levelGraphFromRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe relationships between the points.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "relationships",
          "package": "Graphalyze",
          "signature": "[Rel n e]",
          "source": "src/Data-Graph-Analysis.html#ImportParams",
          "type": "function"
        },
        "index": {
          "description": "The relationships between the points",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "relationships",
          "normalized": "[Rel a b]",
          "package": "Graphalyze",
          "signature": "[Rel n e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:relationships"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expected roots of the graph.\n   If \u003ccode\u003e\u003ccode\u003e\u003ca\u003edirected\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, then this is ignored.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "roots",
          "package": "Graphalyze",
          "signature": "[n]",
          "source": "src/Data-Graph-Analysis.html#ImportParams",
          "type": "function"
        },
        "index": {
          "description": "The expected roots of the graph If directed False then this is ignored",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "roots",
          "normalized": "[a]",
          "package": "Graphalyze",
          "signature": "[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:roots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe library version.\n\u003c/p\u003e",
          "module": "Data.Graph.Analysis",
          "name": "version",
          "package": "Graphalyze",
          "signature": "String",
          "source": "src/Data-Graph-Analysis.html#version",
          "type": "function"
        },
        "index": {
          "description": "The library version",
          "hierarchy": "Data Graph Analysis",
          "module": "Data.Graph.Analysis",
          "name": "version",
          "package": "Graphalyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graphalyze/docs/Data-Graph-Analysis.html#v:version"
      }
    }
  ]
]