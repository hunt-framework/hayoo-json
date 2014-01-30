[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-DisplayGraph.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edisplayGraph\u003c/a\u003e\u003c/code\u003e displays something implementing the\n \u003ca\u003eGraph\u003c/a\u003e interface with something implementing with \u003ca\u003eGraphDisp\u003c/a\u003e interface.\n \u003ccode\u003e\u003ca\u003edisplayGraph0\u003c/a\u003e\u003c/code\u003e is a slightly more general version that also returns the\n actual graph.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.DisplayGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-DisplayGraph.html",
        "fct-type": "module",
        "title": "DisplayGraph"
      },
      "index": {
        "description": "displayGraph displays something implementing the Graph interface with something implementing with GraphDisp interface displayGraph0 is slightly more general version that also returns the actual graph",
        "hierarchy": "Graphs DisplayGraph",
        "module": "Graphs.DisplayGraph",
        "name": "DisplayGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Display Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-DisplayGraph.html#t:DisplayGraph",
      "description": {
        "fct-module": "Graphs.DisplayGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-DisplayGraph.html#DisplayGraph",
        "fct-type": "data",
        "title": "DisplayGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs DisplayGraph",
        "module": "Graphs.DisplayGraph",
        "name": "DisplayGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Display Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-DisplayGraph.html#v:displayGraph",
      "description": {
        "fct-module": "Graphs.DisplayGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e graphParms -\u003e (DisplayGraph -\u003e NodeType -\u003e nodeTypeLabel -\u003e IO (nodeTypeParms Node)) -\u003e (DisplayGraph -\u003e ArcType -\u003e arcTypeLabel -\u003e IO (arcTypeParms Arc)) -\u003e IO DisplayGraph",
        "fct-source": "src/Graphs-DisplayGraph.html#displayGraph",
        "fct-type": "function",
        "title": "displayGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs DisplayGraph",
        "module": "Graphs.DisplayGraph",
        "name": "displayGraph",
        "normalized": "Graph a b c d e f g h-\u003ei j k l m-\u003eb-\u003e(DisplayGraph-\u003eNodeType-\u003ek-\u003eIO(e Node))-\u003e(DisplayGraph-\u003eArcType-\u003em-\u003eIO(h Arc))-\u003eIO DisplayGraph",
        "package": "uni-graphs",
        "partial": "Graph",
        "signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003egraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003egraphParms-\u003e(DisplayGraph-\u003eNodeType-\u003enodeTypeLabel-\u003eIO(nodeTypeParms Node))-\u003e(DisplayGraph-\u003eArcType-\u003earcTypeLabel-\u003eIO(arcTypeParms Arc))-\u003eIO DisplayGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-DisplayGraph.html#v:displayGraph0",
      "description": {
        "fct-module": "Graphs.DisplayGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e graphParms -\u003e (DisplayGraph -\u003e NodeType -\u003e nodeTypeLabel -\u003e IO (nodeTypeParms Node)) -\u003e (DisplayGraph -\u003e ArcType -\u003e arcTypeLabel -\u003e IO (arcTypeParms Arc)) -\u003e IO (DisplayGraph, Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms)",
        "fct-source": "src/Graphs-DisplayGraph.html#displayGraph0",
        "fct-type": "function",
        "title": "displayGraph0"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs DisplayGraph",
        "module": "Graphs.DisplayGraph",
        "name": "displayGraph0",
        "normalized": "Graph a b c d e f g h-\u003ei j k l m-\u003eb-\u003e(DisplayGraph-\u003eNodeType-\u003ek-\u003eIO(e Node))-\u003e(DisplayGraph-\u003eArcType-\u003em-\u003eIO(h Arc))-\u003eIO(DisplayGraph,Graph a b c d e f g h)",
        "package": "uni-graphs",
        "partial": "Graph",
        "signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003egraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003egraphParms-\u003e(DisplayGraph-\u003eNodeType-\u003enodeTypeLabel-\u003eIO(nodeTypeParms Node))-\u003e(DisplayGraph-\u003eArcType-\u003earcTypeLabel-\u003eIO(arcTypeParms Arc))-\u003eIO(DisplayGraph,Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-DisplayGraph.html#v:displayGraph1",
      "description": {
        "fct-module": "Graphs.DisplayGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e graphParms -\u003e (DisplayGraph -\u003e NodeType -\u003e nodeTypeLabel -\u003e IO (nodeTypeParms (Node, nodeLabel))) -\u003e (DisplayGraph -\u003e ArcType -\u003e arcTypeLabel -\u003e IO (arcTypeParms (Arc, arcLabel))) -\u003e IO (DisplayGraph, Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms)",
        "fct-source": "src/Graphs-DisplayGraph.html#displayGraph1",
        "fct-type": "function",
        "title": "displayGraph1"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs DisplayGraph",
        "module": "Graphs.DisplayGraph",
        "name": "displayGraph1",
        "normalized": "Graph a b c d e f g h-\u003eGraphConnection i j k l-\u003eb-\u003e(DisplayGraph-\u003eNodeType-\u003ej-\u003eIO(e(Node,i)))-\u003e(DisplayGraph-\u003eArcType-\u003el-\u003eIO(h(Arc,k)))-\u003eIO(DisplayGraph,Graph a b c d e f g h)",
        "package": "uni-graphs",
        "partial": "Graph",
        "signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003egraphParms-\u003e(DisplayGraph-\u003eNodeType-\u003enodeTypeLabel-\u003eIO(nodeTypeParms(Node,nodeLabel)))-\u003e(DisplayGraph-\u003eArcType-\u003earcTypeLabel-\u003eIO(arcTypeParms(Arc,arcLabel)))-\u003eIO(DisplayGraph,Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-EmptyGraphSort.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module describes an empty display graph sort.  In other words, it\n displays nothing.  Not a lot of use you might think, but we use it for\n the MMiSS API to get a version graph without invoking daVinci.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.EmptyGraphSort",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-EmptyGraphSort.html",
        "fct-type": "module",
        "title": "EmptyGraphSort"
      },
      "index": {
        "description": "This module describes an empty display graph sort In other words it displays nothing Not lot of use you might think but we use it for the MMiSS API to get version graph without invoking daVinci",
        "hierarchy": "Graphs EmptyGraphSort",
        "module": "Graphs.EmptyGraphSort",
        "name": "EmptyGraphSort",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Empty Graph Sort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-EmptyGraphSort.html#v:emptyGraphSort",
      "description": {
        "fct-module": "Graphs.EmptyGraphSort",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph EmptyGraph EmptyGraphParms EmptyNode EmptyNodeType EmptyNodeTypeParms EmptyArc EmptyArcType EmptyArcTypeParms",
        "fct-source": "src/Graphs-EmptyGraphSort.html#emptyGraphSort",
        "fct-type": "function",
        "title": "emptyGraphSort"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs EmptyGraphSort",
        "module": "Graphs.EmptyGraphSort",
        "name": "emptyGraphSort",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Sort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGiven two acyclic graphs G1 and G2 sharing some nodes, and a list V1 of nodes in G1,\n let A be the union of G1 intersect G2 and V1.  The function in this module returns\n a list L of type [(Node,[Node])] such that\n (1) The first elements in each pair in L are precisely those elements of V1 not in G2.\n (2) For each element (n,ms) in L,\n     the list ms contains precisely those vertices m of G1 such that\n     (a) m is in A;\n     (b) there is a path from m to n in G1 which has no common vertices with\n         A except at its endpoints.\n (3) Where the list contains two elements (n1,ms1) and (n2,ms2), such that\n     ms2 contains n1, then (n1,ms1) comes before (n2,ms2) in the list.\n\u003c/p\u003e\u003cp\u003eThe purpose of all this is to provide a list of the nodes to be constructed\n in G2 to extend it by V1 while preserving as much as possible of the path\n structure in V1.  This is used for adding version graph information.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.FindCommonParents",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-FindCommonParents.html",
        "fct-type": "module",
        "title": "FindCommonParents"
      },
      "index": {
        "description": "Given two acyclic graphs G1 and G2 sharing some nodes and list V1 of nodes in G1 let be the union of G1 intersect G2 and V1 The function in this module returns list of type Node Node such that The first elements in each pair in are precisely those elements of V1 not in G2 For each element ms in the list ms contains precisely those vertices of G1 such that is in there is path from to in G1 which has no common vertices with except at its endpoints Where the list contains two elements n1 ms1 and n2 ms2 such that ms2 contains n1 then n1 ms1 comes before n2 ms2 in the list The purpose of all this is to provide list of the nodes to be constructed in G2 to extend it by V1 while preserving as much as possible of the path structure in V1 This is used for adding version graph information",
        "hierarchy": "Graphs FindCommonParents",
        "module": "Graphs.FindCommonParents",
        "name": "FindCommonParents",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Find Common Parents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#t:GraphBack",
      "description": {
        "fct-module": "Graphs.FindCommonParents",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-FindCommonParents.html#GraphBack",
        "fct-type": "data",
        "title": "GraphBack"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs FindCommonParents",
        "module": "Graphs.FindCommonParents",
        "name": "GraphBack",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Back",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#v:GraphBack",
      "description": {
        "fct-module": "Graphs.FindCommonParents",
        "fct-package": "uni-graphs",
        "fct-signature": "GraphBack",
        "fct-source": "src/Graphs-FindCommonParents.html#GraphBack",
        "fct-type": "function",
        "title": "GraphBack"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs FindCommonParents",
        "module": "Graphs.FindCommonParents",
        "name": "GraphBack",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Back",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#v:findCommonParents",
      "description": {
        "fct-module": "Graphs.FindCommonParents",
        "fct-package": "uni-graphs",
        "fct-signature": "GraphBack node1 nodeKey -\u003e GraphBack node2 nodeKey -\u003e [node1] -\u003e [(node1, [(node1, Maybe node2)])]",
        "fct-source": "src/Graphs-FindCommonParents.html#findCommonParents",
        "fct-type": "function",
        "title": "findCommonParents"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs FindCommonParents",
        "module": "Graphs.FindCommonParents",
        "name": "findCommonParents",
        "normalized": "GraphBack a b-\u003eGraphBack a b-\u003e[a]-\u003e[(a,[(a,Maybe a)])]",
        "package": "uni-graphs",
        "partial": "Common Parents",
        "signature": "GraphBack node nodeKey-\u003eGraphBack node nodeKey-\u003e[node]-\u003e[(node,[(node,Maybe node)])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#v:getAllNodes",
      "description": {
        "fct-descr": "\u003cp\u003eGet all nodes in the graph\n\u003c/p\u003e",
        "fct-module": "Graphs.FindCommonParents",
        "fct-package": "uni-graphs",
        "fct-signature": "[node]",
        "fct-source": "src/Graphs-FindCommonParents.html#GraphBack",
        "fct-type": "function",
        "title": "getAllNodes"
      },
      "index": {
        "description": "Get all nodes in the graph",
        "hierarchy": "Graphs FindCommonParents",
        "module": "Graphs.FindCommonParents",
        "name": "getAllNodes",
        "normalized": "[a]",
        "package": "uni-graphs",
        "partial": "All Nodes",
        "signature": "[node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#v:getKey",
      "description": {
        "fct-descr": "\u003cp\u003eIf the node does not exist in the graph \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n Otherwise \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e key where key is a \"nodeKey\", an ordered key\n uniquely distinguishing the node (and used to detect common elements\n in the two graphs)\n\u003c/p\u003e",
        "fct-module": "Graphs.FindCommonParents",
        "fct-package": "uni-graphs",
        "fct-signature": "node -\u003e Maybe nodeKey",
        "fct-source": "src/Graphs-FindCommonParents.html#GraphBack",
        "fct-type": "function",
        "title": "getKey"
      },
      "index": {
        "description": "If the node does not exist in the graph Nothing Otherwise Just key where key is nodeKey an ordered key uniquely distinguishing the node and used to detect common elements in the two graphs",
        "hierarchy": "Graphs FindCommonParents",
        "module": "Graphs.FindCommonParents",
        "name": "getKey",
        "normalized": "a-\u003eMaybe b",
        "package": "uni-graphs",
        "partial": "Key",
        "signature": "node-\u003eMaybe nodeKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCommonParents.html#v:getParents",
      "description": {
        "fct-descr": "\u003cp\u003eIf node does not exist Nothing, otherwise immediate\n parents of node.\n\u003c/p\u003e",
        "fct-module": "Graphs.FindCommonParents",
        "fct-package": "uni-graphs",
        "fct-signature": "node -\u003e Maybe [node]",
        "fct-source": "src/Graphs-FindCommonParents.html#GraphBack",
        "fct-type": "function",
        "title": "getParents"
      },
      "index": {
        "description": "If node does not exist Nothing otherwise immediate parents of node",
        "hierarchy": "Graphs FindCommonParents",
        "module": "Graphs.FindCommonParents",
        "name": "getParents",
        "normalized": "a-\u003eMaybe[a]",
        "package": "uni-graphs",
        "partial": "Parents",
        "signature": "node-\u003eMaybe[node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCycle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe function in this module finds a cycle in a given directed graph, if\n one exists.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.FindCycle",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-FindCycle.html",
        "fct-type": "module",
        "title": "FindCycle"
      },
      "index": {
        "description": "The function in this module finds cycle in given directed graph if one exists",
        "hierarchy": "Graphs FindCycle",
        "module": "Graphs.FindCycle",
        "name": "FindCycle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Find Cycle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-FindCycle.html#v:findCycle",
      "description": {
        "fct-descr": "\u003cp\u003eFind a cycle in a graph.  We are given a list of nodes to start\n from, and a successor function.\n\u003c/p\u003e",
        "fct-module": "Graphs.FindCycle",
        "fct-package": "uni-graphs",
        "fct-signature": "[a] -\u003e (a -\u003e [a]) -\u003e Maybe [a]",
        "fct-source": "src/Graphs-FindCycle.html#findCycle",
        "fct-type": "function",
        "title": "findCycle"
      },
      "index": {
        "description": "Find cycle in graph We are given list of nodes to start from and successor function",
        "hierarchy": "Graphs FindCycle",
        "module": "Graphs.FindCycle",
        "name": "findCycle",
        "normalized": "[a]-\u003e(a-\u003e[a])-\u003eMaybe[a]",
        "package": "uni-graphs",
        "partial": "Cycle",
        "signature": "[a]-\u003e(a-\u003e[a])-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#",
      "description": {
        "fct-module": "Graphs.GetAncestors",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-GetAncestors.html",
        "fct-type": "module",
        "title": "GetAncestors"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAncestors",
        "module": "Graphs.GetAncestors",
        "name": "GetAncestors",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Get Ancestors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#v:getAncestors",
      "description": {
        "fct-module": "Graphs.GetAncestors",
        "fct-package": "uni-graphs",
        "fct-signature": "Bool -\u003e graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e (nodeLabel -\u003e IO Bool) -\u003e Node -\u003e IO [Node]",
        "fct-source": "src/Graphs-GetAncestors.html#getAncestors",
        "fct-type": "function",
        "title": "getAncestors"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAncestors",
        "module": "Graphs.GetAncestors",
        "name": "getAncestors",
        "normalized": "Bool-\u003ea b c d e-\u003e(b-\u003eIO Bool)-\u003eNode-\u003eIO[Node]",
        "package": "uni-graphs",
        "partial": "Ancestors",
        "signature": "Bool-\u003egraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003e(nodeLabel-\u003eIO Bool)-\u003eNode-\u003eIO[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#v:getAncestorsGeneric",
      "description": {
        "fct-module": "Graphs.GetAncestors",
        "fct-package": "uni-graphs",
        "fct-signature": "Bool -\u003e (node -\u003e IO [node]) -\u003e (node -\u003e IO Bool) -\u003e node -\u003e IO [node]",
        "fct-source": "src/Graphs-GetAncestors.html#getAncestorsGeneric",
        "fct-type": "function",
        "title": "getAncestorsGeneric"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAncestors",
        "module": "Graphs.GetAncestors",
        "name": "getAncestorsGeneric",
        "normalized": "Bool-\u003e(a-\u003eIO[a])-\u003e(a-\u003eIO Bool)-\u003ea-\u003eIO[a]",
        "package": "uni-graphs",
        "partial": "Ancestors Generic",
        "signature": "Bool-\u003e(node-\u003eIO[node])-\u003e(node-\u003eIO Bool)-\u003enode-\u003eIO[node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#v:getAncestorsPure",
      "description": {
        "fct-module": "Graphs.GetAncestors",
        "fct-package": "uni-graphs",
        "fct-signature": "(node -\u003e [node]) -\u003e node -\u003e [node]",
        "fct-source": "src/Graphs-GetAncestors.html#getAncestorsPure",
        "fct-type": "function",
        "title": "getAncestorsPure"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAncestors",
        "module": "Graphs.GetAncestors",
        "name": "getAncestorsPure",
        "normalized": "(a-\u003e[a])-\u003ea-\u003e[a]",
        "package": "uni-graphs",
        "partial": "Ancestors Pure",
        "signature": "(node-\u003e[node])-\u003enode-\u003e[node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#v:getDescendants",
      "description": {
        "fct-module": "Graphs.GetAncestors",
        "fct-package": "uni-graphs",
        "fct-signature": "Bool -\u003e graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e (nodeLabel -\u003e IO Bool) -\u003e Node -\u003e IO [Node]",
        "fct-source": "src/Graphs-GetAncestors.html#getDescendants",
        "fct-type": "function",
        "title": "getDescendants"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAncestors",
        "module": "Graphs.GetAncestors",
        "name": "getDescendants",
        "normalized": "Bool-\u003ea b c d e-\u003e(b-\u003eIO Bool)-\u003eNode-\u003eIO[Node]",
        "package": "uni-graphs",
        "partial": "Descendants",
        "signature": "Bool-\u003egraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003e(nodeLabel-\u003eIO Bool)-\u003eNode-\u003eIO[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#v:isAncestor",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if first node is ancestor or equal to the second.\n\u003c/p\u003e",
        "fct-module": "Graphs.GetAncestors",
        "fct-package": "uni-graphs",
        "fct-signature": "(node -\u003e m [node]) -\u003e node -\u003e node -\u003e m Bool",
        "fct-source": "src/Graphs-GetAncestors.html#isAncestor",
        "fct-type": "function",
        "title": "isAncestor"
      },
      "index": {
        "description": "Returns True if first node is ancestor or equal to the second",
        "hierarchy": "Graphs GetAncestors",
        "module": "Graphs.GetAncestors",
        "name": "isAncestor",
        "normalized": "(a-\u003eb[a])-\u003ea-\u003ea-\u003eb Bool",
        "package": "uni-graphs",
        "partial": "Ancestor",
        "signature": "(node-\u003em[node])-\u003enode-\u003enode-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAncestors.html#v:isAncestorPure",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if first node is ancestor or equal to the second.\n\u003c/p\u003e",
        "fct-module": "Graphs.GetAncestors",
        "fct-package": "uni-graphs",
        "fct-signature": "(node -\u003e [node]) -\u003e node -\u003e node -\u003e Bool",
        "fct-source": "src/Graphs-GetAncestors.html#isAncestorPure",
        "fct-type": "function",
        "title": "isAncestorPure"
      },
      "index": {
        "description": "Returns True if first node is ancestor or equal to the second",
        "hierarchy": "Graphs GetAncestors",
        "module": "Graphs.GetAncestors",
        "name": "isAncestorPure",
        "normalized": "(a-\u003e[a])-\u003ea-\u003ea-\u003eBool",
        "package": "uni-graphs",
        "partial": "Ancestor Pure",
        "signature": "(node-\u003e[node])-\u003enode-\u003enode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGetAttributes is used by the GraphEditor to pop up HTk windows\n to get information from the user.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-GetAttributes.html",
        "fct-type": "module",
        "title": "GetAttributes"
      },
      "index": {
        "description": "GetAttributes is used by the GraphEditor to pop up HTk windows to get information from the user",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "GetAttributes",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Get Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#t:ArcAttributes",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GetAttributes.html#ArcAttributes",
        "fct-type": "data",
        "title": "ArcAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "ArcAttributes",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#t:ArcTypeAttributes",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GetAttributes.html#ArcTypeAttributes",
        "fct-type": "data",
        "title": "ArcTypeAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "ArcTypeAttributes",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Type Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#t:NodeAttributes",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GetAttributes.html#NodeAttributes",
        "fct-type": "data",
        "title": "NodeAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "NodeAttributes",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#t:NodeTypeAttributes",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GetAttributes.html#NodeTypeAttributes",
        "fct-type": "data",
        "title": "NodeTypeAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "NodeTypeAttributes",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Type Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:ArcAttributes",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "ArcAttributes",
        "fct-source": "src/Graphs-GetAttributes.html#ArcAttributes",
        "fct-type": "function",
        "title": "ArcAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "ArcAttributes",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:ArcTypeAttributes",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "ArcTypeAttributes",
        "fct-source": "src/Graphs-GetAttributes.html#ArcTypeAttributes",
        "fct-type": "function",
        "title": "ArcTypeAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "ArcTypeAttributes",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Type Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:NodeAttributes",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "NodeAttributes",
        "fct-source": "src/Graphs-GetAttributes.html#NodeAttributes",
        "fct-type": "function",
        "title": "NodeAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "NodeAttributes",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:NodeTypeAttributes",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "NodeTypeAttributes",
        "fct-source": "src/Graphs-GetAttributes.html#NodeTypeAttributes",
        "fct-type": "function",
        "title": "NodeTypeAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "NodeTypeAttributes",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Type Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:arcType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "arcType",
        "fct-source": "src/Graphs-GetAttributes.html#ArcAttributes",
        "fct-type": "function",
        "title": "arcType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "arcType",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:arcTypeTitle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "String",
        "fct-source": "src/Graphs-GetAttributes.html#ArcTypeAttributes",
        "fct-type": "function",
        "title": "arcTypeTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "arcTypeTitle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Type Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:displayError",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Graphs-GetAttributes.html#displayError",
        "fct-type": "function",
        "title": "displayError"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "displayError",
        "normalized": "String-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Error",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:getArcAttributes",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "Registry String arcType -\u003e IO (Maybe (ArcAttributes arcType))",
        "fct-source": "src/Graphs-GetAttributes.html#getArcAttributes",
        "fct-type": "function",
        "title": "getArcAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "getArcAttributes",
        "normalized": "Registry String a-\u003eIO(Maybe(ArcAttributes a))",
        "package": "uni-graphs",
        "partial": "Arc Attributes",
        "signature": "Registry String arcType-\u003eIO(Maybe(ArcAttributes arcType))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:getArcTypeAttributes",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "IO (Maybe ArcTypeAttributes)",
        "fct-source": "src/Graphs-GetAttributes.html#getArcTypeAttributes",
        "fct-type": "function",
        "title": "getArcTypeAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "getArcTypeAttributes",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Type Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:getNodeAttributes",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "Registry String nodeType -\u003e IO (Maybe (NodeAttributes nodeType))",
        "fct-source": "src/Graphs-GetAttributes.html#getNodeAttributes",
        "fct-type": "function",
        "title": "getNodeAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "getNodeAttributes",
        "normalized": "Registry String a-\u003eIO(Maybe(NodeAttributes a))",
        "package": "uni-graphs",
        "partial": "Node Attributes",
        "signature": "Registry String nodeType-\u003eIO(Maybe(NodeAttributes nodeType))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:getNodeTypeAttributes",
      "description": {
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "IO (Maybe (NodeTypeAttributes nodeLabel))",
        "fct-source": "src/Graphs-GetAttributes.html#getNodeTypeAttributes",
        "fct-type": "function",
        "title": "getNodeTypeAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "getNodeTypeAttributes",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Type Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:nodeTitle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "String",
        "fct-source": "src/Graphs-GetAttributes.html#NodeAttributes",
        "fct-type": "function",
        "title": "nodeTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "nodeTitle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:nodeType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "nodeType",
        "fct-source": "src/Graphs-GetAttributes.html#NodeAttributes",
        "fct-type": "function",
        "title": "nodeType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "nodeType",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:nodeTypeTitle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "String",
        "fct-source": "src/Graphs-GetAttributes.html#NodeTypeAttributes",
        "fct-type": "function",
        "title": "nodeTypeTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "nodeTypeTitle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Type Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GetAttributes.html#v:shape",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.GetAttributes",
        "fct-package": "uni-graphs",
        "fct-signature": "Shape nodeLabel",
        "fct-source": "src/Graphs-GetAttributes.html#NodeTypeAttributes",
        "fct-type": "function",
        "title": "shape"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GetAttributes",
        "module": "Graphs.GetAttributes",
        "name": "shape",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGraph defines the Graph class, which defines the basic things a\n graph must do.  Peculiarities:\n (1) Graphs are directed with labelled nodes and\n     arcs.  These nodes and arcs have types.\n (2) The nodes and arcs are identified by values of type Node and Arc.\n     These values are essentially strings.  The strings are provided by\n     the user; there is no mechanism for generating new unique strings.\n     (This is because this is easy in the applications I have in mind.)\n (3) A necessary feature of these graphs is that it is supposed to\n     be easy generate copies, both on the same system and on others.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-Graph.html",
        "fct-type": "module",
        "title": "Graph"
      },
      "index": {
        "description": "Graph defines the Graph class which defines the basic things graph must do Peculiarities Graphs are directed with labelled nodes and arcs These nodes and arcs have types The nodes and arcs are identified by values of type Node and Arc These values are essentially strings The strings are provided by the user there is no mechanism for generating new unique strings This is because this is easy in the applications have in mind necessary feature of these graphs is that it is supposed to be easy generate copies both on the same system and on others",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "Graph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:Arc",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-Graph.html#Arc",
        "fct-type": "data",
        "title": "Arc"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "Arc",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:ArcType",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-Graph.html#ArcType",
        "fct-type": "data",
        "title": "ArcType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "ArcType",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:CannedGraph",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-Graph.html#CannedGraph",
        "fct-type": "data",
        "title": "CannedGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "CannedGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Canned Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:Graph",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-Graph.html#Graph",
        "fct-type": "class",
        "title": "Graph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "Graph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:GraphConnection",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "type",
        "fct-source": "src/Graphs-Graph.html#GraphConnection",
        "fct-type": "type",
        "title": "GraphConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "GraphConnection",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:GraphConnectionData",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-Graph.html#GraphConnectionData",
        "fct-type": "data",
        "title": "GraphConnectionData"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "GraphConnectionData",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Connection Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:Node",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-Graph.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "Node",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:NodeType",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-Graph.html#NodeType",
        "fct-type": "data",
        "title": "NodeType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "NodeType",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:PartialShow",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-Graph.html#PartialShow",
        "fct-type": "newtype",
        "title": "PartialShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "PartialShow",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Partial Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#t:Update",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "data",
        "title": "Update"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "Update",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:CannedGraph",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "CannedGraph",
        "fct-source": "src/Graphs-Graph.html#CannedGraph",
        "fct-type": "function",
        "title": "CannedGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "CannedGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Canned Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:DeleteArc",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "DeleteArc Arc",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "DeleteArc"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "DeleteArc",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Delete Arc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:DeleteNode",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "DeleteNode Node",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "DeleteNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "DeleteNode",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Delete Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:GraphConnectionData",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "GraphConnectionData",
        "fct-source": "src/Graphs-Graph.html#GraphConnectionData",
        "fct-type": "function",
        "title": "GraphConnectionData"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "GraphConnectionData",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Connection Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:MultiUpdate",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "MultiUpdate [Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel]",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "MultiUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "MultiUpdate",
        "normalized": "MultiUpdate[Update a b c d]",
        "package": "uni-graphs",
        "partial": "Multi Update",
        "signature": "MultiUpdate[Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:NewArc",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "NewArc Arc ArcType arcLabel Node Node",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "NewArc"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "NewArc",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "New Arc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:NewArcType",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "NewArcType ArcType arcTypeLabel",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "NewArcType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "NewArcType",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "New Arc Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:NewNode",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "NewNode Node NodeType nodeLabel",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "NewNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "NewNode",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "New Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:NewNodeType",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "NewNodeType NodeType nodeTypeLabel",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "NewNodeType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "NewNodeType",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "New Node Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:PartialShow",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "PartialShow a",
        "fct-source": "src/Graphs-Graph.html#PartialShow",
        "fct-type": "function",
        "title": "PartialShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "PartialShow",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Partial Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:SetArcLabel",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "SetArcLabel Arc arcLabel",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "SetArcLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "SetArcLabel",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Set Arc Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:SetArcType",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "SetArcType Arc ArcType",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "SetArcType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "SetArcType",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Set Arc Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:SetArcTypeLabel",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "SetArcTypeLabel ArcType arcTypeLabel",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "SetArcTypeLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "SetArcTypeLabel",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Set Arc Type Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:SetNodeLabel",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "SetNodeLabel Node nodeLabel",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "SetNodeLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "SetNodeLabel",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Set Node Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:SetNodeType",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "SetNodeType Node NodeType",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "SetNodeType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "SetNodeType",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Set Node Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:SetNodeTypeLabel",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "SetNodeTypeLabel NodeType nodeTypeLabel",
        "fct-source": "src/Graphs-Graph.html#Update",
        "fct-type": "function",
        "title": "SetNodeTypeLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "SetNodeTypeLabel",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Set Node Type Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:deRegister",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "IO ()",
        "fct-source": "src/Graphs-Graph.html#GraphConnectionData",
        "fct-type": "function",
        "title": "deRegister"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "deRegister",
        "normalized": "IO()",
        "package": "uni-graphs",
        "partial": "Register",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:firstNode",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "Node",
        "fct-source": "src/Graphs-Graph.html#firstNode",
        "fct-type": "function",
        "title": "firstNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "firstNode",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcLabel",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Arc -\u003e IO arcLabel",
        "fct-source": "src/Graphs-Graph.html#getArcLabel",
        "fct-type": "method",
        "title": "getArcLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getArcLabel",
        "normalized": "a b c d e-\u003eArc-\u003eIO d",
        "package": "uni-graphs",
        "partial": "Arc Label",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eArc-\u003eIO arcLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcType",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Arc -\u003e IO ArcType",
        "fct-source": "src/Graphs-Graph.html#getArcType",
        "fct-type": "method",
        "title": "getArcType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getArcType",
        "normalized": "a b c d e-\u003eArc-\u003eIO ArcType",
        "package": "uni-graphs",
        "partial": "Arc Type",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eArc-\u003eIO ArcType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcTypeLabel",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e ArcType -\u003e IO arcTypeLabel",
        "fct-source": "src/Graphs-Graph.html#getArcTypeLabel",
        "fct-type": "method",
        "title": "getArcTypeLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getArcTypeLabel",
        "normalized": "a b c d e-\u003eArcType-\u003eIO e",
        "package": "uni-graphs",
        "partial": "Arc Type Label",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eArcType-\u003eIO arcTypeLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcTypes",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO [ArcType]",
        "fct-source": "src/Graphs-Graph.html#getArcTypes",
        "fct-type": "method",
        "title": "getArcTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getArcTypes",
        "normalized": "a b c d e-\u003eIO[ArcType]",
        "package": "uni-graphs",
        "partial": "Arc Types",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO[ArcType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcs",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO [Arc]",
        "fct-source": "src/Graphs-Graph.html#getArcs",
        "fct-type": "method",
        "title": "getArcs"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getArcs",
        "normalized": "a b c d e-\u003eIO[Arc]",
        "package": "uni-graphs",
        "partial": "Arcs",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO[Arc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcsIn",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Node -\u003e IO [Arc]",
        "fct-source": "src/Graphs-Graph.html#getArcsIn",
        "fct-type": "method",
        "title": "getArcsIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getArcsIn",
        "normalized": "a b c d e-\u003eNode-\u003eIO[Arc]",
        "package": "uni-graphs",
        "partial": "Arcs In",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNode-\u003eIO[Arc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getArcsOut",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Node -\u003e IO [Arc]",
        "fct-source": "src/Graphs-Graph.html#getArcsOut",
        "fct-type": "method",
        "title": "getArcsOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getArcsOut",
        "normalized": "a b c d e-\u003eNode-\u003eIO[Arc]",
        "package": "uni-graphs",
        "partial": "Arcs Out",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNode-\u003eIO[Arc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getNodeLabel",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Node -\u003e IO nodeLabel",
        "fct-source": "src/Graphs-Graph.html#getNodeLabel",
        "fct-type": "method",
        "title": "getNodeLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getNodeLabel",
        "normalized": "a b c d e-\u003eNode-\u003eIO b",
        "package": "uni-graphs",
        "partial": "Node Label",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNode-\u003eIO nodeLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getNodeType",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Node -\u003e IO NodeType",
        "fct-source": "src/Graphs-Graph.html#getNodeType",
        "fct-type": "method",
        "title": "getNodeType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getNodeType",
        "normalized": "a b c d e-\u003eNode-\u003eIO NodeType",
        "package": "uni-graphs",
        "partial": "Node Type",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNode-\u003eIO NodeType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getNodeTypeLabel",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e NodeType -\u003e IO nodeTypeLabel",
        "fct-source": "src/Graphs-Graph.html#getNodeTypeLabel",
        "fct-type": "method",
        "title": "getNodeTypeLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getNodeTypeLabel",
        "normalized": "a b c d e-\u003eNodeType-\u003eIO c",
        "package": "uni-graphs",
        "partial": "Node Type Label",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNodeType-\u003eIO nodeTypeLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getNodeTypes",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO [NodeType]",
        "fct-source": "src/Graphs-Graph.html#getNodeTypes",
        "fct-type": "method",
        "title": "getNodeTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getNodeTypes",
        "normalized": "a b c d e-\u003eIO[NodeType]",
        "package": "uni-graphs",
        "partial": "Node Types",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO[NodeType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getNodes",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO [Node]",
        "fct-source": "src/Graphs-Graph.html#getNodes",
        "fct-type": "method",
        "title": "getNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getNodes",
        "normalized": "a b c d e-\u003eIO[Node]",
        "package": "uni-graphs",
        "partial": "Nodes",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getSource",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Arc -\u003e IO Node",
        "fct-source": "src/Graphs-Graph.html#getSource",
        "fct-type": "method",
        "title": "getSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getSource",
        "normalized": "a b c d e-\u003eArc-\u003eIO Node",
        "package": "uni-graphs",
        "partial": "Source",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eArc-\u003eIO Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:getTarget",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Arc -\u003e IO Node",
        "fct-source": "src/Graphs-Graph.html#getTarget",
        "fct-type": "method",
        "title": "getTarget"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "getTarget",
        "normalized": "a b c d e-\u003eArc-\u003eIO Node",
        "package": "uni-graphs",
        "partial": "Target",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eArc-\u003eIO Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:graphState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "CannedGraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel",
        "fct-source": "src/Graphs-Graph.html#GraphConnectionData",
        "fct-type": "function",
        "title": "graphState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "graphState",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:graphUpdate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO ()",
        "fct-source": "src/Graphs-Graph.html#GraphConnectionData",
        "fct-type": "function",
        "title": "graphUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "graphUpdate",
        "normalized": "Update a b c d-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Update",
        "signature": "Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:nameSourceBranch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "NameSourceBranch",
        "fct-source": "src/Graphs-Graph.html#GraphConnectionData",
        "fct-type": "function",
        "title": "nameSourceBranch"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "nameSourceBranch",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Source Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:newArc",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e ArcType -\u003e arcLabel -\u003e Node -\u003e Node -\u003e IO Arc",
        "fct-source": "src/Graphs-Graph.html#newArc",
        "fct-type": "method",
        "title": "newArc"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "newArc",
        "normalized": "a b c d e-\u003eArcType-\u003ed-\u003eNode-\u003eNode-\u003eIO Arc",
        "package": "uni-graphs",
        "partial": "Arc",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eArcType-\u003earcLabel-\u003eNode-\u003eNode-\u003eIO Arc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:newArcType",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e arcTypeLabel -\u003e IO ArcType",
        "fct-source": "src/Graphs-Graph.html#newArcType",
        "fct-type": "method",
        "title": "newArcType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "newArcType",
        "normalized": "a b c d e-\u003ee-\u003eIO ArcType",
        "package": "uni-graphs",
        "partial": "Arc Type",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003earcTypeLabel-\u003eIO ArcType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:newEmptyGraph",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "IO (graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel)",
        "fct-source": "src/Graphs-Graph.html#newEmptyGraph",
        "fct-type": "method",
        "title": "newEmptyGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "newEmptyGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Empty Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:newGraph",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO (graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel)",
        "fct-source": "src/Graphs-Graph.html#newGraph",
        "fct-type": "method",
        "title": "newGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "newGraph",
        "normalized": "GraphConnection a b c d-\u003eIO(e a b c d)",
        "package": "uni-graphs",
        "partial": "Graph",
        "signature": "GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO(graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:newNode",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e NodeType -\u003e nodeLabel -\u003e IO Node",
        "fct-source": "src/Graphs-Graph.html#newNode",
        "fct-type": "method",
        "title": "newNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "newNode",
        "normalized": "a b c d e-\u003eNodeType-\u003eb-\u003eIO Node",
        "package": "uni-graphs",
        "partial": "Node",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNodeType-\u003enodeLabel-\u003eIO Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:newNodeType",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e nodeTypeLabel -\u003e IO NodeType",
        "fct-source": "src/Graphs-Graph.html#newNodeType",
        "fct-type": "method",
        "title": "newNodeType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "newNodeType",
        "normalized": "a b c d e-\u003ec-\u003eIO NodeType",
        "package": "uni-graphs",
        "partial": "Node Type",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003enodeTypeLabel-\u003eIO NodeType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:shareGraph",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel",
        "fct-source": "src/Graphs-Graph.html#shareGraph",
        "fct-type": "method",
        "title": "shareGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "shareGraph",
        "normalized": "a b c d e-\u003eGraphConnection b c d e",
        "package": "uni-graphs",
        "partial": "Graph",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:update",
      "description": {
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO ()",
        "fct-source": "src/Graphs-Graph.html#update",
        "fct-type": "method",
        "title": "update"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "update",
        "normalized": "a b c d e-\u003eUpdate b c d e-\u003eIO()",
        "package": "uni-graphs",
        "partial": "",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eUpdate nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-Graph.html#v:updates",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.Graph",
        "fct-package": "uni-graphs",
        "fct-signature": "[Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel]",
        "fct-source": "src/Graphs-Graph.html#CannedGraph",
        "fct-type": "function",
        "title": "updates"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs Graph",
        "module": "Graphs.Graph",
        "name": "updates",
        "normalized": "[Update a b c d]",
        "package": "uni-graphs",
        "partial": "",
        "signature": "[Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGraphConfigure contains definitions for the various configuration\n options for \u003ca\u003eGraphDisp\u003c/a\u003e objects.  These should be implemented\n using the \u003ccode\u003e\u003ca\u003eHasConfig\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eHasConfigValue\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eModifyHasDef\u003c/a\u003e\u003c/code\u003e,\n applied to instances of\n \u003ccode\u003e\u003ca\u003eGraphParms\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNodeTypeParms\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eArcTypeParms\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-GraphConfigure.html",
        "fct-type": "module",
        "title": "GraphConfigure"
      },
      "index": {
        "description": "GraphConfigure contains definitions for the various configuration options for GraphDisp objects These should be implemented using the HasConfig HasConfigValue and ModifyHasDef applied to instances of GraphParms NodeTypeParms and ArcTypeParms",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "GraphConfigure",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Configure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:ActionWrapper",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to be applied to all user actions.  This is useful\n for exception wrappers and so on.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-GraphConfigure.html#ActionWrapper",
        "fct-type": "newtype",
        "title": "ActionWrapper"
      },
      "index": {
        "description": "Function to be applied to all user actions This is useful for exception wrappers and so on",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "ActionWrapper",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Action Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:AllowClose",
      "description": {
        "fct-descr": "\u003cp\u003eIf set, action which is invoked if the user attempts to close the\n window.  If the action returns True, we close it.\n\u003c/p\u003e\u003cp\u003eWARNING.  This action is performed in the middle of the event loop,\n so please don't attempt to do any further graph interactions during it.\n (But HTk interactions should be fine.)\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-GraphConfigure.html#AllowClose",
        "fct-type": "newtype",
        "title": "AllowClose"
      },
      "index": {
        "description": "If set action which is invoked if the user attempts to close the window If the action returns True we close it WARNING This action is performed in the middle of the event loop so please don attempt to do any further graph interactions during it But HTk interactions should be fine",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "AllowClose",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Allow Close",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:AllowDragging",
      "description": {
        "fct-descr": "\u003cp\u003eIf True, allow Drag-and-Drop operators.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-GraphConfigure.html#AllowDragging",
        "fct-type": "newtype",
        "title": "AllowDragging"
      },
      "index": {
        "description": "If True allow Drag-and-Drop operators",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "AllowDragging",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Allow Dragging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:Border",
      "description": {
        "fct-descr": "\u003cp\u003eThe border of this node\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#Border",
        "fct-type": "data",
        "title": "Border"
      },
      "index": {
        "description": "The border of this node",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Border",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:BorderSource",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a \u003ccode\u003e\u003ca\u003eBorder\u003c/a\u003e\u003c/code\u003e which dynamically changes.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#BorderSource",
        "fct-type": "data",
        "title": "BorderSource"
      },
      "index": {
        "description": "Compute Border which dynamically changes",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "BorderSource",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Border Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eThe user is responsible for making sure this String is properly\n formatted.  To quote from the daVinci documentation:\n\u003c/p\u003e\u003cpre\u003e Can be used to define the background color of a node. The value of this\n attribute may be any X-Window colorname (see file lib/rgb.txt in your X11\n directory) or any RGB color specification in a format like \"#0f331e\",\n where 0f is the hexadecimal value for the red part of the color, 33 is\n the green part and 1e is the blue.  Hence, a pallet of 16.7 million\n colors is supported. The default color for nodes is \"white\".\n\u003c/pre\u003e\u003cp\u003eThere is a function for constructing \"RGB color specification\"s in\n \u003ca\u003eColour\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-GraphConfigure.html#Color",
        "fct-type": "newtype",
        "title": "Color"
      },
      "index": {
        "description": "The user is responsible for making sure this String is properly formatted To quote from the daVinci documentation Can be used to define the background color of node The value of this attribute may be any X-Window colorname see file lib rgb.txt in your X11 directory or any RGB color specification in format like f331e where is the hexadecimal value for the red part of the color is the green part and is the blue Hence pallet of million colors is supported The default color for nodes is white There is function for constructing RGB color specification in Colour",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Color",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:DoubleClickAction",
      "description": {
        "fct-descr": "\u003cp\u003eAction to be performed when a node or arc is double-clicked.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-GraphConfigure.html#DoubleClickAction",
        "fct-type": "newtype",
        "title": "DoubleClickAction"
      },
      "index": {
        "description": "Action to be performed when node or arc is double-clicked",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "DoubleClickAction",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Double Click Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:EdgeDir",
      "description": {
        "fct-descr": "\u003cp\u003eThe user is responsible for making sure this String is properly\n formatted.  To quote from the daVinci documentation:\n\u003c/p\u003e\u003cpre\u003e This attribute is used to control the arrow of an edge. In a graph visualization,\n each edge usually has an arrow pointing to the child node. This attribute can be\n used to let the arrow be drawn inverse (i.e. pointing to the parent), to get an arrow\n at both sides of an edge or to suppress arrows for a particular edge. The supported\n attribute values are: \"last\" (1 arrow pointing to the child, default), \\\"first\\\"\n(1 arrow to the parent), \"both\" (2 arrows to the parent and to children) and \"none\"\n(no arrows).\n\u003c/pre\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#EdgeDir",
        "fct-type": "data",
        "title": "EdgeDir"
      },
      "index": {
        "description": "The user is responsible for making sure this String is properly formatted To quote from the daVinci documentation This attribute is used to control the arrow of an edge In graph visualization each edge usually has an arrow pointing to the child node This attribute can be used to let the arrow be drawn inverse i.e pointing to the parent to get an arrow at both sides of an edge or to suppress arrows for particular edge The supported attribute values are last arrow pointing to the child default first arrow to the parent both arrows to the parent and to children and none no arrows",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "EdgeDir",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Edge Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:EdgePattern",
      "description": {
        "fct-descr": "\u003cp\u003eThe pattern of an edge\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#EdgePattern",
        "fct-type": "data",
        "title": "EdgePattern"
      },
      "index": {
        "description": "The pattern of an edge",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "EdgePattern",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Edge Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:FileMenuAct",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#FileMenuAct",
        "fct-type": "data",
        "title": "FileMenuAct"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "FileMenuAct",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "File Menu Act",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:FileMenuOption",
      "description": {
        "fct-descr": "\u003cp\u003eThe following options are provided specially by DaVinci (see, for now,\n \u003ca\u003ehttp://www.informatik.uni-bremen.de/daVinci/old/docs/reference/api/api_app_menu_cmd.html\u003c/a\u003e\n for the daVinci2.1 documentation.  If a \u003ccode\u003e\u003ca\u003eFileMenuAct\u003c/a\u003e\u003c/code\u003e is used as\n a configuration with a specified action, the corresponding option is\n enabled in the daVinci File menu, and the action is performed when the\n option is selected.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAllowClose\u003c/a\u003e\u003c/code\u003e configuration and \u003ccode\u003e\u003ca\u003eCloseMenuOption\u003c/a\u003e\u003c/code\u003e both set the action\n to be taken when the user selects a close event, and each overrides the\n other.\n\u003c/p\u003e\u003cp\u003eBy default the Close and Print options are enabled, however these\n and other options can be disabled by specifing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as the\n second argument to FileMenuAct.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#FileMenuOption",
        "fct-type": "data",
        "title": "FileMenuOption"
      },
      "index": {
        "description": "The following options are provided specially by DaVinci see for now http www.informatik.uni-bremen.de daVinci old docs reference api api app menu cmd.html for the daVinci2.1 documentation If FileMenuAct is used as configuration with specified action the corresponding option is enabled in the daVinci File menu and the action is performed when the option is selected The AllowClose configuration and CloseMenuOption both set the action to be taken when the user selects close event and each overrides the other By default the Close and Print options are enabled however these and other options can be disabled by specifing Nothing as the second argument to FileMenuAct",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "FileMenuOption",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "File Menu Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:FontStyle",
      "description": {
        "fct-descr": "\u003cp\u003eThe font in which the label of this node is displayed.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#FontStyle",
        "fct-type": "data",
        "title": "FontStyle"
      },
      "index": {
        "description": "The font in which the label of this node is displayed",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "FontStyle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Font Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:FontStyleSource",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a \u003ccode\u003e\u003ca\u003eFontStyle\u003c/a\u003e\u003c/code\u003e which dynamically changes.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#FontStyleSource",
        "fct-type": "data",
        "title": "FontStyleSource"
      },
      "index": {
        "description": "Compute FontStyle which dynamically changes",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "FontStyleSource",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Font Style Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:GlobalMenu",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-GraphConfigure.html#GlobalMenu",
        "fct-type": "newtype",
        "title": "GlobalMenu"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "GlobalMenu",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Global Menu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:GraphAllConfig",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphConfigure.html#GraphAllConfig",
        "fct-type": "class",
        "title": "GraphAllConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "GraphAllConfig",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph All Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:GraphGesture",
      "description": {
        "fct-descr": "\u003cp\u003eAction to be performed after mouse action not involving any node but\n somewhere on the graph.\n\u003c/p\u003e\u003cp\u003eIf you want to use this, the graph parameters need to include\n \u003ccode\u003e\u003ca\u003eAllowDragging\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#GraphGesture",
        "fct-type": "data",
        "title": "GraphGesture"
      },
      "index": {
        "description": "Action to be performed after mouse action not involving any node but somewhere on the graph If you want to use this the graph parameters need to include AllowDragging True",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "GraphGesture",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Gesture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:GraphTitle",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#GraphTitle",
        "fct-type": "data",
        "title": "GraphTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "GraphTitle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasArcTypeConfigs",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphConfigure.html#HasArcTypeConfigs",
        "fct-type": "class",
        "title": "HasArcTypeConfigs"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "HasArcTypeConfigs",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Has Arc Type Configs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasConfig",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "HasConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "HasConfig",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Has Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasConfigValue",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphConfigure.html#HasConfigValue",
        "fct-type": "class",
        "title": "HasConfigValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "HasConfigValue",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Has Config Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasGraphConfigs",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphConfigure.html#HasGraphConfigs",
        "fct-type": "class",
        "title": "HasGraphConfigs"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "HasGraphConfigs",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Has Graph Configs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasModifyValue",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphConfigure.html#HasModifyValue",
        "fct-type": "class",
        "title": "HasModifyValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "HasModifyValue",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Has Modify Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasNodeModifies",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphConfigure.html#HasNodeModifies",
        "fct-type": "class",
        "title": "HasNodeModifies"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "HasNodeModifies",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Has Node Modifies",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:HasNodeTypeConfigs",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphConfigure.html#HasNodeTypeConfigs",
        "fct-type": "class",
        "title": "HasNodeTypeConfigs"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "HasNodeTypeConfigs",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Has Node Type Configs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:Head",
      "description": {
        "fct-descr": "\u003cp\u003eThe user is responsible for making sure this String is properly\n formatted.  To quote from the daVinci documentation:\n\u003c/p\u003e\u003cpre\u003e  With this attribute you can control the shape of the edge's arrows.\n The possible values are: \"farrow\" (default), \"arrow\", \"fcircle\", and \"circle\",\n where a leading 'f' means filled.\n\u003c/pre\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#Head",
        "fct-type": "data",
        "title": "Head"
      },
      "index": {
        "description": "The user is responsible for making sure this String is properly formatted To quote from the daVinci documentation With this attribute you can control the shape of the edge arrows The possible values are farrow default arrow fcircle and circle where leading means filled",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Head",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Head",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:LocalMenu",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-GraphConfigure.html#LocalMenu",
        "fct-type": "newtype",
        "title": "LocalMenu"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "LocalMenu",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Local Menu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:MenuPrim",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "MenuPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "MenuPrim",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Menu Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:ModifyHasDef",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphConfigure.html#ModifyHasDef",
        "fct-type": "class",
        "title": "ModifyHasDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "ModifyHasDef",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Modify Has Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:NodeArcsHidden",
      "description": {
        "fct-descr": "\u003cp\u003eIf True, arcs from the node are not displayed.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-GraphConfigure.html#NodeArcsHidden",
        "fct-type": "newtype",
        "title": "NodeArcsHidden"
      },
      "index": {
        "description": "If True arcs from the node are not displayed",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "NodeArcsHidden",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Arcs Hidden",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:NodeDragAndDrop",
      "description": {
        "fct-descr": "\u003cp\u003eAction to be performed when the user drags one node onto another.\n The dragged node's value is passed as a Dyn (since it could have any\n type).\n\u003c/p\u003e\u003cp\u003eIf you want to use this, the graph parameters need to include\n \u003ccode\u003e\u003ca\u003eAllowDragging\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#NodeDragAndDrop",
        "fct-type": "data",
        "title": "NodeDragAndDrop"
      },
      "index": {
        "description": "Action to be performed when the user drags one node onto another The dragged node value is passed as Dyn since it could have any type If you want to use this the graph parameters need to include AllowDragging True",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "NodeDragAndDrop",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Drag And Drop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:NodeGesture",
      "description": {
        "fct-descr": "\u003cp\u003eAction to be performed when the user drags a node somewhere else,\n but not onto another node.\n\u003c/p\u003e\u003cp\u003eIf you want to use this, the graph parameters need to include\n \u003ccode\u003e\u003ca\u003eAllowDragging\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#NodeGesture",
        "fct-type": "data",
        "title": "NodeGesture"
      },
      "index": {
        "description": "Action to be performed when the user drags node somewhere else but not onto another node If you want to use this the graph parameters need to include AllowDragging True",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "NodeGesture",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Gesture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:OptimiseLayout",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, try hard to optimise the layout of the graph\n on redrawing it.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-GraphConfigure.html#OptimiseLayout",
        "fct-type": "newtype",
        "title": "OptimiseLayout"
      },
      "index": {
        "description": "If True try hard to optimise the layout of the graph on redrawing it",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "OptimiseLayout",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Optimise Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:Orientation",
      "description": {
        "fct-descr": "\u003cp\u003eWhich way up the graph is.\n\u003c/p\u003e\u003cp\u003eWe copy the DaVinciTypes constructors, though of course this will\n mean we have to painfully convert one to the other.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#Orientation",
        "fct-type": "data",
        "title": "Orientation"
      },
      "index": {
        "description": "Which way up the graph is We copy the DaVinciTypes constructors though of course this will mean we have to painfully convert one to the other",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Orientation",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Orientation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:Shape",
      "description": {
        "fct-descr": "\u003cp\u003eThis datatype is based on \u003ca\u003eDaVinciClasses\u003c/a\u003e, including several\n name clashes.  However we omit \u003ccode\u003eTextual\u003c/code\u003e, add the file argument\n to \u003ccode\u003e\u003ca\u003eIcon\u003c/a\u003e\u003c/code\u003e and the shape \u003ccode\u003e\u003ca\u003eTriangle\u003c/a\u003e\u003c/code\u003e.  This datatype may get bigger!\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#Shape",
        "fct-type": "data",
        "title": "Shape"
      },
      "index": {
        "description": "This datatype is based on DaVinciClasses including several name clashes However we omit Textual add the file argument to Icon and the shape Triangle This datatype may get bigger",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Shape",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Shape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:SurveyView",
      "description": {
        "fct-descr": "\u003cp\u003eIf True, add a survey view of the graph; IE display\n a picture of the whole graph which fits onto the\n screen (without displaying everything)\n as well as a picture of the details (which may not\n fit onto the screen).\n\u003c/p\u003e\u003cp\u003e(The user can do this anyway from daVinci's menus.)\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-GraphConfigure.html#SurveyView",
        "fct-type": "newtype",
        "title": "SurveyView"
      },
      "index": {
        "description": "If True add survey view of the graph IE display picture of the whole graph which fits onto the screen without displaying everything as well as picture of the details which may not fit onto the screen The user can do this anyway from daVinci menus",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "SurveyView",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Survey View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:ValueTitle",
      "description": {
        "fct-descr": "\u003cp\u003eProvide a function which computes a node or arc title string to be\n displayed.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#ValueTitle",
        "fct-type": "data",
        "title": "ValueTitle"
      },
      "index": {
        "description": "Provide function which computes node or arc title string to be displayed",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "ValueTitle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Value Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#t:ValueTitleSource",
      "description": {
        "fct-descr": "\u003cp\u003eProvide a function which computes a source which generates a dynamically-\n changing title.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConfigure.html#ValueTitleSource",
        "fct-type": "data",
        "title": "ValueTitleSource"
      },
      "index": {
        "description": "Provide function which computes source which generates dynamically changing title",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "ValueTitleSource",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Value Title Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:-36--36-",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "option -\u003e configuration -\u003e configuration",
        "fct-type": "method",
        "title": "($$)"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "($$) $$",
        "normalized": "a-\u003eb-\u003eb",
        "package": "uni-graphs",
        "partial": "",
        "signature": "option-\u003econfiguration-\u003econfiguration"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:-36--36--36-",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "option value -\u003e configuration value -\u003e configuration value",
        "fct-source": "src/Graphs-GraphConfigure.html#%24%24%24",
        "fct-type": "method",
        "title": "($$$)"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "($$$) $$$",
        "normalized": "a b-\u003ec b-\u003ec b",
        "package": "uni-graphs",
        "partial": "",
        "signature": "option value-\u003econfiguration value-\u003econfiguration value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:-36--36--36--63-",
      "description": {
        "fct-descr": "\u003cp\u003e$$$? can be a useful abbreviation\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Maybe (option value) -\u003e configuration value -\u003e configuration value",
        "fct-source": "src/Graphs-GraphConfigure.html#%24%24%24%3F",
        "fct-type": "function",
        "title": "($$$?)"
      },
      "index": {
        "description": "can be useful abbreviation",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "($$$?) $$$?",
        "normalized": "Maybe(a b)-\u003ec b-\u003ec b",
        "package": "uni-graphs",
        "partial": "",
        "signature": "Maybe(option value)-\u003econfiguration value-\u003econfiguration value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:ActionWrapper",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "ActionWrapper (IO () -\u003e IO ())",
        "fct-source": "src/Graphs-GraphConfigure.html#ActionWrapper",
        "fct-type": "function",
        "title": "ActionWrapper"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "ActionWrapper",
        "normalized": "ActionWrapper(IO()-\u003eIO())",
        "package": "uni-graphs",
        "partial": "Action Wrapper",
        "signature": "ActionWrapper(IO()-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:AllowClose",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "AllowClose (IO Bool)",
        "fct-source": "src/Graphs-GraphConfigure.html#AllowClose",
        "fct-type": "function",
        "title": "AllowClose"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "AllowClose",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Allow Close",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:AllowDragging",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "AllowDragging Bool",
        "fct-source": "src/Graphs-GraphConfigure.html#AllowDragging",
        "fct-type": "function",
        "title": "AllowDragging"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "AllowDragging",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Allow Dragging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Blank",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Blank",
        "fct-type": "function",
        "title": "Blank"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Blank",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Blank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:BoldFontStyle",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "BoldFontStyle",
        "fct-source": "src/Graphs-GraphConfigure.html#FontStyle",
        "fct-type": "function",
        "title": "BoldFontStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "BoldFontStyle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Bold Font Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:BoldItalicFontStyle",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "BoldItalicFontStyle",
        "fct-source": "src/Graphs-GraphConfigure.html#FontStyle",
        "fct-type": "function",
        "title": "BoldItalicFontStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "BoldItalicFontStyle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Bold Italic Font Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:BorderSource",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "BorderSource (value -\u003e IO (SimpleSource Border))",
        "fct-source": "src/Graphs-GraphConfigure.html#BorderSource",
        "fct-type": "function",
        "title": "BorderSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "BorderSource",
        "normalized": "BorderSource(a-\u003eIO(SimpleSource Border))",
        "package": "uni-graphs",
        "partial": "Border Source",
        "signature": "BorderSource(value-\u003eIO(SimpleSource Border))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:BottomUp",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "BottomUp",
        "fct-source": "src/Graphs-GraphConfigure.html#Orientation",
        "fct-type": "function",
        "title": "BottomUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "BottomUp",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Bottom Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Box",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Box",
        "fct-source": "src/Graphs-GraphConfigure.html#Shape",
        "fct-type": "function",
        "title": "Box"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Box",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Button",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Button String value",
        "fct-type": "function",
        "title": "Button"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Button",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Circle",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Circle",
        "fct-source": "src/Graphs-GraphConfigure.html#Shape",
        "fct-type": "function",
        "title": "Circle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Circle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:CloseMenuOption",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "CloseMenuOption",
        "fct-source": "src/Graphs-GraphConfigure.html#FileMenuOption",
        "fct-type": "function",
        "title": "CloseMenuOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "CloseMenuOption",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Close Menu Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Color",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Color String",
        "fct-source": "src/Graphs-GraphConfigure.html#Color",
        "fct-type": "function",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Color",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Dashed",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Dashed",
        "fct-source": "src/Graphs-GraphConfigure.html#EdgePattern",
        "fct-type": "function",
        "title": "Dashed"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Dashed",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Dashed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Dir",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Dir String",
        "fct-source": "src/Graphs-GraphConfigure.html#EdgeDir",
        "fct-type": "function",
        "title": "Dir"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Dir",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Dotted",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Dotted",
        "fct-source": "src/Graphs-GraphConfigure.html#EdgePattern",
        "fct-type": "function",
        "title": "Dotted"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Dotted",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Dotted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Double",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Double",
        "fct-source": "src/Graphs-GraphConfigure.html#EdgePattern",
        "fct-type": "function",
        "title": "Double"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Double",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:DoubleBorder",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "DoubleBorder",
        "fct-source": "src/Graphs-GraphConfigure.html#Border",
        "fct-type": "function",
        "title": "DoubleBorder"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "DoubleBorder",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Double Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:DoubleClickAction",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "DoubleClickAction (value -\u003e IO ())",
        "fct-source": "src/Graphs-GraphConfigure.html#DoubleClickAction",
        "fct-type": "function",
        "title": "DoubleClickAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "DoubleClickAction",
        "normalized": "DoubleClickAction(a-\u003eIO())",
        "package": "uni-graphs",
        "partial": "Double Click Action",
        "signature": "DoubleClickAction(value-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Ellipse",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Ellipse",
        "fct-source": "src/Graphs-GraphConfigure.html#Shape",
        "fct-type": "function",
        "title": "Ellipse"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Ellipse",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Ellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:ExitMenuOption",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "ExitMenuOption",
        "fct-source": "src/Graphs-GraphConfigure.html#FileMenuOption",
        "fct-type": "function",
        "title": "ExitMenuOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "ExitMenuOption",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Exit Menu Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:FileMenuAct",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "FileMenuAct FileMenuOption (Maybe (IO ()))",
        "fct-source": "src/Graphs-GraphConfigure.html#FileMenuAct",
        "fct-type": "function",
        "title": "FileMenuAct"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "FileMenuAct",
        "normalized": "FileMenuAct FileMenuOption(Maybe(IO()))",
        "package": "uni-graphs",
        "partial": "File Menu Act",
        "signature": "FileMenuAct FileMenuOption(Maybe(IO()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:FontStyleSource",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "FontStyleSource (value -\u003e IO (SimpleSource FontStyle))",
        "fct-source": "src/Graphs-GraphConfigure.html#FontStyleSource",
        "fct-type": "function",
        "title": "FontStyleSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "FontStyleSource",
        "normalized": "FontStyleSource(a-\u003eIO(SimpleSource FontStyle))",
        "package": "uni-graphs",
        "partial": "Font Style Source",
        "signature": "FontStyleSource(value-\u003eIO(SimpleSource FontStyle))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:GlobalMenu",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "GlobalMenu (MenuPrim (Maybe String) (IO ()))",
        "fct-source": "src/Graphs-GraphConfigure.html#GlobalMenu",
        "fct-type": "function",
        "title": "GlobalMenu"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "GlobalMenu",
        "normalized": "GlobalMenu(MenuPrim(Maybe String)(IO()))",
        "package": "uni-graphs",
        "partial": "Global Menu",
        "signature": "GlobalMenu(MenuPrim(Maybe String)(IO()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:GraphGesture",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "GraphGesture (IO ())",
        "fct-source": "src/Graphs-GraphConfigure.html#GraphGesture",
        "fct-type": "function",
        "title": "GraphGesture"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "GraphGesture",
        "normalized": "GraphGesture(IO())",
        "package": "uni-graphs",
        "partial": "Graph Gesture",
        "signature": "GraphGesture(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:GraphTitle",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "GraphTitle String",
        "fct-source": "src/Graphs-GraphConfigure.html#GraphTitle",
        "fct-type": "function",
        "title": "GraphTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "GraphTitle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Head",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Head String",
        "fct-source": "src/Graphs-GraphConfigure.html#Head",
        "fct-type": "function",
        "title": "Head"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Head",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Head",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Icon",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Icon FilePath",
        "fct-source": "src/Graphs-GraphConfigure.html#Shape",
        "fct-type": "function",
        "title": "Icon"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Icon",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Icon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:ItalicFontStyle",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "ItalicFontStyle",
        "fct-source": "src/Graphs-GraphConfigure.html#FontStyle",
        "fct-type": "function",
        "title": "ItalicFontStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "ItalicFontStyle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Italic Font Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:LeftRight",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "LeftRight",
        "fct-source": "src/Graphs-GraphConfigure.html#Orientation",
        "fct-type": "function",
        "title": "LeftRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "LeftRight",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Left Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:LocalMenu",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "LocalMenu (MenuPrim (Maybe String) (value -\u003e IO ()))",
        "fct-source": "src/Graphs-GraphConfigure.html#LocalMenu",
        "fct-type": "function",
        "title": "LocalMenu"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "LocalMenu",
        "normalized": "LocalMenu(MenuPrim(Maybe String)(a-\u003eIO()))",
        "package": "uni-graphs",
        "partial": "Local Menu",
        "signature": "LocalMenu(MenuPrim(Maybe String)(value-\u003eIO()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Menu",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Menu subMenuValue [MenuPrim subMenuValue value]",
        "fct-type": "function",
        "title": "Menu"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Menu",
        "normalized": "Menu a[MenuPrim a b]",
        "package": "uni-graphs",
        "partial": "Menu",
        "signature": "Menu subMenuValue[MenuPrim subMenuValue value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:NewMenuOption",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "NewMenuOption",
        "fct-source": "src/Graphs-GraphConfigure.html#FileMenuOption",
        "fct-type": "function",
        "title": "NewMenuOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "NewMenuOption",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "New Menu Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:NoBorder",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "NoBorder",
        "fct-source": "src/Graphs-GraphConfigure.html#Border",
        "fct-type": "function",
        "title": "NoBorder"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "NoBorder",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "No Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:NodeArcsHidden",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "NodeArcsHidden Bool",
        "fct-source": "src/Graphs-GraphConfigure.html#NodeArcsHidden",
        "fct-type": "function",
        "title": "NodeArcsHidden"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "NodeArcsHidden",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Arcs Hidden",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:NodeDragAndDrop",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "NodeDragAndDrop (Dyn -\u003e value -\u003e IO ())",
        "fct-source": "src/Graphs-GraphConfigure.html#NodeDragAndDrop",
        "fct-type": "function",
        "title": "NodeDragAndDrop"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "NodeDragAndDrop",
        "normalized": "NodeDragAndDrop(Dyn-\u003ea-\u003eIO())",
        "package": "uni-graphs",
        "partial": "Node Drag And Drop",
        "signature": "NodeDragAndDrop(Dyn-\u003evalue-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:NodeGesture",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "NodeGesture (value -\u003e IO ())",
        "fct-source": "src/Graphs-GraphConfigure.html#NodeGesture",
        "fct-type": "function",
        "title": "NodeGesture"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "NodeGesture",
        "normalized": "NodeGesture(a-\u003eIO())",
        "package": "uni-graphs",
        "partial": "Node Gesture",
        "signature": "NodeGesture(value-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:NormalFontStyle",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "NormalFontStyle",
        "fct-source": "src/Graphs-GraphConfigure.html#FontStyle",
        "fct-type": "function",
        "title": "NormalFontStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "NormalFontStyle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Normal Font Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:OpenMenuOption",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "OpenMenuOption",
        "fct-source": "src/Graphs-GraphConfigure.html#FileMenuOption",
        "fct-type": "function",
        "title": "OpenMenuOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "OpenMenuOption",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Open Menu Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:OptimiseLayout",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "OptimiseLayout Bool",
        "fct-source": "src/Graphs-GraphConfigure.html#OptimiseLayout",
        "fct-type": "function",
        "title": "OptimiseLayout"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "OptimiseLayout",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Optimise Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:PrintMenuOption",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "PrintMenuOption",
        "fct-source": "src/Graphs-GraphConfigure.html#FileMenuOption",
        "fct-type": "function",
        "title": "PrintMenuOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "PrintMenuOption",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Print Menu Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Rhombus",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Rhombus",
        "fct-source": "src/Graphs-GraphConfigure.html#Shape",
        "fct-type": "function",
        "title": "Rhombus"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Rhombus",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Rhombus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:RightLeft",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "RightLeft",
        "fct-source": "src/Graphs-GraphConfigure.html#Orientation",
        "fct-type": "function",
        "title": "RightLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "RightLeft",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Right Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:SaveAsMenuOption",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "SaveAsMenuOption",
        "fct-source": "src/Graphs-GraphConfigure.html#FileMenuOption",
        "fct-type": "function",
        "title": "SaveAsMenuOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "SaveAsMenuOption",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Save As Menu Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:SaveMenuOption",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "SaveMenuOption",
        "fct-source": "src/Graphs-GraphConfigure.html#FileMenuOption",
        "fct-type": "function",
        "title": "SaveMenuOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "SaveMenuOption",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Save Menu Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:SingleBorder",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "SingleBorder",
        "fct-source": "src/Graphs-GraphConfigure.html#Border",
        "fct-type": "function",
        "title": "SingleBorder"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "SingleBorder",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Single Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Solid",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Solid",
        "fct-source": "src/Graphs-GraphConfigure.html#EdgePattern",
        "fct-type": "function",
        "title": "Solid"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Solid",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Solid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:SurveyView",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "SurveyView Bool",
        "fct-source": "src/Graphs-GraphConfigure.html#SurveyView",
        "fct-type": "function",
        "title": "SurveyView"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "SurveyView",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Survey View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Thick",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Thick",
        "fct-source": "src/Graphs-GraphConfigure.html#EdgePattern",
        "fct-type": "function",
        "title": "Thick"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Thick",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Thick",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:TopDown",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "TopDown",
        "fct-source": "src/Graphs-GraphConfigure.html#Orientation",
        "fct-type": "function",
        "title": "TopDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "TopDown",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Top Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:Triangle",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "Triangle",
        "fct-source": "src/Graphs-GraphConfigure.html#Shape",
        "fct-type": "function",
        "title": "Triangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "Triangle",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Triangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:ValueTitle",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "ValueTitle (value -\u003e IO String)",
        "fct-source": "src/Graphs-GraphConfigure.html#ValueTitle",
        "fct-type": "function",
        "title": "ValueTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "ValueTitle",
        "normalized": "ValueTitle(a-\u003eIO String)",
        "package": "uni-graphs",
        "partial": "Value Title",
        "signature": "ValueTitle(value-\u003eIO String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:ValueTitleSource",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "ValueTitleSource (value -\u003e IO (SimpleSource String))",
        "fct-source": "src/Graphs-GraphConfigure.html#ValueTitleSource",
        "fct-type": "function",
        "title": "ValueTitleSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "ValueTitleSource",
        "normalized": "ValueTitleSource(a-\u003eIO(SimpleSource String))",
        "package": "uni-graphs",
        "partial": "Value Title Source",
        "signature": "ValueTitleSource(value-\u003eIO(SimpleSource String))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:combineGlobalMenus",
      "description": {
        "fct-descr": "\u003cp\u003eAs a service to MMiSS we provide a function which combines\n several GlobalMenus into one.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "[GlobalMenu] -\u003e GlobalMenu",
        "fct-source": "src/Graphs-GraphConfigure.html#combineGlobalMenus",
        "fct-type": "function",
        "title": "combineGlobalMenus"
      },
      "index": {
        "description": "As service to MMiSS we provide function which combines several GlobalMenus into one",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "combineGlobalMenus",
        "normalized": "[GlobalMenu]-\u003eGlobalMenu",
        "package": "uni-graphs",
        "partial": "Global Menus",
        "signature": "[GlobalMenu]-\u003eGlobalMenu"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:configUsed",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "option -\u003e configuration -\u003e Bool",
        "fct-type": "method",
        "title": "configUsed"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "configUsed",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "uni-graphs",
        "partial": "Used",
        "signature": "option-\u003econfiguration-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:configUsed-39-",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "option value -\u003e configuration value -\u003e Bool",
        "fct-source": "src/Graphs-GraphConfigure.html#configUsed%27",
        "fct-type": "method",
        "title": "configUsed'"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "configUsed'",
        "normalized": "a b-\u003ec b-\u003eBool",
        "package": "uni-graphs",
        "partial": "Used'",
        "signature": "option value-\u003econfiguration value-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:def",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "modification",
        "fct-source": "src/Graphs-GraphConfigure.html#def",
        "fct-type": "method",
        "title": "def"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "def",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:defaultAllowClose",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "AllowClose",
        "fct-source": "src/Graphs-GraphConfigure.html#defaultAllowClose",
        "fct-type": "function",
        "title": "defaultAllowClose"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "defaultAllowClose",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Allow Close",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:isDef",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "modification -\u003e Bool",
        "fct-source": "src/Graphs-GraphConfigure.html#isDef",
        "fct-type": "method",
        "title": "isDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "isDef",
        "normalized": "a-\u003eBool",
        "package": "uni-graphs",
        "partial": "Def",
        "signature": "modification-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:mapMMenuPrim",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "(a -\u003e m b) -\u003e MenuPrim c a -\u003e m (MenuPrim c b)",
        "fct-type": "function",
        "title": "mapMMenuPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "mapMMenuPrim",
        "normalized": "(a-\u003eb c)-\u003eMenuPrim d a-\u003eb(MenuPrim d c)",
        "package": "uni-graphs",
        "partial": "MMenu Prim",
        "signature": "(a-\u003em b)-\u003eMenuPrim c a-\u003em(MenuPrim c b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:mapMMenuPrim-39-",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "(c -\u003e m d) -\u003e MenuPrim c a -\u003e m (MenuPrim d a)",
        "fct-type": "function",
        "title": "mapMMenuPrim'"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "mapMMenuPrim'",
        "normalized": "(a-\u003eb c)-\u003eMenuPrim a d-\u003eb(MenuPrim c d)",
        "package": "uni-graphs",
        "partial": "MMenu Prim'",
        "signature": "(c-\u003em d)-\u003eMenuPrim c a-\u003em(MenuPrim d a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:mapMenuPrim",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "(a -\u003e b) -\u003e MenuPrim c a -\u003e MenuPrim c b",
        "fct-type": "function",
        "title": "mapMenuPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "mapMenuPrim",
        "normalized": "(a-\u003eb)-\u003eMenuPrim c a-\u003eMenuPrim c b",
        "package": "uni-graphs",
        "partial": "Menu Prim",
        "signature": "(a-\u003eb)-\u003eMenuPrim c a-\u003eMenuPrim c b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:mapMenuPrim-39-",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "(c -\u003e d) -\u003e MenuPrim c a -\u003e MenuPrim d a",
        "fct-type": "function",
        "title": "mapMenuPrim'"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "mapMenuPrim'",
        "normalized": "(a-\u003eb)-\u003eMenuPrim a c-\u003eMenuPrim b c",
        "package": "uni-graphs",
        "partial": "Menu Prim'",
        "signature": "(c-\u003ed)-\u003eMenuPrim c a-\u003eMenuPrim d a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConfigure.html#v:modify",
      "description": {
        "fct-module": "Graphs.GraphConfigure",
        "fct-package": "uni-graphs",
        "fct-signature": "option -\u003e graph -\u003e object value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphConfigure.html#modify",
        "fct-type": "method",
        "title": "modify"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConfigure",
        "module": "Graphs.GraphConfigure",
        "name": "modify",
        "normalized": "a-\u003eb-\u003ec d-\u003eIO()",
        "package": "uni-graphs",
        "partial": "",
        "signature": "option-\u003egraph-\u003eobject value-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGraphConnection contains various operations on graph connections\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.GraphConnection",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-GraphConnection.html",
        "fct-type": "module",
        "title": "GraphConnection"
      },
      "index": {
        "description": "GraphConnection contains various operations on graph connections",
        "hierarchy": "Graphs GraphConnection",
        "module": "Graphs.GraphConnection",
        "name": "GraphConnection",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#t:SubGraph",
      "description": {
        "fct-module": "Graphs.GraphConnection",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphConnection.html#SubGraph",
        "fct-type": "data",
        "title": "SubGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConnection",
        "module": "Graphs.GraphConnection",
        "name": "SubGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Sub Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#v:SubGraph",
      "description": {
        "fct-module": "Graphs.GraphConnection",
        "fct-package": "uni-graphs",
        "fct-signature": "SubGraph",
        "fct-source": "src/Graphs-GraphConnection.html#SubGraph",
        "fct-type": "function",
        "title": "SubGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConnection",
        "module": "Graphs.GraphConnection",
        "name": "SubGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Sub Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#v:attachSubGraph",
      "description": {
        "fct-module": "Graphs.GraphConnection",
        "fct-package": "uni-graphs",
        "fct-signature": "SubGraph -\u003e GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel",
        "fct-source": "src/Graphs-GraphConnection.html#attachSubGraph",
        "fct-type": "function",
        "title": "attachSubGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConnection",
        "module": "Graphs.GraphConnection",
        "name": "attachSubGraph",
        "normalized": "SubGraph-\u003eGraphConnection a b c d-\u003eGraphConnection a b c d",
        "package": "uni-graphs",
        "partial": "Sub Graph",
        "signature": "SubGraph-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#v:attachSuperGraph",
      "description": {
        "fct-module": "Graphs.GraphConnection",
        "fct-package": "uni-graphs",
        "fct-signature": "SubGraph -\u003e GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e GraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel",
        "fct-source": "src/Graphs-GraphConnection.html#attachSuperGraph",
        "fct-type": "function",
        "title": "attachSuperGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConnection",
        "module": "Graphs.GraphConnection",
        "name": "attachSuperGraph",
        "normalized": "SubGraph-\u003eGraphConnection a b c d-\u003eGraphConnection a b c d",
        "package": "uni-graphs",
        "partial": "Super Graph",
        "signature": "SubGraph-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#v:mapGraphConnection",
      "description": {
        "fct-module": "Graphs.GraphConnection",
        "fct-package": "uni-graphs",
        "fct-signature": "(nodeLabel1 -\u003e (nodeLabel2, NodeType))-\u003e (arcLabel1 -\u003e (arcLabel2, ArcType))-\u003e [Update nodeLabel2 nodeTypeLabel2 arcLabel2 arcTypeLabel2]-\u003e GraphConnection nodeLabel1 () arcLabel1 ()-\u003e GraphConnection nodeLabel2 nodeTypeLabel2 arcLabel2 arcTypeLabel2",
        "fct-type": "function",
        "title": "mapGraphConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConnection",
        "module": "Graphs.GraphConnection",
        "name": "mapGraphConnection",
        "normalized": "(a-\u003e(a,NodeType))-\u003e(b-\u003e(b,ArcType))-\u003e[Update a c b d]-\u003eGraphConnection a()b()-\u003eGraphConnection a c b d",
        "package": "uni-graphs",
        "partial": "Graph Connection",
        "signature": "(nodeLabel-\u003e(nodeLabel,NodeType))-\u003e(arcLabel-\u003e(arcLabel,ArcType))-\u003e[Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel]-\u003eGraphConnection nodeLabel()arcLabel()-\u003eGraphConnection nodeLabel nodeTypeLabel arcLabel arcTypeLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#v:nodeIn",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.GraphConnection",
        "fct-package": "uni-graphs",
        "fct-signature": "Node -\u003e Bool",
        "fct-source": "src/Graphs-GraphConnection.html#SubGraph",
        "fct-type": "function",
        "title": "nodeIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConnection",
        "module": "Graphs.GraphConnection",
        "name": "nodeIn",
        "normalized": "Node-\u003eBool",
        "package": "uni-graphs",
        "partial": "In",
        "signature": "Node-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphConnection.html#v:nodeTypeIn",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.GraphConnection",
        "fct-package": "uni-graphs",
        "fct-signature": "NodeType -\u003e Bool",
        "fct-source": "src/Graphs-GraphConnection.html#SubGraph",
        "fct-type": "function",
        "title": "nodeTypeIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphConnection",
        "module": "Graphs.GraphConnection",
        "name": "nodeTypeIn",
        "normalized": "NodeType-\u003eBool",
        "package": "uni-graphs",
        "partial": "Type In",
        "signature": "NodeType-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn UniForM we need ways of displaying typed directed graphs.\n In the original UniForM, it was only possible to use the DaVinci\n encapsulation for displaying directed graphs.  While this is very good,\n in the new UniForM it is intended to factor out this encapsulation\n so that it will not be too difficult to replace DaVinci by other\n graph-drawing package (or variants of DaVinci) for particular graphs.\n Example alternatives that might be considered:\n (1) some sort of text-only interface.\n (2) Windows-style displaying of a tree structure using clickable\n     folders.\n In this module we present the classes that any such \"graph-drawing package\"\n is supposed to implement.\n\u003c/p\u003e\u003cp\u003eThis module is in two parts.\n\u003c/p\u003e\u003cp\u003eThe first part contains the\n \"user-friendly\" versions of the functions.  For these, it is assumed\n (as will usually be the case) that there is only one\n node/nodeType/arc/arcType around for a particular graph.  The whole lot\n is indexed by the GraphAll, which contains ALL the functionality\n required for accessing the graphs (apart from configuration options).\n For example, the only daVinci-specific thing you should need to use\n to write a program which calls daVinci will be the daVinciSort variable.\n\u003c/p\u003e\u003cp\u003eThe second part contains the \"user-hateful\" versions.  All the\n user-hateful functions have names ending in \"Prim\".\n Graph display implementations only have to implement the user-hateful\n versions.  The user-hateful versions should only be of interest to other\n people if the graph display provides more than one implementation of\n the NodeClass, NodeTypeClass (or whatever) implementation.  One\n disadvantage to the user of using the user-hateful versions of the\n functions is that because of all the overloading, you have to put\n in lots of explicit types, or else get the most hideous type errors.\n\u003c/p\u003e\u003cp\u003eConfiguring things like graph titles, shape of node boxes, menus,\n and so on should also be implemented, where possible, by graph display\n interfaces.  The various options are documented in GraphConfigure.hs.\n They should be applied using the Computation.HasConfig interface.\n\u003c/p\u003e\u003cp\u003eThe types which are supposed in various combinations to be instances\n of the classes are as follows:\n\u003c/p\u003e\u003cp\u003egraph.  This corresponds to one graph display.\n    graphConfig.  This is configuration information for a graph.\n       This might be a window title or size for example.\n    graphParms.  This is a collection of graphConfig's used to\n       construct a graph.\n\u003c/p\u003e\u003cp\u003eNodes and arcs carry values.  Thus all the following carry\n a type parameter.  But, for ease of implementation with, for example,\n DaVinci, the type parameter is required to be an instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e   node.  A value of this type is an actual node in a graph.\n       (Will be an instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003eTypeable1\u003c/a\u003e\u003c/code\u003e.)\n\u003c/li\u003e\u003cli\u003e   nodeType.  Nodes are created with a particular UniForM \"type\" which\n       is a Haskell value of type nodetype.  In fact a graph might\n       conceivably have multiply Haskell types corresponding to node\n       and nodeType, meaning that nodes, or their UniForM types,\n       will be distinguished additionally by the Haskell type system.\n\u003c/li\u003e\u003cli\u003e   nodeTypeConfig.  Configuration information for a nodeType.\n       This might include how a node with this type is to be displayed\n       graphically.  This also includes information on what to do when the\n       node is clicked.\n\u003c/li\u003e\u003cli\u003e   nodeTypeParms.  A collection of nodeTypeConfig's used to construct\n       a nodeType\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSimilar constructions for arcs . . .\n    arc.\n    arcType.\n    arcTypeConfig.\n    arcTypeParms.\n\u003c/p\u003e\u003cp\u003eThere are quite a lot of classes.  This is partly because of the need\n to have a separate class for each subset of the type variables\n which is actually used in the type of a function.\n\u003c/p\u003e\u003cp\u003eThis file is fairly repetitive, mainly because of the need to\n repeat the configuration machinery over and over again.\n\u003c/p\u003e\u003cp\u003eThe functionality provided in this file is inspired by that\n provided by DaVinci.  However we extend it by allowing\n nodes to have labels.\n\u003c/p\u003e\u003cp\u003eThis file should be read in conjunction with \u003ca\u003eGraphConfigure\u003c/a\u003e,\n which contains various configuration options to be used for\n graph objects.\n\u003c/p\u003e\u003cp\u003eAdditional Notes\n ----------------\n\u003c/p\u003e\u003col\u003e\u003cli\u003e At the end of a program using a GraphDisp instance,\n     \u003ccode\u003eshutdown\u003c/code\u003e should be called.  For example,\n     in the case of the DaVinci instance this is\n     required to get rid of the DaVinci and HTk processes.\n\u003c/li\u003e\u003cli\u003e It is more cumbersome writing the Graph Editor than I would\n     like because the menu code doesn't give you\n     direct access to the node or arc type.  Unfortunately doing this\n     would make the classes in this file even more complicated than\n     they are now.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-GraphDisp.html",
        "fct-type": "module",
        "title": "GraphDisp"
      },
      "index": {
        "description": "In UniForM we need ways of displaying typed directed graphs In the original UniForM it was only possible to use the DaVinci encapsulation for displaying directed graphs While this is very good in the new UniForM it is intended to factor out this encapsulation so that it will not be too difficult to replace DaVinci by other graph-drawing package or variants of DaVinci for particular graphs Example alternatives that might be considered some sort of text-only interface Windows-style displaying of tree structure using clickable folders In this module we present the classes that any such graph-drawing package is supposed to implement This module is in two parts The first part contains the user-friendly versions of the functions For these it is assumed as will usually be the case that there is only one node nodeType arc arcType around for particular graph The whole lot is indexed by the GraphAll which contains ALL the functionality required for accessing the graphs apart from configuration options For example the only daVinci-specific thing you should need to use to write program which calls daVinci will be the daVinciSort variable The second part contains the user-hateful versions All the user-hateful functions have names ending in Prim Graph display implementations only have to implement the user-hateful versions The user-hateful versions should only be of interest to other people if the graph display provides more than one implementation of the NodeClass NodeTypeClass or whatever implementation One disadvantage to the user of using the user-hateful versions of the functions is that because of all the overloading you have to put in lots of explicit types or else get the most hideous type errors Configuring things like graph titles shape of node boxes menus and so on should also be implemented where possible by graph display interfaces The various options are documented in GraphConfigure.hs They should be applied using the Computation.HasConfig interface The types which are supposed in various combinations to be instances of the classes are as follows graph This corresponds to one graph display graphConfig This is configuration information for graph This might be window title or size for example graphParms This is collection of graphConfig used to construct graph Nodes and arcs carry values Thus all the following carry type parameter But for ease of implementation with for example DaVinci the type parameter is required to be an instance of Typeable node value of this type is an actual node in graph Will be an instance of Typeable via Typeable1 nodeType Nodes are created with particular UniForM type which is Haskell value of type nodetype In fact graph might conceivably have multiply Haskell types corresponding to node and nodeType meaning that nodes or their UniForM types will be distinguished additionally by the Haskell type system nodeTypeConfig Configuration information for nodeType This might include how node with this type is to be displayed graphically This also includes information on what to do when the node is clicked nodeTypeParms collection of nodeTypeConfig used to construct nodeType Similar constructions for arcs arc arcType arcTypeConfig arcTypeParms There are quite lot of classes This is partly because of the need to have separate class for each subset of the type variables which is actually used in the type of function This file is fairly repetitive mainly because of the need to repeat the configuration machinery over and over again The functionality provided in this file is inspired by that provided by DaVinci However we extend it by allowing nodes to have labels This file should be read in conjunction with GraphConfigure which contains various configuration options to be used for graph objects Additional Notes At the end of program using GraphDisp instance shutdown should be called For example in the case of the DaVinci instance this is required to get rid of the DaVinci and HTk processes It is more cumbersome writing the Graph Editor than would like because the menu code doesn give you direct access to the node or arc type Unfortunately doing this would make the classes in this file even more complicated than they are now",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "GraphDisp",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Disp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:ArcClass",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#ArcClass",
        "fct-type": "class",
        "title": "ArcClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "ArcClass",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:ArcTypeClass",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#ArcTypeClass",
        "fct-type": "class",
        "title": "ArcTypeClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "ArcTypeClass",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Type Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:ArcTypeConfig",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#ArcTypeConfig",
        "fct-type": "class",
        "title": "ArcTypeConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "ArcTypeConfig",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Type Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:ArcTypeParms",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#ArcTypeParms",
        "fct-type": "class",
        "title": "ArcTypeParms"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "ArcTypeParms",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Type Parms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:DeleteArc",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#DeleteArc",
        "fct-type": "class",
        "title": "DeleteArc"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "DeleteArc",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Delete Arc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:DeleteNode",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#DeleteNode",
        "fct-type": "class",
        "title": "DeleteNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "DeleteNode",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Delete Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:Eq1",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#Eq1",
        "fct-type": "class",
        "title": "Eq1"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "Eq1",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:Graph",
      "description": {
        "fct-descr": "\u003cp\u003eThe graph implementation will provide a value of this type to\n get you started.  For example, for daVinci this is called \u003ccode\u003edaVinciSort\u003c/code\u003e.\n However you then need to use it as an argument to \u003ccode\u003e\u003ca\u003enewGraph\u003c/a\u003e\u003c/code\u003e to construct\n the actual graph.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-GraphDisp.html#Graph",
        "fct-type": "newtype",
        "title": "Graph"
      },
      "index": {
        "description": "The graph implementation will provide value of this type to get you started For example for daVinci this is called daVinciSort However you then need to use it as an argument to newGraph to construct the actual graph",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "Graph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:GraphAll",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#GraphAll",
        "fct-type": "class",
        "title": "GraphAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "GraphAll",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:GraphClass",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#GraphClass",
        "fct-type": "class",
        "title": "GraphClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "GraphClass",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:GraphConfig",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#GraphConfig",
        "fct-type": "class",
        "title": "GraphConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "GraphConfig",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:GraphParms",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#GraphParms",
        "fct-type": "class",
        "title": "GraphParms"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "GraphParms",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Parms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NewArc",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#NewArc",
        "fct-type": "class",
        "title": "NewArc"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "NewArc",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "New Arc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NewArcType",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#NewArcType",
        "fct-type": "class",
        "title": "NewArcType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "NewArcType",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "New Arc Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NewGraph",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#NewGraph",
        "fct-type": "class",
        "title": "NewGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "NewGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "New Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NewNode",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#NewNode",
        "fct-type": "class",
        "title": "NewNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "NewNode",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "New Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NewNodeType",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#NewNodeType",
        "fct-type": "class",
        "title": "NewNodeType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "NewNodeType",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "New Node Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NodeClass",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#NodeClass",
        "fct-type": "class",
        "title": "NodeClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "NodeClass",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NodeTypeClass",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#NodeTypeClass",
        "fct-type": "class",
        "title": "NodeTypeClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "NodeTypeClass",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Type Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NodeTypeConfig",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#NodeTypeConfig",
        "fct-type": "class",
        "title": "NodeTypeConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "NodeTypeConfig",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Type Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:NodeTypeParms",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#NodeTypeParms",
        "fct-type": "class",
        "title": "NodeTypeParms"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "NodeTypeParms",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Type Parms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:Ord1",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#Ord1",
        "fct-type": "class",
        "title": "Ord1"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "Ord1",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:SetArcType",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#SetArcType",
        "fct-type": "class",
        "title": "SetArcType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "SetArcType",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Set Arc Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:SetNodeFocus",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "class",
        "fct-source": "src/Graphs-GraphDisp.html#SetNodeFocus",
        "fct-type": "class",
        "title": "SetNodeFocus"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "SetNodeFocus",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Set Node Focus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#t:WrappedNode",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphDisp.html#WrappedNode",
        "fct-type": "data",
        "title": "WrappedNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "WrappedNode",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Wrapped Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:Graph",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph",
        "fct-source": "src/Graphs-GraphDisp.html#Graph",
        "fct-type": "function",
        "title": "Graph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "Graph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:WrappedNode",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "WrappedNode (node value)",
        "fct-source": "src/Graphs-GraphDisp.html#WrappedNode",
        "fct-type": "function",
        "title": "WrappedNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "WrappedNode",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Wrapped Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:coMapArcTypeParms",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "(value2 -\u003e value1) -\u003e arcTypeParms value1 -\u003e arcTypeParms value2",
        "fct-source": "src/Graphs-GraphDisp.html#coMapArcTypeParms",
        "fct-type": "method",
        "title": "coMapArcTypeParms"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "coMapArcTypeParms",
        "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
        "package": "uni-graphs",
        "partial": "Map Arc Type Parms",
        "signature": "(value-\u003evalue)-\u003earcTypeParms value-\u003earcTypeParms value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:coMapNodeTypeParms",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "(value2 -\u003e value1) -\u003e nodeTypeParms value1 -\u003e nodeTypeParms value2",
        "fct-source": "src/Graphs-GraphDisp.html#coMapNodeTypeParms",
        "fct-type": "method",
        "title": "coMapNodeTypeParms"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "coMapNodeTypeParms",
        "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
        "package": "uni-graphs",
        "partial": "Map Node Type Parms",
        "signature": "(value-\u003evalue)-\u003enodeTypeParms value-\u003enodeTypeParms value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:compare1",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "takesParm value1 -\u003e takesParm value1 -\u003e Ordering",
        "fct-source": "src/Graphs-GraphDisp.html#compare1",
        "fct-type": "method",
        "title": "compare1"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "compare1",
        "normalized": "a b-\u003ea b-\u003eOrdering",
        "package": "uni-graphs",
        "partial": "",
        "signature": "takesParm value-\u003etakesParm value-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:deleteArc",
      "description": {
        "fct-descr": "\u003cp\u003edelete an arc\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e arc value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#deleteArc",
        "fct-type": "function",
        "title": "deleteArc"
      },
      "index": {
        "description": "delete an arc",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "deleteArc",
        "normalized": "Graph a b c d e f g h-\u003ef i-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Arc",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003earc value-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:deleteArcPrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e arc value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#deleteArcPrim",
        "fct-type": "method",
        "title": "deleteArcPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "deleteArcPrim",
        "normalized": "a-\u003eb c-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Arc Prim",
        "signature": "graph-\u003earc value-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:deleteNode",
      "description": {
        "fct-descr": "\u003cp\u003edelete a node\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e node value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#deleteNode",
        "fct-type": "function",
        "title": "deleteNode"
      },
      "index": {
        "description": "delete node",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "deleteNode",
        "normalized": "Graph a b c d e f g h-\u003ec i-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Node",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enode value-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:deleteNodePrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e node value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#deleteNodePrim",
        "fct-type": "method",
        "title": "deleteNodePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "deleteNodePrim",
        "normalized": "a-\u003eb c-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Node Prim",
        "signature": "graph-\u003enode value-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:displaySort",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms",
        "fct-source": "src/Graphs-GraphDisp.html#displaySort",
        "fct-type": "method",
        "title": "displaySort"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "displaySort",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Sort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:emptyArcTypeParms",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "arcTypeParms value",
        "fct-source": "src/Graphs-GraphDisp.html#emptyArcTypeParms",
        "fct-type": "method",
        "title": "emptyArcTypeParms"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "emptyArcTypeParms",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Type Parms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:emptyGraphParms",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graphParms",
        "fct-source": "src/Graphs-GraphDisp.html#emptyGraphParms",
        "fct-type": "method",
        "title": "emptyGraphParms"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "emptyGraphParms",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Parms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:emptyNodeTypeParms",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "nodeTypeParms value",
        "fct-source": "src/Graphs-GraphDisp.html#emptyNodeTypeParms",
        "fct-type": "method",
        "title": "emptyNodeTypeParms"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "emptyNodeTypeParms",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Type Parms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:eq1",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "takesParm value1 -\u003e takesParm value1 -\u003e Bool",
        "fct-source": "src/Graphs-GraphDisp.html#eq1",
        "fct-type": "method",
        "title": "eq1"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "eq1",
        "normalized": "a b-\u003ea b-\u003eBool",
        "package": "uni-graphs",
        "partial": "",
        "signature": "takesParm value-\u003etakesParm value-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:getArcValue",
      "description": {
        "fct-descr": "\u003cp\u003eget the value associated with an arc\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e arc value -\u003e IO value",
        "fct-source": "src/Graphs-GraphDisp.html#getArcValue",
        "fct-type": "function",
        "title": "getArcValue"
      },
      "index": {
        "description": "get the value associated with an arc",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "getArcValue",
        "normalized": "Graph a b c d e f g h-\u003ef i-\u003eIO i",
        "package": "uni-graphs",
        "partial": "Arc Value",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003earc value-\u003eIO value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:getArcValuePrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e arc value -\u003e IO value",
        "fct-source": "src/Graphs-GraphDisp.html#getArcValuePrim",
        "fct-type": "method",
        "title": "getArcValuePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "getArcValuePrim",
        "normalized": "a-\u003eb c-\u003eIO c",
        "package": "uni-graphs",
        "partial": "Arc Value Prim",
        "signature": "graph-\u003earc value-\u003eIO value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:getMultipleNodes",
      "description": {
        "fct-descr": "\u003cp\u003eTake over all interaction on the graph, and perform the given\n action, supplying it with an event which is activated when the user\n double-clicks a node.  This is helpful when you need an interaction\n selecting several nodes.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e (Event (WrappedNode node) -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Graphs-GraphDisp.html#getMultipleNodes",
        "fct-type": "function",
        "title": "getMultipleNodes"
      },
      "index": {
        "description": "Take over all interaction on the graph and perform the given action supplying it with an event which is activated when the user double-clicks node This is helpful when you need an interaction selecting several nodes",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "getMultipleNodes",
        "normalized": "Graph a b c d e f g h-\u003e(Event(WrappedNode c)-\u003eIO i)-\u003eIO i",
        "package": "uni-graphs",
        "partial": "Multiple Nodes",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003e(Event(WrappedNode node)-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:getMultipleNodesPrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e (Event (WrappedNode node) -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Graphs-GraphDisp.html#getMultipleNodesPrim",
        "fct-type": "method",
        "title": "getMultipleNodesPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "getMultipleNodesPrim",
        "normalized": "a-\u003e(Event(WrappedNode b)-\u003eIO c)-\u003eIO c",
        "package": "uni-graphs",
        "partial": "Multiple Nodes Prim",
        "signature": "graph-\u003e(Event(WrappedNode node)-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:getNodeValue",
      "description": {
        "fct-descr": "\u003cp\u003eget the value associated with a node\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e node value -\u003e IO value",
        "fct-source": "src/Graphs-GraphDisp.html#getNodeValue",
        "fct-type": "function",
        "title": "getNodeValue"
      },
      "index": {
        "description": "get the value associated with node",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "getNodeValue",
        "normalized": "Graph a b c d e f g h-\u003ec i-\u003eIO i",
        "package": "uni-graphs",
        "partial": "Node Value",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enode value-\u003eIO value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:getNodeValuePrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e node value -\u003e IO value",
        "fct-source": "src/Graphs-GraphDisp.html#getNodeValuePrim",
        "fct-type": "method",
        "title": "getNodeValuePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "getNodeValuePrim",
        "normalized": "a-\u003eb c-\u003eIO c",
        "package": "uni-graphs",
        "partial": "Node Value Prim",
        "signature": "graph-\u003enode value-\u003eIO value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:invisibleArcType",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "arcType value",
        "fct-source": "src/Graphs-GraphDisp.html#invisibleArcType",
        "fct-type": "method",
        "title": "invisibleArcType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "invisibleArcType",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:invisibleArcTypeParms",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "arcTypeParms value",
        "fct-source": "src/Graphs-GraphDisp.html#invisibleArcTypeParms",
        "fct-type": "method",
        "title": "invisibleArcTypeParms"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "invisibleArcTypeParms",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Type Parms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newArc",
      "description": {
        "fct-descr": "\u003cp\u003econstruct a new arc.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e arcType value -\u003e value -\u003e node nodeFromValue -\u003e node nodeToValue -\u003e IO (arc value)",
        "fct-source": "src/Graphs-GraphDisp.html#newArc",
        "fct-type": "function",
        "title": "newArc"
      },
      "index": {
        "description": "construct new arc",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "newArc",
        "normalized": "Graph a b c d e f g h-\u003eg i-\u003ei-\u003ec j-\u003ec k-\u003eIO(f i)",
        "package": "uni-graphs",
        "partial": "Arc",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003earcType value-\u003evalue-\u003enode nodeFromValue-\u003enode nodeToValue-\u003eIO(arc value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newArcListDrawer",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a node, construct a \u003ccode\u003e\u003ca\u003eListDrawer\u003c/a\u003e\u003c/code\u003e which can be used as a way\n of drawing ordered sets of out-arcs from that node.\n (NB.  At the moment daVinci does not do this properly, but that is\n daVinci's fault, not mine.)\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e node nodeFromValue -\u003e ListDrawer (arcType value, value, WrappedNode node) (arc value)",
        "fct-source": "src/Graphs-GraphDisp.html#newArcListDrawer",
        "fct-type": "function",
        "title": "newArcListDrawer"
      },
      "index": {
        "description": "Given node construct ListDrawer which can be used as way of drawing ordered sets of out-arcs from that node NB At the moment daVinci does not do this properly but that is daVinci fault not mine",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "newArcListDrawer",
        "normalized": "Graph a b c d e f g h-\u003ec i-\u003eListDrawer(g j,j,WrappedNode c)(f j)",
        "package": "uni-graphs",
        "partial": "Arc List Drawer",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enode nodeFromValue-\u003eListDrawer(arcType value,value,WrappedNode node)(arc value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newArcListDrawerPrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e nodeFrom nodeFromValue -\u003e ListDrawer (arcType value, value, WrappedNode nodeTo) (arc value)",
        "fct-source": "src/Graphs-GraphDisp.html#newArcListDrawerPrim",
        "fct-type": "method",
        "title": "newArcListDrawerPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "newArcListDrawerPrim",
        "normalized": "a-\u003eb c-\u003eListDrawer(d e,e,WrappedNode f)(g e)",
        "package": "uni-graphs",
        "partial": "Arc List Drawer Prim",
        "signature": "graph-\u003enodeFrom nodeFromValue-\u003eListDrawer(arcType value,value,WrappedNode nodeTo)(arc value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newArcPrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e arcType value -\u003e value -\u003e nodeFrom nodeFromValue -\u003e nodeTo nodeToValue -\u003e IO (arc value)",
        "fct-source": "src/Graphs-GraphDisp.html#newArcPrim",
        "fct-type": "method",
        "title": "newArcPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "newArcPrim",
        "normalized": "a-\u003eb c-\u003ec-\u003ed e-\u003ef g-\u003eIO(h c)",
        "package": "uni-graphs",
        "partial": "Arc Prim",
        "signature": "graph-\u003earcType value-\u003evalue-\u003enodeFrom nodeFromValue-\u003enodeTo nodeToValue-\u003eIO(arc value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newArcType",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a new arc type\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e arcTypeParms value -\u003e IO (arcType value)",
        "fct-source": "src/Graphs-GraphDisp.html#newArcType",
        "fct-type": "function",
        "title": "newArcType"
      },
      "index": {
        "description": "create new arc type",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "newArcType",
        "normalized": "Graph a b c d e f g h-\u003eh i-\u003eIO(g i)",
        "package": "uni-graphs",
        "partial": "Arc Type",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003earcTypeParms value-\u003eIO(arcType value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newArcTypePrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e arcTypeParms value -\u003e IO (arcType value)",
        "fct-source": "src/Graphs-GraphDisp.html#newArcTypePrim",
        "fct-type": "method",
        "title": "newArcTypePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "newArcTypePrim",
        "normalized": "a-\u003eb c-\u003eIO(d c)",
        "package": "uni-graphs",
        "partial": "Arc Type Prim",
        "signature": "graph-\u003earcTypeParms value-\u003eIO(arcType value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newGraph",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new graph.  The input value will be something like\n \u003ca\u003eDaVinciGraph\u003c/a\u003e's value \u003ccode\u003edaVinciSort\u003c/code\u003e; the resulting graph will be\n returned.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e graphParms -\u003e IO (Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms)",
        "fct-source": "src/Graphs-GraphDisp.html#newGraph",
        "fct-type": "function",
        "title": "newGraph"
      },
      "index": {
        "description": "Construct new graph The input value will be something like DaVinciGraph value daVinciSort the resulting graph will be returned",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "newGraph",
        "normalized": "Graph a b c d e f g h-\u003eb-\u003eIO(Graph a b c d e f g h)",
        "package": "uni-graphs",
        "partial": "Graph",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003egraphParms-\u003eIO(Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newGraphPrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graphParms -\u003e IO graph",
        "fct-source": "src/Graphs-GraphDisp.html#newGraphPrim",
        "fct-type": "method",
        "title": "newGraphPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "newGraphPrim",
        "normalized": "a-\u003eIO b",
        "package": "uni-graphs",
        "partial": "Graph Prim",
        "signature": "graphParms-\u003eIO graph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newNode",
      "description": {
        "fct-descr": "\u003cp\u003econstruct a new node.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e nodeType value -\u003e value -\u003e IO (node value)",
        "fct-source": "src/Graphs-GraphDisp.html#newNode",
        "fct-type": "function",
        "title": "newNode"
      },
      "index": {
        "description": "construct new node",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "newNode",
        "normalized": "Graph a b c d e f g h-\u003ed i-\u003ei-\u003eIO(c i)",
        "package": "uni-graphs",
        "partial": "Node",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enodeType value-\u003evalue-\u003eIO(node value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newNodePrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e nodeType value -\u003e value -\u003e IO (node value)",
        "fct-source": "src/Graphs-GraphDisp.html#newNodePrim",
        "fct-type": "method",
        "title": "newNodePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "newNodePrim",
        "normalized": "a-\u003eb c-\u003ec-\u003eIO(d c)",
        "package": "uni-graphs",
        "partial": "Node Prim",
        "signature": "graph-\u003enodeType value-\u003evalue-\u003eIO(node value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newNodeType",
      "description": {
        "fct-descr": "\u003cp\u003econstruct a node type.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e nodeTypeParms value -\u003e IO (nodeType value)",
        "fct-source": "src/Graphs-GraphDisp.html#newNodeType",
        "fct-type": "function",
        "title": "newNodeType"
      },
      "index": {
        "description": "construct node type",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "newNodeType",
        "normalized": "Graph a b c d e f g h-\u003ee i-\u003eIO(d i)",
        "package": "uni-graphs",
        "partial": "Node Type",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enodeTypeParms value-\u003eIO(nodeType value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:newNodeTypePrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e nodeTypeParms value -\u003e IO (nodeType value)",
        "fct-source": "src/Graphs-GraphDisp.html#newNodeTypePrim",
        "fct-type": "method",
        "title": "newNodeTypePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "newNodeTypePrim",
        "normalized": "a-\u003eb c-\u003eIO(d c)",
        "package": "uni-graphs",
        "partial": "Node Type Prim",
        "signature": "graph-\u003enodeTypeParms value-\u003eIO(nodeType value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:redraw",
      "description": {
        "fct-descr": "\u003cp\u003eRedraw the graph.  This is needed when you want to show updates.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#redraw",
        "fct-type": "function",
        "title": "redraw"
      },
      "index": {
        "description": "Redraw the graph This is needed when you want to show updates",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "redraw",
        "normalized": "Graph a b c d e f g h-\u003eIO()",
        "package": "uni-graphs",
        "partial": "",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:redrawPrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#redrawPrim",
        "fct-type": "method",
        "title": "redrawPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "redrawPrim",
        "normalized": "a-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Prim",
        "signature": "graph-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setArcType",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e arc value -\u003e arcType value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#setArcType",
        "fct-type": "function",
        "title": "setArcType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "setArcType",
        "normalized": "Graph a b c d e f g h-\u003ef i-\u003eg i-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Arc Type",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003earc value-\u003earcType value-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setArcTypePrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e arc value -\u003e arcType value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#setArcTypePrim",
        "fct-type": "method",
        "title": "setArcTypePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "setArcTypePrim",
        "normalized": "a-\u003eb c-\u003ed c-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Arc Type Prim",
        "signature": "graph-\u003earc value-\u003earcType value-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setArcValue",
      "description": {
        "fct-descr": "\u003cp\u003eset the value associated with an arc\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e arc value -\u003e value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#setArcValue",
        "fct-type": "function",
        "title": "setArcValue"
      },
      "index": {
        "description": "set the value associated with an arc",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "setArcValue",
        "normalized": "Graph a b c d e f g h-\u003ef i-\u003ei-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Arc Value",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003earc value-\u003evalue-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setArcValuePrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e arc value -\u003e value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#setArcValuePrim",
        "fct-type": "method",
        "title": "setArcValuePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "setArcValuePrim",
        "normalized": "a-\u003eb c-\u003ec-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Arc Value Prim",
        "signature": "graph-\u003earc value-\u003evalue-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setNodeFocus",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e node value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#setNodeFocus",
        "fct-type": "function",
        "title": "setNodeFocus"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "setNodeFocus",
        "normalized": "Graph a b c d e f g h-\u003ec i-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Node Focus",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enode value-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setNodeFocusPrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e node value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#setNodeFocusPrim",
        "fct-type": "method",
        "title": "setNodeFocusPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "setNodeFocusPrim",
        "normalized": "a-\u003eb c-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Node Focus Prim",
        "signature": "graph-\u003enode value-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setNodeType",
      "description": {
        "fct-descr": "\u003cp\u003eset a node's type\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e node value -\u003e nodeType value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#setNodeType",
        "fct-type": "function",
        "title": "setNodeType"
      },
      "index": {
        "description": "set node type",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "setNodeType",
        "normalized": "Graph a b c d e f g h-\u003ec i-\u003ed i-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Node Type",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enode value-\u003enodeType value-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setNodeTypePrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e node value -\u003e nodeType value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#setNodeTypePrim",
        "fct-type": "method",
        "title": "setNodeTypePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "setNodeTypePrim",
        "normalized": "a-\u003eb c-\u003ed c-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Node Type Prim",
        "signature": "graph-\u003enode value-\u003enodeType value-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setNodeValue",
      "description": {
        "fct-descr": "\u003cp\u003eset the value associated with a node.\n\u003c/p\u003e",
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e node value -\u003e value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#setNodeValue",
        "fct-type": "function",
        "title": "setNodeValue"
      },
      "index": {
        "description": "set the value associated with node",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "setNodeValue",
        "normalized": "Graph a b c d e f g h-\u003ec i-\u003ei-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Node Value",
        "signature": "Graph graph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003enode value-\u003evalue-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphDisp.html#v:setNodeValuePrim",
      "description": {
        "fct-module": "Graphs.GraphDisp",
        "fct-package": "uni-graphs",
        "fct-signature": "graph -\u003e node value -\u003e value -\u003e IO ()",
        "fct-source": "src/Graphs-GraphDisp.html#setNodeValuePrim",
        "fct-type": "method",
        "title": "setNodeValuePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphDisp",
        "module": "Graphs.GraphDisp",
        "name": "setNodeValuePrim",
        "normalized": "a-\u003eb c-\u003ec-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Node Value Prim",
        "signature": "graph-\u003enode value-\u003evalue-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e#\n\u003c/p\u003e\u003cp\u003eThis Graph Editor is inspired by the one by Einar Karlsen but uses\n the new graph interface.\n\u003c/p\u003e\u003cp\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e\u003ca name=\"\"/\u003e#\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.GraphEditor",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-GraphEditor.html",
        "fct-type": "module",
        "title": "GraphEditor"
      },
      "index": {
        "description": "This Graph Editor is inspired by the one by Einar Karlsen but uses the new graph interface",
        "hierarchy": "Graphs GraphEditor",
        "module": "Graphs.GraphEditor",
        "name": "GraphEditor",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#t:Displayable",
      "description": {
        "fct-module": "Graphs.GraphEditor",
        "fct-package": "uni-graphs",
        "fct-signature": "type",
        "fct-source": "src/Graphs-GraphEditor.html#Displayable",
        "fct-type": "type",
        "title": "Displayable"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphEditor",
        "module": "Graphs.GraphEditor",
        "name": "Displayable",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Displayable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#t:DisplayableCannedGraph",
      "description": {
        "fct-module": "Graphs.GraphEditor",
        "fct-package": "uni-graphs",
        "fct-signature": "type",
        "fct-source": "src/Graphs-GraphEditor.html#DisplayableCannedGraph",
        "fct-type": "type",
        "title": "DisplayableCannedGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphEditor",
        "module": "Graphs.GraphEditor",
        "name": "DisplayableCannedGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Displayable Canned Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#t:DisplayableGraphConnection",
      "description": {
        "fct-module": "Graphs.GraphEditor",
        "fct-package": "uni-graphs",
        "fct-signature": "type",
        "fct-source": "src/Graphs-GraphEditor.html#DisplayableGraphConnection",
        "fct-type": "type",
        "title": "DisplayableGraphConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphEditor",
        "module": "Graphs.GraphEditor",
        "name": "DisplayableGraphConnection",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Displayable Graph Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#t:DisplayableUpdate",
      "description": {
        "fct-module": "Graphs.GraphEditor",
        "fct-package": "uni-graphs",
        "fct-signature": "type",
        "fct-source": "src/Graphs-GraphEditor.html#DisplayableUpdate",
        "fct-type": "type",
        "title": "DisplayableUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphEditor",
        "module": "Graphs.GraphEditor",
        "name": "DisplayableUpdate",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Displayable Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#t:GraphEditor",
      "description": {
        "fct-module": "Graphs.GraphEditor",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-GraphEditor.html#GraphEditor",
        "fct-type": "data",
        "title": "GraphEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphEditor",
        "module": "Graphs.GraphEditor",
        "name": "GraphEditor",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphEditor.html#v:newGraphEditor",
      "description": {
        "fct-module": "Graphs.GraphEditor",
        "fct-package": "uni-graphs",
        "fct-signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms -\u003e Displayable graph -\u003e IO GraphEditor",
        "fct-source": "src/Graphs-GraphEditor.html#newGraphEditor",
        "fct-type": "function",
        "title": "newGraphEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphEditor",
        "module": "Graphs.GraphEditor",
        "name": "newGraphEditor",
        "normalized": "Graph a b c d e f g h-\u003eDisplayable i-\u003eIO GraphEditor",
        "package": "uni-graphs",
        "partial": "Graph Editor",
        "signature": "Graph dispGraph graphParms node nodeType nodeTypeParms arc arcType arcTypeParms-\u003eDisplayable graph-\u003eIO GraphEditor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphOps.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains various functions for operating on graphs\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.GraphOps",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-GraphOps.html",
        "fct-type": "module",
        "title": "GraphOps"
      },
      "index": {
        "description": "This module contains various functions for operating on graphs",
        "hierarchy": "Graphs GraphOps",
        "module": "Graphs.GraphOps",
        "name": "GraphOps",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Graph Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphOps.html#v:isAncestor",
      "description": {
        "fct-module": "Graphs.GraphOps",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Node -\u003e Node -\u003e IO Bool",
        "fct-source": "src/Graphs-GraphOps.html#isAncestor",
        "fct-type": "function",
        "title": "isAncestor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphOps",
        "module": "Graphs.GraphOps",
        "name": "isAncestor",
        "normalized": "a b c d e-\u003eNode-\u003eNode-\u003eIO Bool",
        "package": "uni-graphs",
        "partial": "Ancestor",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNode-\u003eNode-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-GraphOps.html#v:isAncestorBy",
      "description": {
        "fct-module": "Graphs.GraphOps",
        "fct-package": "uni-graphs",
        "fct-signature": "(key -\u003e IO [key]) -\u003e key -\u003e key -\u003e IO Bool",
        "fct-source": "src/Graphs-GraphOps.html#isAncestorBy",
        "fct-type": "function",
        "title": "isAncestorBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs GraphOps",
        "module": "Graphs.GraphOps",
        "name": "isAncestorBy",
        "normalized": "(a-\u003eIO[a])-\u003ea-\u003ea-\u003eIO Bool",
        "package": "uni-graphs",
        "partial": "Ancestor By",
        "signature": "(key-\u003eIO[key])-\u003ekey-\u003ekey-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNewNames is used for generating new names for Node's, Arc's,\n NodeType's and ArcType's in a graph on a globally unique basis.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.NewNames",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-NewNames.html",
        "fct-type": "module",
        "title": "NewNames"
      },
      "index": {
        "description": "NewNames is used for generating new names for Node Arc NodeType and ArcType in graph on globally unique basis",
        "hierarchy": "Graphs NewNames",
        "module": "Graphs.NewNames",
        "name": "NewNames",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "New Names",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#t:FrozenNameSource",
      "description": {
        "fct-module": "Graphs.NewNames",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-NewNames.html#FrozenNameSource",
        "fct-type": "data",
        "title": "FrozenNameSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs NewNames",
        "module": "Graphs.NewNames",
        "name": "FrozenNameSource",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Frozen Name Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#t:NameSource",
      "description": {
        "fct-module": "Graphs.NewNames",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-NewNames.html#NameSource",
        "fct-type": "data",
        "title": "NameSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs NewNames",
        "module": "Graphs.NewNames",
        "name": "NameSource",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Name Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#t:NameSourceBranch",
      "description": {
        "fct-module": "Graphs.NewNames",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-NewNames.html#NameSourceBranch",
        "fct-type": "data",
        "title": "NameSourceBranch"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs NewNames",
        "module": "Graphs.NewNames",
        "name": "NameSourceBranch",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Name Source Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#v:branch",
      "description": {
        "fct-module": "Graphs.NewNames",
        "fct-package": "uni-graphs",
        "fct-signature": "NameSource -\u003e IO NameSourceBranch",
        "fct-source": "src/Graphs-NewNames.html#branch",
        "fct-type": "function",
        "title": "branch"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs NewNames",
        "module": "Graphs.NewNames",
        "name": "branch",
        "normalized": "NameSource-\u003eIO NameSourceBranch",
        "package": "uni-graphs",
        "partial": "",
        "signature": "NameSource-\u003eIO NameSourceBranch"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#v:defrostNameSource",
      "description": {
        "fct-module": "Graphs.NewNames",
        "fct-package": "uni-graphs",
        "fct-signature": "NameSource -\u003e FrozenNameSource -\u003e IO ()",
        "fct-source": "src/Graphs-NewNames.html#defrostNameSource",
        "fct-type": "function",
        "title": "defrostNameSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs NewNames",
        "module": "Graphs.NewNames",
        "name": "defrostNameSource",
        "normalized": "NameSource-\u003eFrozenNameSource-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Name Source",
        "signature": "NameSource-\u003eFrozenNameSource-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#v:freezeNameSource",
      "description": {
        "fct-module": "Graphs.NewNames",
        "fct-package": "uni-graphs",
        "fct-signature": "NameSource -\u003e IO FrozenNameSource",
        "fct-source": "src/Graphs-NewNames.html#freezeNameSource",
        "fct-type": "function",
        "title": "freezeNameSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs NewNames",
        "module": "Graphs.NewNames",
        "name": "freezeNameSource",
        "normalized": "NameSource-\u003eIO FrozenNameSource",
        "package": "uni-graphs",
        "partial": "Name Source",
        "signature": "NameSource-\u003eIO FrozenNameSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#v:getNewName",
      "description": {
        "fct-module": "Graphs.NewNames",
        "fct-package": "uni-graphs",
        "fct-signature": "NameSource -\u003e IO String",
        "fct-source": "src/Graphs-NewNames.html#getNewName",
        "fct-type": "function",
        "title": "getNewName"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs NewNames",
        "module": "Graphs.NewNames",
        "name": "getNewName",
        "normalized": "NameSource-\u003eIO String",
        "package": "uni-graphs",
        "partial": "New Name",
        "signature": "NameSource-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#v:initialBranch",
      "description": {
        "fct-module": "Graphs.NewNames",
        "fct-package": "uni-graphs",
        "fct-signature": "NameSourceBranch",
        "fct-source": "src/Graphs-NewNames.html#initialBranch",
        "fct-type": "function",
        "title": "initialBranch"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs NewNames",
        "module": "Graphs.NewNames",
        "name": "initialBranch",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-NewNames.html#v:useBranch",
      "description": {
        "fct-module": "Graphs.NewNames",
        "fct-package": "uni-graphs",
        "fct-signature": "NameSourceBranch -\u003e IO NameSource",
        "fct-source": "src/Graphs-NewNames.html#useBranch",
        "fct-type": "function",
        "title": "useBranch"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs NewNames",
        "module": "Graphs.NewNames",
        "name": "useBranch",
        "normalized": "NameSourceBranch-\u003eIO NameSource",
        "package": "uni-graphs",
        "partial": "Branch",
        "signature": "NameSourceBranch-\u003eIO NameSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a simple \"pure\" graph interface, destined\n to be used for the complex graph operations required by VersionDag.\n\u003c/p\u003e\u003cp\u003eWe instance \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e for debugging purposes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-PureGraph.html",
        "fct-type": "module",
        "title": "PureGraph"
      },
      "index": {
        "description": "This module implements simple pure graph interface destined to be used for the complex graph operations required by VersionDag We instance Show for debugging purposes",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "PureGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Pure Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#t:ArcData",
      "description": {
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-PureGraph.html#ArcData",
        "fct-type": "data",
        "title": "ArcData"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "ArcData",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#t:NodeData",
      "description": {
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-PureGraph.html#NodeData",
        "fct-type": "data",
        "title": "NodeData"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "NodeData",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#t:PureGraph",
      "description": {
        "fct-descr": "\u003cp\u003enode given with their parent nodes.  The parents should always come\n before their children in the list.\n\u003c/p\u003e",
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "newtype",
        "fct-source": "src/Graphs-PureGraph.html#PureGraph",
        "fct-type": "newtype",
        "title": "PureGraph"
      },
      "index": {
        "description": "node given with their parent nodes The parents should always come before their children in the list",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "PureGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Pure Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:ArcData",
      "description": {
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "ArcData",
        "fct-source": "src/Graphs-PureGraph.html#ArcData",
        "fct-type": "function",
        "title": "ArcData"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "ArcData",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Arc Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:NodeData",
      "description": {
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "NodeData",
        "fct-source": "src/Graphs-PureGraph.html#NodeData",
        "fct-type": "function",
        "title": "NodeData"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "NodeData",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Node Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:PureGraph",
      "description": {
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "PureGraph",
        "fct-source": "src/Graphs-PureGraph.html#PureGraph",
        "fct-type": "function",
        "title": "PureGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "PureGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Pure Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:addNode",
      "description": {
        "fct-descr": "\u003cp\u003eadd a node with given parent arcs from it.\n\u003c/p\u003e",
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "PureGraph nodeInfo arcInfo -\u003e nodeInfo -\u003e [(arcInfo, nodeInfo)] -\u003e PureGraph nodeInfo arcInfo",
        "fct-source": "src/Graphs-PureGraph.html#addNode",
        "fct-type": "function",
        "title": "addNode"
      },
      "index": {
        "description": "add node with given parent arcs from it",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "addNode",
        "normalized": "PureGraph a b-\u003ea-\u003e[(b,a)]-\u003ePureGraph a b",
        "package": "uni-graphs",
        "partial": "Node",
        "signature": "PureGraph nodeInfo arcInfo-\u003enodeInfo-\u003e[(arcInfo,nodeInfo)]-\u003ePureGraph nodeInfo arcInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:arcInfo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "arcInfo",
        "fct-source": "src/Graphs-PureGraph.html#ArcData",
        "fct-type": "function",
        "title": "arcInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "arcInfo",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:deleteNode",
      "description": {
        "fct-descr": "\u003cp\u003eNB.  The graph will end up ill-formed if you delete a node which\n has parent arcs pointing to it.\n\u003c/p\u003e",
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "PureGraph nodeInfo arcInfo -\u003e nodeInfo -\u003e PureGraph nodeInfo arcInfo",
        "fct-source": "src/Graphs-PureGraph.html#deleteNode",
        "fct-type": "function",
        "title": "deleteNode"
      },
      "index": {
        "description": "NB The graph will end up ill-formed if you delete node which has parent arcs pointing to it",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "deleteNode",
        "normalized": "PureGraph a b-\u003ea-\u003ePureGraph a b",
        "package": "uni-graphs",
        "partial": "Node",
        "signature": "PureGraph nodeInfo arcInfo-\u003enodeInfo-\u003ePureGraph nodeInfo arcInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:emptyPureGraph",
      "description": {
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "PureGraph nodeInfo arcInfo",
        "fct-source": "src/Graphs-PureGraph.html#emptyPureGraph",
        "fct-type": "function",
        "title": "emptyPureGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "emptyPureGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Pure Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:mapArcInfo",
      "description": {
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "(arcInfo1 -\u003e arcInfo2) -\u003e PureGraph nodeInfo arcInfo1 -\u003e PureGraph nodeInfo arcInfo2",
        "fct-source": "src/Graphs-PureGraph.html#mapArcInfo",
        "fct-type": "function",
        "title": "mapArcInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "mapArcInfo",
        "normalized": "(a-\u003ea)-\u003ePureGraph b a-\u003ePureGraph b a",
        "package": "uni-graphs",
        "partial": "Arc Info",
        "signature": "(arcInfo-\u003earcInfo)-\u003ePureGraph nodeInfo arcInfo-\u003ePureGraph nodeInfo arcInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:nodeDataFM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "Map nodeInfo (NodeData nodeInfo arcInfo)",
        "fct-source": "src/Graphs-PureGraph.html#PureGraph",
        "fct-type": "function",
        "title": "nodeDataFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "nodeDataFM",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Data FM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:nodeExists",
      "description": {
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "PureGraph nodeInfo arcInfo -\u003e nodeInfo -\u003e Bool",
        "fct-source": "src/Graphs-PureGraph.html#nodeExists",
        "fct-type": "function",
        "title": "nodeExists"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "nodeExists",
        "normalized": "PureGraph a b-\u003ea-\u003eBool",
        "package": "uni-graphs",
        "partial": "Exists",
        "signature": "PureGraph nodeInfo arcInfo-\u003enodeInfo-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:parentNodes",
      "description": {
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "NodeData nodeInfo arcInfo -\u003e [nodeInfo]",
        "fct-source": "src/Graphs-PureGraph.html#parentNodes",
        "fct-type": "function",
        "title": "parentNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "parentNodes",
        "normalized": "NodeData a b-\u003e[a]",
        "package": "uni-graphs",
        "partial": "Nodes",
        "signature": "NodeData nodeInfo arcInfo-\u003e[nodeInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:parents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "[ArcData nodeInfo arcInfo]",
        "fct-source": "src/Graphs-PureGraph.html#NodeData",
        "fct-type": "function",
        "title": "parents"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "parents",
        "normalized": "[ArcData a b]",
        "package": "uni-graphs",
        "partial": "",
        "signature": "[ArcData nodeInfo arcInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:target",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "nodeInfo",
        "fct-source": "src/Graphs-PureGraph.html#ArcData",
        "fct-type": "function",
        "title": "target"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "target",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:toAllNodes",
      "description": {
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "PureGraph nodeInfo arcInfo -\u003e [nodeInfo]",
        "fct-source": "src/Graphs-PureGraph.html#toAllNodes",
        "fct-type": "function",
        "title": "toAllNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "toAllNodes",
        "normalized": "PureGraph a b-\u003e[a]",
        "package": "uni-graphs",
        "partial": "All Nodes",
        "signature": "PureGraph nodeInfo arcInfo-\u003e[nodeInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraph.html#v:toNodeParents",
      "description": {
        "fct-module": "Graphs.PureGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "PureGraph nodeInfo arcInfo -\u003e nodeInfo -\u003e Maybe [nodeInfo]",
        "fct-source": "src/Graphs-PureGraph.html#toNodeParents",
        "fct-type": "function",
        "title": "toNodeParents"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraph",
        "module": "Graphs.PureGraph",
        "name": "toNodeParents",
        "normalized": "PureGraph a b-\u003ea-\u003eMaybe[a]",
        "package": "uni-graphs",
        "partial": "Node Parents",
        "signature": "PureGraph nodeInfo arcInfo-\u003enodeInfo-\u003eMaybe[nodeInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraphMakeConsistent.html#",
      "description": {
        "fct-module": "Graphs.PureGraphMakeConsistent",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-PureGraphMakeConsistent.html",
        "fct-type": "module",
        "title": "PureGraphMakeConsistent"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraphMakeConsistent",
        "module": "Graphs.PureGraphMakeConsistent",
        "name": "PureGraphMakeConsistent",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Pure Graph Make Consistent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraphMakeConsistent.html#v:pureGraphMakeConsistent",
      "description": {
        "fct-module": "Graphs.PureGraphMakeConsistent",
        "fct-package": "uni-graphs",
        "fct-signature": "PureGraph nodeInfo arcInfo -\u003e PureGraph nodeInfo arcInfo",
        "fct-source": "src/Graphs-PureGraphMakeConsistent.html#pureGraphMakeConsistent",
        "fct-type": "function",
        "title": "pureGraphMakeConsistent"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraphMakeConsistent",
        "module": "Graphs.PureGraphMakeConsistent",
        "name": "pureGraphMakeConsistent",
        "normalized": "PureGraph a b-\u003ePureGraph a b",
        "package": "uni-graphs",
        "partial": "Graph Make Consistent",
        "signature": "PureGraph nodeInfo arcInfo-\u003ePureGraph nodeInfo arcInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraphPrune.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe functions in this module implement pruning of \u003ccode\u003e\u003ca\u003ePureGraph\u003c/a\u003e\u003c/code\u003es,\n to remove hidden nodes as far as possible, while still showing the\n structure between non-hidden nodes.\n\u003c/p\u003e\u003cp\u003eNB.  It is assumed the PureGraph is acyclic!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.PureGraphPrune",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-PureGraphPrune.html",
        "fct-type": "module",
        "title": "PureGraphPrune"
      },
      "index": {
        "description": "The functions in this module implement pruning of PureGraph to remove hidden nodes as far as possible while still showing the structure between non-hidden nodes NB It is assumed the PureGraph is acyclic",
        "hierarchy": "Graphs PureGraphPrune",
        "module": "Graphs.PureGraphPrune",
        "name": "PureGraphPrune",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Pure Graph Prune",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraphPrune.html#v:pureGraphPrune",
      "description": {
        "fct-descr": "\u003cp\u003eRemove \u003ca\u003ehidden\u003c/a\u003e vertices as far as possible from a graph, which\n must be acyclic, while still preserving the structure as far as possible.\n\u003c/p\u003e",
        "fct-module": "Graphs.PureGraphPrune",
        "fct-package": "uni-graphs",
        "fct-signature": "(nodeInfo -\u003e Bool)-\u003e PureGraph nodeInfo arcInfo-\u003e PureGraph nodeInfo (Maybe arcInfo)",
        "fct-type": "function",
        "title": "pureGraphPrune"
      },
      "index": {
        "description": "Remove hidden vertices as far as possible from graph which must be acyclic while still preserving the structure as far as possible",
        "hierarchy": "Graphs PureGraphPrune",
        "module": "Graphs.PureGraphPrune",
        "name": "pureGraphPrune",
        "normalized": "(a-\u003eBool)-\u003ePureGraph a b-\u003ePureGraph a(Maybe b)",
        "package": "uni-graphs",
        "partial": "Graph Prune",
        "signature": "(nodeInfo-\u003eBool)-\u003ePureGraph nodeInfo arcInfo-\u003ePureGraph nodeInfo(Maybe arcInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraphToGraph.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module, given a changing source of \u003ccode\u003e\u003ca\u003ePureGraph\u003c/a\u003e\u003c/code\u003es, transforms it into\n a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e. -}\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.PureGraphToGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-PureGraphToGraph.html",
        "fct-type": "module",
        "title": "PureGraphToGraph"
      },
      "index": {
        "description": "This module given changing source of PureGraph transforms it into Graph",
        "hierarchy": "Graphs PureGraphToGraph",
        "module": "Graphs.PureGraphToGraph",
        "name": "PureGraphToGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Pure Graph To Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-PureGraphToGraph.html#v:pureGraphToGraph",
      "description": {
        "fct-module": "Graphs.PureGraphToGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "SimpleSource (PureGraph nodeKey arcInfo, nodeKey -\u003e nodeInfo) -\u003e GraphConnection nodeInfo () arcInfo ()",
        "fct-source": "src/Graphs-PureGraphToGraph.html#pureGraphToGraph",
        "fct-type": "function",
        "title": "pureGraphToGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs PureGraphToGraph",
        "module": "Graphs.PureGraphToGraph",
        "name": "pureGraphToGraph",
        "normalized": "SimpleSource(PureGraph a b,a-\u003ec)-\u003eGraphConnection c()b()",
        "package": "uni-graphs",
        "partial": "Graph To Graph",
        "signature": "SimpleSource(PureGraph nodeKey arcInfo,nodeKey-\u003enodeInfo)-\u003eGraphConnection nodeInfo()arcInfo()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-RemoveAncestors.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe removeAncestors function in this module (actually an IO action) takes\n a graph G and a list of nodes N and computes N' = { n in N |\n    there does not exist an m in N and a non-trivial path n -\u003e m }.\n This is required for graph merging.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.RemoveAncestors",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-RemoveAncestors.html",
        "fct-type": "module",
        "title": "RemoveAncestors"
      },
      "index": {
        "description": "The removeAncestors function in this module actually an IO action takes graph and list of nodes and computes in there does not exist an in and non-trivial path This is required for graph merging",
        "hierarchy": "Graphs RemoveAncestors",
        "module": "Graphs.RemoveAncestors",
        "name": "RemoveAncestors",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Remove Ancestors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-RemoveAncestors.html#v:removeAncestors",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a graph G and a list of nodes N and computes N' = { n in N |\n there does not exist an m in N and a non-trivial path n -\u003e m }.\n\u003c/p\u003e",
        "fct-module": "Graphs.RemoveAncestors",
        "fct-package": "uni-graphs",
        "fct-signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e [Node] -\u003e IO [Node]",
        "fct-source": "src/Graphs-RemoveAncestors.html#removeAncestors",
        "fct-type": "function",
        "title": "removeAncestors"
      },
      "index": {
        "description": "Takes graph and list of nodes and computes in there does not exist an in and non-trivial path",
        "hierarchy": "Graphs RemoveAncestors",
        "module": "Graphs.RemoveAncestors",
        "name": "removeAncestors",
        "normalized": "a b c d e-\u003e[Node]-\u003eIO[Node]",
        "package": "uni-graphs",
        "partial": "Ancestors",
        "signature": "graph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003e[Node]-\u003eIO[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-RemoveAncestors.html#v:removeAncestorsBy",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral removeAncestors function, which takes as argument the action\n computing a Node's successors.\n\u003c/p\u003e",
        "fct-module": "Graphs.RemoveAncestors",
        "fct-package": "uni-graphs",
        "fct-signature": "(node -\u003e m [node]) -\u003e [node] -\u003e m [node]",
        "fct-source": "src/Graphs-RemoveAncestors.html#removeAncestorsBy",
        "fct-type": "function",
        "title": "removeAncestorsBy"
      },
      "index": {
        "description": "General removeAncestors function which takes as argument the action computing Node successors",
        "hierarchy": "Graphs RemoveAncestors",
        "module": "Graphs.RemoveAncestors",
        "name": "removeAncestorsBy",
        "normalized": "(a-\u003eb[a])-\u003e[a]-\u003eb[a]",
        "package": "uni-graphs",
        "partial": "Ancestors By",
        "signature": "(node-\u003em[node])-\u003e[node]-\u003em[node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-RemoveAncestors.html#v:removeAncestorsByPure",
      "description": {
        "fct-descr": "\u003cp\u003ePure version of \u003ccode\u003e\u003ca\u003eremoveAncestorsBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphs.RemoveAncestors",
        "fct-package": "uni-graphs",
        "fct-signature": "(node -\u003e [node]) -\u003e [node] -\u003e [node]",
        "fct-source": "src/Graphs-RemoveAncestors.html#removeAncestorsByPure",
        "fct-type": "function",
        "title": "removeAncestorsByPure"
      },
      "index": {
        "description": "Pure version of removeAncestorsBy",
        "hierarchy": "Graphs RemoveAncestors",
        "module": "Graphs.RemoveAncestors",
        "name": "removeAncestorsByPure",
        "normalized": "(a-\u003e[a])-\u003e[a]-\u003e[a]",
        "package": "uni-graphs",
        "partial": "Ancestors By Pure",
        "signature": "(node-\u003e[node])-\u003e[node]-\u003e[node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimpleGraph is, as the name implies, a simple implementation\n of the Graph interface.  For example, we don't bother to sort\n the arcs going out of a node, meaning that to find out if two\n nodes are connected requires searching all the arcs out of one\n of the nodes, or all the arcs into the other.\n\u003c/p\u003e\u003cp\u003eNotes on synchronicity.\n    The Update operations Set*Label are intrinsically unsafe in\n    this implementation since if two communicating SimpleGraphs\n    both execute a Set*Label operation with different label values\n    they may end up with each others values.  It is recommended that\n    Set*Label only be used during the initialisation of the object,\n    as a way of tieing the knot.\n\u003c/p\u003e\u003cp\u003eIn addition, Update operations which create a value based on a previous\n    value (EG a NewNode creates a Node based on a NodeType), do\n    assume that the previous value has already been created.\n\u003c/p\u003e\u003cp\u003eI realise this is somewhat informal.  It may be necessary to\n    replace SimpleGraph by something more complicated later . . .\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.SimpleGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-SimpleGraph.html",
        "fct-type": "module",
        "title": "SimpleGraph"
      },
      "index": {
        "description": "SimpleGraph is as the name implies simple implementation of the Graph interface For example we don bother to sort the arcs going out of node meaning that to find out if two nodes are connected requires searching all the arcs out of one of the nodes or all the arcs into the other Notes on synchronicity The Update operations Set Label are intrinsically unsafe in this implementation since if two communicating SimpleGraphs both execute Set Label operation with different label values they may end up with each others values It is recommended that Set Label only be used during the initialisation of the object as way of tieing the knot In addition Update operations which create value based on previous value EG NewNode creates Node based on NodeType do assume that the previous value has already been created realise this is somewhat informal It may be necessary to replace SimpleGraph by something more complicated later",
        "hierarchy": "Graphs SimpleGraph",
        "module": "Graphs.SimpleGraph",
        "name": "SimpleGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Simple Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#t:ClientData",
      "description": {
        "fct-module": "Graphs.SimpleGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-SimpleGraph.html#ClientData",
        "fct-type": "data",
        "title": "ClientData"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs SimpleGraph",
        "module": "Graphs.SimpleGraph",
        "name": "ClientData",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Client Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#t:SimpleGraph",
      "description": {
        "fct-module": "Graphs.SimpleGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-SimpleGraph.html#SimpleGraph",
        "fct-type": "data",
        "title": "SimpleGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs SimpleGraph",
        "module": "Graphs.SimpleGraph",
        "name": "SimpleGraph",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Simple Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#v:ClientData",
      "description": {
        "fct-module": "Graphs.SimpleGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "ClientData",
        "fct-source": "src/Graphs-SimpleGraph.html#ClientData",
        "fct-type": "function",
        "title": "ClientData"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs SimpleGraph",
        "module": "Graphs.SimpleGraph",
        "name": "ClientData",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Client Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#v:clientID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.SimpleGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "ObjectID",
        "fct-source": "src/Graphs-SimpleGraph.html#ClientData",
        "fct-type": "function",
        "title": "clientID"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs SimpleGraph",
        "module": "Graphs.SimpleGraph",
        "name": "clientID",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#v:clientSink",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphs.SimpleGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e IO ()",
        "fct-source": "src/Graphs-SimpleGraph.html#ClientData",
        "fct-type": "function",
        "title": "clientSink"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs SimpleGraph",
        "module": "Graphs.SimpleGraph",
        "name": "clientSink",
        "normalized": "Update a b c d-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Sink",
        "signature": "Update nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#v:delayedAction",
      "description": {
        "fct-module": "Graphs.SimpleGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "SimpleGraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e Node -\u003e IO () -\u003e IO ()",
        "fct-source": "src/Graphs-SimpleGraph.html#delayedAction",
        "fct-type": "function",
        "title": "delayedAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs SimpleGraph",
        "module": "Graphs.SimpleGraph",
        "name": "delayedAction",
        "normalized": "SimpleGraph a b c d-\u003eNode-\u003eIO()-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Action",
        "signature": "SimpleGraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNode-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-SimpleGraph.html#v:getNameSource",
      "description": {
        "fct-module": "Graphs.SimpleGraph",
        "fct-package": "uni-graphs",
        "fct-signature": "SimpleGraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel -\u003e NameSource",
        "fct-source": "src/Graphs-SimpleGraph.html#getNameSource",
        "fct-type": "function",
        "title": "getNameSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs SimpleGraph",
        "module": "Graphs.SimpleGraph",
        "name": "getNameSource",
        "normalized": "SimpleGraph a b c d-\u003eNameSource",
        "package": "uni-graphs",
        "partial": "Name Source",
        "signature": "SimpleGraph nodeLabel nodeTypeLabel arcLabel arcTypeLabel-\u003eNameSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-TopSort.html#",
      "description": {
        "fct-module": "Graphs.TopSort",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-TopSort.html",
        "fct-type": "module",
        "title": "TopSort"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs TopSort",
        "module": "Graphs.TopSort",
        "name": "TopSort",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Top Sort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-TopSort.html#v:topSort",
      "description": {
        "fct-module": "Graphs.TopSort",
        "fct-package": "uni-graphs",
        "fct-signature": "[(a, a)] -\u003e [a]",
        "fct-source": "src/Graphs-TopSort.html#topSort",
        "fct-type": "function",
        "title": "topSort"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs TopSort",
        "module": "Graphs.TopSort",
        "name": "topSort",
        "normalized": "[(a,a)]-\u003e[a]",
        "package": "uni-graphs",
        "partial": "Sort",
        "signature": "[(a,a)]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-TopSort.html#v:topSort1",
      "description": {
        "fct-module": "Graphs.TopSort",
        "fct-package": "uni-graphs",
        "fct-signature": "[(a, a)] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Graphs-TopSort.html#topSort1",
        "fct-type": "function",
        "title": "topSort1"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs TopSort",
        "module": "Graphs.TopSort",
        "name": "topSort1",
        "normalized": "[(a,a)]-\u003e[a]-\u003e[a]",
        "package": "uni-graphs",
        "partial": "Sort",
        "signature": "[(a,a)]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a VersionDag, a graph which is used for\n displaying versions within the Workbench.\n\u003c/p\u003e\u003cp\u003eThe main differences between this and normal \u003ccode\u003eSimpleGraph.SimpleGraph'\u003c/code\u003es\n are that\n   (1) the parents of a node are fixed when it is created, as are\n       all arc labels and arc type labels.\n   (2) it is possible to selectively \u003ca\u003ehide\u003c/a\u003e nodes from being displayed.\n       We intelligently display the structure between these nodes.\n   (3) it is not permitted to delete a node with children.  (Though it\n       may be hidden.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "module",
        "fct-source": "src/Graphs-VersionDag.html",
        "fct-type": "module",
        "title": "VersionDag"
      },
      "index": {
        "description": "This module implements VersionDag graph which is used for displaying versions within the Workbench The main differences between this and normal SimpleGraph.SimpleGraph are that the parents of node are fixed when it is created as are all arc labels and arc type labels it is possible to selectively hide nodes from being displayed We intelligently display the structure between these nodes it is not permitted to delete node with children Though it may be hidden",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "VersionDag",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Version Dag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#t:VersionDag",
      "description": {
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "data",
        "fct-source": "src/Graphs-VersionDag.html#VersionDag",
        "fct-type": "data",
        "title": "VersionDag"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "VersionDag",
        "normalized": "",
        "package": "uni-graphs",
        "partial": "Version Dag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:addVersion",
      "description": {
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e nodeInfo -\u003e IO ()",
        "fct-source": "src/Graphs-VersionDag.html#addVersion",
        "fct-type": "function",
        "title": "addVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "addVersion",
        "normalized": "VersionDag a b c-\u003eb-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Version",
        "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003enodeInfo-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:addVersions",
      "description": {
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e [nodeInfo] -\u003e IO ()",
        "fct-source": "src/Graphs-VersionDag.html#addVersions",
        "fct-type": "function",
        "title": "addVersions"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "addVersions",
        "normalized": "VersionDag a b c-\u003e[b]-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Versions",
        "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003e[nodeInfo]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:changeIsHidden",
      "description": {
        "fct-descr": "\u003cp\u003eChange the hidden function\n\u003c/p\u003e",
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e (nodeInfo -\u003e Bool) -\u003e IO ()",
        "fct-source": "src/Graphs-VersionDag.html#changeIsHidden",
        "fct-type": "function",
        "title": "changeIsHidden"
      },
      "index": {
        "description": "Change the hidden function",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "changeIsHidden",
        "normalized": "VersionDag a b c-\u003e(b-\u003eBool)-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Is Hidden",
        "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003e(nodeInfo-\u003eBool)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:deleteVersion",
      "description": {
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e nodeKey -\u003e IO ()",
        "fct-source": "src/Graphs-VersionDag.html#deleteVersion",
        "fct-type": "function",
        "title": "deleteVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "deleteVersion",
        "normalized": "VersionDag a b c-\u003ea-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Version",
        "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003enodeKey-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:getInputGraphBack",
      "description": {
        "fct-descr": "\u003cp\u003eGet the input graph in the form of FindCommonParents.GraphBack.\n NB.\n (1) the confusion in the type variable \u003ca\u003enodeKey\u003c/a\u003e as used in\n     FindCommonParents is not the same as our \u003ca\u003enodeKey\u003c/a\u003e.\n (2) we get a snapshot of the state of the input graph at a particular\n     time\n\u003c/p\u003e",
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e (nodeKey -\u003e nodeInfo -\u003e graphBackNodeKey) -\u003e IO (GraphBack nodeKey graphBackNodeKey)",
        "fct-source": "src/Graphs-VersionDag.html#getInputGraphBack",
        "fct-type": "function",
        "title": "getInputGraphBack"
      },
      "index": {
        "description": "Get the input graph in the form of FindCommonParents.GraphBack NB the confusion in the type variable nodeKey as used in FindCommonParents is not the same as our nodeKey we get snapshot of the state of the input graph at particular time",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "getInputGraphBack",
        "normalized": "VersionDag a b c-\u003e(a-\u003eb-\u003ed)-\u003eIO(GraphBack a d)",
        "package": "uni-graphs",
        "partial": "Input Graph Back",
        "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003e(nodeKey-\u003enodeInfo-\u003egraphBackNodeKey)-\u003eIO(GraphBack nodeKey graphBackNodeKey)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:getNodeInfos",
      "description": {
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e IO [nodeInfo]",
        "fct-source": "src/Graphs-VersionDag.html#getNodeInfos",
        "fct-type": "function",
        "title": "getNodeInfos"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "getNodeInfos",
        "normalized": "VersionDag a b c-\u003eIO[b]",
        "package": "uni-graphs",
        "partial": "Node Infos",
        "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003eIO[nodeInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:lookupNodeKey",
      "description": {
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e nodeKey -\u003e IO (Maybe nodeInfo)",
        "fct-source": "src/Graphs-VersionDag.html#lookupNodeKey",
        "fct-type": "function",
        "title": "lookupNodeKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "lookupNodeKey",
        "normalized": "VersionDag a b c-\u003ea-\u003eIO(Maybe b)",
        "package": "uni-graphs",
        "partial": "Node Key",
        "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003enodeKey-\u003eIO(Maybe nodeInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:newVersionDag",
      "description": {
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "(nodeInfo -\u003e Bool) -\u003e (nodeInfo -\u003e nodeKey) -\u003e (nodeInfo -\u003e [(arcInfo, nodeKey)]) -\u003e IO (VersionDag nodeKey nodeInfo arcInfo)",
        "fct-source": "src/Graphs-VersionDag.html#newVersionDag",
        "fct-type": "function",
        "title": "newVersionDag"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "newVersionDag",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003e(a-\u003e[(c,b)])-\u003eIO(VersionDag b a c)",
        "package": "uni-graphs",
        "partial": "Version Dag",
        "signature": "(nodeInfo-\u003eBool)-\u003e(nodeInfo-\u003enodeKey)-\u003e(nodeInfo-\u003e[(arcInfo,nodeKey)])-\u003eIO(VersionDag nodeKey nodeInfo arcInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:nodeKeyExists",
      "description": {
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e nodeKey -\u003e IO Bool",
        "fct-source": "src/Graphs-VersionDag.html#nodeKeyExists",
        "fct-type": "function",
        "title": "nodeKeyExists"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "nodeKeyExists",
        "normalized": "VersionDag a b c-\u003ea-\u003eIO Bool",
        "package": "uni-graphs",
        "partial": "Key Exists",
        "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003enodeKey-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:setNodeInfo",
      "description": {
        "fct-descr": "\u003cp\u003eChange the nodeInfo of something already added.\n\u003c/p\u003e",
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e nodeInfo -\u003e IO ()",
        "fct-source": "src/Graphs-VersionDag.html#setNodeInfo",
        "fct-type": "function",
        "title": "setNodeInfo"
      },
      "index": {
        "description": "Change the nodeInfo of something already added",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "setNodeInfo",
        "normalized": "VersionDag a b c-\u003eb-\u003eIO()",
        "package": "uni-graphs",
        "partial": "Node Info",
        "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003enodeInfo-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:toDisplayedGraph",
      "description": {
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e GraphConnection (nodeInfo, Bool) () (Maybe arcInfo) ()",
        "fct-source": "src/Graphs-VersionDag.html#toDisplayedGraph",
        "fct-type": "function",
        "title": "toDisplayedGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "toDisplayedGraph",
        "normalized": "VersionDag a b c-\u003eGraphConnection(b,Bool)()(Maybe c)()",
        "package": "uni-graphs",
        "partial": "Displayed Graph",
        "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003eGraphConnection(nodeInfo,Bool)()(Maybe arcInfo)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-graphs/docs/Graphs-VersionDag.html#v:toInputGraph",
      "description": {
        "fct-module": "Graphs.VersionDag",
        "fct-package": "uni-graphs",
        "fct-signature": "VersionDag nodeKey nodeInfo arcInfo -\u003e GraphConnection nodeInfo () arcInfo ()",
        "fct-source": "src/Graphs-VersionDag.html#toInputGraph",
        "fct-type": "function",
        "title": "toInputGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphs VersionDag",
        "module": "Graphs.VersionDag",
        "name": "toInputGraph",
        "normalized": "VersionDag a b c-\u003eGraphConnection b()c()",
        "package": "uni-graphs",
        "partial": "Input Graph",
        "signature": "VersionDag nodeKey nodeInfo arcInfo-\u003eGraphConnection nodeInfo()arcInfo()"
      }
    }
  }
]