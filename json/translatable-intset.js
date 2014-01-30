[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of integer sets with a constant time \u003ccode\u003e\u003ca\u003etranslate\u003c/a\u003e\u003c/code\u003e\n operation, where \u003ccode\u003e\u003ca\u003etranslate\u003c/a\u003e\u003c/code\u003e is defined to be\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003etranslate\u003c/a\u003e\u003c/code\u003e x s = \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e (+x) s\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.IntSet.Translatable (IntSet)\n  import qualified Data.IntSet.Translatable as IntSet\n\u003c/pre\u003e\u003cp\u003eThis implementation is based on \u003cem\u003eFinger-Trees\u003c/em\u003e storing differences\n of consecutive entries of the ordered sequence of set elements.\n With this representation, a translation of all elements can be\n realized by changing only the leftmost element of the Finger-Tree\n which is a constant time operation. Together with caching of the\n accumulated differences most set operations can be implemented\n efficiently too.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "module",
        "fct-source": "src/Data-IntSet-Translatable.html",
        "fct-type": "module",
        "title": "Translatable"
      },
      "index": {
        "description": "An implementation of integer sets with constant time translate operation where translate is defined to be translate map Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.IntSet.Translatable IntSet import qualified Data.IntSet.Translatable as IntSet This implementation is based on Finger-Trees storing differences of consecutive entries of the ordered sequence of set elements With this representation translation of all elements can be realized by changing only the leftmost element of the Finger-Tree which is constant time operation Together with caching of the accumulated differences most set operations can be implemented efficiently too",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "Translatable",
        "normalized": "",
        "package": "translatable-intset",
        "partial": "Translatable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#t:IntSet",
      "description": {
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "data",
        "fct-source": "src/Data-IntSet-Translatable.html#IntSet",
        "fct-type": "data",
        "title": "IntSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "IntSet",
        "normalized": "",
        "package": "translatable-intset",
        "partial": "Int Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(???)\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "See difference",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "(\\\\) \\\\",
        "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "",
        "signature": "IntSet-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(n))\u003c/em\u003e. Delete a value in the set. Returns the\n original set when the value was not present.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "Int -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Delete value in the set Returns the original set when the value was not present",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "delete",
        "normalized": "Int-\u003eIntSet-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "",
        "signature": "Int-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:deleteFindMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Delete and find the maximal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMax set = (findMax set, deleteMax set)\n\u003c/pre\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e (Int, IntSet)",
        "fct-source": "src/Data-IntSet-Translatable.html#deleteFindMax",
        "fct-type": "function",
        "title": "deleteFindMax"
      },
      "index": {
        "description": "Delete and find the maximal element deleteFindMax set findMax set deleteMax set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "deleteFindMax",
        "normalized": "IntSet-\u003e(Int,IntSet)",
        "package": "translatable-intset",
        "partial": "Find Max",
        "signature": "IntSet-\u003e(Int,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:deleteFindMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Delete and find the minimal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMin set = (findMin set, deleteMin set)\n\u003c/pre\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e (Int, IntSet)",
        "fct-source": "src/Data-IntSet-Translatable.html#deleteFindMin",
        "fct-type": "function",
        "title": "deleteFindMin"
      },
      "index": {
        "description": "Delete and find the minimal element deleteFindMin set findMin set deleteMin set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "deleteFindMin",
        "normalized": "IntSet-\u003e(Int,IntSet)",
        "package": "translatable-intset",
        "partial": "Find Min",
        "signature": "IntSet-\u003e(Int,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:deleteMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Delete the maximal element.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "Delete the maximal element",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "deleteMax",
        "normalized": "IntSet-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "Max",
        "signature": "IntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Delete the minimal element.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "Delete the minimal element",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "deleteMin",
        "normalized": "IntSet-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "Min",
        "signature": "IntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(???)\u003c/em\u003e. Difference between two sets.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "Difference between two sets",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "difference",
        "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "",
        "signature": "IntSet-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The elements of a set. (For sets, this is equivalent to toList)\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e [Int]",
        "fct-source": "src/Data-IntSet-Translatable.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "The elements of set For sets this is equivalent to toList",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "elems",
        "normalized": "IntSet-\u003e[Int]",
        "package": "translatable-intset",
        "partial": "",
        "signature": "IntSet-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty set.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "empty",
        "normalized": "",
        "package": "translatable-intset",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all elements that satisfy some predicate.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "(Int -\u003e Bool) -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter all elements that satisfy some predicate",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "filter",
        "normalized": "(Int-\u003eBool)-\u003eIntSet-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "",
        "signature": "(Int-\u003eBool)-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The maximal element of a set.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e Int",
        "fct-source": "src/Data-IntSet-Translatable.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "The maximal element of set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "findMax",
        "normalized": "IntSet-\u003eInt",
        "package": "translatable-intset",
        "partial": "Max",
        "signature": "IntSet-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The minimal element of the set.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e Int",
        "fct-source": "src/Data-IntSet-Translatable.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "The minimal element of the set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "findMin",
        "normalized": "IntSet-\u003eInt",
        "package": "translatable-intset",
        "partial": "Min",
        "signature": "IntSet-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold over the elements of a set in an unspecified order.\n\u003c/p\u003e\u003cpre\u003e sum set   == fold (+) 0 set\n elems set == fold (:) [] set\n\u003c/pre\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "(Int -\u003e b -\u003e b) -\u003e b -\u003e IntSet -\u003e b",
        "fct-source": "src/Data-IntSet-Translatable.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Fold over the elements of set in an unspecified order sum set fold set elems set fold set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "fold",
        "normalized": "(Int-\u003ea-\u003ea)-\u003ea-\u003eIntSet-\u003ea",
        "package": "translatable-intset",
        "partial": "",
        "signature": "(Int-\u003eb-\u003eb)-\u003eb-\u003eIntSet-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a set from an ascending list of elements.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "[Int] -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Build set from an ascending list of elements The precondition input list is ascending is not checked",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "fromAscList",
        "normalized": "[Int]-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "Asc List",
        "signature": "[Int]-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:fromDistinctAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a set from an ascending list of distinct elements.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "[Int] -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#fromDistinctAscList",
        "fct-type": "function",
        "title": "fromDistinctAscList"
      },
      "index": {
        "description": "Build set from an ascending list of distinct elements The precondition input list is strictly ascending is not checked",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "fromDistinctAscList",
        "normalized": "[Int]-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "Distinct Asc List",
        "signature": "[Int]-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log(n))\u003c/em\u003e. Create a set from a list of integers.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "[Int] -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "log Create set from list of integers",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "fromList",
        "normalized": "[Int]-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "List",
        "signature": "[Int]-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(n))\u003c/em\u003e. Add a value to the set.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "Int -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Add value to the set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "insert",
        "normalized": "Int-\u003eIntSet-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "",
        "signature": "Int-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(???)\u003c/em\u003e. The intersection of two sets.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "The intersection of two sets",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "intersection",
        "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "",
        "signature": "IntSet-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log(n))\u003c/em\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e is the set obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt's worth noting that the size of the result may be smaller if,\n for some \u003ccode\u003e(x,y)\u003c/code\u003e, \u003ccode\u003ex /= y && f x == f y\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "(Int -\u003e Int) -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "log map is the set obtained by applying to each element of It worth noting that the size of the result may be smaller if for some",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "map",
        "normalized": "(Int-\u003eInt)-\u003eIntSet-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "",
        "signature": "(Int-\u003eInt)-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:maxView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Retrieves the maximal key of the set, and the set\n stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty set.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e Maybe (Int, IntSet)",
        "fct-source": "src/Data-IntSet-Translatable.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "Retrieves the maximal key of the set and the set stripped of that element or Nothing if passed an empty set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "maxView",
        "normalized": "IntSet-\u003eMaybe(Int,IntSet)",
        "package": "translatable-intset",
        "partial": "View",
        "signature": "IntSet-\u003eMaybe(Int,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(n))\u003c/em\u003e. Is the value a member of the set?\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "Int -\u003e IntSet -\u003e Bool",
        "fct-source": "src/Data-IntSet-Translatable.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "log Is the value member of the set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "member",
        "normalized": "Int-\u003eIntSet-\u003eBool",
        "package": "translatable-intset",
        "partial": "",
        "signature": "Int-\u003eIntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Retrieves the minimal key of the set, and the set\n stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty set.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e Maybe (Int, IntSet)",
        "fct-source": "src/Data-IntSet-Translatable.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "Retrieves the minimal key of the set and the set stripped of that element or Nothing if passed an empty set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "minView",
        "normalized": "IntSet-\u003eMaybe(Int,IntSet)",
        "package": "translatable-intset",
        "partial": "View",
        "signature": "IntSet-\u003eMaybe(Int,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(n)\u003c/em\u003e. Is the element not in the set?\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "Int -\u003e IntSet -\u003e Bool",
        "fct-source": "src/Data-IntSet-Translatable.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "log Is the element not in the set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "notMember",
        "normalized": "Int-\u003eIntSet-\u003eBool",
        "package": "translatable-intset",
        "partial": "Member",
        "signature": "Int-\u003eIntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the set empty?\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e Bool",
        "fct-source": "src/Data-IntSet-Translatable.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the set empty",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "null",
        "normalized": "IntSet-\u003eBool",
        "package": "translatable-intset",
        "partial": "",
        "signature": "IntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the set into two sets, one with all elements that satisfy\n the predicate and one with all elements that don't satisfy the predicate.\n See also \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "(Int -\u003e Bool) -\u003e IntSet -\u003e (IntSet, IntSet)",
        "fct-source": "src/Data-IntSet-Translatable.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Partition the set into two sets one with all elements that satisfy the predicate and one with all elements that don satisfy the predicate See also split",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "partition",
        "normalized": "(Int-\u003eBool)-\u003eIntSet-\u003e(IntSet,IntSet)",
        "package": "translatable-intset",
        "partial": "",
        "signature": "(Int-\u003eBool)-\u003eIntSet-\u003e(IntSet,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A set of one element.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "Int -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "set of one element",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "singleton",
        "normalized": "Int-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "",
        "signature": "Int-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Cardinality of the set.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e Int",
        "fct-source": "src/Data-IntSet-Translatable.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Cardinality of the set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "size",
        "normalized": "IntSet-\u003eInt",
        "package": "translatable-intset",
        "partial": "",
        "signature": "IntSet-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(min(i,n-i)))\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e x set\u003c/code\u003e) is a pair \u003ccode\u003e(set1,set2)\u003c/code\u003e\n where \u003ccode\u003eset1\u003c/code\u003e comprises the elements of \u003ccode\u003eset\u003c/code\u003e less than \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003eset2\u003c/code\u003e\n comprises the elements of \u003ccode\u003eset\u003c/code\u003e greater than \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e split 3 (fromList [1..5]) == (fromList [1,2], fromList [4,5])\n\u003c/pre\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "Int -\u003e IntSet -\u003e (IntSet, IntSet)",
        "fct-source": "src/Data-IntSet-Translatable.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "log min n-i The expression split set is pair set1 set2 where set1 comprises the elements of set less than and set2 comprises the elements of set greater than split fromList fromList fromList",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "split",
        "normalized": "Int-\u003eIntSet-\u003e(IntSet,IntSet)",
        "package": "translatable-intset",
        "partial": "",
        "signature": "Int-\u003eIntSet-\u003e(IntSet,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:splitMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(min(i,n-i)))\u003c/em\u003e. Performs a \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e but also returns whether the pivot\n element was found in the original set.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "Int -\u003e IntSet -\u003e (IntSet, Bool, IntSet)",
        "fct-source": "src/Data-IntSet-Translatable.html#splitMember",
        "fct-type": "function",
        "title": "splitMember"
      },
      "index": {
        "description": "log min n-i Performs split but also returns whether the pivot element was found in the original set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "splitMember",
        "normalized": "Int-\u003eIntSet-\u003e(IntSet,Bool,IntSet)",
        "package": "translatable-intset",
        "partial": "Member",
        "signature": "Int-\u003eIntSet-\u003e(IntSet,Bool,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the set to an ascending list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e [Int]",
        "fct-source": "src/Data-IntSet-Translatable.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Convert the set to an ascending list of elements",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "toAscList",
        "normalized": "IntSet-\u003e[Int]",
        "package": "translatable-intset",
        "partial": "Asc List",
        "signature": "IntSet-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the set to a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e [Int]",
        "fct-source": "src/Data-IntSet-Translatable.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert the set to list of elements",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "toList",
        "normalized": "IntSet-\u003e[Int]",
        "package": "translatable-intset",
        "partial": "List",
        "signature": "IntSet-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Add a constant value to all elements of the set.\n\u003c/p\u003e\u003cpre\u003e translate x s == map (+x) s\n\u003c/pre\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "Int -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#translate",
        "fct-type": "function",
        "title": "translate"
      },
      "index": {
        "description": "Add constant value to all elements of the set translate map",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "translate",
        "normalized": "Int-\u003eIntSet-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "",
        "signature": "Int-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(m log(n \u003c/em\u003e/\u003cem\u003e m))\u003c/em\u003e where \u003cem\u003em\u003c=n\u003c/em\u003e. The union  of two sets. \u003cem\u003eO(log m)\u003c/em\u003e\n if all elements of one set are larger than all elements of the\n other set.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "IntSet -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "log where The union of two sets log if all elements of one set are larger than all elements of the other set",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "union",
        "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "",
        "signature": "IntSet-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/translatable-intset/docs/Data-IntSet-Translatable.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of sets.\n\u003c/p\u003e",
        "fct-module": "Data.IntSet.Translatable",
        "fct-package": "translatable-intset",
        "fct-signature": "[IntSet] -\u003e IntSet",
        "fct-source": "src/Data-IntSet-Translatable.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "The union of list of sets",
        "hierarchy": "Data IntSet Translatable",
        "module": "Data.IntSet.Translatable",
        "name": "unions",
        "normalized": "[IntSet]-\u003eIntSet",
        "package": "translatable-intset",
        "partial": "",
        "signature": "[IntSet]-\u003eIntSet"
      }
    }
  }
]