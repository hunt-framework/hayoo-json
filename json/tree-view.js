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
        "word": "tree-view"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.View",
          "name": "View",
          "package": "tree-view",
          "source": "src/Data-Tree-View.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tree View",
          "module": "Data.Tree.View",
          "name": "View",
          "package": "tree-view",
          "partial": "View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tree node\n\u003c/p\u003e",
          "module": "Data.Tree.View",
          "name": "NodeInfo",
          "package": "tree-view",
          "source": "src/Data-Tree-View.html#NodeInfo",
          "type": "data"
        },
        "index": {
          "description": "tree node",
          "hierarchy": "Data Tree View",
          "module": "Data.Tree.View",
          "name": "NodeInfo",
          "package": "tree-view",
          "partial": "Node Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#t:NodeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.View",
          "name": "NodeInfo",
          "package": "tree-view",
          "signature": "NodeInfo",
          "source": "src/Data-Tree-View.html#NodeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree View",
          "module": "Data.Tree.View",
          "name": "NodeInfo",
          "package": "tree-view",
          "partial": "Node Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:NodeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e on the terminal using Unicode art\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e *Data.Tree.View\u003e drawTree $ Node \"Add\" [Node \"Sub\" [Node \"3\" [], Node \"Mul\" [Node \"1\" [], Node \"2\" []]], Node \"4\" []]\n Add\n  &#9500;&#9588;Sub\n  &#9474;  &#9500;&#9588;3\n  &#9474;  &#9492;&#9588;Mul\n  &#9474;     &#9500;&#9588;1\n  &#9474;     &#9492;&#9588;2\n  &#9492;&#9588;4\n\u003c/pre\u003e",
          "module": "Data.Tree.View",
          "name": "drawTree",
          "package": "tree-view",
          "signature": "Tree String -\u003e IO ()",
          "source": "src/Data-Tree-View.html#drawTree",
          "type": "function"
        },
        "index": {
          "description": "Draw Tree on the terminal using Unicode art Example Data.Tree.View drawTree Node Add Node Sub Node Node Mul Node Node Node Add Sub Mul",
          "hierarchy": "Data Tree View",
          "module": "Data.Tree.View",
          "name": "drawTree",
          "normalized": "Tree String-\u003eIO()",
          "package": "tree-view",
          "partial": "Tree",
          "signature": "Tree String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:drawTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e to HTML with foldable nodes\n\u003c/p\u003e",
          "module": "Data.Tree.View",
          "name": "htmlTree",
          "package": "tree-view",
          "signature": "Tree NodeInfo -\u003e String",
          "source": "src/Data-Tree-View.html#htmlTree",
          "type": "function"
        },
        "index": {
          "description": "Convert Tree to HTML with foldable nodes",
          "hierarchy": "Data Tree View",
          "module": "Data.Tree.View",
          "name": "htmlTree",
          "normalized": "Tree NodeInfo-\u003eString",
          "package": "tree-view",
          "partial": "Tree",
          "signature": "Tree NodeInfo-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:htmlTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional information (to be displayed when hovering the mouse over\n   the node). This field may contain line breaks.\n\u003c/p\u003e",
          "module": "Data.Tree.View",
          "name": "nodeInfo",
          "package": "tree-view",
          "signature": "String",
          "source": "src/Data-Tree-View.html#NodeInfo",
          "type": "function"
        },
        "index": {
          "description": "Additional information to be displayed when hovering the mouse over the node This field may contain line breaks",
          "hierarchy": "Data Tree View",
          "module": "Data.Tree.View",
          "name": "nodeInfo",
          "package": "tree-view",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:nodeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode name (to be displayed in the HTML tree view)\n\u003c/p\u003e",
          "module": "Data.Tree.View",
          "name": "nodeName",
          "package": "tree-view",
          "signature": "String",
          "source": "src/Data-Tree-View.html#NodeInfo",
          "type": "function"
        },
        "index": {
          "description": "Node name to be displayed in the HTML tree view",
          "hierarchy": "Data Tree View",
          "module": "Data.Tree.View",
          "name": "nodeName",
          "package": "tree-view",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:nodeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e using Unicode art\n\u003c/p\u003e",
          "module": "Data.Tree.View",
          "name": "showTree",
          "package": "tree-view",
          "signature": "Tree String -\u003e String",
          "source": "src/Data-Tree-View.html#showTree",
          "type": "function"
        },
        "index": {
          "description": "Show Tree using Unicode art",
          "hierarchy": "Data Tree View",
          "module": "Data.Tree.View",
          "name": "showTree",
          "normalized": "Tree String-\u003eString",
          "package": "tree-view",
          "partial": "Tree",
          "signature": "Tree String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:showTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e to an HTML file with foldable nodes\n\u003c/p\u003e",
          "module": "Data.Tree.View",
          "name": "writeHtmlTree",
          "package": "tree-view",
          "signature": "FilePath -\u003e Tree NodeInfo -\u003e IO ()",
          "source": "src/Data-Tree-View.html#writeHtmlTree",
          "type": "function"
        },
        "index": {
          "description": "Convert Tree to an HTML file with foldable nodes",
          "hierarchy": "Data Tree View",
          "module": "Data.Tree.View",
          "name": "writeHtmlTree",
          "normalized": "FilePath-\u003eTree NodeInfo-\u003eIO()",
          "package": "tree-view",
          "partial": "Html Tree",
          "signature": "FilePath-\u003eTree NodeInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:writeHtmlTree"
      }
    }
  ]
]