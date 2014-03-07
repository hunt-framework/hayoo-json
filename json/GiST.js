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
        "word": "GiST"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of the B+ tree predicate. A containment predicate is a tuple of two integers\nrepresenting an open interval, while the equality predicate is simply an interger value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.GiST.BTree",
          "name": "BTree",
          "package": "GiST",
          "source": "src/Data-GiST-BTree.html",
          "type": "module"
        },
        "index": {
          "description": "simple implementation of the tree predicate containment predicate is tuple of two integers representing an open interval while the equality predicate is simply an interger value",
          "hierarchy": "Data GiST BTree",
          "module": "Data.GiST.BTree",
          "name": "BTree",
          "package": "GiST",
          "partial": "BTree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-BTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GiST.BTree",
          "name": "Predicate",
          "package": "GiST",
          "source": "src/Data-GiST-BTree.html#Predicate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GiST BTree",
          "module": "Data.GiST.BTree",
          "name": "Predicate",
          "package": "GiST",
          "partial": "Predicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-BTree.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtainment predicate (interval)\n\u003c/p\u003e",
          "module": "Data.GiST.BTree",
          "name": "Contains",
          "package": "GiST",
          "signature": "Contains (a, a)",
          "source": "src/Data-GiST-BTree.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "containment predicate interval",
          "hierarchy": "Data GiST BTree",
          "module": "Data.GiST.BTree",
          "name": "Contains",
          "normalized": "Contains(a,a)",
          "package": "GiST",
          "partial": "Contains",
          "signature": "Contains(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-BTree.html#v:Contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequality predicate (integer value)\n\u003c/p\u003e",
          "module": "Data.GiST.BTree",
          "name": "Equals",
          "package": "GiST",
          "signature": "Equals a",
          "source": "src/Data-GiST-BTree.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "equality predicate integer value",
          "hierarchy": "Data GiST BTree",
          "module": "Data.GiST.BTree",
          "name": "Equals",
          "package": "GiST",
          "partial": "Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-BTree.html#v:Equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests if a value is between two others\n\u003c/p\u003e",
          "module": "Data.GiST.BTree",
          "name": "between",
          "package": "GiST",
          "signature": "a -\u003e a -\u003e a -\u003e Bool",
          "source": "src/Data-GiST-BTree.html#between",
          "type": "function"
        },
        "index": {
          "description": "Tests if value is between two others",
          "hierarchy": "Data GiST BTree",
          "module": "Data.GiST.BTree",
          "name": "between",
          "normalized": "a-\u003ea-\u003ea-\u003eBool",
          "package": "GiST",
          "signature": "a-\u003ea-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-BTree.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe implementation of the basic GiST operations. The behaviour\nof the operations is largely influenced by the predicate used, allowing the GiST to behave\nlike a different type of balanced search tree for a different predicate. Although the operations\nare influenced by the predicate, it is always ensured that the tree stays balanced after an \ninsertion or deletion, regardless of the predicate used. It is also recommended that the minimum\nand maximum fill factor for the tree are constant throughout the whole program to ensure optimal\nbehaviour\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.GiST.GiST",
          "name": "GiST",
          "package": "GiST",
          "source": "src/Data-GiST-GiST.html",
          "type": "module"
        },
        "index": {
          "description": "The implementation of the basic GiST operations The behaviour of the operations is largely influenced by the predicate used allowing the GiST to behave like different type of balanced search tree for different predicate Although the operations are influenced by the predicate it is always ensured that the tree stays balanced after an insertion or deletion regardless of the predicate used It is also recommended that the minimum and maximum fill factor for the tree are constant throughout the whole program to ensure optimal behaviour",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "GiST",
          "package": "GiST",
          "partial": "Gi ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA general entry type for the gist\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "Entry",
          "package": "GiST",
          "source": "src/Data-GiST-Types.html#Entry",
          "type": "data"
        },
        "index": {
          "description": "general entry type for the gist",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "Entry",
          "package": "GiST",
          "partial": "Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data structure used for building the GiST\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "GiST",
          "package": "GiST",
          "source": "src/Data-GiST-Types.html#GiST",
          "type": "data"
        },
        "index": {
          "description": "The data structure used for building the GiST",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "GiST",
          "package": "GiST",
          "partial": "Gi ST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#t:GiST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA leaf entry has a predicate and data\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "LeafEntry",
          "package": "GiST",
          "source": "src/Data-GiST-Types.html#LeafEntry",
          "type": "type"
        },
        "index": {
          "description": "leaf entry has predicate and data",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "LeafEntry",
          "package": "GiST",
          "partial": "Leaf Entry",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#t:LeafEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA node entry has a predicate and a subtree\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "NodeEntry",
          "package": "GiST",
          "source": "src/Data-GiST-Types.html#NodeEntry",
          "type": "type"
        },
        "index": {
          "description": "node entry has predicate and subtree",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "NodeEntry",
          "package": "GiST",
          "partial": "Node Entry",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#t:NodeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GiST.GiST",
          "name": "Penalty",
          "package": "GiST",
          "source": "src/Data-GiST-Types.html#Penalty",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "Penalty",
          "package": "GiST",
          "partial": "Penalty",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#t:Penalty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe predicate class that can be instanced by the user to create new types\n of balanced search trees\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "Predicates",
          "package": "GiST",
          "source": "src/Data-GiST-Types.html#Predicates",
          "type": "class"
        },
        "index": {
          "description": "The predicate class that can be instanced by the user to create new types of balanced search trees",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "Predicates",
          "package": "GiST",
          "partial": "Predicates",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#t:Predicates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GiST.GiST",
          "name": "LeafEntry",
          "package": "GiST",
          "signature": "LeafEntry (LeafEntry p a)",
          "source": "src/Data-GiST-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "LeafEntry",
          "package": "GiST",
          "partial": "Leaf Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:LeafEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GiST.GiST",
          "name": "NodeEntry",
          "package": "GiST",
          "signature": "NodeEntry (NodeEntry p a)",
          "source": "src/Data-GiST-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "NodeEntry",
          "package": "GiST",
          "partial": "Node Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:NodeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the given entry is consistent with a given predicate\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "consistent",
          "package": "GiST",
          "signature": "p a -\u003e Entry p a -\u003e Bool",
          "source": "src/Data-GiST-Types.html#consistent",
          "type": "method"
        },
        "index": {
          "description": "Checks if the given entry is consistent with given predicate",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "consistent",
          "normalized": "a b-\u003eEntry a b-\u003eBool",
          "package": "GiST",
          "signature": "p a-\u003eEntry p a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:consistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes a leaf entry from the tree, rebalancing the tree if necessary. \n Rebalancing is done to satisfy the minimum and maximum fill factor\n of the tree (represented as an integer tuple)\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "delete",
          "package": "GiST",
          "signature": "LeafEntry p a -\u003e (Int, Int) -\u003e GiST p a -\u003e GiST p a",
          "source": "src/Data-GiST-GiST.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Deletes leaf entry from the tree rebalancing the tree if necessary Rebalancing is done to satisfy the minimum and maximum fill factor of the tree represented as an integer tuple",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "delete",
          "normalized": "LeafEntry a b-\u003e(Int,Int)-\u003eGiST a b-\u003eGiST a b",
          "package": "GiST",
          "signature": "LeafEntry p a-\u003e(Int,Int)-\u003eGiST p a-\u003eGiST p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new empty GiST\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "empty",
          "package": "GiST",
          "signature": "GiST p a",
          "source": "src/Data-GiST-GiST.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Create new empty GiST",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "empty",
          "package": "GiST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the predicate of this entry\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "entryPredicate",
          "package": "GiST",
          "signature": "Entry p a -\u003e p a",
          "source": "src/Data-GiST-Types.html#entryPredicate",
          "type": "function"
        },
        "index": {
          "description": "Returns the predicate of this entry",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "entryPredicate",
          "normalized": "Entry a b-\u003ea b",
          "package": "GiST",
          "partial": "Predicate",
          "signature": "Entry p a-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:entryPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all the data stored in a GiST\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "getData",
          "package": "GiST",
          "signature": "GiST p a -\u003e [a]",
          "source": "src/Data-GiST-GiST.html#getData",
          "type": "function"
        },
        "index": {
          "description": "Returns all the data stored in GiST",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "getData",
          "normalized": "GiST a b-\u003e[b]",
          "package": "GiST",
          "partial": "Data",
          "signature": "GiST p a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:getData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts an entry into the tree, rebalancing the tree if necessary.\n Rebalancing is done to satisfy the minimum and maximum fill factor\n of the tree (represented as an integer tuple)\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "insert",
          "package": "GiST",
          "signature": "LeafEntry p a -\u003e (Int, Int) -\u003e GiST p a -\u003e GiST p a",
          "source": "src/Data-GiST-GiST.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts an entry into the tree rebalancing the tree if necessary Rebalancing is done to satisfy the minimum and maximum fill factor of the tree represented as an integer tuple",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "insert",
          "normalized": "LeafEntry a b-\u003e(Int,Int)-\u003eGiST a b-\u003eGiST a b",
          "package": "GiST",
          "signature": "LeafEntry p a-\u003e(Int,Int)-\u003eGiST p a-\u003eGiST p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads a GiST from file\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "load",
          "package": "GiST",
          "signature": "FilePath -\u003e IO (GiST p a)",
          "source": "src/Data-GiST-GiST.html#load",
          "type": "function"
        },
        "index": {
          "description": "Loads GiST from file",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "load",
          "normalized": "FilePath-\u003eIO(GiST a b)",
          "package": "GiST",
          "signature": "FilePath-\u003eIO(GiST p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates a numerical penalty for inserting the entry containing the first predicate \n into a subtree rooted at an entry containing the second predicate\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "penalty",
          "package": "GiST",
          "signature": "p a -\u003e p a -\u003e Penalty",
          "source": "src/Data-GiST-Types.html#penalty",
          "type": "method"
        },
        "index": {
          "description": "Calculates numerical penalty for inserting the entry containing the first predicate into subtree rooted at an entry containing the second predicate",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "penalty",
          "normalized": "a b-\u003ea b-\u003ePenalty",
          "package": "GiST",
          "signature": "p a-\u003ep a-\u003ePenalty",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:penalty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of entries, returns two disjunct subsets that contain the entries in the list.\n Focus is on minimising the overlap between the splitted entries' predicates\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "pickSplit",
          "package": "GiST",
          "signature": "[Entry p a] -\u003e ([Entry p a], [Entry p a])",
          "source": "src/Data-GiST-Types.html#pickSplit",
          "type": "method"
        },
        "index": {
          "description": "Given list of entries returns two disjunct subsets that contain the entries in the list Focus is on minimising the overlap between the splitted entries predicates",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "pickSplit",
          "normalized": "[Entry a b]-\u003e([Entry a b],[Entry a b])",
          "package": "GiST",
          "partial": "Split",
          "signature": "[Entry p a]-\u003e([Entry p a],[Entry p a])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:pickSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaves the GiST to file\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "save",
          "package": "GiST",
          "signature": "GiST p a -\u003e FilePath -\u003e IO ()",
          "source": "src/Data-GiST-GiST.html#save",
          "type": "function"
        },
        "index": {
          "description": "Saves the GiST to file",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "save",
          "normalized": "GiST a b-\u003eFilePath-\u003eIO()",
          "package": "GiST",
          "signature": "GiST p a-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches the GiST for leaf nodes that satisfy the given search predicate\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "search",
          "package": "GiST",
          "signature": "p a -\u003e GiST p a -\u003e [a]",
          "source": "src/Data-GiST-GiST.html#search",
          "type": "function"
        },
        "index": {
          "description": "Searches the GiST for leaf nodes that satisfy the given search predicate",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "search",
          "normalized": "a b-\u003eGiST a b-\u003e[b]",
          "package": "GiST",
          "signature": "p a-\u003eGiST p a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of values in a GiST\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "size",
          "package": "GiST",
          "signature": "GiST p a -\u003e Int",
          "source": "src/Data-GiST-GiST.html#size",
          "type": "function"
        },
        "index": {
          "description": "Return the number of values in GiST",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "size",
          "normalized": "GiST a b-\u003eInt",
          "package": "GiST",
          "signature": "GiST p a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a predicate that is the union of all predicates of the given list of entries\n\u003c/p\u003e",
          "module": "Data.GiST.GiST",
          "name": "union",
          "package": "GiST",
          "signature": "[p a] -\u003e p a",
          "source": "src/Data-GiST-Types.html#union",
          "type": "method"
        },
        "index": {
          "description": "Returns predicate that is the union of all predicates of the given list of entries",
          "hierarchy": "Data GiST GiST",
          "module": "Data.GiST.GiST",
          "name": "union",
          "normalized": "[a b]-\u003ea b",
          "package": "GiST",
          "signature": "[p a]-\u003ep a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-GiST.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of the R-Tree predicate. A containment predicate is a tuple of two points\nrepresenting a rectangle with the first tuple (minx,maxy) being the upper left corner of the rectangle\nand the second (maxx,miny) being the lower right corner of the rectangle, while the equality predicate \nis simply a 2D point (tuple of two integers).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.GiST.RTree",
          "name": "RTree",
          "package": "GiST",
          "source": "src/Data-GiST-RTree.html",
          "type": "module"
        },
        "index": {
          "description": "simple implementation of the R-Tree predicate containment predicate is tuple of two points representing rectangle with the first tuple minx maxy being the upper left corner of the rectangle and the second maxx miny being the lower right corner of the rectangle while the equality predicate is simply point tuple of two integers",
          "hierarchy": "Data GiST RTree",
          "module": "Data.GiST.RTree",
          "name": "RTree",
          "package": "GiST",
          "partial": "RTree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-RTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GiST.RTree",
          "name": "Predicate",
          "package": "GiST",
          "source": "src/Data-GiST-RTree.html#Predicate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GiST RTree",
          "module": "Data.GiST.RTree",
          "name": "Predicate",
          "package": "GiST",
          "partial": "Predicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-RTree.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtainment predicate (rectangle)\n\u003c/p\u003e",
          "module": "Data.GiST.RTree",
          "name": "Contains",
          "package": "GiST",
          "signature": "Contains (a, a)",
          "source": "src/Data-GiST-RTree.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "containment predicate rectangle",
          "hierarchy": "Data GiST RTree",
          "module": "Data.GiST.RTree",
          "name": "Contains",
          "normalized": "Contains(a,a)",
          "package": "GiST",
          "partial": "Contains",
          "signature": "Contains(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-RTree.html#v:Contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequality predicate (2D point)\n\u003c/p\u003e",
          "module": "Data.GiST.RTree",
          "name": "Equals",
          "package": "GiST",
          "signature": "Equals a",
          "source": "src/Data-GiST-RTree.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "equality predicate point",
          "hierarchy": "Data GiST RTree",
          "module": "Data.GiST.RTree",
          "name": "Equals",
          "package": "GiST",
          "partial": "Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GiST/docs/Data-GiST-RTree.html#v:Equals"
      }
    }
  ]
]