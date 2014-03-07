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
        "word": "intern"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.ByteString",
          "name": "ByteString",
          "package": "intern",
          "source": "src/Data-Interned-ByteString.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Interned ByteString",
          "module": "Data.Interned.ByteString",
          "name": "ByteString",
          "package": "intern",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.ByteString",
          "name": "InternedByteString",
          "package": "intern",
          "source": "src/Data-Interned-Internal-ByteString.html#InternedByteString",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Interned ByteString",
          "module": "Data.Interned.ByteString",
          "name": "InternedByteString",
          "package": "intern",
          "partial": "Interned Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-ByteString.html#t:InternedByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of integer sets.\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.IntSet (IntSet)\n  import qualified Data.IntSet as IntSet\n\u003c/pre\u003e\u003cp\u003eThe implementation is based on \u003cem\u003ebig-endian patricia trees\u003c/em\u003e.  This data\n structure performs especially well on binary operations like \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e.  However, my benchmarks show that it is also\n (much) faster on insertions and deletions when compared to a generic\n size-balanced set implementation (see \u003ca\u003eData.Set\u003c/a\u003e).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Chris Okasaki and Andy Gill,  \"\u003cem\u003eFast Mergeable Integer Maps\u003c/em\u003e\",\n      Workshop on ML, September 1998, pages 77-86,\n      \u003ca\u003ehttp://citeseer.ist.psu.edu/okasaki98fast.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e D.R. Morrison, \"/PATRICIA -- Practical Algorithm To Retrieve\n      Information Coded In Alphanumeric/\", Journal of the ACM, 15(4),\n      October 1968, pages 514-534.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMany operations have a worst-case complexity of \u003cem\u003eO(min(n,W))\u003c/em\u003e.\n This means that the operation can become linear in the number of\n elements with a maximum of \u003cem\u003eW\u003c/em\u003e -- the number of bits in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n (32 or 64).\n\u003c/p\u003e\u003cp\u003eUnlike the reference implementation in Data.IntSet, Data.Interned.IntSet\n uses hash consing to ensure that there is only ever one copy of any given\n IntSet in memory. This is enabled by the normal form of the PATRICIA trie.\n\u003c/p\u003e\u003cp\u003eThis can mean a drastic reduction in the memory footprint of a program\n in exchange for much more costly set manipulation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Interned.IntSet",
          "name": "IntSet",
          "package": "intern",
          "source": "src/Data-Interned-IntSet.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of integer sets Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.IntSet IntSet import qualified Data.IntSet as IntSet The implementation is based on big-endian patricia trees This data structure performs especially well on binary operations like union and intersection However my benchmarks show that it is also much faster on insertions and deletions when compared to generic size-balanced set implementation see Data.Set Chris Okasaki and Andy Gill Fast Mergeable Integer Maps Workshop on ML September pages http citeseer.ist.psu.edu okasaki98fast.html D.R Morrison PATRICIA Practical Algorithm To Retrieve Information Coded In Alphanumeric Journal of the ACM October pages Many operations have worst-case complexity of min This means that the operation can become linear in the number of elements with maximum of the number of bits in an Int or Unlike the reference implementation in Data.IntSet Data.Interned.IntSet uses hash consing to ensure that there is only ever one copy of any given IntSet in memory This is enabled by the normal form of the PATRICIA trie This can mean drastic reduction in the memory footprint of program in exchange for much more costly set manipulation",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "IntSet",
          "package": "intern",
          "partial": "Int Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of integers.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "IntSet",
          "package": "intern",
          "source": "src/Data-Interned-IntSet.html#IntSet",
          "type": "data"
        },
        "index": {
          "description": "set of integers",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "IntSet",
          "package": "intern",
          "partial": "Int Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#t:IntSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "(\\\\)",
          "package": "intern",
          "signature": "IntSet -\u003e IntSet -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "See difference",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "(\\\\) \\\\",
          "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
          "package": "intern",
          "signature": "IntSet-\u003eIntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete a value in the set. Returns the\n original set when the value was not present.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "delete",
          "package": "intern",
          "signature": "Int -\u003e IntSet -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#delete",
          "type": "function"
        },
        "index": {
          "description": "min Delete value in the set Returns the original set when the value was not present",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "delete",
          "normalized": "Int-\u003eIntSet-\u003eIntSet",
          "package": "intern",
          "signature": "Int-\u003eIntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete and find the maximal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMax set = (findMax set, deleteMax set)\n\u003c/pre\u003e",
          "module": "Data.Interned.IntSet",
          "name": "deleteFindMax",
          "package": "intern",
          "signature": "IntSet -\u003e (Int, IntSet)",
          "source": "src/Data-Interned-IntSet.html#deleteFindMax",
          "type": "function"
        },
        "index": {
          "description": "min Delete and find the maximal element deleteFindMax set findMax set deleteMax set",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "deleteFindMax",
          "normalized": "IntSet-\u003e(Int,IntSet)",
          "package": "intern",
          "partial": "Find Max",
          "signature": "IntSet-\u003e(Int,IntSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:deleteFindMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete and find the minimal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMin set = (findMin set, deleteMin set)\n\u003c/pre\u003e",
          "module": "Data.Interned.IntSet",
          "name": "deleteFindMin",
          "package": "intern",
          "signature": "IntSet -\u003e (Int, IntSet)",
          "source": "src/Data-Interned-IntSet.html#deleteFindMin",
          "type": "function"
        },
        "index": {
          "description": "min Delete and find the minimal element deleteFindMin set findMin set deleteMin set",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "deleteFindMin",
          "normalized": "IntSet-\u003e(Int,IntSet)",
          "package": "intern",
          "partial": "Find Min",
          "signature": "IntSet-\u003e(Int,IntSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:deleteFindMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete the maximal element.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "deleteMax",
          "package": "intern",
          "signature": "IntSet -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "min Delete the maximal element",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "deleteMax",
          "normalized": "IntSet-\u003eIntSet",
          "package": "intern",
          "partial": "Max",
          "signature": "IntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete the minimal element.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "deleteMin",
          "package": "intern",
          "signature": "IntSet -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "min Delete the minimal element",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "deleteMin",
          "normalized": "IntSet-\u003eIntSet",
          "package": "intern",
          "partial": "Min",
          "signature": "IntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference between two sets.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "difference",
          "package": "intern",
          "signature": "IntSet -\u003e IntSet -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Difference between two sets",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "difference",
          "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
          "package": "intern",
          "signature": "IntSet-\u003eIntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The elements of a set. (For sets, this is equivalent to toList)\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "elems",
          "package": "intern",
          "signature": "IntSet -\u003e [Int]",
          "source": "src/Data-Interned-IntSet.html#elems",
          "type": "function"
        },
        "index": {
          "description": "The elements of set For sets this is equivalent to toList",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "elems",
          "normalized": "IntSet-\u003e[Int]",
          "package": "intern",
          "signature": "IntSet-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty set.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "empty",
          "package": "intern",
          "signature": "IntSet",
          "source": "src/Data-Interned-IntSet.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty set",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "empty",
          "package": "intern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all elements that satisfy some predicate.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "filter",
          "package": "intern",
          "signature": "(Int -\u003e Bool) -\u003e IntSet -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter all elements that satisfy some predicate",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "filter",
          "normalized": "(Int-\u003eBool)-\u003eIntSet-\u003eIntSet",
          "package": "intern",
          "signature": "(Int-\u003eBool)-\u003eIntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. The maximal element of a set.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "findMax",
          "package": "intern",
          "signature": "IntSet -\u003e Int",
          "source": "src/Data-Interned-IntSet.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "min The maximal element of set",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "findMax",
          "normalized": "IntSet-\u003eInt",
          "package": "intern",
          "partial": "Max",
          "signature": "IntSet-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. The minimal element of the set.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "findMin",
          "package": "intern",
          "signature": "IntSet -\u003e Int",
          "source": "src/Data-Interned-IntSet.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "min The minimal element of the set",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "findMin",
          "normalized": "IntSet-\u003eInt",
          "package": "intern",
          "partial": "Min",
          "signature": "IntSet-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold over the elements of a set in an unspecified order.\n\u003c/p\u003e\u003cpre\u003e sum set   == fold (+) 0 set\n elems set == fold (:) [] set\n\u003c/pre\u003e",
          "module": "Data.Interned.IntSet",
          "name": "fold",
          "package": "intern",
          "signature": "(Int -\u003e b -\u003e b) -\u003e b -\u003e IntSet -\u003e b",
          "source": "src/Data-Interned-IntSet.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Fold over the elements of set in an unspecified order sum set fold set elems set fold set",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "fold",
          "normalized": "(Int-\u003ea-\u003ea)-\u003ea-\u003eIntSet-\u003ea",
          "package": "intern",
          "signature": "(Int-\u003eb-\u003eb)-\u003eb-\u003eIntSet-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a set from an ascending list of elements.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "fromAscList",
          "package": "intern",
          "signature": "[Int] -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "Build set from an ascending list of elements The precondition input list is ascending is not checked",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "fromAscList",
          "normalized": "[Int]-\u003eIntSet",
          "package": "intern",
          "partial": "Asc List",
          "signature": "[Int]-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a set from an ascending list of distinct elements.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "fromDistinctAscList",
          "package": "intern",
          "signature": "[Int] -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#fromDistinctAscList",
          "type": "function"
        },
        "index": {
          "description": "Build set from an ascending list of distinct elements The precondition input list is strictly ascending is not checked",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "fromDistinctAscList",
          "normalized": "[Int]-\u003eIntSet",
          "package": "intern",
          "partial": "Distinct Asc List",
          "signature": "[Int]-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e. Create a set from a list of integers.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "fromList",
          "package": "intern",
          "signature": "[Int] -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "min Create set from list of integers",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "fromList",
          "normalized": "[Int]-\u003eIntSet",
          "package": "intern",
          "partial": "List",
          "signature": "[Int]-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Add a value to the set. When the value is already\n an element of the set, it is replaced by the new one, ie. \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e\n is left-biased.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "insert",
          "package": "intern",
          "signature": "Int -\u003e IntSet -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#insert",
          "type": "function"
        },
        "index": {
          "description": "min Add value to the set When the value is already an element of the set it is replaced by the new one ie insert is left-biased",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "insert",
          "normalized": "Int-\u003eIntSet-\u003eIntSet",
          "package": "intern",
          "signature": "Int-\u003eIntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The intersection of two sets.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "intersection",
          "package": "intern",
          "signature": "IntSet -\u003e IntSet -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "The intersection of two sets",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "intersection",
          "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
          "package": "intern",
          "signature": "IntSet-\u003eIntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "isProperSubsetOf",
          "package": "intern",
          "signature": "IntSet -\u003e IntSet -\u003e Bool",
          "source": "src/Data-Interned-IntSet.html#isProperSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "Is this proper subset ie subset but not equal",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "isProperSubsetOf",
          "normalized": "IntSet-\u003eIntSet-\u003eBool",
          "package": "intern",
          "partial": "Proper Subset Of",
          "signature": "IntSet-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:isProperSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a subset?\n \u003ccode\u003e(s1 \u003ccode\u003e\u003ca\u003eisSubsetOf\u003c/a\u003e\u003c/code\u003e s2)\u003c/code\u003e tells whether \u003ccode\u003es1\u003c/code\u003e is a subset of \u003ccode\u003es2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "isSubsetOf",
          "package": "intern",
          "signature": "IntSet -\u003e IntSet -\u003e Bool",
          "source": "src/Data-Interned-IntSet.html#isSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "Is this subset s1 isSubsetOf s2 tells whether s1 is subset of s2",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "isSubsetOf",
          "normalized": "IntSet-\u003eIntSet-\u003eBool",
          "package": "intern",
          "partial": "Subset Of",
          "signature": "IntSet-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:isSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e is the set obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt's worth noting that the size of the result may be smaller if,\n for some \u003ccode\u003e(x,y)\u003c/code\u003e, \u003ccode\u003ex /= y && f x == f y\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "map",
          "package": "intern",
          "signature": "(Int -\u003e Int) -\u003e IntSet -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#map",
          "type": "function"
        },
        "index": {
          "description": "min map is the set obtained by applying to each element of It worth noting that the size of the result may be smaller if for some",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "map",
          "normalized": "(Int-\u003eInt)-\u003eIntSet-\u003eIntSet",
          "package": "intern",
          "signature": "(Int-\u003eInt)-\u003eIntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Retrieves the maximal key of the set, and the set\n stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty set.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "maxView",
          "package": "intern",
          "signature": "IntSet -\u003e Maybe (Int, IntSet)",
          "source": "src/Data-Interned-IntSet.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "min Retrieves the maximal key of the set and the set stripped of that element or Nothing if passed an empty set",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "maxView",
          "normalized": "IntSet-\u003eMaybe(Int,IntSet)",
          "package": "intern",
          "partial": "View",
          "signature": "IntSet-\u003eMaybe(Int,IntSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Is the value a member of the set?\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "member",
          "package": "intern",
          "signature": "Int -\u003e IntSet -\u003e Bool",
          "source": "src/Data-Interned-IntSet.html#member",
          "type": "function"
        },
        "index": {
          "description": "min Is the value member of the set",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "member",
          "normalized": "Int-\u003eIntSet-\u003eBool",
          "package": "intern",
          "signature": "Int-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Retrieves the minimal key of the set, and the set\n stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty set.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "minView",
          "package": "intern",
          "signature": "IntSet -\u003e Maybe (Int, IntSet)",
          "source": "src/Data-Interned-IntSet.html#minView",
          "type": "function"
        },
        "index": {
          "description": "min Retrieves the minimal key of the set and the set stripped of that element or Nothing if passed an empty set",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "minView",
          "normalized": "IntSet-\u003eMaybe(Int,IntSet)",
          "package": "intern",
          "partial": "View",
          "signature": "IntSet-\u003eMaybe(Int,IntSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Is the element not in the set?\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "notMember",
          "package": "intern",
          "signature": "Int -\u003e IntSet -\u003e Bool",
          "source": "src/Data-Interned-IntSet.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "min Is the element not in the set",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "notMember",
          "normalized": "Int-\u003eIntSet-\u003eBool",
          "package": "intern",
          "partial": "Member",
          "signature": "Int-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the set empty?\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "null",
          "package": "intern",
          "signature": "IntSet -\u003e Bool",
          "source": "src/Data-Interned-IntSet.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the set empty",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "null",
          "normalized": "IntSet-\u003eBool",
          "package": "intern",
          "signature": "IntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. partition the set according to some predicate.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "partition",
          "package": "intern",
          "signature": "(Int -\u003e Bool) -\u003e IntSet -\u003e (IntSet, IntSet)",
          "source": "src/Data-Interned-IntSet.html#partition",
          "type": "function"
        },
        "index": {
          "description": "partition the set according to some predicate",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "partition",
          "normalized": "(Int-\u003eBool)-\u003eIntSet-\u003e(IntSet,IntSet)",
          "package": "intern",
          "signature": "(Int-\u003eBool)-\u003eIntSet-\u003e(IntSet,IntSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Show the tree that implements the set. The tree is shown\n in a compressed, hanging format.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "showTree",
          "package": "intern",
          "signature": "IntSet -\u003e String",
          "source": "src/Data-Interned-IntSet.html#showTree",
          "type": "function"
        },
        "index": {
          "description": "Show the tree that implements the set The tree is shown in compressed hanging format",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "showTree",
          "normalized": "IntSet-\u003eString",
          "package": "intern",
          "partial": "Tree",
          "signature": "IntSet-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:showTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eshowTreeWith\u003c/a\u003e\u003c/code\u003e hang wide map\u003c/code\u003e) shows\n the tree that implements the set. If \u003ccode\u003ehang\u003c/code\u003e is\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, a \u003cem\u003ehanging\u003c/em\u003e tree is shown otherwise a rotated tree is shown. If\n \u003ccode\u003ewide\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, an extra wide version is shown.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "showTreeWith",
          "package": "intern",
          "signature": "Bool -\u003e Bool -\u003e IntSet -\u003e String",
          "source": "src/Data-Interned-IntSet.html#showTreeWith",
          "type": "function"
        },
        "index": {
          "description": "The expression showTreeWith hang wide map shows the tree that implements the set If hang is True hanging tree is shown otherwise rotated tree is shown If wide is True an extra wide version is shown",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "showTreeWith",
          "normalized": "Bool-\u003eBool-\u003eIntSet-\u003eString",
          "package": "intern",
          "partial": "Tree With",
          "signature": "Bool-\u003eBool-\u003eIntSet-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:showTreeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A set of one element.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "singleton",
          "package": "intern",
          "signature": "Int -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "set of one element",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "singleton",
          "normalized": "Int-\u003eIntSet",
          "package": "intern",
          "signature": "Int-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Cardinality of the set.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "size",
          "package": "intern",
          "signature": "IntSet -\u003e Int",
          "source": "src/Data-Interned-IntSet.html#size",
          "type": "function"
        },
        "index": {
          "description": "Cardinality of the set",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "size",
          "normalized": "IntSet-\u003eInt",
          "package": "intern",
          "signature": "IntSet-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e x set\u003c/code\u003e) is a pair \u003ccode\u003e(set1,set2)\u003c/code\u003e\n where \u003ccode\u003eset1\u003c/code\u003e comprises the elements of \u003ccode\u003eset\u003c/code\u003e less than \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003eset2\u003c/code\u003e\n comprises the elements of \u003ccode\u003eset\u003c/code\u003e greater than \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e split 3 (fromList [1..5]) == (fromList [1,2], fromList [4,5])\n\u003c/pre\u003e",
          "module": "Data.Interned.IntSet",
          "name": "split",
          "package": "intern",
          "signature": "Int -\u003e IntSet -\u003e (IntSet, IntSet)",
          "source": "src/Data-Interned-IntSet.html#split",
          "type": "function"
        },
        "index": {
          "description": "min The expression split set is pair set1 set2 where set1 comprises the elements of set less than and set2 comprises the elements of set greater than split fromList fromList fromList",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "split",
          "normalized": "Int-\u003eIntSet-\u003e(IntSet,IntSet)",
          "package": "intern",
          "signature": "Int-\u003eIntSet-\u003e(IntSet,IntSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Performs a \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e but also returns whether the pivot\n element was found in the original set.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "splitMember",
          "package": "intern",
          "signature": "Int -\u003e IntSet -\u003e (IntSet, Bool, IntSet)",
          "source": "src/Data-Interned-IntSet.html#splitMember",
          "type": "function"
        },
        "index": {
          "description": "min Performs split but also returns whether the pivot element was found in the original set",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "splitMember",
          "normalized": "Int-\u003eIntSet-\u003e(IntSet,Bool,IntSet)",
          "package": "intern",
          "partial": "Member",
          "signature": "Int-\u003eIntSet-\u003e(IntSet,Bool,IntSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:splitMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the set to an ascending list of elements.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "toAscList",
          "package": "intern",
          "signature": "IntSet -\u003e [Int]",
          "source": "src/Data-Interned-IntSet.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Convert the set to an ascending list of elements",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "toAscList",
          "normalized": "IntSet-\u003e[Int]",
          "package": "intern",
          "partial": "Asc List",
          "signature": "IntSet-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the set to a list of elements.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "toList",
          "package": "intern",
          "signature": "IntSet -\u003e [Int]",
          "source": "src/Data-Interned-IntSet.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert the set to list of elements",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "toList",
          "normalized": "IntSet-\u003e[Int]",
          "package": "intern",
          "partial": "List",
          "signature": "IntSet-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The union of two sets.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "union",
          "package": "intern",
          "signature": "IntSet -\u003e IntSet -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#union",
          "type": "function"
        },
        "index": {
          "description": "The union of two sets",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "union",
          "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
          "package": "intern",
          "signature": "IntSet-\u003eIntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of sets.\n\u003c/p\u003e",
          "module": "Data.Interned.IntSet",
          "name": "unions",
          "package": "intern",
          "signature": "[IntSet] -\u003e IntSet",
          "source": "src/Data-Interned-IntSet.html#unions",
          "type": "function"
        },
        "index": {
          "description": "The union of list of sets",
          "hierarchy": "Data Interned IntSet",
          "module": "Data.Interned.IntSet",
          "name": "unions",
          "normalized": "[IntSet]-\u003eIntSet",
          "package": "intern",
          "signature": "[IntSet]-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-IntSet.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.ByteString",
          "name": "ByteString",
          "package": "intern",
          "source": "src/Data-Interned-Internal-ByteString.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Interned Internal ByteString",
          "module": "Data.Interned.Internal.ByteString",
          "name": "ByteString",
          "package": "intern",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.ByteString",
          "name": "InternedByteString",
          "package": "intern",
          "source": "src/Data-Interned-Internal-ByteString.html#InternedByteString",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Interned Internal ByteString",
          "module": "Data.Interned.Internal.ByteString",
          "name": "InternedByteString",
          "package": "intern",
          "partial": "Interned Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-ByteString.html#t:InternedByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.ByteString",
          "name": "InternedByteString",
          "package": "intern",
          "signature": "InternedByteString",
          "source": "src/Data-Interned-Internal-ByteString.html#InternedByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal ByteString",
          "module": "Data.Interned.Internal.ByteString",
          "name": "InternedByteString",
          "package": "intern",
          "partial": "Interned Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-ByteString.html#v:InternedByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.ByteString",
          "name": "internedByteStringId",
          "package": "intern",
          "signature": "Id",
          "source": "src/Data-Interned-Internal-ByteString.html#InternedByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal ByteString",
          "module": "Data.Interned.Internal.ByteString",
          "name": "internedByteStringId",
          "package": "intern",
          "partial": "Byte String Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-ByteString.html#v:internedByteStringId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.ByteString",
          "name": "uninternByteString",
          "package": "intern",
          "signature": "ByteString",
          "source": "src/Data-Interned-Internal-ByteString.html#InternedByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal ByteString",
          "module": "Data.Interned.Internal.ByteString",
          "name": "uninternByteString",
          "package": "intern",
          "partial": "Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-ByteString.html#v:uninternByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.String",
          "name": "String",
          "package": "intern",
          "source": "src/Data-Interned-Internal-String.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Interned Internal String",
          "module": "Data.Interned.Internal.String",
          "name": "String",
          "package": "intern",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.String",
          "name": "InternedString",
          "package": "intern",
          "source": "src/Data-Interned-Internal-String.html#InternedString",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Interned Internal String",
          "module": "Data.Interned.Internal.String",
          "name": "InternedString",
          "package": "intern",
          "partial": "Interned String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-String.html#t:InternedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.String",
          "name": "IS",
          "package": "intern",
          "signature": "IS",
          "source": "src/Data-Interned-Internal-String.html#InternedString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal String",
          "module": "Data.Interned.Internal.String",
          "name": "IS",
          "package": "intern",
          "partial": "IS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-String.html#v:IS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.String",
          "name": "internedStringId",
          "package": "intern",
          "signature": "Id",
          "source": "src/Data-Interned-Internal-String.html#InternedString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal String",
          "module": "Data.Interned.Internal.String",
          "name": "internedStringId",
          "package": "intern",
          "partial": "String Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-String.html#v:internedStringId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.String",
          "name": "uninternString",
          "package": "intern",
          "signature": "String",
          "source": "src/Data-Interned-Internal-String.html#InternedString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal String",
          "module": "Data.Interned.Internal.String",
          "name": "uninternString",
          "package": "intern",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-String.html#v:uninternString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.Text",
          "name": "Text",
          "package": "intern",
          "source": "src/Data-Interned-Internal-Text.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Interned Internal Text",
          "module": "Data.Interned.Internal.Text",
          "name": "Text",
          "package": "intern",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.Text",
          "name": "InternedText",
          "package": "intern",
          "source": "src/Data-Interned-Internal-Text.html#InternedText",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Interned Internal Text",
          "module": "Data.Interned.Internal.Text",
          "name": "InternedText",
          "package": "intern",
          "partial": "Interned Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-Text.html#t:InternedText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.Text",
          "name": "InternedText",
          "package": "intern",
          "signature": "InternedText",
          "source": "src/Data-Interned-Internal-Text.html#InternedText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal Text",
          "module": "Data.Interned.Internal.Text",
          "name": "InternedText",
          "package": "intern",
          "partial": "Interned Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-Text.html#v:InternedText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.Text",
          "name": "internedTextId",
          "package": "intern",
          "signature": "Id",
          "source": "src/Data-Interned-Internal-Text.html#InternedText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal Text",
          "module": "Data.Interned.Internal.Text",
          "name": "internedTextId",
          "package": "intern",
          "partial": "Text Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-Text.html#v:internedTextId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal.Text",
          "name": "uninternedText",
          "package": "intern",
          "signature": "Text",
          "source": "src/Data-Interned-Internal-Text.html#InternedText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal Text",
          "module": "Data.Interned.Internal.Text",
          "name": "uninternedText",
          "package": "intern",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal-Text.html#v:uninternedText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "Internal",
          "package": "intern",
          "source": "src/Data-Interned-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "Internal",
          "package": "intern",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "Cache",
          "package": "intern",
          "source": "src/Data-Interned-Internal.html#Cache",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "Cache",
          "package": "intern",
          "partial": "Cache",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#t:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "CacheState",
          "package": "intern",
          "source": "src/Data-Interned-Internal.html#CacheState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "CacheState",
          "package": "intern",
          "partial": "Cache State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#t:CacheState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "Id",
          "package": "intern",
          "source": "src/Data-Interned-Internal.html#Id",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "Id",
          "package": "intern",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "Interned",
          "package": "intern",
          "source": "src/Data-Interned-Internal.html#Interned",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "Interned",
          "package": "intern",
          "partial": "Interned",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#t:Interned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "Uninternable",
          "package": "intern",
          "source": "src/Data-Interned-Internal.html#Uninternable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "Uninternable",
          "package": "intern",
          "partial": "Uninternable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#t:Uninternable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "Cache",
          "package": "intern",
          "signature": "Cache",
          "source": "src/Data-Interned-Internal.html#Cache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "Cache",
          "package": "intern",
          "partial": "Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "CacheState",
          "package": "intern",
          "signature": "CacheState",
          "source": "src/Data-Interned-Internal.html#CacheState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "CacheState",
          "package": "intern",
          "partial": "Cache State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:CacheState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "cache",
          "package": "intern",
          "signature": "Cache t",
          "source": "src/Data-Interned-Internal.html#cache",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "cache",
          "package": "intern",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Interned.Internal\",\"Data.Interned\"]",
          "name": "cacheSize",
          "package": "intern",
          "signature": "Cache t -\u003e IO Int",
          "source": "src/Data-Interned-Internal.html#cacheSize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:cacheSize\",\"http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:cacheSize\"]"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "cacheSize",
          "normalized": "Cache a-\u003eIO Int",
          "package": "intern",
          "partial": "Size",
          "signature": "Cache t-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:cacheSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "cacheWidth",
          "package": "intern",
          "signature": "p t -\u003e Int",
          "source": "src/Data-Interned-Internal.html#cacheWidth",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "cacheWidth",
          "normalized": "a b-\u003eInt",
          "package": "intern",
          "partial": "Width",
          "signature": "p t-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:cacheWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "content",
          "package": "intern",
          "signature": "(HashMap (Description t) t)",
          "source": "src/Data-Interned-Internal.html#CacheState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "content",
          "package": "intern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "describe",
          "package": "intern",
          "signature": "Uninterned t -\u003e Description t",
          "source": "src/Data-Interned-Internal.html#describe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "describe",
          "normalized": "Uninterned a-\u003eDescription a",
          "package": "intern",
          "signature": "Uninterned t-\u003eDescription t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:describe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "fresh",
          "package": "intern",
          "signature": "Id",
          "source": "src/Data-Interned-Internal.html#CacheState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "fresh",
          "package": "intern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:fresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "getCache",
          "package": "intern",
          "signature": "Array Int (IORef (CacheState t))",
          "source": "src/Data-Interned-Internal.html#Cache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "getCache",
          "package": "intern",
          "partial": "Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:getCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "identify",
          "package": "intern",
          "signature": "Id -\u003e Uninterned t -\u003e t",
          "source": "src/Data-Interned-Internal.html#identify",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "identify",
          "normalized": "Id-\u003eUninterned a-\u003ea",
          "package": "intern",
          "signature": "Id-\u003eUninterned t-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:identify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Interned.Internal\",\"Data.Interned\"]",
          "name": "intern",
          "package": "intern",
          "signature": "Uninterned t -\u003e t",
          "source": "src/Data-Interned-Internal.html#intern",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:intern\",\"http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:intern\"]"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "intern",
          "normalized": "Uninterned a-\u003ea",
          "package": "intern",
          "signature": "Uninterned t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:intern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Interned.Internal\",\"Data.Interned\"]",
          "name": "mkCache",
          "package": "intern",
          "signature": "Cache t",
          "source": "src/Data-Interned-Internal.html#mkCache",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:mkCache\",\"http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:mkCache\"]"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "mkCache",
          "package": "intern",
          "partial": "Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:mkCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "modifyAdvice",
          "package": "intern",
          "signature": "IO t -\u003e IO t",
          "source": "src/Data-Interned-Internal.html#modifyAdvice",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "modifyAdvice",
          "normalized": "IO a-\u003eIO a",
          "package": "intern",
          "partial": "Advice",
          "signature": "IO t-\u003eIO t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:modifyAdvice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "recover",
          "package": "intern",
          "signature": "Description t -\u003e IO (Maybe t)",
          "source": "src/Data-Interned-Internal.html#recover",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "recover",
          "normalized": "Description a-\u003eIO(Maybe a)",
          "package": "intern",
          "signature": "Description t-\u003eIO(Maybe t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:recover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "seedIdentity",
          "package": "intern",
          "signature": "p t -\u003e Id",
          "source": "src/Data-Interned-Internal.html#seedIdentity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "seedIdentity",
          "normalized": "a b-\u003eId",
          "package": "intern",
          "partial": "Identity",
          "signature": "p t-\u003eId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:seedIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Internal",
          "name": "unintern",
          "package": "intern",
          "signature": "t -\u003e Uninterned t",
          "source": "src/Data-Interned-Internal.html#unintern",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned Internal",
          "module": "Data.Interned.Internal",
          "name": "unintern",
          "normalized": "a-\u003eUninterned a",
          "package": "intern",
          "signature": "t-\u003eUninterned t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Internal.html#v:unintern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.String",
          "name": "String",
          "package": "intern",
          "source": "src/Data-Interned-String.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Interned String",
          "module": "Data.Interned.String",
          "name": "String",
          "package": "intern",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.String",
          "name": "InternedString",
          "package": "intern",
          "source": "src/Data-Interned-Internal-String.html#InternedString",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Interned String",
          "module": "Data.Interned.String",
          "name": "InternedString",
          "package": "intern",
          "partial": "Interned String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-String.html#t:InternedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Text",
          "name": "Text",
          "package": "intern",
          "source": "src/Data-Interned-Text.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Interned Text",
          "module": "Data.Interned.Text",
          "name": "Text",
          "package": "intern",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned.Text",
          "name": "InternedText",
          "package": "intern",
          "source": "src/Data-Interned-Internal-Text.html#InternedText",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Interned Text",
          "module": "Data.Interned.Text",
          "name": "InternedText",
          "package": "intern",
          "partial": "Interned Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned-Text.html#t:InternedText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned",
          "name": "Interned",
          "package": "intern",
          "source": "src/Data-Interned.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Interned",
          "module": "Data.Interned",
          "name": "Interned",
          "package": "intern",
          "partial": "Interned",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned",
          "name": "Cache",
          "package": "intern",
          "source": "src/Data-Interned-Internal.html#Cache",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Interned",
          "module": "Data.Interned",
          "name": "Cache",
          "package": "intern",
          "partial": "Cache",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#t:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned",
          "name": "Id",
          "package": "intern",
          "source": "src/Data-Interned-Internal.html#Id",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Interned",
          "module": "Data.Interned",
          "name": "Id",
          "package": "intern",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned",
          "name": "Interned",
          "package": "intern",
          "source": "src/Data-Interned-Internal.html#Interned",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Interned",
          "module": "Data.Interned",
          "name": "Interned",
          "package": "intern",
          "partial": "Interned",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#t:Interned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned",
          "name": "Uninternable",
          "package": "intern",
          "source": "src/Data-Interned-Internal.html#Uninternable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Interned",
          "module": "Data.Interned",
          "name": "Uninternable",
          "package": "intern",
          "partial": "Uninternable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#t:Uninternable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned",
          "name": "cache",
          "package": "intern",
          "signature": "Cache t",
          "source": "src/Data-Interned-Internal.html#cache",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned",
          "module": "Data.Interned",
          "name": "cache",
          "package": "intern",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned",
          "name": "cacheWidth",
          "package": "intern",
          "signature": "p t -\u003e Int",
          "source": "src/Data-Interned-Internal.html#cacheWidth",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned",
          "module": "Data.Interned",
          "name": "cacheWidth",
          "normalized": "a b-\u003eInt",
          "package": "intern",
          "partial": "Width",
          "signature": "p t-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:cacheWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned",
          "name": "describe",
          "package": "intern",
          "signature": "Uninterned t -\u003e Description t",
          "source": "src/Data-Interned-Internal.html#describe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned",
          "module": "Data.Interned",
          "name": "describe",
          "normalized": "Uninterned a-\u003eDescription a",
          "package": "intern",
          "signature": "Uninterned t-\u003eDescription t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:describe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned",
          "name": "identify",
          "package": "intern",
          "signature": "Id -\u003e Uninterned t -\u003e t",
          "source": "src/Data-Interned-Internal.html#identify",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned",
          "module": "Data.Interned",
          "name": "identify",
          "normalized": "Id-\u003eUninterned a-\u003ea",
          "package": "intern",
          "signature": "Id-\u003eUninterned t-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:identify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned",
          "name": "modifyAdvice",
          "package": "intern",
          "signature": "IO t -\u003e IO t",
          "source": "src/Data-Interned-Internal.html#modifyAdvice",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned",
          "module": "Data.Interned",
          "name": "modifyAdvice",
          "normalized": "IO a-\u003eIO a",
          "package": "intern",
          "partial": "Advice",
          "signature": "IO t-\u003eIO t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:modifyAdvice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned",
          "name": "seedIdentity",
          "package": "intern",
          "signature": "p t -\u003e Id",
          "source": "src/Data-Interned-Internal.html#seedIdentity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned",
          "module": "Data.Interned",
          "name": "seedIdentity",
          "normalized": "a b-\u003eId",
          "package": "intern",
          "partial": "Identity",
          "signature": "p t-\u003eId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:seedIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Interned",
          "name": "unintern",
          "package": "intern",
          "signature": "t -\u003e Uninterned t",
          "source": "src/Data-Interned-Internal.html#unintern",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Interned",
          "module": "Data.Interned",
          "name": "unintern",
          "normalized": "a-\u003eUninterned a",
          "package": "intern",
          "signature": "t-\u003eUninterned t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/intern/docs/Data-Interned.html#v:unintern"
      }
    }
  ]
]