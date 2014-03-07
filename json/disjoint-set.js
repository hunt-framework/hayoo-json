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
        "word": "disjoint-set"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePersistent Disjoint-Sets (a.k.a. Union-Find).  This implements\ndisjoint-sets according to the description given in\n\"\u003cem\u003eIntroduction to Algorithms\u003c/em\u003e\" by Cormen et al\n(\u003ca\u003ehttp://mitpress.mit.edu/algorithms\u003c/a\u003e).\nMost functions incur an additional O(logn) overhead due to the use\nof persistent maps.\n\u003c/p\u003e\u003cp\u003eDisjoint-sets are a set of elements with equivalence relations defined\nbetween elements, i.e. two elements may be members of the same equivalence\nset. Each element has a set representative. The implementation works by\nmaintaining a map from an element to its parent. When an element is its\nown parent, it is the set representative. Two elements are part of the\nsame equivalence set when their set representatives are the same.\n\u003c/p\u003e\u003cp\u003eIn order to find the set representative efficiently, after each traversal\nfrom an element to its representative, we compress the path so that\neach element on the path points directly to the set representative.  For\nthis to be persistent, lookup is stateful and so returns the result\nof the lookup and a new disjoint set.\n\u003c/p\u003e\u003cp\u003eAdditionally, to make sure that path lengths grow logarithmically, we\nmaintain the rank of a set. This is a logarithmic upper bound on the \nnumber of elements in each set. When we compute the union of two sets,\nwe make the set with the smaller rank a child of the set with the larger\nrank. When two sets have equal rank, the first set is a child of the second\nand the rank of the second is increased by 1.\n\u003c/p\u003e\u003cp\u003eBelow alpha(n) refers to the extremely slowly growing inverse Ackermann\nfunction.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IntDisjointSet",
          "name": "IntDisjointSet",
          "package": "disjoint-set",
          "source": "src/Data-IntDisjointSet.html",
          "type": "module"
        },
        "index": {
          "description": "Persistent Disjoint-Sets a.k.a Union-Find This implements disjoint-sets according to the description given in Introduction to Algorithms by Cormen et al http mitpress.mit.edu algorithms Most functions incur an additional logn overhead due to the use of persistent maps Disjoint-sets are set of elements with equivalence relations defined between elements i.e two elements may be members of the same equivalence set Each element has set representative The implementation works by maintaining map from an element to its parent When an element is its own parent it is the set representative Two elements are part of the same equivalence set when their set representatives are the same In order to find the set representative efficiently after each traversal from an element to its representative we compress the path so that each element on the path points directly to the set representative For this to be persistent lookup is stateful and so returns the result of the lookup and new disjoint set Additionally to make sure that path lengths grow logarithmically we maintain the rank of set This is logarithmic upper bound on the number of elements in each set When we compute the union of two sets we make the set with the smaller rank child of the set with the larger rank When two sets have equal rank the first set is child of the second and the rank of the second is increased by Below alpha refers to the extremely slowly growing inverse Ackermann function",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "IntDisjointSet",
          "package": "disjoint-set",
          "partial": "Int Disjoint Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a disjoint set of integers. \n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "IntDisjointSet",
          "package": "disjoint-set",
          "source": "src/Data-IntDisjointSet.html#IntDisjointSet",
          "type": "data"
        },
        "index": {
          "description": "Represents disjoint set of integers",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "IntDisjointSet",
          "package": "disjoint-set",
          "partial": "Int Disjoint Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#t:IntDisjointSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of disjoint sets. O(1). \n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "disjointSetSize",
          "package": "disjoint-set",
          "signature": "IntDisjointSet -\u003e Int",
          "source": "src/Data-IntDisjointSet.html#disjointSetSize",
          "type": "function"
        },
        "index": {
          "description": "Return the number of disjoint sets",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "disjointSetSize",
          "normalized": "IntDisjointSet-\u003eInt",
          "package": "disjoint-set",
          "partial": "Set Size",
          "signature": "IntDisjointSet-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:disjointSetSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of all the elements. \n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "elems",
          "package": "disjoint-set",
          "signature": "IntDisjointSet -\u003e ([Int], IntDisjointSet)",
          "source": "src/Data-IntDisjointSet.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Return list of all the elements",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "elems",
          "normalized": "IntDisjointSet-\u003e([Int],IntDisjointSet)",
          "package": "disjoint-set",
          "signature": "IntDisjointSet-\u003e([Int],IntDisjointSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a disjoint set with no members. O(1). \n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "empty",
          "package": "disjoint-set",
          "signature": "IntDisjointSet",
          "source": "src/Data-IntDisjointSet.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Create disjoint set with no members",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "empty",
          "package": "disjoint-set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if both elements belong to the same set. \n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "equivalent",
          "package": "disjoint-set",
          "signature": "Int -\u003e Int -\u003e IntDisjointSet -\u003e (Bool, IntDisjointSet)",
          "source": "src/Data-IntDisjointSet.html#equivalent",
          "type": "function"
        },
        "index": {
          "description": "True if both elements belong to the same set",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "equivalent",
          "normalized": "Int-\u003eInt-\u003eIntDisjointSet-\u003e(Bool,IntDisjointSet)",
          "package": "disjoint-set",
          "signature": "Int-\u003eInt-\u003eIntDisjointSet-\u003e(Bool,IntDisjointSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:equivalent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an association list representing equivalences between elements,\ngenerate the corresponding disjoint-set.\n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "fromList",
          "package": "disjoint-set",
          "signature": "[(Int, Int)] -\u003e IntDisjointSet",
          "source": "src/Data-IntDisjointSet.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Given an association list representing equivalences between elements generate the corresponding disjoint-set",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "fromList",
          "normalized": "[(Int,Int)]-\u003eIntDisjointSet",
          "package": "disjoint-set",
          "partial": "List",
          "signature": "[(Int,Int)]-\u003eIntDisjointSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert x into the disjoint set.\nIf it is already a member, then do nothing,\notherwise x has no equivalence relations.\nO(logn).\n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "insert",
          "package": "disjoint-set",
          "signature": "Int -\u003e IntDisjointSet -\u003e IntDisjointSet",
          "source": "src/Data-IntDisjointSet.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert into the disjoint set If it is already member then do nothing otherwise has no equivalence relations logn",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "insert",
          "normalized": "Int-\u003eIntDisjointSet-\u003eIntDisjointSet",
          "package": "disjoint-set",
          "signature": "Int-\u003eIntDisjointSet-\u003eIntDisjointSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the set representative for this input.\nThis performs path compression and so is stateful.\nAmortized O(logn * alpha(n)).\n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "lookup",
          "package": "disjoint-set",
          "signature": "Int -\u003e IntDisjointSet -\u003e (Maybe Int, IntDisjointSet)",
          "source": "src/Data-IntDisjointSet.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Find the set representative for this input This performs path compression and so is stateful Amortized logn alpha",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "lookup",
          "normalized": "Int-\u003eIntDisjointSet-\u003e(Maybe Int,IntDisjointSet)",
          "package": "disjoint-set",
          "signature": "Int-\u003eIntDisjointSet-\u003e(Maybe Int,IntDisjointSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap each member to another Int.\nThe map function must be a bijection, i.e. 1-to-1 mapping.\n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "map",
          "package": "disjoint-set",
          "signature": "(Int -\u003e Int) -\u003e IntDisjointSet -\u003e IntDisjointSet",
          "source": "src/Data-IntDisjointSet.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map each member to another Int The map function must be bijection i.e to-1 mapping",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "map",
          "normalized": "(Int-\u003eInt)-\u003eIntDisjointSet-\u003eIntDisjointSet",
          "package": "disjoint-set",
          "signature": "(Int-\u003eInt)-\u003eIntDisjointSet-\u003eIntDisjointSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a disjoint set with one member. O(1). \n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "singleton",
          "package": "disjoint-set",
          "signature": "Int -\u003e IntDisjointSet",
          "source": "src/Data-IntDisjointSet.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create disjoint set with one member",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "singleton",
          "normalized": "Int-\u003eIntDisjointSet",
          "package": "disjoint-set",
          "signature": "Int-\u003eIntDisjointSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of elements in all disjoint sets. O(1). \n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "size",
          "package": "disjoint-set",
          "signature": "IntDisjointSet -\u003e Int",
          "source": "src/Data-IntDisjointSet.html#size",
          "type": "function"
        },
        "index": {
          "description": "Return the number of elements in all disjoint sets",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "size",
          "normalized": "IntDisjointSet-\u003eInt",
          "package": "disjoint-set",
          "signature": "IntDisjointSet-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an association list of each element and its representative,\nin arbitrary order.\n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "toList",
          "package": "disjoint-set",
          "signature": "IntDisjointSet -\u003e ([(Int, Int)], IntDisjointSet)",
          "source": "src/Data-IntDisjointSet.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Generate an association list of each element and its representative in arbitrary order",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "toList",
          "normalized": "IntDisjointSet-\u003e([(Int,Int)],IntDisjointSet)",
          "package": "disjoint-set",
          "partial": "List",
          "signature": "IntDisjointSet-\u003e([(Int,Int)],IntDisjointSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an equivalence relation between x and y.\nAmortized O(logn * alpha(n)).\n\u003c/p\u003e\u003cp\u003eThis function works by looking up the set representatives\nfor both x and y.  If they are the same, it does nothing.\nThen it looks up the rank for both representatives and\nmakes the tree of the smaller ranked representative a\nchild of the tree of the larger ranked representative.\nIf both representatives have the same rank, x is made a\nchild of y and the rank of y is increase by 1.\n\u003c/p\u003e\u003cp\u003eIf either x or y is not present in the input set, nothing is done.\n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "union",
          "package": "disjoint-set",
          "signature": "Int -\u003e Int -\u003e IntDisjointSet -\u003e IntDisjointSet",
          "source": "src/Data-IntDisjointSet.html#union",
          "type": "function"
        },
        "index": {
          "description": "Create an equivalence relation between and Amortized logn alpha This function works by looking up the set representatives for both and If they are the same it does nothing Then it looks up the rank for both representatives and makes the tree of the smaller ranked representative child of the tree of the larger ranked representative If both representatives have the same rank is made child of and the rank of is increase by If either or is not present in the input set nothing is done",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "union",
          "normalized": "Int-\u003eInt-\u003eIntDisjointSet-\u003eIntDisjointSet",
          "package": "disjoint-set",
          "signature": "Int-\u003eInt-\u003eIntDisjointSet-\u003eIntDisjointSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven two instances of disjoint sets that share no members in common,\ncomputes a third disjoint set that is the combination of the two.\n\u003c/p\u003e\u003cp\u003eThis method is unsafe in that is does not verify that the two input\nsets share no members in common and in the event that a member\noverlaps, the resulting set may have incorrect equivalence relations.\n\u003c/p\u003e",
          "module": "Data.IntDisjointSet",
          "name": "unsafeMerge",
          "package": "disjoint-set",
          "signature": "IntDisjointSet -\u003e IntDisjointSet -\u003e IntDisjointSet",
          "source": "src/Data-IntDisjointSet.html#unsafeMerge",
          "type": "function"
        },
        "index": {
          "description": "Given two instances of disjoint sets that share no members in common computes third disjoint set that is the combination of the two This method is unsafe in that is does not verify that the two input sets share no members in common and in the event that member overlaps the resulting set may have incorrect equivalence relations",
          "hierarchy": "Data IntDisjointSet",
          "module": "Data.IntDisjointSet",
          "name": "unsafeMerge",
          "normalized": "IntDisjointSet-\u003eIntDisjointSet-\u003eIntDisjointSet",
          "package": "disjoint-set",
          "partial": "Merge",
          "signature": "IntDisjointSet-\u003eIntDisjointSet-\u003eIntDisjointSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disjoint-set/docs/Data-IntDisjointSet.html#v:unsafeMerge"
      }
    }
  ]
]