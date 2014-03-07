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
        "word": "garsia-wachs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module a direct translation from ML of the functional pearl\n   \u003ca\u003eA Functional Implementation of the Garsia-Wachs Algorithm\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis pearl was presented by Jean-Christophe Fillitre on the\n ML Workshop 2008.\n\u003c/p\u003e\u003cp\u003eQuote from the paper:\n\u003c/p\u003e\u003cpre\u003e\n  This functional pearl proposes an ML implementation of the\n  Garsia-Wachs algorithm. This somewhat obscure algorithm builds\n  a binary tree with minimum weighted path length from weighted\n  leaf nodes given in symmetric order. Our solution exhibits the usual\n  benefits of functional programming (use of immutable data structures,\n  pattern-matching, polymorphism) and nicely compares to\n  the purely imperative implementation from The Art of Computer\n  Programming.\n\u003c/pre\u003e\u003cpre\u003e\n  The Garsia-Wachs algorithm addresses the following problem.\n  Given a sequence of values X0, ..., Xn, together with nonnegative\n  integer weights w0, ..., wn, we want to construct a binary tree with\n  X0, ..., Xn as leaf nodes in symmetric order, such that the sum\n\u003c/pre\u003e\u003cpre\u003e         sum [ w!i * d!i | i \u003c- [i..n] ]\n\u003c/pre\u003e\u003cpre\u003e\n  is minimum, where di is the distance of leaf node Xi to the root.\n\u003c/pre\u003e\u003cpre\u003e\n  This can be used to build optimum search tables, when data is\n  organized within a binary search tree and when access frequencies\n  are known in advance. It may also be used to balance a \u003ccode\u003eropes\u003c/code\u003e\n  data structure in an optimal way, since a rope is precisely a\n  binary tree with a character string on each leaf; thus taking\n  wi as the length of this string would minimize the average\n  access cost to a character in the rope.\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Algorithm.GarsiaWachs",
          "name": "GarsiaWachs",
          "package": "garsia-wachs",
          "source": "src/Data-Algorithm-GarsiaWachs.html",
          "type": "module"
        },
        "index": {
          "description": "This module direct translation from ML of the functional pearl Functional Implementation of the Garsia-Wachs Algorithm This pearl was presented by Jean-Christophe Fillitre on the ML Workshop Quote from the paper This functional pearl proposes an ML implementation of the Garsia-Wachs algorithm This somewhat obscure algorithm builds binary tree with minimum weighted path length from weighted leaf nodes given in symmetric order Our solution exhibits the usual benefits of functional programming use of immutable data structures pattern-matching polymorphism and nicely compares to the purely imperative implementation from The Art of Computer Programming The Garsia-Wachs algorithm addresses the following problem Given sequence of values X0 Xn together with nonnegative integer weights w0 wn we want to construct binary tree with X0 Xn as leaf nodes in symmetric order such that the sum sum i..n is minimum where di is the distance of leaf node Xi to the root This can be used to build optimum search tables when data is organized within binary search tree and when access frequencies are known in advance It may also be used to balance ropes data structure in an optimal way since rope is precisely binary tree with character string on each leaf thus taking wi as the length of this string would minimize the average access cost to character in the rope",
          "hierarchy": "Data Algorithm GarsiaWachs",
          "module": "Data.Algorithm.GarsiaWachs",
          "name": "GarsiaWachs",
          "package": "garsia-wachs",
          "partial": "Garsia Wachs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/garsia-wachs/docs/Data-Algorithm-GarsiaWachs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.GarsiaWachs",
          "name": "Tree",
          "package": "garsia-wachs",
          "source": "src/Data-Algorithm-GarsiaWachs.html#Tree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Algorithm GarsiaWachs",
          "module": "Data.Algorithm.GarsiaWachs",
          "name": "Tree",
          "package": "garsia-wachs",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/garsia-wachs/docs/Data-Algorithm-GarsiaWachs.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.GarsiaWachs",
          "name": "Leaf",
          "package": "garsia-wachs",
          "signature": "Leaf a",
          "source": "src/Data-Algorithm-GarsiaWachs.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm GarsiaWachs",
          "module": "Data.Algorithm.GarsiaWachs",
          "name": "Leaf",
          "package": "garsia-wachs",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garsia-wachs/docs/Data-Algorithm-GarsiaWachs.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.GarsiaWachs",
          "name": "Node",
          "package": "garsia-wachs",
          "signature": "Node !(Tree a) !(Tree a)",
          "source": "src/Data-Algorithm-GarsiaWachs.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm GarsiaWachs",
          "module": "Data.Algorithm.GarsiaWachs",
          "name": "Node",
          "package": "garsia-wachs",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garsia-wachs/docs/Data-Algorithm-GarsiaWachs.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.GarsiaWachs",
          "name": "garsiaWachs",
          "package": "garsia-wachs",
          "signature": "[(a, i)] -\u003e Maybe (Tree a)",
          "source": "src/Data-Algorithm-GarsiaWachs.html#garsiaWachs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm GarsiaWachs",
          "module": "Data.Algorithm.GarsiaWachs",
          "name": "garsiaWachs",
          "normalized": "[(a,b)]-\u003eMaybe(Tree a)",
          "package": "garsia-wachs",
          "partial": "Wachs",
          "signature": "[(a,i)]-\u003eMaybe(Tree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garsia-wachs/docs/Data-Algorithm-GarsiaWachs.html#v:garsiaWachs"
      }
    }
  ]
]