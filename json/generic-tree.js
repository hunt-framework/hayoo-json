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
        "word": "generic-tree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LTree",
          "name": "LTree",
          "package": "generic-tree",
          "source": "src/Data-LTree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data LTree",
          "module": "Data.LTree",
          "name": "LTree",
          "package": "generic-tree",
          "partial": "LTree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-LTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LTree",
          "name": "LForest",
          "package": "generic-tree",
          "source": "src/Data-LTree.html#LForest",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data LTree",
          "module": "Data.LTree",
          "name": "LForest",
          "package": "generic-tree",
          "partial": "LForest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-LTree.html#t:LForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultary (Rose) Tree, with data solely in leaves\n\u003c/p\u003e",
          "module": "Data.LTree",
          "name": "LTree",
          "package": "generic-tree",
          "source": "src/Data-LTree.html#LTree",
          "type": "data"
        },
        "index": {
          "description": "Multary Rose Tree with data solely in leaves",
          "hierarchy": "Data LTree",
          "module": "Data.LTree",
          "name": "LTree",
          "package": "generic-tree",
          "partial": "LTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-LTree.html#t:LTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LTree",
          "name": "Leaf",
          "package": "generic-tree",
          "signature": "Leaf a",
          "source": "src/Data-LTree.html#LTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LTree",
          "module": "Data.LTree",
          "name": "Leaf",
          "package": "generic-tree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-LTree.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LTree",
          "name": "Stem",
          "package": "generic-tree",
          "signature": "Stem (LForest v a)",
          "source": "src/Data-LTree.html#LTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LTree",
          "module": "Data.LTree",
          "name": "Stem",
          "package": "generic-tree",
          "partial": "Stem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-LTree.html#v:Stem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LTree",
          "name": "unfoldLTree",
          "package": "generic-tree",
          "signature": "(b -\u003e Either a (v b)) -\u003e b -\u003e LTree v a",
          "source": "src/Data-LTree.html#unfoldLTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LTree",
          "module": "Data.LTree",
          "name": "unfoldLTree",
          "normalized": "(a-\u003eEither b(c a))-\u003ea-\u003eLTree c b",
          "package": "generic-tree",
          "partial": "LTree",
          "signature": "(b-\u003eEither a(v b))-\u003eb-\u003eLTree v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-LTree.html#v:unfoldLTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LTree",
          "name": "unfoldLTreeM",
          "package": "generic-tree",
          "signature": "(b -\u003e m (Either a (v b))) -\u003e b -\u003e m (LTree v a)",
          "source": "src/Data-LTree.html#unfoldLTreeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LTree",
          "module": "Data.LTree",
          "name": "unfoldLTreeM",
          "normalized": "(a-\u003eb(Either c(d a)))-\u003ea-\u003eb(LTree d c)",
          "package": "generic-tree",
          "partial": "LTree",
          "signature": "(b-\u003em(Either a(v b)))-\u003eb-\u003em(LTree v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-LTree.html#v:unfoldLTreeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree",
          "name": "Tree",
          "package": "generic-tree",
          "source": "src/Data-Tree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tree",
          "module": "Data.Tree",
          "name": "Tree",
          "package": "generic-tree",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree",
          "name": "Forest",
          "package": "generic-tree",
          "source": "src/Data-Tree.html#Forest",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tree",
          "module": "Data.Tree",
          "name": "Forest",
          "package": "generic-tree",
          "partial": "Forest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-Tree.html#t:Forest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultary (Rose) Tree\n\u003c/p\u003e",
          "module": "Data.Tree",
          "name": "Tree",
          "package": "generic-tree",
          "source": "src/Data-Tree.html#Tree",
          "type": "data"
        },
        "index": {
          "description": "Multary Rose Tree",
          "hierarchy": "Data Tree",
          "module": "Data.Tree",
          "name": "Tree",
          "package": "generic-tree",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-Tree.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree",
          "name": "Node",
          "package": "generic-tree",
          "signature": "Node a (Forest v a)",
          "source": "src/Data-Tree.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree",
          "module": "Data.Tree",
          "name": "Node",
          "package": "generic-tree",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-Tree.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree",
          "name": "flatten",
          "package": "generic-tree",
          "signature": "Tree v a -\u003e [a]",
          "source": "src/Data-Tree.html#flatten",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree",
          "module": "Data.Tree",
          "name": "flatten",
          "normalized": "Tree a b-\u003e[b]",
          "package": "generic-tree",
          "signature": "Tree v a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-Tree.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists of nodes at each level of tree\n\u003c/p\u003e",
          "module": "Data.Tree",
          "name": "levels",
          "package": "generic-tree",
          "signature": "Tree v a -\u003e [v a]",
          "source": "src/Data-Tree.html#levels",
          "type": "function"
        },
        "index": {
          "description": "Lists of nodes at each level of tree",
          "hierarchy": "Data Tree",
          "module": "Data.Tree",
          "name": "levels",
          "normalized": "Tree a b-\u003e[a b]",
          "package": "generic-tree",
          "signature": "Tree v a-\u003e[v a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-Tree.html#v:levels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild tree from seed value\n\u003c/p\u003e",
          "module": "Data.Tree",
          "name": "unfoldTree",
          "package": "generic-tree",
          "signature": "(b -\u003e (a, v b)) -\u003e b -\u003e Tree v a",
          "source": "src/Data-Tree.html#unfoldTree",
          "type": "function"
        },
        "index": {
          "description": "Build tree from seed value",
          "hierarchy": "Data Tree",
          "module": "Data.Tree",
          "name": "unfoldTree",
          "normalized": "(a-\u003e(b,c a))-\u003ea-\u003eTree c b",
          "package": "generic-tree",
          "partial": "Tree",
          "signature": "(b-\u003e(a,v b))-\u003eb-\u003eTree v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-Tree.html#v:unfoldTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a tree from seed value, monadically\n\u003c/p\u003e",
          "module": "Data.Tree",
          "name": "unfoldTreeM",
          "package": "generic-tree",
          "signature": "(b -\u003e m (a, v b)) -\u003e b -\u003e m (Tree v a)",
          "source": "src/Data-Tree.html#unfoldTreeM",
          "type": "function"
        },
        "index": {
          "description": "Build tree from seed value monadically",
          "hierarchy": "Data Tree",
          "module": "Data.Tree",
          "name": "unfoldTreeM",
          "normalized": "(a-\u003eb(c,d a))-\u003ea-\u003eb(Tree d c)",
          "package": "generic-tree",
          "partial": "Tree",
          "signature": "(b-\u003em(a,v b))-\u003eb-\u003em(Tree v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-tree/docs/Data-Tree.html#v:unfoldTreeM"
      }
    }
  ]
]