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
        "word": "union-find-array"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Union.Class",
          "name": "Class",
          "package": "union-find-array",
          "source": "src/Control-Monad-Union-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Union Class",
          "module": "Control.Monad.Union.Class",
          "name": "Class",
          "package": "union-find-array",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Union.Class",
          "name": "MonadUnion",
          "package": "union-find-array",
          "source": "src/Control-Monad-Union-Class.html#MonadUnion",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Union Class",
          "module": "Control.Monad.Union.Class",
          "name": "MonadUnion",
          "package": "union-find-array",
          "partial": "Monad Union",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#t:MonadUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRe-label a node.\n\u003c/p\u003e",
          "module": "Control.Monad.Union.Class",
          "name": "annotate",
          "package": "union-find-array",
          "signature": "Node -\u003e l -\u003e m ()",
          "source": "src/Control-Monad-Union-Class.html#annotate",
          "type": "method"
        },
        "index": {
          "description": "Re-label node",
          "hierarchy": "Control Monad Union Class",
          "module": "Control.Monad.Union.Class",
          "name": "annotate",
          "normalized": "Node-\u003ea-\u003eb()",
          "package": "union-find-array",
          "signature": "Node-\u003el-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#v:annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten the disjoint set forest for faster lookups.\n\u003c/p\u003e",
          "module": "Control.Monad.Union.Class",
          "name": "flatten",
          "package": "union-find-array",
          "signature": "m ()",
          "source": "src/Control-Monad-Union-Class.html#flatten",
          "type": "method"
        },
        "index": {
          "description": "Flatten the disjoint set forest for faster lookups",
          "hierarchy": "Control Monad Union Class",
          "module": "Control.Monad.Union.Class",
          "name": "flatten",
          "normalized": "a()",
          "package": "union-find-array",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the node representing a given node, and its label.\n\u003c/p\u003e",
          "module": "Control.Monad.Union.Class",
          "name": "lookup",
          "package": "union-find-array",
          "signature": "Node -\u003e m (Node, l)",
          "source": "src/Control-Monad-Union-Class.html#lookup",
          "type": "method"
        },
        "index": {
          "description": "Find the node representing given node and its label",
          "hierarchy": "Control Monad Union Class",
          "module": "Control.Monad.Union.Class",
          "name": "lookup",
          "normalized": "Node-\u003ea(Node,b)",
          "package": "union-find-array",
          "signature": "Node-\u003em(Node,l)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two sets. The first argument is a function that takes the labels\n of the corresponding sets' representatives and computes a new label for\n the joined set. Returns Nothing if the given nodes are in the same set\n already.\n\u003c/p\u003e",
          "module": "Control.Monad.Union.Class",
          "name": "merge",
          "package": "union-find-array",
          "signature": "(l -\u003e l -\u003e (l, a)) -\u003e Node -\u003e Node -\u003e m (Maybe a)",
          "source": "src/Control-Monad-Union-Class.html#merge",
          "type": "method"
        },
        "index": {
          "description": "Merge two sets The first argument is function that takes the labels of the corresponding sets representatives and computes new label for the joined set Returns Nothing if the given nodes are in the same set already",
          "hierarchy": "Control Monad Union Class",
          "module": "Control.Monad.Union.Class",
          "name": "merge",
          "normalized": "(a-\u003ea-\u003e(a,b))-\u003eNode-\u003eNode-\u003ec(Maybe b)",
          "package": "union-find-array",
          "signature": "(l-\u003el-\u003e(l,a))-\u003eNode-\u003eNode-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new node, with a given label.\n\u003c/p\u003e",
          "module": "Control.Monad.Union.Class",
          "name": "new",
          "package": "union-find-array",
          "signature": "l -\u003e m Node",
          "source": "src/Control-Monad-Union-Class.html#new",
          "type": "method"
        },
        "index": {
          "description": "Add new node with given label",
          "hierarchy": "Control Monad Union Class",
          "module": "Control.Monad.Union.Class",
          "name": "new",
          "normalized": "a-\u003eb Node",
          "package": "union-find-array",
          "signature": "l-\u003em Node",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic interface for creating a disjoint set data structure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Union",
          "name": "Union",
          "package": "union-find-array",
          "source": "src/Control-Monad-Union.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic interface for creating disjoint set data structure",
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "Union",
          "package": "union-find-array",
          "partial": "Union",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Union",
          "name": "MonadUnion",
          "package": "union-find-array",
          "source": "src/Control-Monad-Union-Class.html#MonadUnion",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "MonadUnion",
          "package": "union-find-array",
          "partial": "Monad Union",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#t:MonadUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA node in a disjoint set forest.\n\u003c/p\u003e",
          "module": "Control.Monad.Union",
          "name": "Node",
          "package": "union-find-array",
          "source": "src/Data-Union-Type.html#Node",
          "type": "data"
        },
        "index": {
          "description": "node in disjoint set forest",
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "Node",
          "package": "union-find-array",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn immutable disjoint set forest.\n\u003c/p\u003e",
          "module": "Control.Monad.Union",
          "name": "Union",
          "package": "union-find-array",
          "source": "src/Data-Union-Type.html#Union",
          "type": "data"
        },
        "index": {
          "description": "An immutable disjoint set forest",
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "Union",
          "package": "union-find-array",
          "partial": "Union",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#t:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion find monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Union",
          "name": "UnionM",
          "package": "union-find-array",
          "source": "src/Control-Monad-Union.html#UnionM",
          "type": "data"
        },
        "index": {
          "description": "Union find monad",
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "UnionM",
          "package": "union-find-array",
          "partial": "Union",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#t:UnionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Union\",\"Data.Union.Type\"]",
          "name": "Union",
          "package": "union-find-array",
          "signature": "Union",
          "source": "src/Data-Union-Type.html#Union",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:Union\",\"http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:Union\"]"
        },
        "index": {
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "Union",
          "package": "union-find-array",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRe-label a node.\n\u003c/p\u003e",
          "module": "Control.Monad.Union",
          "name": "annotate",
          "package": "union-find-array",
          "signature": "Node -\u003e l -\u003e m ()",
          "source": "src/Control-Monad-Union-Class.html#annotate",
          "type": "method"
        },
        "index": {
          "description": "Re-label node",
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "annotate",
          "normalized": "Node-\u003ea-\u003eb()",
          "package": "union-find-array",
          "signature": "Node-\u003el-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten the disjoint set forest for faster lookups.\n\u003c/p\u003e",
          "module": "Control.Monad.Union",
          "name": "flatten",
          "package": "union-find-array",
          "signature": "m ()",
          "source": "src/Control-Monad-Union-Class.html#flatten",
          "type": "method"
        },
        "index": {
          "description": "Flatten the disjoint set forest for faster lookups",
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "flatten",
          "normalized": "a()",
          "package": "union-find-array",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Union\",\"Data.Union.Type\"]",
          "name": "label",
          "package": "union-find-array",
          "signature": "Array Int a",
          "source": "src/Data-Union-Type.html#Union",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:label\",\"http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:label\"]"
        },
        "index": {
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "label",
          "package": "union-find-array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the node representing a given node, and its label.\n\u003c/p\u003e",
          "module": "Control.Monad.Union",
          "name": "lookup",
          "package": "union-find-array",
          "signature": "Node -\u003e m (Node, l)",
          "source": "src/Control-Monad-Union-Class.html#lookup",
          "type": "method"
        },
        "index": {
          "description": "Find the node representing given node and its label",
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "lookup",
          "normalized": "Node-\u003ea(Node,b)",
          "package": "union-find-array",
          "signature": "Node-\u003em(Node,l)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two sets. The first argument is a function that takes the labels\n of the corresponding sets' representatives and computes a new label for\n the joined set. Returns Nothing if the given nodes are in the same set\n already.\n\u003c/p\u003e",
          "module": "Control.Monad.Union",
          "name": "merge",
          "package": "union-find-array",
          "signature": "(l -\u003e l -\u003e (l, a)) -\u003e Node -\u003e Node -\u003e m (Maybe a)",
          "source": "src/Control-Monad-Union-Class.html#merge",
          "type": "method"
        },
        "index": {
          "description": "Merge two sets The first argument is function that takes the labels of the corresponding sets representatives and computes new label for the joined set Returns Nothing if the given nodes are in the same set already",
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "merge",
          "normalized": "(a-\u003ea-\u003e(a,b))-\u003eNode-\u003eNode-\u003ec(Maybe b)",
          "package": "union-find-array",
          "signature": "(l-\u003el-\u003e(l,a))-\u003eNode-\u003eNode-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new node, with a given label.\n\u003c/p\u003e",
          "module": "Control.Monad.Union",
          "name": "new",
          "package": "union-find-array",
          "signature": "l -\u003e m Node",
          "source": "src/Control-Monad-Union-Class.html#new",
          "type": "method"
        },
        "index": {
          "description": "Add new node with given label",
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "new",
          "normalized": "a-\u003eb Node",
          "package": "union-find-array",
          "signature": "l-\u003em Node",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a union find computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Union",
          "name": "run",
          "package": "union-find-array",
          "signature": "UnionM l a -\u003e a",
          "source": "src/Control-Monad-Union.html#run",
          "type": "function"
        },
        "index": {
          "description": "Run union find computation",
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "run",
          "normalized": "UnionM a b-\u003eb",
          "package": "union-find-array",
          "signature": "UnionM l a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a union find computation; also return the final disjoint set forest\n for querying.\n\u003c/p\u003e",
          "module": "Control.Monad.Union",
          "name": "run'",
          "package": "union-find-array",
          "signature": "UnionM l a -\u003e (Union l, a)",
          "source": "src/Control-Monad-Union.html#run%27",
          "type": "function"
        },
        "index": {
          "description": "Run union find computation also return the final disjoint set forest for querying",
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "run'",
          "normalized": "UnionM a b-\u003e(Union a,b)",
          "package": "union-find-array",
          "signature": "UnionM l a-\u003e(Union l,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:run-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Union\",\"Data.Union.Type\"]",
          "name": "size",
          "package": "union-find-array",
          "signature": "Int",
          "source": "src/Data-Union-Type.html#Union",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:size\",\"http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:size\"]"
        },
        "index": {
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "size",
          "package": "union-find-array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Union\",\"Data.Union.Type\"]",
          "name": "up",
          "package": "union-find-array",
          "signature": "UArray Int Int",
          "source": "src/Data-Union-Type.html#Union",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:up\",\"http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:up\"]"
        },
        "index": {
          "hierarchy": "Control Monad Union",
          "module": "Control.Monad.Union",
          "name": "up",
          "package": "union-find-array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level interface for managing a disjoint set data structure, based on\n \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e. For a higher level convenience interface, look at\n \u003ccode\u003e\u003ca\u003eUnion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Union.ST",
          "name": "ST",
          "package": "union-find-array",
          "source": "src/Data-Union-ST.html",
          "type": "module"
        },
        "index": {
          "description": "Low-level interface for managing disjoint set data structure based on ST For higher level convenience interface look at Union",
          "hierarchy": "Data Union ST",
          "module": "Data.Union.ST",
          "name": "ST",
          "package": "union-find-array",
          "partial": "ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA disjoint set forest, with nodes numbered from 0, which can carry labels.\n\u003c/p\u003e",
          "module": "Data.Union.ST",
          "name": "UnionST",
          "package": "union-find-array",
          "source": "src/Data-Union-ST.html#UnionST",
          "type": "data"
        },
        "index": {
          "description": "disjoint set forest with nodes numbered from which can carry labels",
          "hierarchy": "Data Union ST",
          "module": "Data.Union.ST",
          "name": "UnionST",
          "package": "union-find-array",
          "partial": "Union ST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#t:UnionST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate a node with a new label.\n\u003c/p\u003e",
          "module": "Data.Union.ST",
          "name": "annotate",
          "package": "union-find-array",
          "signature": "UnionST s l -\u003e Int -\u003e l -\u003e ST s ()",
          "source": "src/Data-Union-ST.html#annotate",
          "type": "function"
        },
        "index": {
          "description": "Annotate node with new label",
          "hierarchy": "Data Union ST",
          "module": "Data.Union.ST",
          "name": "annotate",
          "normalized": "UnionST a b-\u003eInt-\u003eb-\u003eST a()",
          "package": "union-find-array",
          "signature": "UnionST s l-\u003eInt-\u003el-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a disjoint set forest.\n\u003c/p\u003e",
          "module": "Data.Union.ST",
          "name": "copy",
          "package": "union-find-array",
          "signature": "UnionST s l -\u003e ST s (UnionST s l)",
          "source": "src/Data-Union-ST.html#copy",
          "type": "function"
        },
        "index": {
          "description": "Copy disjoint set forest",
          "hierarchy": "Data Union ST",
          "module": "Data.Union.ST",
          "name": "copy",
          "normalized": "UnionST a b-\u003eST a(UnionST a b)",
          "package": "union-find-array",
          "signature": "UnionST s l-\u003eST s(UnionST s l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a disjoint set forest, for faster lookups.\n\u003c/p\u003e",
          "module": "Data.Union.ST",
          "name": "flatten",
          "package": "union-find-array",
          "signature": "UnionST s l -\u003e ST s ()",
          "source": "src/Data-Union-ST.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Flatten disjoint set forest for faster lookups",
          "hierarchy": "Data Union ST",
          "module": "Data.Union.ST",
          "name": "flatten",
          "normalized": "UnionST a b-\u003eST a()",
          "package": "union-find-array",
          "signature": "UnionST s l-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrow the capacity of a disjoint set forest. Shrinking is not possible.\n Trying to shrink a disjoint set forest will return the same forest\n unmodified.\n\u003c/p\u003e",
          "module": "Data.Union.ST",
          "name": "grow",
          "package": "union-find-array",
          "signature": "UnionST s l -\u003e Int -\u003e ST s (UnionST s l)",
          "source": "src/Data-Union-ST.html#grow",
          "type": "function"
        },
        "index": {
          "description": "Grow the capacity of disjoint set forest Shrinking is not possible Trying to shrink disjoint set forest will return the same forest unmodified",
          "hierarchy": "Data Union ST",
          "module": "Data.Union.ST",
          "name": "grow",
          "normalized": "UnionST a b-\u003eInt-\u003eST a(UnionST a b)",
          "package": "union-find-array",
          "signature": "UnionST s l-\u003eInt-\u003eST s(UnionST s l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:grow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up the representative of a given node and its label.\n\u003c/p\u003e",
          "module": "Data.Union.ST",
          "name": "lookup",
          "package": "union-find-array",
          "signature": "UnionST s l -\u003e Int -\u003e ST s (Int, l)",
          "source": "src/Data-Union-ST.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Look up the representative of given node and its label",
          "hierarchy": "Data Union ST",
          "module": "Data.Union.ST",
          "name": "lookup",
          "normalized": "UnionST a b-\u003eInt-\u003eST a(Int,b)",
          "package": "union-find-array",
          "signature": "UnionST s l-\u003eInt-\u003eST s(Int,l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two nodes if they are in distinct equivalence classes. The\n passed function is used to combine labels, if a merge happens.\n\u003c/p\u003e",
          "module": "Data.Union.ST",
          "name": "merge",
          "package": "union-find-array",
          "signature": "UnionST s l -\u003e (l -\u003e l -\u003e (l, a)) -\u003e Int -\u003e Int -\u003e ST s (Maybe a)",
          "source": "src/Data-Union-ST.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merge two nodes if they are in distinct equivalence classes The passed function is used to combine labels if merge happens",
          "hierarchy": "Data Union ST",
          "module": "Data.Union.ST",
          "name": "merge",
          "normalized": "UnionST a b-\u003e(b-\u003eb-\u003e(b,c))-\u003eInt-\u003eInt-\u003eST a(Maybe c)",
          "package": "union-find-array",
          "signature": "UnionST s l-\u003e(l-\u003el-\u003e(l,a))-\u003eInt-\u003eInt-\u003eST s(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new disjoint set forest, of given capacity.\n\u003c/p\u003e",
          "module": "Data.Union.ST",
          "name": "new",
          "package": "union-find-array",
          "signature": "Int -\u003e l -\u003e ST s (UnionST s l)",
          "source": "src/Data-Union-ST.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new disjoint set forest of given capacity",
          "hierarchy": "Data Union ST",
          "module": "Data.Union.ST",
          "name": "new",
          "normalized": "Int-\u003ea-\u003eST b(UnionST b a)",
          "package": "union-find-array",
          "signature": "Int-\u003el-\u003eST s(UnionST s l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003erunSTArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Union.ST",
          "name": "runUnionST",
          "package": "union-find-array",
          "signature": "(forall s.  ST s (UnionST s l)) -\u003e Union l",
          "source": "src/Data-Union-ST.html#runUnionST",
          "type": "function"
        },
        "index": {
          "description": "Analogous to runSTArray",
          "hierarchy": "Data Union ST",
          "module": "Data.Union.ST",
          "name": "runUnionST",
          "normalized": "(a b ST c(UnionST c d))-\u003eUnion d",
          "package": "union-find-array",
          "partial": "Union ST",
          "signature": "(forall s. ST s(UnionST s l))-\u003eUnion l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:runUnionST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Union.ST",
          "name": "size",
          "package": "union-find-array",
          "signature": "UnionST s l -\u003e Int",
          "source": "src/Data-Union-ST.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Union ST",
          "module": "Data.Union.ST",
          "name": "size",
          "normalized": "UnionST a b-\u003eInt",
          "package": "union-find-array",
          "signature": "UnionST s l-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Union.ST",
          "name": "unsafeFreeze",
          "package": "union-find-array",
          "signature": "UnionST s l -\u003e ST s (Union l)",
          "source": "src/Data-Union-ST.html#unsafeFreeze",
          "type": "function"
        },
        "index": {
          "description": "Analogous to unsafeFreeze",
          "hierarchy": "Data Union ST",
          "module": "Data.Union.ST",
          "name": "unsafeFreeze",
          "normalized": "UnionST a b-\u003eST a(Union b)",
          "package": "union-find-array",
          "partial": "Freeze",
          "signature": "UnionST s l-\u003eST s(Union l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:unsafeFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Union.Type",
          "name": "Type",
          "package": "union-find-array",
          "source": "src/Data-Union-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Union Type",
          "module": "Data.Union.Type",
          "name": "Type",
          "package": "union-find-array",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA node in a disjoint set forest.\n\u003c/p\u003e",
          "module": "Data.Union.Type",
          "name": "Node",
          "package": "union-find-array",
          "source": "src/Data-Union-Type.html#Node",
          "type": "newtype"
        },
        "index": {
          "description": "node in disjoint set forest",
          "hierarchy": "Data Union Type",
          "module": "Data.Union.Type",
          "name": "Node",
          "package": "union-find-array",
          "partial": "Node",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn immutable disjoint set forest.\n\u003c/p\u003e",
          "module": "Data.Union.Type",
          "name": "Union",
          "package": "union-find-array",
          "source": "src/Data-Union-Type.html#Union",
          "type": "data"
        },
        "index": {
          "description": "An immutable disjoint set forest",
          "hierarchy": "Data Union Type",
          "module": "Data.Union.Type",
          "name": "Union",
          "package": "union-find-array",
          "partial": "Union",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#t:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Union.Type\",\"Data.Union\"]",
          "name": "Node",
          "package": "union-find-array",
          "signature": "Node",
          "source": "src/Data-Union-Type.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:Node\",\"http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#v:Node\"]"
        },
        "index": {
          "hierarchy": "Data Union Type",
          "module": "Data.Union.Type",
          "name": "Node",
          "package": "union-find-array",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Union.Type\",\"Data.Union\"]",
          "name": "fromNode",
          "package": "union-find-array",
          "signature": "Int",
          "source": "src/Data-Union-Type.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:fromNode\",\"http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#v:fromNode\"]"
        },
        "index": {
          "hierarchy": "Data Union Type",
          "module": "Data.Union.Type",
          "name": "fromNode",
          "package": "union-find-array",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:fromNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable disjoint set forests.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Union",
          "name": "Union",
          "package": "union-find-array",
          "source": "src/Data-Union.html",
          "type": "module"
        },
        "index": {
          "description": "Immutable disjoint set forests",
          "hierarchy": "Data Union",
          "module": "Data.Union",
          "name": "Union",
          "package": "union-find-array",
          "partial": "Union",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA node in a disjoint set forest.\n\u003c/p\u003e",
          "module": "Data.Union",
          "name": "Node",
          "package": "union-find-array",
          "source": "src/Data-Union-Type.html#Node",
          "type": "newtype"
        },
        "index": {
          "description": "node in disjoint set forest",
          "hierarchy": "Data Union",
          "module": "Data.Union",
          "name": "Node",
          "package": "union-find-array",
          "partial": "Node",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn immutable disjoint set forest.\n\u003c/p\u003e",
          "module": "Data.Union",
          "name": "Union",
          "package": "union-find-array",
          "source": "src/Data-Union-Type.html#Union",
          "type": "data"
        },
        "index": {
          "description": "An immutable disjoint set forest",
          "hierarchy": "Data Union",
          "module": "Data.Union",
          "name": "Union",
          "package": "union-find-array",
          "partial": "Union",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#t:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up the representative of a node, and its label.\n\u003c/p\u003e",
          "module": "Data.Union",
          "name": "lookup",
          "package": "union-find-array",
          "signature": "Union l -\u003e Node -\u003e (Node, l)",
          "source": "src/Data-Union.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Look up the representative of node and its label",
          "hierarchy": "Data Union",
          "module": "Data.Union",
          "name": "lookup",
          "normalized": "Union a-\u003eNode-\u003e(Node,a)",
          "package": "union-find-array",
          "signature": "Union l-\u003eNode-\u003e(Node,l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e that assumes the forest to be flattened.\n (cf. \u003ccode\u003e\u003ca\u003eflatten\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eDo not use otherwise: It will give wrong results!\n\u003c/p\u003e",
          "module": "Data.Union",
          "name": "lookupFlattened",
          "package": "union-find-array",
          "signature": "Union a -\u003e Node -\u003e (Node, a)",
          "source": "src/Data-Union.html#lookupFlattened",
          "type": "function"
        },
        "index": {
          "description": "Version of lookup that assumes the forest to be flattened cf flatten Do not use otherwise It will give wrong results",
          "hierarchy": "Data Union",
          "module": "Data.Union",
          "name": "lookupFlattened",
          "normalized": "Union a-\u003eNode-\u003e(Node,a)",
          "package": "union-find-array",
          "partial": "Flattened",
          "signature": "Union a-\u003eNode-\u003e(Node,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#v:lookupFlattened"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of nodes in the forest.\n\u003c/p\u003e",
          "module": "Data.Union",
          "name": "size",
          "package": "union-find-array",
          "signature": "Union l -\u003e Int",
          "source": "src/Data-Union.html#size",
          "type": "function"
        },
        "index": {
          "description": "Get the number of nodes in the forest",
          "hierarchy": "Data Union",
          "module": "Data.Union",
          "name": "size",
          "normalized": "Union a-\u003eInt",
          "package": "union-find-array",
          "signature": "Union l-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#v:size"
      }
    }
  ]
]