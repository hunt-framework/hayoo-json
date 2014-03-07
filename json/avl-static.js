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
        "word": "avl-static"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Internal",
          "package": "avl-static",
          "source": "src/Data-Tree-AVL-Static-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Internal",
          "package": "avl-static",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAVLNode\u003c/a\u003e\u003c/code\u003e n a\u003c/code\u003e is a node whose subtree has height \u003ccode\u003en\u003c/code\u003e, and values of\n type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "AVLNode",
          "package": "avl-static",
          "source": "src/Data-Tree-AVL-Static-Internal.html#AVLNode",
          "type": "data"
        },
        "index": {
          "description": "An AVLNode is node whose subtree has height and values of type",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "AVLNode",
          "package": "avl-static",
          "partial": "AVLNode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#t:AVLNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a statically balanced tree, whose non-nil values\n have type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "AVLTree",
          "package": "avl-static",
          "source": "src/Data-Tree-AVL-Static-Internal.html#AVLTree",
          "type": "data"
        },
        "index": {
          "description": "An AVLTree is statically balanced tree whose non-nil values have type",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "AVLTree",
          "package": "avl-static",
          "partial": "AVLTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#t:AVLTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe context for an 'AVLTree'\\'s \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e.\n The idea is that it represents an entire \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e, save for a hole in it.\n A \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e means an entire \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, with a hole of height n.\n Its use is that, in a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e, we have a simple way to move around in the\n tree, starting at that hole.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ethis\u003c/a\u003e paper by Conor McBride for\n more information.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Context",
          "package": "avl-static",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Context",
          "type": "data"
        },
        "index": {
          "description": "The context for an AVLTree Zipper The idea is that it represents an entire AVLTree save for hole in it Context means an entire AVLTree with hole of height Its use is that in Zipper we have simple way to move around in the tree starting at that hole See this paper by Conor McBride for more information",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Context",
          "package": "avl-static",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA natural number datatype, hoisted to a Kind using DataKinds.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Nat",
          "package": "avl-static",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Nat",
          "type": "data"
        },
        "index": {
          "description": "natural number datatype hoisted to Kind using DataKinds",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Nat",
          "package": "avl-static",
          "partial": "Nat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e is a useful construct for functional datastructure traversals.\n For us, it can be thought of as a pointer to a subtree in an \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eFunctional Pearls: Zippers\u003c/a\u003e\n for more information.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Zipper",
          "package": "avl-static",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Zipper",
          "type": "data"
        },
        "index": {
          "description": "Zipper is useful construct for functional datastructure traversals For us it can be thought of as pointer to subtree in an AVLTree See Functional Pearls Zippers for more information",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Zipper",
          "package": "avl-static",
          "partial": "Zipper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "BC",
          "package": "avl-static",
          "signature": "Bool -\u003e a -\u003e AVLNode n a -\u003e Context (Succ n) a -\u003e Context n a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "BC",
          "normalized": "Bool-\u003ea-\u003eAVLNode b a-\u003eContext(Succ b)a-\u003eContext b a",
          "package": "avl-static",
          "partial": "BC",
          "signature": "Bool-\u003ea-\u003eAVLNode n a-\u003eContext(Succ n)a-\u003eContext n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:BC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Balanced",
          "package": "avl-static",
          "signature": "a -\u003e AVLNode n a -\u003e AVLNode n a -\u003e AVLNode (Succ n) a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#AVLNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Balanced",
          "normalized": "a-\u003eAVLNode b a-\u003eAVLNode b a-\u003eAVLNode(Succ b)a",
          "package": "avl-static",
          "partial": "Balanced",
          "signature": "a-\u003eAVLNode n a-\u003eAVLNode n a-\u003eAVLNode(Succ n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:Balanced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "LLC",
          "package": "avl-static",
          "signature": "a -\u003e AVLNode n a -\u003e Context (Succ (Succ n)) a -\u003e Context (Succ n) a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "LLC",
          "normalized": "a-\u003eAVLNode b a-\u003eContext(Succ(Succ b))a-\u003eContext(Succ b)a",
          "package": "avl-static",
          "partial": "LLC",
          "signature": "a-\u003eAVLNode n a-\u003eContext(Succ(Succ n))a-\u003eContext(Succ n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:LLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "LRC",
          "package": "avl-static",
          "signature": "a -\u003e AVLNode (Succ n) a -\u003e Context (Succ (Succ n)) a -\u003e Context n a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "LRC",
          "normalized": "a-\u003eAVLNode(Succ b)a-\u003eContext(Succ(Succ b))a-\u003eContext b a",
          "package": "avl-static",
          "partial": "LRC",
          "signature": "a-\u003eAVLNode(Succ n)a-\u003eContext(Succ(Succ n))a-\u003eContext n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:LRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Leftie",
          "package": "avl-static",
          "signature": "a -\u003e AVLNode (Succ n) a -\u003e AVLNode n a -\u003e AVLNode (Succ (Succ n)) a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#AVLNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Leftie",
          "normalized": "a-\u003eAVLNode(Succ b)a-\u003eAVLNode b a-\u003eAVLNode(Succ(Succ b))a",
          "package": "avl-static",
          "partial": "Leftie",
          "signature": "a-\u003eAVLNode(Succ n)a-\u003eAVLNode n a-\u003eAVLNode(Succ(Succ n))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:Leftie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Nil",
          "package": "avl-static",
          "signature": "AVLNode Zero a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#AVLNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Nil",
          "package": "avl-static",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "RLC",
          "package": "avl-static",
          "signature": "a -\u003e AVLNode (Succ n) a -\u003e Context (Succ (Succ n)) a -\u003e Context n a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "RLC",
          "normalized": "a-\u003eAVLNode(Succ b)a-\u003eContext(Succ(Succ b))a-\u003eContext b a",
          "package": "avl-static",
          "partial": "RLC",
          "signature": "a-\u003eAVLNode(Succ n)a-\u003eContext(Succ(Succ n))a-\u003eContext n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:RLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "RRC",
          "package": "avl-static",
          "signature": "a -\u003e AVLNode n a -\u003e Context (Succ (Succ n)) a -\u003e Context (Succ n) a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "RRC",
          "normalized": "a-\u003eAVLNode b a-\u003eContext(Succ(Succ b))a-\u003eContext(Succ b)a",
          "package": "avl-static",
          "partial": "RRC",
          "signature": "a-\u003eAVLNode n a-\u003eContext(Succ(Succ n))a-\u003eContext(Succ n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:RRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Rightie",
          "package": "avl-static",
          "signature": "a -\u003e AVLNode n a -\u003e AVLNode (Succ n) a -\u003e AVLNode (Succ (Succ n)) a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#AVLNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Rightie",
          "normalized": "a-\u003eAVLNode b a-\u003eAVLNode(Succ b)a-\u003eAVLNode(Succ(Succ b))a",
          "package": "avl-static",
          "partial": "Rightie",
          "signature": "a-\u003eAVLNode n a-\u003eAVLNode(Succ n)a-\u003eAVLNode(Succ(Succ n))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:Rightie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Root",
          "package": "avl-static",
          "signature": "Integer -\u003e Context n a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Root",
          "normalized": "Integer-\u003eContext a b",
          "package": "avl-static",
          "partial": "Root",
          "signature": "Integer-\u003eContext n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:Root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Succ",
          "package": "avl-static",
          "signature": "Succ Nat",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Nat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Succ",
          "package": "avl-static",
          "partial": "Succ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:Succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "T",
          "package": "avl-static",
          "signature": "forall n . T (AVLNode n a) Integer",
          "source": "src/Data-Tree-AVL-Static-Internal.html#AVLTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "T",
          "package": "avl-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Zero",
          "package": "avl-static",
          "signature": "Zero",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Nat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Zero",
          "package": "avl-static",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Zipper",
          "package": "avl-static",
          "signature": "forall n . Zipper (AVLNode n a) (Context n a)",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Zipper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "Zipper",
          "package": "avl-static",
          "partial": "Zipper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether we can navigate left.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "canGoLeft",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Bool",
          "source": "src/Data-Tree-AVL-Static-Internal.html#canGoLeft",
          "type": "function"
        },
        "index": {
          "description": "Returns whether we can navigate left",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "canGoLeft",
          "normalized": "Zipper a-\u003eBool",
          "package": "avl-static",
          "partial": "Go Left",
          "signature": "Zipper a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:canGoLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether we can navigate right.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "canGoRight",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Bool",
          "source": "src/Data-Tree-AVL-Static-Internal.html#canGoRight",
          "type": "function"
        },
        "index": {
          "description": "Returns whether we can navigate right",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "canGoRight",
          "normalized": "Zipper a-\u003eBool",
          "package": "avl-static",
          "partial": "Go Right",
          "signature": "Zipper a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:canGoRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether we can navigate up.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "canGoUp",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Bool",
          "source": "src/Data-Tree-AVL-Static-Internal.html#canGoUp",
          "type": "function"
        },
        "index": {
          "description": "Returns whether we can navigate up",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "canGoUp",
          "normalized": "Zipper a-\u003eBool",
          "package": "avl-static",
          "partial": "Go Up",
          "signature": "Zipper a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:canGoUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eZ\u003c/code\u003e, deletes the value at the root of the subtree pointed\n to by \u003ccode\u003eZ\u003c/code\u003e. It returns a modified \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e with this change applied.\n The removal is straight-up BST removal, folowed by an AVL rebalancing.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "deleteBST",
          "package": "avl-static",
          "signature": "Zipper a -\u003e AVLTree a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#deleteBST",
          "type": "function"
        },
        "index": {
          "description": "Given Zipper deletes the value at the root of the subtree pointed to by It returns modified AVLTree with this change applied The removal is straight-up BST removal folowed by an AVL rebalancing",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "deleteBST",
          "normalized": "Zipper a-\u003eAVLTree a",
          "package": "avl-static",
          "partial": "BST",
          "signature": "Zipper a-\u003eAVLTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:deleteBST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces a given value by another, in the \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e represented by a\n \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "fixContext",
          "package": "avl-static",
          "signature": "a -\u003e a -\u003e Context n a -\u003e Context n a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#fixContext",
          "type": "function"
        },
        "index": {
          "description": "Replaces given value by another in the AVLTree represented by Context",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "fixContext",
          "normalized": "a-\u003ea-\u003eContext b a-\u003eContext b a",
          "package": "avl-static",
          "partial": "Context",
          "signature": "a-\u003ea-\u003eContext n a-\u003eContext n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:fixContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "fmapNode",
          "package": "avl-static",
          "signature": "(a -\u003e b) -\u003e AVLNode n a -\u003e AVLNode n b",
          "source": "src/Data-Tree-AVL-Static-Internal.html#fmapNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "fmapNode",
          "normalized": "(a-\u003eb)-\u003eAVLNode c a-\u003eAVLNode c b",
          "package": "avl-static",
          "partial": "Node",
          "signature": "(a-\u003eb)-\u003eAVLNode n a-\u003eAVLNode n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:fmapNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "foldNode",
          "package": "avl-static",
          "signature": "(b -\u003e b -\u003e a -\u003e b) -\u003e b -\u003e AVLNode n a -\u003e b",
          "source": "src/Data-Tree-AVL-Static-Internal.html#foldNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "foldNode",
          "normalized": "(a-\u003ea-\u003eb-\u003ea)-\u003ea-\u003eAVLNode c b-\u003ea",
          "package": "avl-static",
          "partial": "Node",
          "signature": "(b-\u003eb-\u003ea-\u003eb)-\u003eb-\u003eAVLNode n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:foldNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an \u003ccode\u003e\u003ca\u003eAVLNode\u003c/a\u003e\u003c/code\u003e of height (n + 1) in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e with a hole of size n.\n Since this cannot be done in the usual way, rotations are used to return\n an \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e that may nothave the same height as the 'Context'\\'s tree did,\n or have the same structure, but holds the same values, and has this enlarged\n  \u003ccode\u003e\u003ca\u003eAVLNode\u003c/a\u003e\u003c/code\u003e in it.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "insertUnbalancedAt",
          "package": "avl-static",
          "signature": "AVLNode (Succ n) a -\u003e Context n a -\u003e AVLTree a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#insertUnbalancedAt",
          "type": "function"
        },
        "index": {
          "description": "Insert an AVLNode of height in Context with hole of size Since this cannot be done in the usual way rotations are used to return an AVLTree that may nothave the same height as the Context tree did or have the same structure but holds the same values and has this enlarged AVLNode in it",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "insertUnbalancedAt",
          "normalized": "AVLNode(Succ a)b-\u003eContext a b-\u003eAVLTree b",
          "package": "avl-static",
          "partial": "Unbalanced At",
          "signature": "AVLNode(Succ n)a-\u003eContext n a-\u003eAVLTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:insertUnbalancedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the pointed to subtree is a leaf.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "isLeaf",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Bool",
          "source": "src/Data-Tree-AVL-Static-Internal.html#isLeaf",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the pointed to subtree is leaf",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "isLeaf",
          "normalized": "Zipper a-\u003eBool",
          "package": "avl-static",
          "partial": "Leaf",
          "signature": "Zipper a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:isLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the pointed to subtree is a left child of its parent.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "isLeft",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Bool",
          "source": "src/Data-Tree-AVL-Static-Internal.html#isLeft",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the pointed to subtree is left child of its parent",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "isLeft",
          "normalized": "Zipper a-\u003eBool",
          "package": "avl-static",
          "partial": "Left",
          "signature": "Zipper a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the pointed to subtree is a right child of its parent.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "isRight",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Bool",
          "source": "src/Data-Tree-AVL-Static-Internal.html#isRight",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the pointed to subtree is right child of its parent",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "isRight",
          "normalized": "Zipper a-\u003eBool",
          "package": "avl-static",
          "partial": "Right",
          "signature": "Zipper a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:isRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigates left in a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "left",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Zipper a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#left",
          "type": "function"
        },
        "index": {
          "description": "Navigates left in Zipper",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "left",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "avl-static",
          "signature": "Zipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eAVLNode\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, and a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e with a hole of size \u003ccode\u003e(n + 1)\u003c/code\u003e,\n returns an \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003eAVLNode\u003c/a\u003e\u003c/code\u003e being placed in that \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n Since this cannot be done normally, it uses rotations to return an \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e\n that has the same elements as the \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e\u003ca\u003eAVLNode\u003c/a\u003e\u003c/code\u003e together,\n but may have a different structure than the tree the \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e represented.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "rebalance",
          "package": "avl-static",
          "signature": "AVLNode n a -\u003e Context (Succ n) a -\u003e AVLTree a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#rebalance",
          "type": "function"
        },
        "index": {
          "description": "Given an AVLNode and Context with hole of size returns an AVLTree with the AVLNode being placed in that Context Since this cannot be done normally it uses rotations to return an AVLTree that has the same elements as the Context and the AVLNode together but may have different structure than the tree the Context represented",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "rebalance",
          "normalized": "AVLNode a b-\u003eContext(Succ a)b-\u003eAVLTree b",
          "package": "avl-static",
          "signature": "AVLNode n a-\u003eContext(Succ n)a-\u003eAVLTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:rebalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigates right in a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "right",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Zipper a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#right",
          "type": "function"
        },
        "index": {
          "description": "Navigates right in Zipper",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "right",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "avl-static",
          "signature": "Zipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "traverseNode",
          "package": "avl-static",
          "signature": "(a -\u003e f b) -\u003e AVLNode n a -\u003e f (AVLNode n b)",
          "source": "src/Data-Tree-AVL-Static-Internal.html#traverseNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "traverseNode",
          "normalized": "(a-\u003eb c)-\u003eAVLNode d a-\u003eb(AVLNode d c)",
          "package": "avl-static",
          "partial": "Node",
          "signature": "(a-\u003ef b)-\u003eAVLNode n a-\u003ef(AVLNode n b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:traverseNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to the root of the given tree.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "unZip",
          "package": "avl-static",
          "signature": "AVLTree a -\u003e Zipper a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#unZip",
          "type": "function"
        },
        "index": {
          "description": "Constructs Zipper to the root of the given tree",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "unZip",
          "normalized": "AVLTree a-\u003eZipper a",
          "package": "avl-static",
          "partial": "Zip",
          "signature": "AVLTree a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:unZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigates up in a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "up",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Zipper a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#up",
          "type": "function"
        },
        "index": {
          "description": "Navigates up in Zipper",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "up",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "avl-static",
          "signature": "Zipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the value at the root of the subtree pointed by that \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Tree.AVL.Static.Internal\",\"Data.Tree.AVL.Static\"]",
          "name": "value",
          "package": "avl-static",
          "signature": "Zipper a -\u003e a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:value\",\"http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#v:value\"]"
        },
        "index": {
          "description": "Gets the value at the root of the subtree pointed by that Zipper",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "value",
          "normalized": "Zipper a-\u003ea",
          "package": "avl-static",
          "signature": "Zipper a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescends (never ascends) to a subtree whose root has a given value.\n If no such subtree exists, points to a \u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e where the value would be found,\n  were it to exist.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipTo",
          "package": "avl-static",
          "signature": "a -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#zipTo",
          "type": "function"
        },
        "index": {
          "description": "Descends never ascends to subtree whose root has given value If no such subtree exists points to Nil where the value would be found were it to exist",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipTo",
          "normalized": "a-\u003eZipper a-\u003eZipper a",
          "package": "avl-static",
          "partial": "To",
          "signature": "a-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:zipTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eZ\u003c/code\u003e, which points to a subtree \u003ccode\u003eS\u003c/code\u003e, returns a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to\n the first ancestor of \u003ccode\u003eS\u003c/code\u003e which is a left child of its parent. If such an\n ancestor does not exist, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipToFirstLeftChild",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Tree-AVL-Static-Internal.html#zipToFirstLeftChild",
          "type": "function"
        },
        "index": {
          "description": "Given Zipper which points to subtree returns Zipper to the first ancestor of which is left child of its parent If such an ancestor does not exist returns Nothing",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipToFirstLeftChild",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "avl-static",
          "partial": "To First Left Child",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:zipToFirstLeftChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eZ\u003c/code\u003e, which points to a subtree \u003ccode\u003eS\u003c/code\u003e, returns a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to\n the first ancestor of \u003ccode\u003eS\u003c/code\u003e which is a right child of its parent. If such an\n ancestor does not exist, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipToFirstRightChild",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Tree-AVL-Static-Internal.html#zipToFirstRightChild",
          "type": "function"
        },
        "index": {
          "description": "Given Zipper which points to subtree returns Zipper to the first ancestor of which is right child of its parent If such an ancestor does not exist returns Nothing",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipToFirstRightChild",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "avl-static",
          "partial": "To First Right Child",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:zipToFirstRightChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to a node \u003ccode\u003eX\u003c/code\u003e in the tree, returns a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to the\n greatest node in the subtree rooted at \u003ccode\u003eX\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipToGreatest",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Zipper a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#zipToGreatest",
          "type": "function"
        },
        "index": {
          "description": "Given Zipper to node in the tree returns Zipper to the greatest node in the subtree rooted at",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipToGreatest",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "avl-static",
          "partial": "To Greatest",
          "signature": "Zipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:zipToGreatest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to a node in the tree, returns a Zipper to the predecessor\n of this node. If no such predecessor exists, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipToPredecessor",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Tree-AVL-Static-Internal.html#zipToPredecessor",
          "type": "function"
        },
        "index": {
          "description": "Given Zipper to node in the tree returns Zipper to the predecessor of this node If no such predecessor exists returns Nothing",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipToPredecessor",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "avl-static",
          "partial": "To Predecessor",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:zipToPredecessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to a node \u003ccode\u003eX\u003c/code\u003e in the tree, returns a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to the\n smallest node in the subtree rooted at \u003ccode\u003eX\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipToSmallest",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Zipper a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#zipToSmallest",
          "type": "function"
        },
        "index": {
          "description": "Given Zipper to node in the tree returns Zipper to the smallest node in the subtree rooted at",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipToSmallest",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "avl-static",
          "partial": "To Smallest",
          "signature": "Zipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:zipToSmallest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to a node in the tree, returns a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to the successor\n of this node. If no such successor exists, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipToSuccessor",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Tree-AVL-Static-Internal.html#zipToSuccessor",
          "type": "function"
        },
        "index": {
          "description": "Given Zipper to node in the tree returns Zipper to the successor of this node If no such successor exists returns Nothing",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipToSuccessor",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "avl-static",
          "partial": "To Successor",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:zipToSuccessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a function that manipulates the tree size (number of nodes), and a\n \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e, constructs an \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e with the new height, by \u003ca\u003ezipping up\u003c/a\u003e to\n the root of the tree pointed to by the \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipUp",
          "package": "avl-static",
          "signature": "(Integer -\u003e Integer) -\u003e Zipper a -\u003e AVLTree a",
          "source": "src/Data-Tree-AVL-Static-Internal.html#zipUp",
          "type": "function"
        },
        "index": {
          "description": "Given function that manipulates the tree size number of nodes and Zipper constructs an AVLTree with the new height by zipping up to the root of the tree pointed to by the Zipper",
          "hierarchy": "Data Tree AVL Static Internal",
          "module": "Data.Tree.AVL.Static.Internal",
          "name": "zipUp",
          "normalized": "(Integer-\u003eInteger)-\u003eZipper a-\u003eAVLTree a",
          "package": "avl-static",
          "partial": "Up",
          "signature": "(Integer-\u003eInteger)-\u003eZipper a-\u003eAVLTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static-Internal.html#v:zipUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL.Static",
          "name": "Static",
          "package": "avl-static",
          "source": "src/Data-Tree-AVL-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tree AVL Static",
          "module": "Data.Tree.AVL.Static",
          "name": "Static",
          "package": "avl-static",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a statically balanced tree, whose non-nil values\n have type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static",
          "name": "AVLTree",
          "package": "avl-static",
          "source": "src/Data-Tree-AVL-Static-Internal.html#AVLTree",
          "type": "data"
        },
        "index": {
          "description": "An AVLTree is statically balanced tree whose non-nil values have type",
          "hierarchy": "Data Tree AVL Static",
          "module": "Data.Tree.AVL.Static",
          "name": "AVLTree",
          "package": "avl-static",
          "partial": "AVLTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#t:AVLTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e is a useful construct for functional datastructure traversals.\n For us, it can be thought of as a pointer to a subtree in an \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eFunctional Pearls: Zippers\u003c/a\u003e\n for more information.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static",
          "name": "Zipper",
          "package": "avl-static",
          "source": "src/Data-Tree-AVL-Static-Internal.html#Zipper",
          "type": "data"
        },
        "index": {
          "description": "Zipper is useful construct for functional datastructure traversals For us it can be thought of as pointer to subtree in an AVLTree See Functional Pearls Zippers for more information",
          "hierarchy": "Data Tree AVL Static",
          "module": "Data.Tree.AVL.Static",
          "name": "Zipper",
          "package": "avl-static",
          "partial": "Zipper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to the smallest element in the tree, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n tree is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static",
          "name": "begin",
          "package": "avl-static",
          "signature": "AVLTree a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Tree-AVL-Static.html#begin",
          "type": "function"
        },
        "index": {
          "description": "Returns Zipper to the smallest element in the tree or Nothing if the tree is empty log",
          "hierarchy": "Data Tree AVL Static",
          "module": "Data.Tree.AVL.Static",
          "name": "begin",
          "normalized": "AVLTree a-\u003eMaybe(Zipper a)",
          "package": "avl-static",
          "signature": "AVLTree a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#v:begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes a value from an \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e. If the value does not exist in the tree,\n does nothing.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static",
          "name": "delete",
          "package": "avl-static",
          "signature": "a -\u003e AVLTree a -\u003e AVLTree a",
          "source": "src/Data-Tree-AVL-Static.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Deletes value from an AVLTree If the value does not exist in the tree does nothing log",
          "hierarchy": "Data Tree AVL Static",
          "module": "Data.Tree.AVL.Static",
          "name": "delete",
          "normalized": "a-\u003eAVLTree a-\u003eAVLTree a",
          "package": "avl-static",
          "signature": "a-\u003eAVLTree a-\u003eAVLTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static",
          "name": "empty",
          "package": "avl-static",
          "signature": "AVLTree a",
          "source": "src/Data-Tree-AVL-Static.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty AVLTree",
          "hierarchy": "Data Tree AVL Static",
          "module": "Data.Tree.AVL.Static",
          "name": "empty",
          "package": "avl-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to the greatest element in the tree, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n tree is empty.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static",
          "name": "end",
          "package": "avl-static",
          "signature": "AVLTree a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Tree-AVL-Static.html#end",
          "type": "function"
        },
        "index": {
          "description": "Returns Zipper to the greatest element in the tree or Nothing if the tree is empty log",
          "hierarchy": "Data Tree AVL Static",
          "module": "Data.Tree.AVL.Static",
          "name": "end",
          "normalized": "AVLTree a-\u003eMaybe(Zipper a)",
          "package": "avl-static",
          "signature": "AVLTree a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a value into an \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e.\n If the value already exists, does nothing.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static",
          "name": "insert",
          "package": "avl-static",
          "signature": "a -\u003e AVLTree a -\u003e AVLTree a",
          "source": "src/Data-Tree-AVL-Static.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert value into an AVLTree If the value already exists does nothing log",
          "hierarchy": "Data Tree AVL Static",
          "module": "Data.Tree.AVL.Static",
          "name": "insert",
          "normalized": "a-\u003eAVLTree a-\u003eAVLTree a",
          "package": "avl-static",
          "signature": "a-\u003eAVLTree a-\u003eAVLTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to the predecessor of a value in a tree. If the input\n \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e points to the smallest element in the tree, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static",
          "name": "predecessor",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Tree-AVL-Static.html#predecessor",
          "type": "function"
        },
        "index": {
          "description": "Returns Zipper to the predecessor of value in tree If the input Zipper points to the smallest element in the tree returns Nothing log",
          "hierarchy": "Data Tree AVL Static",
          "module": "Data.Tree.AVL.Static",
          "name": "predecessor",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "avl-static",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#v:predecessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for a node with a given value. Returns a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e pointing to\n a subtree whose root has that value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the value is not\n in the tree.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static",
          "name": "search",
          "package": "avl-static",
          "signature": "a -\u003e AVLTree a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Tree-AVL-Static.html#search",
          "type": "function"
        },
        "index": {
          "description": "Search for node with given value Returns Zipper pointing to subtree whose root has that value or Nothing if the value is not in the tree log",
          "hierarchy": "Data Tree AVL Static",
          "module": "Data.Tree.AVL.Static",
          "name": "search",
          "normalized": "a-\u003eAVLTree a-\u003eMaybe(Zipper a)",
          "package": "avl-static",
          "signature": "a-\u003eAVLTree a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of nodes of an \u003ccode\u003e\u003ca\u003eAVLTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static",
          "name": "size",
          "package": "avl-static",
          "signature": "AVLTree a -\u003e Integer",
          "source": "src/Data-Tree-AVL-Static.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of nodes of an AVLTree",
          "hierarchy": "Data Tree AVL Static",
          "module": "Data.Tree.AVL.Static",
          "name": "size",
          "normalized": "AVLTree a-\u003eInteger",
          "package": "avl-static",
          "signature": "AVLTree a-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to the successor of a value in a tree. If the input\n \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e points to the greatest element in the tree, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL.Static",
          "name": "successor",
          "package": "avl-static",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Tree-AVL-Static.html#successor",
          "type": "function"
        },
        "index": {
          "description": "Returns Zipper to the successor of value in tree If the input Zipper points to the greatest element in the tree returns Nothing log",
          "hierarchy": "Data Tree AVL Static",
          "module": "Data.Tree.AVL.Static",
          "name": "successor",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "avl-static",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/avl-static/docs/Data-Tree-AVL-Static.html#v:successor"
      }
    }
  ]
]