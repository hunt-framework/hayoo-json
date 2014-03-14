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
        "word": "FenwickTree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.Fenwick",
          "name": "Fenwick",
          "package": "FenwickTree",
          "source": "src/Data-Tree-Fenwick.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tree Fenwick",
          "module": "Data.Tree.Fenwick",
          "name": "Fenwick",
          "package": "FenwickTree",
          "partial": "Fenwick",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FenwickTree/docs/Data-Tree-Fenwick.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMother structure holds functions\n   that allow to get a value to be summed and comparison function.\n   Below there is a tree of \u003ccode\u003eFNode\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Tree.Fenwick",
          "name": "FTree",
          "package": "FenwickTree",
          "source": "src/Data-Tree-Fenwick.html#FTree",
          "type": "data"
        },
        "index": {
          "description": "Mother structure holds functions that allow to get value to be summed and comparison function Below there is tree of FNode",
          "hierarchy": "Data Tree Fenwick",
          "module": "Data.Tree.Fenwick",
          "name": "FTree",
          "package": "FenwickTree",
          "partial": "FTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FenwickTree/docs/Data-Tree-Fenwick.html#t:FTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a maximum depth of a tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Fenwick",
          "name": "depth",
          "package": "FenwickTree",
          "signature": "FTree a -\u003e Int",
          "source": "src/Data-Tree-Fenwick.html#depth",
          "type": "function"
        },
        "index": {
          "description": "Returns maximum depth of tree",
          "hierarchy": "Data Tree Fenwick",
          "module": "Data.Tree.Fenwick",
          "name": "depth",
          "normalized": "FTree a-\u003eInt",
          "package": "FenwickTree",
          "signature": "FTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FenwickTree/docs/Data-Tree-Fenwick.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an empty Fenwick tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Fenwick",
          "name": "empty",
          "package": "FenwickTree",
          "signature": "(a -\u003e Double) -\u003e (a -\u003e a -\u003e Ordering) -\u003e FTree a",
          "source": "src/Data-Tree-Fenwick.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Creates an empty Fenwick tree",
          "hierarchy": "Data Tree Fenwick",
          "module": "Data.Tree.Fenwick",
          "name": "empty",
          "normalized": "(a-\u003eDouble)-\u003e(a-\u003ea-\u003eOrdering)-\u003eFTree a",
          "package": "FenwickTree",
          "signature": "(a-\u003eDouble)-\u003e(a-\u003ea-\u003eOrdering)-\u003eFTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FenwickTree/docs/Data-Tree-Fenwick.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a tree from a list and helper functions: compare, and value.\n\u003c/p\u003e",
          "module": "Data.Tree.Fenwick",
          "name": "fromList",
          "package": "FenwickTree",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e (a -\u003e Val) -\u003e [a] -\u003e FTree a",
          "source": "src/Data-Tree-Fenwick.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates tree from list and helper functions compare and value",
          "hierarchy": "Data Tree Fenwick",
          "module": "Data.Tree.Fenwick",
          "name": "fromList",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e(a-\u003eVal)-\u003e[a]-\u003eFTree a",
          "package": "FenwickTree",
          "partial": "List",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e(a-\u003eVal)-\u003e[a]-\u003eFTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FenwickTree/docs/Data-Tree-Fenwick.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a value into a Fenwick tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Fenwick",
          "name": "insert",
          "package": "FenwickTree",
          "signature": "a -\u003e FTree a -\u003e FTree a",
          "source": "src/Data-Tree-Fenwick.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts value into Fenwick tree",
          "hierarchy": "Data Tree Fenwick",
          "module": "Data.Tree.Fenwick",
          "name": "insert",
          "normalized": "a-\u003eFTree a-\u003eFTree a",
          "package": "FenwickTree",
          "signature": "a-\u003eFTree a-\u003eFTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FenwickTree/docs/Data-Tree-Fenwick.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds a node corresponding to a given cumulative sum,\n   convenient for sampling quantile function of a distribution.\n   NOTE: returns an answer only up to a cumulative sum\n   of a whole tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Fenwick",
          "name": "invQuery",
          "package": "FenwickTree",
          "signature": "Val -\u003e FTree a -\u003e Maybe a",
          "source": "src/Data-Tree-Fenwick.html#invQuery",
          "type": "function"
        },
        "index": {
          "description": "Finds node corresponding to given cumulative sum convenient for sampling quantile function of distribution NOTE returns an answer only up to cumulative sum of whole tree",
          "hierarchy": "Data Tree Fenwick",
          "module": "Data.Tree.Fenwick",
          "name": "invQuery",
          "normalized": "Val-\u003eFTree a-\u003eMaybe a",
          "package": "FenwickTree",
          "partial": "Query",
          "signature": "Val-\u003eFTree a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FenwickTree/docs/Data-Tree-Fenwick.html#v:invQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds a cumulative sum up to a given node of a Fenwick tree.\n   Note: if the node is not found, a sum at point corresponding to this\n   node is still returned. (Convenient for finding CDF value at a given point.)\n\u003c/p\u003e",
          "module": "Data.Tree.Fenwick",
          "name": "query",
          "package": "FenwickTree",
          "signature": "a -\u003e FTree a -\u003e Val",
          "source": "src/Data-Tree-Fenwick.html#query",
          "type": "function"
        },
        "index": {
          "description": "Finds cumulative sum up to given node of Fenwick tree Note if the node is not found sum at point corresponding to this node is still returned Convenient for finding CDF value at given point",
          "hierarchy": "Data Tree Fenwick",
          "module": "Data.Tree.Fenwick",
          "name": "query",
          "normalized": "a-\u003eFTree a-\u003eVal",
          "package": "FenwickTree",
          "signature": "a-\u003eFTree a-\u003eVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FenwickTree/docs/Data-Tree-Fenwick.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns number of elements in a tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Fenwick",
          "name": "size",
          "package": "FenwickTree",
          "signature": "FTree a -\u003e Int",
          "source": "src/Data-Tree-Fenwick.html#size",
          "type": "function"
        },
        "index": {
          "description": "Returns number of elements in tree",
          "hierarchy": "Data Tree Fenwick",
          "module": "Data.Tree.Fenwick",
          "name": "size",
          "normalized": "FTree a-\u003eInt",
          "package": "FenwickTree",
          "signature": "FTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FenwickTree/docs/Data-Tree-Fenwick.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a sorted list of cumulative sums, and corresponding\n   objects from the tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Fenwick",
          "name": "toFreqList",
          "package": "FenwickTree",
          "signature": "FTree a -\u003e [(Double, a)]",
          "source": "src/Data-Tree-Fenwick.html#toFreqList",
          "type": "function"
        },
        "index": {
          "description": "Extract sorted list of cumulative sums and corresponding objects from the tree",
          "hierarchy": "Data Tree Fenwick",
          "module": "Data.Tree.Fenwick",
          "name": "toFreqList",
          "normalized": "FTree a-\u003e[(Double,a)]",
          "package": "FenwickTree",
          "partial": "Freq List",
          "signature": "FTree a-\u003e[(Double,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FenwickTree/docs/Data-Tree-Fenwick.html#v:toFreqList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a sorted list of inserted values from the tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Fenwick",
          "name": "toList",
          "package": "FenwickTree",
          "signature": "FTree a -\u003e [a]",
          "source": "src/Data-Tree-Fenwick.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Extract sorted list of inserted values from the tree",
          "hierarchy": "Data Tree Fenwick",
          "module": "Data.Tree.Fenwick",
          "name": "toList",
          "normalized": "FTree a-\u003e[a]",
          "package": "FenwickTree",
          "partial": "List",
          "signature": "FTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FenwickTree/docs/Data-Tree-Fenwick.html#v:toList"
      }
    }
  ]
]