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
        "word": "disjoint-sets-st"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImperative disjoint sets data structure.\n - Uses mutable arrays with path compression and union by rank to achieve nearly constant amortized time complexity.\n - (It's actually the inverted Ackermann function, which is less than 5 for all remotely possible sizes.)\n - Optimized to be used with unboxed arrays of integers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DisjointSet",
          "name": "DisjointSet",
          "package": "disjoint-sets-st",
          "source": "src/Data-DisjointSet.html",
          "type": "module"
        },
        "index": {
          "description": "Imperative disjoint sets data structure Uses mutable arrays with path compression and union by rank to achieve nearly constant amortized time complexity It actually the inverted Ackermann function which is less than for all remotely possible sizes Optimized to be used with unboxed arrays of integers",
          "hierarchy": "Data DisjointSet",
          "module": "Data.DisjointSet",
          "name": "DisjointSet",
          "package": "disjoint-sets-st",
          "partial": "Disjoint Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-sets-st/docs/Data-DisjointSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection of disjoint sets on \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es backed by a\n mutable array of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DisjointSet",
          "name": "DSet",
          "package": "disjoint-sets-st",
          "source": "src/Data-DisjointSet.html#DSet",
          "type": "data"
        },
        "index": {
          "description": "collection of disjoint sets on Int backed by mutable array of type",
          "hierarchy": "Data DisjointSet",
          "module": "Data.DisjointSet",
          "name": "DSet",
          "package": "disjoint-sets-st",
          "partial": "DSet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-sets-st/docs/Data-DisjointSet.html#t:DSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DisjointSet",
          "name": "classes",
          "package": "disjoint-sets-st",
          "signature": "DSet a -\u003e m Int",
          "source": "src/Data-DisjointSet.html#classes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DisjointSet",
          "module": "Data.DisjointSet",
          "name": "classes",
          "normalized": "DSet a-\u003eb Int",
          "package": "disjoint-sets-st",
          "signature": "DSet a-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-sets-st/docs/Data-DisjointSet.html#v:classes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the identifier of the subset a given element is in.\n\u003c/p\u003e",
          "module": "Data.DisjointSet",
          "name": "find",
          "package": "disjoint-sets-st",
          "signature": "DSet a -\u003e Int -\u003e m Int",
          "source": "src/Data-DisjointSet.html#find",
          "type": "function"
        },
        "index": {
          "description": "Returns the identifier of the subset given element is in",
          "hierarchy": "Data DisjointSet",
          "module": "Data.DisjointSet",
          "name": "find",
          "normalized": "DSet a-\u003eInt-\u003eb Int",
          "package": "disjoint-sets-st",
          "signature": "DSet a-\u003eInt-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-sets-st/docs/Data-DisjointSet.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e iff the given two elements belong to the same class.\n In many cases this function is preferred over \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DisjointSet",
          "name": "sameClass",
          "package": "disjoint-sets-st",
          "signature": "DSet a -\u003e Int -\u003e Int -\u003e m Bool",
          "source": "src/Data-DisjointSet.html#sameClass",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff the given two elements belong to the same class In many cases this function is preferred over find",
          "hierarchy": "Data DisjointSet",
          "module": "Data.DisjointSet",
          "name": "sameClass",
          "normalized": "DSet a-\u003eInt-\u003eInt-\u003eb Bool",
          "package": "disjoint-sets-st",
          "partial": "Class",
          "signature": "DSet a-\u003eInt-\u003eInt-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-sets-st/docs/Data-DisjointSet.html#v:sameClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new disjoint set structure with the specified bounds.\n Calling \u003ccode\u003emkset (i,j)\u003c/code\u003e creates a collection of singleton sets indexed\n by numbers from \u003ccode\u003ei\u003c/code\u003e to \u003ccode\u003ej\u003c/code\u003e (inclusive).\n\u003c/p\u003e",
          "module": "Data.DisjointSet",
          "name": "singletons",
          "package": "disjoint-sets-st",
          "signature": "(Int, Int) -\u003e m (DSet a)",
          "source": "src/Data-DisjointSet.html#singletons",
          "type": "function"
        },
        "index": {
          "description": "Creates new disjoint set structure with the specified bounds Calling mkset creates collection of singleton sets indexed by numbers from to inclusive",
          "hierarchy": "Data DisjointSet",
          "module": "Data.DisjointSet",
          "name": "singletons",
          "normalized": "(Int,Int)-\u003ea(DSet b)",
          "package": "disjoint-sets-st",
          "signature": "(Int,Int)-\u003em(DSet a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-sets-st/docs/Data-DisjointSet.html#v:singletons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function for creating an efficient, \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e-based array.\n\u003c/p\u003e",
          "module": "Data.DisjointSet",
          "name": "singletonsIO",
          "package": "disjoint-sets-st",
          "signature": "(Int, Int) -\u003e IO (DSet IOUArray)",
          "source": "src/Data-DisjointSet.html#singletonsIO",
          "type": "function"
        },
        "index": {
          "description": "convenience function for creating an efficient IO based array",
          "hierarchy": "Data DisjointSet",
          "module": "Data.DisjointSet",
          "name": "singletonsIO",
          "normalized": "(Int,Int)-\u003eIO(DSet IOUArray)",
          "package": "disjoint-sets-st",
          "partial": "IO",
          "signature": "(Int,Int)-\u003eIO(DSet IOUArray)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-sets-st/docs/Data-DisjointSet.html#v:singletonsIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function for creating an efficient, \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e-based array.\n\u003c/p\u003e",
          "module": "Data.DisjointSet",
          "name": "singletonsST",
          "package": "disjoint-sets-st",
          "signature": "(Int, Int) -\u003e ST s (DSet (STUArray s))",
          "source": "src/Data-DisjointSet.html#singletonsST",
          "type": "function"
        },
        "index": {
          "description": "convenience function for creating an efficient ST based array",
          "hierarchy": "Data DisjointSet",
          "module": "Data.DisjointSet",
          "name": "singletonsST",
          "normalized": "(Int,Int)-\u003eST a(DSet(STUArray a))",
          "package": "disjoint-sets-st",
          "partial": "ST",
          "signature": "(Int,Int)-\u003eST s(DSet(STUArray s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-sets-st/docs/Data-DisjointSet.html#v:singletonsST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoins the classes of given two elements.\n Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the two classes were merged (i.e. were distinct before),\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.DisjointSet",
          "name": "union",
          "package": "disjoint-sets-st",
          "signature": "DSet a -\u003e Int -\u003e Int -\u003e m Bool",
          "source": "src/Data-DisjointSet.html#union",
          "type": "function"
        },
        "index": {
          "description": "Joins the classes of given two elements Returns True if the two classes were merged i.e were distinct before False otherwise",
          "hierarchy": "Data DisjointSet",
          "module": "Data.DisjointSet",
          "name": "union",
          "normalized": "DSet a-\u003eInt-\u003eInt-\u003eb Bool",
          "package": "disjoint-sets-st",
          "signature": "DSet a-\u003eInt-\u003eInt-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-sets-st/docs/Data-DisjointSet.html#v:union"
      }
    }
  ]
]