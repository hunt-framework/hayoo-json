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
        "word": "pktree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of the PKTree spatial index data structure\n\u003c/p\u003e\u003cp\u003eThe reccomended way to import this module is:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.PKTree as PKTree\n pkInsert = insert K [rx,ry,..]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.PKTree",
          "name": "PKTree",
          "package": "pktree",
          "source": "src/Data-PKTree.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of the PKTree spatial index data structure The reccomended way to import this module is import qualified Data.PKTree as PKTree pkInsert insert rx ry",
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "PKTree",
          "package": "pktree",
          "partial": "PKTree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInner nodes have rectangles, leaves are points and data\n\u003c/p\u003e",
          "module": "Data.PKTree",
          "name": "Node",
          "package": "pktree",
          "source": "src/Data-PKTree.html#Node",
          "type": "data"
        },
        "index": {
          "description": "Inner nodes have rectangles leaves are points and data",
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "Node",
          "package": "pktree",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PKTree\n\u003c/p\u003e",
          "module": "Data.PKTree",
          "name": "PKTree",
          "package": "pktree",
          "source": "src/Data-PKTree.html#PKTree",
          "type": "type"
        },
        "index": {
          "description": "PKTree",
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "PKTree",
          "package": "pktree",
          "partial": "PKTree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#t:PKTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn n-dimensional point\n\u003c/p\u003e",
          "module": "Data.PKTree",
          "name": "Point",
          "package": "pktree",
          "source": "src/Data-PKTree.html#Point",
          "type": "type"
        },
        "index": {
          "description": "An n-dimensional point",
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "Point",
          "package": "pktree",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn n-dimensional hyperrectangle\n\u003c/p\u003e",
          "module": "Data.PKTree",
          "name": "Rectangle",
          "package": "pktree",
          "source": "src/Data-PKTree.html#Rectangle",
          "type": "type"
        },
        "index": {
          "description": "An n-dimensional hyperrectangle",
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "Rectangle",
          "package": "pktree",
          "partial": "Rectangle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#t:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PKTree",
          "name": "Inner",
          "package": "pktree",
          "signature": "Inner Rectangle",
          "source": "src/Data-PKTree.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "Inner",
          "package": "pktree",
          "partial": "Inner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#v:Inner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PKTree",
          "name": "Leaf",
          "package": "pktree",
          "signature": "Leaf Point a",
          "source": "src/Data-PKTree.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "Leaf",
          "package": "pktree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContruct a tree with no children\n\u003c/p\u003e",
          "module": "Data.PKTree",
          "name": "cell",
          "package": "pktree",
          "signature": "Rectangle -\u003e PKTree a",
          "source": "src/Data-PKTree.html#cell",
          "type": "function"
        },
        "index": {
          "description": "Contruct tree with no children",
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "cell",
          "normalized": "Rectangle-\u003ePKTree a",
          "package": "pktree",
          "signature": "Rectangle-\u003ePKTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#v:cell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for points in some hypercube\n\u003c/p\u003e",
          "module": "Data.PKTree",
          "name": "cubeSearch",
          "package": "pktree",
          "signature": "Rectangle-\u003e Bool-\u003e PKTree a-\u003e [(Point, a)]",
          "type": "function"
        },
        "index": {
          "description": "Search for points in some hypercube",
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "cubeSearch",
          "normalized": "Rectangle-\u003eBool-\u003ePKTree a-\u003e[(Point,a)]",
          "package": "pktree",
          "partial": "Search",
          "signature": "Rectangle-\u003eBool-\u003ePKTree a-\u003e[(Point,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#v:cubeSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a point into a PKTree\n\u003c/p\u003e",
          "module": "Data.PKTree",
          "name": "insert",
          "package": "pktree",
          "signature": "Int-\u003e [Int]-\u003e PKTree a-\u003e Point-\u003e a-\u003e PKTree a",
          "type": "function"
        },
        "index": {
          "description": "Insert point into PKTree",
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "insert",
          "normalized": "Int-\u003e[Int]-\u003ePKTree a-\u003ePoint-\u003ea-\u003ePKTree a",
          "package": "pktree",
          "signature": "Int-\u003e[Int]-\u003ePKTree a-\u003ePoint-\u003ea-\u003ePKTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a leaf node representing a point\n\u003c/p\u003e",
          "module": "Data.PKTree",
          "name": "pointCell",
          "package": "pktree",
          "signature": "Point -\u003e a -\u003e PKTree a",
          "source": "src/Data-PKTree.html#pointCell",
          "type": "function"
        },
        "index": {
          "description": "Construct leaf node representing point",
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "pointCell",
          "normalized": "Point-\u003ea-\u003ePKTree a",
          "package": "pktree",
          "partial": "Cell",
          "signature": "Point-\u003ea-\u003ePKTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#v:pointCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for points in some hypercircle\n\u003c/p\u003e",
          "module": "Data.PKTree",
          "name": "radiusSearch",
          "package": "pktree",
          "signature": "Point-\u003e Float-\u003e PKTree a-\u003e [(Point, a)]",
          "type": "function"
        },
        "index": {
          "description": "Search for points in some hypercircle",
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "radiusSearch",
          "normalized": "Point-\u003eFloat-\u003ePKTree a-\u003e[(Point,a)]",
          "package": "pktree",
          "partial": "Search",
          "signature": "Point-\u003eFloat-\u003ePKTree a-\u003e[(Point,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#v:radiusSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the rectangle from a node\n\u003c/p\u003e",
          "module": "Data.PKTree",
          "name": "rect",
          "package": "pktree",
          "signature": "PKTree a -\u003e Rectangle",
          "source": "src/Data-PKTree.html#rect",
          "type": "function"
        },
        "index": {
          "description": "Extract the rectangle from node",
          "hierarchy": "Data PKTree",
          "module": "Data.PKTree",
          "name": "rect",
          "normalized": "PKTree a-\u003eRectangle",
          "package": "pktree",
          "signature": "PKTree a-\u003eRectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pktree/docs/Data-PKTree.html#v:rect"
      }
    }
  ]
]