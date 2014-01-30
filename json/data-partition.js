[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-partition/docs/Data-Partition.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisjoint set data structure -- \u003ccode\u003ePartition a\u003c/code\u003e maintains a collection of\n disjoint sets of type \u003ccode\u003ea\u003c/code\u003e, with the ability to find which set a particular\n item belongs to and the ability to merge any two such sets into one.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Partition",
        "fct-package": "data-partition",
        "fct-signature": "module",
        "fct-source": "src/Data-Partition.html",
        "fct-type": "module",
        "title": "Partition"
      },
      "index": {
        "description": "Disjoint set data structure Partition maintains collection of disjoint sets of type with the ability to find which set particular item belongs to and the ability to merge any two such sets into one",
        "hierarchy": "Data Partition",
        "module": "Data.Partition",
        "name": "Partition",
        "normalized": "",
        "package": "data-partition",
        "partial": "Partition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-partition/docs/Data-Partition.html#t:Partition",
      "description": {
        "fct-descr": "\u003cp\u003eA Partition of \u003ccode\u003ea\u003c/code\u003e: represents a collection of disjoint sets of \u003ccode\u003ea\u003c/code\u003e whose\n union includes every element of \u003ccode\u003ea\u003c/code\u003e.  Semantics: \u003ccode\u003e[[Partition a]] = P(P(a))\u003c/code\u003e\n where \u003ccode\u003eP\u003c/code\u003e is the power set operation.\n\u003c/p\u003e",
        "fct-module": "Data.Partition",
        "fct-package": "data-partition",
        "fct-signature": "data",
        "fct-source": "src/Data-Partition.html#Partition",
        "fct-type": "data",
        "title": "Partition"
      },
      "index": {
        "description": "Partition of represents collection of disjoint sets of whose union includes every element of Semantics Partition where is the power set operation",
        "hierarchy": "Data Partition",
        "module": "Data.Partition",
        "name": "Partition",
        "normalized": "",
        "package": "data-partition",
        "partial": "Partition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-partition/docs/Data-Partition.html#v:discrete",
      "description": {
        "fct-descr": "\u003cp\u003eA partition in which every element of \u003ccode\u003ea\u003c/code\u003e is in its own set.  Semantics:\n \u003ccode\u003e[[discrete]] = { { x } | x in a }\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Partition",
        "fct-package": "data-partition",
        "fct-signature": "Partition a",
        "fct-source": "src/Data-Partition.html#discrete",
        "fct-type": "function",
        "title": "discrete"
      },
      "index": {
        "description": "partition in which every element of is in its own set Semantics discrete in",
        "hierarchy": "Data Partition",
        "module": "Data.Partition",
        "name": "discrete",
        "normalized": "",
        "package": "data-partition",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-partition/docs/Data-Partition.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003ediscrete\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Partition",
        "fct-package": "data-partition",
        "fct-signature": "Partition a",
        "fct-source": "src/Data-Partition.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Synonym for discrete",
        "hierarchy": "Data Partition",
        "module": "Data.Partition",
        "name": "empty",
        "normalized": "",
        "package": "data-partition",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-partition/docs/Data-Partition.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efind p x\u003c/code\u003e finds the set that the element \u003ccode\u003ex\u003c/code\u003e is associated with.  Semantics: \n \u003ccode\u003e[[find p x]] = the unique s in p such that x in s\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Partition",
        "fct-package": "data-partition",
        "fct-signature": "Partition a -\u003e a -\u003e Set a",
        "fct-source": "src/Data-Partition.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "find finds the set that the element is associated with Semantics find the unique in such that in",
        "hierarchy": "Data Partition",
        "module": "Data.Partition",
        "name": "find",
        "normalized": "Partition a-\u003ea-\u003eSet a",
        "package": "data-partition",
        "partial": "",
        "signature": "Partition a-\u003ea-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-partition/docs/Data-Partition.html#v:fromSets",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list of disjoint sets and constructs a partition containing those sets,\n with every remaining element being given its own set.\n\u003c/p\u003e",
        "fct-module": "Data.Partition",
        "fct-package": "data-partition",
        "fct-signature": "[Set a] -\u003e Partition a",
        "fct-source": "src/Data-Partition.html#fromSets",
        "fct-type": "function",
        "title": "fromSets"
      },
      "index": {
        "description": "Takes list of disjoint sets and constructs partition containing those sets with every remaining element being given its own set",
        "hierarchy": "Data Partition",
        "module": "Data.Partition",
        "name": "fromSets",
        "normalized": "[Set a]-\u003ePartition a",
        "package": "data-partition",
        "partial": "Sets",
        "signature": "[Set a]-\u003ePartition a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-partition/docs/Data-Partition.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ejoin x y\u003c/code\u003e merges the two sets containing \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e into a single set.  Semantics:\n \u003ccode\u003e[[join x y p]] = (p `minus` find x `minus` find y) `union` { find x `union` find y }\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Partition",
        "fct-package": "data-partition",
        "fct-signature": "a -\u003e a -\u003e Partition a -\u003e Partition a",
        "fct-source": "src/Data-Partition.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "join merges the two sets containing and into single set Semantics join minus find minus find union find union find",
        "hierarchy": "Data Partition",
        "module": "Data.Partition",
        "name": "join",
        "normalized": "a-\u003ea-\u003ePartition a-\u003ePartition a",
        "package": "data-partition",
        "partial": "",
        "signature": "a-\u003ea-\u003ePartition a-\u003ePartition a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-partition/docs/Data-Partition.html#v:nontrivialSets",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all nontrivial sets (sets with more than one element) in the \n partition.\n\u003c/p\u003e",
        "fct-module": "Data.Partition",
        "fct-package": "data-partition",
        "fct-signature": "Partition a -\u003e [Set a]",
        "fct-source": "src/Data-Partition.html#nontrivialSets",
        "fct-type": "function",
        "title": "nontrivialSets"
      },
      "index": {
        "description": "Returns list of all nontrivial sets sets with more than one element in the partition",
        "hierarchy": "Data Partition",
        "module": "Data.Partition",
        "name": "nontrivialSets",
        "normalized": "Partition a-\u003e[Set a]",
        "package": "data-partition",
        "partial": "Sets",
        "signature": "Partition a-\u003e[Set a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-partition/docs/Data-Partition.html#v:rep",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erep p x\u003c/code\u003e finds the minimum element in the set containing \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Partition",
        "fct-package": "data-partition",
        "fct-signature": "Partition a -\u003e a -\u003e a",
        "fct-source": "src/Data-Partition.html#rep",
        "fct-type": "function",
        "title": "rep"
      },
      "index": {
        "description": "rep finds the minimum element in the set containing",
        "hierarchy": "Data Partition",
        "module": "Data.Partition",
        "name": "rep",
        "normalized": "Partition a-\u003ea-\u003ea",
        "package": "data-partition",
        "partial": "",
        "signature": "Partition a-\u003ea-\u003ea"
      }
    }
  }
]