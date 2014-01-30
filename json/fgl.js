[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic Graph Algorithms\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "Basic Graph Algorithms",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "fgl",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:efilter",
      "description": {
        "fct-descr": "\u003cp\u003eFilter based on edge property.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "(LEdge b -\u003e Bool) -\u003e gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Basic.html#efilter",
        "fct-type": "function",
        "title": "efilter"
      },
      "index": {
        "description": "Filter based on edge property",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "efilter",
        "normalized": "(LEdge a-\u003eBool)-\u003eb c a-\u003eb c a",
        "package": "fgl",
        "partial": "",
        "signature": "(LEdge b-\u003eBool)-\u003egr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:elfilter",
      "description": {
        "fct-descr": "\u003cp\u003eFilter based on edge label property.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "(b -\u003e Bool) -\u003e gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Basic.html#elfilter",
        "fct-type": "function",
        "title": "elfilter"
      },
      "index": {
        "description": "Filter based on edge label property",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "elfilter",
        "normalized": "(a-\u003eBool)-\u003eb c a-\u003eb c a",
        "package": "fgl",
        "partial": "",
        "signature": "(b-\u003eBool)-\u003egr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:gfold",
      "description": {
        "fct-descr": "\u003cp\u003eDirected graph fold.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "(Context a b -\u003e [Node])-\u003e (Context a b -\u003e c -\u003e d)-\u003e (Maybe d -\u003e c -\u003e c, c)-\u003e [Node]-\u003e gr a b-\u003e c",
        "fct-type": "function",
        "title": "gfold"
      },
      "index": {
        "description": "Directed graph fold",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "gfold",
        "normalized": "(Context a b-\u003e[Node])-\u003e(Context a b-\u003ec-\u003ed)-\u003e(Maybe d-\u003ec-\u003ec,c)-\u003e[Node]-\u003ee a b-\u003ec",
        "package": "fgl",
        "partial": "",
        "signature": "(Context a b-\u003e[Node])-\u003e(Context a b-\u003ec-\u003ed)-\u003e(Maybe d-\u003ec-\u003ec,c)-\u003e[Node]-\u003egr a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:grev",
      "description": {
        "fct-descr": "\u003cp\u003eReverse the direction of all edges.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Basic.html#grev",
        "fct-type": "function",
        "title": "grev"
      },
      "index": {
        "description": "Reverse the direction of all edges",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "grev",
        "normalized": "a b c-\u003ea b c",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:gsel",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003es for which the given function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "(Context a b -\u003e Bool) -\u003e gr a b -\u003e [Context a b]",
        "fct-source": "src/Data-Graph-Inductive-Basic.html#gsel",
        "fct-type": "function",
        "title": "gsel"
      },
      "index": {
        "description": "Return all Context for which the given function returns True",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "gsel",
        "normalized": "(Context a b-\u003eBool)-\u003ec a b-\u003e[Context a b]",
        "package": "fgl",
        "partial": "",
        "signature": "(Context a b-\u003eBool)-\u003egr a b-\u003e[Context a b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:hasLoop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the graph has any edges of the form (A, A).\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Bool",
        "fct-source": "src/Data-Graph-Inductive-Basic.html#hasLoop",
        "fct-type": "function",
        "title": "hasLoop"
      },
      "index": {
        "description": "True if the graph has any edges of the form",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "hasLoop",
        "normalized": "a b c-\u003eBool",
        "package": "fgl",
        "partial": "Loop",
        "signature": "gr a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:isSimple",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003ehasLoop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Bool",
        "fct-source": "src/Data-Graph-Inductive-Basic.html#isSimple",
        "fct-type": "function",
        "title": "isSimple"
      },
      "index": {
        "description": "The inverse of hasLoop",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "isSimple",
        "normalized": "a b c-\u003eBool",
        "package": "fgl",
        "partial": "Simple",
        "signature": "gr a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:postorder",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e, returning the elements in post-order.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "Tree a -\u003e [a]",
        "fct-source": "src/Data-Graph-Inductive-Basic.html#postorder",
        "fct-type": "function",
        "title": "postorder"
      },
      "index": {
        "description": "Flatten Tree returning the elements in post-order",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "postorder",
        "normalized": "Tree a-\u003e[a]",
        "package": "fgl",
        "partial": "",
        "signature": "Tree a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:postorderF",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten multiple \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003es in post-order.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "[Tree a] -\u003e [a]",
        "fct-source": "src/Data-Graph-Inductive-Basic.html#postorderF",
        "fct-type": "function",
        "title": "postorderF"
      },
      "index": {
        "description": "Flatten multiple Tree in post-order",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "postorderF",
        "normalized": "[Tree a]-\u003e[a]",
        "package": "fgl",
        "partial": "",
        "signature": "[Tree a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:preorder",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e, returning the elements in pre-order.  Equivalent to\n\u003ccode\u003e\u003ca\u003eflatten\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eData.Tree\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "Tree a -\u003e [a]",
        "fct-source": "src/Data-Graph-Inductive-Basic.html#preorder",
        "fct-type": "function",
        "title": "preorder"
      },
      "index": {
        "description": "Flatten Tree returning the elements in pre-order Equivalent to flatten in Data.Tree",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "preorder",
        "normalized": "Tree a-\u003e[a]",
        "package": "fgl",
        "partial": "",
        "signature": "Tree a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:preorderF",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten multiple \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003es in pre-order.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "[Tree a] -\u003e [a]",
        "fct-source": "src/Data-Graph-Inductive-Basic.html#preorderF",
        "fct-type": "function",
        "title": "preorderF"
      },
      "index": {
        "description": "Flatten multiple Tree in pre-order",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "preorderF",
        "normalized": "[Tree a]-\u003e[a]",
        "package": "fgl",
        "partial": "",
        "signature": "[Tree a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:undir",
      "description": {
        "fct-descr": "\u003cp\u003eMake the graph undirected, i.e. for every edge from A to B, there\n exists an edge from B to A.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Basic.html#undir",
        "fct-type": "function",
        "title": "undir"
      },
      "index": {
        "description": "Make the graph undirected i.e for every edge from to there exists an edge from to",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "undir",
        "normalized": "a b c-\u003ea b c",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:unlab",
      "description": {
        "fct-descr": "\u003cp\u003eRemove all labels.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Basic",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e gr () ()",
        "fct-source": "src/Data-Graph-Inductive-Basic.html#unlab",
        "fct-type": "function",
        "title": "unlab"
      },
      "index": {
        "description": "Remove all labels",
        "hierarchy": "Data Graph Inductive Basic",
        "module": "Data.Graph.Inductive.Basic",
        "name": "unlab",
        "normalized": "a b c-\u003ea()()",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003egr()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample Graphs\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Example.html",
        "fct-type": "module",
        "title": "Example"
      },
      "index": {
        "description": "Example Graphs",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "Example",
        "normalized": "",
        "package": "fgl",
        "partial": "Example",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:a",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a",
        "fct-type": "function",
        "title": "a"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "a",
        "normalized": "Gr Char()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr Char()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:a-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Char ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a%27",
        "fct-type": "function",
        "title": "a'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "a'",
        "normalized": "IO(SGr Char())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr Char())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:ab",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a",
        "fct-type": "function",
        "title": "ab"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "ab",
        "normalized": "Gr Char()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr Char()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:ab-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Char ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a%27",
        "fct-type": "function",
        "title": "ab'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "ab'",
        "normalized": "IO(SGr Char())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr Char())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:abb",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a",
        "fct-type": "function",
        "title": "abb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "abb",
        "normalized": "Gr Char()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr Char()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:abb-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Char ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a%27",
        "fct-type": "function",
        "title": "abb'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "abb'",
        "normalized": "IO(SGr Char())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr Char())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:b",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a",
        "fct-type": "function",
        "title": "b"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "b",
        "normalized": "Gr Char()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr Char()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:b-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Char ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a%27",
        "fct-type": "function",
        "title": "b'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "b'",
        "normalized": "IO(SGr Char())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr Char())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:c",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a",
        "fct-type": "function",
        "title": "c"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "c",
        "normalized": "Gr Char()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr Char()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:c-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Char ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a%27",
        "fct-type": "function",
        "title": "c'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "c'",
        "normalized": "IO(SGr Char())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr Char())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr479",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#clr479",
        "fct-type": "function",
        "title": "clr479"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "clr479",
        "normalized": "Gr Char()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr Char()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr479-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Char ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#clr479%27",
        "fct-type": "function",
        "title": "clr479'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "clr479'",
        "normalized": "IO(SGr Char())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr Char())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr486",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr String ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#clr486",
        "fct-type": "function",
        "title": "clr486"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "clr486",
        "normalized": "Gr String()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr String()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr486-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr String ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#clr486%27",
        "fct-type": "function",
        "title": "clr486'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "clr486'",
        "normalized": "IO(SGr String())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr String())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr489",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#clr479",
        "fct-type": "function",
        "title": "clr489"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "clr489",
        "normalized": "Gr Char()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr Char()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr489-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Char ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#clr479%27",
        "fct-type": "function",
        "title": "clr489'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "clr489'",
        "normalized": "IO(SGr Char())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr Char())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr508",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char Int",
        "fct-source": "src/Data-Graph-Inductive-Example.html#clr508",
        "fct-type": "function",
        "title": "clr508"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "clr508",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr508-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Char Int)",
        "fct-source": "src/Data-Graph-Inductive-Example.html#clr508%27",
        "fct-type": "function",
        "title": "clr508'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "clr508'",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr528",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char Int",
        "fct-source": "src/Data-Graph-Inductive-Example.html#clr508",
        "fct-type": "function",
        "title": "clr528"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "clr528",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr528-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Char Int)",
        "fct-source": "src/Data-Graph-Inductive-Example.html#clr508%27",
        "fct-type": "function",
        "title": "clr528'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "clr528'",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr595",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Int Int",
        "fct-source": "src/Data-Graph-Inductive-Example.html#clr595",
        "fct-type": "function",
        "title": "clr595"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "clr595",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:cyc3",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char String",
        "fct-source": "src/Data-Graph-Inductive-Example.html#cyc3",
        "fct-type": "function",
        "title": "cyc3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "cyc3",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:d1",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Int Int",
        "fct-source": "src/Data-Graph-Inductive-Example.html#d1",
        "fct-type": "function",
        "title": "d1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "d1",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:d1-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Int Int)",
        "fct-source": "src/Data-Graph-Inductive-Example.html#d1%27",
        "fct-type": "function",
        "title": "d1'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "d1'",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:d3",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Int Int",
        "fct-source": "src/Data-Graph-Inductive-Example.html#d1",
        "fct-type": "function",
        "title": "d3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "d3",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:d3-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Int Int)",
        "fct-source": "src/Data-Graph-Inductive-Example.html#d1%27",
        "fct-type": "function",
        "title": "d3'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "d3'",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:dag3",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a",
        "fct-type": "function",
        "title": "dag3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "dag3",
        "normalized": "Gr Char()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr Char()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:dag3-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Char ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a%27",
        "fct-type": "function",
        "title": "dag3'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "dag3'",
        "normalized": "IO(SGr Char())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr Char())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:dag4",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Int ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#dag4",
        "fct-type": "function",
        "title": "dag4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "dag4",
        "normalized": "Gr Int()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr Int()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:dag4-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Int ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#dag4%27",
        "fct-type": "function",
        "title": "dag4'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "dag4'",
        "normalized": "IO(SGr Int())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr Int())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:e",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a",
        "fct-type": "function",
        "title": "e"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "e",
        "normalized": "Gr Char()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr Char()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:e-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Char ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a%27",
        "fct-type": "function",
        "title": "e'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "e'",
        "normalized": "IO(SGr Char())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr Char())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:e3",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr () String",
        "fct-source": "src/Data-Graph-Inductive-Example.html#e3",
        "fct-type": "function",
        "title": "e3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "e3",
        "normalized": "Gr()String",
        "package": "fgl",
        "partial": "",
        "signature": "Gr()String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:e3-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr () String)",
        "fct-source": "src/Data-Graph-Inductive-Example.html#e3%27",
        "fct-type": "function",
        "title": "e3'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "e3'",
        "normalized": "IO(SGr()String)",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr()String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:g3",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char String",
        "fct-source": "src/Data-Graph-Inductive-Example.html#cyc3",
        "fct-type": "function",
        "title": "g3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "g3",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:g3b",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char String",
        "fct-source": "src/Data-Graph-Inductive-Example.html#cyc3",
        "fct-type": "function",
        "title": "g3b"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "g3b",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:genLNodes",
      "description": {
        "fct-descr": "\u003cp\u003egenerate list of labeled nodes\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "a -\u003e Int -\u003e [LNode a]",
        "fct-source": "src/Data-Graph-Inductive-Example.html#genLNodes",
        "fct-type": "function",
        "title": "genLNodes"
      },
      "index": {
        "description": "generate list of labeled nodes",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "genLNodes",
        "normalized": "a-\u003eInt-\u003e[LNode a]",
        "package": "fgl",
        "partial": "LNodes",
        "signature": "a-\u003eInt-\u003e[LNode a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:genUNodes",
      "description": {
        "fct-descr": "\u003cp\u003egenerate list of unlabeled nodes\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Int -\u003e [UNode]",
        "fct-source": "src/Data-Graph-Inductive-Example.html#genUNodes",
        "fct-type": "function",
        "title": "genUNodes"
      },
      "index": {
        "description": "generate list of unlabeled nodes",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "genUNodes",
        "normalized": "Int-\u003e[UNode]",
        "package": "fgl",
        "partial": "UNodes",
        "signature": "Int-\u003e[UNode]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:gr1",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Int Int",
        "fct-source": "src/Data-Graph-Inductive-Example.html#clr595",
        "fct-type": "function",
        "title": "gr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "gr1",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:kin248",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Int ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#kin248",
        "fct-type": "function",
        "title": "kin248"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "kin248",
        "normalized": "Gr Int()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr Int()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:kin248-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Int ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#kin248%27",
        "fct-type": "function",
        "title": "kin248'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "kin248'",
        "normalized": "IO(SGr Int())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr Int())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:labUEdges",
      "description": {
        "fct-descr": "\u003cp\u003edenote unlabeled edges\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "[Edge] -\u003e [UEdge]",
        "fct-source": "src/Data-Graph-Inductive-Example.html#labUEdges",
        "fct-type": "function",
        "title": "labUEdges"
      },
      "index": {
        "description": "denote unlabeled edges",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "labUEdges",
        "normalized": "[Edge]-\u003e[UEdge]",
        "package": "fgl",
        "partial": "UEdges",
        "signature": "[Edge]-\u003e[UEdge]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:loop",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr Char ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a",
        "fct-type": "function",
        "title": "loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "loop",
        "normalized": "Gr Char()",
        "package": "fgl",
        "partial": "",
        "signature": "Gr Char()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:loop-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr Char ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#a%27",
        "fct-type": "function",
        "title": "loop'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "loop'",
        "normalized": "IO(SGr Char())",
        "package": "fgl",
        "partial": "",
        "signature": "IO(SGr Char())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:noEdges",
      "description": {
        "fct-descr": "\u003cp\u003eempty (unlabeled) edge list\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "[UEdge]",
        "fct-source": "src/Data-Graph-Inductive-Example.html#noEdges",
        "fct-type": "function",
        "title": "noEdges"
      },
      "index": {
        "description": "empty unlabeled edge list",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "noEdges",
        "normalized": "[UEdge]",
        "package": "fgl",
        "partial": "Edges",
        "signature": "[UEdge]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:star",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Int -\u003e gr () ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#star",
        "fct-type": "function",
        "title": "star"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "star",
        "normalized": "Int-\u003ea()()",
        "package": "fgl",
        "partial": "",
        "signature": "Int-\u003egr()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:starM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Int -\u003e m (gr () ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#starM",
        "fct-type": "function",
        "title": "starM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "starM",
        "normalized": "Int-\u003ea(b()())",
        "package": "fgl",
        "partial": "",
        "signature": "Int-\u003em(gr()())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:ucycle",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Int -\u003e gr () ()",
        "fct-source": "src/Data-Graph-Inductive-Example.html#ucycle",
        "fct-type": "function",
        "title": "ucycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "ucycle",
        "normalized": "Int-\u003ea()()",
        "package": "fgl",
        "partial": "",
        "signature": "Int-\u003egr()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:ucycleM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Int -\u003e m (gr () ())",
        "fct-source": "src/Data-Graph-Inductive-Example.html#ucycleM",
        "fct-type": "function",
        "title": "ucycleM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "ucycleM",
        "normalized": "Int-\u003ea(b()())",
        "package": "fgl",
        "partial": "",
        "signature": "Int-\u003em(gr()())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:vor",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "Gr String Int",
        "fct-source": "src/Data-Graph-Inductive-Example.html#vor",
        "fct-type": "function",
        "title": "vor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "vor",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:vor-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Example",
        "fct-package": "fgl",
        "fct-signature": "IO (SGr String Int)",
        "fct-source": "src/Data-Graph-Inductive-Example.html#vor%27",
        "fct-type": "function",
        "title": "vor'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Example",
        "module": "Data.Graph.Inductive.Example",
        "name": "vor'",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStatic and Dynamic Inductive Graphs  \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Graph.html",
        "fct-type": "module",
        "title": "Graph"
      },
      "index": {
        "description": "Static and Dynamic Inductive Graphs",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "Graph",
        "normalized": "",
        "package": "fgl",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Adj",
      "description": {
        "fct-descr": "\u003cp\u003eLabeled links to or from a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#Adj",
        "fct-type": "type",
        "title": "Adj"
      },
      "index": {
        "description": "Labeled links to or from Node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "Adj",
        "normalized": "",
        "package": "fgl",
        "partial": "Adj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Context",
      "description": {
        "fct-descr": "\u003cp\u003eLinks to the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e itself, a label, links from the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#Context",
        "fct-type": "type",
        "title": "Context"
      },
      "index": {
        "description": "Links to the Node the Node itself label links from the Node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "Context",
        "normalized": "",
        "package": "fgl",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Decomp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e decomposition - the context removed from a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e, and the rest\n of the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#Decomp",
        "fct-type": "type",
        "title": "Decomp"
      },
      "index": {
        "description": "Graph decomposition the context removed from Graph and the rest of the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "Decomp",
        "normalized": "",
        "package": "fgl",
        "partial": "Decomp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:DynGraph",
      "description": {
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "class",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#DynGraph",
        "fct-type": "class",
        "title": "DynGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "DynGraph",
        "normalized": "",
        "package": "fgl",
        "partial": "Dyn Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Edge",
      "description": {
        "fct-descr": "\u003cp\u003eUnlabeled edge\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#Edge",
        "fct-type": "type",
        "title": "Edge"
      },
      "index": {
        "description": "Unlabeled edge",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "Edge",
        "normalized": "",
        "package": "fgl",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:GDecomp",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eDecomp\u003c/a\u003e\u003c/code\u003e, only more sure of itself.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#GDecomp",
        "fct-type": "type",
        "title": "GDecomp"
      },
      "index": {
        "description": "The same as Decomp only more sure of itself",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "GDecomp",
        "normalized": "",
        "package": "fgl",
        "partial": "GDecomp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Graph",
      "description": {
        "fct-descr": "\u003cp\u003eMinimum implementation: \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisEmpty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkGraph\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elabNodes\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "class",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#Graph",
        "fct-type": "class",
        "title": "Graph"
      },
      "index": {
        "description": "Minimum implementation empty isEmpty match mkGraph labNodes",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "Graph",
        "normalized": "",
        "package": "fgl",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:LEdge",
      "description": {
        "fct-descr": "\u003cp\u003eLabeled edge\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#LEdge",
        "fct-type": "type",
        "title": "LEdge"
      },
      "index": {
        "description": "Labeled edge",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "LEdge",
        "normalized": "",
        "package": "fgl",
        "partial": "LEdge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:LNode",
      "description": {
        "fct-descr": "\u003cp\u003eLabeled node\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#LNode",
        "fct-type": "type",
        "title": "LNode"
      },
      "index": {
        "description": "Labeled node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "LNode",
        "normalized": "",
        "package": "fgl",
        "partial": "LNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:LPath",
      "description": {
        "fct-descr": "\u003cp\u003eLabeled path\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#LPath",
        "fct-type": "newtype",
        "title": "LPath"
      },
      "index": {
        "description": "Labeled path",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "LPath",
        "normalized": "",
        "package": "fgl",
        "partial": "LPath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:MContext",
      "description": {
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#MContext",
        "fct-type": "type",
        "title": "MContext"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "MContext",
        "normalized": "",
        "package": "fgl",
        "partial": "MContext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eUnlabeled node\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#Node",
        "fct-type": "type",
        "title": "Node"
      },
      "index": {
        "description": "Unlabeled node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "Node",
        "normalized": "",
        "package": "fgl",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eUnlabeled path\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#Path",
        "fct-type": "type",
        "title": "Path"
      },
      "index": {
        "description": "Unlabeled path",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "Path",
        "normalized": "",
        "package": "fgl",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:UContext",
      "description": {
        "fct-descr": "\u003cp\u003eUnlabeled context.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#UContext",
        "fct-type": "type",
        "title": "UContext"
      },
      "index": {
        "description": "Unlabeled context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "UContext",
        "normalized": "",
        "package": "fgl",
        "partial": "UContext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:UDecomp",
      "description": {
        "fct-descr": "\u003cp\u003eUnlabeled decomposition.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#UDecomp",
        "fct-type": "type",
        "title": "UDecomp"
      },
      "index": {
        "description": "Unlabeled decomposition",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "UDecomp",
        "normalized": "",
        "package": "fgl",
        "partial": "UDecomp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:UEdge",
      "description": {
        "fct-descr": "\u003cp\u003eQuasi-unlabeled edge\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#UEdge",
        "fct-type": "type",
        "title": "UEdge"
      },
      "index": {
        "description": "Quasi-unlabeled edge",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "UEdge",
        "normalized": "",
        "package": "fgl",
        "partial": "UEdge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:UNode",
      "description": {
        "fct-descr": "\u003cp\u003eQuasi-unlabeled node\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#UNode",
        "fct-type": "type",
        "title": "UNode"
      },
      "index": {
        "description": "Quasi-unlabeled node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "UNode",
        "normalized": "",
        "package": "fgl",
        "partial": "UNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:UPath",
      "description": {
        "fct-descr": "\u003cp\u003eQuasi-unlabeled path\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#UPath",
        "fct-type": "type",
        "title": "UPath"
      },
      "index": {
        "description": "Quasi-unlabeled path",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "UPath",
        "normalized": "",
        "package": "fgl",
        "partial": "UPath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:-38-",
      "description": {
        "fct-descr": "\u003cp\u003eMerge the \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e into the \u003ccode\u003e\u003ca\u003eDynGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#%26",
        "fct-type": "method",
        "title": "(&)"
      },
      "index": {
        "description": "Merge the Context into the DynGraph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "(&) &",
        "normalized": "Context a b-\u003ec a b-\u003ec a b",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003egr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:LP",
      "description": {
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "LP [LNode a]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#LPath",
        "fct-type": "function",
        "title": "LP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "LP",
        "normalized": "LP[LNode a]",
        "package": "fgl",
        "partial": "LP",
        "signature": "LP[LNode a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:buildGr",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "[Context a b] -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#buildGr",
        "fct-type": "function",
        "title": "buildGr"
      },
      "index": {
        "description": "Build Graph from list of Context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "buildGr",
        "normalized": "[Context a b]-\u003ec a b",
        "package": "fgl",
        "partial": "Gr",
        "signature": "[Context a b]-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:context",
      "description": {
        "fct-descr": "\u003cp\u003eFind the context for the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.  Causes an error if the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is\n not present in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e Context a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#context",
        "fct-type": "function",
        "title": "context"
      },
      "index": {
        "description": "Find the context for the given Node Causes an error if the Node is not present in the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "context",
        "normalized": "a b c-\u003eNode-\u003eContext b c",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003eContext a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:deg",
      "description": {
        "fct-descr": "\u003cp\u003eThe degree of the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e Int",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#deg",
        "fct-type": "function",
        "title": "deg"
      },
      "index": {
        "description": "The degree of the Node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "deg",
        "normalized": "a b c-\u003eNode-\u003eInt",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:deg-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe degree of a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e Int",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#deg%27",
        "fct-type": "function",
        "title": "deg'"
      },
      "index": {
        "description": "The degree of Context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "deg'",
        "normalized": "Context a b-\u003eInt",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:delEdge",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Edge -\u003e gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#delEdge",
        "fct-type": "function",
        "title": "delEdge"
      },
      "index": {
        "description": "Remove an Edge from the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "delEdge",
        "normalized": "Edge-\u003ea b c-\u003ea b c",
        "package": "fgl",
        "partial": "Edge",
        "signature": "Edge-\u003egr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:delEdges",
      "description": {
        "fct-descr": "\u003cp\u003eRemove multiple \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003es from the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "[Edge] -\u003e gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#delEdges",
        "fct-type": "function",
        "title": "delEdges"
      },
      "index": {
        "description": "Remove multiple Edge from the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "delEdges",
        "normalized": "[Edge]-\u003ea b c-\u003ea b c",
        "package": "fgl",
        "partial": "Edges",
        "signature": "[Edge]-\u003egr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:delLEdge",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "LEdge b -\u003e gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#delLEdge",
        "fct-type": "function",
        "title": "delLEdge"
      },
      "index": {
        "description": "Remove an LEdge from the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "delLEdge",
        "normalized": "LEdge a-\u003eb c a-\u003eb c a",
        "package": "fgl",
        "partial": "LEdge",
        "signature": "LEdge b-\u003egr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:delNode",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#delNode",
        "fct-type": "function",
        "title": "delNode"
      },
      "index": {
        "description": "Remove Node from the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "delNode",
        "normalized": "Node-\u003ea b c-\u003ea b c",
        "package": "fgl",
        "partial": "Node",
        "signature": "Node-\u003egr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:delNodes",
      "description": {
        "fct-descr": "\u003cp\u003eRemove multiple \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es from the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#delNodes",
        "fct-type": "function",
        "title": "delNodes"
      },
      "index": {
        "description": "Remove multiple Node from the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "delNodes",
        "normalized": "[Node]-\u003ea b c-\u003ea b c",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "[Node]-\u003egr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:edges",
      "description": {
        "fct-descr": "\u003cp\u003eList all \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [Edge]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#edges",
        "fct-type": "function",
        "title": "edges"
      },
      "index": {
        "description": "List all Edge in the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "edges",
        "normalized": "a b c-\u003e[Edge]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[Edge]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:emap",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over the \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e labels in a graph.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "(b -\u003e c) -\u003e gr a b -\u003e gr a c",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#emap",
        "fct-type": "function",
        "title": "emap"
      },
      "index": {
        "description": "Map function over the Edge labels in graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "emap",
        "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
        "package": "fgl",
        "partial": "",
        "signature": "(b-\u003ec)-\u003egr a b-\u003egr a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "An empty Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "empty",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:equal",
      "description": {
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e gr a b -\u003e Bool",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#equal",
        "fct-type": "function",
        "title": "equal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "equal",
        "normalized": "a b c-\u003ea b c-\u003eBool",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003egr a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:gelem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is present in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e gr a b -\u003e Bool",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#gelem",
        "fct-type": "function",
        "title": "gelem"
      },
      "index": {
        "description": "True if the Node is present in the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "gelem",
        "normalized": "Node-\u003ea b c-\u003eBool",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003egr a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:gmap",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over the graph.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "(Context a b -\u003e Context c d) -\u003e gr a b -\u003e gr c d",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#gmap",
        "fct-type": "function",
        "title": "gmap"
      },
      "index": {
        "description": "Map function over the graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "gmap",
        "normalized": "(Context a b-\u003eContext c d)-\u003ee a b-\u003ee c d",
        "package": "fgl",
        "partial": "",
        "signature": "(Context a b-\u003eContext c d)-\u003egr a b-\u003egr c d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:indeg",
      "description": {
        "fct-descr": "\u003cp\u003eThe inward-bound degree of the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e Int",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#indeg",
        "fct-type": "function",
        "title": "indeg"
      },
      "index": {
        "description": "The inward-bound degree of the Node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "indeg",
        "normalized": "a b c-\u003eNode-\u003eInt",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:indeg-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe inward degree of a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e Int",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#indeg%27",
        "fct-type": "function",
        "title": "indeg'"
      },
      "index": {
        "description": "The inward degree of Context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "indeg'",
        "normalized": "Context a b-\u003eInt",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:inn",
      "description": {
        "fct-descr": "\u003cp\u003eFind all inward-bound \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es for the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e [LEdge b]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#inn",
        "fct-type": "function",
        "title": "inn"
      },
      "index": {
        "description": "Find all inward-bound LEdge for the given Node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "inn",
        "normalized": "a b c-\u003eNode-\u003e[LEdge c]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003e[LEdge b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:inn-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAll inward-directed \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e [LEdge b]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#inn%27",
        "fct-type": "function",
        "title": "inn'"
      },
      "index": {
        "description": "All inward-directed LEdge in Context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "inn'",
        "normalized": "Context a b-\u003e[LEdge b]",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003e[LEdge b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:insEdge",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003e into the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "LEdge b -\u003e gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#insEdge",
        "fct-type": "function",
        "title": "insEdge"
      },
      "index": {
        "description": "Insert LEdge into the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "insEdge",
        "normalized": "LEdge a-\u003eb c a-\u003eb c a",
        "package": "fgl",
        "partial": "Edge",
        "signature": "LEdge b-\u003egr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:insEdges",
      "description": {
        "fct-descr": "\u003cp\u003eInsert multiple \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es into the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "[LEdge b] -\u003e gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#insEdges",
        "fct-type": "function",
        "title": "insEdges"
      },
      "index": {
        "description": "Insert multiple LEdge into the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "insEdges",
        "normalized": "[LEdge a]-\u003eb c a-\u003eb c a",
        "package": "fgl",
        "partial": "Edges",
        "signature": "[LEdge b]-\u003egr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:insNode",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e into the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "LNode a -\u003e gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#insNode",
        "fct-type": "function",
        "title": "insNode"
      },
      "index": {
        "description": "Insert LNode into the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "insNode",
        "normalized": "LNode a-\u003eb a c-\u003eb a c",
        "package": "fgl",
        "partial": "Node",
        "signature": "LNode a-\u003egr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:insNodes",
      "description": {
        "fct-descr": "\u003cp\u003eInsert multiple \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003es into the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "[LNode a] -\u003e gr a b -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#insNodes",
        "fct-type": "function",
        "title": "insNodes"
      },
      "index": {
        "description": "Insert multiple LNode into the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "insNodes",
        "normalized": "[LNode a]-\u003eb a c-\u003eb a c",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "[LNode a]-\u003egr a b-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the given \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Bool",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#isEmpty",
        "fct-type": "method",
        "title": "isEmpty"
      },
      "index": {
        "description": "True if the given Graph is empty",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "isEmpty",
        "normalized": "a b c-\u003eBool",
        "package": "fgl",
        "partial": "Empty",
        "signature": "gr a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:lab",
      "description": {
        "fct-descr": "\u003cp\u003eFind the label for a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e Maybe a",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#lab",
        "fct-type": "function",
        "title": "lab"
      },
      "index": {
        "description": "Find the label for Node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "lab",
        "normalized": "a b c-\u003eNode-\u003eMaybe b",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:lab-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe label in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e a",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#lab%27",
        "fct-type": "function",
        "title": "lab'"
      },
      "index": {
        "description": "The label in Context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "lab'",
        "normalized": "Context a b-\u003ea",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:labEdges",
      "description": {
        "fct-descr": "\u003cp\u003eA list of all \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [LEdge b]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#labEdges",
        "fct-type": "method",
        "title": "labEdges"
      },
      "index": {
        "description": "list of all LEdge in the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "labEdges",
        "normalized": "a b c-\u003e[LEdge c]",
        "package": "fgl",
        "partial": "Edges",
        "signature": "gr a b-\u003e[LEdge b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:labNode-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e LNode a",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#labNode%27",
        "fct-type": "function",
        "title": "labNode'"
      },
      "index": {
        "description": "The LNode from Context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "labNode'",
        "normalized": "Context a b-\u003eLNode a",
        "package": "fgl",
        "partial": "Node'",
        "signature": "Context a b-\u003eLNode a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:labNodes",
      "description": {
        "fct-descr": "\u003cp\u003eA list of all \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [LNode a]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#labNodes",
        "fct-type": "method",
        "title": "labNodes"
      },
      "index": {
        "description": "list of all LNode in the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "labNodes",
        "normalized": "a b c-\u003e[LNode b]",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "gr a b-\u003e[LNode a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:lpre",
      "description": {
        "fct-descr": "\u003cp\u003eFind all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that link to the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e and the label of each link.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e [(Node, b)]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#lpre",
        "fct-type": "function",
        "title": "lpre"
      },
      "index": {
        "description": "Find all Node that link to the given Node and the label of each link",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "lpre",
        "normalized": "a b c-\u003eNode-\u003e[(Node,c)]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003e[(Node,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:lpre-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es linked from in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e, and the label of the links.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e [(Node, b)]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#lpre%27",
        "fct-type": "function",
        "title": "lpre'"
      },
      "index": {
        "description": "All Node linked from in Context and the label of the links",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "lpre'",
        "normalized": "Context a b-\u003e[(Node,b)]",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003e[(Node,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:lsuc",
      "description": {
        "fct-descr": "\u003cp\u003eFind all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that are linked from the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e and the label of\n each link.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e [(Node, b)]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#lsuc",
        "fct-type": "function",
        "title": "lsuc"
      },
      "index": {
        "description": "Find all Node that are linked from the given Node and the label of each link",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "lsuc",
        "normalized": "a b c-\u003eNode-\u003e[(Node,c)]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003e[(Node,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:lsuc-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es linked from in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e, and the label of the links.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e [(Node, b)]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#lsuc%27",
        "fct-type": "function",
        "title": "lsuc'"
      },
      "index": {
        "description": "All Node linked from in Context and the label of the links",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "lsuc'",
        "normalized": "Context a b-\u003e[(Node,b)]",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003e[(Node,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:match",
      "description": {
        "fct-descr": "\u003cp\u003eDecompose a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e into the \u003ccode\u003e\u003ca\u003eMContext\u003c/a\u003e\u003c/code\u003e found for the given node and the\n remaining \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e gr a b -\u003e Decomp gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#match",
        "fct-type": "method",
        "title": "match"
      },
      "index": {
        "description": "Decompose Graph into the MContext found for the given node and the remaining Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "match",
        "normalized": "Node-\u003ea b c-\u003eDecomp a b c",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003egr a b-\u003eDecomp gr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:matchAny",
      "description": {
        "fct-descr": "\u003cp\u003eDecompose a graph into the \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e for an arbitrarily-chosen \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e\n and the remaining \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e GDecomp gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#matchAny",
        "fct-type": "method",
        "title": "matchAny"
      },
      "index": {
        "description": "Decompose graph into the Context for an arbitrarily-chosen Node and the remaining Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "matchAny",
        "normalized": "a b c-\u003eGDecomp a b c",
        "package": "fgl",
        "partial": "Any",
        "signature": "gr a b-\u003eGDecomp gr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:mkGraph",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e from the list of \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "[LNode a] -\u003e [LEdge b] -\u003e gr a b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#mkGraph",
        "fct-type": "method",
        "title": "mkGraph"
      },
      "index": {
        "description": "Create Graph from the list of LNode and LEdge",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "mkGraph",
        "normalized": "[LNode a]-\u003e[LEdge b]-\u003ec a b",
        "package": "fgl",
        "partial": "Graph",
        "signature": "[LNode a]-\u003e[LEdge b]-\u003egr a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:mkUGraph",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a quasi-unlabeled \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e [Edge] -\u003e gr () ()",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#mkUGraph",
        "fct-type": "function",
        "title": "mkUGraph"
      },
      "index": {
        "description": "Build quasi-unlabeled Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "mkUGraph",
        "normalized": "[Node]-\u003e[Edge]-\u003ea()()",
        "package": "fgl",
        "partial": "UGraph",
        "signature": "[Node]-\u003e[Edge]-\u003egr()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:neighbors",
      "description": {
        "fct-descr": "\u003cp\u003eFind the neighbors for a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#neighbors",
        "fct-type": "function",
        "title": "neighbors"
      },
      "index": {
        "description": "Find the neighbors for Node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "neighbors",
        "normalized": "a b c-\u003eNode-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:neighbors-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es linked to or from in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#neighbors%27",
        "fct-type": "function",
        "title": "neighbors'"
      },
      "index": {
        "description": "All Node linked to or from in Context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "neighbors'",
        "normalized": "Context a b-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:newNodes",
      "description": {
        "fct-descr": "\u003cp\u003eList N available \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es, i.e. \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that are not used in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Int -\u003e gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#newNodes",
        "fct-type": "function",
        "title": "newNodes"
      },
      "index": {
        "description": "List available Node i.e Node that are not used in the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "newNodes",
        "normalized": "Int-\u003ea b c-\u003e[Node]",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "Int-\u003egr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:nmap",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e labels in a graph.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "(a -\u003e c) -\u003e gr a b -\u003e gr c b",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#nmap",
        "fct-type": "function",
        "title": "nmap"
      },
      "index": {
        "description": "Map function over the Node labels in graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "nmap",
        "normalized": "(a-\u003eb)-\u003ec a d-\u003ec b d",
        "package": "fgl",
        "partial": "",
        "signature": "(a-\u003ec)-\u003egr a b-\u003egr c b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:noNodes",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es in a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Int",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#noNodes",
        "fct-type": "method",
        "title": "noNodes"
      },
      "index": {
        "description": "The number of Node in Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "noNodes",
        "normalized": "a b c-\u003eInt",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "gr a b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:node-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e Node",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#node%27",
        "fct-type": "function",
        "title": "node'"
      },
      "index": {
        "description": "The Node in Context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "node'",
        "normalized": "Context a b-\u003eNode",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:nodeRange",
      "description": {
        "fct-descr": "\u003cp\u003eThe minimum and maximum \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e (Node, Node)",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#nodeRange",
        "fct-type": "method",
        "title": "nodeRange"
      },
      "index": {
        "description": "The minimum and maximum Node in Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "nodeRange",
        "normalized": "a b c-\u003e(Node,Node)",
        "package": "fgl",
        "partial": "Range",
        "signature": "gr a b-\u003e(Node,Node)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:nodes",
      "description": {
        "fct-descr": "\u003cp\u003eList all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#nodes",
        "fct-type": "function",
        "title": "nodes"
      },
      "index": {
        "description": "List all Node in the Graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "nodes",
        "normalized": "a b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:out",
      "description": {
        "fct-descr": "\u003cp\u003eFind all outward-bound \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es for the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e [LEdge b]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#out",
        "fct-type": "function",
        "title": "out"
      },
      "index": {
        "description": "Find all outward-bound LEdge for the given Node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "out",
        "normalized": "a b c-\u003eNode-\u003e[LEdge c]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003e[LEdge b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:out-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAll outward-directed \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e [LEdge b]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#out%27",
        "fct-type": "function",
        "title": "out'"
      },
      "index": {
        "description": "All outward-directed LEdge in Context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "out'",
        "normalized": "Context a b-\u003e[LEdge b]",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003e[LEdge b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:outdeg",
      "description": {
        "fct-descr": "\u003cp\u003eThe outward-bound degree of the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e Int",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#outdeg",
        "fct-type": "function",
        "title": "outdeg"
      },
      "index": {
        "description": "The outward-bound degree of the Node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "outdeg",
        "normalized": "a b c-\u003eNode-\u003eInt",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:outdeg-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe outward degree of a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e Int",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#outdeg%27",
        "fct-type": "function",
        "title": "outdeg'"
      },
      "index": {
        "description": "The outward degree of Context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "outdeg'",
        "normalized": "Context a b-\u003eInt",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:pre",
      "description": {
        "fct-descr": "\u003cp\u003eFind all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that link to to the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#pre",
        "fct-type": "function",
        "title": "pre"
      },
      "index": {
        "description": "Find all Node that link to to the given Node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "pre",
        "normalized": "a b c-\u003eNode-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:pre-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es linked from in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#pre%27",
        "fct-type": "function",
        "title": "pre'"
      },
      "index": {
        "description": "All Node linked from in Context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "pre'",
        "normalized": "Context a b-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:suc",
      "description": {
        "fct-descr": "\u003cp\u003eFind all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that have a link from the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#suc",
        "fct-type": "function",
        "title": "suc"
      },
      "index": {
        "description": "Find all Node that have link from the given Node",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "suc",
        "normalized": "a b c-\u003eNode-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:suc-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es linked to in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "Context a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#suc%27",
        "fct-type": "function",
        "title": "suc'"
      },
      "index": {
        "description": "All Node linked to in Context",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "suc'",
        "normalized": "Context a b-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "Context a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:ufold",
      "description": {
        "fct-descr": "\u003cp\u003eFold a function over the graph.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graph",
        "fct-package": "fgl",
        "fct-signature": "(Context a b -\u003e c -\u003e c) -\u003e c -\u003e gr a b -\u003e c",
        "fct-source": "src/Data-Graph-Inductive-Graph.html#ufold",
        "fct-type": "function",
        "title": "ufold"
      },
      "index": {
        "description": "Fold function over the graph",
        "hierarchy": "Data Graph Inductive Graph",
        "module": "Data.Graph.Inductive.Graph",
        "name": "ufold",
        "normalized": "(Context a b-\u003ec-\u003ec)-\u003ec-\u003ed a b-\u003ec",
        "package": "fgl",
        "partial": "",
        "signature": "(Context a b-\u003ec-\u003ec)-\u003ec-\u003egr a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graphviz.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple graphviz output.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Graphviz",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Graphviz.html",
        "fct-type": "module",
        "title": "Graphviz"
      },
      "index": {
        "description": "Simple graphviz output",
        "hierarchy": "Data Graph Inductive Graphviz",
        "module": "Data.Graph.Inductive.Graphviz",
        "name": "Graphviz",
        "normalized": "",
        "package": "fgl",
        "partial": "Graphviz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graphviz.html#t:Orient",
      "description": {
        "fct-module": "Data.Graph.Inductive.Graphviz",
        "fct-package": "fgl",
        "fct-signature": "data",
        "fct-source": "src/Data-Graph-Inductive-Graphviz.html#Orient",
        "fct-type": "data",
        "title": "Orient"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Graphviz",
        "module": "Data.Graph.Inductive.Graphviz",
        "name": "Orient",
        "normalized": "",
        "package": "fgl",
        "partial": "Orient",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graphviz.html#v:Landscape",
      "description": {
        "fct-module": "Data.Graph.Inductive.Graphviz",
        "fct-package": "fgl",
        "fct-signature": "Landscape",
        "fct-source": "src/Data-Graph-Inductive-Graphviz.html#Orient",
        "fct-type": "function",
        "title": "Landscape"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Graphviz",
        "module": "Data.Graph.Inductive.Graphviz",
        "name": "Landscape",
        "normalized": "",
        "package": "fgl",
        "partial": "Landscape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graphviz.html#v:Portrait",
      "description": {
        "fct-module": "Data.Graph.Inductive.Graphviz",
        "fct-package": "fgl",
        "fct-signature": "Portrait",
        "fct-source": "src/Data-Graph-Inductive-Graphviz.html#Orient",
        "fct-type": "function",
        "title": "Portrait"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Graphviz",
        "module": "Data.Graph.Inductive.Graphviz",
        "name": "Portrait",
        "normalized": "",
        "package": "fgl",
        "partial": "Portrait",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graphviz.html#v:graphviz",
      "description": {
        "fct-descr": "\u003cp\u003eFormats a graph for use in graphviz.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graphviz",
        "fct-package": "fgl",
        "fct-signature": "g a b-\u003e String-\u003e (Double, Double)-\u003e (Int, Int)-\u003e Orient-\u003e String",
        "fct-type": "function",
        "title": "graphviz"
      },
      "index": {
        "description": "Formats graph for use in graphviz",
        "hierarchy": "Data Graph Inductive Graphviz",
        "module": "Data.Graph.Inductive.Graphviz",
        "name": "graphviz",
        "normalized": "a b c-\u003eString-\u003e(Double,Double)-\u003e(Int,Int)-\u003eOrient-\u003eString",
        "package": "fgl",
        "partial": "",
        "signature": "g a b-\u003eString-\u003e(Double,Double)-\u003e(Int,Int)-\u003eOrient-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graphviz.html#v:graphviz-39-",
      "description": {
        "fct-descr": "\u003cp\u003eFormat a graph for graphviz with reasonable defaults: title of \"fgl\",\n 8.5x11 pages, one page, landscape orientation\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Graphviz",
        "fct-package": "fgl",
        "fct-signature": "g a b -\u003e String",
        "fct-source": "src/Data-Graph-Inductive-Graphviz.html#graphviz%27",
        "fct-type": "function",
        "title": "graphviz'"
      },
      "index": {
        "description": "Format graph for graphviz with reasonable defaults title of fgl x11 pages one page landscape orientation",
        "hierarchy": "Data Graph Inductive Graphviz",
        "module": "Data.Graph.Inductive.Graphviz",
        "name": "graphviz'",
        "normalized": "a b c-\u003eString",
        "package": "fgl",
        "partial": "",
        "signature": "g a b-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple Finite Maps.\n This implementation provides several useful methods that Data.FiniteMap\n does not.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html",
        "fct-type": "module",
        "title": "FiniteMap"
      },
      "index": {
        "description": "Simple Finite Maps This implementation provides several useful methods that Data.FiniteMap does not",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "FiniteMap",
        "normalized": "",
        "package": "fgl",
        "partial": "Finite Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#t:FiniteMap",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "data",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#FiniteMap",
        "fct-type": "data",
        "title": "FiniteMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "FiniteMap",
        "normalized": "",
        "package": "fgl",
        "partial": "Finite Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:Empty",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "Empty",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#FiniteMap",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "Empty",
        "normalized": "",
        "package": "fgl",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:Node",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "Node Int (FiniteMap a b) (a, b) (FiniteMap a b)",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#FiniteMap",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "Node",
        "normalized": "Node Int(FiniteMap a b)(a,b)(FiniteMap a b)",
        "package": "fgl",
        "partial": "Node",
        "signature": "Node Int(FiniteMap a b)(a,b)(FiniteMap a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:accumFM",
      "description": {
        "fct-descr": "\u003cp\u003edefines or aggregates entries\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e a -\u003e (b -\u003e b -\u003e b) -\u003e b -\u003e FiniteMap a b",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#accumFM",
        "fct-type": "function",
        "title": "accumFM"
      },
      "index": {
        "description": "defines or aggregates entries",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "accumFM",
        "normalized": "FiniteMap a b-\u003ea-\u003e(b-\u003eb-\u003eb)-\u003eb-\u003eFiniteMap a b",
        "package": "fgl",
        "partial": "FM",
        "signature": "FiniteMap a b-\u003ea-\u003e(b-\u003eb-\u003eb)-\u003eb-\u003eFiniteMap a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:addToFM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e a -\u003e b -\u003e FiniteMap a b",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#addToFM",
        "fct-type": "function",
        "title": "addToFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "addToFM",
        "normalized": "FiniteMap a b-\u003ea-\u003eb-\u003eFiniteMap a b",
        "package": "fgl",
        "partial": "To FM",
        "signature": "FiniteMap a b-\u003ea-\u003eb-\u003eFiniteMap a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:delFromFM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e a -\u003e FiniteMap a b",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#delFromFM",
        "fct-type": "function",
        "title": "delFromFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "delFromFM",
        "normalized": "FiniteMap a b-\u003ea-\u003eFiniteMap a b",
        "package": "fgl",
        "partial": "From FM",
        "signature": "FiniteMap a b-\u003ea-\u003eFiniteMap a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:elemFM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#elemFM",
        "fct-type": "function",
        "title": "elemFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "elemFM",
        "normalized": "FiniteMap a b-\u003ea-\u003eBool",
        "package": "fgl",
        "partial": "FM",
        "signature": "FiniteMap a b-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:emptyFM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#emptyFM",
        "fct-type": "function",
        "title": "emptyFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "emptyFM",
        "normalized": "",
        "package": "fgl",
        "partial": "FM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:fmToList",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e [(a, b)]",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#fmToList",
        "fct-type": "function",
        "title": "fmToList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "fmToList",
        "normalized": "FiniteMap a b-\u003e[(a,b)]",
        "package": "fgl",
        "partial": "To List",
        "signature": "FiniteMap a b-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:isEmptyFM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e Bool",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#isEmptyFM",
        "fct-type": "function",
        "title": "isEmptyFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "isEmptyFM",
        "normalized": "FiniteMap a b-\u003eBool",
        "package": "fgl",
        "partial": "Empty FM",
        "signature": "FiniteMap a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:lookupFM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e a -\u003e Maybe b",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#lookupFM",
        "fct-type": "function",
        "title": "lookupFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "lookupFM",
        "normalized": "FiniteMap a b-\u003ea-\u003eMaybe b",
        "package": "fgl",
        "partial": "FM",
        "signature": "FiniteMap a b-\u003ea-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:maxFM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e Maybe (a, b)",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#maxFM",
        "fct-type": "function",
        "title": "maxFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "maxFM",
        "normalized": "FiniteMap a b-\u003eMaybe(a,b)",
        "package": "fgl",
        "partial": "FM",
        "signature": "FiniteMap a b-\u003eMaybe(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:minFM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e Maybe (a, b)",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#minFM",
        "fct-type": "function",
        "title": "minFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "minFM",
        "normalized": "FiniteMap a b-\u003eMaybe(a,b)",
        "package": "fgl",
        "partial": "FM",
        "signature": "FiniteMap a b-\u003eMaybe(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:predFM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e a -\u003e Maybe (a, b)",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#predFM",
        "fct-type": "function",
        "title": "predFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "predFM",
        "normalized": "FiniteMap a b-\u003ea-\u003eMaybe(a,b)",
        "package": "fgl",
        "partial": "FM",
        "signature": "FiniteMap a b-\u003ea-\u003eMaybe(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:rangeFM",
      "description": {
        "fct-descr": "\u003cp\u003eapplies lookup to an interval\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e a -\u003e a -\u003e [b]",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#rangeFM",
        "fct-type": "function",
        "title": "rangeFM"
      },
      "index": {
        "description": "applies lookup to an interval",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "rangeFM",
        "normalized": "FiniteMap a b-\u003ea-\u003ea-\u003e[b]",
        "package": "fgl",
        "partial": "FM",
        "signature": "FiniteMap a b-\u003ea-\u003ea-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:sizeFM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e Int",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#sizeFM",
        "fct-type": "function",
        "title": "sizeFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "sizeFM",
        "normalized": "FiniteMap a b-\u003eInt",
        "package": "fgl",
        "partial": "FM",
        "signature": "FiniteMap a b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:splitFM",
      "description": {
        "fct-descr": "\u003cp\u003ecombines delFrom and lookup\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e a -\u003e Maybe (FiniteMap a b, (a, b))",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#splitFM",
        "fct-type": "function",
        "title": "splitFM"
      },
      "index": {
        "description": "combines delFrom and lookup",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "splitFM",
        "normalized": "FiniteMap a b-\u003ea-\u003eMaybe(FiniteMap a b,(a,b))",
        "package": "fgl",
        "partial": "FM",
        "signature": "FiniteMap a b-\u003ea-\u003eMaybe(FiniteMap a b,(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:splitMinFM",
      "description": {
        "fct-descr": "\u003cp\u003ecombines splitFM and minFM\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e Maybe (FiniteMap a b, (a, b))",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#splitMinFM",
        "fct-type": "function",
        "title": "splitMinFM"
      },
      "index": {
        "description": "combines splitFM and minFM",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "splitMinFM",
        "normalized": "FiniteMap a b-\u003eMaybe(FiniteMap a b,(a,b))",
        "package": "fgl",
        "partial": "Min FM",
        "signature": "FiniteMap a b-\u003eMaybe(FiniteMap a b,(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:succFM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e a -\u003e Maybe (a, b)",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#succFM",
        "fct-type": "function",
        "title": "succFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "succFM",
        "normalized": "FiniteMap a b-\u003ea-\u003eMaybe(a,b)",
        "package": "fgl",
        "partial": "FM",
        "signature": "FiniteMap a b-\u003ea-\u003eMaybe(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:updFM",
      "description": {
        "fct-descr": "\u003cp\u003eapplies function to stored entry\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Internal.FiniteMap",
        "fct-package": "fgl",
        "fct-signature": "FiniteMap a b -\u003e a -\u003e (b -\u003e b) -\u003e FiniteMap a b",
        "fct-source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#updFM",
        "fct-type": "function",
        "title": "updFM"
      },
      "index": {
        "description": "applies function to stored entry",
        "hierarchy": "Data Graph Inductive Internal FiniteMap",
        "module": "Data.Graph.Inductive.Internal.FiniteMap",
        "name": "updFM",
        "normalized": "FiniteMap a b-\u003ea-\u003e(b-\u003eb)-\u003eFiniteMap a b",
        "package": "fgl",
        "partial": "FM",
        "signature": "FiniteMap a b-\u003ea-\u003e(b-\u003eb)-\u003eFiniteMap a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePairing heap implementation of dictionary\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html",
        "fct-type": "module",
        "title": "Heap"
      },
      "index": {
        "description": "Pairing heap implementation of dictionary",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "Heap",
        "normalized": "",
        "package": "fgl",
        "partial": "Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#t:Heap",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "data",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#Heap",
        "fct-type": "data",
        "title": "Heap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "Heap",
        "normalized": "",
        "package": "fgl",
        "partial": "Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:Empty",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "Empty",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#Heap",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "Empty",
        "normalized": "",
        "package": "fgl",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:Node",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "Node a b [Heap a b]",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#Heap",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "Node",
        "normalized": "Node a b[Heap a b]",
        "package": "fgl",
        "partial": "Node",
        "signature": "Node a b[Heap a b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:build",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "[(a, b)] -\u003e Heap a b",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#build",
        "fct-type": "function",
        "title": "build"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "build",
        "normalized": "[(a,b)]-\u003eHeap a b",
        "package": "fgl",
        "partial": "",
        "signature": "[(a,b)]-\u003eHeap a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:deleteMin",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "Heap a b -\u003e Heap a b",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "deleteMin",
        "normalized": "Heap a b-\u003eHeap a b",
        "package": "fgl",
        "partial": "Min",
        "signature": "Heap a b-\u003eHeap a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:empty",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "Heap a b",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "empty",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:findMin",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "Heap a b -\u003e (a, b)",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "findMin",
        "normalized": "Heap a b-\u003e(a,b)",
        "package": "fgl",
        "partial": "Min",
        "signature": "Heap a b-\u003e(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:heapsort",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#heapsort",
        "fct-type": "function",
        "title": "heapsort"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "heapsort",
        "normalized": "[a]-\u003e[a]",
        "package": "fgl",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:insert",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "(a, b) -\u003e Heap a b -\u003e Heap a b",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "insert",
        "normalized": "(a,b)-\u003eHeap a b-\u003eHeap a b",
        "package": "fgl",
        "partial": "",
        "signature": "(a,b)-\u003eHeap a b-\u003eHeap a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:isEmpty",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "Heap a b -\u003e Bool",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "isEmpty",
        "normalized": "Heap a b-\u003eBool",
        "package": "fgl",
        "partial": "Empty",
        "signature": "Heap a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:merge",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "Heap a b -\u003e Heap a b -\u003e Heap a b",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "merge",
        "normalized": "Heap a b-\u003eHeap a b-\u003eHeap a b",
        "package": "fgl",
        "partial": "",
        "signature": "Heap a b-\u003eHeap a b-\u003eHeap a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:mergeAll",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "[Heap a b] -\u003e Heap a b",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#mergeAll",
        "fct-type": "function",
        "title": "mergeAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "mergeAll",
        "normalized": "[Heap a b]-\u003eHeap a b",
        "package": "fgl",
        "partial": "All",
        "signature": "[Heap a b]-\u003eHeap a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:splitMin",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "Heap a b -\u003e (a, b, Heap a b)",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#splitMin",
        "fct-type": "function",
        "title": "splitMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "splitMin",
        "normalized": "Heap a b-\u003e(a,b,Heap a b)",
        "package": "fgl",
        "partial": "Min",
        "signature": "Heap a b-\u003e(a,b,Heap a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:toList",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "Heap a b -\u003e [(a, b)]",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "toList",
        "normalized": "Heap a b-\u003e[(a,b)]",
        "package": "fgl",
        "partial": "List",
        "signature": "Heap a b-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:unit",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Heap",
        "fct-package": "fgl",
        "fct-signature": "a -\u003e b -\u003e Heap a b",
        "fct-source": "src/Data-Graph-Inductive-Internal-Heap.html#unit",
        "fct-type": "function",
        "title": "unit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Heap",
        "module": "Data.Graph.Inductive.Internal.Heap",
        "name": "unit",
        "normalized": "a-\u003eb-\u003eHeap a b",
        "package": "fgl",
        "partial": "",
        "signature": "a-\u003eb-\u003eHeap a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Queue",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Internal-Queue.html",
        "fct-type": "module",
        "title": "Queue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Queue",
        "module": "Data.Graph.Inductive.Internal.Queue",
        "name": "Queue",
        "normalized": "",
        "package": "fgl",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#t:Queue",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Queue",
        "fct-package": "fgl",
        "fct-signature": "data",
        "fct-source": "src/Data-Graph-Inductive-Internal-Queue.html#Queue",
        "fct-type": "data",
        "title": "Queue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Queue",
        "module": "Data.Graph.Inductive.Internal.Queue",
        "name": "Queue",
        "normalized": "",
        "package": "fgl",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#v:MkQueue",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Queue",
        "fct-package": "fgl",
        "fct-signature": "MkQueue [a] [a]",
        "fct-source": "src/Data-Graph-Inductive-Internal-Queue.html#Queue",
        "fct-type": "function",
        "title": "MkQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Queue",
        "module": "Data.Graph.Inductive.Internal.Queue",
        "name": "MkQueue",
        "normalized": "MkQueue[a][a]",
        "package": "fgl",
        "partial": "Mk Queue",
        "signature": "MkQueue[a][a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#v:mkQueue",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Queue",
        "fct-package": "fgl",
        "fct-signature": "Queue a",
        "fct-source": "src/Data-Graph-Inductive-Internal-Queue.html#mkQueue",
        "fct-type": "function",
        "title": "mkQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Queue",
        "module": "Data.Graph.Inductive.Internal.Queue",
        "name": "mkQueue",
        "normalized": "",
        "package": "fgl",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#v:queueEmpty",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Queue",
        "fct-package": "fgl",
        "fct-signature": "Queue a -\u003e Bool",
        "fct-source": "src/Data-Graph-Inductive-Internal-Queue.html#queueEmpty",
        "fct-type": "function",
        "title": "queueEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Queue",
        "module": "Data.Graph.Inductive.Internal.Queue",
        "name": "queueEmpty",
        "normalized": "Queue a-\u003eBool",
        "package": "fgl",
        "partial": "Empty",
        "signature": "Queue a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#v:queueGet",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Queue",
        "fct-package": "fgl",
        "fct-signature": "Queue a -\u003e (a, Queue a)",
        "fct-source": "src/Data-Graph-Inductive-Internal-Queue.html#queueGet",
        "fct-type": "function",
        "title": "queueGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Queue",
        "module": "Data.Graph.Inductive.Internal.Queue",
        "name": "queueGet",
        "normalized": "Queue a-\u003e(a,Queue a)",
        "package": "fgl",
        "partial": "Get",
        "signature": "Queue a-\u003e(a,Queue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#v:queuePut",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Queue",
        "fct-package": "fgl",
        "fct-signature": "a -\u003e Queue a -\u003e Queue a",
        "fct-source": "src/Data-Graph-Inductive-Internal-Queue.html#queuePut",
        "fct-type": "function",
        "title": "queuePut"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Queue",
        "module": "Data.Graph.Inductive.Internal.Queue",
        "name": "queuePut",
        "normalized": "a-\u003eQueue a-\u003eQueue a",
        "package": "fgl",
        "partial": "Put",
        "signature": "a-\u003eQueue a-\u003eQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#v:queuePutList",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Queue",
        "fct-package": "fgl",
        "fct-signature": "[a] -\u003e Queue a -\u003e Queue a",
        "fct-source": "src/Data-Graph-Inductive-Internal-Queue.html#queuePutList",
        "fct-type": "function",
        "title": "queuePutList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Queue",
        "module": "Data.Graph.Inductive.Internal.Queue",
        "name": "queuePutList",
        "normalized": "[a]-\u003eQueue a-\u003eQueue a",
        "package": "fgl",
        "partial": "Put List",
        "signature": "[a]-\u003eQueue a-\u003eQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInward directed trees as lists of paths.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Internal.RootPath",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Internal-RootPath.html",
        "fct-type": "module",
        "title": "RootPath"
      },
      "index": {
        "description": "Inward directed trees as lists of paths",
        "hierarchy": "Data Graph Inductive Internal RootPath",
        "module": "Data.Graph.Inductive.Internal.RootPath",
        "name": "RootPath",
        "normalized": "",
        "package": "fgl",
        "partial": "Root Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#t:LRTree",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.RootPath",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Internal-RootPath.html#LRTree",
        "fct-type": "type",
        "title": "LRTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal RootPath",
        "module": "Data.Graph.Inductive.Internal.RootPath",
        "name": "LRTree",
        "normalized": "",
        "package": "fgl",
        "partial": "LRTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#t:RTree",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.RootPath",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Internal-RootPath.html#RTree",
        "fct-type": "type",
        "title": "RTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal RootPath",
        "module": "Data.Graph.Inductive.Internal.RootPath",
        "name": "RTree",
        "normalized": "",
        "package": "fgl",
        "partial": "RTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#v:getDistance",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.RootPath",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e LRTree a -\u003e a",
        "fct-source": "src/Data-Graph-Inductive-Internal-RootPath.html#getDistance",
        "fct-type": "function",
        "title": "getDistance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal RootPath",
        "module": "Data.Graph.Inductive.Internal.RootPath",
        "name": "getDistance",
        "normalized": "Node-\u003eLRTree a-\u003ea",
        "package": "fgl",
        "partial": "Distance",
        "signature": "Node-\u003eLRTree a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#v:getLPath",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.RootPath",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e LRTree a -\u003e LPath a",
        "fct-source": "src/Data-Graph-Inductive-Internal-RootPath.html#getLPath",
        "fct-type": "function",
        "title": "getLPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal RootPath",
        "module": "Data.Graph.Inductive.Internal.RootPath",
        "name": "getLPath",
        "normalized": "Node-\u003eLRTree a-\u003eLPath a",
        "package": "fgl",
        "partial": "LPath",
        "signature": "Node-\u003eLRTree a-\u003eLPath a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#v:getLPathNodes",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.RootPath",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e LRTree a -\u003e Path",
        "fct-source": "src/Data-Graph-Inductive-Internal-RootPath.html#getLPathNodes",
        "fct-type": "function",
        "title": "getLPathNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal RootPath",
        "module": "Data.Graph.Inductive.Internal.RootPath",
        "name": "getLPathNodes",
        "normalized": "Node-\u003eLRTree a-\u003ePath",
        "package": "fgl",
        "partial": "LPath Nodes",
        "signature": "Node-\u003eLRTree a-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#v:getPath",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.RootPath",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e RTree -\u003e Path",
        "fct-source": "src/Data-Graph-Inductive-Internal-RootPath.html#getPath",
        "fct-type": "function",
        "title": "getPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal RootPath",
        "module": "Data.Graph.Inductive.Internal.RootPath",
        "name": "getPath",
        "normalized": "Node-\u003eRTree-\u003ePath",
        "package": "fgl",
        "partial": "Path",
        "signature": "Node-\u003eRTree-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThreading Combinators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Internal.Thread",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Internal-Thread.html",
        "fct-type": "module",
        "title": "Thread"
      },
      "index": {
        "description": "Threading Combinators",
        "hierarchy": "Data Graph Inductive Internal Thread",
        "module": "Data.Graph.Inductive.Internal.Thread",
        "name": "Thread",
        "normalized": "",
        "package": "fgl",
        "partial": "Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#t:Collect",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Thread",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Internal-Thread.html#Collect",
        "fct-type": "type",
        "title": "Collect"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Thread",
        "module": "Data.Graph.Inductive.Internal.Thread",
        "name": "Collect",
        "normalized": "",
        "package": "fgl",
        "partial": "Collect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#t:Split",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Thread",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Internal-Thread.html#Split",
        "fct-type": "type",
        "title": "Split"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Thread",
        "module": "Data.Graph.Inductive.Internal.Thread",
        "name": "Split",
        "normalized": "",
        "package": "fgl",
        "partial": "Split",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#t:SplitM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Thread",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Internal-Thread.html#SplitM",
        "fct-type": "type",
        "title": "SplitM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Thread",
        "module": "Data.Graph.Inductive.Internal.Thread",
        "name": "SplitM",
        "normalized": "",
        "package": "fgl",
        "partial": "Split",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#t:Thread",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Thread",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Internal-Thread.html#Thread",
        "fct-type": "type",
        "title": "Thread"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Thread",
        "module": "Data.Graph.Inductive.Internal.Thread",
        "name": "Thread",
        "normalized": "",
        "package": "fgl",
        "partial": "Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#v:splitPar",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Thread",
        "fct-package": "fgl",
        "fct-signature": "Split t i r -\u003e Split u j s -\u003e Split (t, u) (i, j) (r, s)",
        "fct-source": "src/Data-Graph-Inductive-Internal-Thread.html#splitPar",
        "fct-type": "function",
        "title": "splitPar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Thread",
        "module": "Data.Graph.Inductive.Internal.Thread",
        "name": "splitPar",
        "normalized": "Split a b c-\u003eSplit d e f-\u003eSplit(a,d)(b,e)(c,f)",
        "package": "fgl",
        "partial": "Par",
        "signature": "Split t i r-\u003eSplit u j s-\u003eSplit(t,u)(i,j)(r,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#v:splitParM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Thread",
        "fct-package": "fgl",
        "fct-signature": "SplitM t i r -\u003e Split u j s -\u003e SplitM (t, u) (i, j) (r, s)",
        "fct-source": "src/Data-Graph-Inductive-Internal-Thread.html#splitParM",
        "fct-type": "function",
        "title": "splitParM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Thread",
        "module": "Data.Graph.Inductive.Internal.Thread",
        "name": "splitParM",
        "normalized": "SplitM a b c-\u003eSplit d e f-\u003eSplitM(a,d)(b,e)(c,f)",
        "package": "fgl",
        "partial": "Par",
        "signature": "SplitM t i r-\u003eSplit u j s-\u003eSplitM(t,u)(i,j)(r,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#v:threadList",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Thread",
        "fct-package": "fgl",
        "fct-signature": "Collect r c -\u003e Split t i r -\u003e [i] -\u003e t -\u003e (c, t)",
        "fct-source": "src/Data-Graph-Inductive-Internal-Thread.html#threadList",
        "fct-type": "function",
        "title": "threadList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Thread",
        "module": "Data.Graph.Inductive.Internal.Thread",
        "name": "threadList",
        "normalized": "Collect a b-\u003eSplit c d a-\u003e[d]-\u003ec-\u003e(b,c)",
        "package": "fgl",
        "partial": "List",
        "signature": "Collect r c-\u003eSplit t i r-\u003e[i]-\u003et-\u003e(c,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#v:threadList-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Thread",
        "fct-package": "fgl",
        "fct-signature": "Collect r c -\u003e Split t i r -\u003e [i] -\u003e t -\u003e (c, t)",
        "fct-source": "src/Data-Graph-Inductive-Internal-Thread.html#threadList%27",
        "fct-type": "function",
        "title": "threadList'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Thread",
        "module": "Data.Graph.Inductive.Internal.Thread",
        "name": "threadList'",
        "normalized": "Collect a b-\u003eSplit c d a-\u003e[d]-\u003ec-\u003e(b,c)",
        "package": "fgl",
        "partial": "List'",
        "signature": "Collect r c-\u003eSplit t i r-\u003e[i]-\u003et-\u003e(c,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#v:threadMaybe",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Thread",
        "fct-package": "fgl",
        "fct-signature": "(i -\u003e r -\u003e a) -\u003e Split t i r -\u003e SplitM t j i -\u003e SplitM t j a",
        "fct-source": "src/Data-Graph-Inductive-Internal-Thread.html#threadMaybe",
        "fct-type": "function",
        "title": "threadMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Thread",
        "module": "Data.Graph.Inductive.Internal.Thread",
        "name": "threadMaybe",
        "normalized": "(a-\u003eb-\u003ec)-\u003eSplit d a b-\u003eSplitM d e a-\u003eSplitM d e c",
        "package": "fgl",
        "partial": "Maybe",
        "signature": "(i-\u003er-\u003ea)-\u003eSplit t i r-\u003eSplitM t j i-\u003eSplitM t j a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#v:threadMaybe-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Internal.Thread",
        "fct-package": "fgl",
        "fct-signature": "(r -\u003e a) -\u003e Split t i r -\u003e Split t j (Maybe i) -\u003e Split t j (Maybe a)",
        "fct-source": "src/Data-Graph-Inductive-Internal-Thread.html#threadMaybe%27",
        "fct-type": "function",
        "title": "threadMaybe'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Internal Thread",
        "module": "Data.Graph.Inductive.Internal.Thread",
        "name": "threadMaybe'",
        "normalized": "(a-\u003eb)-\u003eSplit c d a-\u003eSplit c e(Maybe d)-\u003eSplit c e(Maybe b)",
        "package": "fgl",
        "partial": "Maybe'",
        "signature": "(r-\u003ea)-\u003eSplit t i r-\u003eSplit t j(Maybe i)-\u003eSplit t j(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStatic IOArray-based Graphs  \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Monad.IOArray",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Monad-IOArray.html",
        "fct-type": "module",
        "title": "IOArray"
      },
      "index": {
        "description": "Static IOArray-based Graphs",
        "hierarchy": "Data Graph Inductive Monad IOArray",
        "module": "Data.Graph.Inductive.Monad.IOArray",
        "name": "IOArray",
        "normalized": "",
        "package": "fgl",
        "partial": "IOArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#t:Context-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad.IOArray",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Monad-IOArray.html#Context%27",
        "fct-type": "type",
        "title": "Context'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad IOArray",
        "module": "Data.Graph.Inductive.Monad.IOArray",
        "name": "Context'",
        "normalized": "",
        "package": "fgl",
        "partial": "Context'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#t:GraphRep",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad.IOArray",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Monad-IOArray.html#GraphRep",
        "fct-type": "type",
        "title": "GraphRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad IOArray",
        "module": "Data.Graph.Inductive.Monad.IOArray",
        "name": "GraphRep",
        "normalized": "",
        "package": "fgl",
        "partial": "Graph Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#t:SGr",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad.IOArray",
        "fct-package": "fgl",
        "fct-signature": "data",
        "fct-source": "src/Data-Graph-Inductive-Monad-IOArray.html#SGr",
        "fct-type": "data",
        "title": "SGr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad IOArray",
        "module": "Data.Graph.Inductive.Monad.IOArray",
        "name": "SGr",
        "normalized": "",
        "package": "fgl",
        "partial": "SGr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#t:USGr",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad.IOArray",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Monad-IOArray.html#USGr",
        "fct-type": "type",
        "title": "USGr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad IOArray",
        "module": "Data.Graph.Inductive.Monad.IOArray",
        "name": "USGr",
        "normalized": "",
        "package": "fgl",
        "partial": "USGr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#v:SGr",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad.IOArray",
        "fct-package": "fgl",
        "fct-signature": "SGr (GraphRep a b)",
        "fct-source": "src/Data-Graph-Inductive-Monad-IOArray.html#SGr",
        "fct-type": "function",
        "title": "SGr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad IOArray",
        "module": "Data.Graph.Inductive.Monad.IOArray",
        "name": "SGr",
        "normalized": "",
        "package": "fgl",
        "partial": "SGr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#v:defaultGraphSize",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad.IOArray",
        "fct-package": "fgl",
        "fct-signature": "Int",
        "fct-source": "src/Data-Graph-Inductive-Monad-IOArray.html#defaultGraphSize",
        "fct-type": "function",
        "title": "defaultGraphSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad IOArray",
        "module": "Data.Graph.Inductive.Monad.IOArray",
        "name": "defaultGraphSize",
        "normalized": "",
        "package": "fgl",
        "partial": "Graph Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#v:emptyN",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad.IOArray",
        "fct-package": "fgl",
        "fct-signature": "Int -\u003e IO (SGr a b)",
        "fct-source": "src/Data-Graph-Inductive-Monad-IOArray.html#emptyN",
        "fct-type": "function",
        "title": "emptyN"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad IOArray",
        "module": "Data.Graph.Inductive.Monad.IOArray",
        "name": "emptyN",
        "normalized": "Int-\u003eIO(SGr a b)",
        "package": "fgl",
        "partial": "",
        "signature": "Int-\u003eIO(SGr a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#v:removeDel",
      "description": {
        "fct-descr": "\u003cp\u003efilter list (of successors/predecessors) through a boolean ST array\n representing deleted marks\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Monad.IOArray",
        "fct-package": "fgl",
        "fct-signature": "IOArray Node Bool -\u003e Adj b -\u003e IO (Adj b)",
        "fct-source": "src/Data-Graph-Inductive-Monad-IOArray.html#removeDel",
        "fct-type": "function",
        "title": "removeDel"
      },
      "index": {
        "description": "filter list of successors predecessors through boolean ST array representing deleted marks",
        "hierarchy": "Data Graph Inductive Monad IOArray",
        "module": "Data.Graph.Inductive.Monad.IOArray",
        "name": "removeDel",
        "normalized": "IOArray Node Bool-\u003eAdj a-\u003eIO(Adj a)",
        "package": "fgl",
        "partial": "Del",
        "signature": "IOArray Node Bool-\u003eAdj b-\u003eIO(Adj b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Graphs\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "Monadic Graphs",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "fgl",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#t:GraphM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "class",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#GraphM",
        "fct-type": "class",
        "title": "GraphM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "GraphM",
        "normalized": "",
        "package": "fgl",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:contextM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e Node -\u003e m (Context a b)",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#contextM",
        "fct-type": "function",
        "title": "contextM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "contextM",
        "normalized": "a(b c d)-\u003eNode-\u003ea(Context c d)",
        "package": "fgl",
        "partial": "",
        "signature": "m(gr a b)-\u003eNode-\u003em(Context a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:delNodeM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e m (gr a b) -\u003e m (gr a b)",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#delNodeM",
        "fct-type": "function",
        "title": "delNodeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "delNodeM",
        "normalized": "Node-\u003ea(b c d)-\u003ea(b c d)",
        "package": "fgl",
        "partial": "Node",
        "signature": "Node-\u003em(gr a b)-\u003em(gr a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:delNodesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e m (gr a b) -\u003e m (gr a b)",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#delNodesM",
        "fct-type": "function",
        "title": "delNodesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "delNodesM",
        "normalized": "[Node]-\u003ea(b c d)-\u003ea(b c d)",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "[Node]-\u003em(gr a b)-\u003em(gr a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:edgesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e m [Edge]",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#edgesM",
        "fct-type": "function",
        "title": "edgesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "edgesM",
        "normalized": "a(b c d)-\u003ea[Edge]",
        "package": "fgl",
        "partial": "",
        "signature": "m(gr a b)-\u003em[Edge]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:emptyM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b)",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#emptyM",
        "fct-type": "method",
        "title": "emptyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "emptyM",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:isEmptyM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e m Bool",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#isEmptyM",
        "fct-type": "method",
        "title": "isEmptyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "isEmptyM",
        "normalized": "a(b c d)-\u003ea Bool",
        "package": "fgl",
        "partial": "Empty",
        "signature": "m(gr a b)-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:labEdgesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e m [LEdge b]",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#labEdgesM",
        "fct-type": "method",
        "title": "labEdgesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "labEdgesM",
        "normalized": "a(b c d)-\u003ea[LEdge d]",
        "package": "fgl",
        "partial": "Edges",
        "signature": "m(gr a b)-\u003em[LEdge b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:labM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e Node -\u003e m (Maybe a)",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#labM",
        "fct-type": "function",
        "title": "labM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "labM",
        "normalized": "a(b c d)-\u003eNode-\u003ea(Maybe c)",
        "package": "fgl",
        "partial": "",
        "signature": "m(gr a b)-\u003eNode-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:labNodesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e m [LNode a]",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#labNodesM",
        "fct-type": "method",
        "title": "labNodesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "labNodesM",
        "normalized": "a(b c d)-\u003ea[LNode c]",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "m(gr a b)-\u003em[LNode a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:matchAnyM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e m (GDecomp gr a b)",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#matchAnyM",
        "fct-type": "method",
        "title": "matchAnyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "matchAnyM",
        "normalized": "a(b c d)-\u003ea(GDecomp b c d)",
        "package": "fgl",
        "partial": "Any",
        "signature": "m(gr a b)-\u003em(GDecomp gr a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:matchM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e m (gr a b) -\u003e m (Decomp gr a b)",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#matchM",
        "fct-type": "method",
        "title": "matchM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "matchM",
        "normalized": "Node-\u003ea(b c d)-\u003ea(Decomp b c d)",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003em(gr a b)-\u003em(Decomp gr a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:mkGraphM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "[LNode a] -\u003e [LEdge b] -\u003e m (gr a b)",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#mkGraphM",
        "fct-type": "method",
        "title": "mkGraphM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "mkGraphM",
        "normalized": "[LNode a]-\u003e[LEdge b]-\u003ec(d a b)",
        "package": "fgl",
        "partial": "Graph",
        "signature": "[LNode a]-\u003e[LEdge b]-\u003em(gr a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:mkUGraphM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e [Edge] -\u003e m (gr () ())",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#mkUGraphM",
        "fct-type": "function",
        "title": "mkUGraphM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "mkUGraphM",
        "normalized": "[Node]-\u003e[Edge]-\u003ea(b()())",
        "package": "fgl",
        "partial": "UGraph",
        "signature": "[Node]-\u003e[Edge]-\u003em(gr()())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:newNodesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "Int -\u003e m (gr a b) -\u003e m [Node]",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#newNodesM",
        "fct-type": "function",
        "title": "newNodesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "newNodesM",
        "normalized": "Int-\u003ea(b c d)-\u003ea[Node]",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "Int-\u003em(gr a b)-\u003em[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:noNodesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e m Int",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#noNodesM",
        "fct-type": "method",
        "title": "noNodesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "noNodesM",
        "normalized": "a(b c d)-\u003ea Int",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "m(gr a b)-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:nodeRangeM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e m (Node, Node)",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#nodeRangeM",
        "fct-type": "method",
        "title": "nodeRangeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "nodeRangeM",
        "normalized": "a(b c d)-\u003ea(Node,Node)",
        "package": "fgl",
        "partial": "Range",
        "signature": "m(gr a b)-\u003em(Node,Node)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:nodesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e m [Node]",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#nodesM",
        "fct-type": "function",
        "title": "nodesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "nodesM",
        "normalized": "a(b c d)-\u003ea[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "m(gr a b)-\u003em[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:ufoldM",
      "description": {
        "fct-descr": "\u003cp\u003egraph fold\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Monad",
        "fct-package": "fgl",
        "fct-signature": "(Context a b -\u003e c -\u003e c) -\u003e c -\u003e m (gr a b) -\u003e m c",
        "fct-source": "src/Data-Graph-Inductive-Monad.html#ufoldM",
        "fct-type": "function",
        "title": "ufoldM"
      },
      "index": {
        "description": "graph fold",
        "hierarchy": "Data Graph Inductive Monad",
        "module": "Data.Graph.Inductive.Monad",
        "name": "ufoldM",
        "normalized": "(Context a b-\u003ec-\u003ec)-\u003ec-\u003ed(e a b)-\u003ed c",
        "package": "fgl",
        "partial": "",
        "signature": "(Context a b-\u003ec-\u003ec)-\u003ec-\u003em(gr a b)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility methods to automatically generate and keep track of a mapping\n between node labels and \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html",
        "fct-type": "module",
        "title": "NodeMap"
      },
      "index": {
        "description": "Utility methods to automatically generate and keep track of mapping between node labels and Node",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "NodeMap",
        "normalized": "",
        "package": "fgl",
        "partial": "Node Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#t:NodeMap",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "data",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#NodeMap",
        "fct-type": "data",
        "title": "NodeMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "NodeMap",
        "normalized": "",
        "package": "fgl",
        "partial": "Node Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#t:NodeMapM",
      "description": {
        "fct-descr": "\u003cp\u003eGraph construction monad; handles passing both the \u003ccode\u003e\u003ca\u003eNodeMap\u003c/a\u003e\u003c/code\u003e and the\n \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#NodeMapM",
        "fct-type": "type",
        "title": "NodeMapM"
      },
      "index": {
        "description": "Graph construction monad handles passing both the NodeMap and the Graph",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "NodeMapM",
        "normalized": "",
        "package": "fgl",
        "partial": "Node Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapEdge",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e (a, a) -\u003e g a b -\u003e g a b",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#delMapEdge",
        "fct-type": "function",
        "title": "delMapEdge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "delMapEdge",
        "normalized": "NodeMap a-\u003e(a,a)-\u003eb a c-\u003eb a c",
        "package": "fgl",
        "partial": "Map Edge",
        "signature": "NodeMap a-\u003e(a,a)-\u003eg a b-\u003eg a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapEdgeM",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "(a, a) -\u003e NodeMapM a b g ()",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#delMapEdgeM",
        "fct-type": "function",
        "title": "delMapEdgeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "delMapEdgeM",
        "normalized": "(a,a)-\u003eNodeMapM a b c()",
        "package": "fgl",
        "partial": "Map Edge",
        "signature": "(a,a)-\u003eNodeMapM a b g()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapEdges",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e [(a, a)] -\u003e g a b -\u003e g a b",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#delMapEdges",
        "fct-type": "function",
        "title": "delMapEdges"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "delMapEdges",
        "normalized": "NodeMap a-\u003e[(a,a)]-\u003eb a c-\u003eb a c",
        "package": "fgl",
        "partial": "Map Edges",
        "signature": "NodeMap a-\u003e[(a,a)]-\u003eg a b-\u003eg a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapEdgesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "[(a, a)] -\u003e NodeMapM a b g ()",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#delMapEdgesM",
        "fct-type": "function",
        "title": "delMapEdgesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "delMapEdgesM",
        "normalized": "[(a,a)]-\u003eNodeMapM a b c()",
        "package": "fgl",
        "partial": "Map Edges",
        "signature": "[(a,a)]-\u003eNodeMapM a b g()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapNode",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e a -\u003e g a b -\u003e g a b",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#delMapNode",
        "fct-type": "function",
        "title": "delMapNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "delMapNode",
        "normalized": "NodeMap a-\u003ea-\u003eb a c-\u003eb a c",
        "package": "fgl",
        "partial": "Map Node",
        "signature": "NodeMap a-\u003ea-\u003eg a b-\u003eg a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapNodeM",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "a -\u003e NodeMapM a b g ()",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#delMapNodeM",
        "fct-type": "function",
        "title": "delMapNodeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "delMapNodeM",
        "normalized": "a-\u003eNodeMapM a b c()",
        "package": "fgl",
        "partial": "Map Node",
        "signature": "a-\u003eNodeMapM a b g()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapNodes",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e [a] -\u003e g a b -\u003e g a b",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#delMapNodes",
        "fct-type": "function",
        "title": "delMapNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "delMapNodes",
        "normalized": "NodeMap a-\u003e[a]-\u003eb a c-\u003eb a c",
        "package": "fgl",
        "partial": "Map Nodes",
        "signature": "NodeMap a-\u003e[a]-\u003eg a b-\u003eg a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapNodesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "[a] -\u003e NodeMapM a b g ()",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#delMapNodesM",
        "fct-type": "function",
        "title": "delMapNodesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "delMapNodesM",
        "normalized": "[a]-\u003eNodeMapM a b c()",
        "package": "fgl",
        "partial": "Map Nodes",
        "signature": "[a]-\u003eNodeMapM a b g()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:fromGraph",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a mapping containing the nodes in the given graph.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "g a b -\u003e NodeMap a",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#fromGraph",
        "fct-type": "function",
        "title": "fromGraph"
      },
      "index": {
        "description": "Generate mapping containing the nodes in the given graph",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "fromGraph",
        "normalized": "a b c-\u003eNodeMap b",
        "package": "fgl",
        "partial": "Graph",
        "signature": "g a b-\u003eNodeMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapEdge",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e (a, a, b) -\u003e g a b -\u003e g a b",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#insMapEdge",
        "fct-type": "function",
        "title": "insMapEdge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "insMapEdge",
        "normalized": "NodeMap a-\u003e(a,a,b)-\u003ec a b-\u003ec a b",
        "package": "fgl",
        "partial": "Map Edge",
        "signature": "NodeMap a-\u003e(a,a,b)-\u003eg a b-\u003eg a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapEdgeM",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "(a, a, b) -\u003e NodeMapM a b g ()",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#insMapEdgeM",
        "fct-type": "function",
        "title": "insMapEdgeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "insMapEdgeM",
        "normalized": "(a,a,b)-\u003eNodeMapM a b c()",
        "package": "fgl",
        "partial": "Map Edge",
        "signature": "(a,a,b)-\u003eNodeMapM a b g()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapEdges",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e [(a, a, b)] -\u003e g a b -\u003e g a b",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#insMapEdges",
        "fct-type": "function",
        "title": "insMapEdges"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "insMapEdges",
        "normalized": "NodeMap a-\u003e[(a,a,b)]-\u003ec a b-\u003ec a b",
        "package": "fgl",
        "partial": "Map Edges",
        "signature": "NodeMap a-\u003e[(a,a,b)]-\u003eg a b-\u003eg a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapEdgesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "[(a, a, b)] -\u003e NodeMapM a b g ()",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#insMapEdgesM",
        "fct-type": "function",
        "title": "insMapEdgesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "insMapEdgesM",
        "normalized": "[(a,a,b)]-\u003eNodeMapM a b c()",
        "package": "fgl",
        "partial": "Map Edges",
        "signature": "[(a,a,b)]-\u003eNodeMapM a b g()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapNode",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e a -\u003e g a b -\u003e (g a b, NodeMap a, LNode a)",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#insMapNode",
        "fct-type": "function",
        "title": "insMapNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "insMapNode",
        "normalized": "NodeMap a-\u003ea-\u003eb a c-\u003e(b a c,NodeMap a,LNode a)",
        "package": "fgl",
        "partial": "Map Node",
        "signature": "NodeMap a-\u003ea-\u003eg a b-\u003e(g a b,NodeMap a,LNode a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapNodeM",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "a -\u003e NodeMapM a b g (LNode a)",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#insMapNodeM",
        "fct-type": "function",
        "title": "insMapNodeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "insMapNodeM",
        "normalized": "a-\u003eNodeMapM a b c(LNode a)",
        "package": "fgl",
        "partial": "Map Node",
        "signature": "a-\u003eNodeMapM a b g(LNode a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapNode_",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e a -\u003e g a b -\u003e g a b",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#insMapNode_",
        "fct-type": "function",
        "title": "insMapNode_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "insMapNode_",
        "normalized": "NodeMap a-\u003ea-\u003eb a c-\u003eb a c",
        "package": "fgl",
        "partial": "Map Node",
        "signature": "NodeMap a-\u003ea-\u003eg a b-\u003eg a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapNodes",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e [a] -\u003e g a b -\u003e (g a b, NodeMap a, [LNode a])",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#insMapNodes",
        "fct-type": "function",
        "title": "insMapNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "insMapNodes",
        "normalized": "NodeMap a-\u003e[a]-\u003eb a c-\u003e(b a c,NodeMap a,[LNode a])",
        "package": "fgl",
        "partial": "Map Nodes",
        "signature": "NodeMap a-\u003e[a]-\u003eg a b-\u003e(g a b,NodeMap a,[LNode a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapNodesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "[a] -\u003e NodeMapM a b g [LNode a]",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#insMapNodesM",
        "fct-type": "function",
        "title": "insMapNodesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "insMapNodesM",
        "normalized": "[a]-\u003eNodeMapM a b c[LNode a]",
        "package": "fgl",
        "partial": "Map Nodes",
        "signature": "[a]-\u003eNodeMapM a b g[LNode a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapNodes_",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e [a] -\u003e g a b -\u003e g a b",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#insMapNodes_",
        "fct-type": "function",
        "title": "insMapNodes_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "insMapNodes_",
        "normalized": "NodeMap a-\u003e[a]-\u003eb a c-\u003eb a c",
        "package": "fgl",
        "partial": "Map Nodes",
        "signature": "NodeMap a-\u003e[a]-\u003eg a b-\u003eg a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkEdge",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003e from the node labels.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e (a, a, b) -\u003e Maybe (LEdge b)",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#mkEdge",
        "fct-type": "function",
        "title": "mkEdge"
      },
      "index": {
        "description": "Generate LEdge from the node labels",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "mkEdge",
        "normalized": "NodeMap a-\u003e(a,a,b)-\u003eMaybe(LEdge b)",
        "package": "fgl",
        "partial": "Edge",
        "signature": "NodeMap a-\u003e(a,a,b)-\u003eMaybe(LEdge b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkEdgeM",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "(a, a, b) -\u003e NodeMapM a b g (Maybe (LEdge b))",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#mkEdgeM",
        "fct-type": "function",
        "title": "mkEdgeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "mkEdgeM",
        "normalized": "(a,a,b)-\u003eNodeMapM a b c(Maybe(LEdge b))",
        "package": "fgl",
        "partial": "Edge",
        "signature": "(a,a,b)-\u003eNodeMapM a b g(Maybe(LEdge b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkEdges",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a list of \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e [(a, a, b)] -\u003e Maybe [LEdge b]",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#mkEdges",
        "fct-type": "function",
        "title": "mkEdges"
      },
      "index": {
        "description": "Generates list of LEdge",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "mkEdges",
        "normalized": "NodeMap a-\u003e[(a,a,b)]-\u003eMaybe[LEdge b]",
        "package": "fgl",
        "partial": "Edges",
        "signature": "NodeMap a-\u003e[(a,a,b)]-\u003eMaybe[LEdge b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkEdgesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "[(a, a, b)] -\u003e NodeMapM a b g (Maybe [LEdge b])",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#mkEdgesM",
        "fct-type": "function",
        "title": "mkEdgesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "mkEdgesM",
        "normalized": "[(a,a,b)]-\u003eNodeMapM a b c(Maybe[LEdge b])",
        "package": "fgl",
        "partial": "Edges",
        "signature": "[(a,a,b)]-\u003eNodeMapM a b g(Maybe[LEdge b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkMapGraph",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "[a] -\u003e [(a, a, b)] -\u003e (g a b, NodeMap a)",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#mkMapGraph",
        "fct-type": "function",
        "title": "mkMapGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "mkMapGraph",
        "normalized": "[a]-\u003e[(a,a,b)]-\u003e(c a b,NodeMap a)",
        "package": "fgl",
        "partial": "Map Graph",
        "signature": "[a]-\u003e[(a,a,b)]-\u003e(g a b,NodeMap a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkNode",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a labelled node from the given label.  Will return the same node\n for the same label.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e a -\u003e (LNode a, NodeMap a)",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#mkNode",
        "fct-type": "function",
        "title": "mkNode"
      },
      "index": {
        "description": "Generate labelled node from the given label Will return the same node for the same label",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "mkNode",
        "normalized": "NodeMap a-\u003ea-\u003e(LNode a,NodeMap a)",
        "package": "fgl",
        "partial": "Node",
        "signature": "NodeMap a-\u003ea-\u003e(LNode a,NodeMap a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkNodeM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic node construction.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "a -\u003e NodeMapM a b g (LNode a)",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#mkNodeM",
        "fct-type": "function",
        "title": "mkNodeM"
      },
      "index": {
        "description": "Monadic node construction",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "mkNodeM",
        "normalized": "a-\u003eNodeMapM a b c(LNode a)",
        "package": "fgl",
        "partial": "Node",
        "signature": "a-\u003eNodeMapM a b g(LNode a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkNode_",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a labelled node and throw away the modified \u003ccode\u003e\u003ca\u003eNodeMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e a -\u003e LNode a",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#mkNode_",
        "fct-type": "function",
        "title": "mkNode_"
      },
      "index": {
        "description": "Generate labelled node and throw away the modified NodeMap",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "mkNode_",
        "normalized": "NodeMap a-\u003ea-\u003eLNode a",
        "package": "fgl",
        "partial": "Node",
        "signature": "NodeMap a-\u003ea-\u003eLNode a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkNodes",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a list of nodes.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e [a] -\u003e ([LNode a], NodeMap a)",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#mkNodes",
        "fct-type": "function",
        "title": "mkNodes"
      },
      "index": {
        "description": "Construct list of nodes",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "mkNodes",
        "normalized": "NodeMap a-\u003e[a]-\u003e([LNode a],NodeMap a)",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "NodeMap a-\u003e[a]-\u003e([LNode a],NodeMap a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkNodesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "[a] -\u003e NodeMapM a b g [LNode a]",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#mkNodesM",
        "fct-type": "function",
        "title": "mkNodesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "mkNodesM",
        "normalized": "[a]-\u003eNodeMapM a b c[LNode a]",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "[a]-\u003eNodeMapM a b g[LNode a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkNodes_",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a list of nodes and throw away the modified \u003ccode\u003e\u003ca\u003eNodeMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a -\u003e [a] -\u003e [LNode a]",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#mkNodes_",
        "fct-type": "function",
        "title": "mkNodes_"
      },
      "index": {
        "description": "Construct list of nodes and throw away the modified NodeMap",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "mkNodes_",
        "normalized": "NodeMap a-\u003e[a]-\u003e[LNode a]",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "NodeMap a-\u003e[a]-\u003e[LNode a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new, empty mapping.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "NodeMap a",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new empty mapping",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "new",
        "normalized": "",
        "package": "fgl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRun a construction; return the value of the computation, the modified\n \u003ccode\u003e\u003ca\u003eNodeMap\u003c/a\u003e\u003c/code\u003e, and the modified \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "g a b -\u003e NodeMapM a b g r -\u003e (r, (NodeMap a, g a b))",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Run construction return the value of the computation the modified NodeMap and the modified Graph",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "run",
        "normalized": "a b c-\u003eNodeMapM b c a d-\u003e(d,(NodeMap b,a b c))",
        "package": "fgl",
        "partial": "",
        "signature": "g a b-\u003eNodeMapM a b g r-\u003e(r,(NodeMap a,g a b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:run_",
      "description": {
        "fct-descr": "\u003cp\u003eRun a construction and only return the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.NodeMap",
        "fct-package": "fgl",
        "fct-signature": "g a b -\u003e NodeMapM a b g r -\u003e g a b",
        "fct-source": "src/Data-Graph-Inductive-NodeMap.html#run_",
        "fct-type": "function",
        "title": "run_"
      },
      "index": {
        "description": "Run construction and only return the Graph",
        "hierarchy": "Data Graph Inductive NodeMap",
        "module": "Data.Graph.Inductive.NodeMap",
        "name": "run_",
        "normalized": "a b c-\u003eNodeMapM b c a d-\u003ea b c",
        "package": "fgl",
        "partial": "",
        "signature": "g a b-\u003eNodeMapM a b g r-\u003eg a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-PatriciaTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e\n using big-endian patricia tree (i.e. \u003ca\u003eData.IntMap\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThis module provides the following specialised functions to gain\n more performance, using GHC's RULES pragma:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003einsNode\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003einsEdge\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egmap\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003enmap\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eemap\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.PatriciaTree",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-PatriciaTree.html",
        "fct-type": "module",
        "title": "PatriciaTree"
      },
      "index": {
        "description": "An efficient implementation of Graph using big-endian patricia tree i.e Data.IntMap This module provides the following specialised functions to gain more performance using GHC RULES pragma insNode insEdge gmap nmap emap",
        "hierarchy": "Data Graph Inductive PatriciaTree",
        "module": "Data.Graph.Inductive.PatriciaTree",
        "name": "PatriciaTree",
        "normalized": "",
        "package": "fgl",
        "partial": "Patricia Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-PatriciaTree.html#t:Gr",
      "description": {
        "fct-module": "Data.Graph.Inductive.PatriciaTree",
        "fct-package": "fgl",
        "fct-signature": "data",
        "fct-source": "src/Data-Graph-Inductive-PatriciaTree.html#Gr",
        "fct-type": "data",
        "title": "Gr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive PatriciaTree",
        "module": "Data.Graph.Inductive.PatriciaTree",
        "name": "Gr",
        "normalized": "",
        "package": "fgl",
        "partial": "Gr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-PatriciaTree.html#t:UGr",
      "description": {
        "fct-module": "Data.Graph.Inductive.PatriciaTree",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-PatriciaTree.html#UGr",
        "fct-type": "type",
        "title": "UGr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive PatriciaTree",
        "module": "Data.Graph.Inductive.PatriciaTree",
        "name": "UGr",
        "normalized": "",
        "package": "fgl",
        "partial": "UGr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-ArtPoint.html#",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.ArtPoint",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-ArtPoint.html",
        "fct-type": "module",
        "title": "ArtPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query ArtPoint",
        "module": "Data.Graph.Inductive.Query.ArtPoint",
        "name": "ArtPoint",
        "normalized": "",
        "package": "fgl",
        "partial": "Art Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-ArtPoint.html#v:ap",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the articulation points for a connected undirected graph,\n   by using the low numbers criteria:\n\u003c/p\u003e\u003cp\u003ea) The root node is an articulation point iff it has two or more children.\n\u003c/p\u003e\u003cp\u003eb) An non-root node v is an articulation point iff there exists at least\n      one child w of v such that lowNumber(w) \u003e= dfsNumber(v).\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.ArtPoint",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-ArtPoint.html#ap",
        "fct-type": "function",
        "title": "ap"
      },
      "index": {
        "description": "Finds the articulation points for connected undirected graph by using the low numbers criteria The root node is an articulation point iff it has two or more children An non-root node is an articulation point iff there exists at least one child of such that lowNumber dfsNumber",
        "hierarchy": "Data Graph Inductive Query ArtPoint",
        "module": "Data.Graph.Inductive.Query.ArtPoint",
        "name": "ap",
        "normalized": "a b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BCC.html#",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BCC",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-BCC.html",
        "fct-type": "module",
        "title": "BCC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BCC",
        "module": "Data.Graph.Inductive.Query.BCC",
        "name": "BCC",
        "normalized": "",
        "package": "fgl",
        "partial": "BCC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BCC.html#v:bcc",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the bi-connected components of an undirected connected graph.\nIt first finds the articulation points of the graph. Then it disconnects the\ngraph on each articulation point and computes the connected components.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.BCC",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [gr a b]",
        "fct-source": "src/Data-Graph-Inductive-Query-BCC.html#bcc",
        "fct-type": "function",
        "title": "bcc"
      },
      "index": {
        "description": "Finds the bi-connected components of an undirected connected graph It first finds the articulation points of the graph Then it disconnects the graph on each articulation point and computes the connected components",
        "hierarchy": "Data Graph Inductive Query BCC",
        "module": "Data.Graph.Inductive.Query.BCC",
        "name": "bcc",
        "normalized": "a b c-\u003e[a b c]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[gr a b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBreadth-First Search Algorithms\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html",
        "fct-type": "module",
        "title": "BFS"
      },
      "index": {
        "description": "Breadth-First Search Algorithms",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "BFS",
        "normalized": "",
        "package": "fgl",
        "partial": "BFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bfe",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e gr a b -\u003e [Edge]",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html#bfe",
        "fct-type": "function",
        "title": "bfe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "bfe",
        "normalized": "Node-\u003ea b c-\u003e[Edge]",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003egr a b-\u003e[Edge]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bfen",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "[Edge] -\u003e gr a b -\u003e [Edge]",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html#bfen",
        "fct-type": "function",
        "title": "bfen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "bfen",
        "normalized": "[Edge]-\u003ea b c-\u003e[Edge]",
        "package": "fgl",
        "partial": "",
        "signature": "[Edge]-\u003egr a b-\u003e[Edge]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bfs",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html#bfs",
        "fct-type": "function",
        "title": "bfs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "bfs",
        "normalized": "Node-\u003ea b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003egr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bfsWith",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "(Context a b -\u003e c) -\u003e Node -\u003e gr a b -\u003e [c]",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html#bfsWith",
        "fct-type": "function",
        "title": "bfsWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "bfsWith",
        "normalized": "(Context a b-\u003ec)-\u003eNode-\u003ed a b-\u003e[c]",
        "package": "fgl",
        "partial": "With",
        "signature": "(Context a b-\u003ec)-\u003eNode-\u003egr a b-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bfsn",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html#bfsn",
        "fct-type": "function",
        "title": "bfsn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "bfsn",
        "normalized": "[Node]-\u003ea b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "[Node]-\u003egr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bfsnWith",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "(Context a b -\u003e c) -\u003e [Node] -\u003e gr a b -\u003e [c]",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html#bfsnWith",
        "fct-type": "function",
        "title": "bfsnWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "bfsnWith",
        "normalized": "(Context a b-\u003ec)-\u003e[Node]-\u003ed a b-\u003e[c]",
        "package": "fgl",
        "partial": "With",
        "signature": "(Context a b-\u003ec)-\u003e[Node]-\u003egr a b-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bft",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e gr a b -\u003e RTree",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html#bft",
        "fct-type": "function",
        "title": "bft"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "bft",
        "normalized": "Node-\u003ea b c-\u003eRTree",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003egr a b-\u003eRTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:esp",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e Node -\u003e gr a b -\u003e Path",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html#esp",
        "fct-type": "function",
        "title": "esp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "esp",
        "normalized": "Node-\u003eNode-\u003ea b c-\u003ePath",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003eNode-\u003egr a b-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:lbft",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e gr a b -\u003e LRTree b",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html#lbft",
        "fct-type": "function",
        "title": "lbft"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "lbft",
        "normalized": "Node-\u003ea b c-\u003eLRTree c",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003egr a b-\u003eLRTree b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:lesp",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e Node -\u003e gr a b -\u003e LPath b",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html#lesp",
        "fct-type": "function",
        "title": "lesp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "lesp",
        "normalized": "Node-\u003eNode-\u003ea b c-\u003eLPath c",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003eNode-\u003egr a b-\u003eLPath b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:level",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e gr a b -\u003e [(Node, Int)]",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html#level",
        "fct-type": "function",
        "title": "level"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "level",
        "normalized": "Node-\u003ea b c-\u003e[(Node,Int)]",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003egr a b-\u003e[(Node,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:leveln",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.BFS",
        "fct-package": "fgl",
        "fct-signature": "[(Node, Int)] -\u003e gr a b -\u003e [(Node, Int)]",
        "fct-source": "src/Data-Graph-Inductive-Query-BFS.html#leveln",
        "fct-type": "function",
        "title": "leveln"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query BFS",
        "module": "Data.Graph.Inductive.Query.BFS",
        "name": "leveln",
        "normalized": "[(Node,Int)]-\u003ea b c-\u003e[(Node,Int)]",
        "package": "fgl",
        "partial": "",
        "signature": "[(Node,Int)]-\u003egr a b-\u003e[(Node,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDepth-First Search  \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html",
        "fct-type": "module",
        "title": "DFS"
      },
      "index": {
        "description": "Depth-First Search",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "DFS",
        "normalized": "",
        "package": "fgl",
        "partial": "DFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#t:CFun",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#CFun",
        "fct-type": "type",
        "title": "CFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "CFun",
        "normalized": "",
        "package": "fgl",
        "partial": "CFun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:components",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [[Node]]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#components",
        "fct-type": "function",
        "title": "components"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "components",
        "normalized": "a b c-\u003e[[Node]]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[[Node]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dff",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e gr a b -\u003e [Tree Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#dff",
        "fct-type": "function",
        "title": "dff"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "dff",
        "normalized": "[Node]-\u003ea b c-\u003e[Tree Node]",
        "package": "fgl",
        "partial": "",
        "signature": "[Node]-\u003egr a b-\u003e[Tree Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dff-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [Tree Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#dff%27",
        "fct-type": "function",
        "title": "dff'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "dff'",
        "normalized": "a b c-\u003e[Tree Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[Tree Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dffWith",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "CFun a b c -\u003e [Node] -\u003e gr a b -\u003e [Tree c]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#dffWith",
        "fct-type": "function",
        "title": "dffWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "dffWith",
        "normalized": "CFun a b c-\u003e[Node]-\u003ed a b-\u003e[Tree c]",
        "package": "fgl",
        "partial": "With",
        "signature": "CFun a b c-\u003e[Node]-\u003egr a b-\u003e[Tree c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dffWith-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "CFun a b c -\u003e gr a b -\u003e [Tree c]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#dffWith%27",
        "fct-type": "function",
        "title": "dffWith'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "dffWith'",
        "normalized": "CFun a b c-\u003ed a b-\u003e[Tree c]",
        "package": "fgl",
        "partial": "With'",
        "signature": "CFun a b c-\u003egr a b-\u003e[Tree c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dfs",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#dfs",
        "fct-type": "function",
        "title": "dfs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "dfs",
        "normalized": "[Node]-\u003ea b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "[Node]-\u003egr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dfs-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#dfs%27",
        "fct-type": "function",
        "title": "dfs'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "dfs'",
        "normalized": "a b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dfsWith",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "CFun a b c -\u003e [Node] -\u003e gr a b -\u003e [c]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#dfsWith",
        "fct-type": "function",
        "title": "dfsWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "dfsWith",
        "normalized": "CFun a b c-\u003e[Node]-\u003ed a b-\u003e[c]",
        "package": "fgl",
        "partial": "With",
        "signature": "CFun a b c-\u003e[Node]-\u003egr a b-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dfsWith-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "CFun a b c -\u003e gr a b -\u003e [c]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#dfsWith%27",
        "fct-type": "function",
        "title": "dfsWith'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "dfsWith'",
        "normalized": "CFun a b c-\u003ed a b-\u003e[c]",
        "package": "fgl",
        "partial": "With'",
        "signature": "CFun a b c-\u003egr a b-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:isConnected",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Bool",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#isConnected",
        "fct-type": "function",
        "title": "isConnected"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "isConnected",
        "normalized": "a b c-\u003eBool",
        "package": "fgl",
        "partial": "Connected",
        "signature": "gr a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:noComponents",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Int",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#noComponents",
        "fct-type": "function",
        "title": "noComponents"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "noComponents",
        "normalized": "a b c-\u003eInt",
        "package": "fgl",
        "partial": "Components",
        "signature": "gr a b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:rdff",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e gr a b -\u003e [Tree Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#rdff",
        "fct-type": "function",
        "title": "rdff"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "rdff",
        "normalized": "[Node]-\u003ea b c-\u003e[Tree Node]",
        "package": "fgl",
        "partial": "",
        "signature": "[Node]-\u003egr a b-\u003e[Tree Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:rdff-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [Tree Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#rdff%27",
        "fct-type": "function",
        "title": "rdff'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "rdff'",
        "normalized": "a b c-\u003e[Tree Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[Tree Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:rdfs",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#rdfs",
        "fct-type": "function",
        "title": "rdfs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "rdfs",
        "normalized": "[Node]-\u003ea b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "[Node]-\u003egr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:rdfs-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#rdfs%27",
        "fct-type": "function",
        "title": "rdfs'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "rdfs'",
        "normalized": "a b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:reachable",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#reachable",
        "fct-type": "function",
        "title": "reachable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "reachable",
        "normalized": "Node-\u003ea b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003egr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:scc",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [[Node]]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#scc",
        "fct-type": "function",
        "title": "scc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "scc",
        "normalized": "a b c-\u003e[[Node]]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[[Node]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:topsort",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#topsort",
        "fct-type": "function",
        "title": "topsort"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "topsort",
        "normalized": "a b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:topsort-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [a]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#topsort%27",
        "fct-type": "function",
        "title": "topsort'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "topsort'",
        "normalized": "a b c-\u003e[b]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:udff",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e gr a b -\u003e [Tree Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#udff",
        "fct-type": "function",
        "title": "udff"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "udff",
        "normalized": "[Node]-\u003ea b c-\u003e[Tree Node]",
        "package": "fgl",
        "partial": "",
        "signature": "[Node]-\u003egr a b-\u003e[Tree Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:udff-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [Tree Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#udff%27",
        "fct-type": "function",
        "title": "udff'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "udff'",
        "normalized": "a b c-\u003e[Tree Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[Tree Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:udfs",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#udfs",
        "fct-type": "function",
        "title": "udfs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "udfs",
        "normalized": "[Node]-\u003ea b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "[Node]-\u003egr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:udfs-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#udfs%27",
        "fct-type": "function",
        "title": "udfs'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "udfs'",
        "normalized": "a b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:xdfWith",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "CFun a b [Node] -\u003e CFun a b c -\u003e [Node] -\u003e gr a b -\u003e ([Tree c], gr a b)",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#xdfWith",
        "fct-type": "function",
        "title": "xdfWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "xdfWith",
        "normalized": "CFun a b[Node]-\u003eCFun a b c-\u003e[Node]-\u003ed a b-\u003e([Tree c],d a b)",
        "package": "fgl",
        "partial": "With",
        "signature": "CFun a b[Node]-\u003eCFun a b c-\u003e[Node]-\u003egr a b-\u003e([Tree c],gr a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:xdffWith",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "CFun a b [Node] -\u003e CFun a b c -\u003e [Node] -\u003e gr a b -\u003e [Tree c]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#xdffWith",
        "fct-type": "function",
        "title": "xdffWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "xdffWith",
        "normalized": "CFun a b[Node]-\u003eCFun a b c-\u003e[Node]-\u003ed a b-\u003e[Tree c]",
        "package": "fgl",
        "partial": "With",
        "signature": "CFun a b[Node]-\u003eCFun a b c-\u003e[Node]-\u003egr a b-\u003e[Tree c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:xdfsWith",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.DFS",
        "fct-package": "fgl",
        "fct-signature": "CFun a b [Node] -\u003e CFun a b c -\u003e [Node] -\u003e gr a b -\u003e [c]",
        "fct-source": "src/Data-Graph-Inductive-Query-DFS.html#xdfsWith",
        "fct-type": "function",
        "title": "xdfsWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query DFS",
        "module": "Data.Graph.Inductive.Query.DFS",
        "name": "xdfsWith",
        "normalized": "CFun a b[Node]-\u003eCFun a b c-\u003e[Node]-\u003ed a b-\u003e[c]",
        "package": "fgl",
        "partial": "With",
        "signature": "CFun a b[Node]-\u003eCFun a b c-\u003e[Node]-\u003egr a b-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Dominators.html#",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Dominators",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-Dominators.html",
        "fct-type": "module",
        "title": "Dominators"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Dominators",
        "module": "Data.Graph.Inductive.Query.Dominators",
        "name": "Dominators",
        "normalized": "",
        "package": "fgl",
        "partial": "Dominators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Dominators.html#v:dom",
      "description": {
        "fct-descr": "\u003cp\u003ereturn the set of dominators of the nodes of a graph, given a root\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.Dominators",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e [(Node, [Node])]",
        "fct-source": "src/Data-Graph-Inductive-Query-Dominators.html#dom",
        "fct-type": "function",
        "title": "dom"
      },
      "index": {
        "description": "return the set of dominators of the nodes of graph given root",
        "hierarchy": "Data Graph Inductive Query Dominators",
        "module": "Data.Graph.Inductive.Query.Dominators",
        "name": "dom",
        "normalized": "a b c-\u003eNode-\u003e[(Node,[Node])]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003e[(Node,[Node])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Dominators.html#v:iDom",
      "description": {
        "fct-descr": "\u003cp\u003ereturn immediate dominators for each node of a graph, given a root\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.Dominators",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e [(Node, Node)]",
        "fct-source": "src/Data-Graph-Inductive-Query-Dominators.html#iDom",
        "fct-type": "function",
        "title": "iDom"
      },
      "index": {
        "description": "return immediate dominators for each node of graph given root",
        "hierarchy": "Data Graph Inductive Query Dominators",
        "module": "Data.Graph.Inductive.Query.Dominators",
        "name": "iDom",
        "normalized": "a b c-\u003eNode-\u003e[(Node,Node)]",
        "package": "fgl",
        "partial": "Dom",
        "signature": "gr a b-\u003eNode-\u003e[(Node,Node)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGraph Voronoi Diagram \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Query.GVD",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-GVD.html",
        "fct-type": "module",
        "title": "GVD"
      },
      "index": {
        "description": "Graph Voronoi Diagram",
        "hierarchy": "Data Graph Inductive Query GVD",
        "module": "Data.Graph.Inductive.Query.GVD",
        "name": "GVD",
        "normalized": "",
        "package": "fgl",
        "partial": "GVD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#t:Voronoi",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.GVD",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Query-GVD.html#Voronoi",
        "fct-type": "type",
        "title": "Voronoi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query GVD",
        "module": "Data.Graph.Inductive.Query.GVD",
        "name": "Voronoi",
        "normalized": "",
        "package": "fgl",
        "partial": "Voronoi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#v:gvdIn",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.GVD",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e gr a b -\u003e Voronoi b",
        "fct-source": "src/Data-Graph-Inductive-Query-GVD.html#gvdIn",
        "fct-type": "function",
        "title": "gvdIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query GVD",
        "module": "Data.Graph.Inductive.Query.GVD",
        "name": "gvdIn",
        "normalized": "[Node]-\u003ea b c-\u003eVoronoi c",
        "package": "fgl",
        "partial": "In",
        "signature": "[Node]-\u003egr a b-\u003eVoronoi b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#v:gvdOut",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.GVD",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e gr a b -\u003e Voronoi b",
        "fct-source": "src/Data-Graph-Inductive-Query-GVD.html#gvdOut",
        "fct-type": "function",
        "title": "gvdOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query GVD",
        "module": "Data.Graph.Inductive.Query.GVD",
        "name": "gvdOut",
        "normalized": "[Node]-\u003ea b c-\u003eVoronoi c",
        "package": "fgl",
        "partial": "Out",
        "signature": "[Node]-\u003egr a b-\u003eVoronoi b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#v:nearestDist",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.GVD",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e Voronoi b -\u003e Maybe b",
        "fct-source": "src/Data-Graph-Inductive-Query-GVD.html#nearestDist",
        "fct-type": "function",
        "title": "nearestDist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query GVD",
        "module": "Data.Graph.Inductive.Query.GVD",
        "name": "nearestDist",
        "normalized": "Node-\u003eVoronoi a-\u003eMaybe a",
        "package": "fgl",
        "partial": "Dist",
        "signature": "Node-\u003eVoronoi b-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#v:nearestNode",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.GVD",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e Voronoi b -\u003e Maybe Node",
        "fct-source": "src/Data-Graph-Inductive-Query-GVD.html#nearestNode",
        "fct-type": "function",
        "title": "nearestNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query GVD",
        "module": "Data.Graph.Inductive.Query.GVD",
        "name": "nearestNode",
        "normalized": "Node-\u003eVoronoi a-\u003eMaybe Node",
        "package": "fgl",
        "partial": "Node",
        "signature": "Node-\u003eVoronoi b-\u003eMaybe Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#v:nearestPath",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.GVD",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e Voronoi b -\u003e Maybe Path",
        "fct-source": "src/Data-Graph-Inductive-Query-GVD.html#nearestPath",
        "fct-type": "function",
        "title": "nearestPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query GVD",
        "module": "Data.Graph.Inductive.Query.GVD",
        "name": "nearestPath",
        "normalized": "Node-\u003eVoronoi a-\u003eMaybe Path",
        "package": "fgl",
        "partial": "Path",
        "signature": "Node-\u003eVoronoi b-\u003eMaybe Path"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#v:voronoiSet",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.GVD",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e Voronoi b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-GVD.html#voronoiSet",
        "fct-type": "function",
        "title": "voronoiSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query GVD",
        "module": "Data.Graph.Inductive.Query.GVD",
        "name": "voronoiSet",
        "normalized": "Node-\u003eVoronoi a-\u003e[Node]",
        "package": "fgl",
        "partial": "Set",
        "signature": "Node-\u003eVoronoi b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Indep.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaximum Independent Node Sets\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Query.Indep",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-Indep.html",
        "fct-type": "module",
        "title": "Indep"
      },
      "index": {
        "description": "Maximum Independent Node Sets",
        "hierarchy": "Data Graph Inductive Query Indep",
        "module": "Data.Graph.Inductive.Query.Indep",
        "name": "Indep",
        "normalized": "",
        "package": "fgl",
        "partial": "Indep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Indep.html#v:indep",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Indep",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-Indep.html#indep",
        "fct-type": "function",
        "title": "indep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Indep",
        "module": "Data.Graph.Inductive.Query.Indep",
        "name": "indep",
        "normalized": "a b c-\u003e[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMinimum-Spanning-Tree Algorithms \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Query.MST",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-MST.html",
        "fct-type": "module",
        "title": "MST"
      },
      "index": {
        "description": "Minimum-Spanning-Tree Algorithms",
        "hierarchy": "Data Graph Inductive Query MST",
        "module": "Data.Graph.Inductive.Query.MST",
        "name": "MST",
        "normalized": "",
        "package": "fgl",
        "partial": "MST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MST.html#v:msPath",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.MST",
        "fct-package": "fgl",
        "fct-signature": "LRTree b -\u003e Node -\u003e Node -\u003e Path",
        "fct-source": "src/Data-Graph-Inductive-Query-MST.html#msPath",
        "fct-type": "function",
        "title": "msPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query MST",
        "module": "Data.Graph.Inductive.Query.MST",
        "name": "msPath",
        "normalized": "LRTree a-\u003eNode-\u003eNode-\u003ePath",
        "package": "fgl",
        "partial": "Path",
        "signature": "LRTree b-\u003eNode-\u003eNode-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MST.html#v:msTree",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.MST",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e LRTree b",
        "fct-source": "src/Data-Graph-Inductive-Query-MST.html#msTree",
        "fct-type": "function",
        "title": "msTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query MST",
        "module": "Data.Graph.Inductive.Query.MST",
        "name": "msTree",
        "normalized": "a b c-\u003eLRTree c",
        "package": "fgl",
        "partial": "Tree",
        "signature": "gr a b-\u003eLRTree b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MST.html#v:msTreeAt",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.MST",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e gr a b -\u003e LRTree b",
        "fct-source": "src/Data-Graph-Inductive-Query-MST.html#msTreeAt",
        "fct-type": "function",
        "title": "msTreeAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query MST",
        "module": "Data.Graph.Inductive.Query.MST",
        "name": "msTreeAt",
        "normalized": "Node-\u003ea b c-\u003eLRTree c",
        "package": "fgl",
        "partial": "Tree At",
        "signature": "Node-\u003egr a b-\u003eLRTree b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaximum Flow algorithm\n We are given a flow network G=(V,E) with source s and sink t where each\n edge (u,v) in E has a nonnegative capacity c(u,v)\u003e=0, and we wish to\n find a flow of maximum value from s to t.\n\u003c/p\u003e\u003cp\u003eA flow in G=(V,E) is a real-valued function f:VxV-\u003eR that satisfies:\n\u003c/p\u003e\u003cpre\u003e\n For all u,v in V, f(u,v)\u003c=c(u,v)\n For all u,v in V, f(u,v)=-f(v,u)\n For all u in V-{s,t}, Sum{f(u,v):v in V } = 0\n\u003c/pre\u003e\u003cp\u003eThe value of a flow f is defined as |f|=Sum {f(s,v)|v in V}, i.e.,\n the total net flow out of the source.\n\u003c/p\u003e\u003cp\u003eIn this module we implement the Edmonds-Karp algorithm, which is the\n Ford-Fulkerson method but using the shortest path from s to t as the\n augmenting path along which the flow is incremented.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow.html",
        "fct-type": "module",
        "title": "MaxFlow"
      },
      "index": {
        "description": "Maximum Flow algorithm We are given flow network with source and sink where each edge in has nonnegative capacity and we wish to find flow of maximum value from to flow in is real-valued function VxV that satisfies For all in For all in For all in Sum in The value of flow is defined as Sum in i.e the total net flow out of the source In this module we implement the Edmonds-Karp algorithm which is the Ford-Fulkerson method but using the shortest path from to as the augmenting path along which the flow is incremented",
        "hierarchy": "Data Graph Inductive Query MaxFlow",
        "module": "Data.Graph.Inductive.Query.MaxFlow",
        "name": "MaxFlow",
        "normalized": "",
        "package": "fgl",
        "partial": "Max Flow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:augmentGraph",
      "description": {
        "fct-descr": "\u003cpre\u003e\n                 i                                  0\n For each edge a---\u003eb insert into graph the edge a\u003c---b . Then change the\n                            i         (i,0,i)\n label of every edge from a----\u003eb to a-------\u003eb\n\u003c/pre\u003e\u003cp\u003ewhere label (x,y,z)=(Max Capacity, Current flow, Residual capacity)\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e gr a (b, b, b)",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow.html#augmentGraph",
        "fct-type": "function",
        "title": "augmentGraph"
      },
      "index": {
        "description": "For each edge insert into graph the edge Then change the label of every edge from to where label Max Capacity Current flow Residual capacity",
        "hierarchy": "Data Graph Inductive Query MaxFlow",
        "module": "Data.Graph.Inductive.Query.MaxFlow",
        "name": "augmentGraph",
        "normalized": "a b c-\u003ea b(c,c,c)",
        "package": "fgl",
        "partial": "Graph",
        "signature": "gr a b-\u003egr a(b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:getRevEdges",
      "description": {
        "fct-descr": "\u003cpre\u003e\n                 i                                 0\n For each edge a---\u003eb this function returns edge b---\u003ea .\n          i\n Edges a\u003c---\u003eb are ignored\n          j\n\u003c/pre\u003e",
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow",
        "fct-package": "fgl",
        "fct-signature": "[(Node, Node)] -\u003e [(Node, Node, b)]",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow.html#getRevEdges",
        "fct-type": "function",
        "title": "getRevEdges"
      },
      "index": {
        "description": "For each edge this function returns edge Edges are ignored",
        "hierarchy": "Data Graph Inductive Query MaxFlow",
        "module": "Data.Graph.Inductive.Query.MaxFlow",
        "name": "getRevEdges",
        "normalized": "[(Node,Node)]-\u003e[(Node,Node,a)]",
        "package": "fgl",
        "partial": "Rev Edges",
        "signature": "[(Node,Node)]-\u003e[(Node,Node,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:maxFlow",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the value of a maximumflow\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e Node -\u003e b",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow.html#maxFlow",
        "fct-type": "function",
        "title": "maxFlow"
      },
      "index": {
        "description": "Compute the value of maximumflow",
        "hierarchy": "Data Graph Inductive Query MaxFlow",
        "module": "Data.Graph.Inductive.Query.MaxFlow",
        "name": "maxFlow",
        "normalized": "a b c-\u003eNode-\u003eNode-\u003ec",
        "package": "fgl",
        "partial": "Flow",
        "signature": "gr a b-\u003eNode-\u003eNode-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:maxFlowgraph",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the maximum flow from s to t on a graph whose edges are labeled\n with x, which is the max capacity and where not all edges need to be of\n the form a\u003c----\u003eb. Return the flow as a grap whose edges are labeled with\n (y,x) = (current flow, max capacity).\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e Node -\u003e gr a (b, b)",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow.html#maxFlowgraph",
        "fct-type": "function",
        "title": "maxFlowgraph"
      },
      "index": {
        "description": "Compute the maximum flow from to on graph whose edges are labeled with which is the max capacity and where not all edges need to be of the form Return the flow as grap whose edges are labeled with current flow max capacity",
        "hierarchy": "Data Graph Inductive Query MaxFlow",
        "module": "Data.Graph.Inductive.Query.MaxFlow",
        "name": "maxFlowgraph",
        "normalized": "a b c-\u003eNode-\u003eNode-\u003ea b(c,c)",
        "package": "fgl",
        "partial": "Flowgraph",
        "signature": "gr a b-\u003eNode-\u003eNode-\u003egr a(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:mf",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the flow from s to t on a graph whose edges are labeled with\n x, which is the max capacity and where not all edges need to be of the\n form a\u003c----\u003eb. Return the flow as a grap whose edges are labeled with\n (x,y,z)=(max capacity,current flow,residual capacity) and all edges\n are of the form a\u003c----\u003eb\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e Node -\u003e Node -\u003e gr a (b, b, b)",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow.html#mf",
        "fct-type": "function",
        "title": "mf"
      },
      "index": {
        "description": "Compute the flow from to on graph whose edges are labeled with which is the max capacity and where not all edges need to be of the form Return the flow as grap whose edges are labeled with max capacity current flow residual capacity and all edges are of the form",
        "hierarchy": "Data Graph Inductive Query MaxFlow",
        "module": "Data.Graph.Inductive.Query.MaxFlow",
        "name": "mf",
        "normalized": "a b c-\u003eNode-\u003eNode-\u003ea b(c,c,c)",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003eNode-\u003eNode-\u003egr a(b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:mfmg",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the flow from s to t on a graph whose edges are labeled with\n (x,y,z)=(max capacity,current flow,residual capacity) and all edges\n are of the form a\u003c----\u003eb. First compute the residual graph, that is,\n delete those edges whose residual capacity is zero. Then compute the\n shortest augmenting path from s to t, and finally update the flow and\n residual capacity along that path by using the minimum capacity of\n that path. Repeat this process until no shortest path from s to t exist.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow",
        "fct-package": "fgl",
        "fct-signature": "gr a (b, b, b) -\u003e Node -\u003e Node -\u003e gr a (b, b, b)",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow.html#mfmg",
        "fct-type": "function",
        "title": "mfmg"
      },
      "index": {
        "description": "Compute the flow from to on graph whose edges are labeled with max capacity current flow residual capacity and all edges are of the form First compute the residual graph that is delete those edges whose residual capacity is zero Then compute the shortest augmenting path from to and finally update the flow and residual capacity along that path by using the minimum capacity of that path Repeat this process until no shortest path from to exist",
        "hierarchy": "Data Graph Inductive Query MaxFlow",
        "module": "Data.Graph.Inductive.Query.MaxFlow",
        "name": "mfmg",
        "normalized": "a b(c,c,c)-\u003eNode-\u003eNode-\u003ea b(c,c,c)",
        "package": "fgl",
        "partial": "",
        "signature": "gr a(b,b,b)-\u003eNode-\u003eNode-\u003egr a(b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:updAdjList",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a successor or predecessor list for node u and given node v, find\n the label corresponding to edge (u,v) and update the flow and residual\n capacity of that edge's label. Then return the updated list.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow",
        "fct-package": "fgl",
        "fct-signature": "[((b, b, b), Node)] -\u003e Node -\u003e b -\u003e Bool -\u003e [((b, b, b), Node)]",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow.html#updAdjList",
        "fct-type": "function",
        "title": "updAdjList"
      },
      "index": {
        "description": "Given successor or predecessor list for node and given node find the label corresponding to edge and update the flow and residual capacity of that edge label Then return the updated list",
        "hierarchy": "Data Graph Inductive Query MaxFlow",
        "module": "Data.Graph.Inductive.Query.MaxFlow",
        "name": "updAdjList",
        "normalized": "[((a,a,a),Node)]-\u003eNode-\u003ea-\u003eBool-\u003e[((a,a,a),Node)]",
        "package": "fgl",
        "partial": "Adj List",
        "signature": "[((b,b,b),Node)]-\u003eNode-\u003eb-\u003eBool-\u003e[((b,b,b),Node)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:updateFlow",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate flow and residual capacity along augmenting path from s to t in\n graph G. For a path [u,v,w,...] find the node u in G and its successor and\n predecessor list, then update the corresponding edges (u,v) and (v,u) on\n those lists by using the minimum residual capacity of the path.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow",
        "fct-package": "fgl",
        "fct-signature": "Path -\u003e b -\u003e gr a (b, b, b) -\u003e gr a (b, b, b)",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow.html#updateFlow",
        "fct-type": "function",
        "title": "updateFlow"
      },
      "index": {
        "description": "Update flow and residual capacity along augmenting path from to in graph For path find the node in and its successor and predecessor list then update the corresponding edges and on those lists by using the minimum residual capacity of the path",
        "hierarchy": "Data Graph Inductive Query MaxFlow",
        "module": "Data.Graph.Inductive.Query.MaxFlow",
        "name": "updateFlow",
        "normalized": "Path-\u003ea-\u003eb c(a,a,a)-\u003eb c(a,a,a)",
        "package": "fgl",
        "partial": "Flow",
        "signature": "Path-\u003eb-\u003egr a(b,b,b)-\u003egr a(b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow2.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAlternative Maximum Flow\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow2",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow2.html",
        "fct-type": "module",
        "title": "MaxFlow2"
      },
      "index": {
        "description": "Alternative Maximum Flow",
        "hierarchy": "Data Graph Inductive Query MaxFlow2",
        "module": "Data.Graph.Inductive.Query.MaxFlow2",
        "name": "MaxFlow2",
        "normalized": "",
        "package": "fgl",
        "partial": "Max Flow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow2.html#t:Network",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow2",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow2.html#Network",
        "fct-type": "type",
        "title": "Network"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query MaxFlow2",
        "module": "Data.Graph.Inductive.Query.MaxFlow2",
        "name": "Network",
        "normalized": "",
        "package": "fgl",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow2.html#v:ekFused",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow2",
        "fct-package": "fgl",
        "fct-signature": "Network -\u003e Node -\u003e Node -\u003e (Network, Double)",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow2.html#ekFused",
        "fct-type": "function",
        "title": "ekFused"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query MaxFlow2",
        "module": "Data.Graph.Inductive.Query.MaxFlow2",
        "name": "ekFused",
        "normalized": "Network-\u003eNode-\u003eNode-\u003e(Network,Double)",
        "package": "fgl",
        "partial": "Fused",
        "signature": "Network-\u003eNode-\u003eNode-\u003e(Network,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow2.html#v:ekList",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow2",
        "fct-package": "fgl",
        "fct-signature": "Network -\u003e Node -\u003e Node -\u003e (Network, Double)",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow2.html#ekList",
        "fct-type": "function",
        "title": "ekList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query MaxFlow2",
        "module": "Data.Graph.Inductive.Query.MaxFlow2",
        "name": "ekList",
        "normalized": "Network-\u003eNode-\u003eNode-\u003e(Network,Double)",
        "package": "fgl",
        "partial": "List",
        "signature": "Network-\u003eNode-\u003eNode-\u003e(Network,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow2.html#v:ekSimple",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.MaxFlow2",
        "fct-package": "fgl",
        "fct-signature": "Network -\u003e Node -\u003e Node -\u003e (Network, Double)",
        "fct-source": "src/Data-Graph-Inductive-Query-MaxFlow2.html#ekSimple",
        "fct-type": "function",
        "title": "ekSimple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query MaxFlow2",
        "module": "Data.Graph.Inductive.Query.MaxFlow2",
        "name": "ekSimple",
        "normalized": "Network-\u003eNode-\u003eNode-\u003e(Network,Double)",
        "package": "fgl",
        "partial": "Simple",
        "signature": "Network-\u003eNode-\u003eNode-\u003e(Network,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Graph Algorithms\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "Monadic Graph Algorithms",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "fgl",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#t:GT",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "data",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#GT",
        "fct-type": "data",
        "title": "GT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "GT",
        "normalized": "",
        "package": "fgl",
        "partial": "GT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:-62--60-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(a -\u003e b) -\u003e (c -\u003e d) -\u003e (a, c) -\u003e (b, d)",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#%3E%3C",
        "fct-type": "function",
        "title": "(\u003e\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "(\u003e\u003c) \u003e\u003c",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
        "package": "fgl",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a,c)-\u003e(b,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:MGT",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "MGT (m g -\u003e m (a, g))",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#GT",
        "fct-type": "function",
        "title": "MGT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "MGT",
        "normalized": "MGT(a b-\u003ea(c,b))",
        "package": "fgl",
        "partial": "MGT",
        "signature": "MGT(m g-\u003em(a,g))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:apply",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "GT m g a -\u003e m g -\u003e m (a, g)",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "apply",
        "normalized": "GT a b c-\u003ea b-\u003ea(c,b)",
        "package": "fgl",
        "partial": "",
        "signature": "GT m g a-\u003em g-\u003em(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:apply-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "GT m g a -\u003e g -\u003e m (a, g)",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#apply%27",
        "fct-type": "function",
        "title": "apply'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "apply'",
        "normalized": "GT a b c-\u003eb-\u003ea(c,b)",
        "package": "fgl",
        "partial": "",
        "signature": "GT m g a-\u003eg-\u003em(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:applyWith",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(a -\u003e b) -\u003e GT m g a -\u003e m g -\u003e m (b, g)",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#applyWith",
        "fct-type": "function",
        "title": "applyWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "applyWith",
        "normalized": "(a-\u003eb)-\u003eGT c d a-\u003ec d-\u003ec(b,d)",
        "package": "fgl",
        "partial": "With",
        "signature": "(a-\u003eb)-\u003eGT m g a-\u003em g-\u003em(b,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:applyWith-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(a -\u003e b) -\u003e GT m g a -\u003e g -\u003e m (b, g)",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#applyWith%27",
        "fct-type": "function",
        "title": "applyWith'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "applyWith'",
        "normalized": "(a-\u003eb)-\u003eGT c d a-\u003ed-\u003ec(b,d)",
        "package": "fgl",
        "partial": "With'",
        "signature": "(a-\u003eb)-\u003eGT m g a-\u003eg-\u003em(b,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:condMGT",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(m s -\u003e m Bool) -\u003e GT m s a -\u003e GT m s a -\u003e GT m s a",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#condMGT",
        "fct-type": "function",
        "title": "condMGT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "condMGT",
        "normalized": "(a b-\u003ea Bool)-\u003eGT a b c-\u003eGT a b c-\u003eGT a b c",
        "package": "fgl",
        "partial": "MGT",
        "signature": "(m s-\u003em Bool)-\u003eGT m s a-\u003eGT m s a-\u003eGT m s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:condMGT-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(s -\u003e Bool) -\u003e GT m s a -\u003e GT m s a -\u003e GT m s a",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#condMGT%27",
        "fct-type": "function",
        "title": "condMGT'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "condMGT'",
        "normalized": "(a-\u003eBool)-\u003eGT b a c-\u003eGT b a c-\u003eGT b a c",
        "package": "fgl",
        "partial": "MGT'",
        "signature": "(s-\u003eBool)-\u003eGT m s a-\u003eGT m s a-\u003eGT m s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:dffM",
      "description": {
        "fct-descr": "\u003cp\u003edepth-first search yielding dfs forest\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e GT m (gr a b) [Tree Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#dffM",
        "fct-type": "function",
        "title": "dffM"
      },
      "index": {
        "description": "depth-first search yielding dfs forest",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "dffM",
        "normalized": "[Node]-\u003eGT a(b c d)[Tree Node]",
        "package": "fgl",
        "partial": "",
        "signature": "[Node]-\u003eGT m(gr a b)[Tree Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:dfsGT",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic graph algorithms are defined in two steps:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e define the (possibly parameterized) graph transformer (e.g., dfsGT)\n  (2) run the graph transformer (applied to arguments) (e.g., dfsM)\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e GT m (gr a b) [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#dfsGT",
        "fct-type": "function",
        "title": "dfsGT"
      },
      "index": {
        "description": "Monadic graph algorithms are defined in two steps define the possibly parameterized graph transformer e.g dfsGT run the graph transformer applied to arguments e.g dfsM",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "dfsGT",
        "normalized": "[Node]-\u003eGT a(b c d)[Node]",
        "package": "fgl",
        "partial": "GT",
        "signature": "[Node]-\u003eGT m(gr a b)[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:dfsM",
      "description": {
        "fct-descr": "\u003cp\u003edepth-first search yielding number of nodes\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e m (gr a b) -\u003e m [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#dfsM",
        "fct-type": "function",
        "title": "dfsM"
      },
      "index": {
        "description": "depth-first search yielding number of nodes",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "dfsM",
        "normalized": "[Node]-\u003ea(b c d)-\u003ea[Node]",
        "package": "fgl",
        "partial": "",
        "signature": "[Node]-\u003em(gr a b)-\u003em[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:dfsM-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e m [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#dfsM%27",
        "fct-type": "function",
        "title": "dfsM'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "dfsM'",
        "normalized": "a(b c d)-\u003ea[Node]",
        "package": "fgl",
        "partial": "M'",
        "signature": "m(gr a b)-\u003em[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:getContext",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "GT m (gr a b) (Context a b)",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#getContext",
        "fct-type": "function",
        "title": "getContext"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "getContext",
        "normalized": "",
        "package": "fgl",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:getNode",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "GT m (gr a b) Node",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#getNode",
        "fct-type": "function",
        "title": "getNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "getNode",
        "normalized": "",
        "package": "fgl",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:getNodes",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "GT m (gr a b) [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#getNodes",
        "fct-type": "function",
        "title": "getNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "getNodes",
        "normalized": "GT a(b c d)[Node]",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "GT m(gr a b)[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:getNodes-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "GT m (gr a b) [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#getNodes%27",
        "fct-type": "function",
        "title": "getNodes'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "getNodes'",
        "normalized": "GT a(b c d)[Node]",
        "package": "fgl",
        "partial": "Nodes'",
        "signature": "GT m(gr a b)[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphDff",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "[Node] -\u003e m (gr a b) -\u003e m [Tree Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#graphDff",
        "fct-type": "function",
        "title": "graphDff"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "graphDff",
        "normalized": "[Node]-\u003ea(b c d)-\u003ea[Tree Node]",
        "package": "fgl",
        "partial": "Dff",
        "signature": "[Node]-\u003em(gr a b)-\u003em[Tree Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphDff-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e m [Tree Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#graphDff%27",
        "fct-type": "function",
        "title": "graphDff'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "graphDff'",
        "normalized": "a(b c d)-\u003ea[Tree Node]",
        "package": "fgl",
        "partial": "Dff'",
        "signature": "m(gr a b)-\u003em[Tree Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphFilter",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(Context a b -\u003e Bool) -\u003e m (gr a b) -\u003e m [Context a b]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#graphFilter",
        "fct-type": "function",
        "title": "graphFilter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "graphFilter",
        "normalized": "(Context a b-\u003eBool)-\u003ec(d a b)-\u003ec[Context a b]",
        "package": "fgl",
        "partial": "Filter",
        "signature": "(Context a b-\u003eBool)-\u003em(gr a b)-\u003em[Context a b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphFilterM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(Context a b -\u003e Bool) -\u003e GT m (gr a b) [Context a b]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#graphFilterM",
        "fct-type": "function",
        "title": "graphFilterM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "graphFilterM",
        "normalized": "(Context a b-\u003eBool)-\u003eGT c(d a b)[Context a b]",
        "package": "fgl",
        "partial": "Filter",
        "signature": "(Context a b-\u003eBool)-\u003eGT m(gr a b)[Context a b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphNodes",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "m (gr a b) -\u003e m [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#graphNodes",
        "fct-type": "function",
        "title": "graphNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "graphNodes",
        "normalized": "a(b c d)-\u003ea[Node]",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "m(gr a b)-\u003em[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphNodesM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "GT m (gr a b) [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#graphNodesM",
        "fct-type": "function",
        "title": "graphNodesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "graphNodesM",
        "normalized": "GT a(b c d)[Node]",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "GT m(gr a b)[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphNodesM0",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "GT m (gr a b) [Node]",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#graphNodesM0",
        "fct-type": "function",
        "title": "graphNodesM0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "graphNodesM0",
        "normalized": "GT a(b c d)[Node]",
        "package": "fgl",
        "partial": "Nodes",
        "signature": "GT m(gr a b)[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphRec",
      "description": {
        "fct-descr": "\u003cp\u003eencapsulates a simple recursion schema on graphs\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "GT m (gr a b) c -\u003e (c -\u003e d -\u003e d) -\u003e d -\u003e GT m (gr a b) d",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#graphRec",
        "fct-type": "function",
        "title": "graphRec"
      },
      "index": {
        "description": "encapsulates simple recursion schema on graphs",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "graphRec",
        "normalized": "GT a(b c d)e-\u003e(e-\u003ef-\u003ef)-\u003ef-\u003eGT a(b c d)f",
        "package": "fgl",
        "partial": "Rec",
        "signature": "GT m(gr a b)c-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003eGT m(gr a b)d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphRec-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "GT m (gr a b) c -\u003e (c -\u003e d -\u003e d) -\u003e d -\u003e GT m (gr a b) d",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#graphRec%27",
        "fct-type": "function",
        "title": "graphRec'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "graphRec'",
        "normalized": "GT a(b c d)e-\u003e(e-\u003ef-\u003ef)-\u003ef-\u003eGT a(b c d)f",
        "package": "fgl",
        "partial": "Rec'",
        "signature": "GT m(gr a b)c-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003eGT m(gr a b)d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphUFold",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(Context a b -\u003e c -\u003e c) -\u003e c -\u003e GT m (gr a b) c",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#graphUFold",
        "fct-type": "function",
        "title": "graphUFold"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "graphUFold",
        "normalized": "(Context a b-\u003ec-\u003ec)-\u003ec-\u003eGT d(e a b)c",
        "package": "fgl",
        "partial": "UFold",
        "signature": "(Context a b-\u003ec-\u003ec)-\u003ec-\u003eGT m(gr a b)c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:mapFst",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(a -\u003e b) -\u003e (a, c) -\u003e (b, c)",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#mapFst",
        "fct-type": "function",
        "title": "mapFst"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "mapFst",
        "normalized": "(a-\u003eb)-\u003e(a,c)-\u003e(b,c)",
        "package": "fgl",
        "partial": "Fst",
        "signature": "(a-\u003eb)-\u003e(a,c)-\u003e(b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:mapSnd",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(a -\u003e b) -\u003e (c, a) -\u003e (c, b)",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#mapSnd",
        "fct-type": "function",
        "title": "mapSnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "mapSnd",
        "normalized": "(a-\u003eb)-\u003e(c,a)-\u003e(c,b)",
        "package": "fgl",
        "partial": "Snd",
        "signature": "(a-\u003eb)-\u003e(c,a)-\u003e(c,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:orP",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(a -\u003e Bool) -\u003e (b -\u003e Bool) -\u003e (a, b) -\u003e Bool",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#orP",
        "fct-type": "function",
        "title": "orP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "orP",
        "normalized": "(a-\u003eBool)-\u003e(b-\u003eBool)-\u003e(a,b)-\u003eBool",
        "package": "fgl",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e(b-\u003eBool)-\u003e(a,b)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:recMGT",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(m s -\u003e m Bool) -\u003e GT m s a -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e GT m s b",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#recMGT",
        "fct-type": "function",
        "title": "recMGT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "recMGT",
        "normalized": "(a b-\u003ea Bool)-\u003eGT a b c-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003eGT a b d",
        "package": "fgl",
        "partial": "MGT",
        "signature": "(m s-\u003em Bool)-\u003eGT m s a-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eGT m s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:recMGT-39-",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "(s -\u003e Bool) -\u003e GT m s a -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e GT m s b",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#recMGT%27",
        "fct-type": "function",
        "title": "recMGT'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "recMGT'",
        "normalized": "(a-\u003eBool)-\u003eGT b a c-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003eGT b a d",
        "package": "fgl",
        "partial": "MGT'",
        "signature": "(s-\u003eBool)-\u003eGT m s a-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eGT m s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:runGT",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "GT m g a -\u003e m g -\u003e m a",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#runGT",
        "fct-type": "function",
        "title": "runGT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "runGT",
        "normalized": "GT a b c-\u003ea b-\u003ea c",
        "package": "fgl",
        "partial": "GT",
        "signature": "GT m g a-\u003em g-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:sucGT",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e GT m (gr a b) (Maybe [Node])",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#sucGT",
        "fct-type": "function",
        "title": "sucGT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "sucGT",
        "normalized": "Node-\u003eGT a(b c d)(Maybe[Node])",
        "package": "fgl",
        "partial": "GT",
        "signature": "Node-\u003eGT m(gr a b)(Maybe[Node])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:sucM",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.Monad",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e m (gr a b) -\u003e m (Maybe [Node])",
        "fct-source": "src/Data-Graph-Inductive-Query-Monad.html#sucM",
        "fct-type": "function",
        "title": "sucM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query Monad",
        "module": "Data.Graph.Inductive.Query.Monad",
        "name": "sucM",
        "normalized": "Node-\u003ea(b c d)-\u003ea(Maybe[Node])",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003em(gr a b)-\u003em(Maybe[Node])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-SP.html#",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.SP",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-SP.html",
        "fct-type": "module",
        "title": "SP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query SP",
        "module": "Data.Graph.Inductive.Query.SP",
        "name": "SP",
        "normalized": "",
        "package": "fgl",
        "partial": "SP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-SP.html#v:dijkstra",
      "description": {
        "fct-descr": "\u003cp\u003eImplementation of Dijkstra's shortest path algorithm  \n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.SP",
        "fct-package": "fgl",
        "fct-signature": "Heap b (LPath b) -\u003e gr a b -\u003e LRTree b",
        "fct-source": "src/Data-Graph-Inductive-Query-SP.html#dijkstra",
        "fct-type": "function",
        "title": "dijkstra"
      },
      "index": {
        "description": "Implementation of Dijkstra shortest path algorithm",
        "hierarchy": "Data Graph Inductive Query SP",
        "module": "Data.Graph.Inductive.Query.SP",
        "name": "dijkstra",
        "normalized": "Heap a(LPath a)-\u003eb c a-\u003eLRTree a",
        "package": "fgl",
        "partial": "",
        "signature": "Heap b(LPath b)-\u003egr a b-\u003eLRTree b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-SP.html#v:sp",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.SP",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e Node -\u003e gr a b -\u003e Path",
        "fct-source": "src/Data-Graph-Inductive-Query-SP.html#sp",
        "fct-type": "function",
        "title": "sp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query SP",
        "module": "Data.Graph.Inductive.Query.SP",
        "name": "sp",
        "normalized": "Node-\u003eNode-\u003ea b c-\u003ePath",
        "package": "fgl",
        "partial": "",
        "signature": "Node-\u003eNode-\u003egr a b-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-SP.html#v:spLength",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.SP",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e Node -\u003e gr a b -\u003e b",
        "fct-source": "src/Data-Graph-Inductive-Query-SP.html#spLength",
        "fct-type": "function",
        "title": "spLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query SP",
        "module": "Data.Graph.Inductive.Query.SP",
        "name": "spLength",
        "normalized": "Node-\u003eNode-\u003ea b c-\u003ec",
        "package": "fgl",
        "partial": "Length",
        "signature": "Node-\u003eNode-\u003egr a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-SP.html#v:spTree",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.SP",
        "fct-package": "fgl",
        "fct-signature": "Node -\u003e gr a b -\u003e LRTree b",
        "fct-source": "src/Data-Graph-Inductive-Query-SP.html#spTree",
        "fct-type": "function",
        "title": "spTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query SP",
        "module": "Data.Graph.Inductive.Query.SP",
        "name": "spTree",
        "normalized": "Node-\u003ea b c-\u003eLRTree c",
        "package": "fgl",
        "partial": "Tree",
        "signature": "Node-\u003egr a b-\u003eLRTree b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-TransClos.html#",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query.TransClos",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query-TransClos.html",
        "fct-type": "module",
        "title": "TransClos"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query TransClos",
        "module": "Data.Graph.Inductive.Query.TransClos",
        "name": "TransClos",
        "normalized": "",
        "package": "fgl",
        "partial": "Trans Clos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-TransClos.html#v:trc",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the transitive closure of a directed graph.\nGiven a graph G=(V,E), its transitive closure is the graph:\nG* = (V,E*) where E*={(i,j): i,j in V and there is a path from i to j in G}\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive.Query.TransClos",
        "fct-package": "fgl",
        "fct-signature": "gr a b -\u003e gr a ()",
        "fct-source": "src/Data-Graph-Inductive-Query-TransClos.html#trc",
        "fct-type": "function",
        "title": "trc"
      },
      "index": {
        "description": "Finds the transitive closure of directed graph Given graph its transitive closure is the graph where in and there is path from to in",
        "hierarchy": "Data Graph Inductive Query TransClos",
        "module": "Data.Graph.Inductive.Query.TransClos",
        "name": "trc",
        "normalized": "a b c-\u003ea b()",
        "package": "fgl",
        "partial": "",
        "signature": "gr a b-\u003egr a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query.html#",
      "description": {
        "fct-module": "Data.Graph.Inductive.Query",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Query",
        "module": "Data.Graph.Inductive.Query",
        "name": "Query",
        "normalized": "",
        "package": "fgl",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Tree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTree-based implementation of \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDynGraph\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Inductive.Tree",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive-Tree.html",
        "fct-type": "module",
        "title": "Tree"
      },
      "index": {
        "description": "Tree-based implementation of Graph and DynGraph",
        "hierarchy": "Data Graph Inductive Tree",
        "module": "Data.Graph.Inductive.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "fgl",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Tree.html#t:Gr",
      "description": {
        "fct-module": "Data.Graph.Inductive.Tree",
        "fct-package": "fgl",
        "fct-signature": "data",
        "fct-source": "src/Data-Graph-Inductive-Tree.html#Gr",
        "fct-type": "data",
        "title": "Gr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Tree",
        "module": "Data.Graph.Inductive.Tree",
        "name": "Gr",
        "normalized": "",
        "package": "fgl",
        "partial": "Gr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Tree.html#t:UGr",
      "description": {
        "fct-module": "Data.Graph.Inductive.Tree",
        "fct-package": "fgl",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Inductive-Tree.html#UGr",
        "fct-type": "type",
        "title": "UGr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive Tree",
        "module": "Data.Graph.Inductive.Tree",
        "name": "UGr",
        "normalized": "",
        "package": "fgl",
        "partial": "UGr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive.html#",
      "description": {
        "fct-module": "Data.Graph.Inductive",
        "fct-package": "fgl",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Inductive.html",
        "fct-type": "module",
        "title": "Inductive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Inductive",
        "module": "Data.Graph.Inductive",
        "name": "Inductive",
        "normalized": "",
        "package": "fgl",
        "partial": "Inductive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive.html#v:version",
      "description": {
        "fct-descr": "\u003cp\u003eVersion info\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Inductive",
        "fct-package": "fgl",
        "fct-signature": "IO ()",
        "fct-source": "src/Data-Graph-Inductive.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "Version info",
        "hierarchy": "Data Graph Inductive",
        "module": "Data.Graph.Inductive",
        "name": "version",
        "normalized": "IO()",
        "package": "fgl",
        "partial": "",
        "signature": "IO()"
      }
    }
  }
]