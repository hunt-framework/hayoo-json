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
        "word": "binary-indexed-tree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements mutable binary indexed trees (a.k.a. Fenwick Trees)\nin O(logn) for increment and lookup and O(n) for creation.\n\u003c/p\u003e\u003cp\u003eOriginal concept from Peter M. Fenwick (1994)\n\"\u003cem\u003eA new data structure for cumulative frequency tables\u003c/em\u003e\"\n\u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.14.8917\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIndex i in the tree represents the sum of all values of\nindexes j\u003c=i for some array.\n\u003c/p\u003e\u003cp\u003eIndexes start at 1.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BinaryIndexedTree.ST",
          "name": "ST",
          "package": "binary-indexed-tree",
          "source": "src/Data-BinaryIndexedTree-ST.html",
          "type": "module"
        },
        "index": {
          "description": "Implements mutable binary indexed trees a.k.a Fenwick Trees in logn for increment and lookup and for creation Original concept from Peter Fenwick new data structure for cumulative frequency tables http citeseerx.ist.psu.edu viewdoc summary doi Index in the tree represents the sum of all values of indexes for some array Indexes start at",
          "hierarchy": "Data BinaryIndexedTree ST",
          "module": "Data.BinaryIndexedTree.ST",
          "name": "ST",
          "package": "binary-indexed-tree",
          "partial": "ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-indexed-tree/docs/Data-BinaryIndexedTree-ST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary Indexed Tree \n\u003c/p\u003e",
          "module": "Data.BinaryIndexedTree.ST",
          "name": "BinaryIndexedTree",
          "package": "binary-indexed-tree",
          "source": "src/Data-BinaryIndexedTree-ST.html#BinaryIndexedTree",
          "type": "type"
        },
        "index": {
          "description": "Binary Indexed Tree",
          "hierarchy": "Data BinaryIndexedTree ST",
          "module": "Data.BinaryIndexedTree.ST",
          "name": "BinaryIndexedTree",
          "package": "binary-indexed-tree",
          "partial": "Binary Indexed Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-indexed-tree/docs/Data-BinaryIndexedTree-ST.html#t:BinaryIndexedTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the sum of all indexes 1 through i, inclusive. Takes O(logn). \n\u003c/p\u003e",
          "module": "Data.BinaryIndexedTree.ST",
          "name": "(!)",
          "package": "binary-indexed-tree",
          "signature": "BinaryIndexedTree s -\u003e Int -\u003e ST s Int",
          "source": "src/Data-BinaryIndexedTree-ST.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Compute the sum of all indexes through inclusive Takes logn",
          "hierarchy": "Data BinaryIndexedTree ST",
          "module": "Data.BinaryIndexedTree.ST",
          "name": "(!) !",
          "normalized": "BinaryIndexedTree a-\u003eInt-\u003eST a Int",
          "package": "binary-indexed-tree",
          "signature": "BinaryIndexedTree s-\u003eInt-\u003eST s Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-indexed-tree/docs/Data-BinaryIndexedTree-ST.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the value at index i. Takes O(logn). \n\u003c/p\u003e",
          "module": "Data.BinaryIndexedTree.ST",
          "name": "increment",
          "package": "binary-indexed-tree",
          "signature": "Int -\u003e Int -\u003e BinaryIndexedTree s -\u003e ST s ()",
          "source": "src/Data-BinaryIndexedTree-ST.html#increment",
          "type": "function"
        },
        "index": {
          "description": "Increment the value at index Takes logn",
          "hierarchy": "Data BinaryIndexedTree ST",
          "module": "Data.BinaryIndexedTree.ST",
          "name": "increment",
          "normalized": "Int-\u003eInt-\u003eBinaryIndexedTree a-\u003eST a()",
          "package": "binary-indexed-tree",
          "signature": "Int-\u003eInt-\u003eBinaryIndexedTree s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-indexed-tree/docs/Data-BinaryIndexedTree-ST.html#v:increment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new binary indexed tree on the indexes 1 through n. \n\u003c/p\u003e",
          "module": "Data.BinaryIndexedTree.ST",
          "name": "new",
          "package": "binary-indexed-tree",
          "signature": "Int -\u003e ST s (BinaryIndexedTree s)",
          "source": "src/Data-BinaryIndexedTree-ST.html#new",
          "type": "function"
        },
        "index": {
          "description": "Construct new binary indexed tree on the indexes through",
          "hierarchy": "Data BinaryIndexedTree ST",
          "module": "Data.BinaryIndexedTree.ST",
          "name": "new",
          "normalized": "Int-\u003eST a(BinaryIndexedTree a)",
          "package": "binary-indexed-tree",
          "signature": "Int-\u003eST s(BinaryIndexedTree s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-indexed-tree/docs/Data-BinaryIndexedTree-ST.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements persistent binary indexed trees (or Fenwick Trees)\nin \u003cem\u003eO(logn)\u003c/em\u003e for increment and lookup and \u003cem\u003eO(n)\u003c/em\u003e for creation.\n\u003c/p\u003e\u003cp\u003eIndex \u003cem\u003ei\u003c/em\u003e in the tree represents the sum of all values of\nindexes \u003cem\u003ej\u003c=i\u003c/em\u003e for some array.\n\u003c/p\u003e\u003cp\u003eThe idea is that for \u003cem\u003ek\u003c/em\u003e bits, we parse the index \u003cem\u003ei\u003c/em\u003e from msb\nto lsb and move left/right on the tree for 0/1.\n\u003c/p\u003e\u003cp\u003eFor a read, we accumulate the values in the tree where the\nbinary representation of the index contains a 1. (The\ntechnique is similar to binary exponentiation.)\n\u003c/p\u003e\u003cp\u003eFor an increment, we should increment parent nodes\nin the tree whose corresponding binary index representation\nis \u003cem\u003e\u003e=\u003c/em\u003e than the index \u003cem\u003ei\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote: I was unable to find the algorithm used here in the literature.\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BinaryIndexedTree",
          "name": "BinaryIndexedTree",
          "package": "binary-indexed-tree",
          "source": "src/Data-BinaryIndexedTree.html",
          "type": "module"
        },
        "index": {
          "description": "Implements persistent binary indexed trees or Fenwick Trees in logn for increment and lookup and for creation Index in the tree represents the sum of all values of indexes for some array The idea is that for bits we parse the index from msb to lsb and move left right on the tree for For read we accumulate the values in the tree where the binary representation of the index contains The technique is similar to binary exponentiation For an increment we should increment parent nodes in the tree whose corresponding binary index representation is than the index Note was unable to find the algorithm used here in the literature",
          "hierarchy": "Data BinaryIndexedTree",
          "module": "Data.BinaryIndexedTree",
          "name": "BinaryIndexedTree",
          "package": "binary-indexed-tree",
          "partial": "Binary Indexed Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-indexed-tree/docs/Data-BinaryIndexedTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Binary indexed tree. \n\u003c/p\u003e",
          "module": "Data.BinaryIndexedTree",
          "name": "BinaryIndexedTree",
          "package": "binary-indexed-tree",
          "source": "src/Data-BinaryIndexedTree.html#BinaryIndexedTree",
          "type": "data"
        },
        "index": {
          "description": "Binary indexed tree",
          "hierarchy": "Data BinaryIndexedTree",
          "module": "Data.BinaryIndexedTree",
          "name": "BinaryIndexedTree",
          "package": "binary-indexed-tree",
          "partial": "Binary Indexed Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-indexed-tree/docs/Data-BinaryIndexedTree.html#t:BinaryIndexedTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the sum of all values from index 1 to index i. Takes O(logn).\n\u003c/p\u003e",
          "module": "Data.BinaryIndexedTree",
          "name": "(!)",
          "package": "binary-indexed-tree",
          "signature": "BinaryIndexedTree a -\u003e Int -\u003e a",
          "source": "src/Data-BinaryIndexedTree.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Lookup the sum of all values from index to index Takes logn",
          "hierarchy": "Data BinaryIndexedTree",
          "module": "Data.BinaryIndexedTree",
          "name": "(!) !",
          "normalized": "BinaryIndexedTree a-\u003eInt-\u003ea",
          "package": "binary-indexed-tree",
          "signature": "BinaryIndexedTree a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-indexed-tree/docs/Data-BinaryIndexedTree.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the value at index i by amount x. Takes O(logn).\n\u003c/p\u003e",
          "module": "Data.BinaryIndexedTree",
          "name": "increment",
          "package": "binary-indexed-tree",
          "signature": "Int -\u003e a -\u003e BinaryIndexedTree a -\u003e BinaryIndexedTree a",
          "source": "src/Data-BinaryIndexedTree.html#increment",
          "type": "function"
        },
        "index": {
          "description": "Increment the value at index by amount Takes logn",
          "hierarchy": "Data BinaryIndexedTree",
          "module": "Data.BinaryIndexedTree",
          "name": "increment",
          "normalized": "Int-\u003ea-\u003eBinaryIndexedTree a-\u003eBinaryIndexedTree a",
          "package": "binary-indexed-tree",
          "signature": "Int-\u003ea-\u003eBinaryIndexedTree a-\u003eBinaryIndexedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-indexed-tree/docs/Data-BinaryIndexedTree.html#v:increment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a binary indexed tree on k bits. Takes O(n).\n\u003c/p\u003e",
          "module": "Data.BinaryIndexedTree",
          "name": "new",
          "package": "binary-indexed-tree",
          "signature": "Int -\u003e BinaryIndexedTree a",
          "source": "src/Data-BinaryIndexedTree.html#new",
          "type": "function"
        },
        "index": {
          "description": "Construct binary indexed tree on bits Takes",
          "hierarchy": "Data BinaryIndexedTree",
          "module": "Data.BinaryIndexedTree",
          "name": "new",
          "normalized": "Int-\u003eBinaryIndexedTree a",
          "package": "binary-indexed-tree",
          "signature": "Int-\u003eBinaryIndexedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-indexed-tree/docs/Data-BinaryIndexedTree.html#v:new"
      }
    }
  ]
]