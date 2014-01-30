[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of multisets of integers, also somtimes called bags.\n\u003c/p\u003e\u003cp\u003eA multiset is like a set, but it can contain multiple copies of the same element.\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.MultiSet (MultiSet)\n  import qualified Data.MultiSet as MultiSet\n\u003c/pre\u003e\u003cp\u003eThe implementation of \u003ccode\u003e\u003ca\u003eMultiSet\u003c/a\u003e\u003c/code\u003e is based on the \u003ca\u003eData.IntMap\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eMany operations have a worst-case complexity of \u003cem\u003eO(min(n,W))\u003c/em\u003e.\n This means that the operation can become linear in the number of\n elements with a maximum of \u003cem\u003eW\u003c/em\u003e -- the number of bits in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n (32 or 64). Here \u003cem\u003en\u003c/em\u003e refers to the number of distinct elements,\n \u003cem\u003et\u003c/em\u003e is the total number of elements.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "module",
        "fct-source": "src/Data-IntMultiSet.html",
        "fct-type": "module",
        "title": "IntMultiSet"
      },
      "index": {
        "description": "An efficient implementation of multisets of integers also somtimes called bags multiset is like set but it can contain multiple copies of the same element Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.MultiSet MultiSet import qualified Data.MultiSet as MultiSet The implementation of MultiSet is based on the Data.IntMap module Many operations have worst-case complexity of min This means that the operation can become linear in the number of elements with maximum of the number of bits in an Int or Here refers to the number of distinct elements is the total number of elements",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "IntMultiSet",
        "normalized": "",
        "package": "multiset",
        "partial": "Int Multi Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#t:IntMultiSet",
      "description": {
        "fct-descr": "\u003cp\u003eA multiset of integers.\n   The same value can occur multiple times.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "data",
        "fct-source": "src/Data-IntMultiSet.html#IntMultiSet",
        "fct-type": "data",
        "title": "IntMultiSet"
      },
      "index": {
        "description": "multiset of integers The same value can occur multiple times",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "IntMultiSet",
        "normalized": "",
        "package": "multiset",
        "partial": "Int Multi Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#t:Key",
      "description": {
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "type",
        "fct-source": "src/Data-IntMultiSet.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "Key",
        "normalized": "",
        "package": "multiset",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#t:Occur",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of occurences of an element\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "type",
        "fct-source": "src/Data-IntMultiSet.html#Occur",
        "fct-type": "type",
        "title": "Occur"
      },
      "index": {
        "description": "The number of occurences of an element",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "Occur",
        "normalized": "",
        "package": "multiset",
        "partial": "Occur",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "See difference",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "(\\\\) \\\\",
        "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "",
        "signature": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:bind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The monad bind operation, (\u003e\u003e=), for multisets.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e (Key -\u003e IntMultiSet) -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "The monad bind operation for multisets",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "bind",
        "normalized": "IntMultiSet-\u003e(Key-\u003eIntMultiSet)-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "",
        "signature": "IntMultiSet-\u003e(Key-\u003eIntMultiSet)-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Apply a function to each element, and take the union of the results\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "(Key -\u003e [Key]) -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "Apply function to each element and take the union of the results",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "concatMap",
        "normalized": "(Key-\u003e[Key])-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Map",
        "signature": "(Key-\u003e[Key])-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete a single element from a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "Key -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "min Delete single element from multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "delete",
        "normalized": "Key-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "",
        "signature": "Key-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete all occurences of an element from a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "Key -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#deleteAll",
        "fct-type": "function",
        "title": "deleteAll"
      },
      "index": {
        "description": "min Delete all occurences of an element from multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "deleteAll",
        "normalized": "Key-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "All",
        "signature": "Key-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteFindMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the maximal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMax set = (findMax set, deleteMax set)\n\u003c/pre\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e (Key, IntMultiSet)",
        "fct-source": "src/Data-IntMultiSet.html#deleteFindMax",
        "fct-type": "function",
        "title": "deleteFindMax"
      },
      "index": {
        "description": "log Delete and find the maximal element deleteFindMax set findMax set deleteMax set",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "deleteFindMax",
        "normalized": "IntMultiSet-\u003e(Key,IntMultiSet)",
        "package": "multiset",
        "partial": "Find Max",
        "signature": "IntMultiSet-\u003e(Key,IntMultiSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteFindMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the minimal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMin set = (findMin set, deleteMin set)\n\u003c/pre\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e (Key, IntMultiSet)",
        "fct-source": "src/Data-IntMultiSet.html#deleteFindMin",
        "fct-type": "function",
        "title": "deleteFindMin"
      },
      "index": {
        "description": "log Delete and find the minimal element deleteFindMin set findMin set deleteMin set",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "deleteFindMin",
        "normalized": "IntMultiSet-\u003e(Key,IntMultiSet)",
        "package": "multiset",
        "partial": "Find Min",
        "signature": "IntMultiSet-\u003e(Key,IntMultiSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteMany",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete an element from a multiset a given number of times.\n\u003c/p\u003e\u003cp\u003eNegative numbers add occurences of the given element.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "Key -\u003e Occur -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#deleteMany",
        "fct-type": "function",
        "title": "deleteMany"
      },
      "index": {
        "description": "min Delete an element from multiset given number of times Negative numbers add occurences of the given element",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "deleteMany",
        "normalized": "Key-\u003eOccur-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Many",
        "signature": "Key-\u003eOccur-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the maximal element.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "log Delete the maximal element",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "deleteMax",
        "normalized": "IntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Max",
        "signature": "IntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteMaxAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete all occurences of the maximal element.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#deleteMaxAll",
        "fct-type": "function",
        "title": "deleteMaxAll"
      },
      "index": {
        "description": "log Delete all occurences of the maximal element",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "deleteMaxAll",
        "normalized": "IntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Max All",
        "signature": "IntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the minimal element.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "log Delete the minimal element",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "deleteMin",
        "normalized": "IntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Min",
        "signature": "IntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteMinAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete all occurences of the minimal element.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#deleteMinAll",
        "fct-type": "function",
        "title": "deleteMinAll"
      },
      "index": {
        "description": "log Delete all occurences of the minimal element",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "deleteMinAll",
        "normalized": "IntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Min All",
        "signature": "IntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference of two multisets. \n The implementation uses an efficient \u003cem\u003ehedge\u003c/em\u003e algorithm comparable with \u003cem\u003ehedge-union\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "Difference of two multisets The implementation uses an efficient hedge algorithm comparable with hedge-union",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "difference",
        "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "",
        "signature": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:distinctElems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The distinct elements of a multiset, each element occurs only once in the list.\n\u003c/p\u003e\u003cpre\u003e distinctElems = map fst . toOccurList\n\u003c/pre\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e [Key]",
        "fct-source": "src/Data-IntMultiSet.html#distinctElems",
        "fct-type": "function",
        "title": "distinctElems"
      },
      "index": {
        "description": "The distinct elements of multiset each element occurs only once in the list distinctElems map fst toOccurList",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "distinctElems",
        "normalized": "IntMultiSet-\u003e[Key]",
        "package": "multiset",
        "partial": "Elems",
        "signature": "IntMultiSet-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:distinctSize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of distinct elements in the multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e Int",
        "fct-source": "src/Data-IntMultiSet.html#distinctSize",
        "fct-type": "function",
        "title": "distinctSize"
      },
      "index": {
        "description": "The number of distinct elements in the multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "distinctSize",
        "normalized": "IntMultiSet-\u003eInt",
        "package": "multiset",
        "partial": "Size",
        "signature": "IntMultiSet-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. The elements of a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e [Key]",
        "fct-source": "src/Data-IntMultiSet.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "The elements of multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "elems",
        "normalized": "IntMultiSet-\u003e[Key]",
        "package": "multiset",
        "partial": "",
        "signature": "IntMultiSet-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty mutli set.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty mutli set",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "empty",
        "normalized": "",
        "package": "multiset",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all elements that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "(Key -\u003e Bool) -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter all elements that satisfy the predicate",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "filter",
        "normalized": "(Key-\u003eBool)-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "",
        "signature": "(Key-\u003eBool)-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The maximal element of a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e Key",
        "fct-source": "src/Data-IntMultiSet.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "log The maximal element of multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "findMax",
        "normalized": "IntMultiSet-\u003eKey",
        "package": "multiset",
        "partial": "Max",
        "signature": "IntMultiSet-\u003eKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The minimal element of a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e Key",
        "fct-source": "src/Data-IntMultiSet.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "log The minimal element of multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "findMin",
        "normalized": "IntMultiSet-\u003eKey",
        "package": "multiset",
        "partial": "Min",
        "signature": "IntMultiSet-\u003eKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Fold over the elements of a multiset in an unspecified order.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "(Key -\u003e b -\u003e b) -\u003e b -\u003e IntMultiSet -\u003e b",
        "fct-source": "src/Data-IntMultiSet.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Fold over the elements of multiset in an unspecified order",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "fold",
        "normalized": "(Key-\u003ea-\u003ea)-\u003ea-\u003eIntMultiSet-\u003ea",
        "package": "multiset",
        "partial": "",
        "signature": "(Key-\u003eb-\u003eb)-\u003eb-\u003eIntMultiSet-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:foldOccur",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold over the elements of a multiset with their occurences.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "(Key -\u003e Occur -\u003e b -\u003e b) -\u003e b -\u003e IntMultiSet -\u003e b",
        "fct-source": "src/Data-IntMultiSet.html#foldOccur",
        "fct-type": "function",
        "title": "foldOccur"
      },
      "index": {
        "description": "Fold over the elements of multiset with their occurences",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "foldOccur",
        "normalized": "(Key-\u003eOccur-\u003ea-\u003ea)-\u003ea-\u003eIntMultiSet-\u003ea",
        "package": "multiset",
        "partial": "Occur",
        "signature": "(Key-\u003eOccur-\u003eb-\u003eb)-\u003eb-\u003eIntMultiSet-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Build a multiset from an ascending list in linear time.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "[Int] -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Build multiset from an ascending list in linear time The precondition input list is ascending is not checked",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "fromAscList",
        "normalized": "[Int]-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Asc List",
        "signature": "[Int]-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromAscOccurList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a multiset from an ascending list of element/occurence pairs in linear time.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "[(Int, Int)] -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#fromAscOccurList",
        "fct-type": "function",
        "title": "fromAscOccurList"
      },
      "index": {
        "description": "Build multiset from an ascending list of element occurence pairs in linear time The precondition input list is ascending is not checked",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "fromAscOccurList",
        "normalized": "[(Int,Int)]-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Asc Occur List",
        "signature": "[(Int,Int)]-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromDistinctAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a multiset from an ascending list of distinct elements in linear time.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "[Int] -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#fromDistinctAscList",
        "fct-type": "function",
        "title": "fromDistinctAscList"
      },
      "index": {
        "description": "Build multiset from an ascending list of distinct elements in linear time The precondition input list is strictly ascending is not checked",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "fromDistinctAscList",
        "normalized": "[Int]-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Distinct Asc List",
        "signature": "[Int]-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromDistinctAscOccurList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a multiset from an ascending list of elements/occurence pairs where each elements appears only once.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "[(Int, Int)] -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#fromDistinctAscOccurList",
        "fct-type": "function",
        "title": "fromDistinctAscOccurList"
      },
      "index": {
        "description": "Build multiset from an ascending list of elements occurence pairs where each elements appears only once The precondition input list is strictly ascending is not checked",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "fromDistinctAscOccurList",
        "normalized": "[(Int,Int)]-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Distinct Asc Occur List",
        "signature": "[(Int,Int)]-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t*min(n,W))\u003c/em\u003e. Create a multiset from a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "[Int] -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "min Create multiset from list of elements",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "fromList",
        "normalized": "[Int]-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "List",
        "signature": "[Int]-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e from elements to occurrences to a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMap Int -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#fromMap",
        "fct-type": "function",
        "title": "fromMap"
      },
      "index": {
        "description": "Convert an IntMap from elements to occurrences to multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "fromMap",
        "normalized": "IntMap Int-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Map",
        "signature": "IntMap Int-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromOccurList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e. Create a multiset from a list of element/occurence pairs.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "[(Int, Int)] -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#fromOccurList",
        "fct-type": "function",
        "title": "fromOccurList"
      },
      "index": {
        "description": "min Create multiset from list of element occurence pairs",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "fromOccurList",
        "normalized": "[(Int,Int)]-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Occur List",
        "signature": "[(Int,Int)]-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromOccurMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Convert an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e from elements to occurrences to a multiset.\n Assumes that the \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e contains only values larger than one.\n \u003cem\u003eThe precondition (all elements \u003e 1) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMap Int -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#fromOccurMap",
        "fct-type": "function",
        "title": "fromOccurMap"
      },
      "index": {
        "description": "Convert an IntMap from elements to occurrences to multiset Assumes that the IntMap contains only values larger than one The precondition all elements is not checked",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "fromOccurMap",
        "normalized": "IntMap Int-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Occur Map",
        "signature": "IntMap Int-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromSet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e to a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#fromSet",
        "fct-type": "function",
        "title": "fromSet"
      },
      "index": {
        "description": "Convert an IntMap to multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "fromSet",
        "normalized": "IntSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Set",
        "signature": "IntSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Insert an element in a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "Key -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "min Insert an element in multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "insert",
        "normalized": "Key-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "",
        "signature": "Key-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:insertMany",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Insert an element in a multiset a given number of times.\n\u003c/p\u003e\u003cp\u003eNegative numbers remove occurences of the given element.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "Key -\u003e Occur -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#insertMany",
        "fct-type": "function",
        "title": "insertMany"
      },
      "index": {
        "description": "min Insert an element in multiset given number of times Negative numbers remove occurences of the given element",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "insertMany",
        "normalized": "Key-\u003eOccur-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Many",
        "signature": "Key-\u003eOccur-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The intersection of two multisets.\n\u003c/p\u003e\u003cp\u003eprints \u003ccode\u003e(fromList [A],fromList [B])\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "The intersection of two multisets prints fromList fromList",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "intersection",
        "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "",
        "signature": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:isProperSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntMultiSet -\u003e Bool",
        "fct-source": "src/Data-IntMultiSet.html#isProperSubsetOf",
        "fct-type": "function",
        "title": "isProperSubsetOf"
      },
      "index": {
        "description": "Is this proper subset ie subset but not equal",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "isProperSubsetOf",
        "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eBool",
        "package": "multiset",
        "partial": "Proper Subset Of",
        "signature": "IntMultiSet-\u003eIntMultiSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:isSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a subset?\n \u003ccode\u003e(s1 `isSubsetOf` s2)\u003c/code\u003e tells whether \u003ccode\u003es1\u003c/code\u003e is a subset of \u003ccode\u003es2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntMultiSet -\u003e Bool",
        "fct-source": "src/Data-IntMultiSet.html#isSubsetOf",
        "fct-type": "function",
        "title": "isSubsetOf"
      },
      "index": {
        "description": "Is this subset s1 isSubsetOf s2 tells whether s1 is subset of s2",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "isSubsetOf",
        "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eBool",
        "package": "multiset",
        "partial": "Subset Of",
        "signature": "IntMultiSet-\u003eIntMultiSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The monad join operation for multisets.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "The monad join operation for multisets",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "join",
        "normalized": "MultiSet IntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "",
        "signature": "MultiSet IntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e is the multiset obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "(Key -\u003e Key) -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "log map is the multiset obtained by applying to each element of",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "map",
        "normalized": "(Key-\u003eKey)-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "",
        "signature": "(Key-\u003eKey)-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:mapEither",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "(Key -\u003e Either Key Key) -\u003e IntMultiSet -\u003e (IntMultiSet, IntMultiSet)",
        "fct-source": "src/Data-IntMultiSet.html#mapEither",
        "fct-type": "function",
        "title": "mapEither"
      },
      "index": {
        "description": "Map and separate the Left and Right results",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "mapEither",
        "normalized": "(Key-\u003eEither Key Key)-\u003eIntMultiSet-\u003e(IntMultiSet,IntMultiSet)",
        "package": "multiset",
        "partial": "Either",
        "signature": "(Key-\u003eEither Key Key)-\u003eIntMultiSet-\u003e(IntMultiSet,IntMultiSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "(Key -\u003e Maybe Key) -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Map and collect the Just results",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "mapMaybe",
        "normalized": "(Key-\u003eMaybe Key)-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Maybe",
        "signature": "(Key-\u003eMaybe Key)-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:mapMonotonic",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapMonotonic\u003c/a\u003e\u003c/code\u003e f s == \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e, but works only when \u003ccode\u003ef\u003c/code\u003e is strictly monotonic.\n \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n Semi-formally, we have:\n\u003c/p\u003e\u003cpre\u003e and [x \u003c y ==\u003e f x \u003c f y | x \u003c- ls, y \u003c- ls]\n                     ==\u003e mapMonotonic f s == map f s\n     where ls = toList s\n\u003c/pre\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "(Key -\u003e Key) -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#mapMonotonic",
        "fct-type": "function",
        "title": "mapMonotonic"
      },
      "index": {
        "description": "The mapMonotonic map but works only when is strictly monotonic The precondition is not checked Semi-formally we have and ls ls mapMonotonic map where ls toList",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "mapMonotonic",
        "normalized": "(Key-\u003eKey)-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Monotonic",
        "signature": "(Key-\u003eKey)-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:maxUnion",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The union of two multisets.\n The number of occurences of each element in the union is\n the maximum of the number of occurences in the arguments (instead of the sum).\n\u003c/p\u003e\u003cp\u003eThe implementation uses the efficient \u003cem\u003ehedge-union\u003c/em\u003e algorithm.\n Hedge-union is more efficient on (bigset \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e smallset).\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#maxUnion",
        "fct-type": "function",
        "title": "maxUnion"
      },
      "index": {
        "description": "The union of two multisets The number of occurences of each element in the union is the maximum of the number of occurences in the arguments instead of the sum The implementation uses the efficient hedge-union algorithm Hedge-union is more efficient on bigset union smallset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "maxUnion",
        "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Union",
        "signature": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:maxView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the maximal element of the multiset, and the set stripped from that element\n \u003ccode\u003efail\u003c/code\u003es (in the monad) when passed an empty multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e m (Key, IntMultiSet)",
        "fct-source": "src/Data-IntMultiSet.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "log Retrieves the maximal element of the multiset and the set stripped from that element fail in the monad when passed an empty multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "maxView",
        "normalized": "IntMultiSet-\u003ea(Key,IntMultiSet)",
        "package": "multiset",
        "partial": "View",
        "signature": "IntMultiSet-\u003em(Key,IntMultiSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Is the element in the multiset?\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "Key -\u003e IntMultiSet -\u003e Bool",
        "fct-source": "src/Data-IntMultiSet.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "min Is the element in the multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "member",
        "normalized": "Key-\u003eIntMultiSet-\u003eBool",
        "package": "multiset",
        "partial": "",
        "signature": "Key-\u003eIntMultiSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the minimal element of the multiset, and the set stripped from that element\n \u003ccode\u003efail\u003c/code\u003es (in the monad) when passed an empty multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e m (Key, IntMultiSet)",
        "fct-source": "src/Data-IntMultiSet.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "log Retrieves the minimal element of the multiset and the set stripped from that element fail in the monad when passed an empty multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "minView",
        "normalized": "IntMultiSet-\u003ea(Key,IntMultiSet)",
        "package": "multiset",
        "partial": "View",
        "signature": "IntMultiSet-\u003em(Key,IntMultiSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Is the element not in the multiset?\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "Key -\u003e IntMultiSet -\u003e Bool",
        "fct-source": "src/Data-IntMultiSet.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "min Is the element not in the multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "notMember",
        "normalized": "Key-\u003eIntMultiSet-\u003eBool",
        "package": "multiset",
        "partial": "Member",
        "signature": "Key-\u003eIntMultiSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is this the empty multiset?\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e Bool",
        "fct-source": "src/Data-IntMultiSet.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is this the empty multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "null",
        "normalized": "IntMultiSet-\u003eBool",
        "package": "multiset",
        "partial": "",
        "signature": "IntMultiSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:occur",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. The number of occurences of an element in a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "Key -\u003e IntMultiSet -\u003e Int",
        "fct-source": "src/Data-IntMultiSet.html#occur",
        "fct-type": "function",
        "title": "occur"
      },
      "index": {
        "description": "min The number of occurences of an element in multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "occur",
        "normalized": "Key-\u003eIntMultiSet-\u003eInt",
        "package": "multiset",
        "partial": "",
        "signature": "Key-\u003eIntMultiSet-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the multiset into two multisets, one with all elements that satisfy\n the predicate and one with all elements that don't satisfy the predicate.\n See also \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "(Key -\u003e Bool) -\u003e IntMultiSet -\u003e (IntMultiSet, IntMultiSet)",
        "fct-source": "src/Data-IntMultiSet.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Partition the multiset into two multisets one with all elements that satisfy the predicate and one with all elements that don satisfy the predicate See also split",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "partition",
        "normalized": "(Key-\u003eBool)-\u003eIntMultiSet-\u003e(IntMultiSet,IntMultiSet)",
        "package": "multiset",
        "partial": "",
        "signature": "(Key-\u003eBool)-\u003eIntMultiSet-\u003e(IntMultiSet,IntMultiSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:showTree",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Show the tree that implements the set. The tree is shown\n in a compressed, hanging format.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e String",
        "fct-source": "src/Data-IntMultiSet.html#showTree",
        "fct-type": "function",
        "title": "showTree"
      },
      "index": {
        "description": "Show the tree that implements the set The tree is shown in compressed hanging format",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "showTree",
        "normalized": "IntMultiSet-\u003eString",
        "package": "multiset",
        "partial": "Tree",
        "signature": "IntMultiSet-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:showTreeWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The expression (\u003ccode\u003eshowTreeWith hang wide map\u003c/code\u003e) shows\n the tree that implements the set. If \u003ccode\u003ehang\u003c/code\u003e is\n \u003ccode\u003eTrue\u003c/code\u003e, a \u003cem\u003ehanging\u003c/em\u003e tree is shown otherwise a rotated tree is shown. If\n \u003ccode\u003ewide\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, an extra wide version is shown.\n\u003c/p\u003e\u003cpre\u003e Set\u003e putStrLn $ showTreeWith True False $ fromDistinctAscList [1,1,2,3,4,5]\n (1*) 4\n +--(1*) 2\n |  +--(2*) 1\n |  +--(1*) 3\n +--(1*) 5\n \n Set\u003e putStrLn $ showTreeWith True True $ fromDistinctAscList [1,1,2,3,4,5]\n (1*) 4\n |\n +--(1*) 2\n |  |\n |  +--(2*) 1\n |  |\n |  +--(1*) 3\n |\n +--(1*) 5\n \n Set\u003e putStrLn $ showTreeWith False True $ fromDistinctAscList [1,1,2,3,4,5]\n +--(1*) 5\n |\n (1*) 4\n |\n |  +--(1*) 3\n |  |\n +--(1*) 2\n    |\n    +--(2*) 1\n\u003c/pre\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "Bool -\u003e Bool -\u003e IntMultiSet -\u003e String",
        "fct-source": "src/Data-IntMultiSet.html#showTreeWith",
        "fct-type": "function",
        "title": "showTreeWith"
      },
      "index": {
        "description": "The expression showTreeWith hang wide map shows the tree that implements the set If hang is True hanging tree is shown otherwise rotated tree is shown If wide is True an extra wide version is shown Set putStrLn showTreeWith True False fromDistinctAscList Set putStrLn showTreeWith True True fromDistinctAscList Set putStrLn showTreeWith False True fromDistinctAscList",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "showTreeWith",
        "normalized": "Bool-\u003eBool-\u003eIntMultiSet-\u003eString",
        "package": "multiset",
        "partial": "Tree With",
        "signature": "Bool-\u003eBool-\u003eIntMultiSet-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Create a singleton mutli set.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "Key -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Create singleton mutli set",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "singleton",
        "normalized": "Key-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "",
        "signature": "Key-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The number of elements in the multiset.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e Int",
        "fct-source": "src/Data-IntMultiSet.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the multiset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "size",
        "normalized": "IntMultiSet-\u003eInt",
        "package": "multiset",
        "partial": "",
        "signature": "IntMultiSet-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e x set\u003c/code\u003e) is a pair \u003ccode\u003e(set1,set2)\u003c/code\u003e\n where all elements in \u003ccode\u003eset1\u003c/code\u003e are lower than \u003ccode\u003ex\u003c/code\u003e and all elements in\n \u003ccode\u003eset2\u003c/code\u003e larger than \u003ccode\u003ex\u003c/code\u003e. \u003ccode\u003ex\u003c/code\u003e is not found in neither \u003ccode\u003eset1\u003c/code\u003e nor \u003ccode\u003eset2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "Int -\u003e IntMultiSet -\u003e (IntMultiSet, IntMultiSet)",
        "fct-source": "src/Data-IntMultiSet.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "log The expression split set is pair set1 set2 where all elements in set1 are lower than and all elements in set2 larger than is not found in neither set1 nor set2",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "split",
        "normalized": "Int-\u003eIntMultiSet-\u003e(IntMultiSet,IntMultiSet)",
        "package": "multiset",
        "partial": "",
        "signature": "Int-\u003eIntMultiSet-\u003e(IntMultiSet,IntMultiSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:splitOccur",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Performs a \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e but also returns the number of\n occurences of the pivot element in the original set.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "Int -\u003e IntMultiSet -\u003e (IntMultiSet, Int, IntMultiSet)",
        "fct-source": "src/Data-IntMultiSet.html#splitOccur",
        "fct-type": "function",
        "title": "splitOccur"
      },
      "index": {
        "description": "log Performs split but also returns the number of occurences of the pivot element in the original set",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "splitOccur",
        "normalized": "Int-\u003eIntMultiSet-\u003e(IntMultiSet,Int,IntMultiSet)",
        "package": "multiset",
        "partial": "Occur",
        "signature": "Int-\u003eIntMultiSet-\u003e(IntMultiSet,Int,IntMultiSet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Convert the multiset to an ascending list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e [Key]",
        "fct-source": "src/Data-IntMultiSet.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Convert the multiset to an ascending list of elements",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "toAscList",
        "normalized": "IntMultiSet-\u003e[Key]",
        "package": "multiset",
        "partial": "Asc List",
        "signature": "IntMultiSet-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:toAscOccurList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the multiset to an ascending list of element/occurence pairs.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e [(Int, Int)]",
        "fct-source": "src/Data-IntMultiSet.html#toAscOccurList",
        "fct-type": "function",
        "title": "toAscOccurList"
      },
      "index": {
        "description": "Convert the multiset to an ascending list of element occurence pairs",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "toAscOccurList",
        "normalized": "IntMultiSet-\u003e[(Int,Int)]",
        "package": "multiset",
        "partial": "Asc Occur List",
        "signature": "IntMultiSet-\u003e[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Convert the multiset to a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e [Key]",
        "fct-source": "src/Data-IntMultiSet.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert the multiset to list of elements",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "toList",
        "normalized": "IntMultiSet-\u003e[Key]",
        "package": "multiset",
        "partial": "List",
        "signature": "IntMultiSet-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:toMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Convert a multiset to an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e from elements to number of occurrences.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntMap Int",
        "fct-source": "src/Data-IntMultiSet.html#toMap",
        "fct-type": "function",
        "title": "toMap"
      },
      "index": {
        "description": "Convert multiset to an IntMap from elements to number of occurrences",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "toMap",
        "normalized": "IntMultiSet-\u003eIntMap Int",
        "package": "multiset",
        "partial": "Map",
        "signature": "IntMultiSet-\u003eIntMap Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:toOccurList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the multiset to a list of element/occurence pairs.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e [(Int, Int)]",
        "fct-source": "src/Data-IntMultiSet.html#toOccurList",
        "fct-type": "function",
        "title": "toOccurList"
      },
      "index": {
        "description": "Convert the multiset to list of element occurence pairs",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "toOccurList",
        "normalized": "IntMultiSet-\u003e[(Int,Int)]",
        "package": "multiset",
        "partial": "Occur List",
        "signature": "IntMultiSet-\u003e[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:toSet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a multiset to an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e, removing duplicates.\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntSet",
        "fct-source": "src/Data-IntMultiSet.html#toSet",
        "fct-type": "function",
        "title": "toSet"
      },
      "index": {
        "description": "Convert multiset to an IntMap removing duplicates",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "toSet",
        "normalized": "IntMultiSet-\u003eIntSet",
        "package": "multiset",
        "partial": "Set",
        "signature": "IntMultiSet-\u003eIntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The union of two multisets. The union adds the occurences together.\n\u003c/p\u003e\u003cp\u003eThe implementation uses the efficient \u003cem\u003ehedge-union\u003c/em\u003e algorithm.\n Hedge-union is more efficient on (bigset \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e smallset).\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "IntMultiSet -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "The union of two multisets The union adds the occurences together The implementation uses the efficient hedge-union algorithm Hedge-union is more efficient on bigset union smallset",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "union",
        "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "",
        "signature": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of multisets: (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "[IntMultiSet] -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "The union of list of multisets unions foldl union empty",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "unions",
        "normalized": "[IntMultiSet]-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "",
        "signature": "[IntMultiSet]-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:unionsMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Apply a function to each element, and take the union of the results\n\u003c/p\u003e",
        "fct-module": "Data.IntMultiSet",
        "fct-package": "multiset",
        "fct-signature": "(Key -\u003e IntMultiSet) -\u003e IntMultiSet -\u003e IntMultiSet",
        "fct-source": "src/Data-IntMultiSet.html#unionsMap",
        "fct-type": "function",
        "title": "unionsMap"
      },
      "index": {
        "description": "Apply function to each element and take the union of the results",
        "hierarchy": "Data IntMultiSet",
        "module": "Data.IntMultiSet",
        "name": "unionsMap",
        "normalized": "(Key-\u003eIntMultiSet)-\u003eIntMultiSet-\u003eIntMultiSet",
        "package": "multiset",
        "partial": "Map",
        "signature": "(Key-\u003eIntMultiSet)-\u003eIntMultiSet-\u003eIntMultiSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of multisets, also somtimes called bags.\n\u003c/p\u003e\u003cp\u003eA multiset is like a set, but it can contain multiple copies of the same element.\n Unless otherwise specified all insert and remove opertions affect only a single copy of an element.\n For example the minimal element before and after \u003ccode\u003edeleteMin\u003c/code\u003e could be the same, only with one less occurence.\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.MultiSet (MultiSet)\n  import qualified Data.MultiSet as MultiSet\n\u003c/pre\u003e\u003cp\u003eThe implementation of \u003ccode\u003e\u003ca\u003eMultiSet\u003c/a\u003e\u003c/code\u003e is based on the \u003ca\u003eData.Map\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eNote that the implementation is \u003cem\u003eleft-biased\u003c/em\u003e -- the elements of a\n first argument are always preferred to the second, for example in\n \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.  Of course, left-biasing can only be observed\n when equality is an equivalence relation instead of structural\n equality.\n\u003c/p\u003e\u003cp\u003eIn the complexity of functions \u003cem\u003en\u003c/em\u003e refers to the number of distinct elements,\n \u003cem\u003et\u003c/em\u003e is the total number of elements.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "module",
        "fct-source": "src/Data-MultiSet.html",
        "fct-type": "module",
        "title": "MultiSet"
      },
      "index": {
        "description": "An efficient implementation of multisets also somtimes called bags multiset is like set but it can contain multiple copies of the same element Unless otherwise specified all insert and remove opertions affect only single copy of an element For example the minimal element before and after deleteMin could be the same only with one less occurence Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.MultiSet MultiSet import qualified Data.MultiSet as MultiSet The implementation of MultiSet is based on the Data.Map module Note that the implementation is left-biased the elements of first argument are always preferred to the second for example in union or insert Of course left-biasing can only be observed when equality is an equivalence relation instead of structural equality In the complexity of functions refers to the number of distinct elements is the total number of elements",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "MultiSet",
        "normalized": "",
        "package": "multiset",
        "partial": "Multi Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#t:MultiSet",
      "description": {
        "fct-descr": "\u003cp\u003eA multiset of values \u003ccode\u003ea\u003c/code\u003e.\n   The same value can occur multiple times.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "data",
        "fct-source": "src/Data-MultiSet.html#MultiSet",
        "fct-type": "data",
        "title": "MultiSet"
      },
      "index": {
        "description": "multiset of values The same value can occur multiple times",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "MultiSet",
        "normalized": "",
        "package": "multiset",
        "partial": "Multi Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#t:Occur",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of occurences of an element\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "type",
        "fct-source": "src/Data-MultiSet.html#Occur",
        "fct-type": "type",
        "title": "Occur"
      },
      "index": {
        "description": "The number of occurences of an element",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "Occur",
        "normalized": "",
        "package": "multiset",
        "partial": "Occur",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "See difference",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "(\\\\) \\\\",
        "normalized": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "",
        "signature": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:bind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The monad bind operation, (\u003e\u003e=), for multisets.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e (a -\u003e MultiSet b) -\u003e MultiSet b",
        "fct-source": "src/Data-MultiSet.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "The monad bind operation for multisets",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "bind",
        "normalized": "MultiSet a-\u003e(a-\u003eMultiSet b)-\u003eMultiSet b",
        "package": "multiset",
        "partial": "",
        "signature": "MultiSet a-\u003e(a-\u003eMultiSet b)-\u003eMultiSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Apply a function to each element, and take the union of the results\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "(a -\u003e [b]) -\u003e MultiSet a -\u003e MultiSet b",
        "fct-source": "src/Data-MultiSet.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "Apply function to each element and take the union of the results",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "concatMap",
        "normalized": "(a-\u003e[b])-\u003eMultiSet a-\u003eMultiSet b",
        "package": "multiset",
        "partial": "Map",
        "signature": "(a-\u003e[b])-\u003eMultiSet a-\u003eMultiSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a single element from a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "a -\u003e MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Delete single element from multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "delete",
        "normalized": "a-\u003eMultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "",
        "signature": "a-\u003eMultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete all occurences of an element from a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "a -\u003e MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#deleteAll",
        "fct-type": "function",
        "title": "deleteAll"
      },
      "index": {
        "description": "log Delete all occurences of an element from multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "deleteAll",
        "normalized": "a-\u003eMultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "All",
        "signature": "a-\u003eMultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteFindMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the maximal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMax set = (findMax set, deleteMax set)\n\u003c/pre\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e (a, MultiSet a)",
        "fct-source": "src/Data-MultiSet.html#deleteFindMax",
        "fct-type": "function",
        "title": "deleteFindMax"
      },
      "index": {
        "description": "log Delete and find the maximal element deleteFindMax set findMax set deleteMax set",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "deleteFindMax",
        "normalized": "MultiSet a-\u003e(a,MultiSet a)",
        "package": "multiset",
        "partial": "Find Max",
        "signature": "MultiSet a-\u003e(a,MultiSet a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteFindMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the minimal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMin set = (findMin set, deleteMin set)\n\u003c/pre\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e (a, MultiSet a)",
        "fct-source": "src/Data-MultiSet.html#deleteFindMin",
        "fct-type": "function",
        "title": "deleteFindMin"
      },
      "index": {
        "description": "log Delete and find the minimal element deleteFindMin set findMin set deleteMin set",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "deleteFindMin",
        "normalized": "MultiSet a-\u003e(a,MultiSet a)",
        "package": "multiset",
        "partial": "Find Min",
        "signature": "MultiSet a-\u003e(a,MultiSet a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteMany",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete an element from a multiset a given number of times.\n\u003c/p\u003e\u003cp\u003eNegative numbers add occurences of the given element.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "a -\u003e Occur -\u003e MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#deleteMany",
        "fct-type": "function",
        "title": "deleteMany"
      },
      "index": {
        "description": "log Delete an element from multiset given number of times Negative numbers add occurences of the given element",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "deleteMany",
        "normalized": "a-\u003eOccur-\u003eMultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Many",
        "signature": "a-\u003eOccur-\u003eMultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the maximal element.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "log Delete the maximal element",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "deleteMax",
        "normalized": "MultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Max",
        "signature": "MultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteMaxAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete all occurences of the maximal element.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#deleteMaxAll",
        "fct-type": "function",
        "title": "deleteMaxAll"
      },
      "index": {
        "description": "log Delete all occurences of the maximal element",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "deleteMaxAll",
        "normalized": "MultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Max All",
        "signature": "MultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the minimal element.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "log Delete the minimal element",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "deleteMin",
        "normalized": "MultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Min",
        "signature": "MultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteMinAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete all occurences of the minimal element.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#deleteMinAll",
        "fct-type": "function",
        "title": "deleteMinAll"
      },
      "index": {
        "description": "log Delete all occurences of the minimal element",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "deleteMinAll",
        "normalized": "MultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Min All",
        "signature": "MultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference of two multisets. \n The implementation uses an efficient \u003cem\u003ehedge\u003c/em\u003e algorithm comparable with \u003cem\u003ehedge-union\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "Difference of two multisets The implementation uses an efficient hedge algorithm comparable with hedge-union",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "difference",
        "normalized": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "",
        "signature": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:distinctElems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The distinct elements of a multiset, each element occurs only once in the list.\n\u003c/p\u003e\u003cpre\u003e distinctElems = map fst . toOccurList\n\u003c/pre\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e [a]",
        "fct-source": "src/Data-MultiSet.html#distinctElems",
        "fct-type": "function",
        "title": "distinctElems"
      },
      "index": {
        "description": "The distinct elements of multiset each element occurs only once in the list distinctElems map fst toOccurList",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "distinctElems",
        "normalized": "MultiSet a-\u003e[a]",
        "package": "multiset",
        "partial": "Elems",
        "signature": "MultiSet a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:distinctSize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of distinct elements in the multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e Occur",
        "fct-source": "src/Data-MultiSet.html#distinctSize",
        "fct-type": "function",
        "title": "distinctSize"
      },
      "index": {
        "description": "The number of distinct elements in the multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "distinctSize",
        "normalized": "MultiSet a-\u003eOccur",
        "package": "multiset",
        "partial": "Size",
        "signature": "MultiSet a-\u003eOccur"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. The elements of a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e [a]",
        "fct-source": "src/Data-MultiSet.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "The elements of multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "elems",
        "normalized": "MultiSet a-\u003e[a]",
        "package": "multiset",
        "partial": "",
        "signature": "MultiSet a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty mutli set.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a",
        "fct-source": "src/Data-MultiSet.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty mutli set",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "empty",
        "normalized": "",
        "package": "multiset",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all elements that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "(a -\u003e Bool) -\u003e MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter all elements that satisfy the predicate",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eMultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The maximal element of a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e a",
        "fct-source": "src/Data-MultiSet.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "log The maximal element of multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "findMax",
        "normalized": "MultiSet a-\u003ea",
        "package": "multiset",
        "partial": "Max",
        "signature": "MultiSet a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The minimal element of a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e a",
        "fct-source": "src/Data-MultiSet.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "log The minimal element of multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "findMin",
        "normalized": "MultiSet a-\u003ea",
        "package": "multiset",
        "partial": "Min",
        "signature": "MultiSet a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Fold over the elements of a multiset in an unspecified order.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e MultiSet a -\u003e b",
        "fct-source": "src/Data-MultiSet.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Fold over the elements of multiset in an unspecified order",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMultiSet a-\u003eb",
        "package": "multiset",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMultiSet a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:foldOccur",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold over the elements of a multiset with their occurences.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "(a -\u003e Occur -\u003e b -\u003e b) -\u003e b -\u003e MultiSet a -\u003e b",
        "fct-source": "src/Data-MultiSet.html#foldOccur",
        "fct-type": "function",
        "title": "foldOccur"
      },
      "index": {
        "description": "Fold over the elements of multiset with their occurences",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "foldOccur",
        "normalized": "(a-\u003eOccur-\u003eb-\u003eb)-\u003eb-\u003eMultiSet a-\u003eb",
        "package": "multiset",
        "partial": "Occur",
        "signature": "(a-\u003eOccur-\u003eb-\u003eb)-\u003eb-\u003eMultiSet a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Build a multiset from an ascending list in linear time.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "[a] -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Build multiset from an ascending list in linear time The precondition input list is ascending is not checked",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "fromAscList",
        "normalized": "[a]-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Asc List",
        "signature": "[a]-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromAscOccurList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a multiset from an ascending list of element/occurence pairs in linear time.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "[(a, Occur)] -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#fromAscOccurList",
        "fct-type": "function",
        "title": "fromAscOccurList"
      },
      "index": {
        "description": "Build multiset from an ascending list of element occurence pairs in linear time The precondition input list is ascending is not checked",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "fromAscOccurList",
        "normalized": "[(a,Occur)]-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Asc Occur List",
        "signature": "[(a,Occur)]-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromDistinctAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a multiset from an ascending list of distinct elements in linear time.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "[a] -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#fromDistinctAscList",
        "fct-type": "function",
        "title": "fromDistinctAscList"
      },
      "index": {
        "description": "Build multiset from an ascending list of distinct elements in linear time The precondition input list is strictly ascending is not checked",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "fromDistinctAscList",
        "normalized": "[a]-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Distinct Asc List",
        "signature": "[a]-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromDistinctAscOccurList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a multiset from an ascending list of elements/occurence pairs where each elements appears only once.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "[(a, Occur)] -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#fromDistinctAscOccurList",
        "fct-type": "function",
        "title": "fromDistinctAscOccurList"
      },
      "index": {
        "description": "Build multiset from an ascending list of elements occurence pairs where each elements appears only once The precondition input list is strictly ascending is not checked",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "fromDistinctAscOccurList",
        "normalized": "[(a,Occur)]-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Distinct Asc Occur List",
        "signature": "[(a,Occur)]-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t*log t)\u003c/em\u003e. Create a multiset from a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "[a] -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "log Create multiset from list of elements",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "fromList",
        "normalized": "[a]-\u003eMultiSet a",
        "package": "multiset",
        "partial": "List",
        "signature": "[a]-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from elements to occurrences to a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "Map a Occur -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#fromMap",
        "fct-type": "function",
        "title": "fromMap"
      },
      "index": {
        "description": "Convert Map from elements to occurrences to multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "fromMap",
        "normalized": "Map a Occur-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Map",
        "signature": "Map a Occur-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromOccurList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Create a multiset from a list of element/occurence pairs.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "[(a, Occur)] -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#fromOccurList",
        "fct-type": "function",
        "title": "fromOccurList"
      },
      "index": {
        "description": "log Create multiset from list of element occurence pairs",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "fromOccurList",
        "normalized": "[(a,Occur)]-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Occur List",
        "signature": "[(a,Occur)]-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromOccurMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from elements to occurrences to a multiset.\n Assumes that the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e contains only values larger than one.\n \u003cem\u003eThe precondition (all elements \u003e 1) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "Map a Occur -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#fromOccurMap",
        "fct-type": "function",
        "title": "fromOccurMap"
      },
      "index": {
        "description": "Convert Map from elements to occurrences to multiset Assumes that the Map contains only values larger than one The precondition all elements is not checked",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "fromOccurMap",
        "normalized": "Map a Occur-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Occur Map",
        "signature": "Map a Occur-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromSet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e to a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "Set a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#fromSet",
        "fct-type": "function",
        "title": "fromSet"
      },
      "index": {
        "description": "Convert Set to multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "fromSet",
        "normalized": "Set a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Set",
        "signature": "Set a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert an element in a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "a -\u003e MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Insert an element in multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "insert",
        "normalized": "a-\u003eMultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "",
        "signature": "a-\u003eMultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:insertMany",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert an element in a multiset a given number of times.\n\u003c/p\u003e\u003cp\u003eNegative numbers remove occurences of the given element.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "a -\u003e Occur -\u003e MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#insertMany",
        "fct-type": "function",
        "title": "insertMany"
      },
      "index": {
        "description": "log Insert an element in multiset given number of times Negative numbers remove occurences of the given element",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "insertMany",
        "normalized": "a-\u003eOccur-\u003eMultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Many",
        "signature": "a-\u003eOccur-\u003eMultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The intersection of two multisets.\n Elements of the result come from the first multiset, so for example\n\u003c/p\u003e\u003cpre\u003e import qualified Data.MultiSet as MS\n data AB = A | B deriving Show\n instance Ord AB where compare _ _ = EQ\n instance Eq AB where _ == _ = True\n main = print (MS.singleton A `MS.intersection` MS.singleton B,\n               MS.singleton B `MS.intersection` MS.singleton A)\n\u003c/pre\u003e\u003cp\u003eprints \u003ccode\u003e(fromList [A],fromList [B])\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "The intersection of two multisets Elements of the result come from the first multiset so for example import qualified Data.MultiSet as MS data AB deriving Show instance Ord AB where compare EQ instance Eq AB where True main print MS.singleton MS.intersection MS.singleton MS.singleton MS.intersection MS.singleton prints fromList fromList",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "intersection",
        "normalized": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "",
        "signature": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:isProperSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e MultiSet a -\u003e Bool",
        "fct-source": "src/Data-MultiSet.html#isProperSubsetOf",
        "fct-type": "function",
        "title": "isProperSubsetOf"
      },
      "index": {
        "description": "Is this proper subset ie subset but not equal",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "isProperSubsetOf",
        "normalized": "MultiSet a-\u003eMultiSet a-\u003eBool",
        "package": "multiset",
        "partial": "Proper Subset Of",
        "signature": "MultiSet a-\u003eMultiSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:isSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a subset?\n \u003ccode\u003e(s1 `isSubsetOf` s2)\u003c/code\u003e tells whether \u003ccode\u003es1\u003c/code\u003e is a subset of \u003ccode\u003es2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e MultiSet a -\u003e Bool",
        "fct-source": "src/Data-MultiSet.html#isSubsetOf",
        "fct-type": "function",
        "title": "isSubsetOf"
      },
      "index": {
        "description": "Is this subset s1 isSubsetOf s2 tells whether s1 is subset of s2",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "isSubsetOf",
        "normalized": "MultiSet a-\u003eMultiSet a-\u003eBool",
        "package": "multiset",
        "partial": "Subset Of",
        "signature": "MultiSet a-\u003eMultiSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The monad join operation for multisets.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet (MultiSet a) -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "The monad join operation for multisets",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "join",
        "normalized": "MultiSet(MultiSet a)-\u003eMultiSet a",
        "package": "multiset",
        "partial": "",
        "signature": "MultiSet(MultiSet a)-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e is the multiset obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "(a -\u003e b) -\u003e MultiSet a -\u003e MultiSet b",
        "fct-source": "src/Data-MultiSet.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "log map is the multiset obtained by applying to each element of",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eMultiSet a-\u003eMultiSet b",
        "package": "multiset",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eMultiSet a-\u003eMultiSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:mapEither",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "(a -\u003e Either b c) -\u003e MultiSet a -\u003e (MultiSet b, MultiSet c)",
        "fct-source": "src/Data-MultiSet.html#mapEither",
        "fct-type": "function",
        "title": "mapEither"
      },
      "index": {
        "description": "Map and separate the Left and Right results",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "mapEither",
        "normalized": "(a-\u003eEither b c)-\u003eMultiSet a-\u003e(MultiSet b,MultiSet c)",
        "package": "multiset",
        "partial": "Either",
        "signature": "(a-\u003eEither b c)-\u003eMultiSet a-\u003e(MultiSet b,MultiSet c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "(a -\u003e Maybe b) -\u003e MultiSet a -\u003e MultiSet b",
        "fct-source": "src/Data-MultiSet.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Map and collect the Just results",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eMultiSet a-\u003eMultiSet b",
        "package": "multiset",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eMultiSet a-\u003eMultiSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:mapMonotonic",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapMonotonic\u003c/a\u003e\u003c/code\u003e f s == \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e, but works only when \u003ccode\u003ef\u003c/code\u003e is strictly monotonic.\n \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n Semi-formally, we have:\n\u003c/p\u003e\u003cpre\u003e and [x \u003c y ==\u003e f x \u003c f y | x \u003c- ls, y \u003c- ls]\n                     ==\u003e mapMonotonic f s == map f s\n     where ls = toList s\n\u003c/pre\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "(a -\u003e b) -\u003e MultiSet a -\u003e MultiSet b",
        "fct-source": "src/Data-MultiSet.html#mapMonotonic",
        "fct-type": "function",
        "title": "mapMonotonic"
      },
      "index": {
        "description": "The mapMonotonic map but works only when is strictly monotonic The precondition is not checked Semi-formally we have and ls ls mapMonotonic map where ls toList",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "mapMonotonic",
        "normalized": "(a-\u003eb)-\u003eMultiSet a-\u003eMultiSet b",
        "package": "multiset",
        "partial": "Monotonic",
        "signature": "(a-\u003eb)-\u003eMultiSet a-\u003eMultiSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:maxUnion",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The union of two multisets.\n The number of occurences of each element in the union is\n the maximum of the number of occurences in the arguments (instead of the sum).\n\u003c/p\u003e\u003cp\u003eThe implementation uses the efficient \u003cem\u003ehedge-union\u003c/em\u003e algorithm.\n Hedge-union is more efficient on (bigset \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e smallset).\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#maxUnion",
        "fct-type": "function",
        "title": "maxUnion"
      },
      "index": {
        "description": "The union of two multisets The number of occurences of each element in the union is the maximum of the number of occurences in the arguments instead of the sum The implementation uses the efficient hedge-union algorithm Hedge-union is more efficient on bigset union smallset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "maxUnion",
        "normalized": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "Union",
        "signature": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:maxView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the maximal element of the multiset,\n   and the set with that element removed.\n   \u003ccode\u003efail\u003c/code\u003es (in the monad) when passed an empty multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e m (a, MultiSet a)",
        "fct-source": "src/Data-MultiSet.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "log Retrieves the maximal element of the multiset and the set with that element removed fail in the monad when passed an empty multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "maxView",
        "normalized": "MultiSet a-\u003eb(a,MultiSet a)",
        "package": "multiset",
        "partial": "View",
        "signature": "MultiSet a-\u003em(a,MultiSet a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the element in the multiset?\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "a -\u003e MultiSet a -\u003e Bool",
        "fct-source": "src/Data-MultiSet.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "log Is the element in the multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "member",
        "normalized": "a-\u003eMultiSet a-\u003eBool",
        "package": "multiset",
        "partial": "",
        "signature": "a-\u003eMultiSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the minimal element of the multiset,\n   and the set with that element removed.\n   \u003ccode\u003efail\u003c/code\u003es (in the monad) when passed an empty multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e m (a, MultiSet a)",
        "fct-source": "src/Data-MultiSet.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "log Retrieves the minimal element of the multiset and the set with that element removed fail in the monad when passed an empty multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "minView",
        "normalized": "MultiSet a-\u003eb(a,MultiSet a)",
        "package": "multiset",
        "partial": "View",
        "signature": "MultiSet a-\u003em(a,MultiSet a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the element not in the multiset?\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "a -\u003e MultiSet a -\u003e Bool",
        "fct-source": "src/Data-MultiSet.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "log Is the element not in the multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "notMember",
        "normalized": "a-\u003eMultiSet a-\u003eBool",
        "package": "multiset",
        "partial": "Member",
        "signature": "a-\u003eMultiSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is this the empty multiset?\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e Bool",
        "fct-source": "src/Data-MultiSet.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is this the empty multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "null",
        "normalized": "MultiSet a-\u003eBool",
        "package": "multiset",
        "partial": "",
        "signature": "MultiSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:occur",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The number of occurences of an element in a multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "a -\u003e MultiSet a -\u003e Occur",
        "fct-source": "src/Data-MultiSet.html#occur",
        "fct-type": "function",
        "title": "occur"
      },
      "index": {
        "description": "log The number of occurences of an element in multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "occur",
        "normalized": "a-\u003eMultiSet a-\u003eOccur",
        "package": "multiset",
        "partial": "",
        "signature": "a-\u003eMultiSet a-\u003eOccur"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the multiset into two multisets, one with all elements that satisfy\n the predicate and one with all elements that don't satisfy the predicate.\n See also \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "(a -\u003e Bool) -\u003e MultiSet a -\u003e (MultiSet a, MultiSet a)",
        "fct-source": "src/Data-MultiSet.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Partition the multiset into two multisets one with all elements that satisfy the predicate and one with all elements that don satisfy the predicate See also split",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eMultiSet a-\u003e(MultiSet a,MultiSet a)",
        "package": "multiset",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMultiSet a-\u003e(MultiSet a,MultiSet a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:showTree",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Show the tree that implements the set. The tree is shown\n in a compressed, hanging format.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e String",
        "fct-source": "src/Data-MultiSet.html#showTree",
        "fct-type": "function",
        "title": "showTree"
      },
      "index": {
        "description": "Show the tree that implements the set The tree is shown in compressed hanging format",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "showTree",
        "normalized": "MultiSet a-\u003eString",
        "package": "multiset",
        "partial": "Tree",
        "signature": "MultiSet a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:showTreeWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The expression (\u003ccode\u003eshowTreeWith hang wide map\u003c/code\u003e) shows\n the tree that implements the set. If \u003ccode\u003ehang\u003c/code\u003e is\n \u003ccode\u003eTrue\u003c/code\u003e, a \u003cem\u003ehanging\u003c/em\u003e tree is shown otherwise a rotated tree is shown. If\n \u003ccode\u003ewide\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, an extra wide version is shown.\n\u003c/p\u003e\u003cpre\u003e Set\u003e putStrLn $ showTreeWith True False $ fromDistinctAscList [1,1,2,3,4,5]\n (1*) 4\n +--(1*) 2\n |  +--(2*) 1\n |  +--(1*) 3\n +--(1*) 5\n \n Set\u003e putStrLn $ showTreeWith True True $ fromDistinctAscList [1,1,2,3,4,5]\n (1*) 4\n |\n +--(1*) 2\n |  |\n |  +--(2*) 1\n |  |\n |  +--(1*) 3\n |\n +--(1*) 5\n \n Set\u003e putStrLn $ showTreeWith False True $ fromDistinctAscList [1,1,2,3,4,5]\n +--(1*) 5\n |\n (1*) 4\n |\n |  +--(1*) 3\n |  |\n +--(1*) 2\n    |\n    +--(2*) 1\n\u003c/pre\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "Bool -\u003e Bool -\u003e MultiSet a -\u003e String",
        "fct-source": "src/Data-MultiSet.html#showTreeWith",
        "fct-type": "function",
        "title": "showTreeWith"
      },
      "index": {
        "description": "The expression showTreeWith hang wide map shows the tree that implements the set If hang is True hanging tree is shown otherwise rotated tree is shown If wide is True an extra wide version is shown Set putStrLn showTreeWith True False fromDistinctAscList Set putStrLn showTreeWith True True fromDistinctAscList Set putStrLn showTreeWith False True fromDistinctAscList",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "showTreeWith",
        "normalized": "Bool-\u003eBool-\u003eMultiSet a-\u003eString",
        "package": "multiset",
        "partial": "Tree With",
        "signature": "Bool-\u003eBool-\u003eMultiSet a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Create a singleton mutli set.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Create singleton mutli set",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "singleton",
        "normalized": "a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "",
        "signature": "a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The number of elements in the multiset.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e Occur",
        "fct-source": "src/Data-MultiSet.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the multiset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "size",
        "normalized": "MultiSet a-\u003eOccur",
        "package": "multiset",
        "partial": "",
        "signature": "MultiSet a-\u003eOccur"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e x set\u003c/code\u003e) is a pair \u003ccode\u003e(set1,set2)\u003c/code\u003e\n where all elements in \u003ccode\u003eset1\u003c/code\u003e are lower than \u003ccode\u003ex\u003c/code\u003e and all elements in\n \u003ccode\u003eset2\u003c/code\u003e larger than \u003ccode\u003ex\u003c/code\u003e. \u003ccode\u003ex\u003c/code\u003e is not found in neither \u003ccode\u003eset1\u003c/code\u003e nor \u003ccode\u003eset2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "a -\u003e MultiSet a -\u003e (MultiSet a, MultiSet a)",
        "fct-source": "src/Data-MultiSet.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "log The expression split set is pair set1 set2 where all elements in set1 are lower than and all elements in set2 larger than is not found in neither set1 nor set2",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "split",
        "normalized": "a-\u003eMultiSet a-\u003e(MultiSet a,MultiSet a)",
        "package": "multiset",
        "partial": "",
        "signature": "a-\u003eMultiSet a-\u003e(MultiSet a,MultiSet a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:splitOccur",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Performs a \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e but also returns the number of\n occurences of the pivot element in the original set.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "a -\u003e MultiSet a -\u003e (MultiSet a, Occur, MultiSet a)",
        "fct-source": "src/Data-MultiSet.html#splitOccur",
        "fct-type": "function",
        "title": "splitOccur"
      },
      "index": {
        "description": "log Performs split but also returns the number of occurences of the pivot element in the original set",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "splitOccur",
        "normalized": "a-\u003eMultiSet a-\u003e(MultiSet a,Occur,MultiSet a)",
        "package": "multiset",
        "partial": "Occur",
        "signature": "a-\u003eMultiSet a-\u003e(MultiSet a,Occur,MultiSet a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Convert the multiset to an ascending list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e [a]",
        "fct-source": "src/Data-MultiSet.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Convert the multiset to an ascending list of elements",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "toAscList",
        "normalized": "MultiSet a-\u003e[a]",
        "package": "multiset",
        "partial": "Asc List",
        "signature": "MultiSet a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:toAscOccurList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the multiset to an ascending list of element/occurence pairs.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e [(a, Occur)]",
        "fct-source": "src/Data-MultiSet.html#toAscOccurList",
        "fct-type": "function",
        "title": "toAscOccurList"
      },
      "index": {
        "description": "Convert the multiset to an ascending list of element occurence pairs",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "toAscOccurList",
        "normalized": "MultiSet a-\u003e[(a,Occur)]",
        "package": "multiset",
        "partial": "Asc Occur List",
        "signature": "MultiSet a-\u003e[(a,Occur)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Convert the multiset to a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e [a]",
        "fct-source": "src/Data-MultiSet.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert the multiset to list of elements",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "toList",
        "normalized": "MultiSet a-\u003e[a]",
        "package": "multiset",
        "partial": "List",
        "signature": "MultiSet a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:toMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Convert a multiset to a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from elements to number of occurrences.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e Map a Occur",
        "fct-source": "src/Data-MultiSet.html#toMap",
        "fct-type": "function",
        "title": "toMap"
      },
      "index": {
        "description": "Convert multiset to Map from elements to number of occurrences",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "toMap",
        "normalized": "MultiSet a-\u003eMap a Occur",
        "package": "multiset",
        "partial": "Map",
        "signature": "MultiSet a-\u003eMap a Occur"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:toOccurList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the multiset to a list of element/occurence pairs.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e [(a, Occur)]",
        "fct-source": "src/Data-MultiSet.html#toOccurList",
        "fct-type": "function",
        "title": "toOccurList"
      },
      "index": {
        "description": "Convert the multiset to list of element occurence pairs",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "toOccurList",
        "normalized": "MultiSet a-\u003e[(a,Occur)]",
        "package": "multiset",
        "partial": "Occur List",
        "signature": "MultiSet a-\u003e[(a,Occur)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:toSet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a multiset to a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e, removing duplicates.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e Set a",
        "fct-source": "src/Data-MultiSet.html#toSet",
        "fct-type": "function",
        "title": "toSet"
      },
      "index": {
        "description": "Convert multiset to Set removing duplicates",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "toSet",
        "normalized": "MultiSet a-\u003eSet a",
        "package": "multiset",
        "partial": "Set",
        "signature": "MultiSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The union of two multisets. The union adds the occurences together.\n\u003c/p\u003e\u003cp\u003eThe implementation uses the efficient \u003cem\u003ehedge-union\u003c/em\u003e algorithm.\n Hedge-union is more efficient on (bigset \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e smallset).\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e MultiSet a -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "The union of two multisets The union adds the occurences together The implementation uses the efficient hedge-union algorithm Hedge-union is more efficient on bigset union smallset",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "union",
        "normalized": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
        "package": "multiset",
        "partial": "",
        "signature": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of multisets: (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "[MultiSet a] -\u003e MultiSet a",
        "fct-source": "src/Data-MultiSet.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "The union of list of multisets unions foldl union empty",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "unions",
        "normalized": "[MultiSet a]-\u003eMultiSet a",
        "package": "multiset",
        "partial": "",
        "signature": "[MultiSet a]-\u003eMultiSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:unionsMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Apply a function to each element, and take the union of the results\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "(a -\u003e MultiSet b) -\u003e MultiSet a -\u003e MultiSet b",
        "fct-source": "src/Data-MultiSet.html#unionsMap",
        "fct-type": "function",
        "title": "unionsMap"
      },
      "index": {
        "description": "Apply function to each element and take the union of the results",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "unionsMap",
        "normalized": "(a-\u003eMultiSet b)-\u003eMultiSet a-\u003eMultiSet b",
        "package": "multiset",
        "partial": "Map",
        "signature": "(a-\u003eMultiSet b)-\u003eMultiSet a-\u003eMultiSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:valid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Test if the internal multiset structure is valid.\n\u003c/p\u003e",
        "fct-module": "Data.MultiSet",
        "fct-package": "multiset",
        "fct-signature": "MultiSet a -\u003e Bool",
        "fct-source": "src/Data-MultiSet.html#valid",
        "fct-type": "function",
        "title": "valid"
      },
      "index": {
        "description": "Test if the internal multiset structure is valid",
        "hierarchy": "Data MultiSet",
        "module": "Data.MultiSet",
        "name": "valid",
        "normalized": "MultiSet a-\u003eBool",
        "package": "multiset",
        "partial": "",
        "signature": "MultiSet a-\u003eBool"
      }
    }
  }
]