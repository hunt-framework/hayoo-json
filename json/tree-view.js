[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#",
      "description": {
        "fct-module": "Data.Tree.View",
        "fct-package": "tree-view",
        "fct-signature": "module",
        "fct-source": "src/Data-Tree-View.html",
        "fct-type": "module",
        "title": "View"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tree View",
        "module": "Data.Tree.View",
        "name": "View",
        "normalized": "",
        "package": "tree-view",
        "partial": "View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#t:NodeInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA tree node\n\u003c/p\u003e",
        "fct-module": "Data.Tree.View",
        "fct-package": "tree-view",
        "fct-signature": "data",
        "fct-source": "src/Data-Tree-View.html#NodeInfo",
        "fct-type": "data",
        "title": "NodeInfo"
      },
      "index": {
        "description": "tree node",
        "hierarchy": "Data Tree View",
        "module": "Data.Tree.View",
        "name": "NodeInfo",
        "normalized": "",
        "package": "tree-view",
        "partial": "Node Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:NodeInfo",
      "description": {
        "fct-module": "Data.Tree.View",
        "fct-package": "tree-view",
        "fct-signature": "NodeInfo",
        "fct-source": "src/Data-Tree-View.html#NodeInfo",
        "fct-type": "function",
        "title": "NodeInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tree View",
        "module": "Data.Tree.View",
        "name": "NodeInfo",
        "normalized": "",
        "package": "tree-view",
        "partial": "Node Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:drawTree",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e on the terminal using Unicode art\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e *Data.Tree.View\u003e drawTree $ Node \"Add\" [Node \"Sub\" [Node \"3\" [], Node \"Mul\" [Node \"1\" [], Node \"2\" []]], Node \"4\" []]\n Add\n  &#9500;&#9588;Sub\n  &#9474;  &#9500;&#9588;3\n  &#9474;  &#9492;&#9588;Mul\n  &#9474;     &#9500;&#9588;1\n  &#9474;     &#9492;&#9588;2\n  &#9492;&#9588;4\n\u003c/pre\u003e",
        "fct-module": "Data.Tree.View",
        "fct-package": "tree-view",
        "fct-signature": "Tree String -\u003e IO ()",
        "fct-source": "src/Data-Tree-View.html#drawTree",
        "fct-type": "function",
        "title": "drawTree"
      },
      "index": {
        "description": "Draw Tree on the terminal using Unicode art Example Data.Tree.View drawTree Node Add Node Sub Node Node Mul Node Node Node Add Sub Mul",
        "hierarchy": "Data Tree View",
        "module": "Data.Tree.View",
        "name": "drawTree",
        "normalized": "Tree String-\u003eIO()",
        "package": "tree-view",
        "partial": "Tree",
        "signature": "Tree String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:htmlTree",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e to HTML with foldable nodes\n\u003c/p\u003e",
        "fct-module": "Data.Tree.View",
        "fct-package": "tree-view",
        "fct-signature": "Tree NodeInfo -\u003e String",
        "fct-source": "src/Data-Tree-View.html#htmlTree",
        "fct-type": "function",
        "title": "htmlTree"
      },
      "index": {
        "description": "Convert Tree to HTML with foldable nodes",
        "hierarchy": "Data Tree View",
        "module": "Data.Tree.View",
        "name": "htmlTree",
        "normalized": "Tree NodeInfo-\u003eString",
        "package": "tree-view",
        "partial": "Tree",
        "signature": "Tree NodeInfo-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:nodeInfo",
      "description": {
        "fct-descr": "\u003cp\u003eAdditional information (to be displayed when hovering the mouse over\n   the node). This field may contain line breaks.\n\u003c/p\u003e",
        "fct-module": "Data.Tree.View",
        "fct-package": "tree-view",
        "fct-signature": "String",
        "fct-source": "src/Data-Tree-View.html#NodeInfo",
        "fct-type": "function",
        "title": "nodeInfo"
      },
      "index": {
        "description": "Additional information to be displayed when hovering the mouse over the node This field may contain line breaks",
        "hierarchy": "Data Tree View",
        "module": "Data.Tree.View",
        "name": "nodeInfo",
        "normalized": "",
        "package": "tree-view",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:nodeName",
      "description": {
        "fct-descr": "\u003cp\u003eNode name (to be displayed in the HTML tree view)\n\u003c/p\u003e",
        "fct-module": "Data.Tree.View",
        "fct-package": "tree-view",
        "fct-signature": "String",
        "fct-source": "src/Data-Tree-View.html#NodeInfo",
        "fct-type": "function",
        "title": "nodeName"
      },
      "index": {
        "description": "Node name to be displayed in the HTML tree view",
        "hierarchy": "Data Tree View",
        "module": "Data.Tree.View",
        "name": "nodeName",
        "normalized": "",
        "package": "tree-view",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:showTree",
      "description": {
        "fct-descr": "\u003cp\u003eShow a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e using Unicode art\n\u003c/p\u003e",
        "fct-module": "Data.Tree.View",
        "fct-package": "tree-view",
        "fct-signature": "Tree String -\u003e String",
        "fct-source": "src/Data-Tree-View.html#showTree",
        "fct-type": "function",
        "title": "showTree"
      },
      "index": {
        "description": "Show Tree using Unicode art",
        "hierarchy": "Data Tree View",
        "module": "Data.Tree.View",
        "name": "showTree",
        "normalized": "Tree String-\u003eString",
        "package": "tree-view",
        "partial": "Tree",
        "signature": "Tree String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tree-view/docs/Data-Tree-View.html#v:writeHtmlTree",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e to an HTML file with foldable nodes\n\u003c/p\u003e",
        "fct-module": "Data.Tree.View",
        "fct-package": "tree-view",
        "fct-signature": "FilePath -\u003e Tree NodeInfo -\u003e IO ()",
        "fct-source": "src/Data-Tree-View.html#writeHtmlTree",
        "fct-type": "function",
        "title": "writeHtmlTree"
      },
      "index": {
        "description": "Convert Tree to an HTML file with foldable nodes",
        "hierarchy": "Data Tree View",
        "module": "Data.Tree.View",
        "name": "writeHtmlTree",
        "normalized": "FilePath-\u003eTree NodeInfo-\u003eIO()",
        "package": "tree-view",
        "partial": "Html Tree",
        "signature": "FilePath-\u003eTree NodeInfo-\u003eIO()"
      }
    }
  }
]