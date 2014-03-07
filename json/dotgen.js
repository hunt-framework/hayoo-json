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
        "word": "dotgen"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a simple interface for building .dot graph files, for input into the dot and graphviz tools. \n It includes a monadic interface for building graphs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Dot",
          "name": "Dot",
          "package": "dotgen",
          "source": "src/Text-Dot.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides simple interface for building dot graph files for input into the dot and graphviz tools It includes monadic interface for building graphs",
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "Dot",
          "package": "dotgen",
          "partial": "Dot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Dot",
          "name": "Dot",
          "package": "dotgen",
          "source": "src/Text-Dot.html#Dot",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "Dot",
          "package": "dotgen",
          "partial": "Dot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#t:Dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Dot",
          "name": "NodeId",
          "package": "dotgen",
          "source": "src/Text-Dot.html#NodeId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "NodeId",
          "package": "dotgen",
          "partial": "Node Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#t:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Dot",
          "name": "(.-\u003e.)",
          "package": "dotgen",
          "signature": "NodeId -\u003e NodeId -\u003e Dot ()",
          "source": "src/Text-Dot.html#.-%3E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "(.-\u003e.) .-\u003e.",
          "normalized": "NodeId-\u003eNodeId-\u003eDot()",
          "package": "dotgen",
          "signature": "NodeId-\u003eNodeId-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:.-45--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eattribute\u003c/a\u003e\u003c/code\u003e gives a attribute to the current scope.\n\u003c/p\u003e",
          "module": "Text.Dot",
          "name": "attribute",
          "package": "dotgen",
          "signature": "(String, String) -\u003e Dot ()",
          "source": "src/Text-Dot.html#attribute",
          "type": "function"
        },
        "index": {
          "description": "attribute gives attribute to the current scope",
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "attribute",
          "normalized": "(String,String)-\u003eDot()",
          "package": "dotgen",
          "signature": "(String,String)-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecluster\u003c/a\u003e\u003c/code\u003e builds an explicit, internally named subgraph (called cluster). \n\u003c/p\u003e",
          "module": "Text.Dot",
          "name": "cluster",
          "package": "dotgen",
          "signature": "Dot a -\u003e Dot (NodeId, a)",
          "source": "src/Text-Dot.html#cluster",
          "type": "function"
        },
        "index": {
          "description": "cluster builds an explicit internally named subgraph called cluster",
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "cluster",
          "normalized": "Dot a-\u003eDot(NodeId,a)",
          "package": "dotgen",
          "signature": "Dot a-\u003eDot(NodeId,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:cluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eedge\u003c/a\u003e\u003c/code\u003e generates an edge between two \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003es, with attributes.\n\u003c/p\u003e",
          "module": "Text.Dot",
          "name": "edge",
          "package": "dotgen",
          "signature": "NodeId -\u003e NodeId -\u003e [(String, String)] -\u003e Dot ()",
          "source": "src/Text-Dot.html#edge",
          "type": "function"
        },
        "index": {
          "description": "edge generates an edge between two NodeId with attributes",
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "edge",
          "normalized": "NodeId-\u003eNodeId-\u003e[(String,String)]-\u003eDot()",
          "package": "dotgen",
          "signature": "NodeId-\u003eNodeId-\u003e[(String,String)]-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eedge\u003c/a\u003e\u003c/code\u003e generates an edge between two \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003es, with optional node sub-labels, and attributes.\n\u003c/p\u003e",
          "module": "Text.Dot",
          "name": "edge'",
          "package": "dotgen",
          "signature": "NodeId -\u003e Maybe String -\u003e NodeId -\u003e Maybe String -\u003e [(String, String)] -\u003e Dot ()",
          "source": "src/Text-Dot.html#edge%27",
          "type": "function"
        },
        "index": {
          "description": "edge generates an edge between two NodeId with optional node sub-labels and attributes",
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "edge'",
          "normalized": "NodeId-\u003eMaybe String-\u003eNodeId-\u003eMaybe String-\u003e[(String,String)]-\u003eDot()",
          "package": "dotgen",
          "signature": "NodeId-\u003eMaybe String-\u003eNodeId-\u003eMaybe String-\u003e[(String,String)]-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:edge-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enetlistGraph\u003c/a\u003e\u003c/code\u003e generates a simple graph from a netlist.\n\u003c/p\u003e",
          "module": "Text.Dot",
          "name": "netlistGraph",
          "package": "dotgen",
          "signature": "(b -\u003e [(String, String)])-\u003e (b -\u003e [a])-\u003e [(a, b)]-\u003e Dot ()",
          "type": "function"
        },
        "index": {
          "description": "netlistGraph generates simple graph from netlist",
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "netlistGraph",
          "normalized": "(a-\u003e[(String,String)])-\u003e(a-\u003e[b])-\u003e[(b,a)]-\u003eDot()",
          "package": "dotgen",
          "partial": "Graph",
          "signature": "(b-\u003e[(String,String)])-\u003e(b-\u003e[a])-\u003e[(a,b)]-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:netlistGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enode\u003c/a\u003e\u003c/code\u003e takes a list of attributes, generates a new node, and gives a \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Dot",
          "name": "node",
          "package": "dotgen",
          "signature": "[(String, String)] -\u003e Dot NodeId",
          "source": "src/Text-Dot.html#node",
          "type": "function"
        },
        "index": {
          "description": "node takes list of attributes generates new node and gives NodeId",
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "node",
          "normalized": "[(String,String)]-\u003eDot NodeId",
          "package": "dotgen",
          "signature": "[(String,String)]-\u003eDot NodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esame\u003c/a\u003e\u003c/code\u003e provides a combinator for a common pattern; a set of \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003es with the same rank.\n\u003c/p\u003e",
          "module": "Text.Dot",
          "name": "same",
          "package": "dotgen",
          "signature": "[NodeId] -\u003e Dot ()",
          "source": "src/Text-Dot.html#same",
          "type": "function"
        },
        "index": {
          "description": "same provides combinator for common pattern set of NodeId with the same rank",
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "same",
          "normalized": "[NodeId]-\u003eDot()",
          "package": "dotgen",
          "signature": "[NodeId]-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:same"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e.-\u003e.\u003c/a\u003e\u003c/code\u003e generates an edge between two \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e groups a subgraph together; in dot these are the subgraphs inside \u003ca\u003e{\u003c/a\u003e and \u003ca\u003e}\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Dot",
          "name": "scope",
          "package": "dotgen",
          "signature": "Dot a -\u003e Dot a",
          "source": "src/Text-Dot.html#scope",
          "type": "function"
        },
        "index": {
          "description": "generates an edge between two NodeId scope groups subgraph together in dot these are the subgraphs inside and",
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "scope",
          "normalized": "Dot a-\u003eDot a",
          "package": "dotgen",
          "signature": "Dot a-\u003eDot a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:scope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eshare\u003c/a\u003e\u003c/code\u003e is when a set of nodes share specific attributes. Usually used for layout tweaking.\n\u003c/p\u003e",
          "module": "Text.Dot",
          "name": "share",
          "package": "dotgen",
          "signature": "[(String, String)] -\u003e [NodeId] -\u003e Dot ()",
          "source": "src/Text-Dot.html#share",
          "type": "function"
        },
        "index": {
          "description": "share is when set of nodes share specific attributes Usually used for layout tweaking",
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "share",
          "normalized": "[(String,String)]-\u003e[NodeId]-\u003eDot()",
          "package": "dotgen",
          "signature": "[(String,String)]-\u003e[NodeId]-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:share"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Dot",
          "name": "showDot",
          "package": "dotgen",
          "signature": "Dot a -\u003e String",
          "source": "src/Text-Dot.html#showDot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "showDot",
          "normalized": "Dot a-\u003eString",
          "package": "dotgen",
          "partial": "Dot",
          "signature": "Dot a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:showDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euserNode\u003c/a\u003e\u003c/code\u003e takes a NodeId, and adds some attributes to that node. \n\u003c/p\u003e",
          "module": "Text.Dot",
          "name": "userNode",
          "package": "dotgen",
          "signature": "NodeId -\u003e [(String, String)] -\u003e Dot ()",
          "source": "src/Text-Dot.html#userNode",
          "type": "function"
        },
        "index": {
          "description": "userNode takes NodeId and adds some attributes to that node",
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "userNode",
          "normalized": "NodeId-\u003e[(String,String)]-\u003eDot()",
          "package": "dotgen",
          "partial": "Node",
          "signature": "NodeId-\u003e[(String,String)]-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:userNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euserNodeId\u003c/a\u003e\u003c/code\u003e allows a user to use their own (Int-based) node id's, without needing to remap them.\n\u003c/p\u003e",
          "module": "Text.Dot",
          "name": "userNodeId",
          "package": "dotgen",
          "signature": "Int -\u003e NodeId",
          "source": "src/Text-Dot.html#userNodeId",
          "type": "function"
        },
        "index": {
          "description": "userNodeId allows user to use their own Int-based node id without needing to remap them",
          "hierarchy": "Text Dot",
          "module": "Text.Dot",
          "name": "userNodeId",
          "normalized": "Int-\u003eNodeId",
          "package": "dotgen",
          "partial": "Node Id",
          "signature": "Int-\u003eNodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dotgen/docs/Text-Dot.html#v:userNodeId"
      }
    }
  ]
]