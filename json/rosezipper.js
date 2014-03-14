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
        "word": "rosezipper"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.Zipper",
          "name": "Zipper",
          "package": "rosezipper",
          "source": "src/Data-Tree-Zipper.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "Zipper",
          "package": "rosezipper",
          "partial": "Zipper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition which does not point to a tree (e.g., it is between two trees).\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "Empty",
          "package": "rosezipper",
          "source": "src/Data-Tree-Zipper.html#Empty",
          "type": "data"
        },
        "index": {
          "description": "Position which does not point to tree e.g it is between two trees",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "Empty",
          "package": "rosezipper",
          "partial": "Empty",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#t:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition which points to a tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "Full",
          "package": "rosezipper",
          "source": "src/Data-Tree-Zipper.html#Full",
          "type": "data"
        },
        "index": {
          "description": "Position which points to tree",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "Full",
          "package": "rosezipper",
          "partial": "Full",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#t:Full"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePositions may be either \u003ccode\u003e\u003ca\u003eFull\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "PosType",
          "package": "rosezipper",
          "source": "src/Data-Tree-Zipper.html#PosType",
          "type": "class"
        },
        "index": {
          "description": "Positions may be either Full or Empty",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "PosType",
          "package": "rosezipper",
          "partial": "Pos Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#t:PosType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA position within a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e.\n The parameter \u003ccode\u003et\u003c/code\u003e inidcates if the position is pointing to\n a specific tree (if \u003ccode\u003et\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFull\u003c/a\u003e\u003c/code\u003e), or if it is pointing in-between\n trees (if \u003ccode\u003et\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "TreePos",
          "package": "rosezipper",
          "source": "src/Data-Tree-Zipper.html#TreePos",
          "type": "data"
        },
        "index": {
          "description": "position within Tree The parameter inidcates if the position is pointing to specific tree if is Full or if it is pointing in-between trees if is Empty",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "TreePos",
          "package": "rosezipper",
          "partial": "Tree Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#t:TreePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSiblings after this position, closest first.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "after",
          "package": "rosezipper",
          "signature": "TreePos t a -\u003e Forest a",
          "source": "src/Data-Tree-Zipper.html#after",
          "type": "function"
        },
        "index": {
          "description": "Siblings after this position closest first",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "after",
          "normalized": "TreePos a b-\u003eForest b",
          "package": "rosezipper",
          "signature": "TreePos t a-\u003eForest a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSiblings before this position, closest first.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "before",
          "package": "rosezipper",
          "signature": "TreePos t a -\u003e Forest a",
          "source": "src/Data-Tree-Zipper.html#before",
          "type": "function"
        },
        "index": {
          "description": "Siblings before this position closest first",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "before",
          "normalized": "TreePos a b-\u003eForest b",
          "package": "rosezipper",
          "signature": "TreePos t a-\u003eForest a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe child at the given index in the tree.\n The first child is at index 0.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "childAt",
          "package": "rosezipper",
          "signature": "Int -\u003e TreePos Full a -\u003e Maybe (TreePos Full a)",
          "source": "src/Data-Tree-Zipper.html#childAt",
          "type": "function"
        },
        "index": {
          "description": "The child at the given index in the tree The first child is at index",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "childAt",
          "normalized": "Int-\u003eTreePos Full a-\u003eMaybe(TreePos Full a)",
          "package": "rosezipper",
          "partial": "At",
          "signature": "Int-\u003eTreePos Full a-\u003eMaybe(TreePos Full a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:childAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe location at the beginning of the forest of children.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "children",
          "package": "rosezipper",
          "signature": "TreePos Full a -\u003e TreePos Empty a",
          "source": "src/Data-Tree-Zipper.html#children",
          "type": "function"
        },
        "index": {
          "description": "The location at the beginning of the forest of children",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "children",
          "normalized": "TreePos Full a-\u003eTreePos Empty a",
          "package": "rosezipper",
          "signature": "TreePos Full a-\u003eTreePos Empty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the tree at the current position.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "delete",
          "package": "rosezipper",
          "signature": "TreePos Full a -\u003e TreePos Empty a",
          "source": "src/Data-Tree-Zipper.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Remove the tree at the current position",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "delete",
          "normalized": "TreePos Full a-\u003eTreePos Empty a",
          "package": "rosezipper",
          "signature": "TreePos Full a-\u003eTreePos Empty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first space in the current forest.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "first",
          "package": "rosezipper",
          "signature": "TreePos Empty a -\u003e TreePos Empty a",
          "source": "src/Data-Tree-Zipper.html#first",
          "type": "function"
        },
        "index": {
          "description": "The first space in the current forest",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "first",
          "normalized": "TreePos Empty a-\u003eTreePos Empty a",
          "package": "rosezipper",
          "signature": "TreePos Empty a-\u003eTreePos Empty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first child of the given location.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "firstChild",
          "package": "rosezipper",
          "signature": "TreePos Full a -\u003e Maybe (TreePos Full a)",
          "source": "src/Data-Tree-Zipper.html#firstChild",
          "type": "function"
        },
        "index": {
          "description": "The first child of the given location",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "firstChild",
          "normalized": "TreePos Full a-\u003eMaybe(TreePos Full a)",
          "package": "rosezipper",
          "partial": "Child",
          "signature": "TreePos Full a-\u003eMaybe(TreePos Full a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:firstChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll trees at this location\n (i.e., the current tree---if any---and its siblings).\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "forest",
          "package": "rosezipper",
          "signature": "TreePos t a -\u003e Forest a",
          "source": "src/Data-Tree-Zipper.html#forest",
          "type": "function"
        },
        "index": {
          "description": "All trees at this location i.e the current tree---if any---and its siblings",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "forest",
          "normalized": "TreePos a b-\u003eForest b",
          "package": "rosezipper",
          "signature": "TreePos t a-\u003eForest a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:forest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe location at the beginning of the forest.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "fromForest",
          "package": "rosezipper",
          "signature": "Forest a -\u003e TreePos Empty a",
          "source": "src/Data-Tree-Zipper.html#fromForest",
          "type": "function"
        },
        "index": {
          "description": "The location at the beginning of the forest",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "fromForest",
          "normalized": "Forest a-\u003eTreePos Empty a",
          "package": "rosezipper",
          "partial": "Forest",
          "signature": "Forest a-\u003eTreePos Empty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:fromForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location corresponding to the root of the given tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "fromTree",
          "package": "rosezipper",
          "signature": "Tree a -\u003e TreePos Full a",
          "source": "src/Data-Tree-Zipper.html#fromTree",
          "type": "function"
        },
        "index": {
          "description": "location corresponding to the root of the given tree",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "fromTree",
          "normalized": "Tree a-\u003eTreePos Full a",
          "package": "rosezipper",
          "partial": "Tree",
          "signature": "Tree a-\u003eTreePos Full a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:fromTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo we have children?\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "hasChildren",
          "package": "rosezipper",
          "signature": "TreePos Full a -\u003e Bool",
          "source": "src/Data-Tree-Zipper.html#hasChildren",
          "type": "function"
        },
        "index": {
          "description": "Do we have children",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "hasChildren",
          "normalized": "TreePos Full a-\u003eBool",
          "package": "rosezipper",
          "partial": "Children",
          "signature": "TreePos Full a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:hasChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new tree at the current position.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "insert",
          "package": "rosezipper",
          "signature": "Tree a -\u003e TreePos Empty a -\u003e TreePos Full a",
          "source": "src/Data-Tree-Zipper.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert new tree at the current position",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "insert",
          "normalized": "Tree a-\u003eTreePos Empty a-\u003eTreePos Full a",
          "package": "rosezipper",
          "signature": "Tree a-\u003eTreePos Empty a-\u003eTreePos Full a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo we have a parent?\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "isContained",
          "package": "rosezipper",
          "signature": "TreePos t a -\u003e Bool",
          "source": "src/Data-Tree-Zipper.html#isContained",
          "type": "function"
        },
        "index": {
          "description": "Do we have parent",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "isContained",
          "normalized": "TreePos a b-\u003eBool",
          "package": "rosezipper",
          "partial": "Contained",
          "signature": "TreePos t a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:isContained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we the first position (of its kind) in a forest.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "isFirst",
          "package": "rosezipper",
          "signature": "TreePos t a -\u003e Bool",
          "source": "src/Data-Tree-Zipper.html#isFirst",
          "type": "function"
        },
        "index": {
          "description": "Are we the first position of its kind in forest",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "isFirst",
          "normalized": "TreePos a b-\u003eBool",
          "package": "rosezipper",
          "partial": "First",
          "signature": "TreePos t a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:isFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we the last position (of its kind) in a forest.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "isLast",
          "package": "rosezipper",
          "signature": "TreePos t a -\u003e Bool",
          "source": "src/Data-Tree-Zipper.html#isLast",
          "type": "function"
        },
        "index": {
          "description": "Are we the last position of its kind in forest",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "isLast",
          "normalized": "TreePos a b-\u003eBool",
          "package": "rosezipper",
          "partial": "Last",
          "signature": "TreePos t a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:isLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we at the bottom of the tree?\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "isLeaf",
          "package": "rosezipper",
          "signature": "TreePos Full a -\u003e Bool",
          "source": "src/Data-Tree-Zipper.html#isLeaf",
          "type": "function"
        },
        "index": {
          "description": "Are we at the bottom of the tree",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "isLeaf",
          "normalized": "TreePos Full a-\u003eBool",
          "package": "rosezipper",
          "partial": "Leaf",
          "signature": "TreePos Full a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:isLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we at the top of the tree?\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "isRoot",
          "package": "rosezipper",
          "signature": "TreePos t a -\u003e Bool",
          "source": "src/Data-Tree-Zipper.html#isRoot",
          "type": "function"
        },
        "index": {
          "description": "Are we at the top of the tree",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "isRoot",
          "normalized": "TreePos a b-\u003eBool",
          "package": "rosezipper",
          "partial": "Root",
          "signature": "TreePos t a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:isRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current label.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "label",
          "package": "rosezipper",
          "signature": "TreePos Full a -\u003e a",
          "source": "src/Data-Tree-Zipper.html#label",
          "type": "function"
        },
        "index": {
          "description": "The current label",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "label",
          "normalized": "TreePos Full a-\u003ea",
          "package": "rosezipper",
          "signature": "TreePos Full a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last space in the current forest.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "last",
          "package": "rosezipper",
          "signature": "TreePos Empty a -\u003e TreePos Empty a",
          "source": "src/Data-Tree-Zipper.html#last",
          "type": "function"
        },
        "index": {
          "description": "The last space in the current forest",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "last",
          "normalized": "TreePos Empty a-\u003eTreePos Empty a",
          "package": "rosezipper",
          "signature": "TreePos Empty a-\u003eTreePos Empty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last child of the given location.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "lastChild",
          "package": "rosezipper",
          "signature": "TreePos Full a -\u003e Maybe (TreePos Full a)",
          "source": "src/Data-Tree-Zipper.html#lastChild",
          "type": "function"
        },
        "index": {
          "description": "The last child of the given location",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "lastChild",
          "normalized": "TreePos Full a-\u003eMaybe(TreePos Full a)",
          "package": "rosezipper",
          "partial": "Child",
          "signature": "TreePos Full a-\u003eMaybe(TreePos Full a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:lastChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the label at the current node.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "modifyLabel",
          "package": "rosezipper",
          "signature": "(a -\u003e a) -\u003e TreePos Full a -\u003e TreePos Full a",
          "source": "src/Data-Tree-Zipper.html#modifyLabel",
          "type": "function"
        },
        "index": {
          "description": "Modify the label at the current node",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "modifyLabel",
          "normalized": "(a-\u003ea)-\u003eTreePos Full a-\u003eTreePos Full a",
          "package": "rosezipper",
          "partial": "Label",
          "signature": "(a-\u003ea)-\u003eTreePos Full a-\u003eTreePos Full a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:modifyLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the current tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "modifyTree",
          "package": "rosezipper",
          "signature": "(Tree a -\u003e Tree a) -\u003e TreePos Full a -\u003e TreePos Full a",
          "source": "src/Data-Tree-Zipper.html#modifyTree",
          "type": "function"
        },
        "index": {
          "description": "Modify the current tree",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "modifyTree",
          "normalized": "(Tree a-\u003eTree a)-\u003eTreePos Full a-\u003eTreePos Full a",
          "package": "rosezipper",
          "partial": "Tree",
          "signature": "(Tree a-\u003eTree a)-\u003eTreePos Full a-\u003eTreePos Full a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:modifyTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sibling after this location.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "next",
          "package": "rosezipper",
          "signature": "TreePos t a -\u003e Maybe (TreePos t a)",
          "source": "src/Data-Tree-Zipper.html#next",
          "type": "function"
        },
        "index": {
          "description": "The sibling after this location",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "next",
          "normalized": "TreePos a b-\u003eMaybe(TreePos a b)",
          "package": "rosezipper",
          "signature": "TreePos t a-\u003eMaybe(TreePos t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe space immediately after this location.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "nextSpace",
          "package": "rosezipper",
          "signature": "TreePos Full a -\u003e TreePos Empty a",
          "source": "src/Data-Tree-Zipper.html#nextSpace",
          "type": "function"
        },
        "index": {
          "description": "The space immediately after this location",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "nextSpace",
          "normalized": "TreePos Full a-\u003eTreePos Empty a",
          "package": "rosezipper",
          "partial": "Space",
          "signature": "TreePos Full a-\u003eTreePos Empty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:nextSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tree after this location, if any.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "nextTree",
          "package": "rosezipper",
          "signature": "TreePos Empty a -\u003e Maybe (TreePos Full a)",
          "source": "src/Data-Tree-Zipper.html#nextTree",
          "type": "function"
        },
        "index": {
          "description": "The tree after this location if any",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "nextTree",
          "normalized": "TreePos Empty a-\u003eMaybe(TreePos Full a)",
          "package": "rosezipper",
          "partial": "Tree",
          "signature": "TreePos Empty a-\u003eMaybe(TreePos Full a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:nextTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parent of the given location.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "parent",
          "package": "rosezipper",
          "signature": "TreePos t a -\u003e Maybe (TreePos Full a)",
          "source": "src/Data-Tree-Zipper.html#parent",
          "type": "function"
        },
        "index": {
          "description": "The parent of the given location",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "parent",
          "normalized": "TreePos a b-\u003eMaybe(TreePos Full b)",
          "package": "rosezipper",
          "signature": "TreePos t a-\u003eMaybe(TreePos Full a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe contexts of the parents for this position.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "parents",
          "package": "rosezipper",
          "signature": "TreePos t a -\u003e [(Forest a, a, Forest a)]",
          "source": "src/Data-Tree-Zipper.html#parents",
          "type": "function"
        },
        "index": {
          "description": "The contexts of the parents for this position",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "parents",
          "normalized": "TreePos a b-\u003e[(Forest b,b,Forest b)]",
          "package": "rosezipper",
          "signature": "TreePos t a-\u003e[(Forest a,a,Forest a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:parents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sibling before this location.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "prev",
          "package": "rosezipper",
          "signature": "TreePos t a -\u003e Maybe (TreePos t a)",
          "source": "src/Data-Tree-Zipper.html#prev",
          "type": "function"
        },
        "index": {
          "description": "The sibling before this location",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "prev",
          "normalized": "TreePos a b-\u003eMaybe(TreePos a b)",
          "package": "rosezipper",
          "signature": "TreePos t a-\u003eMaybe(TreePos t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe space immediately before this location.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "prevSpace",
          "package": "rosezipper",
          "signature": "TreePos Full a -\u003e TreePos Empty a",
          "source": "src/Data-Tree-Zipper.html#prevSpace",
          "type": "function"
        },
        "index": {
          "description": "The space immediately before this location",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "prevSpace",
          "normalized": "TreePos Full a-\u003eTreePos Empty a",
          "package": "rosezipper",
          "partial": "Space",
          "signature": "TreePos Full a-\u003eTreePos Empty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:prevSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tree before this location, if any.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "prevTree",
          "package": "rosezipper",
          "signature": "TreePos Empty a -\u003e Maybe (TreePos Full a)",
          "source": "src/Data-Tree-Zipper.html#prevTree",
          "type": "function"
        },
        "index": {
          "description": "The tree before this location if any",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "prevTree",
          "normalized": "TreePos Empty a-\u003eMaybe(TreePos Full a)",
          "package": "rosezipper",
          "partial": "Tree",
          "signature": "TreePos Empty a-\u003eMaybe(TreePos Full a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:prevTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe top-most parent of the given location.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "root",
          "package": "rosezipper",
          "signature": "TreePos Full a -\u003e TreePos Full a",
          "source": "src/Data-Tree-Zipper.html#root",
          "type": "function"
        },
        "index": {
          "description": "The top-most parent of the given location",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "root",
          "normalized": "TreePos Full a-\u003eTreePos Full a",
          "package": "rosezipper",
          "signature": "TreePos Full a-\u003eTreePos Full a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the label at the current node.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "setLabel",
          "package": "rosezipper",
          "signature": "a -\u003e TreePos Full a -\u003e TreePos Full a",
          "source": "src/Data-Tree-Zipper.html#setLabel",
          "type": "function"
        },
        "index": {
          "description": "Change the label at the current node",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "setLabel",
          "normalized": "a-\u003eTreePos Full a-\u003eTreePos Full a",
          "package": "rosezipper",
          "partial": "Label",
          "signature": "a-\u003eTreePos Full a-\u003eTreePos Full a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:setLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the current tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "setTree",
          "package": "rosezipper",
          "signature": "Tree a -\u003e TreePos Full a -\u003e TreePos Full a",
          "source": "src/Data-Tree-Zipper.html#setTree",
          "type": "function"
        },
        "index": {
          "description": "Change the current tree",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "setTree",
          "normalized": "Tree a-\u003eTreePos Full a-\u003eTreePos Full a",
          "package": "rosezipper",
          "partial": "Tree",
          "signature": "Tree a-\u003eTreePos Full a-\u003eTreePos Full a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:setTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty space at the given index.  The first space is at index 0.\n For indexes that are negative or too large, we return the first and last\n position in the tree, respectively.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "spaceAt",
          "package": "rosezipper",
          "signature": "Int -\u003e TreePos Empty a -\u003e TreePos Empty a",
          "source": "src/Data-Tree-Zipper.html#spaceAt",
          "type": "function"
        },
        "index": {
          "description": "The empty space at the given index The first space is at index For indexes that are negative or too large we return the first and last position in the tree respectively",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "spaceAt",
          "normalized": "Int-\u003eTreePos Empty a-\u003eTreePos Empty a",
          "package": "rosezipper",
          "partial": "At",
          "signature": "Int-\u003eTreePos Empty a-\u003eTreePos Empty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:spaceAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe forest containing this location.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "toForest",
          "package": "rosezipper",
          "signature": "TreePos t a -\u003e Forest a",
          "source": "src/Data-Tree-Zipper.html#toForest",
          "type": "function"
        },
        "index": {
          "description": "The forest containing this location",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "toForest",
          "normalized": "TreePos a b-\u003eForest b",
          "package": "rosezipper",
          "partial": "Forest",
          "signature": "TreePos t a-\u003eForest a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:toForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tree containing this location.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "toTree",
          "package": "rosezipper",
          "signature": "TreePos Full a -\u003e Tree a",
          "source": "src/Data-Tree-Zipper.html#toTree",
          "type": "function"
        },
        "index": {
          "description": "The tree containing this location",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "toTree",
          "normalized": "TreePos Full a-\u003eTree a",
          "package": "rosezipper",
          "partial": "Tree",
          "signature": "TreePos Full a-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:toTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe selected tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Zipper",
          "name": "tree",
          "package": "rosezipper",
          "signature": "TreePos Full a -\u003e Tree a",
          "source": "src/Data-Tree-Zipper.html#tree",
          "type": "function"
        },
        "index": {
          "description": "The selected tree",
          "hierarchy": "Data Tree Zipper",
          "module": "Data.Tree.Zipper",
          "name": "tree",
          "normalized": "TreePos Full a-\u003eTree a",
          "package": "rosezipper",
          "signature": "TreePos Full a-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rosezipper/docs/Data-Tree-Zipper.html#v:tree"
      }
    }
  ]
]