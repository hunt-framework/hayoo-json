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
        "word": "bitset"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA space-efficient implementation of set data structure for enumerated\n data types.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Read below the synopsis for important notes on the use of\n this module.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions, e.g.\n\u003c/p\u003e\u003cpre\u003e import Data.BitSet.Dynamic (BitSet)\n import qualified Data.BitSet.Dynamic as BS\n\u003c/pre\u003e\u003cp\u003eThe implementation uses \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e as underlying container, thus it\n grows automatically when more elements are inserted into the bit set.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "Dynamic",
          "package": "bitset",
          "source": "src/Data-BitSet-Dynamic.html",
          "type": "module"
        },
        "index": {
          "description": "space-efficient implementation of set data structure for enumerated data types Note Read below the synopsis for important notes on the use of this module This module is intended to be imported qualified to avoid name clashes with Prelude functions e.g import Data.BitSet.Dynamic BitSet import qualified Data.BitSet.Dynamic as BS The implementation uses Integer as underlying container thus it grows automatically when more elements are inserted into the bit set",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "Dynamic",
          "package": "bitset",
          "partial": "Dynamic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSet.Dynamic",
          "name": "BitSet",
          "package": "bitset",
          "source": "src/Data-BitSet-Dynamic.html#BitSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "BitSet",
          "package": "bitset",
          "partial": "Bit Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#t:BitSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e which provides faster bit-level operations.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "FasterInteger",
          "package": "bitset",
          "source": "src/Data-BitSet-Dynamic.html#FasterInteger",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper around Integer which provides faster bit-level operations",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "FasterInteger",
          "package": "bitset",
          "partial": "Faster Integer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#t:FasterInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "(\\\\)",
          "package": "bitset",
          "signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Dynamic.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "See difference",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "(\\\\) \\\\",
          "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSet.Dynamic",
          "name": "FasterInteger",
          "package": "bitset",
          "signature": "FasterInteger Integer",
          "source": "src/Data-BitSet-Dynamic.html#FasterInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "FasterInteger",
          "package": "bitset",
          "partial": "Faster Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:FasterInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Delete an item from the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "delete",
          "package": "bitset",
          "signature": "a -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Dynamic.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete an item from the bit set",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "delete",
          "normalized": "a-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "a-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Difference of two bit sets.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "difference",
          "package": "bitset",
          "signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Dynamic.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Difference of two bit sets",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "difference",
          "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "empty",
          "package": "bitset",
          "signature": "BitSet a",
          "source": "src/Data-BitSet-Dynamic.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty bit set",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "empty",
          "package": "bitset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Filter this bit set by retaining only elements satisfying a\n predicate.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "filter",
          "package": "bitset",
          "signature": "(a -\u003e Bool) -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Dynamic.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter this bit set by retaining only elements satisfying predicate",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "(a-\u003eBool)-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this bit set by applying a binary function to all\n elements, using the given starting value.  Each application of the\n operator is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "foldl'",
          "package": "bitset",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e BitSet a -\u003e b",
          "source": "src/Data-BitSet-Dynamic.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "Reduce this bit set by applying binary function to all elements using the given starting value Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eBitSet b-\u003ea",
          "package": "bitset",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eBitSet a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this bit set by applying a binary function to all\n elements, using the given starting value.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "foldr",
          "package": "bitset",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e BitSet a -\u003e b",
          "source": "src/Data-BitSet-Dynamic.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Reduce this bit set by applying binary function to all elements using the given starting value",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eBitSet a-\u003eb",
          "package": "bitset",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eBitSet a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Make a bit set from a list of elements.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "fromList",
          "package": "bitset",
          "signature": "[a] -\u003e BitSet a",
          "source": "src/Data-BitSet-Dynamic.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Make bit set from list of elements",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "fromList",
          "normalized": "[a]-\u003eBitSet a",
          "package": "bitset",
          "partial": "List",
          "signature": "[a]-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Insert an item into the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "insert",
          "package": "bitset",
          "signature": "a -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Dynamic.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert an item into the bit set",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "insert",
          "normalized": "a-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "a-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The intersection of two bit sets.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "intersection",
          "package": "bitset",
          "signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Dynamic.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "The intersection of two bit sets",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "intersection",
          "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(n, m)\u003c/em\u003e. Is this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "isProperSubsetOf",
          "package": "bitset",
          "signature": "BitSet a -\u003e BitSet a -\u003e Bool",
          "source": "src/Data-BitSet-Dynamic.html#isProperSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "max Is this proper subset ie subset but not equal",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "isProperSubsetOf",
          "normalized": "BitSet a-\u003eBitSet a-\u003eBool",
          "package": "bitset",
          "partial": "Proper Subset Of",
          "signature": "BitSet a-\u003eBitSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:isProperSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(n, m))\u003c/em\u003e. Is this a subset? (\u003ccode\u003es1 isSubsetOf s2\u003c/code\u003e) tells whether\n \u003ccode\u003es1\u003c/code\u003e is a subset of \u003ccode\u003es2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "isSubsetOf",
          "package": "bitset",
          "signature": "BitSet a -\u003e BitSet a -\u003e Bool",
          "source": "src/Data-BitSet-Dynamic.html#isSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "max Is this subset s1 isSubsetOf s2 tells whether s1 is subset of s2",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "isSubsetOf",
          "normalized": "BitSet a-\u003eBitSet a-\u003eBool",
          "package": "bitset",
          "partial": "Subset Of",
          "signature": "BitSet a-\u003eBitSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:isSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Transform this bit set by applying a function to every value.\n Resulting bit set may be smaller then the original.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "map",
          "package": "bitset",
          "signature": "(a -\u003e b) -\u003e BitSet a -\u003e BitSet b",
          "source": "src/Data-BitSet-Dynamic.html#map",
          "type": "function"
        },
        "index": {
          "description": "Transform this bit set by applying function to every value Resulting bit set may be smaller then the original",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eBitSet a-\u003eBitSet b",
          "package": "bitset",
          "signature": "(a-\u003eb)-\u003eBitSet a-\u003eBitSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Ask whether the item is in the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "member",
          "package": "bitset",
          "signature": "a -\u003e BitSet a -\u003e Bool",
          "source": "src/Data-BitSet-Dynamic.html#member",
          "type": "function"
        },
        "index": {
          "description": "Ask whether the item is in the bit set",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "member",
          "normalized": "a-\u003eBitSet a-\u003eBool",
          "package": "bitset",
          "signature": "a-\u003eBitSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Ask whether the item is in the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "notMember",
          "package": "bitset",
          "signature": "a -\u003e BitSet a -\u003e Bool",
          "source": "src/Data-BitSet-Dynamic.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "Ask whether the item is in the bit set",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "notMember",
          "normalized": "a-\u003eBitSet a-\u003eBool",
          "package": "bitset",
          "partial": "Member",
          "signature": "a-\u003eBitSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the bit set empty?\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "null",
          "package": "bitset",
          "signature": "BitSet a -\u003e Bool",
          "source": "src/Data-BitSet-Dynamic.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the bit set empty",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "null",
          "normalized": "BitSet a-\u003eBool",
          "package": "bitset",
          "signature": "BitSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Create a singleton set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "singleton",
          "package": "bitset",
          "signature": "a -\u003e BitSet a",
          "source": "src/Data-BitSet-Dynamic.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create singleton set",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "singleton",
          "normalized": "a-\u003eBitSet a",
          "package": "bitset",
          "signature": "a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "size",
          "package": "bitset",
          "signature": "BitSet a -\u003e Int",
          "source": "src/Data-BitSet-Dynamic.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the bit set",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "size",
          "normalized": "BitSet a-\u003eInt",
          "package": "bitset",
          "signature": "BitSet a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the bit set set to a list of elements.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "toList",
          "package": "bitset",
          "signature": "BitSet a -\u003e [a]",
          "source": "src/Data-BitSet-Dynamic.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert the bit set set to list of elements",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "toList",
          "normalized": "BitSet a-\u003e[a]",
          "package": "bitset",
          "partial": "List",
          "signature": "BitSet a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(m, n))\u003c/em\u003e. The union of two bit sets.\n\u003c/p\u003e",
          "module": "Data.BitSet.Dynamic",
          "name": "union",
          "package": "bitset",
          "signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Dynamic.html#union",
          "type": "function"
        },
        "index": {
          "description": "max The union of two bit sets",
          "hierarchy": "Data BitSet Dynamic",
          "module": "Data.BitSet.Dynamic",
          "name": "union",
          "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Dynamic.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA space-efficient implementation of set data structure for enumerated\n data types.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Read below the synopsis for important notes on the use of\n this module.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions, e.g.\n\u003c/p\u003e\u003cpre\u003e import Data.BitSet.Generic (BitSet)\n import qualified Data.BitSet.Generic as BS\n\u003c/pre\u003e\u003cp\u003eThe implementation is abstract with respect to container type, so any\n numeric type with \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e instance can be used as a container. However,\n independent of container choice, the maximum number of elements in a\n bit set is bounded by \u003ccode\u003emaxBound :: Int\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BitSet.Generic",
          "name": "Generic",
          "package": "bitset",
          "source": "src/Data-BitSet-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "space-efficient implementation of set data structure for enumerated data types Note Read below the synopsis for important notes on the use of this module This module is intended to be imported qualified to avoid name clashes with Prelude functions e.g import Data.BitSet.Generic BitSet import qualified Data.BitSet.Generic as BS The implementation is abstract with respect to container type so any numeric type with Bits instance can be used as container However independent of container choice the maximum number of elements in bit set is bounded by maxBound Int",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "Generic",
          "package": "bitset",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bit set with unspecified container type.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "BitSet",
          "package": "bitset",
          "source": "src/Data-BitSet-Generic.html#BitSet",
          "type": "newtype"
        },
        "index": {
          "description": "bit set with unspecified container type",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "BitSet",
          "package": "bitset",
          "partial": "Bit Set",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#t:BitSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(m, n))\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "(\\\\)",
          "package": "bitset",
          "signature": "BitSet c a -\u003e BitSet c a -\u003e BitSet c a",
          "source": "src/Data-BitSet-Generic.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "max See difference",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "(\\\\) \\\\",
          "normalized": "BitSet a b-\u003eBitSet a b-\u003eBitSet a b",
          "package": "bitset",
          "signature": "BitSet c a-\u003eBitSet c a-\u003eBitSet c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSet.Generic",
          "name": "BitSet",
          "package": "bitset",
          "signature": "BitSet",
          "source": "src/Data-BitSet-Generic.html#BitSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "BitSet",
          "package": "bitset",
          "partial": "Bit Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:BitSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(d)\u003c/em\u003e. Delete an item from the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "delete",
          "package": "bitset",
          "signature": "a -\u003e BitSet c a -\u003e BitSet c a",
          "source": "src/Data-BitSet-Generic.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete an item from the bit set",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "delete",
          "normalized": "a-\u003eBitSet b a-\u003eBitSet b a",
          "package": "bitset",
          "signature": "a-\u003eBitSet c a-\u003eBitSet c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(m, n))\u003c/em\u003e. Difference of two bit sets.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "difference",
          "package": "bitset",
          "signature": "BitSet c a -\u003e BitSet c a -\u003e BitSet c a",
          "source": "src/Data-BitSet-Generic.html#difference",
          "type": "function"
        },
        "index": {
          "description": "max Difference of two bit sets",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "difference",
          "normalized": "BitSet a b-\u003eBitSet a b-\u003eBitSet a b",
          "package": "bitset",
          "signature": "BitSet c a-\u003eBitSet c a-\u003eBitSet c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "empty",
          "package": "bitset",
          "signature": "BitSet c a",
          "source": "src/Data-BitSet-Generic.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty bit set",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "empty",
          "package": "bitset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(d * n)\u003c/em\u003e Filter this bit set by retaining only elements satisfying\n predicate.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "filter",
          "package": "bitset",
          "signature": "(a -\u003e Bool) -\u003e BitSet c a -\u003e BitSet c a",
          "source": "src/Data-BitSet-Generic.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter this bit set by retaining only elements satisfying predicate",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eBitSet b a-\u003eBitSet b a",
          "package": "bitset",
          "signature": "(a-\u003eBool)-\u003eBitSet c a-\u003eBitSet c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(d * n)\u003c/em\u003e Reduce this bit set by applying a binary function to all\n elements, using the given starting value.  Each application of the\n operator is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "foldl'",
          "package": "bitset",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e BitSet c a -\u003e b",
          "source": "src/Data-BitSet-Generic.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "Reduce this bit set by applying binary function to all elements using the given starting value Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eBitSet c b-\u003ea",
          "package": "bitset",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eBitSet c a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(d * n)\u003c/em\u003e Reduce this bit set by applying a binary function to\n all elements, using the given starting value.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "foldr",
          "package": "bitset",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e BitSet c a -\u003e b",
          "source": "src/Data-BitSet-Generic.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Reduce this bit set by applying binary function to all elements using the given starting value",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eBitSet c a-\u003eb",
          "package": "bitset",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eBitSet c a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(d * n)\u003c/em\u003e. Make a bit set from a list of elements.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "fromList",
          "package": "bitset",
          "signature": "[a] -\u003e BitSet c a",
          "source": "src/Data-BitSet-Generic.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Make bit set from list of elements",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "fromList",
          "normalized": "[a]-\u003eBitSet b a",
          "package": "bitset",
          "partial": "List",
          "signature": "[a]-\u003eBitSet c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSet.Generic",
          "name": "getBits",
          "package": "bitset",
          "signature": "c",
          "source": "src/Data-BitSet-Generic.html#BitSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "getBits",
          "package": "bitset",
          "partial": "Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:getBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(d)\u003c/em\u003e. Insert an item into the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "insert",
          "package": "bitset",
          "signature": "a -\u003e BitSet c a -\u003e BitSet c a",
          "source": "src/Data-BitSet-Generic.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert an item into the bit set",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "insert",
          "normalized": "a-\u003eBitSet b a-\u003eBitSet b a",
          "package": "bitset",
          "signature": "a-\u003eBitSet c a-\u003eBitSet c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(m, n))\u003c/em\u003e. The intersection of two bit sets.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "intersection",
          "package": "bitset",
          "signature": "BitSet c a -\u003e BitSet c a -\u003e BitSet c a",
          "source": "src/Data-BitSet-Generic.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "max The intersection of two bit sets",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "intersection",
          "normalized": "BitSet a b-\u003eBitSet a b-\u003eBitSet a b",
          "package": "bitset",
          "signature": "BitSet c a-\u003eBitSet c a-\u003eBitSet c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(n, m)\u003c/em\u003e. Is this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "isProperSubsetOf",
          "package": "bitset",
          "signature": "BitSet c a -\u003e BitSet c a -\u003e Bool",
          "source": "src/Data-BitSet-Generic.html#isProperSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "max Is this proper subset ie subset but not equal",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "isProperSubsetOf",
          "normalized": "BitSet a b-\u003eBitSet a b-\u003eBool",
          "package": "bitset",
          "partial": "Proper Subset Of",
          "signature": "BitSet c a-\u003eBitSet c a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:isProperSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(n, m))\u003c/em\u003e. Is this a subset? (\u003ccode\u003es1 \u003ccode\u003e\u003ca\u003eisSubsetOf\u003c/a\u003e\u003c/code\u003e s2\u003c/code\u003e) tells whether\n \u003ccode\u003es1\u003c/code\u003e is a subset of \u003ccode\u003es2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "isSubsetOf",
          "package": "bitset",
          "signature": "BitSet c a -\u003e BitSet c a -\u003e Bool",
          "source": "src/Data-BitSet-Generic.html#isSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "max Is this subset s1 isSubsetOf s2 tells whether s1 is subset of s2",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "isSubsetOf",
          "normalized": "BitSet a b-\u003eBitSet a b-\u003eBool",
          "package": "bitset",
          "partial": "Subset Of",
          "signature": "BitSet c a-\u003eBitSet c a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:isSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(d * n)\u003c/em\u003e Transform this bit set by applying a function to every\n value.  Resulting bit set may be smaller then the original.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "map",
          "package": "bitset",
          "signature": "(a -\u003e b) -\u003e BitSet c a -\u003e BitSet c b",
          "source": "src/Data-BitSet-Generic.html#map",
          "type": "function"
        },
        "index": {
          "description": "Transform this bit set by applying function to every value Resulting bit set may be smaller then the original",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eBitSet c a-\u003eBitSet c b",
          "package": "bitset",
          "signature": "(a-\u003eb)-\u003eBitSet c a-\u003eBitSet c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(d)\u003c/em\u003e. Ask whether the item is in the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "member",
          "package": "bitset",
          "signature": "a -\u003e BitSet c a -\u003e Bool",
          "source": "src/Data-BitSet-Generic.html#member",
          "type": "function"
        },
        "index": {
          "description": "Ask whether the item is in the bit set",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "member",
          "normalized": "a-\u003eBitSet b a-\u003eBool",
          "package": "bitset",
          "signature": "a-\u003eBitSet c a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(d)\u003c/em\u003e. Ask whether the item is not in the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "notMember",
          "package": "bitset",
          "signature": "a -\u003e BitSet c a -\u003e Bool",
          "source": "src/Data-BitSet-Generic.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "Ask whether the item is not in the bit set",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "notMember",
          "normalized": "a-\u003eBitSet b a-\u003eBool",
          "package": "bitset",
          "partial": "Member",
          "signature": "a-\u003eBitSet c a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the bit set empty?\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "null",
          "package": "bitset",
          "signature": "BitSet c a -\u003e Bool",
          "source": "src/Data-BitSet-Generic.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the bit set empty",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "null",
          "normalized": "BitSet a b-\u003eBool",
          "package": "bitset",
          "signature": "BitSet c a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Create a singleton set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "singleton",
          "package": "bitset",
          "signature": "a -\u003e BitSet c a",
          "source": "src/Data-BitSet-Generic.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create singleton set",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "singleton",
          "normalized": "a-\u003eBitSet b a",
          "package": "bitset",
          "signature": "a-\u003eBitSet c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "size",
          "package": "bitset",
          "signature": "BitSet c a -\u003e Int",
          "source": "src/Data-BitSet-Generic.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the bit set",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "size",
          "normalized": "BitSet a b-\u003eInt",
          "package": "bitset",
          "signature": "BitSet c a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(d * n)\u003c/em\u003e. Convert this bit set set to a list of elements.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "toList",
          "package": "bitset",
          "signature": "BitSet c a -\u003e [a]",
          "source": "src/Data-BitSet-Generic.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert this bit set set to list of elements",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "toList",
          "normalized": "BitSet a b-\u003e[b]",
          "package": "bitset",
          "partial": "List",
          "signature": "BitSet c a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(m, n))\u003c/em\u003e. The union of two bit sets.\n\u003c/p\u003e",
          "module": "Data.BitSet.Generic",
          "name": "union",
          "package": "bitset",
          "signature": "BitSet c a -\u003e BitSet c a -\u003e BitSet c a",
          "source": "src/Data-BitSet-Generic.html#union",
          "type": "function"
        },
        "index": {
          "description": "max The union of two bit sets",
          "hierarchy": "Data BitSet Generic",
          "module": "Data.BitSet.Generic",
          "name": "union",
          "normalized": "BitSet a b-\u003eBitSet a b-\u003eBitSet a b",
          "package": "bitset",
          "signature": "BitSet c a-\u003eBitSet c a-\u003eBitSet c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Generic.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA space-efficient implementation of set data structure for enumerated\n data types.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Read below the synopsis for important notes on the use of\n this module.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions, e.g.\n\u003c/p\u003e\u003cpre\u003e import Data.BitSet.Word (BitSet)\n import qualified Data.BitSet.Word as BS\n\u003c/pre\u003e\u003cp\u003eThe implementation uses \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e as underlying container, thus the\n maximum number of elements you can store in this bit set is bounded\n by the number of bits in \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e data type. However, due to native bitwise\n operations \u003ca\u003eData.BitSet.Word\u003c/a\u003e is significantly faster then \u003ca\u003eData.Set\u003c/a\u003e\n on all operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BitSet.Word",
          "name": "Word",
          "package": "bitset",
          "source": "src/Data-BitSet-Word.html",
          "type": "module"
        },
        "index": {
          "description": "space-efficient implementation of set data structure for enumerated data types Note Read below the synopsis for important notes on the use of this module This module is intended to be imported qualified to avoid name clashes with Prelude functions e.g import Data.BitSet.Word BitSet import qualified Data.BitSet.Word as BS The implementation uses Word as underlying container thus the maximum number of elements you can store in this bit set is bounded by the number of bits in Word data type However due to native bitwise operations Data.BitSet.Word is significantly faster then Data.Set on all operations",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "Word",
          "package": "bitset",
          "partial": "Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSet.Word",
          "name": "BitSet",
          "package": "bitset",
          "source": "src/Data-BitSet-Word.html#BitSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "BitSet",
          "package": "bitset",
          "partial": "Bit Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#t:BitSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "(\\\\)",
          "package": "bitset",
          "signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Word.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "See difference",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "(\\\\) \\\\",
          "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Delete an item from the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "delete",
          "package": "bitset",
          "signature": "a -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Word.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete an item from the bit set",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "delete",
          "normalized": "a-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "a-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Difference of two bit sets.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "difference",
          "package": "bitset",
          "signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Word.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Difference of two bit sets",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "difference",
          "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "empty",
          "package": "bitset",
          "signature": "BitSet a",
          "source": "src/Data-BitSet-Word.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty bit set",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "empty",
          "package": "bitset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Filter this bit set by retaining only elements satisfying a\n predicate.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "filter",
          "package": "bitset",
          "signature": "(a -\u003e Bool) -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Word.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter this bit set by retaining only elements satisfying predicate",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "(a-\u003eBool)-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this bit set by applying a binary function to all\n elements, using the given starting value.  Each application of the\n operator is evaluated before before using the result in the next\n application.  This function is strict in the starting value.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "foldl'",
          "package": "bitset",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e BitSet a -\u003e b",
          "source": "src/Data-BitSet-Word.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "Reduce this bit set by applying binary function to all elements using the given starting value Each application of the operator is evaluated before before using the result in the next application This function is strict in the starting value",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eBitSet b-\u003ea",
          "package": "bitset",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eBitSet a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reduce this bit set by applying a binary function to all\n elements, using the given starting value.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "foldr",
          "package": "bitset",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e BitSet a -\u003e b",
          "source": "src/Data-BitSet-Word.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Reduce this bit set by applying binary function to all elements using the given starting value",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eBitSet a-\u003eb",
          "package": "bitset",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eBitSet a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Make a bit set from a list of elements.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "fromList",
          "package": "bitset",
          "signature": "[a] -\u003e BitSet a",
          "source": "src/Data-BitSet-Word.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Make bit set from list of elements",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "fromList",
          "normalized": "[a]-\u003eBitSet a",
          "package": "bitset",
          "partial": "List",
          "signature": "[a]-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Insert an item into the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "insert",
          "package": "bitset",
          "signature": "a -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Word.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert an item into the bit set",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "insert",
          "normalized": "a-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "a-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The intersection of two bit sets.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "intersection",
          "package": "bitset",
          "signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Word.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "The intersection of two bit sets",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "intersection",
          "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "isProperSubsetOf",
          "package": "bitset",
          "signature": "BitSet a -\u003e BitSet a -\u003e Bool",
          "source": "src/Data-BitSet-Word.html#isProperSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "Is this proper subset ie subset but not equal",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "isProperSubsetOf",
          "normalized": "BitSet a-\u003eBitSet a-\u003eBool",
          "package": "bitset",
          "partial": "Proper Subset Of",
          "signature": "BitSet a-\u003eBitSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:isProperSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is this a subset? (\u003ccode\u003es1 isSubsetOf s2\u003c/code\u003e) tells whether\n \u003ccode\u003es1\u003c/code\u003e is a subset of \u003ccode\u003es2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "isSubsetOf",
          "package": "bitset",
          "signature": "BitSet a -\u003e BitSet a -\u003e Bool",
          "source": "src/Data-BitSet-Word.html#isSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "Is this subset s1 isSubsetOf s2 tells whether s1 is subset of s2",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "isSubsetOf",
          "normalized": "BitSet a-\u003eBitSet a-\u003eBool",
          "package": "bitset",
          "partial": "Subset Of",
          "signature": "BitSet a-\u003eBitSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:isSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Transform this bit set by applying a function to every value.\n Resulting bit set may be smaller then the original.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "map",
          "package": "bitset",
          "signature": "(a -\u003e b) -\u003e BitSet a -\u003e BitSet b",
          "source": "src/Data-BitSet-Word.html#map",
          "type": "function"
        },
        "index": {
          "description": "Transform this bit set by applying function to every value Resulting bit set may be smaller then the original",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eBitSet a-\u003eBitSet b",
          "package": "bitset",
          "signature": "(a-\u003eb)-\u003eBitSet a-\u003eBitSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Ask whether the item is in the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "member",
          "package": "bitset",
          "signature": "a -\u003e BitSet a -\u003e Bool",
          "source": "src/Data-BitSet-Word.html#member",
          "type": "function"
        },
        "index": {
          "description": "Ask whether the item is in the bit set",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "member",
          "normalized": "a-\u003eBitSet a-\u003eBool",
          "package": "bitset",
          "signature": "a-\u003eBitSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Ask whether the item is in the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "notMember",
          "package": "bitset",
          "signature": "a -\u003e BitSet a -\u003e Bool",
          "source": "src/Data-BitSet-Word.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "Ask whether the item is in the bit set",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "notMember",
          "normalized": "a-\u003eBitSet a-\u003eBool",
          "package": "bitset",
          "partial": "Member",
          "signature": "a-\u003eBitSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the bit set empty?\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "null",
          "package": "bitset",
          "signature": "BitSet a -\u003e Bool",
          "source": "src/Data-BitSet-Word.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the bit set empty",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "null",
          "normalized": "BitSet a-\u003eBool",
          "package": "bitset",
          "signature": "BitSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Create a singleton set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "singleton",
          "package": "bitset",
          "signature": "a -\u003e BitSet a",
          "source": "src/Data-BitSet-Word.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create singleton set",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "singleton",
          "normalized": "a-\u003eBitSet a",
          "package": "bitset",
          "signature": "a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the bit set.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "size",
          "package": "bitset",
          "signature": "BitSet a -\u003e Int",
          "source": "src/Data-BitSet-Word.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the bit set",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "size",
          "normalized": "BitSet a-\u003eInt",
          "package": "bitset",
          "signature": "BitSet a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the bit set set to a list of elements.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "toList",
          "package": "bitset",
          "signature": "BitSet a -\u003e [a]",
          "source": "src/Data-BitSet-Word.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert the bit set set to list of elements",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "toList",
          "normalized": "BitSet a-\u003e[a]",
          "package": "bitset",
          "partial": "List",
          "signature": "BitSet a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The union of two bit sets.\n\u003c/p\u003e",
          "module": "Data.BitSet.Word",
          "name": "union",
          "package": "bitset",
          "signature": "BitSet a -\u003e BitSet a -\u003e BitSet a",
          "source": "src/Data-BitSet-Word.html#union",
          "type": "function"
        },
        "index": {
          "description": "The union of two bit sets",
          "hierarchy": "Data BitSet Word",
          "module": "Data.BitSet.Word",
          "name": "union",
          "normalized": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "package": "bitset",
          "signature": "BitSet a-\u003eBitSet a-\u003eBitSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet-Word.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA space-efficient implementation of set data structure for enumerated\n data types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BitSet",
          "name": "BitSet",
          "package": "bitset",
          "source": "src/Data-BitSet.html",
          "type": "module"
        },
        "index": {
          "description": "space-efficient implementation of set data structure for enumerated data types",
          "hierarchy": "Data BitSet",
          "module": "Data.BitSet",
          "name": "BitSet",
          "package": "bitset",
          "partial": "Bit Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitset/docs/Data-BitSet.html#"
      }
    }
  ]
]