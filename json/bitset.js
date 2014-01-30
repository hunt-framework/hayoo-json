[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA space-efficient implementation of set data structure for enumerated\n data types.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Read below the synopsis for important notes on the use of\n this module.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions, e.g.\n\u003c/p\u003e\u003cpre\u003e import Data.BitSet.Dynamic (BitSet)\n import qualified Data.BitSet.Dynamic as BS\n\u003c/pre\u003e\u003cp\u003eThe implementation uses \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e as underlying container, thus it\n grows automatically when more elements are inserted into the bit set.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "module",
        "fct-source": "src/Data-BitSet-Dynamic.html",
        "fct-type": "module",
        "title": "Dynamic"
      },
      "index": {
        "description": "space-efficient implementation of set data structure for enumerated data types Note Read below the synopsis for important notes on the use of this module This module is intended to be imported qualified to avoid name clashes with Prelude functions e.g import Data.BitSet.Dynamic BitSet import qualified Data.BitSet.Dynamic as BS The implementation uses Integer as underlying container thus it grows automatically when more elements are inserted into the bit set",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "Dynamic",
        "normalized": "",
        "package": "bitset",
        "partial": "Dynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#t:BitSet",
      "description": {
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "type",
        "fct-source": "src/Data-BitSet-Dynamic.html#BitSet",
        "fct-type": "type",
        "title": "BitSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "BitSet",
        "normalized": "",
        "package": "bitset",
        "partial": "Bit Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#t:FasterInteger",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e which provides faster bit-level operations.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "newtype",
        "fct-source": "src/Data-BitSet-Dynamic.html#FasterInteger",
        "fct-type": "newtype",
        "title": "FasterInteger"
      },
      "index": {
        "description": "wrapper around Integer which provides faster bit-level operations",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "FasterInteger",
        "normalized": "",
        "package": "bitset",
        "partial": "Faster Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Dynamic.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "See difference",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "(\\\\) \\\\",
        "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:FasterInteger",
      "description": {
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "FasterInteger Integer",
        "fct-source": "src/Data-BitSet-Dynamic.html#FasterInteger",
        "fct-type": "function",
        "title": "FasterInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "FasterInteger",
        "normalized": "",
        "package": "bitset",
        "partial": "Faster Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Delete an item from the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Dynamic.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete an item from the bit set",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "delete",
        "normalized": "a-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "a-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Difference of two bit sets.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Dynamic.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "Difference of two bit sets",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "difference",
        "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "BitSet a",
        "fct-source": "src/Data-BitSet-Dynamic.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty bit set",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "empty",
        "normalized": "",
        "package": "bitset",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Filter this bit set by retaining only elements satisfying a\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "(a -\u003e Bool) -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Dynamic.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter this bit set by retaining only elements satisfying predicate",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this bit set by applying a binary function to all\n elements, using the given starting value.  Each application of the\n operator is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e BitSet a -\u003e b",
        "fct-source": "src/Data-BitSet-Dynamic.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Reduce this bit set by applying binary function to all elements using the given starting value Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eBitSet b-\u003ea",
        "package": "bitset",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eBitSet a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this bit set by applying a binary function to all\n elements, using the given starting value.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e BitSet a -\u003e b",
        "fct-source": "src/Data-BitSet-Dynamic.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Reduce this bit set by applying binary function to all elements using the given starting value",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eBitSet a-\u003eb",
        "package": "bitset",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eBitSet a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Make a bit set from a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "[a] -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Dynamic.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Make bit set from list of elements",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "fromList",
        "normalized": "[a]-\u003eBitSet a",
        "package": "bitset",
        "partial": "List",
        "signature": "[a]-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Insert an item into the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Dynamic.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert an item into the bit set",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "insert",
        "normalized": "a-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "a-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The intersection of two bit sets.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Dynamic.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "The intersection of two bit sets",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "intersection",
        "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:isProperSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(n, m)\u003c/em\u003e. Is this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e BitSet a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Dynamic.html#isProperSubsetOf",
        "fct-type": "function",
        "title": "isProperSubsetOf"
      },
      "index": {
        "description": "max Is this proper subset ie subset but not equal",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "isProperSubsetOf",
        "normalized": "BitSet a-\u003eBitSet a-\u003eBool",
        "package": "bitset",
        "partial": "Proper Subset Of",
        "signature": "BitSet a-\u003eBitSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:isSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(n, m))\u003c/em\u003e. Is this a subset? (\u003ccode\u003es1 isSubsetOf s2\u003c/code\u003e) tells whether\n \u003ccode\u003es1\u003c/code\u003e is a subset of \u003ccode\u003es2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e BitSet a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Dynamic.html#isSubsetOf",
        "fct-type": "function",
        "title": "isSubsetOf"
      },
      "index": {
        "description": "max Is this subset s1 isSubsetOf s2 tells whether s1 is subset of s2",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "isSubsetOf",
        "normalized": "BitSet a-\u003eBitSet a-\u003eBool",
        "package": "bitset",
        "partial": "Subset Of",
        "signature": "BitSet a-\u003eBitSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Transform this bit set by applying a function to every value.\n Resulting bit set may be smaller then the original.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "(a -\u003e b) -\u003e BitSet a -\u003e BitSet b",
        "fct-source": "src/Data-BitSet-Dynamic.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Transform this bit set by applying function to every value Resulting bit set may be smaller then the original",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eBitSet a-\u003eBitSet b",
        "package": "bitset",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eBitSet a-\u003eBitSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Ask whether the item is in the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Dynamic.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Ask whether the item is in the bit set",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "member",
        "normalized": "a-\u003eBitSet a-\u003eBool",
        "package": "bitset",
        "partial": "",
        "signature": "a-\u003eBitSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Ask whether the item is in the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Dynamic.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "Ask whether the item is in the bit set",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "notMember",
        "normalized": "a-\u003eBitSet a-\u003eBool",
        "package": "bitset",
        "partial": "Member",
        "signature": "a-\u003eBitSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the bit set empty?\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Dynamic.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the bit set empty",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "null",
        "normalized": "BitSet a-\u003eBool",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Create a singleton set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Dynamic.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Create singleton set",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "singleton",
        "normalized": "a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e Int",
        "fct-source": "src/Data-BitSet-Dynamic.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the bit set",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "size",
        "normalized": "BitSet a-\u003eInt",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the bit set set to a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e [a]",
        "fct-source": "src/Data-BitSet-Dynamic.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert the bit set set to list of elements",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "toList",
        "normalized": "BitSet a-\u003e[a]",
        "package": "bitset",
        "partial": "List",
        "signature": "BitSet a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(m, n))\u003c/em\u003e. The union of two bit sets.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Dynamic",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Dynamic.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "max The union of two bit sets",
        "hierarchy": "Data BitSet Dynamic",
        "module": "Data.BitSet.Dynamic",
        "name": "union",
        "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA space-efficient implementation of set data structure for enumerated\n data types.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Read below the synopsis for important notes on the use of\n this module.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions, e.g.\n\u003c/p\u003e\u003cpre\u003e import Data.BitSet.Generic (BitSet)\n import qualified Data.BitSet.Generic as BS\n\u003c/pre\u003e\u003cp\u003eThe implementation is abstract with respect to container type, so any\n numeric type with \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e instance can be used as a container. However,\n independent of container choice, the maximum number of elements in a\n bit set is bounded by \u003ccode\u003emaxBound :: Int\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "module",
        "fct-source": "src/Data-BitSet-Generic.html",
        "fct-type": "module",
        "title": "Generic"
      },
      "index": {
        "description": "space-efficient implementation of set data structure for enumerated data types Note Read below the synopsis for important notes on the use of this module This module is intended to be imported qualified to avoid name clashes with Prelude functions e.g import Data.BitSet.Generic BitSet import qualified Data.BitSet.Generic as BS The implementation is abstract with respect to container type so any numeric type with Bits instance can be used as container However independent of container choice the maximum number of elements in bit set is bounded by maxBound Int",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "Generic",
        "normalized": "",
        "package": "bitset",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#t:BitSet",
      "description": {
        "fct-descr": "\u003cp\u003eA bit set with unspecified container type.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "newtype",
        "fct-source": "src/Data-BitSet-Generic.html#BitSet",
        "fct-type": "newtype",
        "title": "BitSet"
      },
      "index": {
        "description": "bit set with unspecified container type",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "BitSet",
        "normalized": "",
        "package": "bitset",
        "partial": "Bit Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(m, n))\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "BitSet c a -\u003e BitSet c a -\u003e BitSet c a",
        "fct-source": "src/Data-BitSet-Generic.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "max See difference",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "(\\\\) \\\\",
        "normalized": "BitSet a b-\u003eBitSet a b-\u003eBitSet a b",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet c a-\u003eBitSet c a-\u003eBitSet c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:BitSet",
      "description": {
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "BitSet",
        "fct-source": "src/Data-BitSet-Generic.html#BitSet",
        "fct-type": "function",
        "title": "BitSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "BitSet",
        "normalized": "",
        "package": "bitset",
        "partial": "Bit Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(d)\u003c/em\u003e. Delete an item from the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet c a -\u003e BitSet c a",
        "fct-source": "src/Data-BitSet-Generic.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete an item from the bit set",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "delete",
        "normalized": "a-\u003eBitSet b a-\u003eBitSet b a",
        "package": "bitset",
        "partial": "",
        "signature": "a-\u003eBitSet c a-\u003eBitSet c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(m, n))\u003c/em\u003e. Difference of two bit sets.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "BitSet c a -\u003e BitSet c a -\u003e BitSet c a",
        "fct-source": "src/Data-BitSet-Generic.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "max Difference of two bit sets",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "difference",
        "normalized": "BitSet a b-\u003eBitSet a b-\u003eBitSet a b",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet c a-\u003eBitSet c a-\u003eBitSet c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "BitSet c a",
        "fct-source": "src/Data-BitSet-Generic.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty bit set",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "empty",
        "normalized": "",
        "package": "bitset",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(d * n)\u003c/em\u003e Filter this bit set by retaining only elements satisfying\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "(a -\u003e Bool) -\u003e BitSet c a -\u003e BitSet c a",
        "fct-source": "src/Data-BitSet-Generic.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter this bit set by retaining only elements satisfying predicate",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eBitSet b a-\u003eBitSet b a",
        "package": "bitset",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eBitSet c a-\u003eBitSet c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(d * n)\u003c/em\u003e Reduce this bit set by applying a binary function to all\n elements, using the given starting value.  Each application of the\n operator is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e BitSet c a -\u003e b",
        "fct-source": "src/Data-BitSet-Generic.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Reduce this bit set by applying binary function to all elements using the given starting value Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eBitSet c b-\u003ea",
        "package": "bitset",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eBitSet c a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(d * n)\u003c/em\u003e Reduce this bit set by applying a binary function to\n all elements, using the given starting value.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e BitSet c a -\u003e b",
        "fct-source": "src/Data-BitSet-Generic.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Reduce this bit set by applying binary function to all elements using the given starting value",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eBitSet c a-\u003eb",
        "package": "bitset",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eBitSet c a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(d * n)\u003c/em\u003e. Make a bit set from a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "[a] -\u003e BitSet c a",
        "fct-source": "src/Data-BitSet-Generic.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Make bit set from list of elements",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "fromList",
        "normalized": "[a]-\u003eBitSet b a",
        "package": "bitset",
        "partial": "List",
        "signature": "[a]-\u003eBitSet c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:getBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "c",
        "fct-source": "src/Data-BitSet-Generic.html#BitSet",
        "fct-type": "function",
        "title": "getBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "getBits",
        "normalized": "",
        "package": "bitset",
        "partial": "Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(d)\u003c/em\u003e. Insert an item into the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet c a -\u003e BitSet c a",
        "fct-source": "src/Data-BitSet-Generic.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert an item into the bit set",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "insert",
        "normalized": "a-\u003eBitSet b a-\u003eBitSet b a",
        "package": "bitset",
        "partial": "",
        "signature": "a-\u003eBitSet c a-\u003eBitSet c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(m, n))\u003c/em\u003e. The intersection of two bit sets.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "BitSet c a -\u003e BitSet c a -\u003e BitSet c a",
        "fct-source": "src/Data-BitSet-Generic.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "max The intersection of two bit sets",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "intersection",
        "normalized": "BitSet a b-\u003eBitSet a b-\u003eBitSet a b",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet c a-\u003eBitSet c a-\u003eBitSet c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:isProperSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(n, m)\u003c/em\u003e. Is this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "BitSet c a -\u003e BitSet c a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Generic.html#isProperSubsetOf",
        "fct-type": "function",
        "title": "isProperSubsetOf"
      },
      "index": {
        "description": "max Is this proper subset ie subset but not equal",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "isProperSubsetOf",
        "normalized": "BitSet a b-\u003eBitSet a b-\u003eBool",
        "package": "bitset",
        "partial": "Proper Subset Of",
        "signature": "BitSet c a-\u003eBitSet c a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:isSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(n, m))\u003c/em\u003e. Is this a subset? (\u003ccode\u003es1 \u003ccode\u003e\u003ca\u003eisSubsetOf\u003c/a\u003e\u003c/code\u003e s2\u003c/code\u003e) tells whether\n \u003ccode\u003es1\u003c/code\u003e is a subset of \u003ccode\u003es2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "BitSet c a -\u003e BitSet c a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Generic.html#isSubsetOf",
        "fct-type": "function",
        "title": "isSubsetOf"
      },
      "index": {
        "description": "max Is this subset s1 isSubsetOf s2 tells whether s1 is subset of s2",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "isSubsetOf",
        "normalized": "BitSet a b-\u003eBitSet a b-\u003eBool",
        "package": "bitset",
        "partial": "Subset Of",
        "signature": "BitSet c a-\u003eBitSet c a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(d * n)\u003c/em\u003e Transform this bit set by applying a function to every\n value.  Resulting bit set may be smaller then the original.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "(a -\u003e b) -\u003e BitSet c a -\u003e BitSet c b",
        "fct-source": "src/Data-BitSet-Generic.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Transform this bit set by applying function to every value Resulting bit set may be smaller then the original",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eBitSet c a-\u003eBitSet c b",
        "package": "bitset",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eBitSet c a-\u003eBitSet c b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(d)\u003c/em\u003e. Ask whether the item is in the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet c a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Generic.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Ask whether the item is in the bit set",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "member",
        "normalized": "a-\u003eBitSet b a-\u003eBool",
        "package": "bitset",
        "partial": "",
        "signature": "a-\u003eBitSet c a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(d)\u003c/em\u003e. Ask whether the item is not in the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet c a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Generic.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "Ask whether the item is not in the bit set",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "notMember",
        "normalized": "a-\u003eBitSet b a-\u003eBool",
        "package": "bitset",
        "partial": "Member",
        "signature": "a-\u003eBitSet c a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the bit set empty?\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "BitSet c a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Generic.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the bit set empty",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "null",
        "normalized": "BitSet a b-\u003eBool",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet c a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Create a singleton set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet c a",
        "fct-source": "src/Data-BitSet-Generic.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Create singleton set",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "singleton",
        "normalized": "a-\u003eBitSet b a",
        "package": "bitset",
        "partial": "",
        "signature": "a-\u003eBitSet c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "BitSet c a -\u003e Int",
        "fct-source": "src/Data-BitSet-Generic.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the bit set",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "size",
        "normalized": "BitSet a b-\u003eInt",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet c a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(d * n)\u003c/em\u003e. Convert this bit set set to a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "BitSet c a -\u003e [a]",
        "fct-source": "src/Data-BitSet-Generic.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert this bit set set to list of elements",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "toList",
        "normalized": "BitSet a b-\u003e[b]",
        "package": "bitset",
        "partial": "List",
        "signature": "BitSet c a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(m, n))\u003c/em\u003e. The union of two bit sets.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Generic",
        "fct-package": "bitset",
        "fct-signature": "BitSet c a -\u003e BitSet c a -\u003e BitSet c a",
        "fct-source": "src/Data-BitSet-Generic.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "max The union of two bit sets",
        "hierarchy": "Data BitSet Generic",
        "module": "Data.BitSet.Generic",
        "name": "union",
        "normalized": "BitSet a b-\u003eBitSet a b-\u003eBitSet a b",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet c a-\u003eBitSet c a-\u003eBitSet c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA space-efficient implementation of set data structure for enumerated\n data types.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Read below the synopsis for important notes on the use of\n this module.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions, e.g.\n\u003c/p\u003e\u003cpre\u003e import Data.BitSet.Word (BitSet)\n import qualified Data.BitSet.Word as BS\n\u003c/pre\u003e\u003cp\u003eThe implementation uses \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e as underlying container, thus the\n maximum number of elements you can store in this bit set is bounded\n by the number of bits in \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e data type. However, due to native bitwise\n operations \u003ca\u003eData.BitSet.Word\u003c/a\u003e is significantly faster then \u003ca\u003eData.Set\u003c/a\u003e\n on all operations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "module",
        "fct-source": "src/Data-BitSet-Word.html",
        "fct-type": "module",
        "title": "Word"
      },
      "index": {
        "description": "space-efficient implementation of set data structure for enumerated data types Note Read below the synopsis for important notes on the use of this module This module is intended to be imported qualified to avoid name clashes with Prelude functions e.g import Data.BitSet.Word BitSet import qualified Data.BitSet.Word as BS The implementation uses Word as underlying container thus the maximum number of elements you can store in this bit set is bounded by the number of bits in Word data type However due to native bitwise operations Data.BitSet.Word is significantly faster then Data.Set on all operations",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "Word",
        "normalized": "",
        "package": "bitset",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#t:BitSet",
      "description": {
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "type",
        "fct-source": "src/Data-BitSet-Word.html#BitSet",
        "fct-type": "type",
        "title": "BitSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "BitSet",
        "normalized": "",
        "package": "bitset",
        "partial": "Bit Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Word.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "See difference",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "(\\\\) \\\\",
        "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Delete an item from the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Word.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete an item from the bit set",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "delete",
        "normalized": "a-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "a-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Difference of two bit sets.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Word.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "Difference of two bit sets",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "difference",
        "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "BitSet a",
        "fct-source": "src/Data-BitSet-Word.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty bit set",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "empty",
        "normalized": "",
        "package": "bitset",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Filter this bit set by retaining only elements satisfying a\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "(a -\u003e Bool) -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Word.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter this bit set by retaining only elements satisfying predicate",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this bit set by applying a binary function to all\n elements, using the given starting value.  Each application of the\n operator is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e BitSet a -\u003e b",
        "fct-source": "src/Data-BitSet-Word.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Reduce this bit set by applying binary function to all elements using the given starting value Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eBitSet b-\u003ea",
        "package": "bitset",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eBitSet a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this bit set by applying a binary function to all\n elements, using the given starting value.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e BitSet a -\u003e b",
        "fct-source": "src/Data-BitSet-Word.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Reduce this bit set by applying binary function to all elements using the given starting value",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eBitSet a-\u003eb",
        "package": "bitset",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eBitSet a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Make a bit set from a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "[a] -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Word.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Make bit set from list of elements",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "fromList",
        "normalized": "[a]-\u003eBitSet a",
        "package": "bitset",
        "partial": "List",
        "signature": "[a]-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Insert an item into the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Word.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert an item into the bit set",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "insert",
        "normalized": "a-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "a-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The intersection of two bit sets.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Word.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "The intersection of two bit sets",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "intersection",
        "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:isProperSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e BitSet a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Word.html#isProperSubsetOf",
        "fct-type": "function",
        "title": "isProperSubsetOf"
      },
      "index": {
        "description": "Is this proper subset ie subset but not equal",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "isProperSubsetOf",
        "normalized": "BitSet a-\u003eBitSet a-\u003eBool",
        "package": "bitset",
        "partial": "Proper Subset Of",
        "signature": "BitSet a-\u003eBitSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:isSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is this a subset? (\u003ccode\u003es1 isSubsetOf s2\u003c/code\u003e) tells whether\n \u003ccode\u003es1\u003c/code\u003e is a subset of \u003ccode\u003es2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e BitSet a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Word.html#isSubsetOf",
        "fct-type": "function",
        "title": "isSubsetOf"
      },
      "index": {
        "description": "Is this subset s1 isSubsetOf s2 tells whether s1 is subset of s2",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "isSubsetOf",
        "normalized": "BitSet a-\u003eBitSet a-\u003eBool",
        "package": "bitset",
        "partial": "Subset Of",
        "signature": "BitSet a-\u003eBitSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Transform this bit set by applying a function to every value.\n Resulting bit set may be smaller then the original.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "(a -\u003e b) -\u003e BitSet a -\u003e BitSet b",
        "fct-source": "src/Data-BitSet-Word.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Transform this bit set by applying function to every value Resulting bit set may be smaller then the original",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eBitSet a-\u003eBitSet b",
        "package": "bitset",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eBitSet a-\u003eBitSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Ask whether the item is in the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Word.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Ask whether the item is in the bit set",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "member",
        "normalized": "a-\u003eBitSet a-\u003eBool",
        "package": "bitset",
        "partial": "",
        "signature": "a-\u003eBitSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Ask whether the item is in the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Word.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "Ask whether the item is in the bit set",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "notMember",
        "normalized": "a-\u003eBitSet a-\u003eBool",
        "package": "bitset",
        "partial": "Member",
        "signature": "a-\u003eBitSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the bit set empty?\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e Bool",
        "fct-source": "src/Data-BitSet-Word.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the bit set empty",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "null",
        "normalized": "BitSet a-\u003eBool",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Create a singleton set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Word.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Create singleton set",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "singleton",
        "normalized": "a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the bit set.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e Int",
        "fct-source": "src/Data-BitSet-Word.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the bit set",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "size",
        "normalized": "BitSet a-\u003eInt",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the bit set set to a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e [a]",
        "fct-source": "src/Data-BitSet-Word.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert the bit set set to list of elements",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "toList",
        "normalized": "BitSet a-\u003e[a]",
        "package": "bitset",
        "partial": "List",
        "signature": "BitSet a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The union of two bit sets.\n\u003c/p\u003e",
        "fct-module": "Data.BitSet.Word",
        "fct-package": "bitset",
        "fct-signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
        "fct-source": "src/Data-BitSet-Word.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "The union of two bit sets",
        "hierarchy": "Data BitSet Word",
        "module": "Data.BitSet.Word",
        "name": "union",
        "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
        "package": "bitset",
        "partial": "",
        "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA space-efficient implementation of set data structure for enumerated\n data types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BitSet",
        "fct-package": "bitset",
        "fct-signature": "module",
        "fct-source": "src/Data-BitSet.html",
        "fct-type": "module",
        "title": "BitSet"
      },
      "index": {
        "description": "space-efficient implementation of set data structure for enumerated data types",
        "hierarchy": "Data BitSet",
        "module": "Data.BitSet",
        "name": "BitSet",
        "normalized": "",
        "package": "bitset",
        "partial": "Bit Set",
        "signature": ""
      }
    }
  }
]