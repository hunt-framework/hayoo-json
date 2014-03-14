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
        "word": "magma"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Magma",
          "name": "Magma",
          "package": "magma",
          "source": "src/Data-Magma.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "Magma",
          "package": "magma",
          "partial": "Magma",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Magma",
          "name": "BinaryTree",
          "package": "magma",
          "source": "src/Data-Magma.html#BinaryTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "BinaryTree",
          "package": "magma",
          "partial": "Binary Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#t:BinaryTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Magma",
          "name": "Magma",
          "package": "magma",
          "source": "src/Data-Magma.html#Magma",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "Magma",
          "package": "magma",
          "partial": "Magma",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#t:Magma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Magma",
          "name": "(\u003c\u003e)",
          "package": "magma",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Magma.html#%3C%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "magma",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Magma",
          "name": "Leaf",
          "package": "magma",
          "signature": "Leaf a",
          "source": "src/Data-Magma.html#BinaryTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "Leaf",
          "package": "magma",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Magma",
          "name": "Node",
          "package": "magma",
          "signature": "Node (BinaryTree a) (BinaryTree a)",
          "source": "src/Data-Magma.html#BinaryTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "Node",
          "package": "magma",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_Leaf\u003c/a\u003e\u003c/code\u003e :: Prism' (\u003ccode\u003e\u003ca\u003eBinaryTree\u003c/a\u003e\u003c/code\u003e a) a\u003c/pre\u003e",
          "module": "Data.Magma",
          "name": "_Leaf",
          "package": "magma",
          "signature": "p a (f a) -\u003e p (BinaryTree a) (f (BinaryTree a))",
          "source": "src/Data-Magma.html#_Leaf",
          "type": "function"
        },
        "index": {
          "description": "Leaf Prism BinaryTree",
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "_Leaf",
          "normalized": "a b(c b)-\u003ea(BinaryTree b)(c(BinaryTree b))",
          "package": "magma",
          "partial": "Leaf",
          "signature": "p a(f a)-\u003ep(BinaryTree a)(f(BinaryTree a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#v:_Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003e_Node\u003c/a\u003e\u003c/code\u003e :: Prism' (\u003ccode\u003e\u003ca\u003eBinaryTree\u003c/a\u003e\u003c/code\u003e a) (\u003ccode\u003e\u003ca\u003eBinaryTree\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eBinaryTree\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e",
          "module": "Data.Magma",
          "name": "_Node",
          "package": "magma",
          "signature": "p (BinaryTree a, BinaryTree a) (f (BinaryTree a, BinaryTree a)) -\u003e p (BinaryTree a) (f (BinaryTree a))",
          "source": "src/Data-Magma.html#_Node",
          "type": "function"
        },
        "index": {
          "description": "Node Prism BinaryTree BinaryTree BinaryTree",
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "_Node",
          "normalized": "a(BinaryTree b,BinaryTree b)(c(BinaryTree b,BinaryTree b))-\u003ea(BinaryTree b)(c(BinaryTree b))",
          "package": "magma",
          "partial": "Node",
          "signature": "p(BinaryTree a,BinaryTree a)(f(BinaryTree a,BinaryTree a))-\u003ep(BinaryTree a)(f(BinaryTree a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#v:_Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Magma",
          "name": "anaBinaryTree",
          "package": "magma",
          "signature": "(b -\u003e Either a (b, b)) -\u003e b -\u003e BinaryTree a",
          "source": "src/Data-Magma.html#anaBinaryTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "anaBinaryTree",
          "normalized": "(a-\u003eEither b(a,a))-\u003ea-\u003eBinaryTree b",
          "package": "magma",
          "partial": "Binary Tree",
          "signature": "(b-\u003eEither a(b,b))-\u003eb-\u003eBinaryTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#v:anaBinaryTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Magma",
          "name": "cataBinaryTree",
          "package": "magma",
          "signature": "(a -\u003e r) -\u003e (r -\u003e r -\u003e r) -\u003e BinaryTree a -\u003e r",
          "source": "src/Data-Magma.html#cataBinaryTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "cataBinaryTree",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003eBinaryTree a-\u003eb",
          "package": "magma",
          "partial": "Binary Tree",
          "signature": "(a-\u003er)-\u003e(r-\u003er-\u003er)-\u003eBinaryTree a-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#v:cataBinaryTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Magma",
          "name": "foldMap",
          "package": "magma",
          "signature": "(a -\u003e m) -\u003e BinaryTree a -\u003e m",
          "source": "src/Data-Magma.html#foldMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "foldMap",
          "normalized": "(a-\u003eb)-\u003eBinaryTree a-\u003eb",
          "package": "magma",
          "partial": "Map",
          "signature": "(a-\u003em)-\u003eBinaryTree a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#v:foldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003enodeLeft\u003c/a\u003e\u003c/code\u003e :: Traversal' (\u003ccode\u003e\u003ca\u003eBinaryTree\u003c/a\u003e\u003c/code\u003e a) (\u003ccode\u003e\u003ca\u003eBinaryTree\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e",
          "module": "Data.Magma",
          "name": "nodeLeft",
          "package": "magma",
          "signature": "(BinaryTree a -\u003e f (BinaryTree a)) -\u003e BinaryTree a -\u003e f (BinaryTree a)",
          "source": "src/Data-Magma.html#nodeLeft",
          "type": "function"
        },
        "index": {
          "description": "nodeLeft Traversal BinaryTree BinaryTree",
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "nodeLeft",
          "normalized": "(BinaryTree a-\u003eb(BinaryTree a))-\u003eBinaryTree a-\u003eb(BinaryTree a)",
          "package": "magma",
          "partial": "Left",
          "signature": "(BinaryTree a-\u003ef(BinaryTree a))-\u003eBinaryTree a-\u003ef(BinaryTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#v:nodeLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003enodeRight\u003c/a\u003e\u003c/code\u003e :: Traversal' (\u003ccode\u003e\u003ca\u003eBinaryTree\u003c/a\u003e\u003c/code\u003e a) (\u003ccode\u003e\u003ca\u003eBinaryTree\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e",
          "module": "Data.Magma",
          "name": "nodeRight",
          "package": "magma",
          "signature": "(BinaryTree a -\u003e f (BinaryTree a)) -\u003e BinaryTree a -\u003e f (BinaryTree a)",
          "source": "src/Data-Magma.html#nodeRight",
          "type": "function"
        },
        "index": {
          "description": "nodeRight Traversal BinaryTree BinaryTree",
          "hierarchy": "Data Magma",
          "module": "Data.Magma",
          "name": "nodeRight",
          "normalized": "(BinaryTree a-\u003eb(BinaryTree a))-\u003eBinaryTree a-\u003eb(BinaryTree a)",
          "package": "magma",
          "partial": "Right",
          "signature": "(BinaryTree a-\u003ef(BinaryTree a))-\u003eBinaryTree a-\u003ef(BinaryTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/magma/docs/Data-Magma.html#v:nodeRight"
      }
    }
  ]
]