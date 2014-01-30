[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-ByteString.html#",
      "description": {
        "fct-module": "Data.Interned.ByteString",
        "fct-package": "intern",
        "fct-signature": "module",
        "fct-source": "src/Data-Interned-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned ByteString",
        "module": "Data.Interned.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "intern",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-ByteString.html#t:InternedByteString",
      "description": {
        "fct-module": "Data.Interned.ByteString",
        "fct-package": "intern",
        "fct-signature": "data",
        "fct-source": "src/Data-Interned-Internal-ByteString.html#InternedByteString",
        "fct-type": "data",
        "title": "InternedByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned ByteString",
        "module": "Data.Interned.ByteString",
        "name": "InternedByteString",
        "normalized": "",
        "package": "intern",
        "partial": "Interned Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of integer sets.\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.IntSet (IntSet)\n  import qualified Data.IntSet as IntSet\n\u003c/pre\u003e\u003cp\u003eThe implementation is based on \u003cem\u003ebig-endian patricia trees\u003c/em\u003e.  This data\n structure performs especially well on binary operations like \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e.  However, my benchmarks show that it is also\n (much) faster on insertions and deletions when compared to a generic\n size-balanced set implementation (see \u003ca\u003eData.Set\u003c/a\u003e).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Chris Okasaki and Andy Gill,  \"\u003cem\u003eFast Mergeable Integer Maps\u003c/em\u003e\",\n      Workshop on ML, September 1998, pages 77-86,\n      \u003ca\u003ehttp://citeseer.ist.psu.edu/okasaki98fast.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e D.R. Morrison, \"/PATRICIA -- Practical Algorithm To Retrieve\n      Information Coded In Alphanumeric/\", Journal of the ACM, 15(4),\n      October 1968, pages 514-534.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMany operations have a worst-case complexity of \u003cem\u003eO(min(n,W))\u003c/em\u003e.\n This means that the operation can become linear in the number of\n elements with a maximum of \u003cem\u003eW\u003c/em\u003e -- the number of bits in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n (32 or 64).\n\u003c/p\u003e\u003cp\u003eUnlike the reference implementation in Data.IntSet, Data.Interned.IntSet\n uses hash consing to ensure that there is only ever one copy of any given\n IntSet in memory. This is enabled by the normal form of the PATRICIA trie.\n\u003c/p\u003e\u003cp\u003eThis can mean a drastic reduction in the memory footprint of a program\n in exchange for much more costly set manipulation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "module",
        "fct-source": "src/Data-Interned-IntSet.html",
        "fct-type": "module",
        "title": "IntSet"
      },
      "index": {
        "description": "An efficient implementation of integer sets Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.IntSet IntSet import qualified Data.IntSet as IntSet The implementation is based on big-endian patricia trees This data structure performs especially well on binary operations like union and intersection However my benchmarks show that it is also much faster on insertions and deletions when compared to generic size-balanced set implementation see Data.Set Chris Okasaki and Andy Gill Fast Mergeable Integer Maps Workshop on ML September pages http citeseer.ist.psu.edu okasaki98fast.html D.R Morrison PATRICIA Practical Algorithm To Retrieve Information Coded In Alphanumeric Journal of the ACM October pages Many operations have worst-case complexity of min This means that the operation can become linear in the number of elements with maximum of the number of bits in an Int or Unlike the reference implementation in Data.IntSet Data.Interned.IntSet uses hash consing to ensure that there is only ever one copy of any given IntSet in memory This is enabled by the normal form of the PATRICIA trie This can mean drastic reduction in the memory footprint of program in exchange for much more costly set manipulation",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "IntSet",
        "normalized": "",
        "package": "intern",
        "partial": "Int Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#t:IntSet",
      "description": {
        "fct-descr": "\u003cp\u003eA set of integers.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "data",
        "fct-source": "src/Data-Interned-IntSet.html#IntSet",
        "fct-type": "data",
        "title": "IntSet"
      },
      "index": {
        "description": "set of integers",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "IntSet",
        "normalized": "",
        "package": "intern",
        "partial": "Int Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "See difference",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "(\\\\) \\\\",
        "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
        "package": "intern",
        "partial": "",
        "signature": "IntSet-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete a value in the set. Returns the\n original set when the value was not present.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "Int -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "min Delete value in the set Returns the original set when the value was not present",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "delete",
        "normalized": "Int-\u003eIntSet-\u003eIntSet",
        "package": "intern",
        "partial": "",
        "signature": "Int-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:deleteFindMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete and find the maximal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMax set = (findMax set, deleteMax set)\n\u003c/pre\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e (Int, IntSet)",
        "fct-source": "src/Data-Interned-IntSet.html#deleteFindMax",
        "fct-type": "function",
        "title": "deleteFindMax"
      },
      "index": {
        "description": "min Delete and find the maximal element deleteFindMax set findMax set deleteMax set",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "deleteFindMax",
        "normalized": "IntSet-\u003e(Int,IntSet)",
        "package": "intern",
        "partial": "Find Max",
        "signature": "IntSet-\u003e(Int,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:deleteFindMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete and find the minimal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMin set = (findMin set, deleteMin set)\n\u003c/pre\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e (Int, IntSet)",
        "fct-source": "src/Data-Interned-IntSet.html#deleteFindMin",
        "fct-type": "function",
        "title": "deleteFindMin"
      },
      "index": {
        "description": "min Delete and find the minimal element deleteFindMin set findMin set deleteMin set",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "deleteFindMin",
        "normalized": "IntSet-\u003e(Int,IntSet)",
        "package": "intern",
        "partial": "Find Min",
        "signature": "IntSet-\u003e(Int,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:deleteMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete the maximal element.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "min Delete the maximal element",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "deleteMax",
        "normalized": "IntSet-\u003eIntSet",
        "package": "intern",
        "partial": "Max",
        "signature": "IntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete the minimal element.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "min Delete the minimal element",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "deleteMin",
        "normalized": "IntSet-\u003eIntSet",
        "package": "intern",
        "partial": "Min",
        "signature": "IntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference between two sets.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "Difference between two sets",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "difference",
        "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
        "package": "intern",
        "partial": "",
        "signature": "IntSet-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The elements of a set. (For sets, this is equivalent to toList)\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e [Int]",
        "fct-source": "src/Data-Interned-IntSet.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "The elements of set For sets this is equivalent to toList",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "elems",
        "normalized": "IntSet-\u003e[Int]",
        "package": "intern",
        "partial": "",
        "signature": "IntSet-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty set.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty set",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "empty",
        "normalized": "",
        "package": "intern",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all elements that satisfy some predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "(Int -\u003e Bool) -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter all elements that satisfy some predicate",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "filter",
        "normalized": "(Int-\u003eBool)-\u003eIntSet-\u003eIntSet",
        "package": "intern",
        "partial": "",
        "signature": "(Int-\u003eBool)-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. The maximal element of a set.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e Int",
        "fct-source": "src/Data-Interned-IntSet.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "min The maximal element of set",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "findMax",
        "normalized": "IntSet-\u003eInt",
        "package": "intern",
        "partial": "Max",
        "signature": "IntSet-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. The minimal element of the set.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e Int",
        "fct-source": "src/Data-Interned-IntSet.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "min The minimal element of the set",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "findMin",
        "normalized": "IntSet-\u003eInt",
        "package": "intern",
        "partial": "Min",
        "signature": "IntSet-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold over the elements of a set in an unspecified order.\n\u003c/p\u003e\u003cpre\u003e sum set   == fold (+) 0 set\n elems set == fold (:) [] set\n\u003c/pre\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "(Int -\u003e b -\u003e b) -\u003e b -\u003e IntSet -\u003e b",
        "fct-source": "src/Data-Interned-IntSet.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Fold over the elements of set in an unspecified order sum set fold set elems set fold set",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "fold",
        "normalized": "(Int-\u003ea-\u003ea)-\u003ea-\u003eIntSet-\u003ea",
        "package": "intern",
        "partial": "",
        "signature": "(Int-\u003eb-\u003eb)-\u003eb-\u003eIntSet-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a set from an ascending list of elements.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "[Int] -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Build set from an ascending list of elements The precondition input list is ascending is not checked",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "fromAscList",
        "normalized": "[Int]-\u003eIntSet",
        "package": "intern",
        "partial": "Asc List",
        "signature": "[Int]-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:fromDistinctAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a set from an ascending list of distinct elements.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "[Int] -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#fromDistinctAscList",
        "fct-type": "function",
        "title": "fromDistinctAscList"
      },
      "index": {
        "description": "Build set from an ascending list of distinct elements The precondition input list is strictly ascending is not checked",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "fromDistinctAscList",
        "normalized": "[Int]-\u003eIntSet",
        "package": "intern",
        "partial": "Distinct Asc List",
        "signature": "[Int]-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e. Create a set from a list of integers.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "[Int] -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "min Create set from list of integers",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "fromList",
        "normalized": "[Int]-\u003eIntSet",
        "package": "intern",
        "partial": "List",
        "signature": "[Int]-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Add a value to the set. When the value is already\n an element of the set, it is replaced by the new one, ie. \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e\n is left-biased.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "Int -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "min Add value to the set When the value is already an element of the set it is replaced by the new one ie insert is left-biased",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "insert",
        "normalized": "Int-\u003eIntSet-\u003eIntSet",
        "package": "intern",
        "partial": "",
        "signature": "Int-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The intersection of two sets.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "The intersection of two sets",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "intersection",
        "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
        "package": "intern",
        "partial": "",
        "signature": "IntSet-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:isProperSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e IntSet -\u003e Bool",
        "fct-source": "src/Data-Interned-IntSet.html#isProperSubsetOf",
        "fct-type": "function",
        "title": "isProperSubsetOf"
      },
      "index": {
        "description": "Is this proper subset ie subset but not equal",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "isProperSubsetOf",
        "normalized": "IntSet-\u003eIntSet-\u003eBool",
        "package": "intern",
        "partial": "Proper Subset Of",
        "signature": "IntSet-\u003eIntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:isSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a subset?\n \u003ccode\u003e(s1 \u003ccode\u003e\u003ca\u003eisSubsetOf\u003c/a\u003e\u003c/code\u003e s2)\u003c/code\u003e tells whether \u003ccode\u003es1\u003c/code\u003e is a subset of \u003ccode\u003es2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e IntSet -\u003e Bool",
        "fct-source": "src/Data-Interned-IntSet.html#isSubsetOf",
        "fct-type": "function",
        "title": "isSubsetOf"
      },
      "index": {
        "description": "Is this subset s1 isSubsetOf s2 tells whether s1 is subset of s2",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "isSubsetOf",
        "normalized": "IntSet-\u003eIntSet-\u003eBool",
        "package": "intern",
        "partial": "Subset Of",
        "signature": "IntSet-\u003eIntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e is the set obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt's worth noting that the size of the result may be smaller if,\n for some \u003ccode\u003e(x,y)\u003c/code\u003e, \u003ccode\u003ex /= y && f x == f y\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "(Int -\u003e Int) -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "min map is the set obtained by applying to each element of It worth noting that the size of the result may be smaller if for some",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "map",
        "normalized": "(Int-\u003eInt)-\u003eIntSet-\u003eIntSet",
        "package": "intern",
        "partial": "",
        "signature": "(Int-\u003eInt)-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:maxView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Retrieves the maximal key of the set, and the set\n stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty set.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e Maybe (Int, IntSet)",
        "fct-source": "src/Data-Interned-IntSet.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "min Retrieves the maximal key of the set and the set stripped of that element or Nothing if passed an empty set",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "maxView",
        "normalized": "IntSet-\u003eMaybe(Int,IntSet)",
        "package": "intern",
        "partial": "View",
        "signature": "IntSet-\u003eMaybe(Int,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Is the value a member of the set?\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "Int -\u003e IntSet -\u003e Bool",
        "fct-source": "src/Data-Interned-IntSet.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "min Is the value member of the set",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "member",
        "normalized": "Int-\u003eIntSet-\u003eBool",
        "package": "intern",
        "partial": "",
        "signature": "Int-\u003eIntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Retrieves the minimal key of the set, and the set\n stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty set.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e Maybe (Int, IntSet)",
        "fct-source": "src/Data-Interned-IntSet.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "min Retrieves the minimal key of the set and the set stripped of that element or Nothing if passed an empty set",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "minView",
        "normalized": "IntSet-\u003eMaybe(Int,IntSet)",
        "package": "intern",
        "partial": "View",
        "signature": "IntSet-\u003eMaybe(Int,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Is the element not in the set?\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "Int -\u003e IntSet -\u003e Bool",
        "fct-source": "src/Data-Interned-IntSet.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "min Is the element not in the set",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "notMember",
        "normalized": "Int-\u003eIntSet-\u003eBool",
        "package": "intern",
        "partial": "Member",
        "signature": "Int-\u003eIntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the set empty?\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e Bool",
        "fct-source": "src/Data-Interned-IntSet.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the set empty",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "null",
        "normalized": "IntSet-\u003eBool",
        "package": "intern",
        "partial": "",
        "signature": "IntSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. partition the set according to some predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "(Int -\u003e Bool) -\u003e IntSet -\u003e (IntSet, IntSet)",
        "fct-source": "src/Data-Interned-IntSet.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "partition the set according to some predicate",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "partition",
        "normalized": "(Int-\u003eBool)-\u003eIntSet-\u003e(IntSet,IntSet)",
        "package": "intern",
        "partial": "",
        "signature": "(Int-\u003eBool)-\u003eIntSet-\u003e(IntSet,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:showTree",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Show the tree that implements the set. The tree is shown\n in a compressed, hanging format.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e String",
        "fct-source": "src/Data-Interned-IntSet.html#showTree",
        "fct-type": "function",
        "title": "showTree"
      },
      "index": {
        "description": "Show the tree that implements the set The tree is shown in compressed hanging format",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "showTree",
        "normalized": "IntSet-\u003eString",
        "package": "intern",
        "partial": "Tree",
        "signature": "IntSet-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:showTreeWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eshowTreeWith\u003c/a\u003e\u003c/code\u003e hang wide map\u003c/code\u003e) shows\n the tree that implements the set. If \u003ccode\u003ehang\u003c/code\u003e is\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, a \u003cem\u003ehanging\u003c/em\u003e tree is shown otherwise a rotated tree is shown. If\n \u003ccode\u003ewide\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, an extra wide version is shown.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "Bool -\u003e Bool -\u003e IntSet -\u003e String",
        "fct-source": "src/Data-Interned-IntSet.html#showTreeWith",
        "fct-type": "function",
        "title": "showTreeWith"
      },
      "index": {
        "description": "The expression showTreeWith hang wide map shows the tree that implements the set If hang is True hanging tree is shown otherwise rotated tree is shown If wide is True an extra wide version is shown",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "showTreeWith",
        "normalized": "Bool-\u003eBool-\u003eIntSet-\u003eString",
        "package": "intern",
        "partial": "Tree With",
        "signature": "Bool-\u003eBool-\u003eIntSet-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A set of one element.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "Int -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "set of one element",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "singleton",
        "normalized": "Int-\u003eIntSet",
        "package": "intern",
        "partial": "",
        "signature": "Int-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Cardinality of the set.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e Int",
        "fct-source": "src/Data-Interned-IntSet.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Cardinality of the set",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "size",
        "normalized": "IntSet-\u003eInt",
        "package": "intern",
        "partial": "",
        "signature": "IntSet-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e x set\u003c/code\u003e) is a pair \u003ccode\u003e(set1,set2)\u003c/code\u003e\n where \u003ccode\u003eset1\u003c/code\u003e comprises the elements of \u003ccode\u003eset\u003c/code\u003e less than \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003eset2\u003c/code\u003e\n comprises the elements of \u003ccode\u003eset\u003c/code\u003e greater than \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e split 3 (fromList [1..5]) == (fromList [1,2], fromList [4,5])\n\u003c/pre\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "Int -\u003e IntSet -\u003e (IntSet, IntSet)",
        "fct-source": "src/Data-Interned-IntSet.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "min The expression split set is pair set1 set2 where set1 comprises the elements of set less than and set2 comprises the elements of set greater than split fromList fromList fromList",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "split",
        "normalized": "Int-\u003eIntSet-\u003e(IntSet,IntSet)",
        "package": "intern",
        "partial": "",
        "signature": "Int-\u003eIntSet-\u003e(IntSet,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:splitMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Performs a \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e but also returns whether the pivot\n element was found in the original set.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "Int -\u003e IntSet -\u003e (IntSet, Bool, IntSet)",
        "fct-source": "src/Data-Interned-IntSet.html#splitMember",
        "fct-type": "function",
        "title": "splitMember"
      },
      "index": {
        "description": "min Performs split but also returns whether the pivot element was found in the original set",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "splitMember",
        "normalized": "Int-\u003eIntSet-\u003e(IntSet,Bool,IntSet)",
        "package": "intern",
        "partial": "Member",
        "signature": "Int-\u003eIntSet-\u003e(IntSet,Bool,IntSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the set to an ascending list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e [Int]",
        "fct-source": "src/Data-Interned-IntSet.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Convert the set to an ascending list of elements",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "toAscList",
        "normalized": "IntSet-\u003e[Int]",
        "package": "intern",
        "partial": "Asc List",
        "signature": "IntSet-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the set to a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e [Int]",
        "fct-source": "src/Data-Interned-IntSet.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert the set to list of elements",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "toList",
        "normalized": "IntSet-\u003e[Int]",
        "package": "intern",
        "partial": "List",
        "signature": "IntSet-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The union of two sets.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "IntSet -\u003e IntSet -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "The union of two sets",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "union",
        "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
        "package": "intern",
        "partial": "",
        "signature": "IntSet-\u003eIntSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of sets.\n\u003c/p\u003e",
        "fct-module": "Data.Interned.IntSet",
        "fct-package": "intern",
        "fct-signature": "[IntSet] -\u003e IntSet",
        "fct-source": "src/Data-Interned-IntSet.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "The union of list of sets",
        "hierarchy": "Data Interned IntSet",
        "module": "Data.Interned.IntSet",
        "name": "unions",
        "normalized": "[IntSet]-\u003eIntSet",
        "package": "intern",
        "partial": "",
        "signature": "[IntSet]-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-ByteString.html#",
      "description": {
        "fct-module": "Data.Interned.Internal.ByteString",
        "fct-package": "intern",
        "fct-signature": "module",
        "fct-source": "src/Data-Interned-Internal-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal ByteString",
        "module": "Data.Interned.Internal.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "intern",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-ByteString.html#t:InternedByteString",
      "description": {
        "fct-module": "Data.Interned.Internal.ByteString",
        "fct-package": "intern",
        "fct-signature": "data",
        "fct-source": "src/Data-Interned-Internal-ByteString.html#InternedByteString",
        "fct-type": "data",
        "title": "InternedByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal ByteString",
        "module": "Data.Interned.Internal.ByteString",
        "name": "InternedByteString",
        "normalized": "",
        "package": "intern",
        "partial": "Interned Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-ByteString.html#v:InternedByteString",
      "description": {
        "fct-module": "Data.Interned.Internal.ByteString",
        "fct-package": "intern",
        "fct-signature": "InternedByteString",
        "fct-source": "src/Data-Interned-Internal-ByteString.html#InternedByteString",
        "fct-type": "function",
        "title": "InternedByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal ByteString",
        "module": "Data.Interned.Internal.ByteString",
        "name": "InternedByteString",
        "normalized": "",
        "package": "intern",
        "partial": "Interned Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-ByteString.html#v:internedByteStringId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Interned.Internal.ByteString",
        "fct-package": "intern",
        "fct-signature": "!Id",
        "fct-source": "src/Data-Interned-Internal-ByteString.html#InternedByteString",
        "fct-type": "function",
        "title": "internedByteStringId"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal ByteString",
        "module": "Data.Interned.Internal.ByteString",
        "name": "internedByteStringId",
        "normalized": "",
        "package": "intern",
        "partial": "Byte String Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-ByteString.html#v:uninternByteString",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Interned.Internal.ByteString",
        "fct-package": "intern",
        "fct-signature": "!ByteString",
        "fct-source": "src/Data-Interned-Internal-ByteString.html#InternedByteString",
        "fct-type": "function",
        "title": "uninternByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal ByteString",
        "module": "Data.Interned.Internal.ByteString",
        "name": "uninternByteString",
        "normalized": "",
        "package": "intern",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-String.html#",
      "description": {
        "fct-module": "Data.Interned.Internal.String",
        "fct-package": "intern",
        "fct-signature": "module",
        "fct-source": "src/Data-Interned-Internal-String.html",
        "fct-type": "module",
        "title": "String"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal String",
        "module": "Data.Interned.Internal.String",
        "name": "String",
        "normalized": "",
        "package": "intern",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-String.html#t:InternedString",
      "description": {
        "fct-module": "Data.Interned.Internal.String",
        "fct-package": "intern",
        "fct-signature": "data",
        "fct-source": "src/Data-Interned-Internal-String.html#InternedString",
        "fct-type": "data",
        "title": "InternedString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal String",
        "module": "Data.Interned.Internal.String",
        "name": "InternedString",
        "normalized": "",
        "package": "intern",
        "partial": "Interned String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-String.html#v:IS",
      "description": {
        "fct-module": "Data.Interned.Internal.String",
        "fct-package": "intern",
        "fct-signature": "IS",
        "fct-source": "src/Data-Interned-Internal-String.html#InternedString",
        "fct-type": "function",
        "title": "IS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal String",
        "module": "Data.Interned.Internal.String",
        "name": "IS",
        "normalized": "",
        "package": "intern",
        "partial": "IS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-String.html#v:internedStringId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Interned.Internal.String",
        "fct-package": "intern",
        "fct-signature": "!Id",
        "fct-source": "src/Data-Interned-Internal-String.html#InternedString",
        "fct-type": "function",
        "title": "internedStringId"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal String",
        "module": "Data.Interned.Internal.String",
        "name": "internedStringId",
        "normalized": "",
        "package": "intern",
        "partial": "String Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-String.html#v:uninternString",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Interned.Internal.String",
        "fct-package": "intern",
        "fct-signature": "String",
        "fct-source": "src/Data-Interned-Internal-String.html#InternedString",
        "fct-type": "function",
        "title": "uninternString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal String",
        "module": "Data.Interned.Internal.String",
        "name": "uninternString",
        "normalized": "",
        "package": "intern",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-Text.html#",
      "description": {
        "fct-module": "Data.Interned.Internal.Text",
        "fct-package": "intern",
        "fct-signature": "module",
        "fct-source": "src/Data-Interned-Internal-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal Text",
        "module": "Data.Interned.Internal.Text",
        "name": "Text",
        "normalized": "",
        "package": "intern",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-Text.html#t:InternedText",
      "description": {
        "fct-module": "Data.Interned.Internal.Text",
        "fct-package": "intern",
        "fct-signature": "data",
        "fct-source": "src/Data-Interned-Internal-Text.html#InternedText",
        "fct-type": "data",
        "title": "InternedText"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal Text",
        "module": "Data.Interned.Internal.Text",
        "name": "InternedText",
        "normalized": "",
        "package": "intern",
        "partial": "Interned Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-Text.html#v:InternedText",
      "description": {
        "fct-module": "Data.Interned.Internal.Text",
        "fct-package": "intern",
        "fct-signature": "InternedText",
        "fct-source": "src/Data-Interned-Internal-Text.html#InternedText",
        "fct-type": "function",
        "title": "InternedText"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal Text",
        "module": "Data.Interned.Internal.Text",
        "name": "InternedText",
        "normalized": "",
        "package": "intern",
        "partial": "Interned Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-Text.html#v:internedTextId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Interned.Internal.Text",
        "fct-package": "intern",
        "fct-signature": "!Id",
        "fct-source": "src/Data-Interned-Internal-Text.html#InternedText",
        "fct-type": "function",
        "title": "internedTextId"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal Text",
        "module": "Data.Interned.Internal.Text",
        "name": "internedTextId",
        "normalized": "",
        "package": "intern",
        "partial": "Text Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-Text.html#v:uninternedText",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Interned.Internal.Text",
        "fct-package": "intern",
        "fct-signature": "!Text",
        "fct-source": "src/Data-Interned-Internal-Text.html#InternedText",
        "fct-type": "function",
        "title": "uninternedText"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal Text",
        "module": "Data.Interned.Internal.Text",
        "name": "uninternedText",
        "normalized": "",
        "package": "intern",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "module",
        "fct-source": "src/Data-Interned-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "intern",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#t:Cache",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Interned-Internal.html#Cache",
        "fct-type": "newtype",
        "title": "Cache"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "Cache",
        "normalized": "",
        "package": "intern",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#t:CacheState",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "data",
        "fct-source": "src/Data-Interned-Internal.html#CacheState",
        "fct-type": "data",
        "title": "CacheState"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "CacheState",
        "normalized": "",
        "package": "intern",
        "partial": "Cache State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#t:Id",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "type",
        "fct-source": "src/Data-Interned-Internal.html#Id",
        "fct-type": "type",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "Id",
        "normalized": "",
        "package": "intern",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#t:Interned",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "class",
        "fct-source": "src/Data-Interned-Internal.html#Interned",
        "fct-type": "class",
        "title": "Interned"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "Interned",
        "normalized": "",
        "package": "intern",
        "partial": "Interned",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#t:Uninternable",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "class",
        "fct-source": "src/Data-Interned-Internal.html#Uninternable",
        "fct-type": "class",
        "title": "Uninternable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "Uninternable",
        "normalized": "",
        "package": "intern",
        "partial": "Uninternable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:Cache",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "Cache",
        "fct-source": "src/Data-Interned-Internal.html#Cache",
        "fct-type": "function",
        "title": "Cache"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "Cache",
        "normalized": "",
        "package": "intern",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:CacheState",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "CacheState",
        "fct-source": "src/Data-Interned-Internal.html#CacheState",
        "fct-type": "function",
        "title": "CacheState"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "CacheState",
        "normalized": "",
        "package": "intern",
        "partial": "Cache State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:cache",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "Cache t",
        "fct-source": "src/Data-Interned-Internal.html#cache",
        "fct-type": "method",
        "title": "cache"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "cache",
        "normalized": "",
        "package": "intern",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:cacheSize",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "Cache t -\u003e IO Int",
        "fct-source": "src/Data-Interned-Internal.html#cacheSize",
        "fct-type": "function",
        "title": "cacheSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "cacheSize",
        "normalized": "Cache a-\u003eIO Int",
        "package": "intern",
        "partial": "Size",
        "signature": "Cache t-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:cacheWidth",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "p t -\u003e Int",
        "fct-source": "src/Data-Interned-Internal.html#cacheWidth",
        "fct-type": "method",
        "title": "cacheWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "cacheWidth",
        "normalized": "a b-\u003eInt",
        "package": "intern",
        "partial": "Width",
        "signature": "p t-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:content",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "!(HashMap (Description t) t)",
        "fct-source": "src/Data-Interned-Internal.html#CacheState",
        "fct-type": "function",
        "title": "content"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "content",
        "normalized": "",
        "package": "intern",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:describe",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "Uninterned t -\u003e Description t",
        "fct-source": "src/Data-Interned-Internal.html#describe",
        "fct-type": "method",
        "title": "describe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "describe",
        "normalized": "Uninterned a-\u003eDescription a",
        "package": "intern",
        "partial": "",
        "signature": "Uninterned t-\u003eDescription t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:fresh",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "!Id",
        "fct-source": "src/Data-Interned-Internal.html#CacheState",
        "fct-type": "function",
        "title": "fresh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "fresh",
        "normalized": "",
        "package": "intern",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:getCache",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "Array Int (IORef (CacheState t))",
        "fct-source": "src/Data-Interned-Internal.html#Cache",
        "fct-type": "function",
        "title": "getCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "getCache",
        "normalized": "",
        "package": "intern",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:identify",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "Id -\u003e Uninterned t -\u003e t",
        "fct-source": "src/Data-Interned-Internal.html#identify",
        "fct-type": "method",
        "title": "identify"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "identify",
        "normalized": "Id-\u003eUninterned a-\u003ea",
        "package": "intern",
        "partial": "",
        "signature": "Id-\u003eUninterned t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:intern",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "Uninterned t -\u003e t",
        "fct-source": "src/Data-Interned-Internal.html#intern",
        "fct-type": "function",
        "title": "intern"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "intern",
        "normalized": "Uninterned a-\u003ea",
        "package": "intern",
        "partial": "",
        "signature": "Uninterned t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:mkCache",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "Cache t",
        "fct-source": "src/Data-Interned-Internal.html#mkCache",
        "fct-type": "function",
        "title": "mkCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "mkCache",
        "normalized": "",
        "package": "intern",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:modifyAdvice",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "IO t -\u003e IO t",
        "fct-source": "src/Data-Interned-Internal.html#modifyAdvice",
        "fct-type": "method",
        "title": "modifyAdvice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "modifyAdvice",
        "normalized": "IO a-\u003eIO a",
        "package": "intern",
        "partial": "Advice",
        "signature": "IO t-\u003eIO t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:recover",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "Description t -\u003e IO (Maybe t)",
        "fct-source": "src/Data-Interned-Internal.html#recover",
        "fct-type": "function",
        "title": "recover"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "recover",
        "normalized": "Description a-\u003eIO(Maybe a)",
        "package": "intern",
        "partial": "",
        "signature": "Description t-\u003eIO(Maybe t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:seedIdentity",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "p t -\u003e Id",
        "fct-source": "src/Data-Interned-Internal.html#seedIdentity",
        "fct-type": "method",
        "title": "seedIdentity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "seedIdentity",
        "normalized": "a b-\u003eId",
        "package": "intern",
        "partial": "Identity",
        "signature": "p t-\u003eId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:unintern",
      "description": {
        "fct-module": "Data.Interned.Internal",
        "fct-package": "intern",
        "fct-signature": "t -\u003e Uninterned t",
        "fct-source": "src/Data-Interned-Internal.html#unintern",
        "fct-type": "method",
        "title": "unintern"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Internal",
        "module": "Data.Interned.Internal",
        "name": "unintern",
        "normalized": "a-\u003eUninterned a",
        "package": "intern",
        "partial": "",
        "signature": "t-\u003eUninterned t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-String.html#",
      "description": {
        "fct-module": "Data.Interned.String",
        "fct-package": "intern",
        "fct-signature": "module",
        "fct-source": "src/Data-Interned-String.html",
        "fct-type": "module",
        "title": "String"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned String",
        "module": "Data.Interned.String",
        "name": "String",
        "normalized": "",
        "package": "intern",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-String.html#t:InternedString",
      "description": {
        "fct-module": "Data.Interned.String",
        "fct-package": "intern",
        "fct-signature": "data",
        "fct-source": "src/Data-Interned-Internal-String.html#InternedString",
        "fct-type": "data",
        "title": "InternedString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned String",
        "module": "Data.Interned.String",
        "name": "InternedString",
        "normalized": "",
        "package": "intern",
        "partial": "Interned String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Text.html#",
      "description": {
        "fct-module": "Data.Interned.Text",
        "fct-package": "intern",
        "fct-signature": "module",
        "fct-source": "src/Data-Interned-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Text",
        "module": "Data.Interned.Text",
        "name": "Text",
        "normalized": "",
        "package": "intern",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Text.html#t:InternedText",
      "description": {
        "fct-module": "Data.Interned.Text",
        "fct-package": "intern",
        "fct-signature": "data",
        "fct-source": "src/Data-Interned-Internal-Text.html#InternedText",
        "fct-type": "data",
        "title": "InternedText"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned Text",
        "module": "Data.Interned.Text",
        "name": "InternedText",
        "normalized": "",
        "package": "intern",
        "partial": "Interned Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "module",
        "fct-source": "src/Data-Interned.html",
        "fct-type": "module",
        "title": "Interned"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "Interned",
        "normalized": "",
        "package": "intern",
        "partial": "Interned",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#t:Cache",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "data",
        "fct-source": "src/Data-Interned-Internal.html#Cache",
        "fct-type": "data",
        "title": "Cache"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "Cache",
        "normalized": "",
        "package": "intern",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#t:Id",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "type",
        "fct-source": "src/Data-Interned-Internal.html#Id",
        "fct-type": "type",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "Id",
        "normalized": "",
        "package": "intern",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#t:Interned",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "class",
        "fct-source": "src/Data-Interned-Internal.html#Interned",
        "fct-type": "class",
        "title": "Interned"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "Interned",
        "normalized": "",
        "package": "intern",
        "partial": "Interned",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#t:Uninternable",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "class",
        "fct-source": "src/Data-Interned-Internal.html#Uninternable",
        "fct-type": "class",
        "title": "Uninternable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "Uninternable",
        "normalized": "",
        "package": "intern",
        "partial": "Uninternable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:cache",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "Cache t",
        "fct-source": "src/Data-Interned-Internal.html#cache",
        "fct-type": "method",
        "title": "cache"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "cache",
        "normalized": "",
        "package": "intern",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:cacheSize",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "Cache t -\u003e IO Int",
        "fct-source": "src/Data-Interned-Internal.html#cacheSize",
        "fct-type": "function",
        "title": "cacheSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "cacheSize",
        "normalized": "Cache a-\u003eIO Int",
        "package": "intern",
        "partial": "Size",
        "signature": "Cache t-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:cacheWidth",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "p t -\u003e Int",
        "fct-source": "src/Data-Interned-Internal.html#cacheWidth",
        "fct-type": "method",
        "title": "cacheWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "cacheWidth",
        "normalized": "a b-\u003eInt",
        "package": "intern",
        "partial": "Width",
        "signature": "p t-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:describe",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "Uninterned t -\u003e Description t",
        "fct-source": "src/Data-Interned-Internal.html#describe",
        "fct-type": "method",
        "title": "describe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "describe",
        "normalized": "Uninterned a-\u003eDescription a",
        "package": "intern",
        "partial": "",
        "signature": "Uninterned t-\u003eDescription t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:identify",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "Id -\u003e Uninterned t -\u003e t",
        "fct-source": "src/Data-Interned-Internal.html#identify",
        "fct-type": "method",
        "title": "identify"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "identify",
        "normalized": "Id-\u003eUninterned a-\u003ea",
        "package": "intern",
        "partial": "",
        "signature": "Id-\u003eUninterned t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:intern",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "Uninterned t -\u003e t",
        "fct-source": "src/Data-Interned-Internal.html#intern",
        "fct-type": "function",
        "title": "intern"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "intern",
        "normalized": "Uninterned a-\u003ea",
        "package": "intern",
        "partial": "",
        "signature": "Uninterned t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:mkCache",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "Cache t",
        "fct-source": "src/Data-Interned-Internal.html#mkCache",
        "fct-type": "function",
        "title": "mkCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "mkCache",
        "normalized": "",
        "package": "intern",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:modifyAdvice",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "IO t -\u003e IO t",
        "fct-source": "src/Data-Interned-Internal.html#modifyAdvice",
        "fct-type": "method",
        "title": "modifyAdvice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "modifyAdvice",
        "normalized": "IO a-\u003eIO a",
        "package": "intern",
        "partial": "Advice",
        "signature": "IO t-\u003eIO t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:seedIdentity",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "p t -\u003e Id",
        "fct-source": "src/Data-Interned-Internal.html#seedIdentity",
        "fct-type": "method",
        "title": "seedIdentity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "seedIdentity",
        "normalized": "a b-\u003eId",
        "package": "intern",
        "partial": "Identity",
        "signature": "p t-\u003eId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:unintern",
      "description": {
        "fct-module": "Data.Interned",
        "fct-package": "intern",
        "fct-signature": "t -\u003e Uninterned t",
        "fct-source": "src/Data-Interned-Internal.html#unintern",
        "fct-type": "method",
        "title": "unintern"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Interned",
        "module": "Data.Interned",
        "name": "unintern",
        "normalized": "a-\u003eUninterned a",
        "package": "intern",
        "partial": "",
        "signature": "t-\u003eUninterned t"
      }
    }
  }
]