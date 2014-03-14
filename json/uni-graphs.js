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
        "word": "uni-graphs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edisplayGraph\u003c/a\u003e\u003c/code\u003e displays something implementing the\n \u003ca\u003eGraph\u003c/a\u003e interface with something implementing with \u003ca\u003eGraphDisp\u003c/a\u003e interface.\n \u003ccode\u003e\u003ca\u003edisplayGraph0\u003c/a\u003e\u003c/code\u003e is a slightly more general version that also returns the\n actual graph.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.DisplayGraph",
          "name": "DisplayGraph",
          "package": "uni-graphs",
          "source": "src/Graphs-DisplayGraph.html",
          "type": "module"
        },
        "index": {
          "description": "displayGraph displays something implementing the Graph interface with something implementing with GraphDisp interface displayGraph0 is slightly more general version that also returns the actual graph",
          "hierarchy": "Graphs DisplayGraph",
          "module": "Graphs.DisplayGraph",
          "name": "DisplayGraph",
          "package": "uni-graphs",
          "partial": "Display Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-DisplayGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.DisplayGraph",
          "name": "DisplayGraph",
          "package": "uni-graphs",
          "source": "src/Graphs-DisplayGraph.html#DisplayGraph",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs DisplayGraph",
          "module": "Graphs.DisplayGraph",
          "name": "DisplayGraph",
          "package": "uni-graphs",
          "partial": "Display Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-DisplayGraph.html#t:DisplayGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.DisplayGraph",
          "name": "displayGraph",
          "package": "uni-graphs",
          "signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e graphParms -\u003e (DisplayGraph -\u003e NodeType -\u003e nodeTypeLabel -\u003e IO (nodeTypeParms Node)) -\u003e (DisplayGraph -\u003e ArcType -\u003e arcTypeLabel -\u003e IO (arcTypeParms Arc)) -\u003e IO DisplayGraph",
          "source": "src/Graphs-DisplayGraph.html#displayGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs DisplayGraph",
          "module": "Graphs.DisplayGraph",
          "name": "displayGraph",
          "normalized": "Graph a b c d e f g h-\u003ei j k l m-\u003eb-\u003e(DisplayGraph-\u003eNodeType-\u003ek-\u003eIO(e Node))-\u003e(DisplayGraph-\u003eArcType-\u003em-\u003eIO(h Arc))-\u003eIO DisplayGraph",
          "package": "uni-graphs",
          "partial": "Graph",
          "signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003egraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003egraphParms-\u003e(DisplayGraph-\u003eNodeType-\u003enodeTypeLabel-\u003eIO(nodeTypeParms Node))-\u003e(DisplayGraph-\u003eArcType-\u003earcTypeLabel-\u003eIO(arcTypeParms Arc))-\u003eIO DisplayGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-DisplayGraph.html#v:displayGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.DisplayGraph",
          "name": "displayGraph0",
          "package": "uni-graphs",
          "signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e graphParms -\u003e (DisplayGraph -\u003e NodeType -\u003e nodeTypeLabel -\u003e IO (nodeTypeParms Node)) -\u003e (DisplayGraph -\u003e ArcType -\u003e arcTypeLabel -\u003e IO (arcTypeParms Arc)) -\u003e IO (DisplayGraph, Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms)",
          "source": "src/Graphs-DisplayGraph.html#displayGraph0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs DisplayGraph",
          "module": "Graphs.DisplayGraph",
          "name": "displayGraph0",
          "normalized": "Graph a b c d e f g h-\u003ei j k l m-\u003eb-\u003e(DisplayGraph-\u003eNodeType-\u003ek-\u003eIO(e Node))-\u003e(DisplayGraph-\u003eArcType-\u003em-\u003eIO(h Arc))-\u003eIO(DisplayGraph,Graph a b c d e f g h)",
          "package": "uni-graphs",
          "partial": "Graph",
          "signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003egraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003egraphParms-\u003e(DisplayGraph-\u003eNodeType-\u003enodeTypeLabel-\u003eIO(nodeTypeParms Node))-\u003e(DisplayGraph-\u003eArcType-\u003earcTypeLabel-\u003eIO(arcTypeParms Arc))-\u003eIO(DisplayGraph,Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-DisplayGraph.html#v:displayGraph0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.DisplayGraph",
          "name": "displayGraph1",
          "package": "uni-graphs",
          "signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e graphParms -\u003e (DisplayGraph -\u003e NodeType -\u003e nodeTypeLabel -\u003e IO (nodeTypeParms (Node, nodeLabel))) -\u003e (DisplayGraph -\u003e ArcType -\u003e arcTypeLabel -\u003e IO (arcTypeParms (Arc, arcLabel))) -\u003e IO (DisplayGraph, Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms)",
          "source": "src/Graphs-DisplayGraph.html#displayGraph1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs DisplayGraph",
          "module": "Graphs.DisplayGraph",
          "name": "displayGraph1",
          "normalized": "Graph a b c d e f g h-\u003eGraphConnection i j k l-\u003eb-\u003e(DisplayGraph-\u003eNodeType-\u003ej-\u003eIO(e(Node,i)))-\u003e(DisplayGraph-\u003eArcType-\u003el-\u003eIO(h(Arc,k)))-\u003eIO(DisplayGraph,Graph a b c d e f g h)",
          "package": "uni-graphs",
          "partial": "Graph",
          "signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003egraphParms-\u003e(DisplayGraph-\u003eNodeType-\u003enodeTypeLabel-\u003eIO(nodeTypeParms(Node,nodeLabel)))-\u003e(DisplayGraph-\u003eArcType-\u003earcTypeLabel-\u003eIO(arcTypeParms(Arc,arcLabel)))-\u003eIO(DisplayGraph,Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-DisplayGraph.html#v:displayGraph1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module describes an empty display graph sort.  In other words, it\n displays nothing.  Not a lot of use you might think, but we use it for\n the MMiSS API to get a version graph without invoking daVinci.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.EmptyGraphSort",
          "name": "EmptyGraphSort",
          "package": "uni-graphs",
          "source": "src/Graphs-EmptyGraphSort.html",
          "type": "module"
        },
        "index": {
          "description": "This module describes an empty display graph sort In other words it displays nothing Not lot of use you might think but we use it for the MMiSS API to get version graph without invoking daVinci",
          "hierarchy": "Graphs EmptyGraphSort",
          "module": "Graphs.EmptyGraphSort",
          "name": "EmptyGraphSort",
          "package": "uni-graphs",
          "partial": "Empty Graph Sort",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-EmptyGraphSort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.EmptyGraphSort",
          "name": "emptyGraphSort",
          "package": "uni-graphs",
          "signature": "Graph EmptyGraph EmptyGraphParms EmptyNode EmptyNodeType EmptyNodeTypeParms EmptyArc EmptyArcType EmptyArcTypeParms",
          "source": "src/Graphs-EmptyGraphSort.html#emptyGraphSort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs EmptyGraphSort",
          "module": "Graphs.EmptyGraphSort",
          "name": "emptyGraphSort",
          "package": "uni-graphs",
          "partial": "Graph Sort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-EmptyGraphSort.html#v:emptyGraphSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGiven two acyclic graphs G1 and G2 sharing some nodes, and a list V1 of nodes in G1,\n let A be the union of G1 intersect G2 and V1.  The function in this module returns\n a list L of type [(Node,[Node])] such that\n (1) The first elements in each pair in L are precisely those elements of V1 not in G2.\n (2) For each element (n,ms) in L,\n     the list ms contains precisely those vertices m of G1 such that\n     (a) m is in A;\n     (b) there is a path from m to n in G1 which has no common vertices with\n         A except at its endpoints.\n (3) Where the list contains two elements (n1,ms1) and (n2,ms2), such that\n     ms2 contains n1, then (n1,ms1) comes before (n2,ms2) in the list.\n\u003c/p\u003e\u003cp\u003eThe purpose of all this is to provide a list of the nodes to be constructed\n in G2 to extend it by V1 while preserving as much as possible of the path\n structure in V1.  This is used for adding version graph information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.FindCommonParents",
          "name": "FindCommonParents",
          "package": "uni-graphs",
          "source": "src/Graphs-FindCommonParents.html",
          "type": "module"
        },
        "index": {
          "description": "Given two acyclic graphs G1 and G2 sharing some nodes and list V1 of nodes in G1 let be the union of G1 intersect G2 and V1 The function in this module returns list of type Node Node such that The first elements in each pair in are precisely those elements of V1 not in G2 For each element ms in the list ms contains precisely those vertices of G1 such that is in there is path from to in G1 which has no common vertices with except at its endpoints Where the list contains two elements n1 ms1 and n2 ms2 such that ms2 contains n1 then n1 ms1 comes before n2 ms2 in the list The purpose of all this is to provide list of the nodes to be constructed in G2 to extend it by V1 while preserving as much as possible of the path structure in V1 This is used for adding version graph information",
          "hierarchy": "Graphs FindCommonParents",
          "module": "Graphs.FindCommonParents",
          "name": "FindCommonParents",
          "package": "uni-graphs",
          "partial": "Find Common Parents",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.FindCommonParents",
          "name": "GraphBack",
          "package": "uni-graphs",
          "source": "src/Graphs-FindCommonParents.html#GraphBack",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs FindCommonParents",
          "module": "Graphs.FindCommonParents",
          "name": "GraphBack",
          "package": "uni-graphs",
          "partial": "Graph Back",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#t:GraphBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.FindCommonParents",
          "name": "GraphBack",
          "package": "uni-graphs",
          "signature": "GraphBack",
          "source": "src/Graphs-FindCommonParents.html#GraphBack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs FindCommonParents",
          "module": "Graphs.FindCommonParents",
          "name": "GraphBack",
          "package": "uni-graphs",
          "partial": "Graph Back",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#v:GraphBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.FindCommonParents",
          "name": "findCommonParents",
          "package": "uni-graphs",
          "signature": "GraphBack node1 nodeKey -\u003e GraphBack node2 nodeKey -\u003e [node1] -\u003e [(node1, [(node1, Maybe node2)])]",
          "source": "src/Graphs-FindCommonParents.html#findCommonParents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs FindCommonParents",
          "module": "Graphs.FindCommonParents",
          "name": "findCommonParents",
          "normalized": "GraphBack a b-\u003eGraphBack a b-\u003e[a]-\u003e[(a,[(a,Maybe a)])]",
          "package": "uni-graphs",
          "partial": "Common Parents",
          "signature": "GraphBack node nodeKey-\u003eGraphBack node nodeKey-\u003e[node]-\u003e[(node,[(node,Maybe node)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#v:findCommonParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all nodes in the graph\n\u003c/p\u003e",
          "module": "Graphs.FindCommonParents",
          "name": "getAllNodes",
          "package": "uni-graphs",
          "signature": "[node]",
          "source": "src/Graphs-FindCommonParents.html#GraphBack",
          "type": "function"
        },
        "index": {
          "description": "Get all nodes in the graph",
          "hierarchy": "Graphs FindCommonParents",
          "module": "Graphs.FindCommonParents",
          "name": "getAllNodes",
          "normalized": "[a]",
          "package": "uni-graphs",
          "partial": "All Nodes",
          "signature": "[node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#v:getAllNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the node does not exist in the graph \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n Otherwise \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e key where key is a \"nodeKey\", an ordered key\n uniquely distinguishing the node (and used to detect common elements\n in the two graphs)\n\u003c/p\u003e",
          "module": "Graphs.FindCommonParents",
          "name": "getKey",
          "package": "uni-graphs",
          "signature": "node -\u003e Maybe nodeKey",
          "source": "src/Graphs-FindCommonParents.html#GraphBack",
          "type": "function"
        },
        "index": {
          "description": "If the node does not exist in the graph Nothing Otherwise Just key where key is nodeKey an ordered key uniquely distinguishing the node and used to detect common elements in the two graphs",
          "hierarchy": "Graphs FindCommonParents",
          "module": "Graphs.FindCommonParents",
          "name": "getKey",
          "normalized": "a-\u003eMaybe b",
          "package": "uni-graphs",
          "partial": "Key",
          "signature": "node-\u003eMaybe nodeKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#v:getKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf node does not exist Nothing, otherwise immediate\n parents of node.\n\u003c/p\u003e",
          "module": "Graphs.FindCommonParents",
          "name": "getParents",
          "package": "uni-graphs",
          "signature": "node -\u003e Maybe [node]",
          "source": "src/Graphs-FindCommonParents.html#GraphBack",
          "type": "function"
        },
        "index": {
          "description": "If node does not exist Nothing otherwise immediate parents of node",
          "hierarchy": "Graphs FindCommonParents",
          "module": "Graphs.FindCommonParents",
          "name": "getParents",
          "normalized": "a-\u003eMaybe[a]",
          "package": "uni-graphs",
          "partial": "Parents",
          "signature": "node-\u003eMaybe[node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#v:getParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe function in this module finds a cycle in a given directed graph, if\n one exists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.FindCycle",
          "name": "FindCycle",
          "package": "uni-graphs",
          "source": "src/Graphs-FindCycle.html",
          "type": "module"
        },
        "index": {
          "description": "The function in this module finds cycle in given directed graph if one exists",
          "hierarchy": "Graphs FindCycle",
          "module": "Graphs.FindCycle",
          "name": "FindCycle",
          "package": "uni-graphs",
          "partial": "Find Cycle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCycle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a cycle in a graph.  We are given a list of nodes to start\n from, and a successor function.\n\u003c/p\u003e",
          "module": "Graphs.FindCycle",
          "name": "findCycle",
          "package": "uni-graphs",
          "signature": "[a] -\u003e (a -\u003e [a]) -\u003e Maybe [a]",
          "source": "src/Graphs-FindCycle.html#findCycle",
          "type": "function"
        },
        "index": {
          "description": "Find cycle in graph We are given list of nodes to start from and successor function",
          "hierarchy": "Graphs FindCycle",
          "module": "Graphs.FindCycle",
          "name": "findCycle",
          "normalized": "[a]-\u003e(a-\u003e[a])-\u003eMaybe[a]",
          "package": "uni-graphs",
          "partial": "Cycle",
          "signature": "[a]-\u003e(a-\u003e[a])-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCycle.html#v:findCycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAncestors",
          "name": "GetAncestors",
          "package": "uni-graphs",
          "source": "src/Graphs-GetAncestors.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphs GetAncestors",
          "module": "Graphs.GetAncestors",
          "name": "GetAncestors",
          "package": "uni-graphs",
          "partial": "Get Ancestors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAncestors",
          "name": "getAncestors",
          "package": "uni-graphs",
          "signature": "Bool -\u003e graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e (nodeLabel -\u003e IO Bool) -\u003e Node -\u003e IO [Node]",
          "source": "src/Graphs-GetAncestors.html#getAncestors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAncestors",
          "module": "Graphs.GetAncestors",
          "name": "getAncestors",
          "normalized": "Bool-\u003ea b c d e-\u003e(b-\u003eIO Bool)-\u003eNode-\u003eIO[Node]",
          "package": "uni-graphs",
          "partial": "Ancestors",
          "signature": "Bool-\u003egraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003e(nodeLabel-\u003eIO Bool)-\u003eNode-\u003eIO[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#v:getAncestors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAncestors",
          "name": "getAncestorsGeneric",
          "package": "uni-graphs",
          "signature": "Bool -\u003e (node -\u003e IO [node]) -\u003e (node -\u003e IO Bool) -\u003e node -\u003e IO [node]",
          "source": "src/Graphs-GetAncestors.html#getAncestorsGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAncestors",
          "module": "Graphs.GetAncestors",
          "name": "getAncestorsGeneric",
          "normalized": "Bool-\u003e(a-\u003eIO[a])-\u003e(a-\u003eIO Bool)-\u003ea-\u003eIO[a]",
          "package": "uni-graphs",
          "partial": "Ancestors Generic",
          "signature": "Bool-\u003e(node-\u003eIO[node])-\u003e(node-\u003eIO Bool)-\u003enode-\u003eIO[node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#v:getAncestorsGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAncestors",
          "name": "getAncestorsPure",
          "package": "uni-graphs",
          "signature": "(node -\u003e [node]) -\u003e node -\u003e [node]",
          "source": "src/Graphs-GetAncestors.html#getAncestorsPure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAncestors",
          "module": "Graphs.GetAncestors",
          "name": "getAncestorsPure",
          "normalized": "(a-\u003e[a])-\u003ea-\u003e[a]",
          "package": "uni-graphs",
          "partial": "Ancestors Pure",
          "signature": "(node-\u003e[node])-\u003enode-\u003e[node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#v:getAncestorsPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAncestors",
          "name": "getDescendants",
          "package": "uni-graphs",
          "signature": "Bool -\u003e graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e (nodeLabel -\u003e IO Bool) -\u003e Node -\u003e IO [Node]",
          "source": "src/Graphs-GetAncestors.html#getDescendants",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAncestors",
          "module": "Graphs.GetAncestors",
          "name": "getDescendants",
          "normalized": "Bool-\u003ea b c d e-\u003e(b-\u003eIO Bool)-\u003eNode-\u003eIO[Node]",
          "package": "uni-graphs",
          "partial": "Descendants",
          "signature": "Bool-\u003egraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003e(nodeLabel-\u003eIO Bool)-\u003eNode-\u003eIO[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#v:getDescendants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if first node is ancestor or equal to the second.\n\u003c/p\u003e",
          "module": "Graphs.GetAncestors",
          "name": "isAncestor",
          "package": "uni-graphs",
          "signature": "(node -\u003e m [node]) -\u003e node -\u003e node -\u003e m Bool",
          "source": "src/Graphs-GetAncestors.html#isAncestor",
          "type": "function"
        },
        "index": {
          "description": "Returns True if first node is ancestor or equal to the second",
          "hierarchy": "Graphs GetAncestors",
          "module": "Graphs.GetAncestors",
          "name": "isAncestor",
          "normalized": "(a-\u003eb[a])-\u003ea-\u003ea-\u003eb Bool",
          "package": "uni-graphs",
          "partial": "Ancestor",
          "signature": "(node-\u003em[node])-\u003enode-\u003enode-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#v:isAncestor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if first node is ancestor or equal to the second.\n\u003c/p\u003e",
          "module": "Graphs.GetAncestors",
          "name": "isAncestorPure",
          "package": "uni-graphs",
          "signature": "(node -\u003e [node]) -\u003e node -\u003e node -\u003e Bool",
          "source": "src/Graphs-GetAncestors.html#isAncestorPure",
          "type": "function"
        },
        "index": {
          "description": "Returns True if first node is ancestor or equal to the second",
          "hierarchy": "Graphs GetAncestors",
          "module": "Graphs.GetAncestors",
          "name": "isAncestorPure",
          "normalized": "(a-\u003e[a])-\u003ea-\u003ea-\u003eBool",
          "package": "uni-graphs",
          "partial": "Ancestor Pure",
          "signature": "(node-\u003e[node])-\u003enode-\u003enode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#v:isAncestorPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGetAttributes is used by the GraphEditor to pop up HTk windows\n to get information from the user.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.GetAttributes",
          "name": "GetAttributes",
          "package": "uni-graphs",
          "source": "src/Graphs-GetAttributes.html",
          "type": "module"
        },
        "index": {
          "description": "GetAttributes is used by the GraphEditor to pop up HTk windows to get information from the user",
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "GetAttributes",
          "package": "uni-graphs",
          "partial": "Get Attributes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "ArcAttributes",
          "package": "uni-graphs",
          "source": "src/Graphs-GetAttributes.html#ArcAttributes",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "ArcAttributes",
          "package": "uni-graphs",
          "partial": "Arc Attributes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#t:ArcAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "ArcTypeAttributes",
          "package": "uni-graphs",
          "source": "src/Graphs-GetAttributes.html#ArcTypeAttributes",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "ArcTypeAttributes",
          "package": "uni-graphs",
          "partial": "Arc Type Attributes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#t:ArcTypeAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "NodeAttributes",
          "package": "uni-graphs",
          "source": "src/Graphs-GetAttributes.html#NodeAttributes",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "NodeAttributes",
          "package": "uni-graphs",
          "partial": "Node Attributes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#t:NodeAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "NodeTypeAttributes",
          "package": "uni-graphs",
          "source": "src/Graphs-GetAttributes.html#NodeTypeAttributes",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "NodeTypeAttributes",
          "package": "uni-graphs",
          "partial": "Node Type Attributes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#t:NodeTypeAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "ArcAttributes",
          "package": "uni-graphs",
          "signature": "ArcAttributes",
          "source": "src/Graphs-GetAttributes.html#ArcAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "ArcAttributes",
          "package": "uni-graphs",
          "partial": "Arc Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:ArcAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "ArcTypeAttributes",
          "package": "uni-graphs",
          "signature": "ArcTypeAttributes",
          "source": "src/Graphs-GetAttributes.html#ArcTypeAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "ArcTypeAttributes",
          "package": "uni-graphs",
          "partial": "Arc Type Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:ArcTypeAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "NodeAttributes",
          "package": "uni-graphs",
          "signature": "NodeAttributes",
          "source": "src/Graphs-GetAttributes.html#NodeAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "NodeAttributes",
          "package": "uni-graphs",
          "partial": "Node Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:NodeAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "NodeTypeAttributes",
          "package": "uni-graphs",
          "signature": "NodeTypeAttributes",
          "source": "src/Graphs-GetAttributes.html#NodeTypeAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "NodeTypeAttributes",
          "package": "uni-graphs",
          "partial": "Node Type Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:NodeTypeAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "arcType",
          "package": "uni-graphs",
          "signature": "arcType",
          "source": "src/Graphs-GetAttributes.html#ArcAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "arcType",
          "package": "uni-graphs",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:arcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "arcTypeTitle",
          "package": "uni-graphs",
          "signature": "String",
          "source": "src/Graphs-GetAttributes.html#ArcTypeAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "arcTypeTitle",
          "package": "uni-graphs",
          "partial": "Type Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:arcTypeTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "displayError",
          "package": "uni-graphs",
          "signature": "String -\u003e IO ()",
          "source": "src/Graphs-GetAttributes.html#displayError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "displayError",
          "normalized": "String-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Error",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:displayError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "getArcAttributes",
          "package": "uni-graphs",
          "signature": "Registry String arcType -\u003e IO (Maybe (ArcAttributes arcType))",
          "source": "src/Graphs-GetAttributes.html#getArcAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "getArcAttributes",
          "normalized": "Registry String a-\u003eIO(Maybe(ArcAttributes a))",
          "package": "uni-graphs",
          "partial": "Arc Attributes",
          "signature": "Registry String arcType-\u003eIO(Maybe(ArcAttributes arcType))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:getArcAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "getArcTypeAttributes",
          "package": "uni-graphs",
          "signature": "IO (Maybe ArcTypeAttributes)",
          "source": "src/Graphs-GetAttributes.html#getArcTypeAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "getArcTypeAttributes",
          "package": "uni-graphs",
          "partial": "Arc Type Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:getArcTypeAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "getNodeAttributes",
          "package": "uni-graphs",
          "signature": "Registry String nodeType -\u003e IO (Maybe (NodeAttributes nodeType))",
          "source": "src/Graphs-GetAttributes.html#getNodeAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "getNodeAttributes",
          "normalized": "Registry String a-\u003eIO(Maybe(NodeAttributes a))",
          "package": "uni-graphs",
          "partial": "Node Attributes",
          "signature": "Registry String nodeType-\u003eIO(Maybe(NodeAttributes nodeType))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:getNodeAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "getNodeTypeAttributes",
          "package": "uni-graphs",
          "signature": "IO (Maybe (NodeTypeAttributes nodeLabel))",
          "source": "src/Graphs-GetAttributes.html#getNodeTypeAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "getNodeTypeAttributes",
          "package": "uni-graphs",
          "partial": "Node Type Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:getNodeTypeAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "nodeTitle",
          "package": "uni-graphs",
          "signature": "String",
          "source": "src/Graphs-GetAttributes.html#NodeAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "nodeTitle",
          "package": "uni-graphs",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:nodeTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "nodeType",
          "package": "uni-graphs",
          "signature": "nodeType",
          "source": "src/Graphs-GetAttributes.html#NodeAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "nodeType",
          "package": "uni-graphs",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:nodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "nodeTypeTitle",
          "package": "uni-graphs",
          "signature": "String",
          "source": "src/Graphs-GetAttributes.html#NodeTypeAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "nodeTypeTitle",
          "package": "uni-graphs",
          "partial": "Type Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:nodeTypeTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GetAttributes",
          "name": "shape",
          "package": "uni-graphs",
          "signature": "Shape nodeLabel",
          "source": "src/Graphs-GetAttributes.html#NodeTypeAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GetAttributes",
          "module": "Graphs.GetAttributes",
          "name": "shape",
          "package": "uni-graphs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGraph defines the Graph class, which defines the basic things a\n graph must do.  Peculiarities:\n (1) Graphs are directed with labelled nodes and\n     arcs.  These nodes and arcs have types.\n (2) The nodes and arcs are identified by values of type Node and Arc.\n     These values are essentially strings.  The strings are provided by\n     the user; there is no mechanism for generating new unique strings.\n     (This is because this is easy in the applications I have in mind.)\n (3) A necessary feature of these graphs is that it is supposed to\n     be easy generate copies, both on the same system and on others.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.Graph",
          "name": "Graph",
          "package": "uni-graphs",
          "source": "src/Graphs-Graph.html",
          "type": "module"
        },
        "index": {
          "description": "Graph defines the Graph class which defines the basic things graph must do Peculiarities Graphs are directed with labelled nodes and arcs These nodes and arcs have types The nodes and arcs are identified by values of type Node and Arc These values are essentially strings The strings are provided by the user there is no mechanism for generating new unique strings This is because this is easy in the applications have in mind necessary feature of these graphs is that it is supposed to be easy generate copies both on the same system and on others",
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "Graph",
          "package": "uni-graphs",
          "partial": "Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "Arc",
          "package": "uni-graphs",
          "source": "src/Graphs-Graph.html#Arc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "Arc",
          "package": "uni-graphs",
          "partial": "Arc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:Arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "ArcType",
          "package": "uni-graphs",
          "source": "src/Graphs-Graph.html#ArcType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "ArcType",
          "package": "uni-graphs",
          "partial": "Arc Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:ArcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "CannedGraph",
          "package": "uni-graphs",
          "source": "src/Graphs-Graph.html#CannedGraph",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "CannedGraph",
          "package": "uni-graphs",
          "partial": "Canned Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:CannedGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "Graph",
          "package": "uni-graphs",
          "source": "src/Graphs-Graph.html#Graph",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "Graph",
          "package": "uni-graphs",
          "partial": "Graph",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "GraphConnection",
          "package": "uni-graphs",
          "source": "src/Graphs-Graph.html#GraphConnection",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "GraphConnection",
          "package": "uni-graphs",
          "partial": "Graph Connection",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:GraphConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "GraphConnectionData",
          "package": "uni-graphs",
          "source": "src/Graphs-Graph.html#GraphConnectionData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "GraphConnectionData",
          "package": "uni-graphs",
          "partial": "Graph Connection Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:GraphConnectionData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "Node",
          "package": "uni-graphs",
          "source": "src/Graphs-Graph.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "Node",
          "package": "uni-graphs",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "NodeType",
          "package": "uni-graphs",
          "source": "src/Graphs-Graph.html#NodeType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "NodeType",
          "package": "uni-graphs",
          "partial": "Node Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:NodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "PartialShow",
          "package": "uni-graphs",
          "source": "src/Graphs-Graph.html#PartialShow",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "PartialShow",
          "package": "uni-graphs",
          "partial": "Partial Show",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:PartialShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "Update",
          "package": "uni-graphs",
          "source": "src/Graphs-Graph.html#Update",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "Update",
          "package": "uni-graphs",
          "partial": "Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "CannedGraph",
          "package": "uni-graphs",
          "signature": "CannedGraph",
          "source": "src/Graphs-Graph.html#CannedGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "CannedGraph",
          "package": "uni-graphs",
          "partial": "Canned Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:CannedGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "DeleteArc",
          "package": "uni-graphs",
          "signature": "DeleteArc Arc",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "DeleteArc",
          "package": "uni-graphs",
          "partial": "Delete Arc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:DeleteArc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "DeleteNode",
          "package": "uni-graphs",
          "signature": "DeleteNode Node",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "DeleteNode",
          "package": "uni-graphs",
          "partial": "Delete Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:DeleteNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "GraphConnectionData",
          "package": "uni-graphs",
          "signature": "GraphConnectionData",
          "source": "src/Graphs-Graph.html#GraphConnectionData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "GraphConnectionData",
          "package": "uni-graphs",
          "partial": "Graph Connection Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:GraphConnectionData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "MultiUpdate",
          "package": "uni-graphs",
          "signature": "MultiUpdate [Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel]",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "MultiUpdate",
          "normalized": "MultiUpdate[Update a b c d]",
          "package": "uni-graphs",
          "partial": "Multi Update",
          "signature": "MultiUpdate[Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:MultiUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "NewArc",
          "package": "uni-graphs",
          "signature": "NewArc Arc ArcType arcLabel Node Node",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "NewArc",
          "package": "uni-graphs",
          "partial": "New Arc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:NewArc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "NewArcType",
          "package": "uni-graphs",
          "signature": "NewArcType ArcType arcTypeLabel",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "NewArcType",
          "package": "uni-graphs",
          "partial": "New Arc Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:NewArcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "NewNode",
          "package": "uni-graphs",
          "signature": "NewNode Node NodeType nodeLabel",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "NewNode",
          "package": "uni-graphs",
          "partial": "New Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:NewNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "NewNodeType",
          "package": "uni-graphs",
          "signature": "NewNodeType NodeType nodeTypeLabel",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "NewNodeType",
          "package": "uni-graphs",
          "partial": "New Node Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:NewNodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "PartialShow",
          "package": "uni-graphs",
          "signature": "PartialShow a",
          "source": "src/Graphs-Graph.html#PartialShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "PartialShow",
          "package": "uni-graphs",
          "partial": "Partial Show",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:PartialShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "SetArcLabel",
          "package": "uni-graphs",
          "signature": "SetArcLabel Arc arcLabel",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "SetArcLabel",
          "package": "uni-graphs",
          "partial": "Set Arc Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:SetArcLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "SetArcType",
          "package": "uni-graphs",
          "signature": "SetArcType Arc ArcType",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "SetArcType",
          "package": "uni-graphs",
          "partial": "Set Arc Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:SetArcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "SetArcTypeLabel",
          "package": "uni-graphs",
          "signature": "SetArcTypeLabel ArcType arcTypeLabel",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "SetArcTypeLabel",
          "package": "uni-graphs",
          "partial": "Set Arc Type Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:SetArcTypeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "SetNodeLabel",
          "package": "uni-graphs",
          "signature": "SetNodeLabel Node nodeLabel",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "SetNodeLabel",
          "package": "uni-graphs",
          "partial": "Set Node Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:SetNodeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "SetNodeType",
          "package": "uni-graphs",
          "signature": "SetNodeType Node NodeType",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "SetNodeType",
          "package": "uni-graphs",
          "partial": "Set Node Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:SetNodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "SetNodeTypeLabel",
          "package": "uni-graphs",
          "signature": "SetNodeTypeLabel NodeType nodeTypeLabel",
          "source": "src/Graphs-Graph.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "SetNodeTypeLabel",
          "package": "uni-graphs",
          "partial": "Set Node Type Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:SetNodeTypeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "deRegister",
          "package": "uni-graphs",
          "signature": "IO ()",
          "source": "src/Graphs-Graph.html#GraphConnectionData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "deRegister",
          "normalized": "IO()",
          "package": "uni-graphs",
          "partial": "Register",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:deRegister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "firstNode",
          "package": "uni-graphs",
          "signature": "Node",
          "source": "src/Graphs-Graph.html#firstNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "firstNode",
          "package": "uni-graphs",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:firstNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getArcLabel",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Arc -\u003e IO arcLabel",
          "source": "src/Graphs-Graph.html#getArcLabel",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getArcLabel",
          "normalized": "a b c d e-\u003eArc-\u003eIO d",
          "package": "uni-graphs",
          "partial": "Arc Label",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eArc-\u003eIO arcLabel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getArcType",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Arc -\u003e IO ArcType",
          "source": "src/Graphs-Graph.html#getArcType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getArcType",
          "normalized": "a b c d e-\u003eArc-\u003eIO ArcType",
          "package": "uni-graphs",
          "partial": "Arc Type",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eArc-\u003eIO ArcType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getArcTypeLabel",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e ArcType -\u003e IO arcTypeLabel",
          "source": "src/Graphs-Graph.html#getArcTypeLabel",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getArcTypeLabel",
          "normalized": "a b c d e-\u003eArcType-\u003eIO e",
          "package": "uni-graphs",
          "partial": "Arc Type Label",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eArcType-\u003eIO arcTypeLabel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcTypeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getArcTypes",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO [ArcType]",
          "source": "src/Graphs-Graph.html#getArcTypes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getArcTypes",
          "normalized": "a b c d e-\u003eIO[ArcType]",
          "package": "uni-graphs",
          "partial": "Arc Types",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO[ArcType]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getArcs",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO [Arc]",
          "source": "src/Graphs-Graph.html#getArcs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getArcs",
          "normalized": "a b c d e-\u003eIO[Arc]",
          "package": "uni-graphs",
          "partial": "Arcs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO[Arc]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getArcsIn",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Node -\u003e IO [Arc]",
          "source": "src/Graphs-Graph.html#getArcsIn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getArcsIn",
          "normalized": "a b c d e-\u003eNode-\u003eIO[Arc]",
          "package": "uni-graphs",
          "partial": "Arcs In",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNode-\u003eIO[Arc]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcsIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getArcsOut",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Node -\u003e IO [Arc]",
          "source": "src/Graphs-Graph.html#getArcsOut",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getArcsOut",
          "normalized": "a b c d e-\u003eNode-\u003eIO[Arc]",
          "package": "uni-graphs",
          "partial": "Arcs Out",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNode-\u003eIO[Arc]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcsOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getNodeLabel",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Node -\u003e IO nodeLabel",
          "source": "src/Graphs-Graph.html#getNodeLabel",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getNodeLabel",
          "normalized": "a b c d e-\u003eNode-\u003eIO b",
          "package": "uni-graphs",
          "partial": "Node Label",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNode-\u003eIO nodeLabel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getNodeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getNodeType",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Node -\u003e IO NodeType",
          "source": "src/Graphs-Graph.html#getNodeType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getNodeType",
          "normalized": "a b c d e-\u003eNode-\u003eIO NodeType",
          "package": "uni-graphs",
          "partial": "Node Type",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNode-\u003eIO NodeType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getNodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getNodeTypeLabel",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e NodeType -\u003e IO nodeTypeLabel",
          "source": "src/Graphs-Graph.html#getNodeTypeLabel",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getNodeTypeLabel",
          "normalized": "a b c d e-\u003eNodeType-\u003eIO c",
          "package": "uni-graphs",
          "partial": "Node Type Label",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNodeType-\u003eIO nodeTypeLabel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getNodeTypeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getNodeTypes",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO [NodeType]",
          "source": "src/Graphs-Graph.html#getNodeTypes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getNodeTypes",
          "normalized": "a b c d e-\u003eIO[NodeType]",
          "package": "uni-graphs",
          "partial": "Node Types",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO[NodeType]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getNodeTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getNodes",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO [Node]",
          "source": "src/Graphs-Graph.html#getNodes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getNodes",
          "normalized": "a b c d e-\u003eIO[Node]",
          "package": "uni-graphs",
          "partial": "Nodes",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO[Node]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getSource",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Arc -\u003e IO Node",
          "source": "src/Graphs-Graph.html#getSource",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getSource",
          "normalized": "a b c d e-\u003eArc-\u003eIO Node",
          "package": "uni-graphs",
          "partial": "Source",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eArc-\u003eIO Node",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "getTarget",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Arc -\u003e IO Node",
          "source": "src/Graphs-Graph.html#getTarget",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "getTarget",
          "normalized": "a b c d e-\u003eArc-\u003eIO Node",
          "package": "uni-graphs",
          "partial": "Target",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eArc-\u003eIO Node",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "graphState",
          "package": "uni-graphs",
          "signature": "CannedGraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel",
          "source": "src/Graphs-Graph.html#GraphConnectionData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "graphState",
          "package": "uni-graphs",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:graphState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "graphUpdate",
          "package": "uni-graphs",
          "signature": "Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO ()",
          "source": "src/Graphs-Graph.html#GraphConnectionData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "graphUpdate",
          "normalized": "Update a b c d-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Update",
          "signature": "Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:graphUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "nameSourceBranch",
          "package": "uni-graphs",
          "signature": "NameSourceBranch",
          "source": "src/Graphs-Graph.html#GraphConnectionData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "nameSourceBranch",
          "package": "uni-graphs",
          "partial": "Source Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:nameSourceBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "newArc",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e ArcType -\u003e arcLabel -\u003e Node -\u003e Node -\u003e IO Arc",
          "source": "src/Graphs-Graph.html#newArc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "newArc",
          "normalized": "a b c d e-\u003eArcType-\u003ed-\u003eNode-\u003eNode-\u003eIO Arc",
          "package": "uni-graphs",
          "partial": "Arc",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eArcType-\u003earcLabel-\u003eNode-\u003eNode-\u003eIO Arc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:newArc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "newArcType",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e arcTypeLabel -\u003e IO ArcType",
          "source": "src/Graphs-Graph.html#newArcType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "newArcType",
          "normalized": "a b c d e-\u003ee-\u003eIO ArcType",
          "package": "uni-graphs",
          "partial": "Arc Type",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003earcTypeLabel-\u003eIO ArcType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:newArcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "newEmptyGraph",
          "package": "uni-graphs",
          "signature": "IO (graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel)",
          "source": "src/Graphs-Graph.html#newEmptyGraph",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "newEmptyGraph",
          "package": "uni-graphs",
          "partial": "Empty Graph",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:newEmptyGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "newGraph",
          "package": "uni-graphs",
          "signature": "GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO (graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel)",
          "source": "src/Graphs-Graph.html#newGraph",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "newGraph",
          "normalized": "GraphConnection a b c d-\u003eIO(e a b c d)",
          "package": "uni-graphs",
          "partial": "Graph",
          "signature": "GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO(graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:newGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "newNode",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e NodeType -\u003e nodeLabel -\u003e IO Node",
          "source": "src/Graphs-Graph.html#newNode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "newNode",
          "normalized": "a b c d e-\u003eNodeType-\u003eb-\u003eIO Node",
          "package": "uni-graphs",
          "partial": "Node",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNodeType-\u003enodeLabel-\u003eIO Node",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:newNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "newNodeType",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e nodeTypeLabel -\u003e IO NodeType",
          "source": "src/Graphs-Graph.html#newNodeType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "newNodeType",
          "normalized": "a b c d e-\u003ec-\u003eIO NodeType",
          "package": "uni-graphs",
          "partial": "Node Type",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003enodeTypeLabel-\u003eIO NodeType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:newNodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "shareGraph",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel",
          "source": "src/Graphs-Graph.html#shareGraph",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "shareGraph",
          "normalized": "a b c d e-\u003eGraphConnection b c d e",
          "package": "uni-graphs",
          "partial": "Graph",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:shareGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "update",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO ()",
          "source": "src/Graphs-Graph.html#update",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "update",
          "normalized": "a b c d e-\u003eUpdate b c d e-\u003eIO()",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eUpdate nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.Graph",
          "name": "updates",
          "package": "uni-graphs",
          "signature": "[Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel]",
          "source": "src/Graphs-Graph.html#CannedGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs Graph",
          "module": "Graphs.Graph",
          "name": "updates",
          "normalized": "[Update a b c d]",
          "package": "uni-graphs",
          "signature": "[Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGraphConfigure contains definitions for the various configuration\n options for \u003ca\u003eGraphDisp\u003c/a\u003e objects.  These should be implemented\n using the \u003ccode\u003e\u003ca\u003eHasConfig\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eHasConfigValue\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eModifyHasDef\u003c/a\u003e\u003c/code\u003e,\n applied to instances of\n \u003ccode\u003e\u003ca\u003eGraphParms\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNodeTypeParms\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eArcTypeParms\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "GraphConfigure",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html",
          "type": "module"
        },
        "index": {
          "description": "GraphConfigure contains definitions for the various configuration options for GraphDisp objects These should be implemented using the HasConfig HasConfigValue and ModifyHasDef applied to instances of GraphParms NodeTypeParms and ArcTypeParms",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "GraphConfigure",
          "package": "uni-graphs",
          "partial": "Graph Configure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to be applied to all user actions.  This is useful\n for exception wrappers and so on.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "ActionWrapper",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#ActionWrapper",
          "type": "newtype"
        },
        "index": {
          "description": "Function to be applied to all user actions This is useful for exception wrappers and so on",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "ActionWrapper",
          "package": "uni-graphs",
          "partial": "Action Wrapper",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:ActionWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf set, action which is invoked if the user attempts to close the\n window.  If the action returns True, we close it.\n\u003c/p\u003e\u003cp\u003eWARNING.  This action is performed in the middle of the event loop,\n so please don't attempt to do any further graph interactions during it.\n (But HTk interactions should be fine.)\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "AllowClose",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#AllowClose",
          "type": "newtype"
        },
        "index": {
          "description": "If set action which is invoked if the user attempts to close the window If the action returns True we close it WARNING This action is performed in the middle of the event loop so please don attempt to do any further graph interactions during it But HTk interactions should be fine",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "AllowClose",
          "package": "uni-graphs",
          "partial": "Allow Close",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:AllowClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf True, allow Drag-and-Drop operators.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "AllowDragging",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#AllowDragging",
          "type": "newtype"
        },
        "index": {
          "description": "If True allow Drag-and-Drop operators",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "AllowDragging",
          "package": "uni-graphs",
          "partial": "Allow Dragging",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:AllowDragging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe border of this node\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "Border",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#Border",
          "type": "data"
        },
        "index": {
          "description": "The border of this node",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Border",
          "package": "uni-graphs",
          "partial": "Border",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:Border"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a \u003ccode\u003e\u003ca\u003eBorder\u003c/a\u003e\u003c/code\u003e which dynamically changes.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "BorderSource",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#BorderSource",
          "type": "data"
        },
        "index": {
          "description": "Compute Border which dynamically changes",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "BorderSource",
          "package": "uni-graphs",
          "partial": "Border Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:BorderSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe user is responsible for making sure this String is properly\n formatted.  To quote from the daVinci documentation:\n\u003c/p\u003e\u003cpre\u003e Can be used to define the background color of a node. The value of this\n attribute may be any X-Window colorname (see file lib/rgb.txt in your X11\n directory) or any RGB color specification in a format like \"#0f331e\",\n where 0f is the hexadecimal value for the red part of the color, 33 is\n the green part and 1e is the blue.  Hence, a pallet of 16.7 million\n colors is supported. The default color for nodes is \"white\".\n\u003c/pre\u003e\u003cp\u003eThere is a function for constructing \"RGB color specification\"s in\n \u003ca\u003eColour\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "Color",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#Color",
          "type": "newtype"
        },
        "index": {
          "description": "The user is responsible for making sure this String is properly formatted To quote from the daVinci documentation Can be used to define the background color of node The value of this attribute may be any X-Window colorname see file lib rgb.txt in your X11 directory or any RGB color specification in format like f331e where is the hexadecimal value for the red part of the color is the green part and is the blue Hence pallet of million colors is supported The default color for nodes is white There is function for constructing RGB color specification in Colour",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Color",
          "package": "uni-graphs",
          "partial": "Color",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to be performed when a node or arc is double-clicked.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "DoubleClickAction",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#DoubleClickAction",
          "type": "newtype"
        },
        "index": {
          "description": "Action to be performed when node or arc is double-clicked",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "DoubleClickAction",
          "package": "uni-graphs",
          "partial": "Double Click Action",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:DoubleClickAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe user is responsible for making sure this String is properly\n formatted.  To quote from the daVinci documentation:\n\u003c/p\u003e\u003cpre\u003e This attribute is used to control the arrow of an edge. In a graph visualization,\n each edge usually has an arrow pointing to the child node. This attribute can be\n used to let the arrow be drawn inverse (i.e. pointing to the parent), to get an arrow\n at both sides of an edge or to suppress arrows for a particular edge. The supported\n attribute values are: \"last\" (1 arrow pointing to the child, default), \\\"first\\\"\n(1 arrow to the parent), \"both\" (2 arrows to the parent and to children) and \"none\"\n(no arrows).\n\u003c/pre\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "EdgeDir",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#EdgeDir",
          "type": "data"
        },
        "index": {
          "description": "The user is responsible for making sure this String is properly formatted To quote from the daVinci documentation This attribute is used to control the arrow of an edge In graph visualization each edge usually has an arrow pointing to the child node This attribute can be used to let the arrow be drawn inverse i.e pointing to the parent to get an arrow at both sides of an edge or to suppress arrows for particular edge The supported attribute values are last arrow pointing to the child default first arrow to the parent both arrows to the parent and to children and none no arrows",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "EdgeDir",
          "package": "uni-graphs",
          "partial": "Edge Dir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:EdgeDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pattern of an edge\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "EdgePattern",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#EdgePattern",
          "type": "data"
        },
        "index": {
          "description": "The pattern of an edge",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "EdgePattern",
          "package": "uni-graphs",
          "partial": "Edge Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:EdgePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "FileMenuAct",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#FileMenuAct",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "FileMenuAct",
          "package": "uni-graphs",
          "partial": "File Menu Act",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:FileMenuAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe following options are provided specially by DaVinci (see, for now,\n \u003ca\u003ehttp://www.informatik.uni-bremen.de/daVinci/old/docs/reference/api/api_app_menu_cmd.html\u003c/a\u003e\n for the daVinci2.1 documentation.  If a \u003ccode\u003e\u003ca\u003eFileMenuAct\u003c/a\u003e\u003c/code\u003e is used as\n a configuration with a specified action, the corresponding option is\n enabled in the daVinci File menu, and the action is performed when the\n option is selected.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAllowClose\u003c/a\u003e\u003c/code\u003e configuration and \u003ccode\u003e\u003ca\u003eCloseMenuOption\u003c/a\u003e\u003c/code\u003e both set the action\n to be taken when the user selects a close event, and each overrides the\n other.\n\u003c/p\u003e\u003cp\u003eBy default the Close and Print options are enabled, however these\n and other options can be disabled by specifing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as the\n second argument to FileMenuAct.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "FileMenuOption",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#FileMenuOption",
          "type": "data"
        },
        "index": {
          "description": "The following options are provided specially by DaVinci see for now http www.informatik.uni-bremen.de daVinci old docs reference api api app menu cmd.html for the daVinci2.1 documentation If FileMenuAct is used as configuration with specified action the corresponding option is enabled in the daVinci File menu and the action is performed when the option is selected The AllowClose configuration and CloseMenuOption both set the action to be taken when the user selects close event and each overrides the other By default the Close and Print options are enabled however these and other options can be disabled by specifing Nothing as the second argument to FileMenuAct",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "FileMenuOption",
          "package": "uni-graphs",
          "partial": "File Menu Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:FileMenuOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe font in which the label of this node is displayed.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "FontStyle",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#FontStyle",
          "type": "data"
        },
        "index": {
          "description": "The font in which the label of this node is displayed",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "FontStyle",
          "package": "uni-graphs",
          "partial": "Font Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:FontStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a \u003ccode\u003e\u003ca\u003eFontStyle\u003c/a\u003e\u003c/code\u003e which dynamically changes.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "FontStyleSource",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#FontStyleSource",
          "type": "data"
        },
        "index": {
          "description": "Compute FontStyle which dynamically changes",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "FontStyleSource",
          "package": "uni-graphs",
          "partial": "Font Style Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:FontStyleSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "GlobalMenu",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#GlobalMenu",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "GlobalMenu",
          "package": "uni-graphs",
          "partial": "Global Menu",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:GlobalMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "GraphAllConfig",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#GraphAllConfig",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "GraphAllConfig",
          "package": "uni-graphs",
          "partial": "Graph All Config",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:GraphAllConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to be performed after mouse action not involving any node but\n somewhere on the graph.\n\u003c/p\u003e\u003cp\u003eIf you want to use this, the graph parameters need to include\n \u003ccode\u003e\u003ca\u003eAllowDragging\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "GraphGesture",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#GraphGesture",
          "type": "data"
        },
        "index": {
          "description": "Action to be performed after mouse action not involving any node but somewhere on the graph If you want to use this the graph parameters need to include AllowDragging True",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "GraphGesture",
          "package": "uni-graphs",
          "partial": "Graph Gesture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:GraphGesture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "GraphTitle",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#GraphTitle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "GraphTitle",
          "package": "uni-graphs",
          "partial": "Graph Title",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:GraphTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "HasArcTypeConfigs",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#HasArcTypeConfigs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "HasArcTypeConfigs",
          "package": "uni-graphs",
          "partial": "Has Arc Type Configs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasArcTypeConfigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "HasConfig",
          "package": "uni-graphs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "HasConfig",
          "package": "uni-graphs",
          "partial": "Has Config",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "HasConfigValue",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#HasConfigValue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "HasConfigValue",
          "package": "uni-graphs",
          "partial": "Has Config Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasConfigValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "HasGraphConfigs",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#HasGraphConfigs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "HasGraphConfigs",
          "package": "uni-graphs",
          "partial": "Has Graph Configs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasGraphConfigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "HasModifyValue",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#HasModifyValue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "HasModifyValue",
          "package": "uni-graphs",
          "partial": "Has Modify Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasModifyValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "HasNodeModifies",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#HasNodeModifies",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "HasNodeModifies",
          "package": "uni-graphs",
          "partial": "Has Node Modifies",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasNodeModifies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "HasNodeTypeConfigs",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#HasNodeTypeConfigs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "HasNodeTypeConfigs",
          "package": "uni-graphs",
          "partial": "Has Node Type Configs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasNodeTypeConfigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe user is responsible for making sure this String is properly\n formatted.  To quote from the daVinci documentation:\n\u003c/p\u003e\u003cpre\u003e  With this attribute you can control the shape of the edge's arrows.\n The possible values are: \"farrow\" (default), \"arrow\", \"fcircle\", and \"circle\",\n where a leading 'f' means filled.\n\u003c/pre\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "Head",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#Head",
          "type": "data"
        },
        "index": {
          "description": "The user is responsible for making sure this String is properly formatted To quote from the daVinci documentation With this attribute you can control the shape of the edge arrows The possible values are farrow default arrow fcircle and circle where leading means filled",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Head",
          "package": "uni-graphs",
          "partial": "Head",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:Head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "LocalMenu",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#LocalMenu",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "LocalMenu",
          "package": "uni-graphs",
          "partial": "Local Menu",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:LocalMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "MenuPrim",
          "package": "uni-graphs",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "MenuPrim",
          "package": "uni-graphs",
          "partial": "Menu Prim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:MenuPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "ModifyHasDef",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#ModifyHasDef",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "ModifyHasDef",
          "package": "uni-graphs",
          "partial": "Modify Has Def",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:ModifyHasDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf True, arcs from the node are not displayed.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "NodeArcsHidden",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#NodeArcsHidden",
          "type": "newtype"
        },
        "index": {
          "description": "If True arcs from the node are not displayed",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "NodeArcsHidden",
          "package": "uni-graphs",
          "partial": "Node Arcs Hidden",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:NodeArcsHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to be performed when the user drags one node onto another.\n The dragged node's value is passed as a Dyn (since it could have any\n type).\n\u003c/p\u003e\u003cp\u003eIf you want to use this, the graph parameters need to include\n \u003ccode\u003e\u003ca\u003eAllowDragging\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "NodeDragAndDrop",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#NodeDragAndDrop",
          "type": "data"
        },
        "index": {
          "description": "Action to be performed when the user drags one node onto another The dragged node value is passed as Dyn since it could have any type If you want to use this the graph parameters need to include AllowDragging True",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "NodeDragAndDrop",
          "package": "uni-graphs",
          "partial": "Node Drag And Drop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:NodeDragAndDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to be performed when the user drags a node somewhere else,\n but not onto another node.\n\u003c/p\u003e\u003cp\u003eIf you want to use this, the graph parameters need to include\n \u003ccode\u003e\u003ca\u003eAllowDragging\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "NodeGesture",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#NodeGesture",
          "type": "data"
        },
        "index": {
          "description": "Action to be performed when the user drags node somewhere else but not onto another node If you want to use this the graph parameters need to include AllowDragging True",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "NodeGesture",
          "package": "uni-graphs",
          "partial": "Node Gesture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:NodeGesture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, try hard to optimise the layout of the graph\n on redrawing it.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "OptimiseLayout",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#OptimiseLayout",
          "type": "newtype"
        },
        "index": {
          "description": "If True try hard to optimise the layout of the graph on redrawing it",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "OptimiseLayout",
          "package": "uni-graphs",
          "partial": "Optimise Layout",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:OptimiseLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich way up the graph is.\n\u003c/p\u003e\u003cp\u003eWe copy the DaVinciTypes constructors, though of course this will\n mean we have to painfully convert one to the other.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "Orientation",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#Orientation",
          "type": "data"
        },
        "index": {
          "description": "Which way up the graph is We copy the DaVinciTypes constructors though of course this will mean we have to painfully convert one to the other",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Orientation",
          "package": "uni-graphs",
          "partial": "Orientation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:Orientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis datatype is based on \u003ca\u003eDaVinciClasses\u003c/a\u003e, including several\n name clashes.  However we omit \u003ccode\u003eTextual\u003c/code\u003e, add the file argument\n to \u003ccode\u003e\u003ca\u003eIcon\u003c/a\u003e\u003c/code\u003e and the shape \u003ccode\u003e\u003ca\u003eTriangle\u003c/a\u003e\u003c/code\u003e.  This datatype may get bigger!\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "Shape",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#Shape",
          "type": "data"
        },
        "index": {
          "description": "This datatype is based on DaVinciClasses including several name clashes However we omit Textual add the file argument to Icon and the shape Triangle This datatype may get bigger",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Shape",
          "package": "uni-graphs",
          "partial": "Shape",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf True, add a survey view of the graph; IE display\n a picture of the whole graph which fits onto the\n screen (without displaying everything)\n as well as a picture of the details (which may not\n fit onto the screen).\n\u003c/p\u003e\u003cp\u003e(The user can do this anyway from daVinci's menus.)\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "SurveyView",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#SurveyView",
          "type": "newtype"
        },
        "index": {
          "description": "If True add survey view of the graph IE display picture of the whole graph which fits onto the screen without displaying everything as well as picture of the details which may not fit onto the screen The user can do this anyway from daVinci menus",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "SurveyView",
          "package": "uni-graphs",
          "partial": "Survey View",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:SurveyView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a function which computes a node or arc title string to be\n displayed.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "ValueTitle",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#ValueTitle",
          "type": "data"
        },
        "index": {
          "description": "Provide function which computes node or arc title string to be displayed",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "ValueTitle",
          "package": "uni-graphs",
          "partial": "Value Title",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:ValueTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a function which computes a source which generates a dynamically-\n changing title.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "ValueTitleSource",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConfigure.html#ValueTitleSource",
          "type": "data"
        },
        "index": {
          "description": "Provide function which computes source which generates dynamically changing title",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "ValueTitleSource",
          "package": "uni-graphs",
          "partial": "Value Title Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:ValueTitleSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "($$)",
          "package": "uni-graphs",
          "signature": "option -\u003e configuration -\u003e configuration",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "($$) $$",
          "normalized": "a-\u003eb-\u003eb",
          "package": "uni-graphs",
          "signature": "option-\u003econfiguration-\u003econfiguration",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "($$$)",
          "package": "uni-graphs",
          "signature": "option value -\u003e configuration value -\u003e configuration value",
          "source": "src/Graphs-GraphConfigure.html#%24%24%24",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "($$$) $$$",
          "normalized": "a b-\u003ec b-\u003ec b",
          "package": "uni-graphs",
          "signature": "option value-\u003econfiguration value-\u003econfiguration value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:-36--36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e$$$? can be a useful abbreviation\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "($$$?)",
          "package": "uni-graphs",
          "signature": "Maybe (option value) -\u003e configuration value -\u003e configuration value",
          "source": "src/Graphs-GraphConfigure.html#%24%24%24%3F",
          "type": "function"
        },
        "index": {
          "description": "can be useful abbreviation",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "($$$?) $$$?",
          "normalized": "Maybe(a b)-\u003ec b-\u003ec b",
          "package": "uni-graphs",
          "signature": "Maybe(option value)-\u003econfiguration value-\u003econfiguration value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:-36--36--36--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "ActionWrapper",
          "package": "uni-graphs",
          "signature": "ActionWrapper (IO () -\u003e IO ())",
          "source": "src/Graphs-GraphConfigure.html#ActionWrapper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "ActionWrapper",
          "normalized": "ActionWrapper(IO()-\u003eIO())",
          "package": "uni-graphs",
          "partial": "Action Wrapper",
          "signature": "ActionWrapper(IO()-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:ActionWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "AllowClose",
          "package": "uni-graphs",
          "signature": "AllowClose (IO Bool)",
          "source": "src/Graphs-GraphConfigure.html#AllowClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "AllowClose",
          "package": "uni-graphs",
          "partial": "Allow Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:AllowClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "AllowDragging",
          "package": "uni-graphs",
          "signature": "AllowDragging Bool",
          "source": "src/Graphs-GraphConfigure.html#AllowDragging",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "AllowDragging",
          "package": "uni-graphs",
          "partial": "Allow Dragging",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:AllowDragging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Blank",
          "package": "uni-graphs",
          "signature": "Blank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Blank",
          "package": "uni-graphs",
          "partial": "Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Blank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "BoldFontStyle",
          "package": "uni-graphs",
          "signature": "BoldFontStyle",
          "source": "src/Graphs-GraphConfigure.html#FontStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "BoldFontStyle",
          "package": "uni-graphs",
          "partial": "Bold Font Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:BoldFontStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "BoldItalicFontStyle",
          "package": "uni-graphs",
          "signature": "BoldItalicFontStyle",
          "source": "src/Graphs-GraphConfigure.html#FontStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "BoldItalicFontStyle",
          "package": "uni-graphs",
          "partial": "Bold Italic Font Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:BoldItalicFontStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "BorderSource",
          "package": "uni-graphs",
          "signature": "BorderSource (value -\u003e IO (SimpleSource Border))",
          "source": "src/Graphs-GraphConfigure.html#BorderSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "BorderSource",
          "normalized": "BorderSource(a-\u003eIO(SimpleSource Border))",
          "package": "uni-graphs",
          "partial": "Border Source",
          "signature": "BorderSource(value-\u003eIO(SimpleSource Border))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:BorderSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "BottomUp",
          "package": "uni-graphs",
          "signature": "BottomUp",
          "source": "src/Graphs-GraphConfigure.html#Orientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "BottomUp",
          "package": "uni-graphs",
          "partial": "Bottom Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:BottomUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Box",
          "package": "uni-graphs",
          "signature": "Box",
          "source": "src/Graphs-GraphConfigure.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Box",
          "package": "uni-graphs",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Button",
          "package": "uni-graphs",
          "signature": "Button String value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Button",
          "package": "uni-graphs",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Circle",
          "package": "uni-graphs",
          "signature": "Circle",
          "source": "src/Graphs-GraphConfigure.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Circle",
          "package": "uni-graphs",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "CloseMenuOption",
          "package": "uni-graphs",
          "signature": "CloseMenuOption",
          "source": "src/Graphs-GraphConfigure.html#FileMenuOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "CloseMenuOption",
          "package": "uni-graphs",
          "partial": "Close Menu Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:CloseMenuOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Color",
          "package": "uni-graphs",
          "signature": "Color String",
          "source": "src/Graphs-GraphConfigure.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Color",
          "package": "uni-graphs",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Dashed",
          "package": "uni-graphs",
          "signature": "Dashed",
          "source": "src/Graphs-GraphConfigure.html#EdgePattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Dashed",
          "package": "uni-graphs",
          "partial": "Dashed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Dashed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Dir",
          "package": "uni-graphs",
          "signature": "Dir String",
          "source": "src/Graphs-GraphConfigure.html#EdgeDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Dir",
          "package": "uni-graphs",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Dotted",
          "package": "uni-graphs",
          "signature": "Dotted",
          "source": "src/Graphs-GraphConfigure.html#EdgePattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Dotted",
          "package": "uni-graphs",
          "partial": "Dotted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Dotted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Double",
          "package": "uni-graphs",
          "signature": "Double",
          "source": "src/Graphs-GraphConfigure.html#EdgePattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Double",
          "package": "uni-graphs",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "DoubleBorder",
          "package": "uni-graphs",
          "signature": "DoubleBorder",
          "source": "src/Graphs-GraphConfigure.html#Border",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "DoubleBorder",
          "package": "uni-graphs",
          "partial": "Double Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:DoubleBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "DoubleClickAction",
          "package": "uni-graphs",
          "signature": "DoubleClickAction (value -\u003e IO ())",
          "source": "src/Graphs-GraphConfigure.html#DoubleClickAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "DoubleClickAction",
          "normalized": "DoubleClickAction(a-\u003eIO())",
          "package": "uni-graphs",
          "partial": "Double Click Action",
          "signature": "DoubleClickAction(value-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:DoubleClickAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Ellipse",
          "package": "uni-graphs",
          "signature": "Ellipse",
          "source": "src/Graphs-GraphConfigure.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Ellipse",
          "package": "uni-graphs",
          "partial": "Ellipse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "ExitMenuOption",
          "package": "uni-graphs",
          "signature": "ExitMenuOption",
          "source": "src/Graphs-GraphConfigure.html#FileMenuOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "ExitMenuOption",
          "package": "uni-graphs",
          "partial": "Exit Menu Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:ExitMenuOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "FileMenuAct",
          "package": "uni-graphs",
          "signature": "FileMenuAct FileMenuOption (Maybe (IO ()))",
          "source": "src/Graphs-GraphConfigure.html#FileMenuAct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "FileMenuAct",
          "normalized": "FileMenuAct FileMenuOption(Maybe(IO()))",
          "package": "uni-graphs",
          "partial": "File Menu Act",
          "signature": "FileMenuAct FileMenuOption(Maybe(IO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:FileMenuAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "FontStyleSource",
          "package": "uni-graphs",
          "signature": "FontStyleSource (value -\u003e IO (SimpleSource FontStyle))",
          "source": "src/Graphs-GraphConfigure.html#FontStyleSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "FontStyleSource",
          "normalized": "FontStyleSource(a-\u003eIO(SimpleSource FontStyle))",
          "package": "uni-graphs",
          "partial": "Font Style Source",
          "signature": "FontStyleSource(value-\u003eIO(SimpleSource FontStyle))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:FontStyleSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "GlobalMenu",
          "package": "uni-graphs",
          "signature": "GlobalMenu (MenuPrim (Maybe String) (IO ()))",
          "source": "src/Graphs-GraphConfigure.html#GlobalMenu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "GlobalMenu",
          "normalized": "GlobalMenu(MenuPrim(Maybe String)(IO()))",
          "package": "uni-graphs",
          "partial": "Global Menu",
          "signature": "GlobalMenu(MenuPrim(Maybe String)(IO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:GlobalMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "GraphGesture",
          "package": "uni-graphs",
          "signature": "GraphGesture (IO ())",
          "source": "src/Graphs-GraphConfigure.html#GraphGesture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "GraphGesture",
          "normalized": "GraphGesture(IO())",
          "package": "uni-graphs",
          "partial": "Graph Gesture",
          "signature": "GraphGesture(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:GraphGesture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "GraphTitle",
          "package": "uni-graphs",
          "signature": "GraphTitle String",
          "source": "src/Graphs-GraphConfigure.html#GraphTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "GraphTitle",
          "package": "uni-graphs",
          "partial": "Graph Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:GraphTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Head",
          "package": "uni-graphs",
          "signature": "Head String",
          "source": "src/Graphs-GraphConfigure.html#Head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Head",
          "package": "uni-graphs",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Icon",
          "package": "uni-graphs",
          "signature": "Icon FilePath",
          "source": "src/Graphs-GraphConfigure.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Icon",
          "package": "uni-graphs",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Icon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "ItalicFontStyle",
          "package": "uni-graphs",
          "signature": "ItalicFontStyle",
          "source": "src/Graphs-GraphConfigure.html#FontStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "ItalicFontStyle",
          "package": "uni-graphs",
          "partial": "Italic Font Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:ItalicFontStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "LeftRight",
          "package": "uni-graphs",
          "signature": "LeftRight",
          "source": "src/Graphs-GraphConfigure.html#Orientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "LeftRight",
          "package": "uni-graphs",
          "partial": "Left Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:LeftRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "LocalMenu",
          "package": "uni-graphs",
          "signature": "LocalMenu (MenuPrim (Maybe String) (value -\u003e IO ()))",
          "source": "src/Graphs-GraphConfigure.html#LocalMenu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "LocalMenu",
          "normalized": "LocalMenu(MenuPrim(Maybe String)(a-\u003eIO()))",
          "package": "uni-graphs",
          "partial": "Local Menu",
          "signature": "LocalMenu(MenuPrim(Maybe String)(value-\u003eIO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:LocalMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Menu",
          "package": "uni-graphs",
          "signature": "Menu subMenuValue [MenuPrim subMenuValue value]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Menu",
          "normalized": "Menu a[MenuPrim a b]",
          "package": "uni-graphs",
          "partial": "Menu",
          "signature": "Menu subMenuValue[MenuPrim subMenuValue value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Menu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "NewMenuOption",
          "package": "uni-graphs",
          "signature": "NewMenuOption",
          "source": "src/Graphs-GraphConfigure.html#FileMenuOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "NewMenuOption",
          "package": "uni-graphs",
          "partial": "New Menu Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:NewMenuOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "NoBorder",
          "package": "uni-graphs",
          "signature": "NoBorder",
          "source": "src/Graphs-GraphConfigure.html#Border",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "NoBorder",
          "package": "uni-graphs",
          "partial": "No Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:NoBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "NodeArcsHidden",
          "package": "uni-graphs",
          "signature": "NodeArcsHidden Bool",
          "source": "src/Graphs-GraphConfigure.html#NodeArcsHidden",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "NodeArcsHidden",
          "package": "uni-graphs",
          "partial": "Node Arcs Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:NodeArcsHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "NodeDragAndDrop",
          "package": "uni-graphs",
          "signature": "NodeDragAndDrop (Dyn -\u003e value -\u003e IO ())",
          "source": "src/Graphs-GraphConfigure.html#NodeDragAndDrop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "NodeDragAndDrop",
          "normalized": "NodeDragAndDrop(Dyn-\u003ea-\u003eIO())",
          "package": "uni-graphs",
          "partial": "Node Drag And Drop",
          "signature": "NodeDragAndDrop(Dyn-\u003evalue-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:NodeDragAndDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "NodeGesture",
          "package": "uni-graphs",
          "signature": "NodeGesture (value -\u003e IO ())",
          "source": "src/Graphs-GraphConfigure.html#NodeGesture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "NodeGesture",
          "normalized": "NodeGesture(a-\u003eIO())",
          "package": "uni-graphs",
          "partial": "Node Gesture",
          "signature": "NodeGesture(value-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:NodeGesture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "NormalFontStyle",
          "package": "uni-graphs",
          "signature": "NormalFontStyle",
          "source": "src/Graphs-GraphConfigure.html#FontStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "NormalFontStyle",
          "package": "uni-graphs",
          "partial": "Normal Font Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:NormalFontStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "OpenMenuOption",
          "package": "uni-graphs",
          "signature": "OpenMenuOption",
          "source": "src/Graphs-GraphConfigure.html#FileMenuOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "OpenMenuOption",
          "package": "uni-graphs",
          "partial": "Open Menu Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:OpenMenuOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "OptimiseLayout",
          "package": "uni-graphs",
          "signature": "OptimiseLayout Bool",
          "source": "src/Graphs-GraphConfigure.html#OptimiseLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "OptimiseLayout",
          "package": "uni-graphs",
          "partial": "Optimise Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:OptimiseLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "PrintMenuOption",
          "package": "uni-graphs",
          "signature": "PrintMenuOption",
          "source": "src/Graphs-GraphConfigure.html#FileMenuOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "PrintMenuOption",
          "package": "uni-graphs",
          "partial": "Print Menu Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:PrintMenuOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Rhombus",
          "package": "uni-graphs",
          "signature": "Rhombus",
          "source": "src/Graphs-GraphConfigure.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Rhombus",
          "package": "uni-graphs",
          "partial": "Rhombus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Rhombus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "RightLeft",
          "package": "uni-graphs",
          "signature": "RightLeft",
          "source": "src/Graphs-GraphConfigure.html#Orientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "RightLeft",
          "package": "uni-graphs",
          "partial": "Right Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:RightLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "SaveAsMenuOption",
          "package": "uni-graphs",
          "signature": "SaveAsMenuOption",
          "source": "src/Graphs-GraphConfigure.html#FileMenuOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "SaveAsMenuOption",
          "package": "uni-graphs",
          "partial": "Save As Menu Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:SaveAsMenuOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "SaveMenuOption",
          "package": "uni-graphs",
          "signature": "SaveMenuOption",
          "source": "src/Graphs-GraphConfigure.html#FileMenuOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "SaveMenuOption",
          "package": "uni-graphs",
          "partial": "Save Menu Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:SaveMenuOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "SingleBorder",
          "package": "uni-graphs",
          "signature": "SingleBorder",
          "source": "src/Graphs-GraphConfigure.html#Border",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "SingleBorder",
          "package": "uni-graphs",
          "partial": "Single Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:SingleBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Solid",
          "package": "uni-graphs",
          "signature": "Solid",
          "source": "src/Graphs-GraphConfigure.html#EdgePattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Solid",
          "package": "uni-graphs",
          "partial": "Solid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Solid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "SurveyView",
          "package": "uni-graphs",
          "signature": "SurveyView Bool",
          "source": "src/Graphs-GraphConfigure.html#SurveyView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "SurveyView",
          "package": "uni-graphs",
          "partial": "Survey View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:SurveyView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Thick",
          "package": "uni-graphs",
          "signature": "Thick",
          "source": "src/Graphs-GraphConfigure.html#EdgePattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Thick",
          "package": "uni-graphs",
          "partial": "Thick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Thick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "TopDown",
          "package": "uni-graphs",
          "signature": "TopDown",
          "source": "src/Graphs-GraphConfigure.html#Orientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "TopDown",
          "package": "uni-graphs",
          "partial": "Top Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:TopDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "Triangle",
          "package": "uni-graphs",
          "signature": "Triangle",
          "source": "src/Graphs-GraphConfigure.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "Triangle",
          "package": "uni-graphs",
          "partial": "Triangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "ValueTitle",
          "package": "uni-graphs",
          "signature": "ValueTitle (value -\u003e IO String)",
          "source": "src/Graphs-GraphConfigure.html#ValueTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "ValueTitle",
          "normalized": "ValueTitle(a-\u003eIO String)",
          "package": "uni-graphs",
          "partial": "Value Title",
          "signature": "ValueTitle(value-\u003eIO String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:ValueTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "ValueTitleSource",
          "package": "uni-graphs",
          "signature": "ValueTitleSource (value -\u003e IO (SimpleSource String))",
          "source": "src/Graphs-GraphConfigure.html#ValueTitleSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "ValueTitleSource",
          "normalized": "ValueTitleSource(a-\u003eIO(SimpleSource String))",
          "package": "uni-graphs",
          "partial": "Value Title Source",
          "signature": "ValueTitleSource(value-\u003eIO(SimpleSource String))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:ValueTitleSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs a service to MMiSS we provide a function which combines\n several GlobalMenus into one.\n\u003c/p\u003e",
          "module": "Graphs.GraphConfigure",
          "name": "combineGlobalMenus",
          "package": "uni-graphs",
          "signature": "[GlobalMenu] -\u003e GlobalMenu",
          "source": "src/Graphs-GraphConfigure.html#combineGlobalMenus",
          "type": "function"
        },
        "index": {
          "description": "As service to MMiSS we provide function which combines several GlobalMenus into one",
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "combineGlobalMenus",
          "normalized": "[GlobalMenu]-\u003eGlobalMenu",
          "package": "uni-graphs",
          "partial": "Global Menus",
          "signature": "[GlobalMenu]-\u003eGlobalMenu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:combineGlobalMenus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "configUsed",
          "package": "uni-graphs",
          "signature": "option -\u003e configuration -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "configUsed",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "uni-graphs",
          "partial": "Used",
          "signature": "option-\u003econfiguration-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:configUsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "configUsed'",
          "package": "uni-graphs",
          "signature": "option value -\u003e configuration value -\u003e Bool",
          "source": "src/Graphs-GraphConfigure.html#configUsed%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "configUsed'",
          "normalized": "a b-\u003ec b-\u003eBool",
          "package": "uni-graphs",
          "partial": "Used'",
          "signature": "option value-\u003econfiguration value-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:configUsed-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "def",
          "package": "uni-graphs",
          "signature": "modification",
          "source": "src/Graphs-GraphConfigure.html#def",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "def",
          "package": "uni-graphs",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "defaultAllowClose",
          "package": "uni-graphs",
          "signature": "AllowClose",
          "source": "src/Graphs-GraphConfigure.html#defaultAllowClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "defaultAllowClose",
          "package": "uni-graphs",
          "partial": "Allow Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:defaultAllowClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "isDef",
          "package": "uni-graphs",
          "signature": "modification -\u003e Bool",
          "source": "src/Graphs-GraphConfigure.html#isDef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "isDef",
          "normalized": "a-\u003eBool",
          "package": "uni-graphs",
          "partial": "Def",
          "signature": "modification-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:isDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "mapMMenuPrim",
          "package": "uni-graphs",
          "signature": "(a -\u003e m b) -\u003e MenuPrim c a -\u003e m (MenuPrim c b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "mapMMenuPrim",
          "normalized": "(a-\u003eb c)-\u003eMenuPrim d a-\u003eb(MenuPrim d c)",
          "package": "uni-graphs",
          "partial": "MMenu Prim",
          "signature": "(a-\u003em b)-\u003eMenuPrim c a-\u003em(MenuPrim c b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:mapMMenuPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "mapMMenuPrim'",
          "package": "uni-graphs",
          "signature": "(c -\u003e m d) -\u003e MenuPrim c a -\u003e m (MenuPrim d a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "mapMMenuPrim'",
          "normalized": "(a-\u003eb c)-\u003eMenuPrim a d-\u003eb(MenuPrim c d)",
          "package": "uni-graphs",
          "partial": "MMenu Prim'",
          "signature": "(c-\u003em d)-\u003eMenuPrim c a-\u003em(MenuPrim d a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:mapMMenuPrim-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "mapMenuPrim",
          "package": "uni-graphs",
          "signature": "(a -\u003e b) -\u003e MenuPrim c a -\u003e MenuPrim c b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "mapMenuPrim",
          "normalized": "(a-\u003eb)-\u003eMenuPrim c a-\u003eMenuPrim c b",
          "package": "uni-graphs",
          "partial": "Menu Prim",
          "signature": "(a-\u003eb)-\u003eMenuPrim c a-\u003eMenuPrim c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:mapMenuPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "mapMenuPrim'",
          "package": "uni-graphs",
          "signature": "(c -\u003e d) -\u003e MenuPrim c a -\u003e MenuPrim d a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "mapMenuPrim'",
          "normalized": "(a-\u003eb)-\u003eMenuPrim a c-\u003eMenuPrim b c",
          "package": "uni-graphs",
          "partial": "Menu Prim'",
          "signature": "(c-\u003ed)-\u003eMenuPrim c a-\u003eMenuPrim d a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:mapMenuPrim-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConfigure",
          "name": "modify",
          "package": "uni-graphs",
          "signature": "option -\u003e graph -\u003e object value -\u003e IO ()",
          "source": "src/Graphs-GraphConfigure.html#modify",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphConfigure",
          "module": "Graphs.GraphConfigure",
          "name": "modify",
          "normalized": "a-\u003eb-\u003ec d-\u003eIO()",
          "package": "uni-graphs",
          "signature": "option-\u003egraph-\u003eobject value-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGraphConnection contains various operations on graph connections\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.GraphConnection",
          "name": "GraphConnection",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConnection.html",
          "type": "module"
        },
        "index": {
          "description": "GraphConnection contains various operations on graph connections",
          "hierarchy": "Graphs GraphConnection",
          "module": "Graphs.GraphConnection",
          "name": "GraphConnection",
          "package": "uni-graphs",
          "partial": "Graph Connection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConnection",
          "name": "SubGraph",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphConnection.html#SubGraph",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs GraphConnection",
          "module": "Graphs.GraphConnection",
          "name": "SubGraph",
          "package": "uni-graphs",
          "partial": "Sub Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#t:SubGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConnection",
          "name": "SubGraph",
          "package": "uni-graphs",
          "signature": "SubGraph",
          "source": "src/Graphs-GraphConnection.html#SubGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConnection",
          "module": "Graphs.GraphConnection",
          "name": "SubGraph",
          "package": "uni-graphs",
          "partial": "Sub Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#v:SubGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConnection",
          "name": "attachSubGraph",
          "package": "uni-graphs",
          "signature": "SubGraph -\u003e GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel",
          "source": "src/Graphs-GraphConnection.html#attachSubGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConnection",
          "module": "Graphs.GraphConnection",
          "name": "attachSubGraph",
          "normalized": "SubGraph-\u003eGraphConnection a b c d-\u003eGraphConnection a b c d",
          "package": "uni-graphs",
          "partial": "Sub Graph",
          "signature": "SubGraph-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#v:attachSubGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConnection",
          "name": "attachSuperGraph",
          "package": "uni-graphs",
          "signature": "SubGraph -\u003e GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel",
          "source": "src/Graphs-GraphConnection.html#attachSuperGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConnection",
          "module": "Graphs.GraphConnection",
          "name": "attachSuperGraph",
          "normalized": "SubGraph-\u003eGraphConnection a b c d-\u003eGraphConnection a b c d",
          "package": "uni-graphs",
          "partial": "Super Graph",
          "signature": "SubGraph-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#v:attachSuperGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConnection",
          "name": "mapGraphConnection",
          "package": "uni-graphs",
          "signature": "(nodeLabel1 -\u003e (nodeLabel2, NodeType))-\u003e (arcLabel1 -\u003e (arcLabel2, ArcType))-\u003e [Update nodeLabel2 nodeTypeLabel2 arcLabel2 arcTypeLabel2]-\u003e GraphConnection nodeLabel1 () arcLabel1 ()-\u003e GraphConnection nodeLabel2 nodeTypeLabel2 arcLabel2 arcTypeLabel2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConnection",
          "module": "Graphs.GraphConnection",
          "name": "mapGraphConnection",
          "normalized": "(a-\u003e(a,NodeType))-\u003e(b-\u003e(b,ArcType))-\u003e[Update a c b d]-\u003eGraphConnection a()b()-\u003eGraphConnection a c b d",
          "package": "uni-graphs",
          "partial": "Graph Connection",
          "signature": "(nodeLabel-\u003e(nodeLabel,NodeType))-\u003e(arcLabel-\u003e(arcLabel,ArcType))-\u003e[Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel]-\u003eGraphConnection nodeLabel()arcLabel()-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#v:mapGraphConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConnection",
          "name": "nodeIn",
          "package": "uni-graphs",
          "signature": "Node -\u003e Bool",
          "source": "src/Graphs-GraphConnection.html#SubGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConnection",
          "module": "Graphs.GraphConnection",
          "name": "nodeIn",
          "normalized": "Node-\u003eBool",
          "package": "uni-graphs",
          "partial": "In",
          "signature": "Node-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#v:nodeIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphConnection",
          "name": "nodeTypeIn",
          "package": "uni-graphs",
          "signature": "NodeType -\u003e Bool",
          "source": "src/Graphs-GraphConnection.html#SubGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphConnection",
          "module": "Graphs.GraphConnection",
          "name": "nodeTypeIn",
          "normalized": "NodeType-\u003eBool",
          "package": "uni-graphs",
          "partial": "Type In",
          "signature": "NodeType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#v:nodeTypeIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn UniForM we need ways of displaying typed directed graphs.\n In the original UniForM, it was only possible to use the DaVinci\n encapsulation for displaying directed graphs.  While this is very good,\n in the new UniForM it is intended to factor out this encapsulation\n so that it will not be too difficult to replace DaVinci by other\n graph-drawing package (or variants of DaVinci) for particular graphs.\n Example alternatives that might be considered:\n (1) some sort of text-only interface.\n (2) Windows-style displaying of a tree structure using clickable\n     folders.\n In this module we present the classes that any such \"graph-drawing package\"\n is supposed to implement.\n\u003c/p\u003e\u003cp\u003eThis module is in two parts.\n\u003c/p\u003e\u003cp\u003eThe first part contains the\n \"user-friendly\" versions of the functions.  For these, it is assumed\n (as will usually be the case) that there is only one\n node/nodeType/arc/arcType around for a particular graph.  The whole lot\n is indexed by the GraphAll, which contains ALL the functionality\n required for accessing the graphs (apart from configuration options).\n For example, the only daVinci-specific thing you should need to use\n to write a program which calls daVinci will be the daVinciSort variable.\n\u003c/p\u003e\u003cp\u003eThe second part contains the \"user-hateful\" versions.  All the\n user-hateful functions have names ending in \"Prim\".\n Graph display implementations only have to implement the user-hateful\n versions.  The user-hateful versions should only be of interest to other\n people if the graph display provides more than one implementation of\n the NodeClass, NodeTypeClass (or whatever) implementation.  One\n disadvantage to the user of using the user-hateful versions of the\n functions is that because of all the overloading, you have to put\n in lots of explicit types, or else get the most hideous type errors.\n\u003c/p\u003e\u003cp\u003eConfiguring things like graph titles, shape of node boxes, menus,\n and so on should also be implemented, where possible, by graph display\n interfaces.  The various options are documented in GraphConfigure.hs.\n They should be applied using the Computation.HasConfig interface.\n\u003c/p\u003e\u003cp\u003eThe types which are supposed in various combinations to be instances\n of the classes are as follows:\n\u003c/p\u003e\u003cp\u003egraph.  This corresponds to one graph display.\n    graphConfig.  This is configuration information for a graph.\n       This might be a window title or size for example.\n    graphParms.  This is a collection of graphConfig's used to\n       construct a graph.\n\u003c/p\u003e\u003cp\u003eNodes and arcs carry values.  Thus all the following carry\n a type parameter.  But, for ease of implementation with, for example,\n DaVinci, the type parameter is required to be an instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e   node.  A value of this type is an actual node in a graph.\n       (Will be an instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003eTypeable1\u003c/a\u003e\u003c/code\u003e.)\n\u003c/li\u003e\u003cli\u003e   nodeType.  Nodes are created with a particular UniForM \"type\" which\n       is a Haskell value of type nodetype.  In fact a graph might\n       conceivably have multiply Haskell types corresponding to node\n       and nodeType, meaning that nodes, or their UniForM types,\n       will be distinguished additionally by the Haskell type system.\n\u003c/li\u003e\u003cli\u003e   nodeTypeConfig.  Configuration information for a nodeType.\n       This might include how a node with this type is to be displayed\n       graphically.  This also includes information on what to do when the\n       node is clicked.\n\u003c/li\u003e\u003cli\u003e   nodeTypeParms.  A collection of nodeTypeConfig's used to construct\n       a nodeType\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSimilar constructions for arcs . . .\n    arc.\n    arcType.\n    arcTypeConfig.\n    arcTypeParms.\n\u003c/p\u003e\u003cp\u003eThere are quite a lot of classes.  This is partly because of the need\n to have a separate class for each subset of the type variables\n which is actually used in the type of a function.\n\u003c/p\u003e\u003cp\u003eThis file is fairly repetitive, mainly because of the need to\n repeat the configuration machinery over and over again.\n\u003c/p\u003e\u003cp\u003eThe functionality provided in this file is inspired by that\n provided by DaVinci.  However we extend it by allowing\n nodes to have labels.\n\u003c/p\u003e\u003cp\u003eThis file should be read in conjunction with \u003ca\u003eGraphConfigure\u003c/a\u003e,\n which contains various configuration options to be used for\n graph objects.\n\u003c/p\u003e\u003cp\u003eAdditional Notes\n ----------------\n\u003c/p\u003e\u003col\u003e\u003cli\u003e At the end of a program using a GraphDisp instance,\n     \u003ccode\u003eshutdown\u003c/code\u003e should be called.  For example,\n     in the case of the DaVinci instance this is\n     required to get rid of the DaVinci and HTk processes.\n\u003c/li\u003e\u003cli\u003e It is more cumbersome writing the Graph Editor than I would\n     like because the menu code doesn't give you\n     direct access to the node or arc type.  Unfortunately doing this\n     would make the classes in this file even more complicated than\n     they are now.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Graphs.GraphDisp",
          "name": "GraphDisp",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html",
          "type": "module"
        },
        "index": {
          "description": "In UniForM we need ways of displaying typed directed graphs In the original UniForM it was only possible to use the DaVinci encapsulation for displaying directed graphs While this is very good in the new UniForM it is intended to factor out this encapsulation so that it will not be too difficult to replace DaVinci by other graph-drawing package or variants of DaVinci for particular graphs Example alternatives that might be considered some sort of text-only interface Windows-style displaying of tree structure using clickable folders In this module we present the classes that any such graph-drawing package is supposed to implement This module is in two parts The first part contains the user-friendly versions of the functions For these it is assumed as will usually be the case that there is only one node nodeType arc arcType around for particular graph The whole lot is indexed by the GraphAll which contains ALL the functionality required for accessing the graphs apart from configuration options For example the only daVinci-specific thing you should need to use to write program which calls daVinci will be the daVinciSort variable The second part contains the user-hateful versions All the user-hateful functions have names ending in Prim Graph display implementations only have to implement the user-hateful versions The user-hateful versions should only be of interest to other people if the graph display provides more than one implementation of the NodeClass NodeTypeClass or whatever implementation One disadvantage to the user of using the user-hateful versions of the functions is that because of all the overloading you have to put in lots of explicit types or else get the most hideous type errors Configuring things like graph titles shape of node boxes menus and so on should also be implemented where possible by graph display interfaces The various options are documented in GraphConfigure.hs They should be applied using the Computation.HasConfig interface The types which are supposed in various combinations to be instances of the classes are as follows graph This corresponds to one graph display graphConfig This is configuration information for graph This might be window title or size for example graphParms This is collection of graphConfig used to construct graph Nodes and arcs carry values Thus all the following carry type parameter But for ease of implementation with for example DaVinci the type parameter is required to be an instance of Typeable node value of this type is an actual node in graph Will be an instance of Typeable via Typeable1 nodeType Nodes are created with particular UniForM type which is Haskell value of type nodetype In fact graph might conceivably have multiply Haskell types corresponding to node and nodeType meaning that nodes or their UniForM types will be distinguished additionally by the Haskell type system nodeTypeConfig Configuration information for nodeType This might include how node with this type is to be displayed graphically This also includes information on what to do when the node is clicked nodeTypeParms collection of nodeTypeConfig used to construct nodeType Similar constructions for arcs arc arcType arcTypeConfig arcTypeParms There are quite lot of classes This is partly because of the need to have separate class for each subset of the type variables which is actually used in the type of function This file is fairly repetitive mainly because of the need to repeat the configuration machinery over and over again The functionality provided in this file is inspired by that provided by DaVinci However we extend it by allowing nodes to have labels This file should be read in conjunction with GraphConfigure which contains various configuration options to be used for graph objects Additional Notes At the end of program using GraphDisp instance shutdown should be called For example in the case of the DaVinci instance this is required to get rid of the DaVinci and HTk processes It is more cumbersome writing the Graph Editor than would like because the menu code doesn give you direct access to the node or arc type Unfortunately doing this would make the classes in this file even more complicated than they are now",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "GraphDisp",
          "package": "uni-graphs",
          "partial": "Graph Disp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "ArcClass",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#ArcClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "ArcClass",
          "package": "uni-graphs",
          "partial": "Arc Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:ArcClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "ArcTypeClass",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#ArcTypeClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "ArcTypeClass",
          "package": "uni-graphs",
          "partial": "Arc Type Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:ArcTypeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "ArcTypeConfig",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#ArcTypeConfig",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "ArcTypeConfig",
          "package": "uni-graphs",
          "partial": "Arc Type Config",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:ArcTypeConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "ArcTypeParms",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#ArcTypeParms",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "ArcTypeParms",
          "package": "uni-graphs",
          "partial": "Arc Type Parms",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:ArcTypeParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "DeleteArc",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#DeleteArc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "DeleteArc",
          "package": "uni-graphs",
          "partial": "Delete Arc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:DeleteArc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "DeleteNode",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#DeleteNode",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "DeleteNode",
          "package": "uni-graphs",
          "partial": "Delete Node",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:DeleteNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "Eq1",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#Eq1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "Eq1",
          "package": "uni-graphs",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:Eq1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe graph implementation will provide a value of this type to\n get you started.  For example, for daVinci this is called \u003ccode\u003edaVinciSort\u003c/code\u003e.\n However you then need to use it as an argument to \u003ccode\u003e\u003ca\u003enewGraph\u003c/a\u003e\u003c/code\u003e to construct\n the actual graph.\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "Graph",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#Graph",
          "type": "newtype"
        },
        "index": {
          "description": "The graph implementation will provide value of this type to get you started For example for daVinci this is called daVinciSort However you then need to use it as an argument to newGraph to construct the actual graph",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "Graph",
          "package": "uni-graphs",
          "partial": "Graph",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "GraphAll",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#GraphAll",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "GraphAll",
          "package": "uni-graphs",
          "partial": "Graph All",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:GraphAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "GraphClass",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#GraphClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "GraphClass",
          "package": "uni-graphs",
          "partial": "Graph Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:GraphClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "GraphConfig",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#GraphConfig",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "GraphConfig",
          "package": "uni-graphs",
          "partial": "Graph Config",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:GraphConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "GraphParms",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#GraphParms",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "GraphParms",
          "package": "uni-graphs",
          "partial": "Graph Parms",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:GraphParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "NewArc",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#NewArc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "NewArc",
          "package": "uni-graphs",
          "partial": "New Arc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NewArc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "NewArcType",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#NewArcType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "NewArcType",
          "package": "uni-graphs",
          "partial": "New Arc Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NewArcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "NewGraph",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#NewGraph",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "NewGraph",
          "package": "uni-graphs",
          "partial": "New Graph",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NewGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "NewNode",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#NewNode",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "NewNode",
          "package": "uni-graphs",
          "partial": "New Node",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NewNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "NewNodeType",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#NewNodeType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "NewNodeType",
          "package": "uni-graphs",
          "partial": "New Node Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NewNodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "NodeClass",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#NodeClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "NodeClass",
          "package": "uni-graphs",
          "partial": "Node Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NodeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "NodeTypeClass",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#NodeTypeClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "NodeTypeClass",
          "package": "uni-graphs",
          "partial": "Node Type Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NodeTypeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "NodeTypeConfig",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#NodeTypeConfig",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "NodeTypeConfig",
          "package": "uni-graphs",
          "partial": "Node Type Config",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NodeTypeConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "NodeTypeParms",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#NodeTypeParms",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "NodeTypeParms",
          "package": "uni-graphs",
          "partial": "Node Type Parms",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NodeTypeParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "Ord1",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#Ord1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "Ord1",
          "package": "uni-graphs",
          "partial": "Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:Ord1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "SetArcType",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#SetArcType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "SetArcType",
          "package": "uni-graphs",
          "partial": "Set Arc Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:SetArcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "SetNodeFocus",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#SetNodeFocus",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "SetNodeFocus",
          "package": "uni-graphs",
          "partial": "Set Node Focus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:SetNodeFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "WrappedNode",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphDisp.html#WrappedNode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "WrappedNode",
          "package": "uni-graphs",
          "partial": "Wrapped Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:WrappedNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "Graph",
          "package": "uni-graphs",
          "signature": "Graph graph",
          "source": "src/Graphs-GraphDisp.html#Graph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "Graph",
          "package": "uni-graphs",
          "partial": "Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "WrappedNode",
          "package": "uni-graphs",
          "signature": "WrappedNode (node value)",
          "source": "src/Graphs-GraphDisp.html#WrappedNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "WrappedNode",
          "package": "uni-graphs",
          "partial": "Wrapped Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:WrappedNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "coMapArcTypeParms",
          "package": "uni-graphs",
          "signature": "(value2 -\u003e value1) -\u003e arcTypeParms value1 -\u003e arcTypeParms value2",
          "source": "src/Graphs-GraphDisp.html#coMapArcTypeParms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "coMapArcTypeParms",
          "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
          "package": "uni-graphs",
          "partial": "Map Arc Type Parms",
          "signature": "(value-\u003evalue)-\u003earcTypeParms value-\u003earcTypeParms value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:coMapArcTypeParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "coMapNodeTypeParms",
          "package": "uni-graphs",
          "signature": "(value2 -\u003e value1) -\u003e nodeTypeParms value1 -\u003e nodeTypeParms value2",
          "source": "src/Graphs-GraphDisp.html#coMapNodeTypeParms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "coMapNodeTypeParms",
          "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
          "package": "uni-graphs",
          "partial": "Map Node Type Parms",
          "signature": "(value-\u003evalue)-\u003enodeTypeParms value-\u003enodeTypeParms value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:coMapNodeTypeParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "compare1",
          "package": "uni-graphs",
          "signature": "takesParm value1 -\u003e takesParm value1 -\u003e Ordering",
          "source": "src/Graphs-GraphDisp.html#compare1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "compare1",
          "normalized": "a b-\u003ea b-\u003eOrdering",
          "package": "uni-graphs",
          "signature": "takesParm value-\u003etakesParm value-\u003eOrdering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:compare1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete an arc\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "deleteArc",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e arc value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#deleteArc",
          "type": "function"
        },
        "index": {
          "description": "delete an arc",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "deleteArc",
          "normalized": "Graph a b c d e f g h-\u003ef i-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Arc",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003earc value-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:deleteArc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "deleteArcPrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e arc value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#deleteArcPrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "deleteArcPrim",
          "normalized": "a-\u003eb c-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Arc Prim",
          "signature": "graph-\u003earc value-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:deleteArcPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete a node\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "deleteNode",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e node value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#deleteNode",
          "type": "function"
        },
        "index": {
          "description": "delete node",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "deleteNode",
          "normalized": "Graph a b c d e f g h-\u003ec i-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Node",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enode value-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:deleteNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "deleteNodePrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e node value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#deleteNodePrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "deleteNodePrim",
          "normalized": "a-\u003eb c-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Node Prim",
          "signature": "graph-\u003enode value-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:deleteNodePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "displaySort",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms",
          "source": "src/Graphs-GraphDisp.html#displaySort",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "displaySort",
          "package": "uni-graphs",
          "partial": "Sort",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:displaySort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "emptyArcTypeParms",
          "package": "uni-graphs",
          "signature": "arcTypeParms value",
          "source": "src/Graphs-GraphDisp.html#emptyArcTypeParms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "emptyArcTypeParms",
          "package": "uni-graphs",
          "partial": "Arc Type Parms",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:emptyArcTypeParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "emptyGraphParms",
          "package": "uni-graphs",
          "signature": "graphParms",
          "source": "src/Graphs-GraphDisp.html#emptyGraphParms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "emptyGraphParms",
          "package": "uni-graphs",
          "partial": "Graph Parms",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:emptyGraphParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "emptyNodeTypeParms",
          "package": "uni-graphs",
          "signature": "nodeTypeParms value",
          "source": "src/Graphs-GraphDisp.html#emptyNodeTypeParms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "emptyNodeTypeParms",
          "package": "uni-graphs",
          "partial": "Node Type Parms",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:emptyNodeTypeParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "eq1",
          "package": "uni-graphs",
          "signature": "takesParm value1 -\u003e takesParm value1 -\u003e Bool",
          "source": "src/Graphs-GraphDisp.html#eq1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "eq1",
          "normalized": "a b-\u003ea b-\u003eBool",
          "package": "uni-graphs",
          "signature": "takesParm value-\u003etakesParm value-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:eq1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the value associated with an arc\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "getArcValue",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e arc value -\u003e IO value",
          "source": "src/Graphs-GraphDisp.html#getArcValue",
          "type": "function"
        },
        "index": {
          "description": "get the value associated with an arc",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "getArcValue",
          "normalized": "Graph a b c d e f g h-\u003ef i-\u003eIO i",
          "package": "uni-graphs",
          "partial": "Arc Value",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003earc value-\u003eIO value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:getArcValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "getArcValuePrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e arc value -\u003e IO value",
          "source": "src/Graphs-GraphDisp.html#getArcValuePrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "getArcValuePrim",
          "normalized": "a-\u003eb c-\u003eIO c",
          "package": "uni-graphs",
          "partial": "Arc Value Prim",
          "signature": "graph-\u003earc value-\u003eIO value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:getArcValuePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake over all interaction on the graph, and perform the given\n action, supplying it with an event which is activated when the user\n double-clicks a node.  This is helpful when you need an interaction\n selecting several nodes.\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "getMultipleNodes",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e (Event (WrappedNode node) -\u003e IO a) -\u003e IO a",
          "source": "src/Graphs-GraphDisp.html#getMultipleNodes",
          "type": "function"
        },
        "index": {
          "description": "Take over all interaction on the graph and perform the given action supplying it with an event which is activated when the user double-clicks node This is helpful when you need an interaction selecting several nodes",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "getMultipleNodes",
          "normalized": "Graph a b c d e f g h-\u003e(Event(WrappedNode c)-\u003eIO i)-\u003eIO i",
          "package": "uni-graphs",
          "partial": "Multiple Nodes",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003e(Event(WrappedNode node)-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:getMultipleNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "getMultipleNodesPrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e (Event (WrappedNode node) -\u003e IO a) -\u003e IO a",
          "source": "src/Graphs-GraphDisp.html#getMultipleNodesPrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "getMultipleNodesPrim",
          "normalized": "a-\u003e(Event(WrappedNode b)-\u003eIO c)-\u003eIO c",
          "package": "uni-graphs",
          "partial": "Multiple Nodes Prim",
          "signature": "graph-\u003e(Event(WrappedNode node)-\u003eIO a)-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:getMultipleNodesPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the value associated with a node\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "getNodeValue",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e node value -\u003e IO value",
          "source": "src/Graphs-GraphDisp.html#getNodeValue",
          "type": "function"
        },
        "index": {
          "description": "get the value associated with node",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "getNodeValue",
          "normalized": "Graph a b c d e f g h-\u003ec i-\u003eIO i",
          "package": "uni-graphs",
          "partial": "Node Value",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enode value-\u003eIO value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:getNodeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "getNodeValuePrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e node value -\u003e IO value",
          "source": "src/Graphs-GraphDisp.html#getNodeValuePrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "getNodeValuePrim",
          "normalized": "a-\u003eb c-\u003eIO c",
          "package": "uni-graphs",
          "partial": "Node Value Prim",
          "signature": "graph-\u003enode value-\u003eIO value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:getNodeValuePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "invisibleArcType",
          "package": "uni-graphs",
          "signature": "arcType value",
          "source": "src/Graphs-GraphDisp.html#invisibleArcType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "invisibleArcType",
          "package": "uni-graphs",
          "partial": "Arc Type",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:invisibleArcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "invisibleArcTypeParms",
          "package": "uni-graphs",
          "signature": "arcTypeParms value",
          "source": "src/Graphs-GraphDisp.html#invisibleArcTypeParms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "invisibleArcTypeParms",
          "package": "uni-graphs",
          "partial": "Arc Type Parms",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:invisibleArcTypeParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstruct a new arc.\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "newArc",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e arcType value -\u003e value -\u003e node nodeFromValue -\u003e node nodeToValue -\u003e IO (arc value)",
          "source": "src/Graphs-GraphDisp.html#newArc",
          "type": "function"
        },
        "index": {
          "description": "construct new arc",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "newArc",
          "normalized": "Graph a b c d e f g h-\u003eg i-\u003ei-\u003ec j-\u003ec k-\u003eIO(f i)",
          "package": "uni-graphs",
          "partial": "Arc",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003earcType value-\u003evalue-\u003enode nodeFromValue-\u003enode nodeToValue-\u003eIO(arc value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newArc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a node, construct a \u003ccode\u003e\u003ca\u003eListDrawer\u003c/a\u003e\u003c/code\u003e which can be used as a way\n of drawing ordered sets of out-arcs from that node.\n (NB.  At the moment daVinci does not do this properly, but that is\n daVinci's fault, not mine.)\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "newArcListDrawer",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e node nodeFromValue -\u003e ListDrawer (arcType value, value, WrappedNode node) (arc value)",
          "source": "src/Graphs-GraphDisp.html#newArcListDrawer",
          "type": "function"
        },
        "index": {
          "description": "Given node construct ListDrawer which can be used as way of drawing ordered sets of out-arcs from that node NB At the moment daVinci does not do this properly but that is daVinci fault not mine",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "newArcListDrawer",
          "normalized": "Graph a b c d e f g h-\u003ec i-\u003eListDrawer(g j,j,WrappedNode c)(f j)",
          "package": "uni-graphs",
          "partial": "Arc List Drawer",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enode nodeFromValue-\u003eListDrawer(arcType value,value,WrappedNode node)(arc value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newArcListDrawer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "newArcListDrawerPrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e nodeFrom nodeFromValue -\u003e ListDrawer (arcType value, value, WrappedNode nodeTo) (arc value)",
          "source": "src/Graphs-GraphDisp.html#newArcListDrawerPrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "newArcListDrawerPrim",
          "normalized": "a-\u003eb c-\u003eListDrawer(d e,e,WrappedNode f)(g e)",
          "package": "uni-graphs",
          "partial": "Arc List Drawer Prim",
          "signature": "graph-\u003enodeFrom nodeFromValue-\u003eListDrawer(arcType value,value,WrappedNode nodeTo)(arc value)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newArcListDrawerPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "newArcPrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e arcType value -\u003e value -\u003e nodeFrom nodeFromValue -\u003e nodeTo nodeToValue -\u003e IO (arc value)",
          "source": "src/Graphs-GraphDisp.html#newArcPrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "newArcPrim",
          "normalized": "a-\u003eb c-\u003ec-\u003ed e-\u003ef g-\u003eIO(h c)",
          "package": "uni-graphs",
          "partial": "Arc Prim",
          "signature": "graph-\u003earcType value-\u003evalue-\u003enodeFrom nodeFromValue-\u003enodeTo nodeToValue-\u003eIO(arc value)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newArcPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a new arc type\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "newArcType",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e arcTypeParms value -\u003e IO (arcType value)",
          "source": "src/Graphs-GraphDisp.html#newArcType",
          "type": "function"
        },
        "index": {
          "description": "create new arc type",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "newArcType",
          "normalized": "Graph a b c d e f g h-\u003eh i-\u003eIO(g i)",
          "package": "uni-graphs",
          "partial": "Arc Type",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003earcTypeParms value-\u003eIO(arcType value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newArcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "newArcTypePrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e arcTypeParms value -\u003e IO (arcType value)",
          "source": "src/Graphs-GraphDisp.html#newArcTypePrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "newArcTypePrim",
          "normalized": "a-\u003eb c-\u003eIO(d c)",
          "package": "uni-graphs",
          "partial": "Arc Type Prim",
          "signature": "graph-\u003earcTypeParms value-\u003eIO(arcType value)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newArcTypePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new graph.  The input value will be something like\n \u003ca\u003eDaVinciGraph\u003c/a\u003e's value \u003ccode\u003edaVinciSort\u003c/code\u003e; the resulting graph will be\n returned.\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "newGraph",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e graphParms -\u003e IO (Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms)",
          "source": "src/Graphs-GraphDisp.html#newGraph",
          "type": "function"
        },
        "index": {
          "description": "Construct new graph The input value will be something like DaVinciGraph value daVinciSort the resulting graph will be returned",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "newGraph",
          "normalized": "Graph a b c d e f g h-\u003eb-\u003eIO(Graph a b c d e f g h)",
          "package": "uni-graphs",
          "partial": "Graph",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003egraphParms-\u003eIO(Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "newGraphPrim",
          "package": "uni-graphs",
          "signature": "graphParms -\u003e IO graph",
          "source": "src/Graphs-GraphDisp.html#newGraphPrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "newGraphPrim",
          "normalized": "a-\u003eIO b",
          "package": "uni-graphs",
          "partial": "Graph Prim",
          "signature": "graphParms-\u003eIO graph",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newGraphPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstruct a new node.\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "newNode",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e nodeType value -\u003e value -\u003e IO (node value)",
          "source": "src/Graphs-GraphDisp.html#newNode",
          "type": "function"
        },
        "index": {
          "description": "construct new node",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "newNode",
          "normalized": "Graph a b c d e f g h-\u003ed i-\u003ei-\u003eIO(c i)",
          "package": "uni-graphs",
          "partial": "Node",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enodeType value-\u003evalue-\u003eIO(node value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "newNodePrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e nodeType value -\u003e value -\u003e IO (node value)",
          "source": "src/Graphs-GraphDisp.html#newNodePrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "newNodePrim",
          "normalized": "a-\u003eb c-\u003ec-\u003eIO(d c)",
          "package": "uni-graphs",
          "partial": "Node Prim",
          "signature": "graph-\u003enodeType value-\u003evalue-\u003eIO(node value)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newNodePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstruct a node type.\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "newNodeType",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e nodeTypeParms value -\u003e IO (nodeType value)",
          "source": "src/Graphs-GraphDisp.html#newNodeType",
          "type": "function"
        },
        "index": {
          "description": "construct node type",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "newNodeType",
          "normalized": "Graph a b c d e f g h-\u003ee i-\u003eIO(d i)",
          "package": "uni-graphs",
          "partial": "Node Type",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enodeTypeParms value-\u003eIO(nodeType value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newNodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "newNodeTypePrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e nodeTypeParms value -\u003e IO (nodeType value)",
          "source": "src/Graphs-GraphDisp.html#newNodeTypePrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "newNodeTypePrim",
          "normalized": "a-\u003eb c-\u003eIO(d c)",
          "package": "uni-graphs",
          "partial": "Node Type Prim",
          "signature": "graph-\u003enodeTypeParms value-\u003eIO(nodeType value)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newNodeTypePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedraw the graph.  This is needed when you want to show updates.\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "redraw",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#redraw",
          "type": "function"
        },
        "index": {
          "description": "Redraw the graph This is needed when you want to show updates",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "redraw",
          "normalized": "Graph a b c d e f g h-\u003eIO()",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:redraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "redrawPrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#redrawPrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "redrawPrim",
          "normalized": "a-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Prim",
          "signature": "graph-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:redrawPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "setArcType",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e arc value -\u003e arcType value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#setArcType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "setArcType",
          "normalized": "Graph a b c d e f g h-\u003ef i-\u003eg i-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Arc Type",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003earc value-\u003earcType value-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setArcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "setArcTypePrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e arc value -\u003e arcType value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#setArcTypePrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "setArcTypePrim",
          "normalized": "a-\u003eb c-\u003ed c-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Arc Type Prim",
          "signature": "graph-\u003earc value-\u003earcType value-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setArcTypePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the value associated with an arc\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "setArcValue",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e arc value -\u003e value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#setArcValue",
          "type": "function"
        },
        "index": {
          "description": "set the value associated with an arc",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "setArcValue",
          "normalized": "Graph a b c d e f g h-\u003ef i-\u003ei-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Arc Value",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003earc value-\u003evalue-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setArcValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "setArcValuePrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e arc value -\u003e value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#setArcValuePrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "setArcValuePrim",
          "normalized": "a-\u003eb c-\u003ec-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Arc Value Prim",
          "signature": "graph-\u003earc value-\u003evalue-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setArcValuePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "setNodeFocus",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e node value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#setNodeFocus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "setNodeFocus",
          "normalized": "Graph a b c d e f g h-\u003ec i-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Node Focus",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enode value-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setNodeFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "setNodeFocusPrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e node value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#setNodeFocusPrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "setNodeFocusPrim",
          "normalized": "a-\u003eb c-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Node Focus Prim",
          "signature": "graph-\u003enode value-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setNodeFocusPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset a node's type\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "setNodeType",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e node value -\u003e nodeType value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#setNodeType",
          "type": "function"
        },
        "index": {
          "description": "set node type",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "setNodeType",
          "normalized": "Graph a b c d e f g h-\u003ec i-\u003ed i-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Node Type",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enode value-\u003enodeType value-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setNodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "setNodeTypePrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e node value -\u003e nodeType value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#setNodeTypePrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "setNodeTypePrim",
          "normalized": "a-\u003eb c-\u003ed c-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Node Type Prim",
          "signature": "graph-\u003enode value-\u003enodeType value-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setNodeTypePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the value associated with a node.\n\u003c/p\u003e",
          "module": "Graphs.GraphDisp",
          "name": "setNodeValue",
          "package": "uni-graphs",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e node value -\u003e value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#setNodeValue",
          "type": "function"
        },
        "index": {
          "description": "set the value associated with node",
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "setNodeValue",
          "normalized": "Graph a b c d e f g h-\u003ec i-\u003ei-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Node Value",
          "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enode value-\u003evalue-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setNodeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphDisp",
          "name": "setNodeValuePrim",
          "package": "uni-graphs",
          "signature": "graph -\u003e node value -\u003e value -\u003e IO ()",
          "source": "src/Graphs-GraphDisp.html#setNodeValuePrim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphs GraphDisp",
          "module": "Graphs.GraphDisp",
          "name": "setNodeValuePrim",
          "normalized": "a-\u003eb c-\u003ec-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Node Value Prim",
          "signature": "graph-\u003enode value-\u003evalue-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setNodeValuePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e#\n\u003c/p\u003e\u003cp\u003eThis Graph Editor is inspired by the one by Einar Karlsen but uses\n the new graph interface.\n\u003c/p\u003e\u003cp\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e#\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.GraphEditor",
          "name": "GraphEditor",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphEditor.html",
          "type": "module"
        },
        "index": {
          "description": "This Graph Editor is inspired by the one by Einar Karlsen but uses the new graph interface",
          "hierarchy": "Graphs GraphEditor",
          "module": "Graphs.GraphEditor",
          "name": "GraphEditor",
          "package": "uni-graphs",
          "partial": "Graph Editor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphEditor",
          "name": "Displayable",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphEditor.html#Displayable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphs GraphEditor",
          "module": "Graphs.GraphEditor",
          "name": "Displayable",
          "package": "uni-graphs",
          "partial": "Displayable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#t:Displayable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphEditor",
          "name": "DisplayableCannedGraph",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphEditor.html#DisplayableCannedGraph",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphs GraphEditor",
          "module": "Graphs.GraphEditor",
          "name": "DisplayableCannedGraph",
          "package": "uni-graphs",
          "partial": "Displayable Canned Graph",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#t:DisplayableCannedGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphEditor",
          "name": "DisplayableGraphConnection",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphEditor.html#DisplayableGraphConnection",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphs GraphEditor",
          "module": "Graphs.GraphEditor",
          "name": "DisplayableGraphConnection",
          "package": "uni-graphs",
          "partial": "Displayable Graph Connection",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#t:DisplayableGraphConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphEditor",
          "name": "DisplayableUpdate",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphEditor.html#DisplayableUpdate",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphs GraphEditor",
          "module": "Graphs.GraphEditor",
          "name": "DisplayableUpdate",
          "package": "uni-graphs",
          "partial": "Displayable Update",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#t:DisplayableUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphEditor",
          "name": "GraphEditor",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphEditor.html#GraphEditor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs GraphEditor",
          "module": "Graphs.GraphEditor",
          "name": "GraphEditor",
          "package": "uni-graphs",
          "partial": "Graph Editor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#t:GraphEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphEditor",
          "name": "newGraphEditor",
          "package": "uni-graphs",
          "signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e Displayable graph -\u003e IO GraphEditor",
          "source": "src/Graphs-GraphEditor.html#newGraphEditor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphEditor",
          "module": "Graphs.GraphEditor",
          "name": "newGraphEditor",
          "normalized": "Graph a b c d e f g h-\u003eDisplayable i-\u003eIO GraphEditor",
          "package": "uni-graphs",
          "partial": "Graph Editor",
          "signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003eDisplayable graph-\u003eIO GraphEditor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#v:newGraphEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains various functions for operating on graphs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.GraphOps",
          "name": "GraphOps",
          "package": "uni-graphs",
          "source": "src/Graphs-GraphOps.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains various functions for operating on graphs",
          "hierarchy": "Graphs GraphOps",
          "module": "Graphs.GraphOps",
          "name": "GraphOps",
          "package": "uni-graphs",
          "partial": "Graph Ops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphOps.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphOps",
          "name": "isAncestor",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Node -\u003e Node -\u003e IO Bool",
          "source": "src/Graphs-GraphOps.html#isAncestor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphOps",
          "module": "Graphs.GraphOps",
          "name": "isAncestor",
          "normalized": "a b c d e-\u003eNode-\u003eNode-\u003eIO Bool",
          "package": "uni-graphs",
          "partial": "Ancestor",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNode-\u003eNode-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphOps.html#v:isAncestor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.GraphOps",
          "name": "isAncestorBy",
          "package": "uni-graphs",
          "signature": "(key -\u003e IO [key]) -\u003e key -\u003e key -\u003e IO Bool",
          "source": "src/Graphs-GraphOps.html#isAncestorBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs GraphOps",
          "module": "Graphs.GraphOps",
          "name": "isAncestorBy",
          "normalized": "(a-\u003eIO[a])-\u003ea-\u003ea-\u003eIO Bool",
          "package": "uni-graphs",
          "partial": "Ancestor By",
          "signature": "(key-\u003eIO[key])-\u003ekey-\u003ekey-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphOps.html#v:isAncestorBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNewNames is used for generating new names for Node's, Arc's,\n NodeType's and ArcType's in a graph on a globally unique basis.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.NewNames",
          "name": "NewNames",
          "package": "uni-graphs",
          "source": "src/Graphs-NewNames.html",
          "type": "module"
        },
        "index": {
          "description": "NewNames is used for generating new names for Node Arc NodeType and ArcType in graph on globally unique basis",
          "hierarchy": "Graphs NewNames",
          "module": "Graphs.NewNames",
          "name": "NewNames",
          "package": "uni-graphs",
          "partial": "New Names",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.NewNames",
          "name": "FrozenNameSource",
          "package": "uni-graphs",
          "source": "src/Graphs-NewNames.html#FrozenNameSource",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs NewNames",
          "module": "Graphs.NewNames",
          "name": "FrozenNameSource",
          "package": "uni-graphs",
          "partial": "Frozen Name Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#t:FrozenNameSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.NewNames",
          "name": "NameSource",
          "package": "uni-graphs",
          "source": "src/Graphs-NewNames.html#NameSource",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs NewNames",
          "module": "Graphs.NewNames",
          "name": "NameSource",
          "package": "uni-graphs",
          "partial": "Name Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#t:NameSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.NewNames",
          "name": "NameSourceBranch",
          "package": "uni-graphs",
          "source": "src/Graphs-NewNames.html#NameSourceBranch",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs NewNames",
          "module": "Graphs.NewNames",
          "name": "NameSourceBranch",
          "package": "uni-graphs",
          "partial": "Name Source Branch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#t:NameSourceBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.NewNames",
          "name": "branch",
          "package": "uni-graphs",
          "signature": "NameSource -\u003e IO NameSourceBranch",
          "source": "src/Graphs-NewNames.html#branch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs NewNames",
          "module": "Graphs.NewNames",
          "name": "branch",
          "normalized": "NameSource-\u003eIO NameSourceBranch",
          "package": "uni-graphs",
          "signature": "NameSource-\u003eIO NameSourceBranch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#v:branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.NewNames",
          "name": "defrostNameSource",
          "package": "uni-graphs",
          "signature": "NameSource -\u003e FrozenNameSource -\u003e IO ()",
          "source": "src/Graphs-NewNames.html#defrostNameSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs NewNames",
          "module": "Graphs.NewNames",
          "name": "defrostNameSource",
          "normalized": "NameSource-\u003eFrozenNameSource-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Name Source",
          "signature": "NameSource-\u003eFrozenNameSource-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#v:defrostNameSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.NewNames",
          "name": "freezeNameSource",
          "package": "uni-graphs",
          "signature": "NameSource -\u003e IO FrozenNameSource",
          "source": "src/Graphs-NewNames.html#freezeNameSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs NewNames",
          "module": "Graphs.NewNames",
          "name": "freezeNameSource",
          "normalized": "NameSource-\u003eIO FrozenNameSource",
          "package": "uni-graphs",
          "partial": "Name Source",
          "signature": "NameSource-\u003eIO FrozenNameSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#v:freezeNameSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.NewNames",
          "name": "getNewName",
          "package": "uni-graphs",
          "signature": "NameSource -\u003e IO String",
          "source": "src/Graphs-NewNames.html#getNewName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs NewNames",
          "module": "Graphs.NewNames",
          "name": "getNewName",
          "normalized": "NameSource-\u003eIO String",
          "package": "uni-graphs",
          "partial": "New Name",
          "signature": "NameSource-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#v:getNewName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.NewNames",
          "name": "initialBranch",
          "package": "uni-graphs",
          "signature": "NameSourceBranch",
          "source": "src/Graphs-NewNames.html#initialBranch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs NewNames",
          "module": "Graphs.NewNames",
          "name": "initialBranch",
          "package": "uni-graphs",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#v:initialBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.NewNames",
          "name": "useBranch",
          "package": "uni-graphs",
          "signature": "NameSourceBranch -\u003e IO NameSource",
          "source": "src/Graphs-NewNames.html#useBranch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs NewNames",
          "module": "Graphs.NewNames",
          "name": "useBranch",
          "normalized": "NameSourceBranch-\u003eIO NameSource",
          "package": "uni-graphs",
          "partial": "Branch",
          "signature": "NameSourceBranch-\u003eIO NameSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#v:useBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a simple \"pure\" graph interface, destined\n to be used for the complex graph operations required by VersionDag.\n\u003c/p\u003e\u003cp\u003eWe instance \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e for debugging purposes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.PureGraph",
          "name": "PureGraph",
          "package": "uni-graphs",
          "source": "src/Graphs-PureGraph.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements simple pure graph interface destined to be used for the complex graph operations required by VersionDag We instance Show for debugging purposes",
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "PureGraph",
          "package": "uni-graphs",
          "partial": "Pure Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "ArcData",
          "package": "uni-graphs",
          "source": "src/Graphs-PureGraph.html#ArcData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "ArcData",
          "package": "uni-graphs",
          "partial": "Arc Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#t:ArcData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "NodeData",
          "package": "uni-graphs",
          "source": "src/Graphs-PureGraph.html#NodeData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "NodeData",
          "package": "uni-graphs",
          "partial": "Node Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#t:NodeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enode given with their parent nodes.  The parents should always come\n before their children in the list.\n\u003c/p\u003e",
          "module": "Graphs.PureGraph",
          "name": "PureGraph",
          "package": "uni-graphs",
          "source": "src/Graphs-PureGraph.html#PureGraph",
          "type": "newtype"
        },
        "index": {
          "description": "node given with their parent nodes The parents should always come before their children in the list",
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "PureGraph",
          "package": "uni-graphs",
          "partial": "Pure Graph",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#t:PureGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "ArcData",
          "package": "uni-graphs",
          "signature": "ArcData",
          "source": "src/Graphs-PureGraph.html#ArcData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "ArcData",
          "package": "uni-graphs",
          "partial": "Arc Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:ArcData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "NodeData",
          "package": "uni-graphs",
          "signature": "NodeData",
          "source": "src/Graphs-PureGraph.html#NodeData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "NodeData",
          "package": "uni-graphs",
          "partial": "Node Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:NodeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "PureGraph",
          "package": "uni-graphs",
          "signature": "PureGraph",
          "source": "src/Graphs-PureGraph.html#PureGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "PureGraph",
          "package": "uni-graphs",
          "partial": "Pure Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:PureGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a node with given parent arcs from it.\n\u003c/p\u003e",
          "module": "Graphs.PureGraph",
          "name": "addNode",
          "package": "uni-graphs",
          "signature": "PureGraph nodeInfo arcInfo -\u003e nodeInfo -\u003e [(arcInfo, nodeInfo)] -\u003e PureGraph nodeInfo arcInfo",
          "source": "src/Graphs-PureGraph.html#addNode",
          "type": "function"
        },
        "index": {
          "description": "add node with given parent arcs from it",
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "addNode",
          "normalized": "PureGraph a b-\u003ea-\u003e[(b,a)]-\u003ePureGraph a b",
          "package": "uni-graphs",
          "partial": "Node",
          "signature": "PureGraph nodeInfo arcInfo-\u003enodeInfo-\u003e[(arcInfo,nodeInfo)]-\u003ePureGraph nodeInfo arcInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:addNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "arcInfo",
          "package": "uni-graphs",
          "signature": "arcInfo",
          "source": "src/Graphs-PureGraph.html#ArcData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "arcInfo",
          "package": "uni-graphs",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:arcInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNB.  The graph will end up ill-formed if you delete a node which\n has parent arcs pointing to it.\n\u003c/p\u003e",
          "module": "Graphs.PureGraph",
          "name": "deleteNode",
          "package": "uni-graphs",
          "signature": "PureGraph nodeInfo arcInfo -\u003e nodeInfo -\u003e PureGraph nodeInfo arcInfo",
          "source": "src/Graphs-PureGraph.html#deleteNode",
          "type": "function"
        },
        "index": {
          "description": "NB The graph will end up ill-formed if you delete node which has parent arcs pointing to it",
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "deleteNode",
          "normalized": "PureGraph a b-\u003ea-\u003ePureGraph a b",
          "package": "uni-graphs",
          "partial": "Node",
          "signature": "PureGraph nodeInfo arcInfo-\u003enodeInfo-\u003ePureGraph nodeInfo arcInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:deleteNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "emptyPureGraph",
          "package": "uni-graphs",
          "signature": "PureGraph nodeInfo arcInfo",
          "source": "src/Graphs-PureGraph.html#emptyPureGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "emptyPureGraph",
          "package": "uni-graphs",
          "partial": "Pure Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:emptyPureGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "mapArcInfo",
          "package": "uni-graphs",
          "signature": "(arcInfo1 -\u003e arcInfo2) -\u003e PureGraph nodeInfo arcInfo1 -\u003e PureGraph nodeInfo arcInfo2",
          "source": "src/Graphs-PureGraph.html#mapArcInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "mapArcInfo",
          "normalized": "(a-\u003ea)-\u003ePureGraph b a-\u003ePureGraph b a",
          "package": "uni-graphs",
          "partial": "Arc Info",
          "signature": "(arcInfo-\u003earcInfo)-\u003ePureGraph nodeInfo arcInfo-\u003ePureGraph nodeInfo arcInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:mapArcInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "nodeDataFM",
          "package": "uni-graphs",
          "signature": "Map nodeInfo (NodeData nodeInfo arcInfo)",
          "source": "src/Graphs-PureGraph.html#PureGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "nodeDataFM",
          "package": "uni-graphs",
          "partial": "Data FM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:nodeDataFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "nodeExists",
          "package": "uni-graphs",
          "signature": "PureGraph nodeInfo arcInfo -\u003e nodeInfo -\u003e Bool",
          "source": "src/Graphs-PureGraph.html#nodeExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "nodeExists",
          "normalized": "PureGraph a b-\u003ea-\u003eBool",
          "package": "uni-graphs",
          "partial": "Exists",
          "signature": "PureGraph nodeInfo arcInfo-\u003enodeInfo-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:nodeExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "parentNodes",
          "package": "uni-graphs",
          "signature": "NodeData nodeInfo arcInfo -\u003e [nodeInfo]",
          "source": "src/Graphs-PureGraph.html#parentNodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "parentNodes",
          "normalized": "NodeData a b-\u003e[a]",
          "package": "uni-graphs",
          "partial": "Nodes",
          "signature": "NodeData nodeInfo arcInfo-\u003e[nodeInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:parentNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "parents",
          "package": "uni-graphs",
          "signature": "[ArcData nodeInfo arcInfo]",
          "source": "src/Graphs-PureGraph.html#NodeData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "parents",
          "normalized": "[ArcData a b]",
          "package": "uni-graphs",
          "signature": "[ArcData nodeInfo arcInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:parents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "target",
          "package": "uni-graphs",
          "signature": "nodeInfo",
          "source": "src/Graphs-PureGraph.html#ArcData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "target",
          "package": "uni-graphs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "toAllNodes",
          "package": "uni-graphs",
          "signature": "PureGraph nodeInfo arcInfo -\u003e [nodeInfo]",
          "source": "src/Graphs-PureGraph.html#toAllNodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "toAllNodes",
          "normalized": "PureGraph a b-\u003e[a]",
          "package": "uni-graphs",
          "partial": "All Nodes",
          "signature": "PureGraph nodeInfo arcInfo-\u003e[nodeInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:toAllNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraph",
          "name": "toNodeParents",
          "package": "uni-graphs",
          "signature": "PureGraph nodeInfo arcInfo -\u003e nodeInfo -\u003e Maybe [nodeInfo]",
          "source": "src/Graphs-PureGraph.html#toNodeParents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraph",
          "module": "Graphs.PureGraph",
          "name": "toNodeParents",
          "normalized": "PureGraph a b-\u003ea-\u003eMaybe[a]",
          "package": "uni-graphs",
          "partial": "Node Parents",
          "signature": "PureGraph nodeInfo arcInfo-\u003enodeInfo-\u003eMaybe[nodeInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:toNodeParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraphMakeConsistent",
          "name": "PureGraphMakeConsistent",
          "package": "uni-graphs",
          "source": "src/Graphs-PureGraphMakeConsistent.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphs PureGraphMakeConsistent",
          "module": "Graphs.PureGraphMakeConsistent",
          "name": "PureGraphMakeConsistent",
          "package": "uni-graphs",
          "partial": "Pure Graph Make Consistent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraphMakeConsistent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraphMakeConsistent",
          "name": "pureGraphMakeConsistent",
          "package": "uni-graphs",
          "signature": "PureGraph nodeInfo arcInfo -\u003e PureGraph nodeInfo arcInfo",
          "source": "src/Graphs-PureGraphMakeConsistent.html#pureGraphMakeConsistent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraphMakeConsistent",
          "module": "Graphs.PureGraphMakeConsistent",
          "name": "pureGraphMakeConsistent",
          "normalized": "PureGraph a b-\u003ePureGraph a b",
          "package": "uni-graphs",
          "partial": "Graph Make Consistent",
          "signature": "PureGraph nodeInfo arcInfo-\u003ePureGraph nodeInfo arcInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraphMakeConsistent.html#v:pureGraphMakeConsistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe functions in this module implement pruning of \u003ccode\u003e\u003ca\u003ePureGraph\u003c/a\u003e\u003c/code\u003es,\n to remove hidden nodes as far as possible, while still showing the\n structure between non-hidden nodes.\n\u003c/p\u003e\u003cp\u003eNB.  It is assumed the PureGraph is acyclic!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.PureGraphPrune",
          "name": "PureGraphPrune",
          "package": "uni-graphs",
          "source": "src/Graphs-PureGraphPrune.html",
          "type": "module"
        },
        "index": {
          "description": "The functions in this module implement pruning of PureGraph to remove hidden nodes as far as possible while still showing the structure between non-hidden nodes NB It is assumed the PureGraph is acyclic",
          "hierarchy": "Graphs PureGraphPrune",
          "module": "Graphs.PureGraphPrune",
          "name": "PureGraphPrune",
          "package": "uni-graphs",
          "partial": "Pure Graph Prune",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraphPrune.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove \u003ca\u003ehidden\u003c/a\u003e vertices as far as possible from a graph, which\n must be acyclic, while still preserving the structure as far as possible.\n\u003c/p\u003e",
          "module": "Graphs.PureGraphPrune",
          "name": "pureGraphPrune",
          "package": "uni-graphs",
          "signature": "(nodeInfo -\u003e Bool)-\u003e PureGraph nodeInfo arcInfo-\u003e PureGraph nodeInfo (Maybe arcInfo)",
          "type": "function"
        },
        "index": {
          "description": "Remove hidden vertices as far as possible from graph which must be acyclic while still preserving the structure as far as possible",
          "hierarchy": "Graphs PureGraphPrune",
          "module": "Graphs.PureGraphPrune",
          "name": "pureGraphPrune",
          "normalized": "(a-\u003eBool)-\u003ePureGraph a b-\u003ePureGraph a(Maybe b)",
          "package": "uni-graphs",
          "partial": "Graph Prune",
          "signature": "(nodeInfo-\u003eBool)-\u003ePureGraph nodeInfo arcInfo-\u003ePureGraph nodeInfo(Maybe arcInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraphPrune.html#v:pureGraphPrune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module, given a changing source of \u003ccode\u003e\u003ca\u003ePureGraph\u003c/a\u003e\u003c/code\u003es, transforms it into\n a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e. -}\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.PureGraphToGraph",
          "name": "PureGraphToGraph",
          "package": "uni-graphs",
          "source": "src/Graphs-PureGraphToGraph.html",
          "type": "module"
        },
        "index": {
          "description": "This module given changing source of PureGraph transforms it into Graph",
          "hierarchy": "Graphs PureGraphToGraph",
          "module": "Graphs.PureGraphToGraph",
          "name": "PureGraphToGraph",
          "package": "uni-graphs",
          "partial": "Pure Graph To Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraphToGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.PureGraphToGraph",
          "name": "pureGraphToGraph",
          "package": "uni-graphs",
          "signature": "SimpleSource (PureGraph nodeKey arcInfo, nodeKey -\u003e nodeInfo) -\u003e GraphConnection nodeInfo () arcInfo ()",
          "source": "src/Graphs-PureGraphToGraph.html#pureGraphToGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs PureGraphToGraph",
          "module": "Graphs.PureGraphToGraph",
          "name": "pureGraphToGraph",
          "normalized": "SimpleSource(PureGraph a b,a-\u003ec)-\u003eGraphConnection c()b()",
          "package": "uni-graphs",
          "partial": "Graph To Graph",
          "signature": "SimpleSource(PureGraph nodeKey arcInfo,nodeKey-\u003enodeInfo)-\u003eGraphConnection nodeInfo()arcInfo()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraphToGraph.html#v:pureGraphToGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe removeAncestors function in this module (actually an IO action) takes\n a graph G and a list of nodes N and computes N' = { n in N |\n    there does not exist an m in N and a non-trivial path n -\u003e m }.\n This is required for graph merging.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.RemoveAncestors",
          "name": "RemoveAncestors",
          "package": "uni-graphs",
          "source": "src/Graphs-RemoveAncestors.html",
          "type": "module"
        },
        "index": {
          "description": "The removeAncestors function in this module actually an IO action takes graph and list of nodes and computes in there does not exist an in and non-trivial path This is required for graph merging",
          "hierarchy": "Graphs RemoveAncestors",
          "module": "Graphs.RemoveAncestors",
          "name": "RemoveAncestors",
          "package": "uni-graphs",
          "partial": "Remove Ancestors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-RemoveAncestors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a graph G and a list of nodes N and computes N' = { n in N |\n there does not exist an m in N and a non-trivial path n -\u003e m }.\n\u003c/p\u003e",
          "module": "Graphs.RemoveAncestors",
          "name": "removeAncestors",
          "package": "uni-graphs",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e [Node] -\u003e IO [Node]",
          "source": "src/Graphs-RemoveAncestors.html#removeAncestors",
          "type": "function"
        },
        "index": {
          "description": "Takes graph and list of nodes and computes in there does not exist an in and non-trivial path",
          "hierarchy": "Graphs RemoveAncestors",
          "module": "Graphs.RemoveAncestors",
          "name": "removeAncestors",
          "normalized": "a b c d e-\u003e[Node]-\u003eIO[Node]",
          "package": "uni-graphs",
          "partial": "Ancestors",
          "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003e[Node]-\u003eIO[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-RemoveAncestors.html#v:removeAncestors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral removeAncestors function, which takes as argument the action\n computing a Node's successors.\n\u003c/p\u003e",
          "module": "Graphs.RemoveAncestors",
          "name": "removeAncestorsBy",
          "package": "uni-graphs",
          "signature": "(node -\u003e m [node]) -\u003e [node] -\u003e m [node]",
          "source": "src/Graphs-RemoveAncestors.html#removeAncestorsBy",
          "type": "function"
        },
        "index": {
          "description": "General removeAncestors function which takes as argument the action computing Node successors",
          "hierarchy": "Graphs RemoveAncestors",
          "module": "Graphs.RemoveAncestors",
          "name": "removeAncestorsBy",
          "normalized": "(a-\u003eb[a])-\u003e[a]-\u003eb[a]",
          "package": "uni-graphs",
          "partial": "Ancestors By",
          "signature": "(node-\u003em[node])-\u003e[node]-\u003em[node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-RemoveAncestors.html#v:removeAncestorsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure version of \u003ccode\u003e\u003ca\u003eremoveAncestorsBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphs.RemoveAncestors",
          "name": "removeAncestorsByPure",
          "package": "uni-graphs",
          "signature": "(node -\u003e [node]) -\u003e [node] -\u003e [node]",
          "source": "src/Graphs-RemoveAncestors.html#removeAncestorsByPure",
          "type": "function"
        },
        "index": {
          "description": "Pure version of removeAncestorsBy",
          "hierarchy": "Graphs RemoveAncestors",
          "module": "Graphs.RemoveAncestors",
          "name": "removeAncestorsByPure",
          "normalized": "(a-\u003e[a])-\u003e[a]-\u003e[a]",
          "package": "uni-graphs",
          "partial": "Ancestors By Pure",
          "signature": "(node-\u003e[node])-\u003e[node]-\u003e[node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-RemoveAncestors.html#v:removeAncestorsByPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimpleGraph is, as the name implies, a simple implementation\n of the Graph interface.  For example, we don't bother to sort\n the arcs going out of a node, meaning that to find out if two\n nodes are connected requires searching all the arcs out of one\n of the nodes, or all the arcs into the other.\n\u003c/p\u003e\u003cp\u003eNotes on synchronicity.\n    The Update operations Set*Label are intrinsically unsafe in\n    this implementation since if two communicating SimpleGraphs\n    both execute a Set*Label operation with different label values\n    they may end up with each others values.  It is recommended that\n    Set*Label only be used during the initialisation of the object,\n    as a way of tieing the knot.\n\u003c/p\u003e\u003cp\u003eIn addition, Update operations which create a value based on a previous\n    value (EG a NewNode creates a Node based on a NodeType), do\n    assume that the previous value has already been created.\n\u003c/p\u003e\u003cp\u003eI realise this is somewhat informal.  It may be necessary to\n    replace SimpleGraph by something more complicated later . . .\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.SimpleGraph",
          "name": "SimpleGraph",
          "package": "uni-graphs",
          "source": "src/Graphs-SimpleGraph.html",
          "type": "module"
        },
        "index": {
          "description": "SimpleGraph is as the name implies simple implementation of the Graph interface For example we don bother to sort the arcs going out of node meaning that to find out if two nodes are connected requires searching all the arcs out of one of the nodes or all the arcs into the other Notes on synchronicity The Update operations Set Label are intrinsically unsafe in this implementation since if two communicating SimpleGraphs both execute Set Label operation with different label values they may end up with each others values It is recommended that Set Label only be used during the initialisation of the object as way of tieing the knot In addition Update operations which create value based on previous value EG NewNode creates Node based on NodeType do assume that the previous value has already been created realise this is somewhat informal It may be necessary to replace SimpleGraph by something more complicated later",
          "hierarchy": "Graphs SimpleGraph",
          "module": "Graphs.SimpleGraph",
          "name": "SimpleGraph",
          "package": "uni-graphs",
          "partial": "Simple Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.SimpleGraph",
          "name": "ClientData",
          "package": "uni-graphs",
          "source": "src/Graphs-SimpleGraph.html#ClientData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs SimpleGraph",
          "module": "Graphs.SimpleGraph",
          "name": "ClientData",
          "package": "uni-graphs",
          "partial": "Client Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#t:ClientData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.SimpleGraph",
          "name": "SimpleGraph",
          "package": "uni-graphs",
          "source": "src/Graphs-SimpleGraph.html#SimpleGraph",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs SimpleGraph",
          "module": "Graphs.SimpleGraph",
          "name": "SimpleGraph",
          "package": "uni-graphs",
          "partial": "Simple Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#t:SimpleGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.SimpleGraph",
          "name": "ClientData",
          "package": "uni-graphs",
          "signature": "ClientData",
          "source": "src/Graphs-SimpleGraph.html#ClientData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs SimpleGraph",
          "module": "Graphs.SimpleGraph",
          "name": "ClientData",
          "package": "uni-graphs",
          "partial": "Client Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#v:ClientData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.SimpleGraph",
          "name": "clientID",
          "package": "uni-graphs",
          "signature": "ObjectID",
          "source": "src/Graphs-SimpleGraph.html#ClientData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs SimpleGraph",
          "module": "Graphs.SimpleGraph",
          "name": "clientID",
          "package": "uni-graphs",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#v:clientID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.SimpleGraph",
          "name": "clientSink",
          "package": "uni-graphs",
          "signature": "Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO ()",
          "source": "src/Graphs-SimpleGraph.html#ClientData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs SimpleGraph",
          "module": "Graphs.SimpleGraph",
          "name": "clientSink",
          "normalized": "Update a b c d-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Sink",
          "signature": "Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#v:clientSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.SimpleGraph",
          "name": "delayedAction",
          "package": "uni-graphs",
          "signature": "SimpleGraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Node -\u003e IO () -\u003e IO ()",
          "source": "src/Graphs-SimpleGraph.html#delayedAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs SimpleGraph",
          "module": "Graphs.SimpleGraph",
          "name": "delayedAction",
          "normalized": "SimpleGraph a b c d-\u003eNode-\u003eIO()-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Action",
          "signature": "SimpleGraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNode-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#v:delayedAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.SimpleGraph",
          "name": "getNameSource",
          "package": "uni-graphs",
          "signature": "SimpleGraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e NameSource",
          "source": "src/Graphs-SimpleGraph.html#getNameSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs SimpleGraph",
          "module": "Graphs.SimpleGraph",
          "name": "getNameSource",
          "normalized": "SimpleGraph a b c d-\u003eNameSource",
          "package": "uni-graphs",
          "partial": "Name Source",
          "signature": "SimpleGraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNameSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#v:getNameSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.TopSort",
          "name": "TopSort",
          "package": "uni-graphs",
          "source": "src/Graphs-TopSort.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphs TopSort",
          "module": "Graphs.TopSort",
          "name": "TopSort",
          "package": "uni-graphs",
          "partial": "Top Sort",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-TopSort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.TopSort",
          "name": "topSort",
          "package": "uni-graphs",
          "signature": "[(a, a)] -\u003e [a]",
          "source": "src/Graphs-TopSort.html#topSort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs TopSort",
          "module": "Graphs.TopSort",
          "name": "topSort",
          "normalized": "[(a,a)]-\u003e[a]",
          "package": "uni-graphs",
          "partial": "Sort",
          "signature": "[(a,a)]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-TopSort.html#v:topSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.TopSort",
          "name": "topSort1",
          "package": "uni-graphs",
          "signature": "[(a, a)] -\u003e [a] -\u003e [a]",
          "source": "src/Graphs-TopSort.html#topSort1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs TopSort",
          "module": "Graphs.TopSort",
          "name": "topSort1",
          "normalized": "[(a,a)]-\u003e[a]-\u003e[a]",
          "package": "uni-graphs",
          "partial": "Sort",
          "signature": "[(a,a)]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-TopSort.html#v:topSort1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a VersionDag, a graph which is used for\n displaying versions within the Workbench.\n\u003c/p\u003e\u003cp\u003eThe main differences between this and normal \u003ccode\u003eSimpleGraph.SimpleGraph'\u003c/code\u003es\n are that\n   (1) the parents of a node are fixed when it is created, as are\n       all arc labels and arc type labels.\n   (2) it is possible to selectively \u003ca\u003ehide\u003c/a\u003e nodes from being displayed.\n       We intelligently display the structure between these nodes.\n   (3) it is not permitted to delete a node with children.  (Though it\n       may be hidden.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphs.VersionDag",
          "name": "VersionDag",
          "package": "uni-graphs",
          "source": "src/Graphs-VersionDag.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements VersionDag graph which is used for displaying versions within the Workbench The main differences between this and normal SimpleGraph.SimpleGraph are that the parents of node are fixed when it is created as are all arc labels and arc type labels it is possible to selectively hide nodes from being displayed We intelligently display the structure between these nodes it is not permitted to delete node with children Though it may be hidden",
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "VersionDag",
          "package": "uni-graphs",
          "partial": "Version Dag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.VersionDag",
          "name": "VersionDag",
          "package": "uni-graphs",
          "source": "src/Graphs-VersionDag.html#VersionDag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "VersionDag",
          "package": "uni-graphs",
          "partial": "Version Dag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#t:VersionDag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.VersionDag",
          "name": "addVersion",
          "package": "uni-graphs",
          "signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e nodeInfo -\u003e IO ()",
          "source": "src/Graphs-VersionDag.html#addVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "addVersion",
          "normalized": "VersionDag a b c-\u003eb-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Version",
          "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003enodeInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:addVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.VersionDag",
          "name": "addVersions",
          "package": "uni-graphs",
          "signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e [nodeInfo] -\u003e IO ()",
          "source": "src/Graphs-VersionDag.html#addVersions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "addVersions",
          "normalized": "VersionDag a b c-\u003e[b]-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Versions",
          "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003e[nodeInfo]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:addVersions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the hidden function\n\u003c/p\u003e",
          "module": "Graphs.VersionDag",
          "name": "changeIsHidden",
          "package": "uni-graphs",
          "signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e (nodeInfo -\u003e Bool) -\u003e IO ()",
          "source": "src/Graphs-VersionDag.html#changeIsHidden",
          "type": "function"
        },
        "index": {
          "description": "Change the hidden function",
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "changeIsHidden",
          "normalized": "VersionDag a b c-\u003e(b-\u003eBool)-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Is Hidden",
          "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003e(nodeInfo-\u003eBool)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:changeIsHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.VersionDag",
          "name": "deleteVersion",
          "package": "uni-graphs",
          "signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e nodeKey -\u003e IO ()",
          "source": "src/Graphs-VersionDag.html#deleteVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "deleteVersion",
          "normalized": "VersionDag a b c-\u003ea-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Version",
          "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003enodeKey-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:deleteVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the input graph in the form of FindCommonParents.GraphBack.\n NB.\n (1) the confusion in the type variable \u003ca\u003enodeKey\u003c/a\u003e as used in\n     FindCommonParents is not the same as our \u003ca\u003enodeKey\u003c/a\u003e.\n (2) we get a snapshot of the state of the input graph at a particular\n     time\n\u003c/p\u003e",
          "module": "Graphs.VersionDag",
          "name": "getInputGraphBack",
          "package": "uni-graphs",
          "signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e (nodeKey -\u003e nodeInfo -\u003e graphBackNodeKey) -\u003e IO (GraphBack nodeKey graphBackNodeKey)",
          "source": "src/Graphs-VersionDag.html#getInputGraphBack",
          "type": "function"
        },
        "index": {
          "description": "Get the input graph in the form of FindCommonParents.GraphBack NB the confusion in the type variable nodeKey as used in FindCommonParents is not the same as our nodeKey we get snapshot of the state of the input graph at particular time",
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "getInputGraphBack",
          "normalized": "VersionDag a b c-\u003e(a-\u003eb-\u003ed)-\u003eIO(GraphBack a d)",
          "package": "uni-graphs",
          "partial": "Input Graph Back",
          "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003e(nodeKey-\u003enodeInfo-\u003egraphBackNodeKey)-\u003eIO(GraphBack nodeKey graphBackNodeKey)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:getInputGraphBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.VersionDag",
          "name": "getNodeInfos",
          "package": "uni-graphs",
          "signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e IO [nodeInfo]",
          "source": "src/Graphs-VersionDag.html#getNodeInfos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "getNodeInfos",
          "normalized": "VersionDag a b c-\u003eIO[b]",
          "package": "uni-graphs",
          "partial": "Node Infos",
          "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003eIO[nodeInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:getNodeInfos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.VersionDag",
          "name": "lookupNodeKey",
          "package": "uni-graphs",
          "signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e nodeKey -\u003e IO (Maybe nodeInfo)",
          "source": "src/Graphs-VersionDag.html#lookupNodeKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "lookupNodeKey",
          "normalized": "VersionDag a b c-\u003ea-\u003eIO(Maybe b)",
          "package": "uni-graphs",
          "partial": "Node Key",
          "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003enodeKey-\u003eIO(Maybe nodeInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:lookupNodeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.VersionDag",
          "name": "newVersionDag",
          "package": "uni-graphs",
          "signature": "(nodeInfo -\u003e Bool) -\u003e (nodeInfo -\u003e nodeKey) -\u003e (nodeInfo -\u003e [(arcInfo, nodeKey)]) -\u003e IO (VersionDag nodeKey nodeInfo arcInfo)",
          "source": "src/Graphs-VersionDag.html#newVersionDag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "newVersionDag",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003e(a-\u003e[(c,b)])-\u003eIO(VersionDag b a c)",
          "package": "uni-graphs",
          "partial": "Version Dag",
          "signature": "(nodeInfo-\u003eBool)-\u003e(nodeInfo-\u003enodeKey)-\u003e(nodeInfo-\u003e[(arcInfo,nodeKey)])-\u003eIO(VersionDag nodeKey nodeInfo arcInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:newVersionDag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.VersionDag",
          "name": "nodeKeyExists",
          "package": "uni-graphs",
          "signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e nodeKey -\u003e IO Bool",
          "source": "src/Graphs-VersionDag.html#nodeKeyExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "nodeKeyExists",
          "normalized": "VersionDag a b c-\u003ea-\u003eIO Bool",
          "package": "uni-graphs",
          "partial": "Key Exists",
          "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003enodeKey-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:nodeKeyExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the nodeInfo of something already added.\n\u003c/p\u003e",
          "module": "Graphs.VersionDag",
          "name": "setNodeInfo",
          "package": "uni-graphs",
          "signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e nodeInfo -\u003e IO ()",
          "source": "src/Graphs-VersionDag.html#setNodeInfo",
          "type": "function"
        },
        "index": {
          "description": "Change the nodeInfo of something already added",
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "setNodeInfo",
          "normalized": "VersionDag a b c-\u003eb-\u003eIO()",
          "package": "uni-graphs",
          "partial": "Node Info",
          "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003enodeInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:setNodeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.VersionDag",
          "name": "toDisplayedGraph",
          "package": "uni-graphs",
          "signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e GraphConnection (nodeInfo, Bool) () (Maybe arcInfo) ()",
          "source": "src/Graphs-VersionDag.html#toDisplayedGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "toDisplayedGraph",
          "normalized": "VersionDag a b c-\u003eGraphConnection(b,Bool)()(Maybe c)()",
          "package": "uni-graphs",
          "partial": "Displayed Graph",
          "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003eGraphConnection(nodeInfo,Bool)()(Maybe arcInfo)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:toDisplayedGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphs.VersionDag",
          "name": "toInputGraph",
          "package": "uni-graphs",
          "signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e GraphConnection nodeInfo () arcInfo ()",
          "source": "src/Graphs-VersionDag.html#toInputGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphs VersionDag",
          "module": "Graphs.VersionDag",
          "name": "toInputGraph",
          "normalized": "VersionDag a b c-\u003eGraphConnection b()c()",
          "package": "uni-graphs",
          "partial": "Input Graph",
          "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003eGraphConnection nodeInfo()arcInfo()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:toInputGraph"
      }
    }
  ]
]