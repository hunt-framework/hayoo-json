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
        "word": "fgl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic Graph Algorithms\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "Basic",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "Basic Graph Algorithms",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "Basic",
          "package": "fgl",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter based on edge property.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "efilter",
          "package": "fgl",
          "signature": "(LEdge b -\u003e Bool) -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Basic.html#efilter",
          "type": "function"
        },
        "index": {
          "description": "Filter based on edge property",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "efilter",
          "normalized": "(LEdge a-\u003eBool)-\u003eb c a-\u003eb c a",
          "package": "fgl",
          "signature": "(LEdge b-\u003eBool)-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:efilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter based on edge label property.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "elfilter",
          "package": "fgl",
          "signature": "(b -\u003e Bool) -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Basic.html#elfilter",
          "type": "function"
        },
        "index": {
          "description": "Filter based on edge label property",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "elfilter",
          "normalized": "(a-\u003eBool)-\u003eb c a-\u003eb c a",
          "package": "fgl",
          "signature": "(b-\u003eBool)-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:elfilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirected graph fold.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "gfold",
          "package": "fgl",
          "signature": "(Context a b -\u003e [Node])-\u003e (Context a b -\u003e c -\u003e d)-\u003e (Maybe d -\u003e c -\u003e c, c)-\u003e [Node]-\u003e gr a b-\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Directed graph fold",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "gfold",
          "normalized": "(Context a b-\u003e[Node])-\u003e(Context a b-\u003ec-\u003ed)-\u003e(Maybe d-\u003ec-\u003ec,c)-\u003e[Node]-\u003ee a b-\u003ec",
          "package": "fgl",
          "signature": "(Context a b-\u003e[Node])-\u003e(Context a b-\u003ec-\u003ed)-\u003e(Maybe d-\u003ec-\u003ec,c)-\u003e[Node]-\u003egr a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:gfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse the direction of all edges.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "grev",
          "package": "fgl",
          "signature": "gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Basic.html#grev",
          "type": "function"
        },
        "index": {
          "description": "Reverse the direction of all edges",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "grev",
          "normalized": "a b c-\u003ea b c",
          "package": "fgl",
          "signature": "gr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:grev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003es for which the given function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "gsel",
          "package": "fgl",
          "signature": "(Context a b -\u003e Bool) -\u003e gr a b -\u003e [Context a b]",
          "source": "src/Data-Graph-Inductive-Basic.html#gsel",
          "type": "function"
        },
        "index": {
          "description": "Return all Context for which the given function returns True",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "gsel",
          "normalized": "(Context a b-\u003eBool)-\u003ec a b-\u003e[Context a b]",
          "package": "fgl",
          "signature": "(Context a b-\u003eBool)-\u003egr a b-\u003e[Context a b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:gsel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the graph has any edges of the form (A, A).\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "hasLoop",
          "package": "fgl",
          "signature": "gr a b -\u003e Bool",
          "source": "src/Data-Graph-Inductive-Basic.html#hasLoop",
          "type": "function"
        },
        "index": {
          "description": "True if the graph has any edges of the form",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "hasLoop",
          "normalized": "a b c-\u003eBool",
          "package": "fgl",
          "partial": "Loop",
          "signature": "gr a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:hasLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003ehasLoop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "isSimple",
          "package": "fgl",
          "signature": "gr a b -\u003e Bool",
          "source": "src/Data-Graph-Inductive-Basic.html#isSimple",
          "type": "function"
        },
        "index": {
          "description": "The inverse of hasLoop",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "isSimple",
          "normalized": "a b c-\u003eBool",
          "package": "fgl",
          "partial": "Simple",
          "signature": "gr a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:isSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e, returning the elements in post-order.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "postorder",
          "package": "fgl",
          "signature": "Tree a -\u003e [a]",
          "source": "src/Data-Graph-Inductive-Basic.html#postorder",
          "type": "function"
        },
        "index": {
          "description": "Flatten Tree returning the elements in post-order",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "postorder",
          "normalized": "Tree a-\u003e[a]",
          "package": "fgl",
          "signature": "Tree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:postorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten multiple \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003es in post-order.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "postorderF",
          "package": "fgl",
          "signature": "[Tree a] -\u003e [a]",
          "source": "src/Data-Graph-Inductive-Basic.html#postorderF",
          "type": "function"
        },
        "index": {
          "description": "Flatten multiple Tree in post-order",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "postorderF",
          "normalized": "[Tree a]-\u003e[a]",
          "package": "fgl",
          "signature": "[Tree a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:postorderF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e, returning the elements in pre-order.  Equivalent to\n\u003ccode\u003e\u003ca\u003eflatten\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eData.Tree\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "preorder",
          "package": "fgl",
          "signature": "Tree a -\u003e [a]",
          "source": "src/Data-Graph-Inductive-Basic.html#preorder",
          "type": "function"
        },
        "index": {
          "description": "Flatten Tree returning the elements in pre-order Equivalent to flatten in Data.Tree",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "preorder",
          "normalized": "Tree a-\u003e[a]",
          "package": "fgl",
          "signature": "Tree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:preorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten multiple \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003es in pre-order.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "preorderF",
          "package": "fgl",
          "signature": "[Tree a] -\u003e [a]",
          "source": "src/Data-Graph-Inductive-Basic.html#preorderF",
          "type": "function"
        },
        "index": {
          "description": "Flatten multiple Tree in pre-order",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "preorderF",
          "normalized": "[Tree a]-\u003e[a]",
          "package": "fgl",
          "signature": "[Tree a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:preorderF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake the graph undirected, i.e. for every edge from A to B, there\n exists an edge from B to A.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "undir",
          "package": "fgl",
          "signature": "gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Basic.html#undir",
          "type": "function"
        },
        "index": {
          "description": "Make the graph undirected i.e for every edge from to there exists an edge from to",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "undir",
          "normalized": "a b c-\u003ea b c",
          "package": "fgl",
          "signature": "gr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:undir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all labels.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Basic",
          "name": "unlab",
          "package": "fgl",
          "signature": "gr a b -\u003e gr () ()",
          "source": "src/Data-Graph-Inductive-Basic.html#unlab",
          "type": "function"
        },
        "index": {
          "description": "Remove all labels",
          "hierarchy": "Data Graph Inductive Basic",
          "module": "Data.Graph.Inductive.Basic",
          "name": "unlab",
          "normalized": "a b c-\u003ea()()",
          "package": "fgl",
          "signature": "gr a b-\u003egr()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Basic.html#v:unlab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample Graphs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Example",
          "name": "Example",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Example.html",
          "type": "module"
        },
        "index": {
          "description": "Example Graphs",
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "Example",
          "package": "fgl",
          "partial": "Example",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "a",
          "package": "fgl",
          "signature": "Gr Char ()",
          "source": "src/Data-Graph-Inductive-Example.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "a",
          "normalized": "Gr Char()",
          "package": "fgl",
          "signature": "Gr Char()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "a'",
          "package": "fgl",
          "signature": "IO (SGr Char ())",
          "source": "src/Data-Graph-Inductive-Example.html#a%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "a'",
          "normalized": "IO(SGr Char())",
          "package": "fgl",
          "signature": "IO(SGr Char())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:a-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "ab",
          "package": "fgl",
          "signature": "Gr Char ()",
          "source": "src/Data-Graph-Inductive-Example.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "ab",
          "normalized": "Gr Char()",
          "package": "fgl",
          "signature": "Gr Char()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:ab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "ab'",
          "package": "fgl",
          "signature": "IO (SGr Char ())",
          "source": "src/Data-Graph-Inductive-Example.html#a%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "ab'",
          "normalized": "IO(SGr Char())",
          "package": "fgl",
          "signature": "IO(SGr Char())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:ab-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "abb",
          "package": "fgl",
          "signature": "Gr Char ()",
          "source": "src/Data-Graph-Inductive-Example.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "abb",
          "normalized": "Gr Char()",
          "package": "fgl",
          "signature": "Gr Char()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:abb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "abb'",
          "package": "fgl",
          "signature": "IO (SGr Char ())",
          "source": "src/Data-Graph-Inductive-Example.html#a%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "abb'",
          "normalized": "IO(SGr Char())",
          "package": "fgl",
          "signature": "IO(SGr Char())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:abb-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "b",
          "package": "fgl",
          "signature": "Gr Char ()",
          "source": "src/Data-Graph-Inductive-Example.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "b",
          "normalized": "Gr Char()",
          "package": "fgl",
          "signature": "Gr Char()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "b'",
          "package": "fgl",
          "signature": "IO (SGr Char ())",
          "source": "src/Data-Graph-Inductive-Example.html#a%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "b'",
          "normalized": "IO(SGr Char())",
          "package": "fgl",
          "signature": "IO(SGr Char())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:b-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "c",
          "package": "fgl",
          "signature": "Gr Char ()",
          "source": "src/Data-Graph-Inductive-Example.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "c",
          "normalized": "Gr Char()",
          "package": "fgl",
          "signature": "Gr Char()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "c'",
          "package": "fgl",
          "signature": "IO (SGr Char ())",
          "source": "src/Data-Graph-Inductive-Example.html#a%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "c'",
          "normalized": "IO(SGr Char())",
          "package": "fgl",
          "signature": "IO(SGr Char())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:c-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "clr479",
          "package": "fgl",
          "signature": "Gr Char ()",
          "source": "src/Data-Graph-Inductive-Example.html#clr479",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "clr479",
          "normalized": "Gr Char()",
          "package": "fgl",
          "signature": "Gr Char()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr479"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "clr479'",
          "package": "fgl",
          "signature": "IO (SGr Char ())",
          "source": "src/Data-Graph-Inductive-Example.html#clr479%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "clr479'",
          "normalized": "IO(SGr Char())",
          "package": "fgl",
          "signature": "IO(SGr Char())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr479-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "clr486",
          "package": "fgl",
          "signature": "Gr String ()",
          "source": "src/Data-Graph-Inductive-Example.html#clr486",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "clr486",
          "normalized": "Gr String()",
          "package": "fgl",
          "signature": "Gr String()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr486"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "clr486'",
          "package": "fgl",
          "signature": "IO (SGr String ())",
          "source": "src/Data-Graph-Inductive-Example.html#clr486%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "clr486'",
          "normalized": "IO(SGr String())",
          "package": "fgl",
          "signature": "IO(SGr String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr486-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "clr489",
          "package": "fgl",
          "signature": "Gr Char ()",
          "source": "src/Data-Graph-Inductive-Example.html#clr479",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "clr489",
          "normalized": "Gr Char()",
          "package": "fgl",
          "signature": "Gr Char()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr489"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "clr489'",
          "package": "fgl",
          "signature": "IO (SGr Char ())",
          "source": "src/Data-Graph-Inductive-Example.html#clr479%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "clr489'",
          "normalized": "IO(SGr Char())",
          "package": "fgl",
          "signature": "IO(SGr Char())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr489-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "clr508",
          "package": "fgl",
          "signature": "Gr Char Int",
          "source": "src/Data-Graph-Inductive-Example.html#clr508",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "clr508",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr508"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "clr508'",
          "package": "fgl",
          "signature": "IO (SGr Char Int)",
          "source": "src/Data-Graph-Inductive-Example.html#clr508%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "clr508'",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr508-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "clr528",
          "package": "fgl",
          "signature": "Gr Char Int",
          "source": "src/Data-Graph-Inductive-Example.html#clr508",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "clr528",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr528"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "clr528'",
          "package": "fgl",
          "signature": "IO (SGr Char Int)",
          "source": "src/Data-Graph-Inductive-Example.html#clr508%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "clr528'",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr528-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "clr595",
          "package": "fgl",
          "signature": "Gr Int Int",
          "source": "src/Data-Graph-Inductive-Example.html#clr595",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "clr595",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:clr595"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "cyc3",
          "package": "fgl",
          "signature": "Gr Char String",
          "source": "src/Data-Graph-Inductive-Example.html#cyc3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "cyc3",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:cyc3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "d1",
          "package": "fgl",
          "signature": "Gr Int Int",
          "source": "src/Data-Graph-Inductive-Example.html#d1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "d1",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:d1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "d1'",
          "package": "fgl",
          "signature": "IO (SGr Int Int)",
          "source": "src/Data-Graph-Inductive-Example.html#d1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "d1'",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:d1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "d3",
          "package": "fgl",
          "signature": "Gr Int Int",
          "source": "src/Data-Graph-Inductive-Example.html#d1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "d3",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:d3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "d3'",
          "package": "fgl",
          "signature": "IO (SGr Int Int)",
          "source": "src/Data-Graph-Inductive-Example.html#d1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "d3'",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:d3-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "dag3",
          "package": "fgl",
          "signature": "Gr Char ()",
          "source": "src/Data-Graph-Inductive-Example.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "dag3",
          "normalized": "Gr Char()",
          "package": "fgl",
          "signature": "Gr Char()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:dag3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "dag3'",
          "package": "fgl",
          "signature": "IO (SGr Char ())",
          "source": "src/Data-Graph-Inductive-Example.html#a%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "dag3'",
          "normalized": "IO(SGr Char())",
          "package": "fgl",
          "signature": "IO(SGr Char())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:dag3-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "dag4",
          "package": "fgl",
          "signature": "Gr Int ()",
          "source": "src/Data-Graph-Inductive-Example.html#dag4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "dag4",
          "normalized": "Gr Int()",
          "package": "fgl",
          "signature": "Gr Int()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:dag4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "dag4'",
          "package": "fgl",
          "signature": "IO (SGr Int ())",
          "source": "src/Data-Graph-Inductive-Example.html#dag4%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "dag4'",
          "normalized": "IO(SGr Int())",
          "package": "fgl",
          "signature": "IO(SGr Int())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:dag4-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "e",
          "package": "fgl",
          "signature": "Gr Char ()",
          "source": "src/Data-Graph-Inductive-Example.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "e",
          "normalized": "Gr Char()",
          "package": "fgl",
          "signature": "Gr Char()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "e'",
          "package": "fgl",
          "signature": "IO (SGr Char ())",
          "source": "src/Data-Graph-Inductive-Example.html#a%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "e'",
          "normalized": "IO(SGr Char())",
          "package": "fgl",
          "signature": "IO(SGr Char())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:e-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "e3",
          "package": "fgl",
          "signature": "Gr () String",
          "source": "src/Data-Graph-Inductive-Example.html#e3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "e3",
          "normalized": "Gr()String",
          "package": "fgl",
          "signature": "Gr()String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:e3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "e3'",
          "package": "fgl",
          "signature": "IO (SGr () String)",
          "source": "src/Data-Graph-Inductive-Example.html#e3%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "e3'",
          "normalized": "IO(SGr()String)",
          "package": "fgl",
          "signature": "IO(SGr()String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:e3-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "g3",
          "package": "fgl",
          "signature": "Gr Char String",
          "source": "src/Data-Graph-Inductive-Example.html#cyc3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "g3",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:g3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "g3b",
          "package": "fgl",
          "signature": "Gr Char String",
          "source": "src/Data-Graph-Inductive-Example.html#cyc3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "g3b",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:g3b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate list of labeled nodes\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Example",
          "name": "genLNodes",
          "package": "fgl",
          "signature": "a -\u003e Int -\u003e [LNode a]",
          "source": "src/Data-Graph-Inductive-Example.html#genLNodes",
          "type": "function"
        },
        "index": {
          "description": "generate list of labeled nodes",
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "genLNodes",
          "normalized": "a-\u003eInt-\u003e[LNode a]",
          "package": "fgl",
          "partial": "LNodes",
          "signature": "a-\u003eInt-\u003e[LNode a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:genLNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate list of unlabeled nodes\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Example",
          "name": "genUNodes",
          "package": "fgl",
          "signature": "Int -\u003e [UNode]",
          "source": "src/Data-Graph-Inductive-Example.html#genUNodes",
          "type": "function"
        },
        "index": {
          "description": "generate list of unlabeled nodes",
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "genUNodes",
          "normalized": "Int-\u003e[UNode]",
          "package": "fgl",
          "partial": "UNodes",
          "signature": "Int-\u003e[UNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:genUNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "gr1",
          "package": "fgl",
          "signature": "Gr Int Int",
          "source": "src/Data-Graph-Inductive-Example.html#clr595",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "gr1",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:gr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "kin248",
          "package": "fgl",
          "signature": "Gr Int ()",
          "source": "src/Data-Graph-Inductive-Example.html#kin248",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "kin248",
          "normalized": "Gr Int()",
          "package": "fgl",
          "signature": "Gr Int()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:kin248"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "kin248'",
          "package": "fgl",
          "signature": "IO (SGr Int ())",
          "source": "src/Data-Graph-Inductive-Example.html#kin248%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "kin248'",
          "normalized": "IO(SGr Int())",
          "package": "fgl",
          "signature": "IO(SGr Int())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:kin248-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edenote unlabeled edges\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Example",
          "name": "labUEdges",
          "package": "fgl",
          "signature": "[Edge] -\u003e [UEdge]",
          "source": "src/Data-Graph-Inductive-Example.html#labUEdges",
          "type": "function"
        },
        "index": {
          "description": "denote unlabeled edges",
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "labUEdges",
          "normalized": "[Edge]-\u003e[UEdge]",
          "package": "fgl",
          "partial": "UEdges",
          "signature": "[Edge]-\u003e[UEdge]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:labUEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "loop",
          "package": "fgl",
          "signature": "Gr Char ()",
          "source": "src/Data-Graph-Inductive-Example.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "loop",
          "normalized": "Gr Char()",
          "package": "fgl",
          "signature": "Gr Char()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "loop'",
          "package": "fgl",
          "signature": "IO (SGr Char ())",
          "source": "src/Data-Graph-Inductive-Example.html#a%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "loop'",
          "normalized": "IO(SGr Char())",
          "package": "fgl",
          "signature": "IO(SGr Char())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:loop-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eempty (unlabeled) edge list\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Example",
          "name": "noEdges",
          "package": "fgl",
          "signature": "[UEdge]",
          "source": "src/Data-Graph-Inductive-Example.html#noEdges",
          "type": "function"
        },
        "index": {
          "description": "empty unlabeled edge list",
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "noEdges",
          "normalized": "[UEdge]",
          "package": "fgl",
          "partial": "Edges",
          "signature": "[UEdge]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:noEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "star",
          "package": "fgl",
          "signature": "Int -\u003e gr () ()",
          "source": "src/Data-Graph-Inductive-Example.html#star",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "star",
          "normalized": "Int-\u003ea()()",
          "package": "fgl",
          "signature": "Int-\u003egr()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:star"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "starM",
          "package": "fgl",
          "signature": "Int -\u003e m (gr () ())",
          "source": "src/Data-Graph-Inductive-Example.html#starM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "starM",
          "normalized": "Int-\u003ea(b()())",
          "package": "fgl",
          "signature": "Int-\u003em(gr()())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:starM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "ucycle",
          "package": "fgl",
          "signature": "Int -\u003e gr () ()",
          "source": "src/Data-Graph-Inductive-Example.html#ucycle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "ucycle",
          "normalized": "Int-\u003ea()()",
          "package": "fgl",
          "signature": "Int-\u003egr()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:ucycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "ucycleM",
          "package": "fgl",
          "signature": "Int -\u003e m (gr () ())",
          "source": "src/Data-Graph-Inductive-Example.html#ucycleM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "ucycleM",
          "normalized": "Int-\u003ea(b()())",
          "package": "fgl",
          "signature": "Int-\u003em(gr()())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:ucycleM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "vor",
          "package": "fgl",
          "signature": "Gr String Int",
          "source": "src/Data-Graph-Inductive-Example.html#vor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "vor",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:vor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Example",
          "name": "vor'",
          "package": "fgl",
          "signature": "IO (SGr String Int)",
          "source": "src/Data-Graph-Inductive-Example.html#vor%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Example",
          "module": "Data.Graph.Inductive.Example",
          "name": "vor'",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Example.html#v:vor-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStatic and Dynamic Inductive Graphs  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Graph",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html",
          "type": "module"
        },
        "index": {
          "description": "Static and Dynamic Inductive Graphs",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Graph",
          "package": "fgl",
          "partial": "Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabeled links to or from a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Adj",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#Adj",
          "type": "type"
        },
        "index": {
          "description": "Labeled links to or from Node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Adj",
          "package": "fgl",
          "partial": "Adj",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Adj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinks to the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e itself, a label, links from the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Context",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#Context",
          "type": "type"
        },
        "index": {
          "description": "Links to the Node the Node itself label links from the Node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Context",
          "package": "fgl",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e decomposition - the context removed from a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e, and the rest\n of the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Decomp",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#Decomp",
          "type": "type"
        },
        "index": {
          "description": "Graph decomposition the context removed from Graph and the rest of the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Decomp",
          "package": "fgl",
          "partial": "Decomp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Decomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Graph",
          "name": "DynGraph",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#DynGraph",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "DynGraph",
          "package": "fgl",
          "partial": "Dyn Graph",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:DynGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlabeled edge\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Edge",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#Edge",
          "type": "type"
        },
        "index": {
          "description": "Unlabeled edge",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Edge",
          "package": "fgl",
          "partial": "Edge",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eDecomp\u003c/a\u003e\u003c/code\u003e, only more sure of itself.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "GDecomp",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#GDecomp",
          "type": "type"
        },
        "index": {
          "description": "The same as Decomp only more sure of itself",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "GDecomp",
          "package": "fgl",
          "partial": "GDecomp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:GDecomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum implementation: \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisEmpty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkGraph\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elabNodes\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Graph",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#Graph",
          "type": "class"
        },
        "index": {
          "description": "Minimum implementation empty isEmpty match mkGraph labNodes",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Graph",
          "package": "fgl",
          "partial": "Graph",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabeled edge\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "LEdge",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#LEdge",
          "type": "type"
        },
        "index": {
          "description": "Labeled edge",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "LEdge",
          "package": "fgl",
          "partial": "LEdge",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:LEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabeled node\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "LNode",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#LNode",
          "type": "type"
        },
        "index": {
          "description": "Labeled node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "LNode",
          "package": "fgl",
          "partial": "LNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:LNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabeled path\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "LPath",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#LPath",
          "type": "newtype"
        },
        "index": {
          "description": "Labeled path",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "LPath",
          "package": "fgl",
          "partial": "LPath",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:LPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Graph",
          "name": "MContext",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#MContext",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "MContext",
          "package": "fgl",
          "partial": "MContext",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:MContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlabeled node\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Node",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#Node",
          "type": "type"
        },
        "index": {
          "description": "Unlabeled node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Node",
          "package": "fgl",
          "partial": "Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlabeled path\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Path",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#Path",
          "type": "type"
        },
        "index": {
          "description": "Unlabeled path",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "Path",
          "package": "fgl",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlabeled context.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "UContext",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#UContext",
          "type": "type"
        },
        "index": {
          "description": "Unlabeled context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "UContext",
          "package": "fgl",
          "partial": "UContext",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:UContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlabeled decomposition.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "UDecomp",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#UDecomp",
          "type": "type"
        },
        "index": {
          "description": "Unlabeled decomposition",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "UDecomp",
          "package": "fgl",
          "partial": "UDecomp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:UDecomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasi-unlabeled edge\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "UEdge",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#UEdge",
          "type": "type"
        },
        "index": {
          "description": "Quasi-unlabeled edge",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "UEdge",
          "package": "fgl",
          "partial": "UEdge",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:UEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasi-unlabeled node\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "UNode",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#UNode",
          "type": "type"
        },
        "index": {
          "description": "Quasi-unlabeled node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "UNode",
          "package": "fgl",
          "partial": "UNode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:UNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasi-unlabeled path\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "UPath",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graph.html#UPath",
          "type": "type"
        },
        "index": {
          "description": "Quasi-unlabeled path",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "UPath",
          "package": "fgl",
          "partial": "UPath",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#t:UPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge the \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e into the \u003ccode\u003e\u003ca\u003eDynGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "(&)",
          "package": "fgl",
          "signature": "Context a b -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#%26",
          "type": "method"
        },
        "index": {
          "description": "Merge the Context into the DynGraph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "(&) &",
          "normalized": "Context a b-\u003ec a b-\u003ec a b",
          "package": "fgl",
          "signature": "Context a b-\u003egr a b-\u003egr a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Graph",
          "name": "LP",
          "package": "fgl",
          "signature": "LP [LNode a]",
          "source": "src/Data-Graph-Inductive-Graph.html#LPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "LP",
          "normalized": "LP[LNode a]",
          "package": "fgl",
          "partial": "LP",
          "signature": "LP[LNode a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:LP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "buildGr",
          "package": "fgl",
          "signature": "[Context a b] -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#buildGr",
          "type": "function"
        },
        "index": {
          "description": "Build Graph from list of Context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "buildGr",
          "normalized": "[Context a b]-\u003ec a b",
          "package": "fgl",
          "partial": "Gr",
          "signature": "[Context a b]-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:buildGr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the context for the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.  Causes an error if the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is\n not present in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "context",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e Context a b",
          "source": "src/Data-Graph-Inductive-Graph.html#context",
          "type": "function"
        },
        "index": {
          "description": "Find the context for the given Node Causes an error if the Node is not present in the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "context",
          "normalized": "a b c-\u003eNode-\u003eContext b c",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003eContext a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe degree of the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "deg",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e Int",
          "source": "src/Data-Graph-Inductive-Graph.html#deg",
          "type": "function"
        },
        "index": {
          "description": "The degree of the Node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "deg",
          "normalized": "a b c-\u003eNode-\u003eInt",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:deg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe degree of a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "deg'",
          "package": "fgl",
          "signature": "Context a b -\u003e Int",
          "source": "src/Data-Graph-Inductive-Graph.html#deg%27",
          "type": "function"
        },
        "index": {
          "description": "The degree of Context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "deg'",
          "normalized": "Context a b-\u003eInt",
          "package": "fgl",
          "signature": "Context a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:deg-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "delEdge",
          "package": "fgl",
          "signature": "Edge -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#delEdge",
          "type": "function"
        },
        "index": {
          "description": "Remove an Edge from the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "delEdge",
          "normalized": "Edge-\u003ea b c-\u003ea b c",
          "package": "fgl",
          "partial": "Edge",
          "signature": "Edge-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:delEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove multiple \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003es from the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "delEdges",
          "package": "fgl",
          "signature": "[Edge] -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#delEdges",
          "type": "function"
        },
        "index": {
          "description": "Remove multiple Edge from the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "delEdges",
          "normalized": "[Edge]-\u003ea b c-\u003ea b c",
          "package": "fgl",
          "partial": "Edges",
          "signature": "[Edge]-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:delEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "delLEdge",
          "package": "fgl",
          "signature": "LEdge b -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#delLEdge",
          "type": "function"
        },
        "index": {
          "description": "Remove an LEdge from the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "delLEdge",
          "normalized": "LEdge a-\u003eb c a-\u003eb c a",
          "package": "fgl",
          "partial": "LEdge",
          "signature": "LEdge b-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:delLEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "delNode",
          "package": "fgl",
          "signature": "Node -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#delNode",
          "type": "function"
        },
        "index": {
          "description": "Remove Node from the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "delNode",
          "normalized": "Node-\u003ea b c-\u003ea b c",
          "package": "fgl",
          "partial": "Node",
          "signature": "Node-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:delNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove multiple \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es from the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "delNodes",
          "package": "fgl",
          "signature": "[Node] -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#delNodes",
          "type": "function"
        },
        "index": {
          "description": "Remove multiple Node from the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "delNodes",
          "normalized": "[Node]-\u003ea b c-\u003ea b c",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "[Node]-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:delNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "edges",
          "package": "fgl",
          "signature": "gr a b -\u003e [Edge]",
          "source": "src/Data-Graph-Inductive-Graph.html#edges",
          "type": "function"
        },
        "index": {
          "description": "List all Edge in the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "edges",
          "normalized": "a b c-\u003e[Edge]",
          "package": "fgl",
          "signature": "gr a b-\u003e[Edge]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:edges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over the \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e labels in a graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "emap",
          "package": "fgl",
          "signature": "(b -\u003e c) -\u003e gr a b -\u003e gr a c",
          "source": "src/Data-Graph-Inductive-Graph.html#emap",
          "type": "function"
        },
        "index": {
          "description": "Map function over the Edge labels in graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "emap",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "fgl",
          "signature": "(b-\u003ec)-\u003egr a b-\u003egr a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:emap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "empty",
          "package": "fgl",
          "signature": "gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#empty",
          "type": "method"
        },
        "index": {
          "description": "An empty Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "empty",
          "package": "fgl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Graph",
          "name": "equal",
          "package": "fgl",
          "signature": "gr a b -\u003e gr a b -\u003e Bool",
          "source": "src/Data-Graph-Inductive-Graph.html#equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "equal",
          "normalized": "a b c-\u003ea b c-\u003eBool",
          "package": "fgl",
          "signature": "gr a b-\u003egr a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is present in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "gelem",
          "package": "fgl",
          "signature": "Node -\u003e gr a b -\u003e Bool",
          "source": "src/Data-Graph-Inductive-Graph.html#gelem",
          "type": "function"
        },
        "index": {
          "description": "True if the Node is present in the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "gelem",
          "normalized": "Node-\u003ea b c-\u003eBool",
          "package": "fgl",
          "signature": "Node-\u003egr a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:gelem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "gmap",
          "package": "fgl",
          "signature": "(Context a b -\u003e Context c d) -\u003e gr a b -\u003e gr c d",
          "source": "src/Data-Graph-Inductive-Graph.html#gmap",
          "type": "function"
        },
        "index": {
          "description": "Map function over the graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "gmap",
          "normalized": "(Context a b-\u003eContext c d)-\u003ee a b-\u003ee c d",
          "package": "fgl",
          "signature": "(Context a b-\u003eContext c d)-\u003egr a b-\u003egr c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:gmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inward-bound degree of the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "indeg",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e Int",
          "source": "src/Data-Graph-Inductive-Graph.html#indeg",
          "type": "function"
        },
        "index": {
          "description": "The inward-bound degree of the Node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "indeg",
          "normalized": "a b c-\u003eNode-\u003eInt",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:indeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inward degree of a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "indeg'",
          "package": "fgl",
          "signature": "Context a b -\u003e Int",
          "source": "src/Data-Graph-Inductive-Graph.html#indeg%27",
          "type": "function"
        },
        "index": {
          "description": "The inward degree of Context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "indeg'",
          "normalized": "Context a b-\u003eInt",
          "package": "fgl",
          "signature": "Context a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:indeg-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all inward-bound \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es for the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "inn",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e [LEdge b]",
          "source": "src/Data-Graph-Inductive-Graph.html#inn",
          "type": "function"
        },
        "index": {
          "description": "Find all inward-bound LEdge for the given Node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "inn",
          "normalized": "a b c-\u003eNode-\u003e[LEdge c]",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003e[LEdge b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:inn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll inward-directed \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "inn'",
          "package": "fgl",
          "signature": "Context a b -\u003e [LEdge b]",
          "source": "src/Data-Graph-Inductive-Graph.html#inn%27",
          "type": "function"
        },
        "index": {
          "description": "All inward-directed LEdge in Context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "inn'",
          "normalized": "Context a b-\u003e[LEdge b]",
          "package": "fgl",
          "signature": "Context a b-\u003e[LEdge b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:inn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003e into the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "insEdge",
          "package": "fgl",
          "signature": "LEdge b -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#insEdge",
          "type": "function"
        },
        "index": {
          "description": "Insert LEdge into the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "insEdge",
          "normalized": "LEdge a-\u003eb c a-\u003eb c a",
          "package": "fgl",
          "partial": "Edge",
          "signature": "LEdge b-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:insEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert multiple \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es into the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "insEdges",
          "package": "fgl",
          "signature": "[LEdge b] -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#insEdges",
          "type": "function"
        },
        "index": {
          "description": "Insert multiple LEdge into the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "insEdges",
          "normalized": "[LEdge a]-\u003eb c a-\u003eb c a",
          "package": "fgl",
          "partial": "Edges",
          "signature": "[LEdge b]-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:insEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e into the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "insNode",
          "package": "fgl",
          "signature": "LNode a -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#insNode",
          "type": "function"
        },
        "index": {
          "description": "Insert LNode into the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "insNode",
          "normalized": "LNode a-\u003eb a c-\u003eb a c",
          "package": "fgl",
          "partial": "Node",
          "signature": "LNode a-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:insNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert multiple \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003es into the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "insNodes",
          "package": "fgl",
          "signature": "[LNode a] -\u003e gr a b -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#insNodes",
          "type": "function"
        },
        "index": {
          "description": "Insert multiple LNode into the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "insNodes",
          "normalized": "[LNode a]-\u003eb a c-\u003eb a c",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "[LNode a]-\u003egr a b-\u003egr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:insNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the given \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "isEmpty",
          "package": "fgl",
          "signature": "gr a b -\u003e Bool",
          "source": "src/Data-Graph-Inductive-Graph.html#isEmpty",
          "type": "method"
        },
        "index": {
          "description": "True if the given Graph is empty",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "isEmpty",
          "normalized": "a b c-\u003eBool",
          "package": "fgl",
          "partial": "Empty",
          "signature": "gr a b-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the label for a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "lab",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e Maybe a",
          "source": "src/Data-Graph-Inductive-Graph.html#lab",
          "type": "function"
        },
        "index": {
          "description": "Find the label for Node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "lab",
          "normalized": "a b c-\u003eNode-\u003eMaybe b",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:lab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe label in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "lab'",
          "package": "fgl",
          "signature": "Context a b -\u003e a",
          "source": "src/Data-Graph-Inductive-Graph.html#lab%27",
          "type": "function"
        },
        "index": {
          "description": "The label in Context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "lab'",
          "normalized": "Context a b-\u003ea",
          "package": "fgl",
          "signature": "Context a b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:lab-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of all \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "labEdges",
          "package": "fgl",
          "signature": "gr a b -\u003e [LEdge b]",
          "source": "src/Data-Graph-Inductive-Graph.html#labEdges",
          "type": "method"
        },
        "index": {
          "description": "list of all LEdge in the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "labEdges",
          "normalized": "a b c-\u003e[LEdge c]",
          "package": "fgl",
          "partial": "Edges",
          "signature": "gr a b-\u003e[LEdge b]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:labEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "labNode'",
          "package": "fgl",
          "signature": "Context a b -\u003e LNode a",
          "source": "src/Data-Graph-Inductive-Graph.html#labNode%27",
          "type": "function"
        },
        "index": {
          "description": "The LNode from Context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "labNode'",
          "normalized": "Context a b-\u003eLNode a",
          "package": "fgl",
          "partial": "Node'",
          "signature": "Context a b-\u003eLNode a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:labNode-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of all \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "labNodes",
          "package": "fgl",
          "signature": "gr a b -\u003e [LNode a]",
          "source": "src/Data-Graph-Inductive-Graph.html#labNodes",
          "type": "method"
        },
        "index": {
          "description": "list of all LNode in the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "labNodes",
          "normalized": "a b c-\u003e[LNode b]",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "gr a b-\u003e[LNode a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:labNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that link to the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e and the label of each link.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "lpre",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e [(Node, b)]",
          "source": "src/Data-Graph-Inductive-Graph.html#lpre",
          "type": "function"
        },
        "index": {
          "description": "Find all Node that link to the given Node and the label of each link",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "lpre",
          "normalized": "a b c-\u003eNode-\u003e[(Node,c)]",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003e[(Node,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:lpre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es linked from in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e, and the label of the links.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "lpre'",
          "package": "fgl",
          "signature": "Context a b -\u003e [(Node, b)]",
          "source": "src/Data-Graph-Inductive-Graph.html#lpre%27",
          "type": "function"
        },
        "index": {
          "description": "All Node linked from in Context and the label of the links",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "lpre'",
          "normalized": "Context a b-\u003e[(Node,b)]",
          "package": "fgl",
          "signature": "Context a b-\u003e[(Node,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:lpre-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that are linked from the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e and the label of\n each link.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "lsuc",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e [(Node, b)]",
          "source": "src/Data-Graph-Inductive-Graph.html#lsuc",
          "type": "function"
        },
        "index": {
          "description": "Find all Node that are linked from the given Node and the label of each link",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "lsuc",
          "normalized": "a b c-\u003eNode-\u003e[(Node,c)]",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003e[(Node,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:lsuc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es linked from in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e, and the label of the links.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "lsuc'",
          "package": "fgl",
          "signature": "Context a b -\u003e [(Node, b)]",
          "source": "src/Data-Graph-Inductive-Graph.html#lsuc%27",
          "type": "function"
        },
        "index": {
          "description": "All Node linked from in Context and the label of the links",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "lsuc'",
          "normalized": "Context a b-\u003e[(Node,b)]",
          "package": "fgl",
          "signature": "Context a b-\u003e[(Node,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:lsuc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompose a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e into the \u003ccode\u003e\u003ca\u003eMContext\u003c/a\u003e\u003c/code\u003e found for the given node and the\n remaining \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "match",
          "package": "fgl",
          "signature": "Node -\u003e gr a b -\u003e Decomp gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#match",
          "type": "method"
        },
        "index": {
          "description": "Decompose Graph into the MContext found for the given node and the remaining Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "match",
          "normalized": "Node-\u003ea b c-\u003eDecomp a b c",
          "package": "fgl",
          "signature": "Node-\u003egr a b-\u003eDecomp gr a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompose a graph into the \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e for an arbitrarily-chosen \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e\n and the remaining \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "matchAny",
          "package": "fgl",
          "signature": "gr a b -\u003e GDecomp gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#matchAny",
          "type": "method"
        },
        "index": {
          "description": "Decompose graph into the Context for an arbitrarily-chosen Node and the remaining Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "matchAny",
          "normalized": "a b c-\u003eGDecomp a b c",
          "package": "fgl",
          "partial": "Any",
          "signature": "gr a b-\u003eGDecomp gr a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:matchAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e from the list of \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "mkGraph",
          "package": "fgl",
          "signature": "[LNode a] -\u003e [LEdge b] -\u003e gr a b",
          "source": "src/Data-Graph-Inductive-Graph.html#mkGraph",
          "type": "method"
        },
        "index": {
          "description": "Create Graph from the list of LNode and LEdge",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "mkGraph",
          "normalized": "[LNode a]-\u003e[LEdge b]-\u003ec a b",
          "package": "fgl",
          "partial": "Graph",
          "signature": "[LNode a]-\u003e[LEdge b]-\u003egr a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:mkGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a quasi-unlabeled \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "mkUGraph",
          "package": "fgl",
          "signature": "[Node] -\u003e [Edge] -\u003e gr () ()",
          "source": "src/Data-Graph-Inductive-Graph.html#mkUGraph",
          "type": "function"
        },
        "index": {
          "description": "Build quasi-unlabeled Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "mkUGraph",
          "normalized": "[Node]-\u003e[Edge]-\u003ea()()",
          "package": "fgl",
          "partial": "UGraph",
          "signature": "[Node]-\u003e[Edge]-\u003egr()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:mkUGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the neighbors for a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "neighbors",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Graph.html#neighbors",
          "type": "function"
        },
        "index": {
          "description": "Find the neighbors for Node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "neighbors",
          "normalized": "a b c-\u003eNode-\u003e[Node]",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:neighbors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es linked to or from in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "neighbors'",
          "package": "fgl",
          "signature": "Context a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Graph.html#neighbors%27",
          "type": "function"
        },
        "index": {
          "description": "All Node linked to or from in Context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "neighbors'",
          "normalized": "Context a b-\u003e[Node]",
          "package": "fgl",
          "signature": "Context a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:neighbors-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList N available \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es, i.e. \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that are not used in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "newNodes",
          "package": "fgl",
          "signature": "Int -\u003e gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Graph.html#newNodes",
          "type": "function"
        },
        "index": {
          "description": "List available Node i.e Node that are not used in the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "newNodes",
          "normalized": "Int-\u003ea b c-\u003e[Node]",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "Int-\u003egr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:newNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e labels in a graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "nmap",
          "package": "fgl",
          "signature": "(a -\u003e c) -\u003e gr a b -\u003e gr c b",
          "source": "src/Data-Graph-Inductive-Graph.html#nmap",
          "type": "function"
        },
        "index": {
          "description": "Map function over the Node labels in graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "nmap",
          "normalized": "(a-\u003eb)-\u003ec a d-\u003ec b d",
          "package": "fgl",
          "signature": "(a-\u003ec)-\u003egr a b-\u003egr c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:nmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es in a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "noNodes",
          "package": "fgl",
          "signature": "gr a b -\u003e Int",
          "source": "src/Data-Graph-Inductive-Graph.html#noNodes",
          "type": "method"
        },
        "index": {
          "description": "The number of Node in Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "noNodes",
          "normalized": "a b c-\u003eInt",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "gr a b-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:noNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "node'",
          "package": "fgl",
          "signature": "Context a b -\u003e Node",
          "source": "src/Data-Graph-Inductive-Graph.html#node%27",
          "type": "function"
        },
        "index": {
          "description": "The Node in Context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "node'",
          "normalized": "Context a b-\u003eNode",
          "package": "fgl",
          "signature": "Context a b-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:node-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimum and maximum \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "nodeRange",
          "package": "fgl",
          "signature": "gr a b -\u003e (Node, Node)",
          "source": "src/Data-Graph-Inductive-Graph.html#nodeRange",
          "type": "method"
        },
        "index": {
          "description": "The minimum and maximum Node in Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "nodeRange",
          "normalized": "a b c-\u003e(Node,Node)",
          "package": "fgl",
          "partial": "Range",
          "signature": "gr a b-\u003e(Node,Node)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:nodeRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "nodes",
          "package": "fgl",
          "signature": "gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Graph.html#nodes",
          "type": "function"
        },
        "index": {
          "description": "List all Node in the Graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "nodes",
          "normalized": "a b c-\u003e[Node]",
          "package": "fgl",
          "signature": "gr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all outward-bound \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es for the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "out",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e [LEdge b]",
          "source": "src/Data-Graph-Inductive-Graph.html#out",
          "type": "function"
        },
        "index": {
          "description": "Find all outward-bound LEdge for the given Node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "out",
          "normalized": "a b c-\u003eNode-\u003e[LEdge c]",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003e[LEdge b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll outward-directed \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "out'",
          "package": "fgl",
          "signature": "Context a b -\u003e [LEdge b]",
          "source": "src/Data-Graph-Inductive-Graph.html#out%27",
          "type": "function"
        },
        "index": {
          "description": "All outward-directed LEdge in Context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "out'",
          "normalized": "Context a b-\u003e[LEdge b]",
          "package": "fgl",
          "signature": "Context a b-\u003e[LEdge b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:out-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe outward-bound degree of the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "outdeg",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e Int",
          "source": "src/Data-Graph-Inductive-Graph.html#outdeg",
          "type": "function"
        },
        "index": {
          "description": "The outward-bound degree of the Node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "outdeg",
          "normalized": "a b c-\u003eNode-\u003eInt",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:outdeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe outward degree of a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "outdeg'",
          "package": "fgl",
          "signature": "Context a b -\u003e Int",
          "source": "src/Data-Graph-Inductive-Graph.html#outdeg%27",
          "type": "function"
        },
        "index": {
          "description": "The outward degree of Context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "outdeg'",
          "normalized": "Context a b-\u003eInt",
          "package": "fgl",
          "signature": "Context a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:outdeg-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that link to to the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "pre",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Graph.html#pre",
          "type": "function"
        },
        "index": {
          "description": "Find all Node that link to to the given Node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "pre",
          "normalized": "a b c-\u003eNode-\u003e[Node]",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:pre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es linked from in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "pre'",
          "package": "fgl",
          "signature": "Context a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Graph.html#pre%27",
          "type": "function"
        },
        "index": {
          "description": "All Node linked from in Context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "pre'",
          "normalized": "Context a b-\u003e[Node]",
          "package": "fgl",
          "signature": "Context a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:pre-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that have a link from the given \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "suc",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Graph.html#suc",
          "type": "function"
        },
        "index": {
          "description": "Find all Node that have link from the given Node",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "suc",
          "normalized": "a b c-\u003eNode-\u003e[Node]",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:suc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es linked to in a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "suc'",
          "package": "fgl",
          "signature": "Context a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Graph.html#suc%27",
          "type": "function"
        },
        "index": {
          "description": "All Node linked to in Context",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "suc'",
          "normalized": "Context a b-\u003e[Node]",
          "package": "fgl",
          "signature": "Context a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:suc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a function over the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graph",
          "name": "ufold",
          "package": "fgl",
          "signature": "(Context a b -\u003e c -\u003e c) -\u003e c -\u003e gr a b -\u003e c",
          "source": "src/Data-Graph-Inductive-Graph.html#ufold",
          "type": "function"
        },
        "index": {
          "description": "Fold function over the graph",
          "hierarchy": "Data Graph Inductive Graph",
          "module": "Data.Graph.Inductive.Graph",
          "name": "ufold",
          "normalized": "(Context a b-\u003ec-\u003ec)-\u003ec-\u003ed a b-\u003ec",
          "package": "fgl",
          "signature": "(Context a b-\u003ec-\u003ec)-\u003ec-\u003egr a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graph.html#v:ufold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple graphviz output.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Graphviz",
          "name": "Graphviz",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graphviz.html",
          "type": "module"
        },
        "index": {
          "description": "Simple graphviz output",
          "hierarchy": "Data Graph Inductive Graphviz",
          "module": "Data.Graph.Inductive.Graphviz",
          "name": "Graphviz",
          "package": "fgl",
          "partial": "Graphviz",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graphviz.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Graphviz",
          "name": "Orient",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Graphviz.html#Orient",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Graphviz",
          "module": "Data.Graph.Inductive.Graphviz",
          "name": "Orient",
          "package": "fgl",
          "partial": "Orient",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graphviz.html#t:Orient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Graphviz",
          "name": "Landscape",
          "package": "fgl",
          "signature": "Landscape",
          "source": "src/Data-Graph-Inductive-Graphviz.html#Orient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Graphviz",
          "module": "Data.Graph.Inductive.Graphviz",
          "name": "Landscape",
          "package": "fgl",
          "partial": "Landscape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graphviz.html#v:Landscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Graphviz",
          "name": "Portrait",
          "package": "fgl",
          "signature": "Portrait",
          "source": "src/Data-Graph-Inductive-Graphviz.html#Orient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Graphviz",
          "module": "Data.Graph.Inductive.Graphviz",
          "name": "Portrait",
          "package": "fgl",
          "partial": "Portrait",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graphviz.html#v:Portrait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats a graph for use in graphviz.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graphviz",
          "name": "graphviz",
          "package": "fgl",
          "signature": "g a b-\u003e String-\u003e (Double, Double)-\u003e (Int, Int)-\u003e Orient-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Formats graph for use in graphviz",
          "hierarchy": "Data Graph Inductive Graphviz",
          "module": "Data.Graph.Inductive.Graphviz",
          "name": "graphviz",
          "normalized": "a b c-\u003eString-\u003e(Double,Double)-\u003e(Int,Int)-\u003eOrient-\u003eString",
          "package": "fgl",
          "signature": "g a b-\u003eString-\u003e(Double,Double)-\u003e(Int,Int)-\u003eOrient-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graphviz.html#v:graphviz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a graph for graphviz with reasonable defaults: title of \"fgl\",\n 8.5x11 pages, one page, landscape orientation\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Graphviz",
          "name": "graphviz'",
          "package": "fgl",
          "signature": "g a b -\u003e String",
          "source": "src/Data-Graph-Inductive-Graphviz.html#graphviz%27",
          "type": "function"
        },
        "index": {
          "description": "Format graph for graphviz with reasonable defaults title of fgl x11 pages one page landscape orientation",
          "hierarchy": "Data Graph Inductive Graphviz",
          "module": "Data.Graph.Inductive.Graphviz",
          "name": "graphviz'",
          "normalized": "a b c-\u003eString",
          "package": "fgl",
          "signature": "g a b-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Graphviz.html#v:graphviz-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple Finite Maps.\n This implementation provides several useful methods that Data.FiniteMap\n does not.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "FiniteMap",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html",
          "type": "module"
        },
        "index": {
          "description": "Simple Finite Maps This implementation provides several useful methods that Data.FiniteMap does not",
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "FiniteMap",
          "package": "fgl",
          "partial": "Finite Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "FiniteMap",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#FiniteMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "FiniteMap",
          "package": "fgl",
          "partial": "Finite Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#t:FiniteMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "Empty",
          "package": "fgl",
          "signature": "Empty",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#FiniteMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "Empty",
          "package": "fgl",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "Node",
          "package": "fgl",
          "signature": "Node Int (FiniteMap a b) (a, b) (FiniteMap a b)",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#FiniteMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "Node",
          "normalized": "Node Int(FiniteMap a b)(a,b)(FiniteMap a b)",
          "package": "fgl",
          "partial": "Node",
          "signature": "Node Int(FiniteMap a b)(a,b)(FiniteMap a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefines or aggregates entries\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "accumFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e a -\u003e (b -\u003e b -\u003e b) -\u003e b -\u003e FiniteMap a b",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#accumFM",
          "type": "function"
        },
        "index": {
          "description": "defines or aggregates entries",
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "accumFM",
          "normalized": "FiniteMap a b-\u003ea-\u003e(b-\u003eb-\u003eb)-\u003eb-\u003eFiniteMap a b",
          "package": "fgl",
          "partial": "FM",
          "signature": "FiniteMap a b-\u003ea-\u003e(b-\u003eb-\u003eb)-\u003eb-\u003eFiniteMap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:accumFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "addToFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e a -\u003e b -\u003e FiniteMap a b",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#addToFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "addToFM",
          "normalized": "FiniteMap a b-\u003ea-\u003eb-\u003eFiniteMap a b",
          "package": "fgl",
          "partial": "To FM",
          "signature": "FiniteMap a b-\u003ea-\u003eb-\u003eFiniteMap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:addToFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "delFromFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e a -\u003e FiniteMap a b",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#delFromFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "delFromFM",
          "normalized": "FiniteMap a b-\u003ea-\u003eFiniteMap a b",
          "package": "fgl",
          "partial": "From FM",
          "signature": "FiniteMap a b-\u003ea-\u003eFiniteMap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:delFromFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "elemFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e a -\u003e Bool",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#elemFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "elemFM",
          "normalized": "FiniteMap a b-\u003ea-\u003eBool",
          "package": "fgl",
          "partial": "FM",
          "signature": "FiniteMap a b-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:elemFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "emptyFM",
          "package": "fgl",
          "signature": "FiniteMap a b",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#emptyFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "emptyFM",
          "package": "fgl",
          "partial": "FM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:emptyFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "fmToList",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e [(a, b)]",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#fmToList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "fmToList",
          "normalized": "FiniteMap a b-\u003e[(a,b)]",
          "package": "fgl",
          "partial": "To List",
          "signature": "FiniteMap a b-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:fmToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "isEmptyFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e Bool",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#isEmptyFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "isEmptyFM",
          "normalized": "FiniteMap a b-\u003eBool",
          "package": "fgl",
          "partial": "Empty FM",
          "signature": "FiniteMap a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:isEmptyFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "lookupFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e a -\u003e Maybe b",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#lookupFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "lookupFM",
          "normalized": "FiniteMap a b-\u003ea-\u003eMaybe b",
          "package": "fgl",
          "partial": "FM",
          "signature": "FiniteMap a b-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:lookupFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "maxFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e Maybe (a, b)",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#maxFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "maxFM",
          "normalized": "FiniteMap a b-\u003eMaybe(a,b)",
          "package": "fgl",
          "partial": "FM",
          "signature": "FiniteMap a b-\u003eMaybe(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:maxFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "minFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e Maybe (a, b)",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#minFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "minFM",
          "normalized": "FiniteMap a b-\u003eMaybe(a,b)",
          "package": "fgl",
          "partial": "FM",
          "signature": "FiniteMap a b-\u003eMaybe(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:minFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "predFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e a -\u003e Maybe (a, b)",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#predFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "predFM",
          "normalized": "FiniteMap a b-\u003ea-\u003eMaybe(a,b)",
          "package": "fgl",
          "partial": "FM",
          "signature": "FiniteMap a b-\u003ea-\u003eMaybe(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:predFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapplies lookup to an interval\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "rangeFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e a -\u003e a -\u003e [b]",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#rangeFM",
          "type": "function"
        },
        "index": {
          "description": "applies lookup to an interval",
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "rangeFM",
          "normalized": "FiniteMap a b-\u003ea-\u003ea-\u003e[b]",
          "package": "fgl",
          "partial": "FM",
          "signature": "FiniteMap a b-\u003ea-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:rangeFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "sizeFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e Int",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#sizeFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "sizeFM",
          "normalized": "FiniteMap a b-\u003eInt",
          "package": "fgl",
          "partial": "FM",
          "signature": "FiniteMap a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:sizeFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecombines delFrom and lookup\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "splitFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e a -\u003e Maybe (FiniteMap a b, (a, b))",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#splitFM",
          "type": "function"
        },
        "index": {
          "description": "combines delFrom and lookup",
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "splitFM",
          "normalized": "FiniteMap a b-\u003ea-\u003eMaybe(FiniteMap a b,(a,b))",
          "package": "fgl",
          "partial": "FM",
          "signature": "FiniteMap a b-\u003ea-\u003eMaybe(FiniteMap a b,(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:splitFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecombines splitFM and minFM\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "splitMinFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e Maybe (FiniteMap a b, (a, b))",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#splitMinFM",
          "type": "function"
        },
        "index": {
          "description": "combines splitFM and minFM",
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "splitMinFM",
          "normalized": "FiniteMap a b-\u003eMaybe(FiniteMap a b,(a,b))",
          "package": "fgl",
          "partial": "Min FM",
          "signature": "FiniteMap a b-\u003eMaybe(FiniteMap a b,(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:splitMinFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "succFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e a -\u003e Maybe (a, b)",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#succFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "succFM",
          "normalized": "FiniteMap a b-\u003ea-\u003eMaybe(a,b)",
          "package": "fgl",
          "partial": "FM",
          "signature": "FiniteMap a b-\u003ea-\u003eMaybe(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:succFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapplies function to stored entry\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "updFM",
          "package": "fgl",
          "signature": "FiniteMap a b -\u003e a -\u003e (b -\u003e b) -\u003e FiniteMap a b",
          "source": "src/Data-Graph-Inductive-Internal-FiniteMap.html#updFM",
          "type": "function"
        },
        "index": {
          "description": "applies function to stored entry",
          "hierarchy": "Data Graph Inductive Internal FiniteMap",
          "module": "Data.Graph.Inductive.Internal.FiniteMap",
          "name": "updFM",
          "normalized": "FiniteMap a b-\u003ea-\u003e(b-\u003eb)-\u003eFiniteMap a b",
          "package": "fgl",
          "partial": "FM",
          "signature": "FiniteMap a b-\u003ea-\u003e(b-\u003eb)-\u003eFiniteMap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-FiniteMap.html#v:updFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePairing heap implementation of dictionary\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "Heap",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html",
          "type": "module"
        },
        "index": {
          "description": "Pairing heap implementation of dictionary",
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "Heap",
          "package": "fgl",
          "partial": "Heap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "Heap",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#Heap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "Heap",
          "package": "fgl",
          "partial": "Heap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#t:Heap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "Empty",
          "package": "fgl",
          "signature": "Empty",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#Heap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "Empty",
          "package": "fgl",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "Node",
          "package": "fgl",
          "signature": "Node a b [Heap a b]",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#Heap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "Node",
          "normalized": "Node a b[Heap a b]",
          "package": "fgl",
          "partial": "Node",
          "signature": "Node a b[Heap a b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "build",
          "package": "fgl",
          "signature": "[(a, b)] -\u003e Heap a b",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#build",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "build",
          "normalized": "[(a,b)]-\u003eHeap a b",
          "package": "fgl",
          "signature": "[(a,b)]-\u003eHeap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "deleteMin",
          "package": "fgl",
          "signature": "Heap a b -\u003e Heap a b",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#deleteMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "deleteMin",
          "normalized": "Heap a b-\u003eHeap a b",
          "package": "fgl",
          "partial": "Min",
          "signature": "Heap a b-\u003eHeap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "empty",
          "package": "fgl",
          "signature": "Heap a b",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "empty",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "findMin",
          "package": "fgl",
          "signature": "Heap a b -\u003e (a, b)",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#findMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "findMin",
          "normalized": "Heap a b-\u003e(a,b)",
          "package": "fgl",
          "partial": "Min",
          "signature": "Heap a b-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "heapsort",
          "package": "fgl",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#heapsort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "heapsort",
          "normalized": "[a]-\u003e[a]",
          "package": "fgl",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:heapsort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "insert",
          "package": "fgl",
          "signature": "(a, b) -\u003e Heap a b -\u003e Heap a b",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "insert",
          "normalized": "(a,b)-\u003eHeap a b-\u003eHeap a b",
          "package": "fgl",
          "signature": "(a,b)-\u003eHeap a b-\u003eHeap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "isEmpty",
          "package": "fgl",
          "signature": "Heap a b -\u003e Bool",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#isEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "isEmpty",
          "normalized": "Heap a b-\u003eBool",
          "package": "fgl",
          "partial": "Empty",
          "signature": "Heap a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "merge",
          "package": "fgl",
          "signature": "Heap a b -\u003e Heap a b -\u003e Heap a b",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#merge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "merge",
          "normalized": "Heap a b-\u003eHeap a b-\u003eHeap a b",
          "package": "fgl",
          "signature": "Heap a b-\u003eHeap a b-\u003eHeap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "mergeAll",
          "package": "fgl",
          "signature": "[Heap a b] -\u003e Heap a b",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#mergeAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "mergeAll",
          "normalized": "[Heap a b]-\u003eHeap a b",
          "package": "fgl",
          "partial": "All",
          "signature": "[Heap a b]-\u003eHeap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:mergeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "splitMin",
          "package": "fgl",
          "signature": "Heap a b -\u003e (a, b, Heap a b)",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#splitMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "splitMin",
          "normalized": "Heap a b-\u003e(a,b,Heap a b)",
          "package": "fgl",
          "partial": "Min",
          "signature": "Heap a b-\u003e(a,b,Heap a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:splitMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "toList",
          "package": "fgl",
          "signature": "Heap a b -\u003e [(a, b)]",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "toList",
          "normalized": "Heap a b-\u003e[(a,b)]",
          "package": "fgl",
          "partial": "List",
          "signature": "Heap a b-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "unit",
          "package": "fgl",
          "signature": "a -\u003e b -\u003e Heap a b",
          "source": "src/Data-Graph-Inductive-Internal-Heap.html#unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Heap",
          "module": "Data.Graph.Inductive.Internal.Heap",
          "name": "unit",
          "normalized": "a-\u003eb-\u003eHeap a b",
          "package": "fgl",
          "signature": "a-\u003eb-\u003eHeap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Heap.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "Queue",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-Queue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Queue",
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "Queue",
          "package": "fgl",
          "partial": "Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "Queue",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-Queue.html#Queue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Queue",
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "Queue",
          "package": "fgl",
          "partial": "Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#t:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "MkQueue",
          "package": "fgl",
          "signature": "MkQueue [a] [a]",
          "source": "src/Data-Graph-Inductive-Internal-Queue.html#Queue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Queue",
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "MkQueue",
          "normalized": "MkQueue[a][a]",
          "package": "fgl",
          "partial": "Mk Queue",
          "signature": "MkQueue[a][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#v:MkQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "mkQueue",
          "package": "fgl",
          "signature": "Queue a",
          "source": "src/Data-Graph-Inductive-Internal-Queue.html#mkQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Queue",
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "mkQueue",
          "package": "fgl",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#v:mkQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "queueEmpty",
          "package": "fgl",
          "signature": "Queue a -\u003e Bool",
          "source": "src/Data-Graph-Inductive-Internal-Queue.html#queueEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Queue",
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "queueEmpty",
          "normalized": "Queue a-\u003eBool",
          "package": "fgl",
          "partial": "Empty",
          "signature": "Queue a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#v:queueEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "queueGet",
          "package": "fgl",
          "signature": "Queue a -\u003e (a, Queue a)",
          "source": "src/Data-Graph-Inductive-Internal-Queue.html#queueGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Queue",
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "queueGet",
          "normalized": "Queue a-\u003e(a,Queue a)",
          "package": "fgl",
          "partial": "Get",
          "signature": "Queue a-\u003e(a,Queue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#v:queueGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "queuePut",
          "package": "fgl",
          "signature": "a -\u003e Queue a -\u003e Queue a",
          "source": "src/Data-Graph-Inductive-Internal-Queue.html#queuePut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Queue",
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "queuePut",
          "normalized": "a-\u003eQueue a-\u003eQueue a",
          "package": "fgl",
          "partial": "Put",
          "signature": "a-\u003eQueue a-\u003eQueue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#v:queuePut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "queuePutList",
          "package": "fgl",
          "signature": "[a] -\u003e Queue a -\u003e Queue a",
          "source": "src/Data-Graph-Inductive-Internal-Queue.html#queuePutList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Queue",
          "module": "Data.Graph.Inductive.Internal.Queue",
          "name": "queuePutList",
          "normalized": "[a]-\u003eQueue a-\u003eQueue a",
          "package": "fgl",
          "partial": "Put List",
          "signature": "[a]-\u003eQueue a-\u003eQueue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Queue.html#v:queuePutList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInward directed trees as lists of paths.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "RootPath",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-RootPath.html",
          "type": "module"
        },
        "index": {
          "description": "Inward directed trees as lists of paths",
          "hierarchy": "Data Graph Inductive Internal RootPath",
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "RootPath",
          "package": "fgl",
          "partial": "Root Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "LRTree",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-RootPath.html#LRTree",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal RootPath",
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "LRTree",
          "package": "fgl",
          "partial": "LRTree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#t:LRTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "RTree",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-RootPath.html#RTree",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal RootPath",
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "RTree",
          "package": "fgl",
          "partial": "RTree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#t:RTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "getDistance",
          "package": "fgl",
          "signature": "Node -\u003e LRTree a -\u003e a",
          "source": "src/Data-Graph-Inductive-Internal-RootPath.html#getDistance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal RootPath",
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "getDistance",
          "normalized": "Node-\u003eLRTree a-\u003ea",
          "package": "fgl",
          "partial": "Distance",
          "signature": "Node-\u003eLRTree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#v:getDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "getLPath",
          "package": "fgl",
          "signature": "Node -\u003e LRTree a -\u003e LPath a",
          "source": "src/Data-Graph-Inductive-Internal-RootPath.html#getLPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal RootPath",
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "getLPath",
          "normalized": "Node-\u003eLRTree a-\u003eLPath a",
          "package": "fgl",
          "partial": "LPath",
          "signature": "Node-\u003eLRTree a-\u003eLPath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#v:getLPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "getLPathNodes",
          "package": "fgl",
          "signature": "Node -\u003e LRTree a -\u003e Path",
          "source": "src/Data-Graph-Inductive-Internal-RootPath.html#getLPathNodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal RootPath",
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "getLPathNodes",
          "normalized": "Node-\u003eLRTree a-\u003ePath",
          "package": "fgl",
          "partial": "LPath Nodes",
          "signature": "Node-\u003eLRTree a-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#v:getLPathNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "getPath",
          "package": "fgl",
          "signature": "Node -\u003e RTree -\u003e Path",
          "source": "src/Data-Graph-Inductive-Internal-RootPath.html#getPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal RootPath",
          "module": "Data.Graph.Inductive.Internal.RootPath",
          "name": "getPath",
          "normalized": "Node-\u003eRTree-\u003ePath",
          "package": "fgl",
          "partial": "Path",
          "signature": "Node-\u003eRTree-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-RootPath.html#v:getPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThreading Combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "Thread",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-Thread.html",
          "type": "module"
        },
        "index": {
          "description": "Threading Combinators",
          "hierarchy": "Data Graph Inductive Internal Thread",
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "Thread",
          "package": "fgl",
          "partial": "Thread",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "Collect",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-Thread.html#Collect",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Thread",
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "Collect",
          "package": "fgl",
          "partial": "Collect",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#t:Collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "Split",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-Thread.html#Split",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Thread",
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "Split",
          "package": "fgl",
          "partial": "Split",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#t:Split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "SplitM",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-Thread.html#SplitM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Thread",
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "SplitM",
          "package": "fgl",
          "partial": "Split",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#t:SplitM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "Thread",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Internal-Thread.html#Thread",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Thread",
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "Thread",
          "package": "fgl",
          "partial": "Thread",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#t:Thread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "splitPar",
          "package": "fgl",
          "signature": "Split t i r -\u003e Split u j s -\u003e Split (t, u) (i, j) (r, s)",
          "source": "src/Data-Graph-Inductive-Internal-Thread.html#splitPar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Thread",
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "splitPar",
          "normalized": "Split a b c-\u003eSplit d e f-\u003eSplit(a,d)(b,e)(c,f)",
          "package": "fgl",
          "partial": "Par",
          "signature": "Split t i r-\u003eSplit u j s-\u003eSplit(t,u)(i,j)(r,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#v:splitPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "splitParM",
          "package": "fgl",
          "signature": "SplitM t i r -\u003e Split u j s -\u003e SplitM (t, u) (i, j) (r, s)",
          "source": "src/Data-Graph-Inductive-Internal-Thread.html#splitParM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Thread",
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "splitParM",
          "normalized": "SplitM a b c-\u003eSplit d e f-\u003eSplitM(a,d)(b,e)(c,f)",
          "package": "fgl",
          "partial": "Par",
          "signature": "SplitM t i r-\u003eSplit u j s-\u003eSplitM(t,u)(i,j)(r,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#v:splitParM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "threadList",
          "package": "fgl",
          "signature": "Collect r c -\u003e Split t i r -\u003e [i] -\u003e t -\u003e (c, t)",
          "source": "src/Data-Graph-Inductive-Internal-Thread.html#threadList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Thread",
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "threadList",
          "normalized": "Collect a b-\u003eSplit c d a-\u003e[d]-\u003ec-\u003e(b,c)",
          "package": "fgl",
          "partial": "List",
          "signature": "Collect r c-\u003eSplit t i r-\u003e[i]-\u003et-\u003e(c,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#v:threadList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "threadList'",
          "package": "fgl",
          "signature": "Collect r c -\u003e Split t i r -\u003e [i] -\u003e t -\u003e (c, t)",
          "source": "src/Data-Graph-Inductive-Internal-Thread.html#threadList%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Thread",
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "threadList'",
          "normalized": "Collect a b-\u003eSplit c d a-\u003e[d]-\u003ec-\u003e(b,c)",
          "package": "fgl",
          "partial": "List'",
          "signature": "Collect r c-\u003eSplit t i r-\u003e[i]-\u003et-\u003e(c,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#v:threadList-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "threadMaybe",
          "package": "fgl",
          "signature": "(i -\u003e r -\u003e a) -\u003e Split t i r -\u003e SplitM t j i -\u003e SplitM t j a",
          "source": "src/Data-Graph-Inductive-Internal-Thread.html#threadMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Thread",
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "threadMaybe",
          "normalized": "(a-\u003eb-\u003ec)-\u003eSplit d a b-\u003eSplitM d e a-\u003eSplitM d e c",
          "package": "fgl",
          "partial": "Maybe",
          "signature": "(i-\u003er-\u003ea)-\u003eSplit t i r-\u003eSplitM t j i-\u003eSplitM t j a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#v:threadMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "threadMaybe'",
          "package": "fgl",
          "signature": "(r -\u003e a) -\u003e Split t i r -\u003e Split t j (Maybe i) -\u003e Split t j (Maybe a)",
          "source": "src/Data-Graph-Inductive-Internal-Thread.html#threadMaybe%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Internal Thread",
          "module": "Data.Graph.Inductive.Internal.Thread",
          "name": "threadMaybe'",
          "normalized": "(a-\u003eb)-\u003eSplit c d a-\u003eSplit c e(Maybe d)-\u003eSplit c e(Maybe b)",
          "package": "fgl",
          "partial": "Maybe'",
          "signature": "(r-\u003ea)-\u003eSplit t i r-\u003eSplit t j(Maybe i)-\u003eSplit t j(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Internal-Thread.html#v:threadMaybe-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStatic IOArray-based Graphs  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "IOArray",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Monad-IOArray.html",
          "type": "module"
        },
        "index": {
          "description": "Static IOArray-based Graphs",
          "hierarchy": "Data Graph Inductive Monad IOArray",
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "IOArray",
          "package": "fgl",
          "partial": "IOArray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "Context'",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Monad-IOArray.html#Context%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad IOArray",
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "Context'",
          "package": "fgl",
          "partial": "Context'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#t:Context-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "GraphRep",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Monad-IOArray.html#GraphRep",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad IOArray",
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "GraphRep",
          "package": "fgl",
          "partial": "Graph Rep",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#t:GraphRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "SGr",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Monad-IOArray.html#SGr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad IOArray",
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "SGr",
          "package": "fgl",
          "partial": "SGr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#t:SGr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "USGr",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Monad-IOArray.html#USGr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad IOArray",
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "USGr",
          "package": "fgl",
          "partial": "USGr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#t:USGr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "SGr",
          "package": "fgl",
          "signature": "SGr (GraphRep a b)",
          "source": "src/Data-Graph-Inductive-Monad-IOArray.html#SGr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad IOArray",
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "SGr",
          "package": "fgl",
          "partial": "SGr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#v:SGr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "defaultGraphSize",
          "package": "fgl",
          "signature": "Int",
          "source": "src/Data-Graph-Inductive-Monad-IOArray.html#defaultGraphSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad IOArray",
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "defaultGraphSize",
          "package": "fgl",
          "partial": "Graph Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#v:defaultGraphSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "emptyN",
          "package": "fgl",
          "signature": "Int -\u003e IO (SGr a b)",
          "source": "src/Data-Graph-Inductive-Monad-IOArray.html#emptyN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad IOArray",
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "emptyN",
          "normalized": "Int-\u003eIO(SGr a b)",
          "package": "fgl",
          "signature": "Int-\u003eIO(SGr a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#v:emptyN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter list (of successors/predecessors) through a boolean ST array\n representing deleted marks\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "removeDel",
          "package": "fgl",
          "signature": "IOArray Node Bool -\u003e Adj b -\u003e IO (Adj b)",
          "source": "src/Data-Graph-Inductive-Monad-IOArray.html#removeDel",
          "type": "function"
        },
        "index": {
          "description": "filter list of successors predecessors through boolean ST array representing deleted marks",
          "hierarchy": "Data Graph Inductive Monad IOArray",
          "module": "Data.Graph.Inductive.Monad.IOArray",
          "name": "removeDel",
          "normalized": "IOArray Node Bool-\u003eAdj a-\u003eIO(Adj a)",
          "package": "fgl",
          "partial": "Del",
          "signature": "IOArray Node Bool-\u003eAdj b-\u003eIO(Adj b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad-IOArray.html#v:removeDel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Graphs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Monad",
          "name": "Monad",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic Graphs",
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "Monad",
          "package": "fgl",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "GraphM",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Monad.html#GraphM",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "GraphM",
          "package": "fgl",
          "partial": "Graph",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#t:GraphM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "contextM",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e Node -\u003e m (Context a b)",
          "source": "src/Data-Graph-Inductive-Monad.html#contextM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "contextM",
          "normalized": "a(b c d)-\u003eNode-\u003ea(Context c d)",
          "package": "fgl",
          "signature": "m(gr a b)-\u003eNode-\u003em(Context a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:contextM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "delNodeM",
          "package": "fgl",
          "signature": "Node -\u003e m (gr a b) -\u003e m (gr a b)",
          "source": "src/Data-Graph-Inductive-Monad.html#delNodeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "delNodeM",
          "normalized": "Node-\u003ea(b c d)-\u003ea(b c d)",
          "package": "fgl",
          "partial": "Node",
          "signature": "Node-\u003em(gr a b)-\u003em(gr a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:delNodeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "delNodesM",
          "package": "fgl",
          "signature": "[Node] -\u003e m (gr a b) -\u003e m (gr a b)",
          "source": "src/Data-Graph-Inductive-Monad.html#delNodesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "delNodesM",
          "normalized": "[Node]-\u003ea(b c d)-\u003ea(b c d)",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "[Node]-\u003em(gr a b)-\u003em(gr a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:delNodesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "edgesM",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e m [Edge]",
          "source": "src/Data-Graph-Inductive-Monad.html#edgesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "edgesM",
          "normalized": "a(b c d)-\u003ea[Edge]",
          "package": "fgl",
          "signature": "m(gr a b)-\u003em[Edge]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:edgesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "emptyM",
          "package": "fgl",
          "signature": "m (gr a b)",
          "source": "src/Data-Graph-Inductive-Monad.html#emptyM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "emptyM",
          "package": "fgl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:emptyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "isEmptyM",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e m Bool",
          "source": "src/Data-Graph-Inductive-Monad.html#isEmptyM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "isEmptyM",
          "normalized": "a(b c d)-\u003ea Bool",
          "package": "fgl",
          "partial": "Empty",
          "signature": "m(gr a b)-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:isEmptyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "labEdgesM",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e m [LEdge b]",
          "source": "src/Data-Graph-Inductive-Monad.html#labEdgesM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "labEdgesM",
          "normalized": "a(b c d)-\u003ea[LEdge d]",
          "package": "fgl",
          "partial": "Edges",
          "signature": "m(gr a b)-\u003em[LEdge b]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:labEdgesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "labM",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e Node -\u003e m (Maybe a)",
          "source": "src/Data-Graph-Inductive-Monad.html#labM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "labM",
          "normalized": "a(b c d)-\u003eNode-\u003ea(Maybe c)",
          "package": "fgl",
          "signature": "m(gr a b)-\u003eNode-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:labM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "labNodesM",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e m [LNode a]",
          "source": "src/Data-Graph-Inductive-Monad.html#labNodesM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "labNodesM",
          "normalized": "a(b c d)-\u003ea[LNode c]",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "m(gr a b)-\u003em[LNode a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:labNodesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "matchAnyM",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e m (GDecomp gr a b)",
          "source": "src/Data-Graph-Inductive-Monad.html#matchAnyM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "matchAnyM",
          "normalized": "a(b c d)-\u003ea(GDecomp b c d)",
          "package": "fgl",
          "partial": "Any",
          "signature": "m(gr a b)-\u003em(GDecomp gr a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:matchAnyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "matchM",
          "package": "fgl",
          "signature": "Node -\u003e m (gr a b) -\u003e m (Decomp gr a b)",
          "source": "src/Data-Graph-Inductive-Monad.html#matchM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "matchM",
          "normalized": "Node-\u003ea(b c d)-\u003ea(Decomp b c d)",
          "package": "fgl",
          "signature": "Node-\u003em(gr a b)-\u003em(Decomp gr a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:matchM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "mkGraphM",
          "package": "fgl",
          "signature": "[LNode a] -\u003e [LEdge b] -\u003e m (gr a b)",
          "source": "src/Data-Graph-Inductive-Monad.html#mkGraphM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "mkGraphM",
          "normalized": "[LNode a]-\u003e[LEdge b]-\u003ec(d a b)",
          "package": "fgl",
          "partial": "Graph",
          "signature": "[LNode a]-\u003e[LEdge b]-\u003em(gr a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:mkGraphM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "mkUGraphM",
          "package": "fgl",
          "signature": "[Node] -\u003e [Edge] -\u003e m (gr () ())",
          "source": "src/Data-Graph-Inductive-Monad.html#mkUGraphM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "mkUGraphM",
          "normalized": "[Node]-\u003e[Edge]-\u003ea(b()())",
          "package": "fgl",
          "partial": "UGraph",
          "signature": "[Node]-\u003e[Edge]-\u003em(gr()())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:mkUGraphM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "newNodesM",
          "package": "fgl",
          "signature": "Int -\u003e m (gr a b) -\u003e m [Node]",
          "source": "src/Data-Graph-Inductive-Monad.html#newNodesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "newNodesM",
          "normalized": "Int-\u003ea(b c d)-\u003ea[Node]",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "Int-\u003em(gr a b)-\u003em[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:newNodesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "noNodesM",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e m Int",
          "source": "src/Data-Graph-Inductive-Monad.html#noNodesM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "noNodesM",
          "normalized": "a(b c d)-\u003ea Int",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "m(gr a b)-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:noNodesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "nodeRangeM",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e m (Node, Node)",
          "source": "src/Data-Graph-Inductive-Monad.html#nodeRangeM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "nodeRangeM",
          "normalized": "a(b c d)-\u003ea(Node,Node)",
          "package": "fgl",
          "partial": "Range",
          "signature": "m(gr a b)-\u003em(Node,Node)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:nodeRangeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Monad",
          "name": "nodesM",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e m [Node]",
          "source": "src/Data-Graph-Inductive-Monad.html#nodesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "nodesM",
          "normalized": "a(b c d)-\u003ea[Node]",
          "package": "fgl",
          "signature": "m(gr a b)-\u003em[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:nodesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egraph fold\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Monad",
          "name": "ufoldM",
          "package": "fgl",
          "signature": "(Context a b -\u003e c -\u003e c) -\u003e c -\u003e m (gr a b) -\u003e m c",
          "source": "src/Data-Graph-Inductive-Monad.html#ufoldM",
          "type": "function"
        },
        "index": {
          "description": "graph fold",
          "hierarchy": "Data Graph Inductive Monad",
          "module": "Data.Graph.Inductive.Monad",
          "name": "ufoldM",
          "normalized": "(Context a b-\u003ec-\u003ec)-\u003ec-\u003ed(e a b)-\u003ed c",
          "package": "fgl",
          "signature": "(Context a b-\u003ec-\u003ec)-\u003ec-\u003em(gr a b)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Monad.html#v:ufoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility methods to automatically generate and keep track of a mapping\n between node labels and \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "NodeMap",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-NodeMap.html",
          "type": "module"
        },
        "index": {
          "description": "Utility methods to automatically generate and keep track of mapping between node labels and Node",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "NodeMap",
          "package": "fgl",
          "partial": "Node Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "NodeMap",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-NodeMap.html#NodeMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "NodeMap",
          "package": "fgl",
          "partial": "Node Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#t:NodeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGraph construction monad; handles passing both the \u003ccode\u003e\u003ca\u003eNodeMap\u003c/a\u003e\u003c/code\u003e and the\n \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "NodeMapM",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-NodeMap.html#NodeMapM",
          "type": "type"
        },
        "index": {
          "description": "Graph construction monad handles passing both the NodeMap and the Graph",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "NodeMapM",
          "package": "fgl",
          "partial": "Node Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#t:NodeMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapEdge",
          "package": "fgl",
          "signature": "NodeMap a -\u003e (a, a) -\u003e g a b -\u003e g a b",
          "source": "src/Data-Graph-Inductive-NodeMap.html#delMapEdge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapEdge",
          "normalized": "NodeMap a-\u003e(a,a)-\u003eb a c-\u003eb a c",
          "package": "fgl",
          "partial": "Map Edge",
          "signature": "NodeMap a-\u003e(a,a)-\u003eg a b-\u003eg a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapEdgeM",
          "package": "fgl",
          "signature": "(a, a) -\u003e NodeMapM a b g ()",
          "source": "src/Data-Graph-Inductive-NodeMap.html#delMapEdgeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapEdgeM",
          "normalized": "(a,a)-\u003eNodeMapM a b c()",
          "package": "fgl",
          "partial": "Map Edge",
          "signature": "(a,a)-\u003eNodeMapM a b g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapEdgeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapEdges",
          "package": "fgl",
          "signature": "NodeMap a -\u003e [(a, a)] -\u003e g a b -\u003e g a b",
          "source": "src/Data-Graph-Inductive-NodeMap.html#delMapEdges",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapEdges",
          "normalized": "NodeMap a-\u003e[(a,a)]-\u003eb a c-\u003eb a c",
          "package": "fgl",
          "partial": "Map Edges",
          "signature": "NodeMap a-\u003e[(a,a)]-\u003eg a b-\u003eg a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapEdgesM",
          "package": "fgl",
          "signature": "[(a, a)] -\u003e NodeMapM a b g ()",
          "source": "src/Data-Graph-Inductive-NodeMap.html#delMapEdgesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapEdgesM",
          "normalized": "[(a,a)]-\u003eNodeMapM a b c()",
          "package": "fgl",
          "partial": "Map Edges",
          "signature": "[(a,a)]-\u003eNodeMapM a b g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapEdgesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapNode",
          "package": "fgl",
          "signature": "NodeMap a -\u003e a -\u003e g a b -\u003e g a b",
          "source": "src/Data-Graph-Inductive-NodeMap.html#delMapNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapNode",
          "normalized": "NodeMap a-\u003ea-\u003eb a c-\u003eb a c",
          "package": "fgl",
          "partial": "Map Node",
          "signature": "NodeMap a-\u003ea-\u003eg a b-\u003eg a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapNodeM",
          "package": "fgl",
          "signature": "a -\u003e NodeMapM a b g ()",
          "source": "src/Data-Graph-Inductive-NodeMap.html#delMapNodeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapNodeM",
          "normalized": "a-\u003eNodeMapM a b c()",
          "package": "fgl",
          "partial": "Map Node",
          "signature": "a-\u003eNodeMapM a b g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapNodeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapNodes",
          "package": "fgl",
          "signature": "NodeMap a -\u003e [a] -\u003e g a b -\u003e g a b",
          "source": "src/Data-Graph-Inductive-NodeMap.html#delMapNodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapNodes",
          "normalized": "NodeMap a-\u003e[a]-\u003eb a c-\u003eb a c",
          "package": "fgl",
          "partial": "Map Nodes",
          "signature": "NodeMap a-\u003e[a]-\u003eg a b-\u003eg a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapNodesM",
          "package": "fgl",
          "signature": "[a] -\u003e NodeMapM a b g ()",
          "source": "src/Data-Graph-Inductive-NodeMap.html#delMapNodesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "delMapNodesM",
          "normalized": "[a]-\u003eNodeMapM a b c()",
          "package": "fgl",
          "partial": "Map Nodes",
          "signature": "[a]-\u003eNodeMapM a b g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:delMapNodesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a mapping containing the nodes in the given graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "fromGraph",
          "package": "fgl",
          "signature": "g a b -\u003e NodeMap a",
          "source": "src/Data-Graph-Inductive-NodeMap.html#fromGraph",
          "type": "function"
        },
        "index": {
          "description": "Generate mapping containing the nodes in the given graph",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "fromGraph",
          "normalized": "a b c-\u003eNodeMap b",
          "package": "fgl",
          "partial": "Graph",
          "signature": "g a b-\u003eNodeMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:fromGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapEdge",
          "package": "fgl",
          "signature": "NodeMap a -\u003e (a, a, b) -\u003e g a b -\u003e g a b",
          "source": "src/Data-Graph-Inductive-NodeMap.html#insMapEdge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapEdge",
          "normalized": "NodeMap a-\u003e(a,a,b)-\u003ec a b-\u003ec a b",
          "package": "fgl",
          "partial": "Map Edge",
          "signature": "NodeMap a-\u003e(a,a,b)-\u003eg a b-\u003eg a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapEdgeM",
          "package": "fgl",
          "signature": "(a, a, b) -\u003e NodeMapM a b g ()",
          "source": "src/Data-Graph-Inductive-NodeMap.html#insMapEdgeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapEdgeM",
          "normalized": "(a,a,b)-\u003eNodeMapM a b c()",
          "package": "fgl",
          "partial": "Map Edge",
          "signature": "(a,a,b)-\u003eNodeMapM a b g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapEdgeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapEdges",
          "package": "fgl",
          "signature": "NodeMap a -\u003e [(a, a, b)] -\u003e g a b -\u003e g a b",
          "source": "src/Data-Graph-Inductive-NodeMap.html#insMapEdges",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapEdges",
          "normalized": "NodeMap a-\u003e[(a,a,b)]-\u003ec a b-\u003ec a b",
          "package": "fgl",
          "partial": "Map Edges",
          "signature": "NodeMap a-\u003e[(a,a,b)]-\u003eg a b-\u003eg a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapEdgesM",
          "package": "fgl",
          "signature": "[(a, a, b)] -\u003e NodeMapM a b g ()",
          "source": "src/Data-Graph-Inductive-NodeMap.html#insMapEdgesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapEdgesM",
          "normalized": "[(a,a,b)]-\u003eNodeMapM a b c()",
          "package": "fgl",
          "partial": "Map Edges",
          "signature": "[(a,a,b)]-\u003eNodeMapM a b g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapEdgesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapNode",
          "package": "fgl",
          "signature": "NodeMap a -\u003e a -\u003e g a b -\u003e (g a b, NodeMap a, LNode a)",
          "source": "src/Data-Graph-Inductive-NodeMap.html#insMapNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapNode",
          "normalized": "NodeMap a-\u003ea-\u003eb a c-\u003e(b a c,NodeMap a,LNode a)",
          "package": "fgl",
          "partial": "Map Node",
          "signature": "NodeMap a-\u003ea-\u003eg a b-\u003e(g a b,NodeMap a,LNode a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapNodeM",
          "package": "fgl",
          "signature": "a -\u003e NodeMapM a b g (LNode a)",
          "source": "src/Data-Graph-Inductive-NodeMap.html#insMapNodeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapNodeM",
          "normalized": "a-\u003eNodeMapM a b c(LNode a)",
          "package": "fgl",
          "partial": "Map Node",
          "signature": "a-\u003eNodeMapM a b g(LNode a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapNodeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapNode_",
          "package": "fgl",
          "signature": "NodeMap a -\u003e a -\u003e g a b -\u003e g a b",
          "source": "src/Data-Graph-Inductive-NodeMap.html#insMapNode_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapNode_",
          "normalized": "NodeMap a-\u003ea-\u003eb a c-\u003eb a c",
          "package": "fgl",
          "partial": "Map Node",
          "signature": "NodeMap a-\u003ea-\u003eg a b-\u003eg a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapNode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapNodes",
          "package": "fgl",
          "signature": "NodeMap a -\u003e [a] -\u003e g a b -\u003e (g a b, NodeMap a, [LNode a])",
          "source": "src/Data-Graph-Inductive-NodeMap.html#insMapNodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapNodes",
          "normalized": "NodeMap a-\u003e[a]-\u003eb a c-\u003e(b a c,NodeMap a,[LNode a])",
          "package": "fgl",
          "partial": "Map Nodes",
          "signature": "NodeMap a-\u003e[a]-\u003eg a b-\u003e(g a b,NodeMap a,[LNode a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapNodesM",
          "package": "fgl",
          "signature": "[a] -\u003e NodeMapM a b g [LNode a]",
          "source": "src/Data-Graph-Inductive-NodeMap.html#insMapNodesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapNodesM",
          "normalized": "[a]-\u003eNodeMapM a b c[LNode a]",
          "package": "fgl",
          "partial": "Map Nodes",
          "signature": "[a]-\u003eNodeMapM a b g[LNode a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapNodesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapNodes_",
          "package": "fgl",
          "signature": "NodeMap a -\u003e [a] -\u003e g a b -\u003e g a b",
          "source": "src/Data-Graph-Inductive-NodeMap.html#insMapNodes_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "insMapNodes_",
          "normalized": "NodeMap a-\u003e[a]-\u003eb a c-\u003eb a c",
          "package": "fgl",
          "partial": "Map Nodes",
          "signature": "NodeMap a-\u003e[a]-\u003eg a b-\u003eg a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:insMapNodes_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003e from the node labels.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkEdge",
          "package": "fgl",
          "signature": "NodeMap a -\u003e (a, a, b) -\u003e Maybe (LEdge b)",
          "source": "src/Data-Graph-Inductive-NodeMap.html#mkEdge",
          "type": "function"
        },
        "index": {
          "description": "Generate LEdge from the node labels",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkEdge",
          "normalized": "NodeMap a-\u003e(a,a,b)-\u003eMaybe(LEdge b)",
          "package": "fgl",
          "partial": "Edge",
          "signature": "NodeMap a-\u003e(a,a,b)-\u003eMaybe(LEdge b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkEdgeM",
          "package": "fgl",
          "signature": "(a, a, b) -\u003e NodeMapM a b g (Maybe (LEdge b))",
          "source": "src/Data-Graph-Inductive-NodeMap.html#mkEdgeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkEdgeM",
          "normalized": "(a,a,b)-\u003eNodeMapM a b c(Maybe(LEdge b))",
          "package": "fgl",
          "partial": "Edge",
          "signature": "(a,a,b)-\u003eNodeMapM a b g(Maybe(LEdge b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkEdgeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a list of \u003ccode\u003e\u003ca\u003eLEdge\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkEdges",
          "package": "fgl",
          "signature": "NodeMap a -\u003e [(a, a, b)] -\u003e Maybe [LEdge b]",
          "source": "src/Data-Graph-Inductive-NodeMap.html#mkEdges",
          "type": "function"
        },
        "index": {
          "description": "Generates list of LEdge",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkEdges",
          "normalized": "NodeMap a-\u003e[(a,a,b)]-\u003eMaybe[LEdge b]",
          "package": "fgl",
          "partial": "Edges",
          "signature": "NodeMap a-\u003e[(a,a,b)]-\u003eMaybe[LEdge b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkEdgesM",
          "package": "fgl",
          "signature": "[(a, a, b)] -\u003e NodeMapM a b g (Maybe [LEdge b])",
          "source": "src/Data-Graph-Inductive-NodeMap.html#mkEdgesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkEdgesM",
          "normalized": "[(a,a,b)]-\u003eNodeMapM a b c(Maybe[LEdge b])",
          "package": "fgl",
          "partial": "Edges",
          "signature": "[(a,a,b)]-\u003eNodeMapM a b g(Maybe[LEdge b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkEdgesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkMapGraph",
          "package": "fgl",
          "signature": "[a] -\u003e [(a, a, b)] -\u003e (g a b, NodeMap a)",
          "source": "src/Data-Graph-Inductive-NodeMap.html#mkMapGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkMapGraph",
          "normalized": "[a]-\u003e[(a,a,b)]-\u003e(c a b,NodeMap a)",
          "package": "fgl",
          "partial": "Map Graph",
          "signature": "[a]-\u003e[(a,a,b)]-\u003e(g a b,NodeMap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkMapGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a labelled node from the given label.  Will return the same node\n for the same label.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkNode",
          "package": "fgl",
          "signature": "NodeMap a -\u003e a -\u003e (LNode a, NodeMap a)",
          "source": "src/Data-Graph-Inductive-NodeMap.html#mkNode",
          "type": "function"
        },
        "index": {
          "description": "Generate labelled node from the given label Will return the same node for the same label",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkNode",
          "normalized": "NodeMap a-\u003ea-\u003e(LNode a,NodeMap a)",
          "package": "fgl",
          "partial": "Node",
          "signature": "NodeMap a-\u003ea-\u003e(LNode a,NodeMap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic node construction.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkNodeM",
          "package": "fgl",
          "signature": "a -\u003e NodeMapM a b g (LNode a)",
          "source": "src/Data-Graph-Inductive-NodeMap.html#mkNodeM",
          "type": "function"
        },
        "index": {
          "description": "Monadic node construction",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkNodeM",
          "normalized": "a-\u003eNodeMapM a b c(LNode a)",
          "package": "fgl",
          "partial": "Node",
          "signature": "a-\u003eNodeMapM a b g(LNode a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkNodeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a labelled node and throw away the modified \u003ccode\u003e\u003ca\u003eNodeMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkNode_",
          "package": "fgl",
          "signature": "NodeMap a -\u003e a -\u003e LNode a",
          "source": "src/Data-Graph-Inductive-NodeMap.html#mkNode_",
          "type": "function"
        },
        "index": {
          "description": "Generate labelled node and throw away the modified NodeMap",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkNode_",
          "normalized": "NodeMap a-\u003ea-\u003eLNode a",
          "package": "fgl",
          "partial": "Node",
          "signature": "NodeMap a-\u003ea-\u003eLNode a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkNode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a list of nodes.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkNodes",
          "package": "fgl",
          "signature": "NodeMap a -\u003e [a] -\u003e ([LNode a], NodeMap a)",
          "source": "src/Data-Graph-Inductive-NodeMap.html#mkNodes",
          "type": "function"
        },
        "index": {
          "description": "Construct list of nodes",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkNodes",
          "normalized": "NodeMap a-\u003e[a]-\u003e([LNode a],NodeMap a)",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "NodeMap a-\u003e[a]-\u003e([LNode a],NodeMap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkNodesM",
          "package": "fgl",
          "signature": "[a] -\u003e NodeMapM a b g [LNode a]",
          "source": "src/Data-Graph-Inductive-NodeMap.html#mkNodesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkNodesM",
          "normalized": "[a]-\u003eNodeMapM a b c[LNode a]",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "[a]-\u003eNodeMapM a b g[LNode a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkNodesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a list of nodes and throw away the modified \u003ccode\u003e\u003ca\u003eNodeMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkNodes_",
          "package": "fgl",
          "signature": "NodeMap a -\u003e [a] -\u003e [LNode a]",
          "source": "src/Data-Graph-Inductive-NodeMap.html#mkNodes_",
          "type": "function"
        },
        "index": {
          "description": "Construct list of nodes and throw away the modified NodeMap",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "mkNodes_",
          "normalized": "NodeMap a-\u003e[a]-\u003e[LNode a]",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "NodeMap a-\u003e[a]-\u003e[LNode a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:mkNodes_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new, empty mapping.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "new",
          "package": "fgl",
          "signature": "NodeMap a",
          "source": "src/Data-Graph-Inductive-NodeMap.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new empty mapping",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "new",
          "package": "fgl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a construction; return the value of the computation, the modified\n \u003ccode\u003e\u003ca\u003eNodeMap\u003c/a\u003e\u003c/code\u003e, and the modified \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "run",
          "package": "fgl",
          "signature": "g a b -\u003e NodeMapM a b g r -\u003e (r, (NodeMap a, g a b))",
          "source": "src/Data-Graph-Inductive-NodeMap.html#run",
          "type": "function"
        },
        "index": {
          "description": "Run construction return the value of the computation the modified NodeMap and the modified Graph",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "run",
          "normalized": "a b c-\u003eNodeMapM b c a d-\u003e(d,(NodeMap b,a b c))",
          "package": "fgl",
          "signature": "g a b-\u003eNodeMapM a b g r-\u003e(r,(NodeMap a,g a b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a construction and only return the \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "run_",
          "package": "fgl",
          "signature": "g a b -\u003e NodeMapM a b g r -\u003e g a b",
          "source": "src/Data-Graph-Inductive-NodeMap.html#run_",
          "type": "function"
        },
        "index": {
          "description": "Run construction and only return the Graph",
          "hierarchy": "Data Graph Inductive NodeMap",
          "module": "Data.Graph.Inductive.NodeMap",
          "name": "run_",
          "normalized": "a b c-\u003eNodeMapM b c a d-\u003ea b c",
          "package": "fgl",
          "signature": "g a b-\u003eNodeMapM a b g r-\u003eg a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-NodeMap.html#v:run_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e\n using big-endian patricia tree (i.e. \u003ca\u003eData.IntMap\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThis module provides the following specialised functions to gain\n more performance, using GHC's RULES pragma:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003einsNode\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003einsEdge\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egmap\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003enmap\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eemap\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.PatriciaTree",
          "name": "PatriciaTree",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-PatriciaTree.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of Graph using big-endian patricia tree i.e Data.IntMap This module provides the following specialised functions to gain more performance using GHC RULES pragma insNode insEdge gmap nmap emap",
          "hierarchy": "Data Graph Inductive PatriciaTree",
          "module": "Data.Graph.Inductive.PatriciaTree",
          "name": "PatriciaTree",
          "package": "fgl",
          "partial": "Patricia Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-PatriciaTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.PatriciaTree",
          "name": "Gr",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-PatriciaTree.html#Gr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Graph Inductive PatriciaTree",
          "module": "Data.Graph.Inductive.PatriciaTree",
          "name": "Gr",
          "package": "fgl",
          "partial": "Gr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-PatriciaTree.html#t:Gr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.PatriciaTree",
          "name": "UGr",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-PatriciaTree.html#UGr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive PatriciaTree",
          "module": "Data.Graph.Inductive.PatriciaTree",
          "name": "UGr",
          "package": "fgl",
          "partial": "UGr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-PatriciaTree.html#t:UGr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.ArtPoint",
          "name": "ArtPoint",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-ArtPoint.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query ArtPoint",
          "module": "Data.Graph.Inductive.Query.ArtPoint",
          "name": "ArtPoint",
          "package": "fgl",
          "partial": "Art Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-ArtPoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the articulation points for a connected undirected graph,\n   by using the low numbers criteria:\n\u003c/p\u003e\u003cp\u003ea) The root node is an articulation point iff it has two or more children.\n\u003c/p\u003e\u003cp\u003eb) An non-root node v is an articulation point iff there exists at least\n      one child w of v such that lowNumber(w) \u003e= dfsNumber(v).\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.ArtPoint",
          "name": "ap",
          "package": "fgl",
          "signature": "gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-ArtPoint.html#ap",
          "type": "function"
        },
        "index": {
          "description": "Finds the articulation points for connected undirected graph by using the low numbers criteria The root node is an articulation point iff it has two or more children An non-root node is an articulation point iff there exists at least one child of such that lowNumber dfsNumber",
          "hierarchy": "Data Graph Inductive Query ArtPoint",
          "module": "Data.Graph.Inductive.Query.ArtPoint",
          "name": "ap",
          "normalized": "a b c-\u003e[Node]",
          "package": "fgl",
          "signature": "gr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-ArtPoint.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BCC",
          "name": "BCC",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-BCC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BCC",
          "module": "Data.Graph.Inductive.Query.BCC",
          "name": "BCC",
          "package": "fgl",
          "partial": "BCC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BCC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the bi-connected components of an undirected connected graph.\nIt first finds the articulation points of the graph. Then it disconnects the\ngraph on each articulation point and computes the connected components.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.BCC",
          "name": "bcc",
          "package": "fgl",
          "signature": "gr a b -\u003e [gr a b]",
          "source": "src/Data-Graph-Inductive-Query-BCC.html#bcc",
          "type": "function"
        },
        "index": {
          "description": "Finds the bi-connected components of an undirected connected graph It first finds the articulation points of the graph Then it disconnects the graph on each articulation point and computes the connected components",
          "hierarchy": "Data Graph Inductive Query BCC",
          "module": "Data.Graph.Inductive.Query.BCC",
          "name": "bcc",
          "normalized": "a b c-\u003e[a b c]",
          "package": "fgl",
          "signature": "gr a b-\u003e[gr a b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BCC.html#v:bcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBreadth-First Search Algorithms\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "BFS",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-BFS.html",
          "type": "module"
        },
        "index": {
          "description": "Breadth-First Search Algorithms",
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "BFS",
          "package": "fgl",
          "partial": "BFS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bfe",
          "package": "fgl",
          "signature": "Node -\u003e gr a b -\u003e [Edge]",
          "source": "src/Data-Graph-Inductive-Query-BFS.html#bfe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bfe",
          "normalized": "Node-\u003ea b c-\u003e[Edge]",
          "package": "fgl",
          "signature": "Node-\u003egr a b-\u003e[Edge]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bfe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bfen",
          "package": "fgl",
          "signature": "[Edge] -\u003e gr a b -\u003e [Edge]",
          "source": "src/Data-Graph-Inductive-Query-BFS.html#bfen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bfen",
          "normalized": "[Edge]-\u003ea b c-\u003e[Edge]",
          "package": "fgl",
          "signature": "[Edge]-\u003egr a b-\u003e[Edge]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bfen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bfs",
          "package": "fgl",
          "signature": "Node -\u003e gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-BFS.html#bfs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bfs",
          "normalized": "Node-\u003ea b c-\u003e[Node]",
          "package": "fgl",
          "signature": "Node-\u003egr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bfsWith",
          "package": "fgl",
          "signature": "(Context a b -\u003e c) -\u003e Node -\u003e gr a b -\u003e [c]",
          "source": "src/Data-Graph-Inductive-Query-BFS.html#bfsWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bfsWith",
          "normalized": "(Context a b-\u003ec)-\u003eNode-\u003ed a b-\u003e[c]",
          "package": "fgl",
          "partial": "With",
          "signature": "(Context a b-\u003ec)-\u003eNode-\u003egr a b-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bfsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bfsn",
          "package": "fgl",
          "signature": "[Node] -\u003e gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-BFS.html#bfsn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bfsn",
          "normalized": "[Node]-\u003ea b c-\u003e[Node]",
          "package": "fgl",
          "signature": "[Node]-\u003egr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bfsn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bfsnWith",
          "package": "fgl",
          "signature": "(Context a b -\u003e c) -\u003e [Node] -\u003e gr a b -\u003e [c]",
          "source": "src/Data-Graph-Inductive-Query-BFS.html#bfsnWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bfsnWith",
          "normalized": "(Context a b-\u003ec)-\u003e[Node]-\u003ed a b-\u003e[c]",
          "package": "fgl",
          "partial": "With",
          "signature": "(Context a b-\u003ec)-\u003e[Node]-\u003egr a b-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bfsnWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bft",
          "package": "fgl",
          "signature": "Node -\u003e gr a b -\u003e RTree",
          "source": "src/Data-Graph-Inductive-Query-BFS.html#bft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "bft",
          "normalized": "Node-\u003ea b c-\u003eRTree",
          "package": "fgl",
          "signature": "Node-\u003egr a b-\u003eRTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:bft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "esp",
          "package": "fgl",
          "signature": "Node -\u003e Node -\u003e gr a b -\u003e Path",
          "source": "src/Data-Graph-Inductive-Query-BFS.html#esp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "esp",
          "normalized": "Node-\u003eNode-\u003ea b c-\u003ePath",
          "package": "fgl",
          "signature": "Node-\u003eNode-\u003egr a b-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:esp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "lbft",
          "package": "fgl",
          "signature": "Node -\u003e gr a b -\u003e LRTree b",
          "source": "src/Data-Graph-Inductive-Query-BFS.html#lbft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "lbft",
          "normalized": "Node-\u003ea b c-\u003eLRTree c",
          "package": "fgl",
          "signature": "Node-\u003egr a b-\u003eLRTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:lbft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "lesp",
          "package": "fgl",
          "signature": "Node -\u003e Node -\u003e gr a b -\u003e LPath b",
          "source": "src/Data-Graph-Inductive-Query-BFS.html#lesp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "lesp",
          "normalized": "Node-\u003eNode-\u003ea b c-\u003eLPath c",
          "package": "fgl",
          "signature": "Node-\u003eNode-\u003egr a b-\u003eLPath b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:lesp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "level",
          "package": "fgl",
          "signature": "Node -\u003e gr a b -\u003e [(Node, Int)]",
          "source": "src/Data-Graph-Inductive-Query-BFS.html#level",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "level",
          "normalized": "Node-\u003ea b c-\u003e[(Node,Int)]",
          "package": "fgl",
          "signature": "Node-\u003egr a b-\u003e[(Node,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:level"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "leveln",
          "package": "fgl",
          "signature": "[(Node, Int)] -\u003e gr a b -\u003e [(Node, Int)]",
          "source": "src/Data-Graph-Inductive-Query-BFS.html#leveln",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query BFS",
          "module": "Data.Graph.Inductive.Query.BFS",
          "name": "leveln",
          "normalized": "[(Node,Int)]-\u003ea b c-\u003e[(Node,Int)]",
          "package": "fgl",
          "signature": "[(Node,Int)]-\u003egr a b-\u003e[(Node,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-BFS.html#v:leveln"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDepth-First Search  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "DFS",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-DFS.html",
          "type": "module"
        },
        "index": {
          "description": "Depth-First Search",
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "DFS",
          "package": "fgl",
          "partial": "DFS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "CFun",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#CFun",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "CFun",
          "package": "fgl",
          "partial": "CFun",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#t:CFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "components",
          "package": "fgl",
          "signature": "gr a b -\u003e [[Node]]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#components",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "components",
          "normalized": "a b c-\u003e[[Node]]",
          "package": "fgl",
          "signature": "gr a b-\u003e[[Node]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:components"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dff",
          "package": "fgl",
          "signature": "[Node] -\u003e gr a b -\u003e [Tree Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#dff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dff",
          "normalized": "[Node]-\u003ea b c-\u003e[Tree Node]",
          "package": "fgl",
          "signature": "[Node]-\u003egr a b-\u003e[Tree Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dff'",
          "package": "fgl",
          "signature": "gr a b -\u003e [Tree Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#dff%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dff'",
          "normalized": "a b c-\u003e[Tree Node]",
          "package": "fgl",
          "signature": "gr a b-\u003e[Tree Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dff-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dffWith",
          "package": "fgl",
          "signature": "CFun a b c -\u003e [Node] -\u003e gr a b -\u003e [Tree c]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#dffWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dffWith",
          "normalized": "CFun a b c-\u003e[Node]-\u003ed a b-\u003e[Tree c]",
          "package": "fgl",
          "partial": "With",
          "signature": "CFun a b c-\u003e[Node]-\u003egr a b-\u003e[Tree c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dffWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dffWith'",
          "package": "fgl",
          "signature": "CFun a b c -\u003e gr a b -\u003e [Tree c]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#dffWith%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dffWith'",
          "normalized": "CFun a b c-\u003ed a b-\u003e[Tree c]",
          "package": "fgl",
          "partial": "With'",
          "signature": "CFun a b c-\u003egr a b-\u003e[Tree c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dffWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dfs",
          "package": "fgl",
          "signature": "[Node] -\u003e gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#dfs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dfs",
          "normalized": "[Node]-\u003ea b c-\u003e[Node]",
          "package": "fgl",
          "signature": "[Node]-\u003egr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dfs'",
          "package": "fgl",
          "signature": "gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#dfs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dfs'",
          "normalized": "a b c-\u003e[Node]",
          "package": "fgl",
          "signature": "gr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dfs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dfsWith",
          "package": "fgl",
          "signature": "CFun a b c -\u003e [Node] -\u003e gr a b -\u003e [c]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#dfsWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dfsWith",
          "normalized": "CFun a b c-\u003e[Node]-\u003ed a b-\u003e[c]",
          "package": "fgl",
          "partial": "With",
          "signature": "CFun a b c-\u003e[Node]-\u003egr a b-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dfsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dfsWith'",
          "package": "fgl",
          "signature": "CFun a b c -\u003e gr a b -\u003e [c]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#dfsWith%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "dfsWith'",
          "normalized": "CFun a b c-\u003ed a b-\u003e[c]",
          "package": "fgl",
          "partial": "With'",
          "signature": "CFun a b c-\u003egr a b-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:dfsWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "isConnected",
          "package": "fgl",
          "signature": "gr a b -\u003e Bool",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#isConnected",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "isConnected",
          "normalized": "a b c-\u003eBool",
          "package": "fgl",
          "partial": "Connected",
          "signature": "gr a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:isConnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "noComponents",
          "package": "fgl",
          "signature": "gr a b -\u003e Int",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#noComponents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "noComponents",
          "normalized": "a b c-\u003eInt",
          "package": "fgl",
          "partial": "Components",
          "signature": "gr a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:noComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "rdff",
          "package": "fgl",
          "signature": "[Node] -\u003e gr a b -\u003e [Tree Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#rdff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "rdff",
          "normalized": "[Node]-\u003ea b c-\u003e[Tree Node]",
          "package": "fgl",
          "signature": "[Node]-\u003egr a b-\u003e[Tree Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:rdff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "rdff'",
          "package": "fgl",
          "signature": "gr a b -\u003e [Tree Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#rdff%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "rdff'",
          "normalized": "a b c-\u003e[Tree Node]",
          "package": "fgl",
          "signature": "gr a b-\u003e[Tree Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:rdff-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "rdfs",
          "package": "fgl",
          "signature": "[Node] -\u003e gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#rdfs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "rdfs",
          "normalized": "[Node]-\u003ea b c-\u003e[Node]",
          "package": "fgl",
          "signature": "[Node]-\u003egr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:rdfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "rdfs'",
          "package": "fgl",
          "signature": "gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#rdfs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "rdfs'",
          "normalized": "a b c-\u003e[Node]",
          "package": "fgl",
          "signature": "gr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:rdfs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "reachable",
          "package": "fgl",
          "signature": "Node -\u003e gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#reachable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "reachable",
          "normalized": "Node-\u003ea b c-\u003e[Node]",
          "package": "fgl",
          "signature": "Node-\u003egr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:reachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "scc",
          "package": "fgl",
          "signature": "gr a b -\u003e [[Node]]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#scc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "scc",
          "normalized": "a b c-\u003e[[Node]]",
          "package": "fgl",
          "signature": "gr a b-\u003e[[Node]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:scc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "topsort",
          "package": "fgl",
          "signature": "gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#topsort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "topsort",
          "normalized": "a b c-\u003e[Node]",
          "package": "fgl",
          "signature": "gr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:topsort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "topsort'",
          "package": "fgl",
          "signature": "gr a b -\u003e [a]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#topsort%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "topsort'",
          "normalized": "a b c-\u003e[b]",
          "package": "fgl",
          "signature": "gr a b-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:topsort-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "udff",
          "package": "fgl",
          "signature": "[Node] -\u003e gr a b -\u003e [Tree Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#udff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "udff",
          "normalized": "[Node]-\u003ea b c-\u003e[Tree Node]",
          "package": "fgl",
          "signature": "[Node]-\u003egr a b-\u003e[Tree Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:udff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "udff'",
          "package": "fgl",
          "signature": "gr a b -\u003e [Tree Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#udff%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "udff'",
          "normalized": "a b c-\u003e[Tree Node]",
          "package": "fgl",
          "signature": "gr a b-\u003e[Tree Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:udff-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "udfs",
          "package": "fgl",
          "signature": "[Node] -\u003e gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#udfs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "udfs",
          "normalized": "[Node]-\u003ea b c-\u003e[Node]",
          "package": "fgl",
          "signature": "[Node]-\u003egr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:udfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "udfs'",
          "package": "fgl",
          "signature": "gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#udfs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "udfs'",
          "normalized": "a b c-\u003e[Node]",
          "package": "fgl",
          "signature": "gr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:udfs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "xdfWith",
          "package": "fgl",
          "signature": "CFun a b [Node] -\u003e CFun a b c -\u003e [Node] -\u003e gr a b -\u003e ([Tree c], gr a b)",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#xdfWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "xdfWith",
          "normalized": "CFun a b[Node]-\u003eCFun a b c-\u003e[Node]-\u003ed a b-\u003e([Tree c],d a b)",
          "package": "fgl",
          "partial": "With",
          "signature": "CFun a b[Node]-\u003eCFun a b c-\u003e[Node]-\u003egr a b-\u003e([Tree c],gr a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:xdfWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "xdffWith",
          "package": "fgl",
          "signature": "CFun a b [Node] -\u003e CFun a b c -\u003e [Node] -\u003e gr a b -\u003e [Tree c]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#xdffWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "xdffWith",
          "normalized": "CFun a b[Node]-\u003eCFun a b c-\u003e[Node]-\u003ed a b-\u003e[Tree c]",
          "package": "fgl",
          "partial": "With",
          "signature": "CFun a b[Node]-\u003eCFun a b c-\u003e[Node]-\u003egr a b-\u003e[Tree c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:xdffWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "xdfsWith",
          "package": "fgl",
          "signature": "CFun a b [Node] -\u003e CFun a b c -\u003e [Node] -\u003e gr a b -\u003e [c]",
          "source": "src/Data-Graph-Inductive-Query-DFS.html#xdfsWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query DFS",
          "module": "Data.Graph.Inductive.Query.DFS",
          "name": "xdfsWith",
          "normalized": "CFun a b[Node]-\u003eCFun a b c-\u003e[Node]-\u003ed a b-\u003e[c]",
          "package": "fgl",
          "partial": "With",
          "signature": "CFun a b[Node]-\u003eCFun a b c-\u003e[Node]-\u003egr a b-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-DFS.html#v:xdfsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Dominators",
          "name": "Dominators",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-Dominators.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Dominators",
          "module": "Data.Graph.Inductive.Query.Dominators",
          "name": "Dominators",
          "package": "fgl",
          "partial": "Dominators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Dominators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the set of dominators of the nodes of a graph, given a root\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.Dominators",
          "name": "dom",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e [(Node, [Node])]",
          "source": "src/Data-Graph-Inductive-Query-Dominators.html#dom",
          "type": "function"
        },
        "index": {
          "description": "return the set of dominators of the nodes of graph given root",
          "hierarchy": "Data Graph Inductive Query Dominators",
          "module": "Data.Graph.Inductive.Query.Dominators",
          "name": "dom",
          "normalized": "a b c-\u003eNode-\u003e[(Node,[Node])]",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003e[(Node,[Node])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Dominators.html#v:dom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn immediate dominators for each node of a graph, given a root\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.Dominators",
          "name": "iDom",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e [(Node, Node)]",
          "source": "src/Data-Graph-Inductive-Query-Dominators.html#iDom",
          "type": "function"
        },
        "index": {
          "description": "return immediate dominators for each node of graph given root",
          "hierarchy": "Data Graph Inductive Query Dominators",
          "module": "Data.Graph.Inductive.Query.Dominators",
          "name": "iDom",
          "normalized": "a b c-\u003eNode-\u003e[(Node,Node)]",
          "package": "fgl",
          "partial": "Dom",
          "signature": "gr a b-\u003eNode-\u003e[(Node,Node)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Dominators.html#v:iDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGraph Voronoi Diagram \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "GVD",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-GVD.html",
          "type": "module"
        },
        "index": {
          "description": "Graph Voronoi Diagram",
          "hierarchy": "Data Graph Inductive Query GVD",
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "GVD",
          "package": "fgl",
          "partial": "GVD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "Voronoi",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-GVD.html#Voronoi",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query GVD",
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "Voronoi",
          "package": "fgl",
          "partial": "Voronoi",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#t:Voronoi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "gvdIn",
          "package": "fgl",
          "signature": "[Node] -\u003e gr a b -\u003e Voronoi b",
          "source": "src/Data-Graph-Inductive-Query-GVD.html#gvdIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query GVD",
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "gvdIn",
          "normalized": "[Node]-\u003ea b c-\u003eVoronoi c",
          "package": "fgl",
          "partial": "In",
          "signature": "[Node]-\u003egr a b-\u003eVoronoi b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#v:gvdIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "gvdOut",
          "package": "fgl",
          "signature": "[Node] -\u003e gr a b -\u003e Voronoi b",
          "source": "src/Data-Graph-Inductive-Query-GVD.html#gvdOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query GVD",
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "gvdOut",
          "normalized": "[Node]-\u003ea b c-\u003eVoronoi c",
          "package": "fgl",
          "partial": "Out",
          "signature": "[Node]-\u003egr a b-\u003eVoronoi b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#v:gvdOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "nearestDist",
          "package": "fgl",
          "signature": "Node -\u003e Voronoi b -\u003e Maybe b",
          "source": "src/Data-Graph-Inductive-Query-GVD.html#nearestDist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query GVD",
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "nearestDist",
          "normalized": "Node-\u003eVoronoi a-\u003eMaybe a",
          "package": "fgl",
          "partial": "Dist",
          "signature": "Node-\u003eVoronoi b-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#v:nearestDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "nearestNode",
          "package": "fgl",
          "signature": "Node -\u003e Voronoi b -\u003e Maybe Node",
          "source": "src/Data-Graph-Inductive-Query-GVD.html#nearestNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query GVD",
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "nearestNode",
          "normalized": "Node-\u003eVoronoi a-\u003eMaybe Node",
          "package": "fgl",
          "partial": "Node",
          "signature": "Node-\u003eVoronoi b-\u003eMaybe Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#v:nearestNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "nearestPath",
          "package": "fgl",
          "signature": "Node -\u003e Voronoi b -\u003e Maybe Path",
          "source": "src/Data-Graph-Inductive-Query-GVD.html#nearestPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query GVD",
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "nearestPath",
          "normalized": "Node-\u003eVoronoi a-\u003eMaybe Path",
          "package": "fgl",
          "partial": "Path",
          "signature": "Node-\u003eVoronoi b-\u003eMaybe Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#v:nearestPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "voronoiSet",
          "package": "fgl",
          "signature": "Node -\u003e Voronoi b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-GVD.html#voronoiSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query GVD",
          "module": "Data.Graph.Inductive.Query.GVD",
          "name": "voronoiSet",
          "normalized": "Node-\u003eVoronoi a-\u003e[Node]",
          "package": "fgl",
          "partial": "Set",
          "signature": "Node-\u003eVoronoi b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-GVD.html#v:voronoiSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaximum Independent Node Sets\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Query.Indep",
          "name": "Indep",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-Indep.html",
          "type": "module"
        },
        "index": {
          "description": "Maximum Independent Node Sets",
          "hierarchy": "Data Graph Inductive Query Indep",
          "module": "Data.Graph.Inductive.Query.Indep",
          "name": "Indep",
          "package": "fgl",
          "partial": "Indep",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Indep.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Indep",
          "name": "indep",
          "package": "fgl",
          "signature": "gr a b -\u003e [Node]",
          "source": "src/Data-Graph-Inductive-Query-Indep.html#indep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Indep",
          "module": "Data.Graph.Inductive.Query.Indep",
          "name": "indep",
          "normalized": "a b c-\u003e[Node]",
          "package": "fgl",
          "signature": "gr a b-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Indep.html#v:indep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMinimum-Spanning-Tree Algorithms \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Query.MST",
          "name": "MST",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-MST.html",
          "type": "module"
        },
        "index": {
          "description": "Minimum-Spanning-Tree Algorithms",
          "hierarchy": "Data Graph Inductive Query MST",
          "module": "Data.Graph.Inductive.Query.MST",
          "name": "MST",
          "package": "fgl",
          "partial": "MST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.MST",
          "name": "msPath",
          "package": "fgl",
          "signature": "LRTree b -\u003e Node -\u003e Node -\u003e Path",
          "source": "src/Data-Graph-Inductive-Query-MST.html#msPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query MST",
          "module": "Data.Graph.Inductive.Query.MST",
          "name": "msPath",
          "normalized": "LRTree a-\u003eNode-\u003eNode-\u003ePath",
          "package": "fgl",
          "partial": "Path",
          "signature": "LRTree b-\u003eNode-\u003eNode-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MST.html#v:msPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.MST",
          "name": "msTree",
          "package": "fgl",
          "signature": "gr a b -\u003e LRTree b",
          "source": "src/Data-Graph-Inductive-Query-MST.html#msTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query MST",
          "module": "Data.Graph.Inductive.Query.MST",
          "name": "msTree",
          "normalized": "a b c-\u003eLRTree c",
          "package": "fgl",
          "partial": "Tree",
          "signature": "gr a b-\u003eLRTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MST.html#v:msTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.MST",
          "name": "msTreeAt",
          "package": "fgl",
          "signature": "Node -\u003e gr a b -\u003e LRTree b",
          "source": "src/Data-Graph-Inductive-Query-MST.html#msTreeAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query MST",
          "module": "Data.Graph.Inductive.Query.MST",
          "name": "msTreeAt",
          "normalized": "Node-\u003ea b c-\u003eLRTree c",
          "package": "fgl",
          "partial": "Tree At",
          "signature": "Node-\u003egr a b-\u003eLRTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MST.html#v:msTreeAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaximum Flow algorithm\n We are given a flow network G=(V,E) with source s and sink t where each\n edge (u,v) in E has a nonnegative capacity c(u,v)\u003e=0, and we wish to\n find a flow of maximum value from s to t.\n\u003c/p\u003e\u003cp\u003eA flow in G=(V,E) is a real-valued function f:VxV-\u003eR that satisfies:\n\u003c/p\u003e\u003cpre\u003e\n For all u,v in V, f(u,v)\u003c=c(u,v)\n For all u,v in V, f(u,v)=-f(v,u)\n For all u in V-{s,t}, Sum{f(u,v):v in V } = 0\n\u003c/pre\u003e\u003cp\u003eThe value of a flow f is defined as |f|=Sum {f(s,v)|v in V}, i.e.,\n the total net flow out of the source.\n\u003c/p\u003e\u003cp\u003eIn this module we implement the Edmonds-Karp algorithm, which is the\n Ford-Fulkerson method but using the shortest path from s to t as the\n augmenting path along which the flow is incremented.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "MaxFlow",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow.html",
          "type": "module"
        },
        "index": {
          "description": "Maximum Flow algorithm We are given flow network with source and sink where each edge in has nonnegative capacity and we wish to find flow of maximum value from to flow in is real-valued function VxV that satisfies For all in For all in For all in Sum in The value of flow is defined as Sum in i.e the total net flow out of the source In this module we implement the Edmonds-Karp algorithm which is the Ford-Fulkerson method but using the shortest path from to as the augmenting path along which the flow is incremented",
          "hierarchy": "Data Graph Inductive Query MaxFlow",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "MaxFlow",
          "package": "fgl",
          "partial": "Max Flow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n                 i                                  0\n For each edge a---\u003eb insert into graph the edge a\u003c---b . Then change the\n                            i         (i,0,i)\n label of every edge from a----\u003eb to a-------\u003eb\n\u003c/pre\u003e\u003cp\u003ewhere label (x,y,z)=(Max Capacity, Current flow, Residual capacity)\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "augmentGraph",
          "package": "fgl",
          "signature": "gr a b -\u003e gr a (b, b, b)",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow.html#augmentGraph",
          "type": "function"
        },
        "index": {
          "description": "For each edge insert into graph the edge Then change the label of every edge from to where label Max Capacity Current flow Residual capacity",
          "hierarchy": "Data Graph Inductive Query MaxFlow",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "augmentGraph",
          "normalized": "a b c-\u003ea b(c,c,c)",
          "package": "fgl",
          "partial": "Graph",
          "signature": "gr a b-\u003egr a(b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:augmentGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n                 i                                 0\n For each edge a---\u003eb this function returns edge b---\u003ea .\n          i\n Edges a\u003c---\u003eb are ignored\n          j\n\u003c/pre\u003e",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "getRevEdges",
          "package": "fgl",
          "signature": "[(Node, Node)] -\u003e [(Node, Node, b)]",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow.html#getRevEdges",
          "type": "function"
        },
        "index": {
          "description": "For each edge this function returns edge Edges are ignored",
          "hierarchy": "Data Graph Inductive Query MaxFlow",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "getRevEdges",
          "normalized": "[(Node,Node)]-\u003e[(Node,Node,a)]",
          "package": "fgl",
          "partial": "Rev Edges",
          "signature": "[(Node,Node)]-\u003e[(Node,Node,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:getRevEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the value of a maximumflow\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "maxFlow",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e Node -\u003e b",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow.html#maxFlow",
          "type": "function"
        },
        "index": {
          "description": "Compute the value of maximumflow",
          "hierarchy": "Data Graph Inductive Query MaxFlow",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "maxFlow",
          "normalized": "a b c-\u003eNode-\u003eNode-\u003ec",
          "package": "fgl",
          "partial": "Flow",
          "signature": "gr a b-\u003eNode-\u003eNode-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:maxFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the maximum flow from s to t on a graph whose edges are labeled\n with x, which is the max capacity and where not all edges need to be of\n the form a\u003c----\u003eb. Return the flow as a grap whose edges are labeled with\n (y,x) = (current flow, max capacity).\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "maxFlowgraph",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e Node -\u003e gr a (b, b)",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow.html#maxFlowgraph",
          "type": "function"
        },
        "index": {
          "description": "Compute the maximum flow from to on graph whose edges are labeled with which is the max capacity and where not all edges need to be of the form Return the flow as grap whose edges are labeled with current flow max capacity",
          "hierarchy": "Data Graph Inductive Query MaxFlow",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "maxFlowgraph",
          "normalized": "a b c-\u003eNode-\u003eNode-\u003ea b(c,c)",
          "package": "fgl",
          "partial": "Flowgraph",
          "signature": "gr a b-\u003eNode-\u003eNode-\u003egr a(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:maxFlowgraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the flow from s to t on a graph whose edges are labeled with\n x, which is the max capacity and where not all edges need to be of the\n form a\u003c----\u003eb. Return the flow as a grap whose edges are labeled with\n (x,y,z)=(max capacity,current flow,residual capacity) and all edges\n are of the form a\u003c----\u003eb\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "mf",
          "package": "fgl",
          "signature": "gr a b -\u003e Node -\u003e Node -\u003e gr a (b, b, b)",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow.html#mf",
          "type": "function"
        },
        "index": {
          "description": "Compute the flow from to on graph whose edges are labeled with which is the max capacity and where not all edges need to be of the form Return the flow as grap whose edges are labeled with max capacity current flow residual capacity and all edges are of the form",
          "hierarchy": "Data Graph Inductive Query MaxFlow",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "mf",
          "normalized": "a b c-\u003eNode-\u003eNode-\u003ea b(c,c,c)",
          "package": "fgl",
          "signature": "gr a b-\u003eNode-\u003eNode-\u003egr a(b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:mf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the flow from s to t on a graph whose edges are labeled with\n (x,y,z)=(max capacity,current flow,residual capacity) and all edges\n are of the form a\u003c----\u003eb. First compute the residual graph, that is,\n delete those edges whose residual capacity is zero. Then compute the\n shortest augmenting path from s to t, and finally update the flow and\n residual capacity along that path by using the minimum capacity of\n that path. Repeat this process until no shortest path from s to t exist.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "mfmg",
          "package": "fgl",
          "signature": "gr a (b, b, b) -\u003e Node -\u003e Node -\u003e gr a (b, b, b)",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow.html#mfmg",
          "type": "function"
        },
        "index": {
          "description": "Compute the flow from to on graph whose edges are labeled with max capacity current flow residual capacity and all edges are of the form First compute the residual graph that is delete those edges whose residual capacity is zero Then compute the shortest augmenting path from to and finally update the flow and residual capacity along that path by using the minimum capacity of that path Repeat this process until no shortest path from to exist",
          "hierarchy": "Data Graph Inductive Query MaxFlow",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "mfmg",
          "normalized": "a b(c,c,c)-\u003eNode-\u003eNode-\u003ea b(c,c,c)",
          "package": "fgl",
          "signature": "gr a(b,b,b)-\u003eNode-\u003eNode-\u003egr a(b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:mfmg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a successor or predecessor list for node u and given node v, find\n the label corresponding to edge (u,v) and update the flow and residual\n capacity of that edge's label. Then return the updated list.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "updAdjList",
          "package": "fgl",
          "signature": "[((b, b, b), Node)] -\u003e Node -\u003e b -\u003e Bool -\u003e [((b, b, b), Node)]",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow.html#updAdjList",
          "type": "function"
        },
        "index": {
          "description": "Given successor or predecessor list for node and given node find the label corresponding to edge and update the flow and residual capacity of that edge label Then return the updated list",
          "hierarchy": "Data Graph Inductive Query MaxFlow",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "updAdjList",
          "normalized": "[((a,a,a),Node)]-\u003eNode-\u003ea-\u003eBool-\u003e[((a,a,a),Node)]",
          "package": "fgl",
          "partial": "Adj List",
          "signature": "[((b,b,b),Node)]-\u003eNode-\u003eb-\u003eBool-\u003e[((b,b,b),Node)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:updAdjList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate flow and residual capacity along augmenting path from s to t in\n graph G. For a path [u,v,w,...] find the node u in G and its successor and\n predecessor list, then update the corresponding edges (u,v) and (v,u) on\n those lists by using the minimum residual capacity of the path.\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "updateFlow",
          "package": "fgl",
          "signature": "Path -\u003e b -\u003e gr a (b, b, b) -\u003e gr a (b, b, b)",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow.html#updateFlow",
          "type": "function"
        },
        "index": {
          "description": "Update flow and residual capacity along augmenting path from to in graph For path find the node in and its successor and predecessor list then update the corresponding edges and on those lists by using the minimum residual capacity of the path",
          "hierarchy": "Data Graph Inductive Query MaxFlow",
          "module": "Data.Graph.Inductive.Query.MaxFlow",
          "name": "updateFlow",
          "normalized": "Path-\u003ea-\u003eb c(a,a,a)-\u003eb c(a,a,a)",
          "package": "fgl",
          "partial": "Flow",
          "signature": "Path-\u003eb-\u003egr a(b,b,b)-\u003egr a(b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow.html#v:updateFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAlternative Maximum Flow\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Query.MaxFlow2",
          "name": "MaxFlow2",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow2.html",
          "type": "module"
        },
        "index": {
          "description": "Alternative Maximum Flow",
          "hierarchy": "Data Graph Inductive Query MaxFlow2",
          "module": "Data.Graph.Inductive.Query.MaxFlow2",
          "name": "MaxFlow2",
          "package": "fgl",
          "partial": "Max Flow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.MaxFlow2",
          "name": "Network",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow2.html#Network",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query MaxFlow2",
          "module": "Data.Graph.Inductive.Query.MaxFlow2",
          "name": "Network",
          "package": "fgl",
          "partial": "Network",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow2.html#t:Network"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.MaxFlow2",
          "name": "ekFused",
          "package": "fgl",
          "signature": "Network -\u003e Node -\u003e Node -\u003e (Network, Double)",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow2.html#ekFused",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query MaxFlow2",
          "module": "Data.Graph.Inductive.Query.MaxFlow2",
          "name": "ekFused",
          "normalized": "Network-\u003eNode-\u003eNode-\u003e(Network,Double)",
          "package": "fgl",
          "partial": "Fused",
          "signature": "Network-\u003eNode-\u003eNode-\u003e(Network,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow2.html#v:ekFused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.MaxFlow2",
          "name": "ekList",
          "package": "fgl",
          "signature": "Network -\u003e Node -\u003e Node -\u003e (Network, Double)",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow2.html#ekList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query MaxFlow2",
          "module": "Data.Graph.Inductive.Query.MaxFlow2",
          "name": "ekList",
          "normalized": "Network-\u003eNode-\u003eNode-\u003e(Network,Double)",
          "package": "fgl",
          "partial": "List",
          "signature": "Network-\u003eNode-\u003eNode-\u003e(Network,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow2.html#v:ekList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.MaxFlow2",
          "name": "ekSimple",
          "package": "fgl",
          "signature": "Network -\u003e Node -\u003e Node -\u003e (Network, Double)",
          "source": "src/Data-Graph-Inductive-Query-MaxFlow2.html#ekSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query MaxFlow2",
          "module": "Data.Graph.Inductive.Query.MaxFlow2",
          "name": "ekSimple",
          "normalized": "Network-\u003eNode-\u003eNode-\u003e(Network,Double)",
          "package": "fgl",
          "partial": "Simple",
          "signature": "Network-\u003eNode-\u003eNode-\u003e(Network,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-MaxFlow2.html#v:ekSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Graph Algorithms\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "Monad",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic Graph Algorithms",
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "Monad",
          "package": "fgl",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "GT",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#GT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "GT",
          "package": "fgl",
          "partial": "GT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#t:GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "(\u003e\u003c)",
          "package": "fgl",
          "signature": "(a -\u003e b) -\u003e (c -\u003e d) -\u003e (a, c) -\u003e (b, d)",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#%3E%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "(\u003e\u003c) \u003e\u003c",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
          "package": "fgl",
          "signature": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:-62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "MGT",
          "package": "fgl",
          "signature": "MGT (m g -\u003e m (a, g))",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#GT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "MGT",
          "normalized": "MGT(a b-\u003ea(c,b))",
          "package": "fgl",
          "partial": "MGT",
          "signature": "MGT(m g-\u003em(a,g))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:MGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "apply",
          "package": "fgl",
          "signature": "GT m g a -\u003e m g -\u003e m (a, g)",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "apply",
          "normalized": "GT a b c-\u003ea b-\u003ea(c,b)",
          "package": "fgl",
          "signature": "GT m g a-\u003em g-\u003em(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "apply'",
          "package": "fgl",
          "signature": "GT m g a -\u003e g -\u003e m (a, g)",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#apply%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "apply'",
          "normalized": "GT a b c-\u003eb-\u003ea(c,b)",
          "package": "fgl",
          "signature": "GT m g a-\u003eg-\u003em(a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:apply-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "applyWith",
          "package": "fgl",
          "signature": "(a -\u003e b) -\u003e GT m g a -\u003e m g -\u003e m (b, g)",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#applyWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "applyWith",
          "normalized": "(a-\u003eb)-\u003eGT c d a-\u003ec d-\u003ec(b,d)",
          "package": "fgl",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003eGT m g a-\u003em g-\u003em(b,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:applyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "applyWith'",
          "package": "fgl",
          "signature": "(a -\u003e b) -\u003e GT m g a -\u003e g -\u003e m (b, g)",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#applyWith%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "applyWith'",
          "normalized": "(a-\u003eb)-\u003eGT c d a-\u003ed-\u003ec(b,d)",
          "package": "fgl",
          "partial": "With'",
          "signature": "(a-\u003eb)-\u003eGT m g a-\u003eg-\u003em(b,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:applyWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "condMGT",
          "package": "fgl",
          "signature": "(m s -\u003e m Bool) -\u003e GT m s a -\u003e GT m s a -\u003e GT m s a",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#condMGT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "condMGT",
          "normalized": "(a b-\u003ea Bool)-\u003eGT a b c-\u003eGT a b c-\u003eGT a b c",
          "package": "fgl",
          "partial": "MGT",
          "signature": "(m s-\u003em Bool)-\u003eGT m s a-\u003eGT m s a-\u003eGT m s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:condMGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "condMGT'",
          "package": "fgl",
          "signature": "(s -\u003e Bool) -\u003e GT m s a -\u003e GT m s a -\u003e GT m s a",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#condMGT%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "condMGT'",
          "normalized": "(a-\u003eBool)-\u003eGT b a c-\u003eGT b a c-\u003eGT b a c",
          "package": "fgl",
          "partial": "MGT'",
          "signature": "(s-\u003eBool)-\u003eGT m s a-\u003eGT m s a-\u003eGT m s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:condMGT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edepth-first search yielding dfs forest\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "dffM",
          "package": "fgl",
          "signature": "[Node] -\u003e GT m (gr a b) [Tree Node]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#dffM",
          "type": "function"
        },
        "index": {
          "description": "depth-first search yielding dfs forest",
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "dffM",
          "normalized": "[Node]-\u003eGT a(b c d)[Tree Node]",
          "package": "fgl",
          "signature": "[Node]-\u003eGT m(gr a b)[Tree Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:dffM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic graph algorithms are defined in two steps:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e define the (possibly parameterized) graph transformer (e.g., dfsGT)\n  (2) run the graph transformer (applied to arguments) (e.g., dfsM)\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "dfsGT",
          "package": "fgl",
          "signature": "[Node] -\u003e GT m (gr a b) [Node]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#dfsGT",
          "type": "function"
        },
        "index": {
          "description": "Monadic graph algorithms are defined in two steps define the possibly parameterized graph transformer e.g dfsGT run the graph transformer applied to arguments e.g dfsM",
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "dfsGT",
          "normalized": "[Node]-\u003eGT a(b c d)[Node]",
          "package": "fgl",
          "partial": "GT",
          "signature": "[Node]-\u003eGT m(gr a b)[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:dfsGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edepth-first search yielding number of nodes\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "dfsM",
          "package": "fgl",
          "signature": "[Node] -\u003e m (gr a b) -\u003e m [Node]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#dfsM",
          "type": "function"
        },
        "index": {
          "description": "depth-first search yielding number of nodes",
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "dfsM",
          "normalized": "[Node]-\u003ea(b c d)-\u003ea[Node]",
          "package": "fgl",
          "signature": "[Node]-\u003em(gr a b)-\u003em[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:dfsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "dfsM'",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e m [Node]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#dfsM%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "dfsM'",
          "normalized": "a(b c d)-\u003ea[Node]",
          "package": "fgl",
          "partial": "M'",
          "signature": "m(gr a b)-\u003em[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:dfsM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "getContext",
          "package": "fgl",
          "signature": "GT m (gr a b) (Context a b)",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#getContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "getContext",
          "package": "fgl",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:getContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "getNode",
          "package": "fgl",
          "signature": "GT m (gr a b) Node",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#getNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "getNode",
          "package": "fgl",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:getNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "getNodes",
          "package": "fgl",
          "signature": "GT m (gr a b) [Node]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#getNodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "getNodes",
          "normalized": "GT a(b c d)[Node]",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "GT m(gr a b)[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:getNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "getNodes'",
          "package": "fgl",
          "signature": "GT m (gr a b) [Node]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#getNodes%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "getNodes'",
          "normalized": "GT a(b c d)[Node]",
          "package": "fgl",
          "partial": "Nodes'",
          "signature": "GT m(gr a b)[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:getNodes-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphDff",
          "package": "fgl",
          "signature": "[Node] -\u003e m (gr a b) -\u003e m [Tree Node]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#graphDff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphDff",
          "normalized": "[Node]-\u003ea(b c d)-\u003ea[Tree Node]",
          "package": "fgl",
          "partial": "Dff",
          "signature": "[Node]-\u003em(gr a b)-\u003em[Tree Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphDff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphDff'",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e m [Tree Node]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#graphDff%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphDff'",
          "normalized": "a(b c d)-\u003ea[Tree Node]",
          "package": "fgl",
          "partial": "Dff'",
          "signature": "m(gr a b)-\u003em[Tree Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphDff-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphFilter",
          "package": "fgl",
          "signature": "(Context a b -\u003e Bool) -\u003e m (gr a b) -\u003e m [Context a b]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#graphFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphFilter",
          "normalized": "(Context a b-\u003eBool)-\u003ec(d a b)-\u003ec[Context a b]",
          "package": "fgl",
          "partial": "Filter",
          "signature": "(Context a b-\u003eBool)-\u003em(gr a b)-\u003em[Context a b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphFilterM",
          "package": "fgl",
          "signature": "(Context a b -\u003e Bool) -\u003e GT m (gr a b) [Context a b]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#graphFilterM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphFilterM",
          "normalized": "(Context a b-\u003eBool)-\u003eGT c(d a b)[Context a b]",
          "package": "fgl",
          "partial": "Filter",
          "signature": "(Context a b-\u003eBool)-\u003eGT m(gr a b)[Context a b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphFilterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphNodes",
          "package": "fgl",
          "signature": "m (gr a b) -\u003e m [Node]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#graphNodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphNodes",
          "normalized": "a(b c d)-\u003ea[Node]",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "m(gr a b)-\u003em[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphNodesM",
          "package": "fgl",
          "signature": "GT m (gr a b) [Node]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#graphNodesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphNodesM",
          "normalized": "GT a(b c d)[Node]",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "GT m(gr a b)[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphNodesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphNodesM0",
          "package": "fgl",
          "signature": "GT m (gr a b) [Node]",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#graphNodesM0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphNodesM0",
          "normalized": "GT a(b c d)[Node]",
          "package": "fgl",
          "partial": "Nodes",
          "signature": "GT m(gr a b)[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphNodesM0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencapsulates a simple recursion schema on graphs\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphRec",
          "package": "fgl",
          "signature": "GT m (gr a b) c -\u003e (c -\u003e d -\u003e d) -\u003e d -\u003e GT m (gr a b) d",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#graphRec",
          "type": "function"
        },
        "index": {
          "description": "encapsulates simple recursion schema on graphs",
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphRec",
          "normalized": "GT a(b c d)e-\u003e(e-\u003ef-\u003ef)-\u003ef-\u003eGT a(b c d)f",
          "package": "fgl",
          "partial": "Rec",
          "signature": "GT m(gr a b)c-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003eGT m(gr a b)d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphRec'",
          "package": "fgl",
          "signature": "GT m (gr a b) c -\u003e (c -\u003e d -\u003e d) -\u003e d -\u003e GT m (gr a b) d",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#graphRec%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphRec'",
          "normalized": "GT a(b c d)e-\u003e(e-\u003ef-\u003ef)-\u003ef-\u003eGT a(b c d)f",
          "package": "fgl",
          "partial": "Rec'",
          "signature": "GT m(gr a b)c-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003eGT m(gr a b)d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphRec-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphUFold",
          "package": "fgl",
          "signature": "(Context a b -\u003e c -\u003e c) -\u003e c -\u003e GT m (gr a b) c",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#graphUFold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "graphUFold",
          "normalized": "(Context a b-\u003ec-\u003ec)-\u003ec-\u003eGT d(e a b)c",
          "package": "fgl",
          "partial": "UFold",
          "signature": "(Context a b-\u003ec-\u003ec)-\u003ec-\u003eGT m(gr a b)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:graphUFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "mapFst",
          "package": "fgl",
          "signature": "(a -\u003e b) -\u003e (a, c) -\u003e (b, c)",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#mapFst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "mapFst",
          "normalized": "(a-\u003eb)-\u003e(a,c)-\u003e(b,c)",
          "package": "fgl",
          "partial": "Fst",
          "signature": "(a-\u003eb)-\u003e(a,c)-\u003e(b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:mapFst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "mapSnd",
          "package": "fgl",
          "signature": "(a -\u003e b) -\u003e (c, a) -\u003e (c, b)",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#mapSnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "mapSnd",
          "normalized": "(a-\u003eb)-\u003e(c,a)-\u003e(c,b)",
          "package": "fgl",
          "partial": "Snd",
          "signature": "(a-\u003eb)-\u003e(c,a)-\u003e(c,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:mapSnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "orP",
          "package": "fgl",
          "signature": "(a -\u003e Bool) -\u003e (b -\u003e Bool) -\u003e (a, b) -\u003e Bool",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#orP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "orP",
          "normalized": "(a-\u003eBool)-\u003e(b-\u003eBool)-\u003e(a,b)-\u003eBool",
          "package": "fgl",
          "signature": "(a-\u003eBool)-\u003e(b-\u003eBool)-\u003e(a,b)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:orP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "recMGT",
          "package": "fgl",
          "signature": "(m s -\u003e m Bool) -\u003e GT m s a -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e GT m s b",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#recMGT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "recMGT",
          "normalized": "(a b-\u003ea Bool)-\u003eGT a b c-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003eGT a b d",
          "package": "fgl",
          "partial": "MGT",
          "signature": "(m s-\u003em Bool)-\u003eGT m s a-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eGT m s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:recMGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "recMGT'",
          "package": "fgl",
          "signature": "(s -\u003e Bool) -\u003e GT m s a -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e GT m s b",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#recMGT%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "recMGT'",
          "normalized": "(a-\u003eBool)-\u003eGT b a c-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003eGT b a d",
          "package": "fgl",
          "partial": "MGT'",
          "signature": "(s-\u003eBool)-\u003eGT m s a-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eGT m s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:recMGT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "runGT",
          "package": "fgl",
          "signature": "GT m g a -\u003e m g -\u003e m a",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#runGT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "runGT",
          "normalized": "GT a b c-\u003ea b-\u003ea c",
          "package": "fgl",
          "partial": "GT",
          "signature": "GT m g a-\u003em g-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:runGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "sucGT",
          "package": "fgl",
          "signature": "Node -\u003e GT m (gr a b) (Maybe [Node])",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#sucGT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "sucGT",
          "normalized": "Node-\u003eGT a(b c d)(Maybe[Node])",
          "package": "fgl",
          "partial": "GT",
          "signature": "Node-\u003eGT m(gr a b)(Maybe[Node])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:sucGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "sucM",
          "package": "fgl",
          "signature": "Node -\u003e m (gr a b) -\u003e m (Maybe [Node])",
          "source": "src/Data-Graph-Inductive-Query-Monad.html#sucM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query Monad",
          "module": "Data.Graph.Inductive.Query.Monad",
          "name": "sucM",
          "normalized": "Node-\u003ea(b c d)-\u003ea(Maybe[Node])",
          "package": "fgl",
          "signature": "Node-\u003em(gr a b)-\u003em(Maybe[Node])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-Monad.html#v:sucM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.SP",
          "name": "SP",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-SP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query SP",
          "module": "Data.Graph.Inductive.Query.SP",
          "name": "SP",
          "package": "fgl",
          "partial": "SP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-SP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of Dijkstra's shortest path algorithm  \n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.SP",
          "name": "dijkstra",
          "package": "fgl",
          "signature": "Heap b (LPath b) -\u003e gr a b -\u003e LRTree b",
          "source": "src/Data-Graph-Inductive-Query-SP.html#dijkstra",
          "type": "function"
        },
        "index": {
          "description": "Implementation of Dijkstra shortest path algorithm",
          "hierarchy": "Data Graph Inductive Query SP",
          "module": "Data.Graph.Inductive.Query.SP",
          "name": "dijkstra",
          "normalized": "Heap a(LPath a)-\u003eb c a-\u003eLRTree a",
          "package": "fgl",
          "signature": "Heap b(LPath b)-\u003egr a b-\u003eLRTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-SP.html#v:dijkstra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.SP",
          "name": "sp",
          "package": "fgl",
          "signature": "Node -\u003e Node -\u003e gr a b -\u003e Path",
          "source": "src/Data-Graph-Inductive-Query-SP.html#sp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query SP",
          "module": "Data.Graph.Inductive.Query.SP",
          "name": "sp",
          "normalized": "Node-\u003eNode-\u003ea b c-\u003ePath",
          "package": "fgl",
          "signature": "Node-\u003eNode-\u003egr a b-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-SP.html#v:sp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.SP",
          "name": "spLength",
          "package": "fgl",
          "signature": "Node -\u003e Node -\u003e gr a b -\u003e b",
          "source": "src/Data-Graph-Inductive-Query-SP.html#spLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query SP",
          "module": "Data.Graph.Inductive.Query.SP",
          "name": "spLength",
          "normalized": "Node-\u003eNode-\u003ea b c-\u003ec",
          "package": "fgl",
          "partial": "Length",
          "signature": "Node-\u003eNode-\u003egr a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-SP.html#v:spLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.SP",
          "name": "spTree",
          "package": "fgl",
          "signature": "Node -\u003e gr a b -\u003e LRTree b",
          "source": "src/Data-Graph-Inductive-Query-SP.html#spTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query SP",
          "module": "Data.Graph.Inductive.Query.SP",
          "name": "spTree",
          "normalized": "Node-\u003ea b c-\u003eLRTree c",
          "package": "fgl",
          "partial": "Tree",
          "signature": "Node-\u003egr a b-\u003eLRTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-SP.html#v:spTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query.TransClos",
          "name": "TransClos",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query-TransClos.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query TransClos",
          "module": "Data.Graph.Inductive.Query.TransClos",
          "name": "TransClos",
          "package": "fgl",
          "partial": "Trans Clos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-TransClos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the transitive closure of a directed graph.\nGiven a graph G=(V,E), its transitive closure is the graph:\nG* = (V,E*) where E*={(i,j): i,j in V and there is a path from i to j in G}\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive.Query.TransClos",
          "name": "trc",
          "package": "fgl",
          "signature": "gr a b -\u003e gr a ()",
          "source": "src/Data-Graph-Inductive-Query-TransClos.html#trc",
          "type": "function"
        },
        "index": {
          "description": "Finds the transitive closure of directed graph Given graph its transitive closure is the graph where in and there is path from to in",
          "hierarchy": "Data Graph Inductive Query TransClos",
          "module": "Data.Graph.Inductive.Query.TransClos",
          "name": "trc",
          "normalized": "a b c-\u003ea b()",
          "package": "fgl",
          "signature": "gr a b-\u003egr a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query-TransClos.html#v:trc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Query",
          "name": "Query",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Query.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Query",
          "module": "Data.Graph.Inductive.Query",
          "name": "Query",
          "package": "fgl",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTree-based implementation of \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDynGraph\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Inductive.Tree",
          "name": "Tree",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Tree.html",
          "type": "module"
        },
        "index": {
          "description": "Tree-based implementation of Graph and DynGraph",
          "hierarchy": "Data Graph Inductive Tree",
          "module": "Data.Graph.Inductive.Tree",
          "name": "Tree",
          "package": "fgl",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Tree",
          "name": "Gr",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Tree.html#Gr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Tree",
          "module": "Data.Graph.Inductive.Tree",
          "name": "Gr",
          "package": "fgl",
          "partial": "Gr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Tree.html#t:Gr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive.Tree",
          "name": "UGr",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive-Tree.html#UGr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Inductive Tree",
          "module": "Data.Graph.Inductive.Tree",
          "name": "UGr",
          "package": "fgl",
          "partial": "UGr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive-Tree.html#t:UGr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Inductive",
          "name": "Inductive",
          "package": "fgl",
          "source": "src/Data-Graph-Inductive.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph Inductive",
          "module": "Data.Graph.Inductive",
          "name": "Inductive",
          "package": "fgl",
          "partial": "Inductive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion info\n\u003c/p\u003e",
          "module": "Data.Graph.Inductive",
          "name": "version",
          "package": "fgl",
          "signature": "IO ()",
          "source": "src/Data-Graph-Inductive.html#version",
          "type": "function"
        },
        "index": {
          "description": "Version info",
          "hierarchy": "Data Graph Inductive",
          "module": "Data.Graph.Inductive",
          "name": "version",
          "normalized": "IO()",
          "package": "fgl",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fgl/docs/Data-Graph-Inductive.html#v:version"
      }
    }
  ]
]