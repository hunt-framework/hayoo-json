[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-BTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of the B+ tree predicate. A containment predicate is a tuple of two integers\nrepresenting an open interval, while the equality predicate is simply an interger value.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.GiST.BTree",
        "fct-package": "GiST",
        "fct-signature": "module",
        "fct-source": "src/Data-GiST-BTree.html",
        "fct-type": "module",
        "title": "BTree"
      },
      "index": {
        "description": "simple implementation of the tree predicate containment predicate is tuple of two integers representing an open interval while the equality predicate is simply an interger value",
        "hierarchy": "Data GiST BTree",
        "module": "Data.GiST.BTree",
        "name": "BTree",
        "normalized": "",
        "package": "GiST",
        "partial": "BTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-BTree.html#t:Predicate",
      "description": {
        "fct-module": "Data.GiST.BTree",
        "fct-package": "GiST",
        "fct-signature": "data",
        "fct-source": "src/Data-GiST-BTree.html#Predicate",
        "fct-type": "data",
        "title": "Predicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GiST BTree",
        "module": "Data.GiST.BTree",
        "name": "Predicate",
        "normalized": "",
        "package": "GiST",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-BTree.html#v:Contains",
      "description": {
        "fct-descr": "\u003cp\u003econtainment predicate (interval)\n\u003c/p\u003e",
        "fct-module": "Data.GiST.BTree",
        "fct-package": "GiST",
        "fct-signature": "Contains (a, a)",
        "fct-source": "src/Data-GiST-BTree.html#Predicate",
        "fct-type": "function",
        "title": "Contains"
      },
      "index": {
        "description": "containment predicate interval",
        "hierarchy": "Data GiST BTree",
        "module": "Data.GiST.BTree",
        "name": "Contains",
        "normalized": "Contains(a,a)",
        "package": "GiST",
        "partial": "Contains",
        "signature": "Contains(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-BTree.html#v:Equals",
      "description": {
        "fct-descr": "\u003cp\u003eequality predicate (integer value)\n\u003c/p\u003e",
        "fct-module": "Data.GiST.BTree",
        "fct-package": "GiST",
        "fct-signature": "Equals a",
        "fct-source": "src/Data-GiST-BTree.html#Predicate",
        "fct-type": "function",
        "title": "Equals"
      },
      "index": {
        "description": "equality predicate integer value",
        "hierarchy": "Data GiST BTree",
        "module": "Data.GiST.BTree",
        "name": "Equals",
        "normalized": "",
        "package": "GiST",
        "partial": "Equals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-BTree.html#v:between",
      "description": {
        "fct-descr": "\u003cp\u003eTests if a value is between two others\n\u003c/p\u003e",
        "fct-module": "Data.GiST.BTree",
        "fct-package": "GiST",
        "fct-signature": "a -\u003e a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-GiST-BTree.html#between",
        "fct-type": "function",
        "title": "between"
      },
      "index": {
        "description": "Tests if value is between two others",
        "hierarchy": "Data GiST BTree",
        "module": "Data.GiST.BTree",
        "name": "between",
        "normalized": "a-\u003ea-\u003ea-\u003eBool",
        "package": "GiST",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe implementation of the basic GiST operations. The behaviour\nof the operations is largely influenced by the predicate used, allowing the GiST to behave\nlike a different type of balanced search tree for a different predicate. Although the operations\nare influenced by the predicate, it is always ensured that the tree stays balanced after an \ninsertion or deletion, regardless of the predicate used. It is also recommended that the minimum\nand maximum fill factor for the tree are constant throughout the whole program to ensure optimal\nbehaviour\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "module",
        "fct-source": "src/Data-GiST-GiST.html",
        "fct-type": "module",
        "title": "GiST"
      },
      "index": {
        "description": "The implementation of the basic GiST operations The behaviour of the operations is largely influenced by the predicate used allowing the GiST to behave like different type of balanced search tree for different predicate Although the operations are influenced by the predicate it is always ensured that the tree stays balanced after an insertion or deletion regardless of the predicate used It is also recommended that the minimum and maximum fill factor for the tree are constant throughout the whole program to ensure optimal behaviour",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "GiST",
        "normalized": "",
        "package": "GiST",
        "partial": "Gi ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#t:Entry",
      "description": {
        "fct-descr": "\u003cp\u003eA general entry type for the gist\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "data",
        "fct-source": "src/Data-GiST-Types.html#Entry",
        "fct-type": "data",
        "title": "Entry"
      },
      "index": {
        "description": "general entry type for the gist",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "Entry",
        "normalized": "",
        "package": "GiST",
        "partial": "Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#t:GiST",
      "description": {
        "fct-descr": "\u003cp\u003eThe data structure used for building the GiST\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "data",
        "fct-source": "src/Data-GiST-Types.html#GiST",
        "fct-type": "data",
        "title": "GiST"
      },
      "index": {
        "description": "The data structure used for building the GiST",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "GiST",
        "normalized": "",
        "package": "GiST",
        "partial": "Gi ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#t:LeafEntry",
      "description": {
        "fct-descr": "\u003cp\u003eA leaf entry has a predicate and data\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "type",
        "fct-source": "src/Data-GiST-Types.html#LeafEntry",
        "fct-type": "type",
        "title": "LeafEntry"
      },
      "index": {
        "description": "leaf entry has predicate and data",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "LeafEntry",
        "normalized": "",
        "package": "GiST",
        "partial": "Leaf Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#t:NodeEntry",
      "description": {
        "fct-descr": "\u003cp\u003eA node entry has a predicate and a subtree\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "type",
        "fct-source": "src/Data-GiST-Types.html#NodeEntry",
        "fct-type": "type",
        "title": "NodeEntry"
      },
      "index": {
        "description": "node entry has predicate and subtree",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "NodeEntry",
        "normalized": "",
        "package": "GiST",
        "partial": "Node Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#t:Penalty",
      "description": {
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "type",
        "fct-source": "src/Data-GiST-Types.html#Penalty",
        "fct-type": "type",
        "title": "Penalty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "Penalty",
        "normalized": "",
        "package": "GiST",
        "partial": "Penalty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#t:Predicates",
      "description": {
        "fct-descr": "\u003cp\u003eThe predicate class that can be instanced by the user to create new types\n of balanced search trees\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "class",
        "fct-source": "src/Data-GiST-Types.html#Predicates",
        "fct-type": "class",
        "title": "Predicates"
      },
      "index": {
        "description": "The predicate class that can be instanced by the user to create new types of balanced search trees",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "Predicates",
        "normalized": "",
        "package": "GiST",
        "partial": "Predicates",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:LeafEntry",
      "description": {
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "LeafEntry (LeafEntry p a)",
        "fct-source": "src/Data-GiST-Types.html#Entry",
        "fct-type": "function",
        "title": "LeafEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "LeafEntry",
        "normalized": "",
        "package": "GiST",
        "partial": "Leaf Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:NodeEntry",
      "description": {
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "NodeEntry (NodeEntry p a)",
        "fct-source": "src/Data-GiST-Types.html#Entry",
        "fct-type": "function",
        "title": "NodeEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "NodeEntry",
        "normalized": "",
        "package": "GiST",
        "partial": "Node Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:consistent",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if the given entry is consistent with a given predicate\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "p a -\u003e Entry p a -\u003e Bool",
        "fct-source": "src/Data-GiST-Types.html#consistent",
        "fct-type": "method",
        "title": "consistent"
      },
      "index": {
        "description": "Checks if the given entry is consistent with given predicate",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "consistent",
        "normalized": "a b-\u003eEntry a b-\u003eBool",
        "package": "GiST",
        "partial": "",
        "signature": "p a-\u003eEntry p a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a leaf entry from the tree, rebalancing the tree if necessary. \n Rebalancing is done to satisfy the minimum and maximum fill factor\n of the tree (represented as an integer tuple)\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "LeafEntry p a -\u003e (Int, Int) -\u003e GiST p a -\u003e GiST p a",
        "fct-source": "src/Data-GiST-GiST.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Deletes leaf entry from the tree rebalancing the tree if necessary Rebalancing is done to satisfy the minimum and maximum fill factor of the tree represented as an integer tuple",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "delete",
        "normalized": "LeafEntry a b-\u003e(Int,Int)-\u003eGiST a b-\u003eGiST a b",
        "package": "GiST",
        "partial": "",
        "signature": "LeafEntry p a-\u003e(Int,Int)-\u003eGiST p a-\u003eGiST p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new empty GiST\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "GiST p a",
        "fct-source": "src/Data-GiST-GiST.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Create new empty GiST",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "empty",
        "normalized": "",
        "package": "GiST",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:entryPredicate",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the predicate of this entry\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "Entry p a -\u003e p a",
        "fct-source": "src/Data-GiST-Types.html#entryPredicate",
        "fct-type": "function",
        "title": "entryPredicate"
      },
      "index": {
        "description": "Returns the predicate of this entry",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "entryPredicate",
        "normalized": "Entry a b-\u003ea b",
        "package": "GiST",
        "partial": "Predicate",
        "signature": "Entry p a-\u003ep a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:getData",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all the data stored in a GiST\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "GiST p a -\u003e [a]",
        "fct-source": "src/Data-GiST-GiST.html#getData",
        "fct-type": "function",
        "title": "getData"
      },
      "index": {
        "description": "Returns all the data stored in GiST",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "getData",
        "normalized": "GiST a b-\u003e[b]",
        "package": "GiST",
        "partial": "Data",
        "signature": "GiST p a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts an entry into the tree, rebalancing the tree if necessary.\n Rebalancing is done to satisfy the minimum and maximum fill factor\n of the tree (represented as an integer tuple)\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "LeafEntry p a -\u003e (Int, Int) -\u003e GiST p a -\u003e GiST p a",
        "fct-source": "src/Data-GiST-GiST.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Inserts an entry into the tree rebalancing the tree if necessary Rebalancing is done to satisfy the minimum and maximum fill factor of the tree represented as an integer tuple",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "insert",
        "normalized": "LeafEntry a b-\u003e(Int,Int)-\u003eGiST a b-\u003eGiST a b",
        "package": "GiST",
        "partial": "",
        "signature": "LeafEntry p a-\u003e(Int,Int)-\u003eGiST p a-\u003eGiST p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:load",
      "description": {
        "fct-descr": "\u003cp\u003eLoads a GiST from file\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "FilePath -\u003e IO (GiST p a)",
        "fct-source": "src/Data-GiST-GiST.html#load",
        "fct-type": "function",
        "title": "load"
      },
      "index": {
        "description": "Loads GiST from file",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "load",
        "normalized": "FilePath-\u003eIO(GiST a b)",
        "package": "GiST",
        "partial": "",
        "signature": "FilePath-\u003eIO(GiST p a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:penalty",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates a numerical penalty for inserting the entry containing the first predicate \n into a subtree rooted at an entry containing the second predicate\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "p a -\u003e p a -\u003e Penalty",
        "fct-source": "src/Data-GiST-Types.html#penalty",
        "fct-type": "method",
        "title": "penalty"
      },
      "index": {
        "description": "Calculates numerical penalty for inserting the entry containing the first predicate into subtree rooted at an entry containing the second predicate",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "penalty",
        "normalized": "a b-\u003ea b-\u003ePenalty",
        "package": "GiST",
        "partial": "",
        "signature": "p a-\u003ep a-\u003ePenalty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:pickSplit",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of entries, returns two disjunct subsets that contain the entries in the list.\n Focus is on minimising the overlap between the splitted entries' predicates\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "[Entry p a] -\u003e ([Entry p a], [Entry p a])",
        "fct-source": "src/Data-GiST-Types.html#pickSplit",
        "fct-type": "method",
        "title": "pickSplit"
      },
      "index": {
        "description": "Given list of entries returns two disjunct subsets that contain the entries in the list Focus is on minimising the overlap between the splitted entries predicates",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "pickSplit",
        "normalized": "[Entry a b]-\u003e([Entry a b],[Entry a b])",
        "package": "GiST",
        "partial": "Split",
        "signature": "[Entry p a]-\u003e([Entry p a],[Entry p a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:save",
      "description": {
        "fct-descr": "\u003cp\u003eSaves the GiST to file\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "GiST p a -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Data-GiST-GiST.html#save",
        "fct-type": "function",
        "title": "save"
      },
      "index": {
        "description": "Saves the GiST to file",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "save",
        "normalized": "GiST a b-\u003eFilePath-\u003eIO()",
        "package": "GiST",
        "partial": "",
        "signature": "GiST p a-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003eSearches the GiST for leaf nodes that satisfy the given search predicate\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "p a -\u003e GiST p a -\u003e [a]",
        "fct-source": "src/Data-GiST-GiST.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "Searches the GiST for leaf nodes that satisfy the given search predicate",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "search",
        "normalized": "a b-\u003eGiST a b-\u003e[b]",
        "package": "GiST",
        "partial": "",
        "signature": "p a-\u003eGiST p a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of values in a GiST\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "GiST p a -\u003e Int",
        "fct-source": "src/Data-GiST-GiST.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Return the number of values in GiST",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "size",
        "normalized": "GiST a b-\u003eInt",
        "package": "GiST",
        "partial": "",
        "signature": "GiST p a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a predicate that is the union of all predicates of the given list of entries\n\u003c/p\u003e",
        "fct-module": "Data.GiST.GiST",
        "fct-package": "GiST",
        "fct-signature": "[p a] -\u003e p a",
        "fct-source": "src/Data-GiST-Types.html#union",
        "fct-type": "method",
        "title": "union"
      },
      "index": {
        "description": "Returns predicate that is the union of all predicates of the given list of entries",
        "hierarchy": "Data GiST GiST",
        "module": "Data.GiST.GiST",
        "name": "union",
        "normalized": "[a b]-\u003ea b",
        "package": "GiST",
        "partial": "",
        "signature": "[p a]-\u003ep a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-RTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of the R-Tree predicate. A containment predicate is a tuple of two points\nrepresenting a rectangle with the first tuple (minx,maxy) being the upper left corner of the rectangle\nand the second (maxx,miny) being the lower right corner of the rectangle, while the equality predicate \nis simply a 2D point (tuple of two integers).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.GiST.RTree",
        "fct-package": "GiST",
        "fct-signature": "module",
        "fct-source": "src/Data-GiST-RTree.html",
        "fct-type": "module",
        "title": "RTree"
      },
      "index": {
        "description": "simple implementation of the R-Tree predicate containment predicate is tuple of two points representing rectangle with the first tuple minx maxy being the upper left corner of the rectangle and the second maxx miny being the lower right corner of the rectangle while the equality predicate is simply point tuple of two integers",
        "hierarchy": "Data GiST RTree",
        "module": "Data.GiST.RTree",
        "name": "RTree",
        "normalized": "",
        "package": "GiST",
        "partial": "RTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-RTree.html#t:Predicate",
      "description": {
        "fct-module": "Data.GiST.RTree",
        "fct-package": "GiST",
        "fct-signature": "data",
        "fct-source": "src/Data-GiST-RTree.html#Predicate",
        "fct-type": "data",
        "title": "Predicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GiST RTree",
        "module": "Data.GiST.RTree",
        "name": "Predicate",
        "normalized": "",
        "package": "GiST",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-RTree.html#v:Contains",
      "description": {
        "fct-descr": "\u003cp\u003econtainment predicate (rectangle)\n\u003c/p\u003e",
        "fct-module": "Data.GiST.RTree",
        "fct-package": "GiST",
        "fct-signature": "Contains (a, a)",
        "fct-source": "src/Data-GiST-RTree.html#Predicate",
        "fct-type": "function",
        "title": "Contains"
      },
      "index": {
        "description": "containment predicate rectangle",
        "hierarchy": "Data GiST RTree",
        "module": "Data.GiST.RTree",
        "name": "Contains",
        "normalized": "Contains(a,a)",
        "package": "GiST",
        "partial": "Contains",
        "signature": "Contains(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-RTree.html#v:Equals",
      "description": {
        "fct-descr": "\u003cp\u003eequality predicate (2D point)\n\u003c/p\u003e",
        "fct-module": "Data.GiST.RTree",
        "fct-package": "GiST",
        "fct-signature": "Equals a",
        "fct-source": "src/Data-GiST-RTree.html#Predicate",
        "fct-type": "function",
        "title": "Equals"
      },
      "index": {
        "description": "equality predicate point",
        "hierarchy": "Data GiST RTree",
        "module": "Data.GiST.RTree",
        "name": "Equals",
        "normalized": "",
        "package": "GiST",
        "partial": "Equals",
        "signature": ""
      }
    }
  }
]