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
        "word": "fgl-visualize"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFGL To Dot is an automatic translation and labeling\n    of FGL graphs (see the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e class) to graphviz\n    Dot format that can be written out to a file and\n    displayed.\n\u003c/p\u003e\u003cpre\u003e\n    let dot = showDot (fglToDot graph)\n    writeFile \"file.dot\" dot\n    system(\"dot -Tpng -ofile.png file.dot\")\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Dot",
          "name": "Dot",
          "package": "fgl-visualize",
          "source": "src/Data-Graph-Inductive-Dot.html",
          "type": "module"
        },
        "index": {
          "description": "FGL To Dot is an automatic translation and labeling of FGL graphs see the Graph class to graphviz Dot format that can be written out to file and displayed let dot showDot fglToDot graph writeFile file.dot dot system dot Tpng ofile.png file.dot",
          "hierarchy": "Data Graph Inductive Dot",
          "module": "Data.Graph.Inductive.Dot",
          "name": "Dot",
          "package": "fgl-visualize",
          "partial": "Dot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl-visualize/docs/Data-Graph-Inductive-Dot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a Dot graph using the show instances of the node and edge labels as displayed graph labels\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Dot",
          "name": "fglToDot",
          "package": "fgl-visualize",
          "signature": "gr a b -\u003e Dot ()",
          "source": "src/Data-Graph-Inductive-Dot.html#fglToDot",
          "type": "function"
        },
        "index": {
          "description": "Generate Dot graph using the show instances of the node and edge labels as displayed graph labels",
          "hierarchy": "Data Graph Inductive Dot",
          "module": "Data.Graph.Inductive.Dot",
          "name": "fglToDot",
          "normalized": "a b c-\u003eDot()",
          "package": "fgl-visualize",
          "partial": "To Dot",
          "signature": "gr a b-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl-visualize/docs/Data-Graph-Inductive-Dot.html#v:fglToDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a Dot graph using the provided functions to mutate the node labels, edge labels and list of attributes.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Dot",
          "name": "fglToDotGeneric",
          "package": "fgl-visualize",
          "signature": "gr a b -\u003e (a -\u003e String) -\u003e (b -\u003e String) -\u003e ([(String, String)] -\u003e [(String, String)]) -\u003e Dot ()",
          "source": "src/Data-Graph-Inductive-Dot.html#fglToDotGeneric",
          "type": "function"
        },
        "index": {
          "description": "Generate Dot graph using the provided functions to mutate the node labels edge labels and list of attributes",
          "hierarchy": "Data Graph Inductive Dot",
          "module": "Data.Graph.Inductive.Dot",
          "name": "fglToDotGeneric",
          "normalized": "a b c-\u003e(b-\u003eString)-\u003e(c-\u003eString)-\u003e([(String,String)]-\u003e[(String,String)])-\u003eDot()",
          "package": "fgl-visualize",
          "partial": "To Dot Generic",
          "signature": "gr a b-\u003e(a-\u003eString)-\u003e(b-\u003eString)-\u003e([(String,String)]-\u003e[(String,String)])-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl-visualize/docs/Data-Graph-Inductive-Dot.html#v:fglToDotGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a Dot graph using the Node and Edge strings as labels\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Dot",
          "name": "fglToDotString",
          "package": "fgl-visualize",
          "signature": "gr String String -\u003e Dot ()",
          "source": "src/Data-Graph-Inductive-Dot.html#fglToDotString",
          "type": "function"
        },
        "index": {
          "description": "Generate Dot graph using the Node and Edge strings as labels",
          "hierarchy": "Data Graph Inductive Dot",
          "module": "Data.Graph.Inductive.Dot",
          "name": "fglToDotString",
          "normalized": "a String String-\u003eDot()",
          "package": "fgl-visualize",
          "partial": "To Dot String",
          "signature": "gr String String-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl-visualize/docs/Data-Graph-Inductive-Dot.html#v:fglToDotString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a Dot graph without any edge or node labels\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Dot",
          "name": "fglToDotUnlabeled",
          "package": "fgl-visualize",
          "signature": "gr a b -\u003e Dot ()",
          "source": "src/Data-Graph-Inductive-Dot.html#fglToDotUnlabeled",
          "type": "function"
        },
        "index": {
          "description": "Generate Dot graph without any edge or node labels",
          "hierarchy": "Data Graph Inductive Dot",
          "module": "Data.Graph.Inductive.Dot",
          "name": "fglToDotUnlabeled",
          "normalized": "a b c-\u003eDot()",
          "package": "fgl-visualize",
          "partial": "To Dot Unlabeled",
          "signature": "gr a b-\u003eDot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl-visualize/docs/Data-Graph-Inductive-Dot.html#v:fglToDotUnlabeled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Dot",
          "name": "showDot",
          "package": "fgl-visualize",
          "signature": "Dot a -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Dot",
          "module": "Data.Graph.Inductive.Dot",
          "name": "showDot",
          "normalized": "Dot a-\u003eString",
          "package": "fgl-visualize",
          "partial": "Dot",
          "signature": "Dot a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl-visualize/docs/Data-Graph-Inductive-Dot.html#v:showDot"
      }
    }
  ]
]