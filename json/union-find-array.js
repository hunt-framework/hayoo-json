[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#",
      "description": {
        "fct-module": "Control.Monad.Union.Class",
        "fct-package": "union-find-array",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Union-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Union Class",
        "module": "Control.Monad.Union.Class",
        "name": "Class",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#t:MonadUnion",
      "description": {
        "fct-module": "Control.Monad.Union.Class",
        "fct-package": "union-find-array",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Union-Class.html#MonadUnion",
        "fct-type": "class",
        "title": "MonadUnion"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Union Class",
        "module": "Control.Monad.Union.Class",
        "name": "MonadUnion",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Monad Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#v:annotate",
      "description": {
        "fct-descr": "\u003cp\u003eRe-label a node.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union.Class",
        "fct-package": "union-find-array",
        "fct-signature": "Node -\u003e l -\u003e m ()",
        "fct-source": "src/Control-Monad-Union-Class.html#annotate",
        "fct-type": "method",
        "title": "annotate"
      },
      "index": {
        "description": "Re-label node",
        "hierarchy": "Control Monad Union Class",
        "module": "Control.Monad.Union.Class",
        "name": "annotate",
        "normalized": "Node-\u003ea-\u003eb()",
        "package": "union-find-array",
        "partial": "",
        "signature": "Node-\u003el-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#v:flatten",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten the disjoint set forest for faster lookups.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union.Class",
        "fct-package": "union-find-array",
        "fct-signature": "m ()",
        "fct-source": "src/Control-Monad-Union-Class.html#flatten",
        "fct-type": "method",
        "title": "flatten"
      },
      "index": {
        "description": "Flatten the disjoint set forest for faster lookups",
        "hierarchy": "Control Monad Union Class",
        "module": "Control.Monad.Union.Class",
        "name": "flatten",
        "normalized": "a()",
        "package": "union-find-array",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eFind the node representing a given node, and its label.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union.Class",
        "fct-package": "union-find-array",
        "fct-signature": "Node -\u003e m (Node, l)",
        "fct-source": "src/Control-Monad-Union-Class.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "Find the node representing given node and its label",
        "hierarchy": "Control Monad Union Class",
        "module": "Control.Monad.Union.Class",
        "name": "lookup",
        "normalized": "Node-\u003ea(Node,b)",
        "package": "union-find-array",
        "partial": "",
        "signature": "Node-\u003em(Node,l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two sets. The first argument is a function that takes the labels\n of the corresponding sets' representatives and computes a new label for\n the joined set. Returns Nothing if the given nodes are in the same set\n already.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union.Class",
        "fct-package": "union-find-array",
        "fct-signature": "(l -\u003e l -\u003e (l, a)) -\u003e Node -\u003e Node -\u003e m (Maybe a)",
        "fct-source": "src/Control-Monad-Union-Class.html#merge",
        "fct-type": "method",
        "title": "merge"
      },
      "index": {
        "description": "Merge two sets The first argument is function that takes the labels of the corresponding sets representatives and computes new label for the joined set Returns Nothing if the given nodes are in the same set already",
        "hierarchy": "Control Monad Union Class",
        "module": "Control.Monad.Union.Class",
        "name": "merge",
        "normalized": "(a-\u003ea-\u003e(a,b))-\u003eNode-\u003eNode-\u003ec(Maybe b)",
        "package": "union-find-array",
        "partial": "",
        "signature": "(l-\u003el-\u003e(l,a))-\u003eNode-\u003eNode-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union-Class.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a new node, with a given label.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union.Class",
        "fct-package": "union-find-array",
        "fct-signature": "l -\u003e m Node",
        "fct-source": "src/Control-Monad-Union-Class.html#new",
        "fct-type": "method",
        "title": "new"
      },
      "index": {
        "description": "Add new node with given label",
        "hierarchy": "Control Monad Union Class",
        "module": "Control.Monad.Union.Class",
        "name": "new",
        "normalized": "a-\u003eb Node",
        "package": "union-find-array",
        "partial": "",
        "signature": "l-\u003em Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic interface for creating a disjoint set data structure.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Union.html",
        "fct-type": "module",
        "title": "Union"
      },
      "index": {
        "description": "Monadic interface for creating disjoint set data structure",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "Union",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#t:MonadUnion",
      "description": {
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Union-Class.html#MonadUnion",
        "fct-type": "class",
        "title": "MonadUnion"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "MonadUnion",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Monad Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eA node in a disjoint set forest.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "data",
        "fct-source": "src/Data-Union-Type.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "node in disjoint set forest",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "Node",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#t:Union",
      "description": {
        "fct-descr": "\u003cp\u003eAn immutable disjoint set forest.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "data",
        "fct-source": "src/Data-Union-Type.html#Union",
        "fct-type": "data",
        "title": "Union"
      },
      "index": {
        "description": "An immutable disjoint set forest",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "Union",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#t:UnionM",
      "description": {
        "fct-descr": "\u003cp\u003eUnion find monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Union.html#UnionM",
        "fct-type": "data",
        "title": "UnionM"
      },
      "index": {
        "description": "Union find monad",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "UnionM",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:Union",
      "description": {
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "Union",
        "fct-source": "src/Data-Union-Type.html#Union",
        "fct-type": "function",
        "title": "Union"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "Union",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:annotate",
      "description": {
        "fct-descr": "\u003cp\u003eRe-label a node.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "Node -\u003e l -\u003e m ()",
        "fct-source": "src/Control-Monad-Union-Class.html#annotate",
        "fct-type": "method",
        "title": "annotate"
      },
      "index": {
        "description": "Re-label node",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "annotate",
        "normalized": "Node-\u003ea-\u003eb()",
        "package": "union-find-array",
        "partial": "",
        "signature": "Node-\u003el-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:flatten",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten the disjoint set forest for faster lookups.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "m ()",
        "fct-source": "src/Control-Monad-Union-Class.html#flatten",
        "fct-type": "method",
        "title": "flatten"
      },
      "index": {
        "description": "Flatten the disjoint set forest for faster lookups",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "flatten",
        "normalized": "a()",
        "package": "union-find-array",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:label",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "Array Int a",
        "fct-source": "src/Data-Union-Type.html#Union",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "label",
        "normalized": "",
        "package": "union-find-array",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eFind the node representing a given node, and its label.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "Node -\u003e m (Node, l)",
        "fct-source": "src/Control-Monad-Union-Class.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "Find the node representing given node and its label",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "lookup",
        "normalized": "Node-\u003ea(Node,b)",
        "package": "union-find-array",
        "partial": "",
        "signature": "Node-\u003em(Node,l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two sets. The first argument is a function that takes the labels\n of the corresponding sets' representatives and computes a new label for\n the joined set. Returns Nothing if the given nodes are in the same set\n already.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "(l -\u003e l -\u003e (l, a)) -\u003e Node -\u003e Node -\u003e m (Maybe a)",
        "fct-source": "src/Control-Monad-Union-Class.html#merge",
        "fct-type": "method",
        "title": "merge"
      },
      "index": {
        "description": "Merge two sets The first argument is function that takes the labels of the corresponding sets representatives and computes new label for the joined set Returns Nothing if the given nodes are in the same set already",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "merge",
        "normalized": "(a-\u003ea-\u003e(a,b))-\u003eNode-\u003eNode-\u003ec(Maybe b)",
        "package": "union-find-array",
        "partial": "",
        "signature": "(l-\u003el-\u003e(l,a))-\u003eNode-\u003eNode-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a new node, with a given label.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "l -\u003e m Node",
        "fct-source": "src/Control-Monad-Union-Class.html#new",
        "fct-type": "method",
        "title": "new"
      },
      "index": {
        "description": "Add new node with given label",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "new",
        "normalized": "a-\u003eb Node",
        "package": "union-find-array",
        "partial": "",
        "signature": "l-\u003em Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRun a union find computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "UnionM l a -\u003e a",
        "fct-source": "src/Control-Monad-Union.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Run union find computation",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "run",
        "normalized": "UnionM a b-\u003eb",
        "package": "union-find-array",
        "partial": "",
        "signature": "UnionM l a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:run-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRun a union find computation; also return the final disjoint set forest\n for querying.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "UnionM l a -\u003e (Union l, a)",
        "fct-source": "src/Control-Monad-Union.html#run%27",
        "fct-type": "function",
        "title": "run'"
      },
      "index": {
        "description": "Run union find computation also return the final disjoint set forest for querying",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "run'",
        "normalized": "UnionM a b-\u003e(Union a,b)",
        "package": "union-find-array",
        "partial": "",
        "signature": "UnionM l a-\u003e(Union l,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:size",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "!Int",
        "fct-source": "src/Data-Union-Type.html#Union",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "size",
        "normalized": "",
        "package": "union-find-array",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Control-Monad-Union.html#v:up",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Union",
        "fct-package": "union-find-array",
        "fct-signature": "UArray Int Int",
        "fct-source": "src/Data-Union-Type.html#Union",
        "fct-type": "function",
        "title": "up"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Union",
        "module": "Control.Monad.Union",
        "name": "up",
        "normalized": "",
        "package": "union-find-array",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level interface for managing a disjoint set data structure, based on\n \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e. For a higher level convenience interface, look at\n \u003ccode\u003e\u003ca\u003eUnion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Union.ST",
        "fct-package": "union-find-array",
        "fct-signature": "module",
        "fct-source": "src/Data-Union-ST.html",
        "fct-type": "module",
        "title": "ST"
      },
      "index": {
        "description": "Low-level interface for managing disjoint set data structure based on ST For higher level convenience interface look at Union",
        "hierarchy": "Data Union ST",
        "module": "Data.Union.ST",
        "name": "ST",
        "normalized": "",
        "package": "union-find-array",
        "partial": "ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#t:UnionST",
      "description": {
        "fct-descr": "\u003cp\u003eA disjoint set forest, with nodes numbered from 0, which can carry labels.\n\u003c/p\u003e",
        "fct-module": "Data.Union.ST",
        "fct-package": "union-find-array",
        "fct-signature": "data",
        "fct-source": "src/Data-Union-ST.html#UnionST",
        "fct-type": "data",
        "title": "UnionST"
      },
      "index": {
        "description": "disjoint set forest with nodes numbered from which can carry labels",
        "hierarchy": "Data Union ST",
        "module": "Data.Union.ST",
        "name": "UnionST",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Union ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:annotate",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate a node with a new label.\n\u003c/p\u003e",
        "fct-module": "Data.Union.ST",
        "fct-package": "union-find-array",
        "fct-signature": "UnionST s l -\u003e Int -\u003e l -\u003e ST s ()",
        "fct-source": "src/Data-Union-ST.html#annotate",
        "fct-type": "function",
        "title": "annotate"
      },
      "index": {
        "description": "Annotate node with new label",
        "hierarchy": "Data Union ST",
        "module": "Data.Union.ST",
        "name": "annotate",
        "normalized": "UnionST a b-\u003eInt-\u003eb-\u003eST a()",
        "package": "union-find-array",
        "partial": "",
        "signature": "UnionST s l-\u003eInt-\u003el-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a disjoint set forest.\n\u003c/p\u003e",
        "fct-module": "Data.Union.ST",
        "fct-package": "union-find-array",
        "fct-signature": "UnionST s l -\u003e ST s (UnionST s l)",
        "fct-source": "src/Data-Union-ST.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Copy disjoint set forest",
        "hierarchy": "Data Union ST",
        "module": "Data.Union.ST",
        "name": "copy",
        "normalized": "UnionST a b-\u003eST a(UnionST a b)",
        "package": "union-find-array",
        "partial": "",
        "signature": "UnionST s l-\u003eST s(UnionST s l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:flatten",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten a disjoint set forest, for faster lookups.\n\u003c/p\u003e",
        "fct-module": "Data.Union.ST",
        "fct-package": "union-find-array",
        "fct-signature": "UnionST s l -\u003e ST s ()",
        "fct-source": "src/Data-Union-ST.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "Flatten disjoint set forest for faster lookups",
        "hierarchy": "Data Union ST",
        "module": "Data.Union.ST",
        "name": "flatten",
        "normalized": "UnionST a b-\u003eST a()",
        "package": "union-find-array",
        "partial": "",
        "signature": "UnionST s l-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:grow",
      "description": {
        "fct-descr": "\u003cp\u003eGrow the capacity of a disjoint set forest. Shrinking is not possible.\n Trying to shrink a disjoint set forest will return the same forest\n unmodified.\n\u003c/p\u003e",
        "fct-module": "Data.Union.ST",
        "fct-package": "union-find-array",
        "fct-signature": "UnionST s l -\u003e Int -\u003e ST s (UnionST s l)",
        "fct-source": "src/Data-Union-ST.html#grow",
        "fct-type": "function",
        "title": "grow"
      },
      "index": {
        "description": "Grow the capacity of disjoint set forest Shrinking is not possible Trying to shrink disjoint set forest will return the same forest unmodified",
        "hierarchy": "Data Union ST",
        "module": "Data.Union.ST",
        "name": "grow",
        "normalized": "UnionST a b-\u003eInt-\u003eST a(UnionST a b)",
        "package": "union-find-array",
        "partial": "",
        "signature": "UnionST s l-\u003eInt-\u003eST s(UnionST s l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLook up the representative of a given node and its label.\n\u003c/p\u003e",
        "fct-module": "Data.Union.ST",
        "fct-package": "union-find-array",
        "fct-signature": "UnionST s l -\u003e Int -\u003e ST s (Int, l)",
        "fct-source": "src/Data-Union-ST.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Look up the representative of given node and its label",
        "hierarchy": "Data Union ST",
        "module": "Data.Union.ST",
        "name": "lookup",
        "normalized": "UnionST a b-\u003eInt-\u003eST a(Int,b)",
        "package": "union-find-array",
        "partial": "",
        "signature": "UnionST s l-\u003eInt-\u003eST s(Int,l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two nodes if they are in distinct equivalence classes. The\n passed function is used to combine labels, if a merge happens.\n\u003c/p\u003e",
        "fct-module": "Data.Union.ST",
        "fct-package": "union-find-array",
        "fct-signature": "UnionST s l -\u003e (l -\u003e l -\u003e (l, a)) -\u003e Int -\u003e Int -\u003e ST s (Maybe a)",
        "fct-source": "src/Data-Union-ST.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "Merge two nodes if they are in distinct equivalence classes The passed function is used to combine labels if merge happens",
        "hierarchy": "Data Union ST",
        "module": "Data.Union.ST",
        "name": "merge",
        "normalized": "UnionST a b-\u003e(b-\u003eb-\u003e(b,c))-\u003eInt-\u003eInt-\u003eST a(Maybe c)",
        "package": "union-find-array",
        "partial": "",
        "signature": "UnionST s l-\u003e(l-\u003el-\u003e(l,a))-\u003eInt-\u003eInt-\u003eST s(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new disjoint set forest, of given capacity.\n\u003c/p\u003e",
        "fct-module": "Data.Union.ST",
        "fct-package": "union-find-array",
        "fct-signature": "Int -\u003e l -\u003e ST s (UnionST s l)",
        "fct-source": "src/Data-Union-ST.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new disjoint set forest of given capacity",
        "hierarchy": "Data Union ST",
        "module": "Data.Union.ST",
        "name": "new",
        "normalized": "Int-\u003ea-\u003eST b(UnionST b a)",
        "package": "union-find-array",
        "partial": "",
        "signature": "Int-\u003el-\u003eST s(UnionST s l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:runUnionST",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003erunSTArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Union.ST",
        "fct-package": "union-find-array",
        "fct-signature": "(forall s.  ST s (UnionST s l)) -\u003e Union l",
        "fct-source": "src/Data-Union-ST.html#runUnionST",
        "fct-type": "function",
        "title": "runUnionST"
      },
      "index": {
        "description": "Analogous to runSTArray",
        "hierarchy": "Data Union ST",
        "module": "Data.Union.ST",
        "name": "runUnionST",
        "normalized": "(a b ST c(UnionST c d))-\u003eUnion d",
        "package": "union-find-array",
        "partial": "Union ST",
        "signature": "(forall s. ST s(UnionST s l))-\u003eUnion l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:size",
      "description": {
        "fct-module": "Data.Union.ST",
        "fct-package": "union-find-array",
        "fct-signature": "UnionST s l -\u003e Int",
        "fct-source": "src/Data-Union-ST.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Union ST",
        "module": "Data.Union.ST",
        "name": "size",
        "normalized": "UnionST a b-\u003eInt",
        "package": "union-find-array",
        "partial": "",
        "signature": "UnionST s l-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-ST.html#v:unsafeFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Union.ST",
        "fct-package": "union-find-array",
        "fct-signature": "UnionST s l -\u003e ST s (Union l)",
        "fct-source": "src/Data-Union-ST.html#unsafeFreeze",
        "fct-type": "function",
        "title": "unsafeFreeze"
      },
      "index": {
        "description": "Analogous to unsafeFreeze",
        "hierarchy": "Data Union ST",
        "module": "Data.Union.ST",
        "name": "unsafeFreeze",
        "normalized": "UnionST a b-\u003eST a(Union b)",
        "package": "union-find-array",
        "partial": "Freeze",
        "signature": "UnionST s l-\u003eST s(Union l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#",
      "description": {
        "fct-module": "Data.Union.Type",
        "fct-package": "union-find-array",
        "fct-signature": "module",
        "fct-source": "src/Data-Union-Type.html",
        "fct-type": "module",
        "title": "Type"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Union Type",
        "module": "Data.Union.Type",
        "name": "Type",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eA node in a disjoint set forest.\n\u003c/p\u003e",
        "fct-module": "Data.Union.Type",
        "fct-package": "union-find-array",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Union-Type.html#Node",
        "fct-type": "newtype",
        "title": "Node"
      },
      "index": {
        "description": "node in disjoint set forest",
        "hierarchy": "Data Union Type",
        "module": "Data.Union.Type",
        "name": "Node",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#t:Union",
      "description": {
        "fct-descr": "\u003cp\u003eAn immutable disjoint set forest.\n\u003c/p\u003e",
        "fct-module": "Data.Union.Type",
        "fct-package": "union-find-array",
        "fct-signature": "data",
        "fct-source": "src/Data-Union-Type.html#Union",
        "fct-type": "data",
        "title": "Union"
      },
      "index": {
        "description": "An immutable disjoint set forest",
        "hierarchy": "Data Union Type",
        "module": "Data.Union.Type",
        "name": "Union",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:Node",
      "description": {
        "fct-module": "Data.Union.Type",
        "fct-package": "union-find-array",
        "fct-signature": "Node",
        "fct-source": "src/Data-Union-Type.html#Node",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Union Type",
        "module": "Data.Union.Type",
        "name": "Node",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:Union",
      "description": {
        "fct-module": "Data.Union.Type",
        "fct-package": "union-find-array",
        "fct-signature": "Union",
        "fct-source": "src/Data-Union-Type.html#Union",
        "fct-type": "function",
        "title": "Union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Union Type",
        "module": "Data.Union.Type",
        "name": "Union",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:fromNode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Union.Type",
        "fct-package": "union-find-array",
        "fct-signature": "Int",
        "fct-source": "src/Data-Union-Type.html#Node",
        "fct-type": "function",
        "title": "fromNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Union Type",
        "module": "Data.Union.Type",
        "name": "fromNode",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:label",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Union.Type",
        "fct-package": "union-find-array",
        "fct-signature": "Array Int a",
        "fct-source": "src/Data-Union-Type.html#Union",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Union Type",
        "module": "Data.Union.Type",
        "name": "label",
        "normalized": "",
        "package": "union-find-array",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:size",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Union.Type",
        "fct-package": "union-find-array",
        "fct-signature": "!Int",
        "fct-source": "src/Data-Union-Type.html#Union",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Union Type",
        "module": "Data.Union.Type",
        "name": "size",
        "normalized": "",
        "package": "union-find-array",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union-Type.html#v:up",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Union.Type",
        "fct-package": "union-find-array",
        "fct-signature": "UArray Int Int",
        "fct-source": "src/Data-Union-Type.html#Union",
        "fct-type": "function",
        "title": "up"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Union Type",
        "module": "Data.Union.Type",
        "name": "up",
        "normalized": "",
        "package": "union-find-array",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable disjoint set forests.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Union",
        "fct-package": "union-find-array",
        "fct-signature": "module",
        "fct-source": "src/Data-Union.html",
        "fct-type": "module",
        "title": "Union"
      },
      "index": {
        "description": "Immutable disjoint set forests",
        "hierarchy": "Data Union",
        "module": "Data.Union",
        "name": "Union",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eA node in a disjoint set forest.\n\u003c/p\u003e",
        "fct-module": "Data.Union",
        "fct-package": "union-find-array",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Union-Type.html#Node",
        "fct-type": "newtype",
        "title": "Node"
      },
      "index": {
        "description": "node in disjoint set forest",
        "hierarchy": "Data Union",
        "module": "Data.Union",
        "name": "Node",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#t:Union",
      "description": {
        "fct-descr": "\u003cp\u003eAn immutable disjoint set forest.\n\u003c/p\u003e",
        "fct-module": "Data.Union",
        "fct-package": "union-find-array",
        "fct-signature": "data",
        "fct-source": "src/Data-Union-Type.html#Union",
        "fct-type": "data",
        "title": "Union"
      },
      "index": {
        "description": "An immutable disjoint set forest",
        "hierarchy": "Data Union",
        "module": "Data.Union",
        "name": "Union",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#v:Node",
      "description": {
        "fct-module": "Data.Union",
        "fct-package": "union-find-array",
        "fct-signature": "Node",
        "fct-source": "src/Data-Union-Type.html#Node",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Union",
        "module": "Data.Union",
        "name": "Node",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#v:fromNode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Union",
        "fct-package": "union-find-array",
        "fct-signature": "Int",
        "fct-source": "src/Data-Union-Type.html#Node",
        "fct-type": "function",
        "title": "fromNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Union",
        "module": "Data.Union",
        "name": "fromNode",
        "normalized": "",
        "package": "union-find-array",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLook up the representative of a node, and its label.\n\u003c/p\u003e",
        "fct-module": "Data.Union",
        "fct-package": "union-find-array",
        "fct-signature": "Union l -\u003e Node -\u003e (Node, l)",
        "fct-source": "src/Data-Union.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Look up the representative of node and its label",
        "hierarchy": "Data Union",
        "module": "Data.Union",
        "name": "lookup",
        "normalized": "Union a-\u003eNode-\u003e(Node,a)",
        "package": "union-find-array",
        "partial": "",
        "signature": "Union l-\u003eNode-\u003e(Node,l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#v:lookupFlattened",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e that assumes the forest to be flattened.\n (cf. \u003ccode\u003e\u003ca\u003eflatten\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eDo not use otherwise: It will give wrong results!\n\u003c/p\u003e",
        "fct-module": "Data.Union",
        "fct-package": "union-find-array",
        "fct-signature": "Union a -\u003e Node -\u003e (Node, a)",
        "fct-source": "src/Data-Union.html#lookupFlattened",
        "fct-type": "function",
        "title": "lookupFlattened"
      },
      "index": {
        "description": "Version of lookup that assumes the forest to be flattened cf flatten Do not use otherwise It will give wrong results",
        "hierarchy": "Data Union",
        "module": "Data.Union",
        "name": "lookupFlattened",
        "normalized": "Union a-\u003eNode-\u003e(Node,a)",
        "package": "union-find-array",
        "partial": "Flattened",
        "signature": "Union a-\u003eNode-\u003e(Node,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find-array/docs/Data-Union.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of nodes in the forest.\n\u003c/p\u003e",
        "fct-module": "Data.Union",
        "fct-package": "union-find-array",
        "fct-signature": "Union l -\u003e Int",
        "fct-source": "src/Data-Union.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Get the number of nodes in the forest",
        "hierarchy": "Data Union",
        "module": "Data.Union",
        "name": "size",
        "normalized": "Union a-\u003eInt",
        "package": "union-find-array",
        "partial": "",
        "signature": "Union l-\u003eInt"
      }
    }
  }
]