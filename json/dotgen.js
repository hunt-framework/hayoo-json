[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a simple interface for building .dot graph files, for input into the dot and graphviz tools. \n It includes a monadic interface for building graphs.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "module",
        "fct-source": "src/Text-Dot.html",
        "fct-type": "module",
        "title": "Dot"
      },
      "index": {
        "description": "This module provides simple interface for building dot graph files for input into the dot and graphviz tools It includes monadic interface for building graphs",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "Dot",
        "normalized": "",
        "package": "dotgen",
        "partial": "Dot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#t:Dot",
      "description": {
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "data",
        "fct-source": "src/Text-Dot.html#Dot",
        "fct-type": "data",
        "title": "Dot"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "Dot",
        "normalized": "",
        "package": "dotgen",
        "partial": "Dot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#t:NodeId",
      "description": {
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "data",
        "fct-source": "src/Text-Dot.html#NodeId",
        "fct-type": "data",
        "title": "NodeId"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "NodeId",
        "normalized": "",
        "package": "dotgen",
        "partial": "Node Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:.-45--62-.",
      "description": {
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "NodeId -\u003e NodeId -\u003e Dot ()",
        "fct-source": "src/Text-Dot.html#.-%3E.",
        "fct-type": "function",
        "title": "(.-\u003e.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "(.-\u003e.) .-\u003e.",
        "normalized": "NodeId-\u003eNodeId-\u003eDot()",
        "package": "dotgen",
        "partial": "",
        "signature": "NodeId-\u003eNodeId-\u003eDot()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:attribute",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eattribute\u003c/a\u003e\u003c/code\u003e gives a attribute to the current scope.\n\u003c/p\u003e",
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "(String, String) -\u003e Dot ()",
        "fct-source": "src/Text-Dot.html#attribute",
        "fct-type": "function",
        "title": "attribute"
      },
      "index": {
        "description": "attribute gives attribute to the current scope",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "attribute",
        "normalized": "(String,String)-\u003eDot()",
        "package": "dotgen",
        "partial": "",
        "signature": "(String,String)-\u003eDot()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:cluster",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecluster\u003c/a\u003e\u003c/code\u003e builds an explicit, internally named subgraph (called cluster). \n\u003c/p\u003e",
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "Dot a -\u003e Dot (NodeId, a)",
        "fct-source": "src/Text-Dot.html#cluster",
        "fct-type": "function",
        "title": "cluster"
      },
      "index": {
        "description": "cluster builds an explicit internally named subgraph called cluster",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "cluster",
        "normalized": "Dot a-\u003eDot(NodeId,a)",
        "package": "dotgen",
        "partial": "",
        "signature": "Dot a-\u003eDot(NodeId,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:edge",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eedge\u003c/a\u003e\u003c/code\u003e generates an edge between two \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003es, with attributes.\n\u003c/p\u003e",
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "NodeId -\u003e NodeId -\u003e [(String, String)] -\u003e Dot ()",
        "fct-source": "src/Text-Dot.html#edge",
        "fct-type": "function",
        "title": "edge"
      },
      "index": {
        "description": "edge generates an edge between two NodeId with attributes",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "edge",
        "normalized": "NodeId-\u003eNodeId-\u003e[(String,String)]-\u003eDot()",
        "package": "dotgen",
        "partial": "",
        "signature": "NodeId-\u003eNodeId-\u003e[(String,String)]-\u003eDot()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:edge-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eedge\u003c/a\u003e\u003c/code\u003e generates an edge between two \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003es, with optional node sub-labels, and attributes.\n\u003c/p\u003e",
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "NodeId -\u003e Maybe String -\u003e NodeId -\u003e Maybe String -\u003e [(String, String)] -\u003e Dot ()",
        "fct-source": "src/Text-Dot.html#edge%27",
        "fct-type": "function",
        "title": "edge'"
      },
      "index": {
        "description": "edge generates an edge between two NodeId with optional node sub-labels and attributes",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "edge'",
        "normalized": "NodeId-\u003eMaybe String-\u003eNodeId-\u003eMaybe String-\u003e[(String,String)]-\u003eDot()",
        "package": "dotgen",
        "partial": "",
        "signature": "NodeId-\u003eMaybe String-\u003eNodeId-\u003eMaybe String-\u003e[(String,String)]-\u003eDot()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:netlistGraph",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enetlistGraph\u003c/a\u003e\u003c/code\u003e generates a simple graph from a netlist.\n\u003c/p\u003e",
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "(b -\u003e [(String, String)])-\u003e (b -\u003e [a])-\u003e [(a, b)]-\u003e Dot ()",
        "fct-type": "function",
        "title": "netlistGraph"
      },
      "index": {
        "description": "netlistGraph generates simple graph from netlist",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "netlistGraph",
        "normalized": "(a-\u003e[(String,String)])-\u003e(a-\u003e[b])-\u003e[(b,a)]-\u003eDot()",
        "package": "dotgen",
        "partial": "Graph",
        "signature": "(b-\u003e[(String,String)])-\u003e(b-\u003e[a])-\u003e[(a,b)]-\u003eDot()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:node",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enode\u003c/a\u003e\u003c/code\u003e takes a list of attributes, generates a new node, and gives a \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "[(String, String)] -\u003e Dot NodeId",
        "fct-source": "src/Text-Dot.html#node",
        "fct-type": "function",
        "title": "node"
      },
      "index": {
        "description": "node takes list of attributes generates new node and gives NodeId",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "node",
        "normalized": "[(String,String)]-\u003eDot NodeId",
        "package": "dotgen",
        "partial": "",
        "signature": "[(String,String)]-\u003eDot NodeId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:same",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esame\u003c/a\u003e\u003c/code\u003e provides a combinator for a common pattern; a set of \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003es with the same rank.\n\u003c/p\u003e",
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "[NodeId] -\u003e Dot ()",
        "fct-source": "src/Text-Dot.html#same",
        "fct-type": "function",
        "title": "same"
      },
      "index": {
        "description": "same provides combinator for common pattern set of NodeId with the same rank",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "same",
        "normalized": "[NodeId]-\u003eDot()",
        "package": "dotgen",
        "partial": "",
        "signature": "[NodeId]-\u003eDot()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:scope",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e.-\u003e.\u003c/a\u003e\u003c/code\u003e generates an edge between two \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e groups a subgraph together; in dot these are the subgraphs inside \u003ca\u003e{\u003c/a\u003e and \u003ca\u003e}\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "Dot a -\u003e Dot a",
        "fct-source": "src/Text-Dot.html#scope",
        "fct-type": "function",
        "title": "scope"
      },
      "index": {
        "description": "generates an edge between two NodeId scope groups subgraph together in dot these are the subgraphs inside and",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "scope",
        "normalized": "Dot a-\u003eDot a",
        "package": "dotgen",
        "partial": "",
        "signature": "Dot a-\u003eDot a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:share",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eshare\u003c/a\u003e\u003c/code\u003e is when a set of nodes share specific attributes. Usually used for layout tweaking.\n\u003c/p\u003e",
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "[(String, String)] -\u003e [NodeId] -\u003e Dot ()",
        "fct-source": "src/Text-Dot.html#share",
        "fct-type": "function",
        "title": "share"
      },
      "index": {
        "description": "share is when set of nodes share specific attributes Usually used for layout tweaking",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "share",
        "normalized": "[(String,String)]-\u003e[NodeId]-\u003eDot()",
        "package": "dotgen",
        "partial": "",
        "signature": "[(String,String)]-\u003e[NodeId]-\u003eDot()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:showDot",
      "description": {
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "Dot a -\u003e String",
        "fct-source": "src/Text-Dot.html#showDot",
        "fct-type": "function",
        "title": "showDot"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "showDot",
        "normalized": "Dot a-\u003eString",
        "package": "dotgen",
        "partial": "Dot",
        "signature": "Dot a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:userNode",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euserNode\u003c/a\u003e\u003c/code\u003e takes a NodeId, and adds some attributes to that node. \n\u003c/p\u003e",
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "NodeId -\u003e [(String, String)] -\u003e Dot ()",
        "fct-source": "src/Text-Dot.html#userNode",
        "fct-type": "function",
        "title": "userNode"
      },
      "index": {
        "description": "userNode takes NodeId and adds some attributes to that node",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "userNode",
        "normalized": "NodeId-\u003e[(String,String)]-\u003eDot()",
        "package": "dotgen",
        "partial": "Node",
        "signature": "NodeId-\u003e[(String,String)]-\u003eDot()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:userNodeId",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euserNodeId\u003c/a\u003e\u003c/code\u003e allows a user to use their own (Int-based) node id's, without needing to remap them.\n\u003c/p\u003e",
        "fct-module": "Text.Dot",
        "fct-package": "dotgen",
        "fct-signature": "Int -\u003e NodeId",
        "fct-source": "src/Text-Dot.html#userNodeId",
        "fct-type": "function",
        "title": "userNodeId"
      },
      "index": {
        "description": "userNodeId allows user to use their own Int-based node id without needing to remap them",
        "hierarchy": "Text Dot",
        "module": "Text.Dot",
        "name": "userNodeId",
        "normalized": "Int-\u003eNodeId",
        "package": "dotgen",
        "partial": "Node Id",
        "signature": "Int-\u003eNodeId"
      }
    }
  }
]