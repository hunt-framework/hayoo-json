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
        "word": "multiset"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of multisets of integers, also somtimes called bags.\n\u003c/p\u003e\u003cp\u003eA multiset is like a set, but it can contain multiple copies of the same element.\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.MultiSet (MultiSet)\n  import qualified Data.MultiSet as MultiSet\n\u003c/pre\u003e\u003cp\u003eThe implementation of \u003ccode\u003e\u003ca\u003eMultiSet\u003c/a\u003e\u003c/code\u003e is based on the \u003ca\u003eData.IntMap\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eMany operations have a worst-case complexity of \u003cem\u003eO(min(n,W))\u003c/em\u003e.\n This means that the operation can become linear in the number of\n elements with a maximum of \u003cem\u003eW\u003c/em\u003e -- the number of bits in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n (32 or 64). Here \u003cem\u003en\u003c/em\u003e refers to the number of distinct elements,\n \u003cem\u003et\u003c/em\u003e is the total number of elements.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IntMultiSet",
          "name": "IntMultiSet",
          "package": "multiset",
          "source": "src/Data-IntMultiSet.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of multisets of integers also somtimes called bags multiset is like set but it can contain multiple copies of the same element Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.MultiSet MultiSet import qualified Data.MultiSet as MultiSet The implementation of MultiSet is based on the Data.IntMap module Many operations have worst-case complexity of min This means that the operation can become linear in the number of elements with maximum of the number of bits in an Int or Here refers to the number of distinct elements is the total number of elements",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "IntMultiSet",
          "package": "multiset",
          "partial": "Int Multi Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multiset of integers.\n   The same value can occur multiple times.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "IntMultiSet",
          "package": "multiset",
          "source": "src/Data-IntMultiSet.html#IntMultiSet",
          "type": "data"
        },
        "index": {
          "description": "multiset of integers The same value can occur multiple times",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "IntMultiSet",
          "package": "multiset",
          "partial": "Int Multi Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#t:IntMultiSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IntMultiSet",
          "name": "Key",
          "package": "multiset",
          "source": "src/Data-IntMultiSet.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "Key",
          "package": "multiset",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of occurences of an element\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "Occur",
          "package": "multiset",
          "source": "src/Data-IntMultiSet.html#Occur",
          "type": "type"
        },
        "index": {
          "description": "The number of occurences of an element",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "Occur",
          "package": "multiset",
          "partial": "Occur",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#t:Occur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "(\\\\)",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "See difference",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "(\\\\) \\\\",
          "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "signature": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The monad bind operation, (\u003e\u003e=), for multisets.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "bind",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e (Key -\u003e IntMultiSet) -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#bind",
          "type": "function"
        },
        "index": {
          "description": "The monad bind operation for multisets",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "bind",
          "normalized": "IntMultiSet-\u003e(Key-\u003eIntMultiSet)-\u003eIntMultiSet",
          "package": "multiset",
          "signature": "IntMultiSet-\u003e(Key-\u003eIntMultiSet)-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Apply a function to each element, and take the union of the results\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "concatMap",
          "package": "multiset",
          "signature": "(Key -\u003e [Key]) -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Apply function to each element and take the union of the results",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "concatMap",
          "normalized": "(Key-\u003e[Key])-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Map",
          "signature": "(Key-\u003e[Key])-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete a single element from a multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "delete",
          "package": "multiset",
          "signature": "Key -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#delete",
          "type": "function"
        },
        "index": {
          "description": "min Delete single element from multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "delete",
          "normalized": "Key-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "signature": "Key-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete all occurences of an element from a multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "deleteAll",
          "package": "multiset",
          "signature": "Key -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#deleteAll",
          "type": "function"
        },
        "index": {
          "description": "min Delete all occurences of an element from multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "deleteAll",
          "normalized": "Key-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "All",
          "signature": "Key-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the maximal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMax set = (findMax set, deleteMax set)\n\u003c/pre\u003e",
          "module": "Data.IntMultiSet",
          "name": "deleteFindMax",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e (Key, IntMultiSet)",
          "source": "src/Data-IntMultiSet.html#deleteFindMax",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the maximal element deleteFindMax set findMax set deleteMax set",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "deleteFindMax",
          "normalized": "IntMultiSet-\u003e(Key,IntMultiSet)",
          "package": "multiset",
          "partial": "Find Max",
          "signature": "IntMultiSet-\u003e(Key,IntMultiSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteFindMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the minimal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMin set = (findMin set, deleteMin set)\n\u003c/pre\u003e",
          "module": "Data.IntMultiSet",
          "name": "deleteFindMin",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e (Key, IntMultiSet)",
          "source": "src/Data-IntMultiSet.html#deleteFindMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the minimal element deleteFindMin set findMin set deleteMin set",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "deleteFindMin",
          "normalized": "IntMultiSet-\u003e(Key,IntMultiSet)",
          "package": "multiset",
          "partial": "Find Min",
          "signature": "IntMultiSet-\u003e(Key,IntMultiSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteFindMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Delete an element from a multiset a given number of times.\n\u003c/p\u003e\u003cp\u003eNegative numbers add occurences of the given element.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "deleteMany",
          "package": "multiset",
          "signature": "Key -\u003e Occur -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#deleteMany",
          "type": "function"
        },
        "index": {
          "description": "min Delete an element from multiset given number of times Negative numbers add occurences of the given element",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "deleteMany",
          "normalized": "Key-\u003eOccur-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Many",
          "signature": "Key-\u003eOccur-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the maximal element.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "deleteMax",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "log Delete the maximal element",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "deleteMax",
          "normalized": "IntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Max",
          "signature": "IntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete all occurences of the maximal element.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "deleteMaxAll",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#deleteMaxAll",
          "type": "function"
        },
        "index": {
          "description": "log Delete all occurences of the maximal element",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "deleteMaxAll",
          "normalized": "IntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Max All",
          "signature": "IntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteMaxAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the minimal element.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "deleteMin",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete the minimal element",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "deleteMin",
          "normalized": "IntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Min",
          "signature": "IntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete all occurences of the minimal element.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "deleteMinAll",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#deleteMinAll",
          "type": "function"
        },
        "index": {
          "description": "log Delete all occurences of the minimal element",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "deleteMinAll",
          "normalized": "IntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Min All",
          "signature": "IntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:deleteMinAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference of two multisets. \n The implementation uses an efficient \u003cem\u003ehedge\u003c/em\u003e algorithm comparable with \u003cem\u003ehedge-union\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "difference",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Difference of two multisets The implementation uses an efficient hedge algorithm comparable with hedge-union",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "difference",
          "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "signature": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The distinct elements of a multiset, each element occurs only once in the list.\n\u003c/p\u003e\u003cpre\u003e distinctElems = map fst . toOccurList\n\u003c/pre\u003e",
          "module": "Data.IntMultiSet",
          "name": "distinctElems",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e [Key]",
          "source": "src/Data-IntMultiSet.html#distinctElems",
          "type": "function"
        },
        "index": {
          "description": "The distinct elements of multiset each element occurs only once in the list distinctElems map fst toOccurList",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "distinctElems",
          "normalized": "IntMultiSet-\u003e[Key]",
          "package": "multiset",
          "partial": "Elems",
          "signature": "IntMultiSet-\u003e[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:distinctElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of distinct elements in the multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "distinctSize",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e Int",
          "source": "src/Data-IntMultiSet.html#distinctSize",
          "type": "function"
        },
        "index": {
          "description": "The number of distinct elements in the multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "distinctSize",
          "normalized": "IntMultiSet-\u003eInt",
          "package": "multiset",
          "partial": "Size",
          "signature": "IntMultiSet-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:distinctSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. The elements of a multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "elems",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e [Key]",
          "source": "src/Data-IntMultiSet.html#elems",
          "type": "function"
        },
        "index": {
          "description": "The elements of multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "elems",
          "normalized": "IntMultiSet-\u003e[Key]",
          "package": "multiset",
          "signature": "IntMultiSet-\u003e[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty mutli set.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "empty",
          "package": "multiset",
          "signature": "IntMultiSet",
          "source": "src/Data-IntMultiSet.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty mutli set",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "empty",
          "package": "multiset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all elements that satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "filter",
          "package": "multiset",
          "signature": "(Key -\u003e Bool) -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter all elements that satisfy the predicate",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "filter",
          "normalized": "(Key-\u003eBool)-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "signature": "(Key-\u003eBool)-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The maximal element of a multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "findMax",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e Key",
          "source": "src/Data-IntMultiSet.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "log The maximal element of multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "findMax",
          "normalized": "IntMultiSet-\u003eKey",
          "package": "multiset",
          "partial": "Max",
          "signature": "IntMultiSet-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The minimal element of a multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "findMin",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e Key",
          "source": "src/Data-IntMultiSet.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "log The minimal element of multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "findMin",
          "normalized": "IntMultiSet-\u003eKey",
          "package": "multiset",
          "partial": "Min",
          "signature": "IntMultiSet-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Fold over the elements of a multiset in an unspecified order.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "fold",
          "package": "multiset",
          "signature": "(Key -\u003e b -\u003e b) -\u003e b -\u003e IntMultiSet -\u003e b",
          "source": "src/Data-IntMultiSet.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Fold over the elements of multiset in an unspecified order",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "fold",
          "normalized": "(Key-\u003ea-\u003ea)-\u003ea-\u003eIntMultiSet-\u003ea",
          "package": "multiset",
          "signature": "(Key-\u003eb-\u003eb)-\u003eb-\u003eIntMultiSet-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold over the elements of a multiset with their occurences.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "foldOccur",
          "package": "multiset",
          "signature": "(Key -\u003e Occur -\u003e b -\u003e b) -\u003e b -\u003e IntMultiSet -\u003e b",
          "source": "src/Data-IntMultiSet.html#foldOccur",
          "type": "function"
        },
        "index": {
          "description": "Fold over the elements of multiset with their occurences",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "foldOccur",
          "normalized": "(Key-\u003eOccur-\u003ea-\u003ea)-\u003ea-\u003eIntMultiSet-\u003ea",
          "package": "multiset",
          "partial": "Occur",
          "signature": "(Key-\u003eOccur-\u003eb-\u003eb)-\u003eb-\u003eIntMultiSet-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:foldOccur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Build a multiset from an ascending list in linear time.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "fromAscList",
          "package": "multiset",
          "signature": "[Int] -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "Build multiset from an ascending list in linear time The precondition input list is ascending is not checked",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "fromAscList",
          "normalized": "[Int]-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Asc List",
          "signature": "[Int]-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a multiset from an ascending list of element/occurence pairs in linear time.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "fromAscOccurList",
          "package": "multiset",
          "signature": "[(Int, Int)] -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#fromAscOccurList",
          "type": "function"
        },
        "index": {
          "description": "Build multiset from an ascending list of element occurence pairs in linear time The precondition input list is ascending is not checked",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "fromAscOccurList",
          "normalized": "[(Int,Int)]-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Asc Occur List",
          "signature": "[(Int,Int)]-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromAscOccurList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a multiset from an ascending list of distinct elements in linear time.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "fromDistinctAscList",
          "package": "multiset",
          "signature": "[Int] -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#fromDistinctAscList",
          "type": "function"
        },
        "index": {
          "description": "Build multiset from an ascending list of distinct elements in linear time The precondition input list is strictly ascending is not checked",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "fromDistinctAscList",
          "normalized": "[Int]-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Distinct Asc List",
          "signature": "[Int]-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a multiset from an ascending list of elements/occurence pairs where each elements appears only once.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "fromDistinctAscOccurList",
          "package": "multiset",
          "signature": "[(Int, Int)] -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#fromDistinctAscOccurList",
          "type": "function"
        },
        "index": {
          "description": "Build multiset from an ascending list of elements occurence pairs where each elements appears only once The precondition input list is strictly ascending is not checked",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "fromDistinctAscOccurList",
          "normalized": "[(Int,Int)]-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Distinct Asc Occur List",
          "signature": "[(Int,Int)]-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromDistinctAscOccurList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(t*min(n,W))\u003c/em\u003e. Create a multiset from a list of elements.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "fromList",
          "package": "multiset",
          "signature": "[Int] -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "min Create multiset from list of elements",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "fromList",
          "normalized": "[Int]-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "List",
          "signature": "[Int]-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e from elements to occurrences to a multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "fromMap",
          "package": "multiset",
          "signature": "IntMap Int -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#fromMap",
          "type": "function"
        },
        "index": {
          "description": "Convert an IntMap from elements to occurrences to multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "fromMap",
          "normalized": "IntMap Int-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Map",
          "signature": "IntMap Int-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*min(n,W))\u003c/em\u003e. Create a multiset from a list of element/occurence pairs.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "fromOccurList",
          "package": "multiset",
          "signature": "[(Int, Int)] -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#fromOccurList",
          "type": "function"
        },
        "index": {
          "description": "min Create multiset from list of element occurence pairs",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "fromOccurList",
          "normalized": "[(Int,Int)]-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Occur List",
          "signature": "[(Int,Int)]-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromOccurList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Convert an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e from elements to occurrences to a multiset.\n Assumes that the \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e contains only values larger than one.\n \u003cem\u003eThe precondition (all elements \u003e 1) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "fromOccurMap",
          "package": "multiset",
          "signature": "IntMap Int -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#fromOccurMap",
          "type": "function"
        },
        "index": {
          "description": "Convert an IntMap from elements to occurrences to multiset Assumes that the IntMap contains only values larger than one The precondition all elements is not checked",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "fromOccurMap",
          "normalized": "IntMap Int-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Occur Map",
          "signature": "IntMap Int-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromOccurMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e to a multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "fromSet",
          "package": "multiset",
          "signature": "IntSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#fromSet",
          "type": "function"
        },
        "index": {
          "description": "Convert an IntMap to multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "fromSet",
          "normalized": "IntSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Set",
          "signature": "IntSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:fromSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Insert an element in a multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "insert",
          "package": "multiset",
          "signature": "Key -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#insert",
          "type": "function"
        },
        "index": {
          "description": "min Insert an element in multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "insert",
          "normalized": "Key-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "signature": "Key-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Insert an element in a multiset a given number of times.\n\u003c/p\u003e\u003cp\u003eNegative numbers remove occurences of the given element.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "insertMany",
          "package": "multiset",
          "signature": "Key -\u003e Occur -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#insertMany",
          "type": "function"
        },
        "index": {
          "description": "min Insert an element in multiset given number of times Negative numbers remove occurences of the given element",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "insertMany",
          "normalized": "Key-\u003eOccur-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Many",
          "signature": "Key-\u003eOccur-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:insertMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The intersection of two multisets.\n\u003c/p\u003e\u003cp\u003eprints \u003ccode\u003e(fromList [A],fromList [B])\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "intersection",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "The intersection of two multisets prints fromList fromList",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "intersection",
          "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "signature": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "isProperSubsetOf",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntMultiSet -\u003e Bool",
          "source": "src/Data-IntMultiSet.html#isProperSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "Is this proper subset ie subset but not equal",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "isProperSubsetOf",
          "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eBool",
          "package": "multiset",
          "partial": "Proper Subset Of",
          "signature": "IntMultiSet-\u003eIntMultiSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:isProperSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a subset?\n \u003ccode\u003e(s1 `isSubsetOf` s2)\u003c/code\u003e tells whether \u003ccode\u003es1\u003c/code\u003e is a subset of \u003ccode\u003es2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "isSubsetOf",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntMultiSet -\u003e Bool",
          "source": "src/Data-IntMultiSet.html#isSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "Is this subset s1 isSubsetOf s2 tells whether s1 is subset of s2",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "isSubsetOf",
          "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eBool",
          "package": "multiset",
          "partial": "Subset Of",
          "signature": "IntMultiSet-\u003eIntMultiSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:isSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The monad join operation for multisets.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "join",
          "package": "multiset",
          "signature": "MultiSet IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#join",
          "type": "function"
        },
        "index": {
          "description": "The monad join operation for multisets",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "join",
          "normalized": "MultiSet IntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "signature": "MultiSet IntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e is the multiset obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "map",
          "package": "multiset",
          "signature": "(Key -\u003e Key) -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#map",
          "type": "function"
        },
        "index": {
          "description": "log map is the multiset obtained by applying to each element of",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "map",
          "normalized": "(Key-\u003eKey)-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "signature": "(Key-\u003eKey)-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "mapEither",
          "package": "multiset",
          "signature": "(Key -\u003e Either Key Key) -\u003e IntMultiSet -\u003e (IntMultiSet, IntMultiSet)",
          "source": "src/Data-IntMultiSet.html#mapEither",
          "type": "function"
        },
        "index": {
          "description": "Map and separate the Left and Right results",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "mapEither",
          "normalized": "(Key-\u003eEither Key Key)-\u003eIntMultiSet-\u003e(IntMultiSet,IntMultiSet)",
          "package": "multiset",
          "partial": "Either",
          "signature": "(Key-\u003eEither Key Key)-\u003eIntMultiSet-\u003e(IntMultiSet,IntMultiSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "mapMaybe",
          "package": "multiset",
          "signature": "(Key -\u003e Maybe Key) -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Map and collect the Just results",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "mapMaybe",
          "normalized": "(Key-\u003eMaybe Key)-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Maybe",
          "signature": "(Key-\u003eMaybe Key)-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapMonotonic\u003c/a\u003e\u003c/code\u003e f s == \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e, but works only when \u003ccode\u003ef\u003c/code\u003e is strictly monotonic.\n \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n Semi-formally, we have:\n\u003c/p\u003e\u003cpre\u003e and [x \u003c y ==\u003e f x \u003c f y | x \u003c- ls, y \u003c- ls]\n                     ==\u003e mapMonotonic f s == map f s\n     where ls = toList s\n\u003c/pre\u003e",
          "module": "Data.IntMultiSet",
          "name": "mapMonotonic",
          "package": "multiset",
          "signature": "(Key -\u003e Key) -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#mapMonotonic",
          "type": "function"
        },
        "index": {
          "description": "The mapMonotonic map but works only when is strictly monotonic The precondition is not checked Semi-formally we have and ls ls mapMonotonic map where ls toList",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "mapMonotonic",
          "normalized": "(Key-\u003eKey)-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Monotonic",
          "signature": "(Key-\u003eKey)-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:mapMonotonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The union of two multisets.\n The number of occurences of each element in the union is\n the maximum of the number of occurences in the arguments (instead of the sum).\n\u003c/p\u003e\u003cp\u003eThe implementation uses the efficient \u003cem\u003ehedge-union\u003c/em\u003e algorithm.\n Hedge-union is more efficient on (bigset \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e smallset).\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "maxUnion",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#maxUnion",
          "type": "function"
        },
        "index": {
          "description": "The union of two multisets The number of occurences of each element in the union is the maximum of the number of occurences in the arguments instead of the sum The implementation uses the efficient hedge-union algorithm Hedge-union is more efficient on bigset union smallset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "maxUnion",
          "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Union",
          "signature": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:maxUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the maximal element of the multiset, and the set stripped from that element\n \u003ccode\u003efail\u003c/code\u003es (in the monad) when passed an empty multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "maxView",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e m (Key, IntMultiSet)",
          "source": "src/Data-IntMultiSet.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "log Retrieves the maximal element of the multiset and the set stripped from that element fail in the monad when passed an empty multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "maxView",
          "normalized": "IntMultiSet-\u003ea(Key,IntMultiSet)",
          "package": "multiset",
          "partial": "View",
          "signature": "IntMultiSet-\u003em(Key,IntMultiSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Is the element in the multiset?\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "member",
          "package": "multiset",
          "signature": "Key -\u003e IntMultiSet -\u003e Bool",
          "source": "src/Data-IntMultiSet.html#member",
          "type": "function"
        },
        "index": {
          "description": "min Is the element in the multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "member",
          "normalized": "Key-\u003eIntMultiSet-\u003eBool",
          "package": "multiset",
          "signature": "Key-\u003eIntMultiSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the minimal element of the multiset, and the set stripped from that element\n \u003ccode\u003efail\u003c/code\u003es (in the monad) when passed an empty multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "minView",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e m (Key, IntMultiSet)",
          "source": "src/Data-IntMultiSet.html#minView",
          "type": "function"
        },
        "index": {
          "description": "log Retrieves the minimal element of the multiset and the set stripped from that element fail in the monad when passed an empty multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "minView",
          "normalized": "IntMultiSet-\u003ea(Key,IntMultiSet)",
          "package": "multiset",
          "partial": "View",
          "signature": "IntMultiSet-\u003em(Key,IntMultiSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. Is the element not in the multiset?\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "notMember",
          "package": "multiset",
          "signature": "Key -\u003e IntMultiSet -\u003e Bool",
          "source": "src/Data-IntMultiSet.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "min Is the element not in the multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "notMember",
          "normalized": "Key-\u003eIntMultiSet-\u003eBool",
          "package": "multiset",
          "partial": "Member",
          "signature": "Key-\u003eIntMultiSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is this the empty multiset?\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "null",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e Bool",
          "source": "src/Data-IntMultiSet.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is this the empty multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "null",
          "normalized": "IntMultiSet-\u003eBool",
          "package": "multiset",
          "signature": "IntMultiSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,W))\u003c/em\u003e. The number of occurences of an element in a multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "occur",
          "package": "multiset",
          "signature": "Key -\u003e IntMultiSet -\u003e Int",
          "source": "src/Data-IntMultiSet.html#occur",
          "type": "function"
        },
        "index": {
          "description": "min The number of occurences of an element in multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "occur",
          "normalized": "Key-\u003eIntMultiSet-\u003eInt",
          "package": "multiset",
          "signature": "Key-\u003eIntMultiSet-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:occur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the multiset into two multisets, one with all elements that satisfy\n the predicate and one with all elements that don't satisfy the predicate.\n See also \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "partition",
          "package": "multiset",
          "signature": "(Key -\u003e Bool) -\u003e IntMultiSet -\u003e (IntMultiSet, IntMultiSet)",
          "source": "src/Data-IntMultiSet.html#partition",
          "type": "function"
        },
        "index": {
          "description": "Partition the multiset into two multisets one with all elements that satisfy the predicate and one with all elements that don satisfy the predicate See also split",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "partition",
          "normalized": "(Key-\u003eBool)-\u003eIntMultiSet-\u003e(IntMultiSet,IntMultiSet)",
          "package": "multiset",
          "signature": "(Key-\u003eBool)-\u003eIntMultiSet-\u003e(IntMultiSet,IntMultiSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Show the tree that implements the set. The tree is shown\n in a compressed, hanging format.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "showTree",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e String",
          "source": "src/Data-IntMultiSet.html#showTree",
          "type": "function"
        },
        "index": {
          "description": "Show the tree that implements the set The tree is shown in compressed hanging format",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "showTree",
          "normalized": "IntMultiSet-\u003eString",
          "package": "multiset",
          "partial": "Tree",
          "signature": "IntMultiSet-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:showTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The expression (\u003ccode\u003eshowTreeWith hang wide map\u003c/code\u003e) shows\n the tree that implements the set. If \u003ccode\u003ehang\u003c/code\u003e is\n \u003ccode\u003eTrue\u003c/code\u003e, a \u003cem\u003ehanging\u003c/em\u003e tree is shown otherwise a rotated tree is shown. If\n \u003ccode\u003ewide\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, an extra wide version is shown.\n\u003c/p\u003e\u003cpre\u003e Set\u003e putStrLn $ showTreeWith True False $ fromDistinctAscList [1,1,2,3,4,5]\n (1*) 4\n +--(1*) 2\n |  +--(2*) 1\n |  +--(1*) 3\n +--(1*) 5\n \n Set\u003e putStrLn $ showTreeWith True True $ fromDistinctAscList [1,1,2,3,4,5]\n (1*) 4\n |\n +--(1*) 2\n |  |\n |  +--(2*) 1\n |  |\n |  +--(1*) 3\n |\n +--(1*) 5\n \n Set\u003e putStrLn $ showTreeWith False True $ fromDistinctAscList [1,1,2,3,4,5]\n +--(1*) 5\n |\n (1*) 4\n |\n |  +--(1*) 3\n |  |\n +--(1*) 2\n    |\n    +--(2*) 1\n\u003c/pre\u003e",
          "module": "Data.IntMultiSet",
          "name": "showTreeWith",
          "package": "multiset",
          "signature": "Bool -\u003e Bool -\u003e IntMultiSet -\u003e String",
          "source": "src/Data-IntMultiSet.html#showTreeWith",
          "type": "function"
        },
        "index": {
          "description": "The expression showTreeWith hang wide map shows the tree that implements the set If hang is True hanging tree is shown otherwise rotated tree is shown If wide is True an extra wide version is shown Set putStrLn showTreeWith True False fromDistinctAscList Set putStrLn showTreeWith True True fromDistinctAscList Set putStrLn showTreeWith False True fromDistinctAscList",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "showTreeWith",
          "normalized": "Bool-\u003eBool-\u003eIntMultiSet-\u003eString",
          "package": "multiset",
          "partial": "Tree With",
          "signature": "Bool-\u003eBool-\u003eIntMultiSet-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:showTreeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Create a singleton mutli set.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "singleton",
          "package": "multiset",
          "signature": "Key -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create singleton mutli set",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "singleton",
          "normalized": "Key-\u003eIntMultiSet",
          "package": "multiset",
          "signature": "Key-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The number of elements in the multiset.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "size",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e Int",
          "source": "src/Data-IntMultiSet.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the multiset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "size",
          "normalized": "IntMultiSet-\u003eInt",
          "package": "multiset",
          "signature": "IntMultiSet-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e x set\u003c/code\u003e) is a pair \u003ccode\u003e(set1,set2)\u003c/code\u003e\n where all elements in \u003ccode\u003eset1\u003c/code\u003e are lower than \u003ccode\u003ex\u003c/code\u003e and all elements in\n \u003ccode\u003eset2\u003c/code\u003e larger than \u003ccode\u003ex\u003c/code\u003e. \u003ccode\u003ex\u003c/code\u003e is not found in neither \u003ccode\u003eset1\u003c/code\u003e nor \u003ccode\u003eset2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "split",
          "package": "multiset",
          "signature": "Int -\u003e IntMultiSet -\u003e (IntMultiSet, IntMultiSet)",
          "source": "src/Data-IntMultiSet.html#split",
          "type": "function"
        },
        "index": {
          "description": "log The expression split set is pair set1 set2 where all elements in set1 are lower than and all elements in set2 larger than is not found in neither set1 nor set2",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "split",
          "normalized": "Int-\u003eIntMultiSet-\u003e(IntMultiSet,IntMultiSet)",
          "package": "multiset",
          "signature": "Int-\u003eIntMultiSet-\u003e(IntMultiSet,IntMultiSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Performs a \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e but also returns the number of\n occurences of the pivot element in the original set.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "splitOccur",
          "package": "multiset",
          "signature": "Int -\u003e IntMultiSet -\u003e (IntMultiSet, Int, IntMultiSet)",
          "source": "src/Data-IntMultiSet.html#splitOccur",
          "type": "function"
        },
        "index": {
          "description": "log Performs split but also returns the number of occurences of the pivot element in the original set",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "splitOccur",
          "normalized": "Int-\u003eIntMultiSet-\u003e(IntMultiSet,Int,IntMultiSet)",
          "package": "multiset",
          "partial": "Occur",
          "signature": "Int-\u003eIntMultiSet-\u003e(IntMultiSet,Int,IntMultiSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:splitOccur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Convert the multiset to an ascending list of elements.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "toAscList",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e [Key]",
          "source": "src/Data-IntMultiSet.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Convert the multiset to an ascending list of elements",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "toAscList",
          "normalized": "IntMultiSet-\u003e[Key]",
          "package": "multiset",
          "partial": "Asc List",
          "signature": "IntMultiSet-\u003e[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the multiset to an ascending list of element/occurence pairs.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "toAscOccurList",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e [(Int, Int)]",
          "source": "src/Data-IntMultiSet.html#toAscOccurList",
          "type": "function"
        },
        "index": {
          "description": "Convert the multiset to an ascending list of element occurence pairs",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "toAscOccurList",
          "normalized": "IntMultiSet-\u003e[(Int,Int)]",
          "package": "multiset",
          "partial": "Asc Occur List",
          "signature": "IntMultiSet-\u003e[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:toAscOccurList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Convert the multiset to a list of elements.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "toList",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e [Key]",
          "source": "src/Data-IntMultiSet.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert the multiset to list of elements",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "toList",
          "normalized": "IntMultiSet-\u003e[Key]",
          "package": "multiset",
          "partial": "List",
          "signature": "IntMultiSet-\u003e[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Convert a multiset to an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e from elements to number of occurrences.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "toMap",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntMap Int",
          "source": "src/Data-IntMultiSet.html#toMap",
          "type": "function"
        },
        "index": {
          "description": "Convert multiset to an IntMap from elements to number of occurrences",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "toMap",
          "normalized": "IntMultiSet-\u003eIntMap Int",
          "package": "multiset",
          "partial": "Map",
          "signature": "IntMultiSet-\u003eIntMap Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the multiset to a list of element/occurence pairs.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "toOccurList",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e [(Int, Int)]",
          "source": "src/Data-IntMultiSet.html#toOccurList",
          "type": "function"
        },
        "index": {
          "description": "Convert the multiset to list of element occurence pairs",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "toOccurList",
          "normalized": "IntMultiSet-\u003e[(Int,Int)]",
          "package": "multiset",
          "partial": "Occur List",
          "signature": "IntMultiSet-\u003e[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:toOccurList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a multiset to an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e, removing duplicates.\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "toSet",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntSet",
          "source": "src/Data-IntMultiSet.html#toSet",
          "type": "function"
        },
        "index": {
          "description": "Convert multiset to an IntMap removing duplicates",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "toSet",
          "normalized": "IntMultiSet-\u003eIntSet",
          "package": "multiset",
          "partial": "Set",
          "signature": "IntMultiSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:toSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The union of two multisets. The union adds the occurences together.\n\u003c/p\u003e\u003cp\u003eThe implementation uses the efficient \u003cem\u003ehedge-union\u003c/em\u003e algorithm.\n Hedge-union is more efficient on (bigset \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e smallset).\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "union",
          "package": "multiset",
          "signature": "IntMultiSet -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#union",
          "type": "function"
        },
        "index": {
          "description": "The union of two multisets The union adds the occurences together The implementation uses the efficient hedge-union algorithm Hedge-union is more efficient on bigset union smallset",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "union",
          "normalized": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "signature": "IntMultiSet-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of multisets: (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "unions",
          "package": "multiset",
          "signature": "[IntMultiSet] -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#unions",
          "type": "function"
        },
        "index": {
          "description": "The union of list of multisets unions foldl union empty",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "unions",
          "normalized": "[IntMultiSet]-\u003eIntMultiSet",
          "package": "multiset",
          "signature": "[IntMultiSet]-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Apply a function to each element, and take the union of the results\n\u003c/p\u003e",
          "module": "Data.IntMultiSet",
          "name": "unionsMap",
          "package": "multiset",
          "signature": "(Key -\u003e IntMultiSet) -\u003e IntMultiSet -\u003e IntMultiSet",
          "source": "src/Data-IntMultiSet.html#unionsMap",
          "type": "function"
        },
        "index": {
          "description": "Apply function to each element and take the union of the results",
          "hierarchy": "Data IntMultiSet",
          "module": "Data.IntMultiSet",
          "name": "unionsMap",
          "normalized": "(Key-\u003eIntMultiSet)-\u003eIntMultiSet-\u003eIntMultiSet",
          "package": "multiset",
          "partial": "Map",
          "signature": "(Key-\u003eIntMultiSet)-\u003eIntMultiSet-\u003eIntMultiSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-IntMultiSet.html#v:unionsMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of multisets, also somtimes called bags.\n\u003c/p\u003e\u003cp\u003eA multiset is like a set, but it can contain multiple copies of the same element.\n Unless otherwise specified all insert and remove opertions affect only a single copy of an element.\n For example the minimal element before and after \u003ccode\u003edeleteMin\u003c/code\u003e could be the same, only with one less occurence.\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.MultiSet (MultiSet)\n  import qualified Data.MultiSet as MultiSet\n\u003c/pre\u003e\u003cp\u003eThe implementation of \u003ccode\u003e\u003ca\u003eMultiSet\u003c/a\u003e\u003c/code\u003e is based on the \u003ca\u003eData.Map\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eNote that the implementation is \u003cem\u003eleft-biased\u003c/em\u003e -- the elements of a\n first argument are always preferred to the second, for example in\n \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.  Of course, left-biasing can only be observed\n when equality is an equivalence relation instead of structural\n equality.\n\u003c/p\u003e\u003cp\u003eIn the complexity of functions \u003cem\u003en\u003c/em\u003e refers to the number of distinct elements,\n \u003cem\u003et\u003c/em\u003e is the total number of elements.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MultiSet",
          "name": "MultiSet",
          "package": "multiset",
          "source": "src/Data-MultiSet.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of multisets also somtimes called bags multiset is like set but it can contain multiple copies of the same element Unless otherwise specified all insert and remove opertions affect only single copy of an element For example the minimal element before and after deleteMin could be the same only with one less occurence Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.MultiSet MultiSet import qualified Data.MultiSet as MultiSet The implementation of MultiSet is based on the Data.Map module Note that the implementation is left-biased the elements of first argument are always preferred to the second for example in union or insert Of course left-biasing can only be observed when equality is an equivalence relation instead of structural equality In the complexity of functions refers to the number of distinct elements is the total number of elements",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "MultiSet",
          "package": "multiset",
          "partial": "Multi Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multiset of values \u003ccode\u003ea\u003c/code\u003e.\n   The same value can occur multiple times.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "MultiSet",
          "package": "multiset",
          "source": "src/Data-MultiSet.html#MultiSet",
          "type": "data"
        },
        "index": {
          "description": "multiset of values The same value can occur multiple times",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "MultiSet",
          "package": "multiset",
          "partial": "Multi Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#t:MultiSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of occurences of an element\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "Occur",
          "package": "multiset",
          "source": "src/Data-MultiSet.html#Occur",
          "type": "type"
        },
        "index": {
          "description": "The number of occurences of an element",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "Occur",
          "package": "multiset",
          "partial": "Occur",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#t:Occur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "(\\\\)",
          "package": "multiset",
          "signature": "MultiSet a -\u003e MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "See difference",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "(\\\\) \\\\",
          "normalized": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "signature": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The monad bind operation, (\u003e\u003e=), for multisets.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "bind",
          "package": "multiset",
          "signature": "MultiSet a -\u003e (a -\u003e MultiSet b) -\u003e MultiSet b",
          "source": "src/Data-MultiSet.html#bind",
          "type": "function"
        },
        "index": {
          "description": "The monad bind operation for multisets",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "bind",
          "normalized": "MultiSet a-\u003e(a-\u003eMultiSet b)-\u003eMultiSet b",
          "package": "multiset",
          "signature": "MultiSet a-\u003e(a-\u003eMultiSet b)-\u003eMultiSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Apply a function to each element, and take the union of the results\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "concatMap",
          "package": "multiset",
          "signature": "(a -\u003e [b]) -\u003e MultiSet a -\u003e MultiSet b",
          "source": "src/Data-MultiSet.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Apply function to each element and take the union of the results",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "concatMap",
          "normalized": "(a-\u003e[b])-\u003eMultiSet a-\u003eMultiSet b",
          "package": "multiset",
          "partial": "Map",
          "signature": "(a-\u003e[b])-\u003eMultiSet a-\u003eMultiSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a single element from a multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "delete",
          "package": "multiset",
          "signature": "a -\u003e MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#delete",
          "type": "function"
        },
        "index": {
          "description": "log Delete single element from multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "delete",
          "normalized": "a-\u003eMultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "signature": "a-\u003eMultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete all occurences of an element from a multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "deleteAll",
          "package": "multiset",
          "signature": "a -\u003e MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#deleteAll",
          "type": "function"
        },
        "index": {
          "description": "log Delete all occurences of an element from multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "deleteAll",
          "normalized": "a-\u003eMultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "partial": "All",
          "signature": "a-\u003eMultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the maximal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMax set = (findMax set, deleteMax set)\n\u003c/pre\u003e",
          "module": "Data.MultiSet",
          "name": "deleteFindMax",
          "package": "multiset",
          "signature": "MultiSet a -\u003e (a, MultiSet a)",
          "source": "src/Data-MultiSet.html#deleteFindMax",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the maximal element deleteFindMax set findMax set deleteMax set",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "deleteFindMax",
          "normalized": "MultiSet a-\u003e(a,MultiSet a)",
          "package": "multiset",
          "partial": "Find Max",
          "signature": "MultiSet a-\u003e(a,MultiSet a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteFindMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the minimal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMin set = (findMin set, deleteMin set)\n\u003c/pre\u003e",
          "module": "Data.MultiSet",
          "name": "deleteFindMin",
          "package": "multiset",
          "signature": "MultiSet a -\u003e (a, MultiSet a)",
          "source": "src/Data-MultiSet.html#deleteFindMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the minimal element deleteFindMin set findMin set deleteMin set",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "deleteFindMin",
          "normalized": "MultiSet a-\u003e(a,MultiSet a)",
          "package": "multiset",
          "partial": "Find Min",
          "signature": "MultiSet a-\u003e(a,MultiSet a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteFindMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete an element from a multiset a given number of times.\n\u003c/p\u003e\u003cp\u003eNegative numbers add occurences of the given element.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "deleteMany",
          "package": "multiset",
          "signature": "a -\u003e Occur -\u003e MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#deleteMany",
          "type": "function"
        },
        "index": {
          "description": "log Delete an element from multiset given number of times Negative numbers add occurences of the given element",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "deleteMany",
          "normalized": "a-\u003eOccur-\u003eMultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Many",
          "signature": "a-\u003eOccur-\u003eMultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the maximal element.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "deleteMax",
          "package": "multiset",
          "signature": "MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "log Delete the maximal element",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "deleteMax",
          "normalized": "MultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Max",
          "signature": "MultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete all occurences of the maximal element.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "deleteMaxAll",
          "package": "multiset",
          "signature": "MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#deleteMaxAll",
          "type": "function"
        },
        "index": {
          "description": "log Delete all occurences of the maximal element",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "deleteMaxAll",
          "normalized": "MultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Max All",
          "signature": "MultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteMaxAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the minimal element.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "deleteMin",
          "package": "multiset",
          "signature": "MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete the minimal element",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "deleteMin",
          "normalized": "MultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Min",
          "signature": "MultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete all occurences of the minimal element.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "deleteMinAll",
          "package": "multiset",
          "signature": "MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#deleteMinAll",
          "type": "function"
        },
        "index": {
          "description": "log Delete all occurences of the minimal element",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "deleteMinAll",
          "normalized": "MultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Min All",
          "signature": "MultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:deleteMinAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference of two multisets. \n The implementation uses an efficient \u003cem\u003ehedge\u003c/em\u003e algorithm comparable with \u003cem\u003ehedge-union\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "difference",
          "package": "multiset",
          "signature": "MultiSet a -\u003e MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Difference of two multisets The implementation uses an efficient hedge algorithm comparable with hedge-union",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "difference",
          "normalized": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "signature": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The distinct elements of a multiset, each element occurs only once in the list.\n\u003c/p\u003e\u003cpre\u003e distinctElems = map fst . toOccurList\n\u003c/pre\u003e",
          "module": "Data.MultiSet",
          "name": "distinctElems",
          "package": "multiset",
          "signature": "MultiSet a -\u003e [a]",
          "source": "src/Data-MultiSet.html#distinctElems",
          "type": "function"
        },
        "index": {
          "description": "The distinct elements of multiset each element occurs only once in the list distinctElems map fst toOccurList",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "distinctElems",
          "normalized": "MultiSet a-\u003e[a]",
          "package": "multiset",
          "partial": "Elems",
          "signature": "MultiSet a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:distinctElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of distinct elements in the multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "distinctSize",
          "package": "multiset",
          "signature": "MultiSet a -\u003e Occur",
          "source": "src/Data-MultiSet.html#distinctSize",
          "type": "function"
        },
        "index": {
          "description": "The number of distinct elements in the multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "distinctSize",
          "normalized": "MultiSet a-\u003eOccur",
          "package": "multiset",
          "partial": "Size",
          "signature": "MultiSet a-\u003eOccur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:distinctSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. The elements of a multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "elems",
          "package": "multiset",
          "signature": "MultiSet a -\u003e [a]",
          "source": "src/Data-MultiSet.html#elems",
          "type": "function"
        },
        "index": {
          "description": "The elements of multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "elems",
          "normalized": "MultiSet a-\u003e[a]",
          "package": "multiset",
          "signature": "MultiSet a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty mutli set.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "empty",
          "package": "multiset",
          "signature": "MultiSet a",
          "source": "src/Data-MultiSet.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty mutli set",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "empty",
          "package": "multiset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all elements that satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "filter",
          "package": "multiset",
          "signature": "(a -\u003e Bool) -\u003e MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter all elements that satisfy the predicate",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eMultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "signature": "(a-\u003eBool)-\u003eMultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The maximal element of a multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "findMax",
          "package": "multiset",
          "signature": "MultiSet a -\u003e a",
          "source": "src/Data-MultiSet.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "log The maximal element of multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "findMax",
          "normalized": "MultiSet a-\u003ea",
          "package": "multiset",
          "partial": "Max",
          "signature": "MultiSet a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The minimal element of a multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "findMin",
          "package": "multiset",
          "signature": "MultiSet a -\u003e a",
          "source": "src/Data-MultiSet.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "log The minimal element of multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "findMin",
          "normalized": "MultiSet a-\u003ea",
          "package": "multiset",
          "partial": "Min",
          "signature": "MultiSet a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Fold over the elements of a multiset in an unspecified order.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "fold",
          "package": "multiset",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e MultiSet a -\u003e b",
          "source": "src/Data-MultiSet.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Fold over the elements of multiset in an unspecified order",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMultiSet a-\u003eb",
          "package": "multiset",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMultiSet a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold over the elements of a multiset with their occurences.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "foldOccur",
          "package": "multiset",
          "signature": "(a -\u003e Occur -\u003e b -\u003e b) -\u003e b -\u003e MultiSet a -\u003e b",
          "source": "src/Data-MultiSet.html#foldOccur",
          "type": "function"
        },
        "index": {
          "description": "Fold over the elements of multiset with their occurences",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "foldOccur",
          "normalized": "(a-\u003eOccur-\u003eb-\u003eb)-\u003eb-\u003eMultiSet a-\u003eb",
          "package": "multiset",
          "partial": "Occur",
          "signature": "(a-\u003eOccur-\u003eb-\u003eb)-\u003eb-\u003eMultiSet a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:foldOccur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Build a multiset from an ascending list in linear time.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "fromAscList",
          "package": "multiset",
          "signature": "[a] -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "Build multiset from an ascending list in linear time The precondition input list is ascending is not checked",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "fromAscList",
          "normalized": "[a]-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Asc List",
          "signature": "[a]-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a multiset from an ascending list of element/occurence pairs in linear time.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "fromAscOccurList",
          "package": "multiset",
          "signature": "[(a, Occur)] -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#fromAscOccurList",
          "type": "function"
        },
        "index": {
          "description": "Build multiset from an ascending list of element occurence pairs in linear time The precondition input list is ascending is not checked",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "fromAscOccurList",
          "normalized": "[(a,Occur)]-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Asc Occur List",
          "signature": "[(a,Occur)]-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromAscOccurList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a multiset from an ascending list of distinct elements in linear time.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "fromDistinctAscList",
          "package": "multiset",
          "signature": "[a] -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#fromDistinctAscList",
          "type": "function"
        },
        "index": {
          "description": "Build multiset from an ascending list of distinct elements in linear time The precondition input list is strictly ascending is not checked",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "fromDistinctAscList",
          "normalized": "[a]-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Distinct Asc List",
          "signature": "[a]-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a multiset from an ascending list of elements/occurence pairs where each elements appears only once.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "fromDistinctAscOccurList",
          "package": "multiset",
          "signature": "[(a, Occur)] -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#fromDistinctAscOccurList",
          "type": "function"
        },
        "index": {
          "description": "Build multiset from an ascending list of elements occurence pairs where each elements appears only once The precondition input list is strictly ascending is not checked",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "fromDistinctAscOccurList",
          "normalized": "[(a,Occur)]-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Distinct Asc Occur List",
          "signature": "[(a,Occur)]-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromDistinctAscOccurList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(t*log t)\u003c/em\u003e. Create a multiset from a list of elements.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "fromList",
          "package": "multiset",
          "signature": "[a] -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "log Create multiset from list of elements",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "fromList",
          "normalized": "[a]-\u003eMultiSet a",
          "package": "multiset",
          "partial": "List",
          "signature": "[a]-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from elements to occurrences to a multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "fromMap",
          "package": "multiset",
          "signature": "Map a Occur -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#fromMap",
          "type": "function"
        },
        "index": {
          "description": "Convert Map from elements to occurrences to multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "fromMap",
          "normalized": "Map a Occur-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Map",
          "signature": "Map a Occur-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Create a multiset from a list of element/occurence pairs.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "fromOccurList",
          "package": "multiset",
          "signature": "[(a, Occur)] -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#fromOccurList",
          "type": "function"
        },
        "index": {
          "description": "log Create multiset from list of element occurence pairs",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "fromOccurList",
          "normalized": "[(a,Occur)]-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Occur List",
          "signature": "[(a,Occur)]-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromOccurList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from elements to occurrences to a multiset.\n Assumes that the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e contains only values larger than one.\n \u003cem\u003eThe precondition (all elements \u003e 1) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "fromOccurMap",
          "package": "multiset",
          "signature": "Map a Occur -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#fromOccurMap",
          "type": "function"
        },
        "index": {
          "description": "Convert Map from elements to occurrences to multiset Assumes that the Map contains only values larger than one The precondition all elements is not checked",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "fromOccurMap",
          "normalized": "Map a Occur-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Occur Map",
          "signature": "Map a Occur-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromOccurMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e to a multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "fromSet",
          "package": "multiset",
          "signature": "Set a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#fromSet",
          "type": "function"
        },
        "index": {
          "description": "Convert Set to multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "fromSet",
          "normalized": "Set a-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Set",
          "signature": "Set a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:fromSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert an element in a multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "insert",
          "package": "multiset",
          "signature": "a -\u003e MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Insert an element in multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "insert",
          "normalized": "a-\u003eMultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "signature": "a-\u003eMultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert an element in a multiset a given number of times.\n\u003c/p\u003e\u003cp\u003eNegative numbers remove occurences of the given element.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "insertMany",
          "package": "multiset",
          "signature": "a -\u003e Occur -\u003e MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#insertMany",
          "type": "function"
        },
        "index": {
          "description": "log Insert an element in multiset given number of times Negative numbers remove occurences of the given element",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "insertMany",
          "normalized": "a-\u003eOccur-\u003eMultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Many",
          "signature": "a-\u003eOccur-\u003eMultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:insertMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The intersection of two multisets.\n Elements of the result come from the first multiset, so for example\n\u003c/p\u003e\u003cpre\u003e import qualified Data.MultiSet as MS\n data AB = A | B deriving Show\n instance Ord AB where compare _ _ = EQ\n instance Eq AB where _ == _ = True\n main = print (MS.singleton A `MS.intersection` MS.singleton B,\n               MS.singleton B `MS.intersection` MS.singleton A)\n\u003c/pre\u003e\u003cp\u003eprints \u003ccode\u003e(fromList [A],fromList [B])\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "intersection",
          "package": "multiset",
          "signature": "MultiSet a -\u003e MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "The intersection of two multisets Elements of the result come from the first multiset so for example import qualified Data.MultiSet as MS data AB deriving Show instance Ord AB where compare EQ instance Eq AB where True main print MS.singleton MS.intersection MS.singleton MS.singleton MS.intersection MS.singleton prints fromList fromList",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "intersection",
          "normalized": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "signature": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a proper subset? (ie. a subset but not equal).\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "isProperSubsetOf",
          "package": "multiset",
          "signature": "MultiSet a -\u003e MultiSet a -\u003e Bool",
          "source": "src/Data-MultiSet.html#isProperSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "Is this proper subset ie subset but not equal",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "isProperSubsetOf",
          "normalized": "MultiSet a-\u003eMultiSet a-\u003eBool",
          "package": "multiset",
          "partial": "Proper Subset Of",
          "signature": "MultiSet a-\u003eMultiSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:isProperSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a subset?\n \u003ccode\u003e(s1 `isSubsetOf` s2)\u003c/code\u003e tells whether \u003ccode\u003es1\u003c/code\u003e is a subset of \u003ccode\u003es2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "isSubsetOf",
          "package": "multiset",
          "signature": "MultiSet a -\u003e MultiSet a -\u003e Bool",
          "source": "src/Data-MultiSet.html#isSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "Is this subset s1 isSubsetOf s2 tells whether s1 is subset of s2",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "isSubsetOf",
          "normalized": "MultiSet a-\u003eMultiSet a-\u003eBool",
          "package": "multiset",
          "partial": "Subset Of",
          "signature": "MultiSet a-\u003eMultiSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:isSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The monad join operation for multisets.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "join",
          "package": "multiset",
          "signature": "MultiSet (MultiSet a) -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#join",
          "type": "function"
        },
        "index": {
          "description": "The monad join operation for multisets",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "join",
          "normalized": "MultiSet(MultiSet a)-\u003eMultiSet a",
          "package": "multiset",
          "signature": "MultiSet(MultiSet a)-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e is the multiset obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "map",
          "package": "multiset",
          "signature": "(a -\u003e b) -\u003e MultiSet a -\u003e MultiSet b",
          "source": "src/Data-MultiSet.html#map",
          "type": "function"
        },
        "index": {
          "description": "log map is the multiset obtained by applying to each element of",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eMultiSet a-\u003eMultiSet b",
          "package": "multiset",
          "signature": "(a-\u003eb)-\u003eMultiSet a-\u003eMultiSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "mapEither",
          "package": "multiset",
          "signature": "(a -\u003e Either b c) -\u003e MultiSet a -\u003e (MultiSet b, MultiSet c)",
          "source": "src/Data-MultiSet.html#mapEither",
          "type": "function"
        },
        "index": {
          "description": "Map and separate the Left and Right results",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "mapEither",
          "normalized": "(a-\u003eEither b c)-\u003eMultiSet a-\u003e(MultiSet b,MultiSet c)",
          "package": "multiset",
          "partial": "Either",
          "signature": "(a-\u003eEither b c)-\u003eMultiSet a-\u003e(MultiSet b,MultiSet c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "mapMaybe",
          "package": "multiset",
          "signature": "(a -\u003e Maybe b) -\u003e MultiSet a -\u003e MultiSet b",
          "source": "src/Data-MultiSet.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Map and collect the Just results",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eMultiSet a-\u003eMultiSet b",
          "package": "multiset",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eMultiSet a-\u003eMultiSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapMonotonic\u003c/a\u003e\u003c/code\u003e f s == \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e, but works only when \u003ccode\u003ef\u003c/code\u003e is strictly monotonic.\n \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n Semi-formally, we have:\n\u003c/p\u003e\u003cpre\u003e and [x \u003c y ==\u003e f x \u003c f y | x \u003c- ls, y \u003c- ls]\n                     ==\u003e mapMonotonic f s == map f s\n     where ls = toList s\n\u003c/pre\u003e",
          "module": "Data.MultiSet",
          "name": "mapMonotonic",
          "package": "multiset",
          "signature": "(a -\u003e b) -\u003e MultiSet a -\u003e MultiSet b",
          "source": "src/Data-MultiSet.html#mapMonotonic",
          "type": "function"
        },
        "index": {
          "description": "The mapMonotonic map but works only when is strictly monotonic The precondition is not checked Semi-formally we have and ls ls mapMonotonic map where ls toList",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "mapMonotonic",
          "normalized": "(a-\u003eb)-\u003eMultiSet a-\u003eMultiSet b",
          "package": "multiset",
          "partial": "Monotonic",
          "signature": "(a-\u003eb)-\u003eMultiSet a-\u003eMultiSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:mapMonotonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The union of two multisets.\n The number of occurences of each element in the union is\n the maximum of the number of occurences in the arguments (instead of the sum).\n\u003c/p\u003e\u003cp\u003eThe implementation uses the efficient \u003cem\u003ehedge-union\u003c/em\u003e algorithm.\n Hedge-union is more efficient on (bigset \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e smallset).\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "maxUnion",
          "package": "multiset",
          "signature": "MultiSet a -\u003e MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#maxUnion",
          "type": "function"
        },
        "index": {
          "description": "The union of two multisets The number of occurences of each element in the union is the maximum of the number of occurences in the arguments instead of the sum The implementation uses the efficient hedge-union algorithm Hedge-union is more efficient on bigset union smallset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "maxUnion",
          "normalized": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "partial": "Union",
          "signature": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:maxUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the maximal element of the multiset,\n   and the set with that element removed.\n   \u003ccode\u003efail\u003c/code\u003es (in the monad) when passed an empty multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "maxView",
          "package": "multiset",
          "signature": "MultiSet a -\u003e m (a, MultiSet a)",
          "source": "src/Data-MultiSet.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "log Retrieves the maximal element of the multiset and the set with that element removed fail in the monad when passed an empty multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "maxView",
          "normalized": "MultiSet a-\u003eb(a,MultiSet a)",
          "package": "multiset",
          "partial": "View",
          "signature": "MultiSet a-\u003em(a,MultiSet a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the element in the multiset?\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "member",
          "package": "multiset",
          "signature": "a -\u003e MultiSet a -\u003e Bool",
          "source": "src/Data-MultiSet.html#member",
          "type": "function"
        },
        "index": {
          "description": "log Is the element in the multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "member",
          "normalized": "a-\u003eMultiSet a-\u003eBool",
          "package": "multiset",
          "signature": "a-\u003eMultiSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the minimal element of the multiset,\n   and the set with that element removed.\n   \u003ccode\u003efail\u003c/code\u003es (in the monad) when passed an empty multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "minView",
          "package": "multiset",
          "signature": "MultiSet a -\u003e m (a, MultiSet a)",
          "source": "src/Data-MultiSet.html#minView",
          "type": "function"
        },
        "index": {
          "description": "log Retrieves the minimal element of the multiset and the set with that element removed fail in the monad when passed an empty multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "minView",
          "normalized": "MultiSet a-\u003eb(a,MultiSet a)",
          "package": "multiset",
          "partial": "View",
          "signature": "MultiSet a-\u003em(a,MultiSet a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the element not in the multiset?\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "notMember",
          "package": "multiset",
          "signature": "a -\u003e MultiSet a -\u003e Bool",
          "source": "src/Data-MultiSet.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "log Is the element not in the multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "notMember",
          "normalized": "a-\u003eMultiSet a-\u003eBool",
          "package": "multiset",
          "partial": "Member",
          "signature": "a-\u003eMultiSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is this the empty multiset?\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "null",
          "package": "multiset",
          "signature": "MultiSet a -\u003e Bool",
          "source": "src/Data-MultiSet.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is this the empty multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "null",
          "normalized": "MultiSet a-\u003eBool",
          "package": "multiset",
          "signature": "MultiSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The number of occurences of an element in a multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "occur",
          "package": "multiset",
          "signature": "a -\u003e MultiSet a -\u003e Occur",
          "source": "src/Data-MultiSet.html#occur",
          "type": "function"
        },
        "index": {
          "description": "log The number of occurences of an element in multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "occur",
          "normalized": "a-\u003eMultiSet a-\u003eOccur",
          "package": "multiset",
          "signature": "a-\u003eMultiSet a-\u003eOccur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:occur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the multiset into two multisets, one with all elements that satisfy\n the predicate and one with all elements that don't satisfy the predicate.\n See also \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "partition",
          "package": "multiset",
          "signature": "(a -\u003e Bool) -\u003e MultiSet a -\u003e (MultiSet a, MultiSet a)",
          "source": "src/Data-MultiSet.html#partition",
          "type": "function"
        },
        "index": {
          "description": "Partition the multiset into two multisets one with all elements that satisfy the predicate and one with all elements that don satisfy the predicate See also split",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eMultiSet a-\u003e(MultiSet a,MultiSet a)",
          "package": "multiset",
          "signature": "(a-\u003eBool)-\u003eMultiSet a-\u003e(MultiSet a,MultiSet a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Show the tree that implements the set. The tree is shown\n in a compressed, hanging format.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "showTree",
          "package": "multiset",
          "signature": "MultiSet a -\u003e String",
          "source": "src/Data-MultiSet.html#showTree",
          "type": "function"
        },
        "index": {
          "description": "Show the tree that implements the set The tree is shown in compressed hanging format",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "showTree",
          "normalized": "MultiSet a-\u003eString",
          "package": "multiset",
          "partial": "Tree",
          "signature": "MultiSet a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:showTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The expression (\u003ccode\u003eshowTreeWith hang wide map\u003c/code\u003e) shows\n the tree that implements the set. If \u003ccode\u003ehang\u003c/code\u003e is\n \u003ccode\u003eTrue\u003c/code\u003e, a \u003cem\u003ehanging\u003c/em\u003e tree is shown otherwise a rotated tree is shown. If\n \u003ccode\u003ewide\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, an extra wide version is shown.\n\u003c/p\u003e\u003cpre\u003e Set\u003e putStrLn $ showTreeWith True False $ fromDistinctAscList [1,1,2,3,4,5]\n (1*) 4\n +--(1*) 2\n |  +--(2*) 1\n |  +--(1*) 3\n +--(1*) 5\n \n Set\u003e putStrLn $ showTreeWith True True $ fromDistinctAscList [1,1,2,3,4,5]\n (1*) 4\n |\n +--(1*) 2\n |  |\n |  +--(2*) 1\n |  |\n |  +--(1*) 3\n |\n +--(1*) 5\n \n Set\u003e putStrLn $ showTreeWith False True $ fromDistinctAscList [1,1,2,3,4,5]\n +--(1*) 5\n |\n (1*) 4\n |\n |  +--(1*) 3\n |  |\n +--(1*) 2\n    |\n    +--(2*) 1\n\u003c/pre\u003e",
          "module": "Data.MultiSet",
          "name": "showTreeWith",
          "package": "multiset",
          "signature": "Bool -\u003e Bool -\u003e MultiSet a -\u003e String",
          "source": "src/Data-MultiSet.html#showTreeWith",
          "type": "function"
        },
        "index": {
          "description": "The expression showTreeWith hang wide map shows the tree that implements the set If hang is True hanging tree is shown otherwise rotated tree is shown If wide is True an extra wide version is shown Set putStrLn showTreeWith True False fromDistinctAscList Set putStrLn showTreeWith True True fromDistinctAscList Set putStrLn showTreeWith False True fromDistinctAscList",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "showTreeWith",
          "normalized": "Bool-\u003eBool-\u003eMultiSet a-\u003eString",
          "package": "multiset",
          "partial": "Tree With",
          "signature": "Bool-\u003eBool-\u003eMultiSet a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:showTreeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Create a singleton mutli set.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "singleton",
          "package": "multiset",
          "signature": "a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create singleton mutli set",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "singleton",
          "normalized": "a-\u003eMultiSet a",
          "package": "multiset",
          "signature": "a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The number of elements in the multiset.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "size",
          "package": "multiset",
          "signature": "MultiSet a -\u003e Occur",
          "source": "src/Data-MultiSet.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the multiset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "size",
          "normalized": "MultiSet a-\u003eOccur",
          "package": "multiset",
          "signature": "MultiSet a-\u003eOccur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e x set\u003c/code\u003e) is a pair \u003ccode\u003e(set1,set2)\u003c/code\u003e\n where all elements in \u003ccode\u003eset1\u003c/code\u003e are lower than \u003ccode\u003ex\u003c/code\u003e and all elements in\n \u003ccode\u003eset2\u003c/code\u003e larger than \u003ccode\u003ex\u003c/code\u003e. \u003ccode\u003ex\u003c/code\u003e is not found in neither \u003ccode\u003eset1\u003c/code\u003e nor \u003ccode\u003eset2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "split",
          "package": "multiset",
          "signature": "a -\u003e MultiSet a -\u003e (MultiSet a, MultiSet a)",
          "source": "src/Data-MultiSet.html#split",
          "type": "function"
        },
        "index": {
          "description": "log The expression split set is pair set1 set2 where all elements in set1 are lower than and all elements in set2 larger than is not found in neither set1 nor set2",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "split",
          "normalized": "a-\u003eMultiSet a-\u003e(MultiSet a,MultiSet a)",
          "package": "multiset",
          "signature": "a-\u003eMultiSet a-\u003e(MultiSet a,MultiSet a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Performs a \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e but also returns the number of\n occurences of the pivot element in the original set.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "splitOccur",
          "package": "multiset",
          "signature": "a -\u003e MultiSet a -\u003e (MultiSet a, Occur, MultiSet a)",
          "source": "src/Data-MultiSet.html#splitOccur",
          "type": "function"
        },
        "index": {
          "description": "log Performs split but also returns the number of occurences of the pivot element in the original set",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "splitOccur",
          "normalized": "a-\u003eMultiSet a-\u003e(MultiSet a,Occur,MultiSet a)",
          "package": "multiset",
          "partial": "Occur",
          "signature": "a-\u003eMultiSet a-\u003e(MultiSet a,Occur,MultiSet a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:splitOccur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Convert the multiset to an ascending list of elements.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "toAscList",
          "package": "multiset",
          "signature": "MultiSet a -\u003e [a]",
          "source": "src/Data-MultiSet.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Convert the multiset to an ascending list of elements",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "toAscList",
          "normalized": "MultiSet a-\u003e[a]",
          "package": "multiset",
          "partial": "Asc List",
          "signature": "MultiSet a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the multiset to an ascending list of element/occurence pairs.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "toAscOccurList",
          "package": "multiset",
          "signature": "MultiSet a -\u003e [(a, Occur)]",
          "source": "src/Data-MultiSet.html#toAscOccurList",
          "type": "function"
        },
        "index": {
          "description": "Convert the multiset to an ascending list of element occurence pairs",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "toAscOccurList",
          "normalized": "MultiSet a-\u003e[(a,Occur)]",
          "package": "multiset",
          "partial": "Asc Occur List",
          "signature": "MultiSet a-\u003e[(a,Occur)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:toAscOccurList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Convert the multiset to a list of elements.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "toList",
          "package": "multiset",
          "signature": "MultiSet a -\u003e [a]",
          "source": "src/Data-MultiSet.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert the multiset to list of elements",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "toList",
          "normalized": "MultiSet a-\u003e[a]",
          "package": "multiset",
          "partial": "List",
          "signature": "MultiSet a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Convert a multiset to a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from elements to number of occurrences.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "toMap",
          "package": "multiset",
          "signature": "MultiSet a -\u003e Map a Occur",
          "source": "src/Data-MultiSet.html#toMap",
          "type": "function"
        },
        "index": {
          "description": "Convert multiset to Map from elements to number of occurrences",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "toMap",
          "normalized": "MultiSet a-\u003eMap a Occur",
          "package": "multiset",
          "partial": "Map",
          "signature": "MultiSet a-\u003eMap a Occur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the multiset to a list of element/occurence pairs.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "toOccurList",
          "package": "multiset",
          "signature": "MultiSet a -\u003e [(a, Occur)]",
          "source": "src/Data-MultiSet.html#toOccurList",
          "type": "function"
        },
        "index": {
          "description": "Convert the multiset to list of element occurence pairs",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "toOccurList",
          "normalized": "MultiSet a-\u003e[(a,Occur)]",
          "package": "multiset",
          "partial": "Occur List",
          "signature": "MultiSet a-\u003e[(a,Occur)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:toOccurList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a multiset to a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e, removing duplicates.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "toSet",
          "package": "multiset",
          "signature": "MultiSet a -\u003e Set a",
          "source": "src/Data-MultiSet.html#toSet",
          "type": "function"
        },
        "index": {
          "description": "Convert multiset to Set removing duplicates",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "toSet",
          "normalized": "MultiSet a-\u003eSet a",
          "package": "multiset",
          "partial": "Set",
          "signature": "MultiSet a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:toSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The union of two multisets. The union adds the occurences together.\n\u003c/p\u003e\u003cp\u003eThe implementation uses the efficient \u003cem\u003ehedge-union\u003c/em\u003e algorithm.\n Hedge-union is more efficient on (bigset \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e smallset).\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "union",
          "package": "multiset",
          "signature": "MultiSet a -\u003e MultiSet a -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#union",
          "type": "function"
        },
        "index": {
          "description": "The union of two multisets The union adds the occurences together The implementation uses the efficient hedge-union algorithm Hedge-union is more efficient on bigset union smallset",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "union",
          "normalized": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
          "package": "multiset",
          "signature": "MultiSet a-\u003eMultiSet a-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of multisets: (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "unions",
          "package": "multiset",
          "signature": "[MultiSet a] -\u003e MultiSet a",
          "source": "src/Data-MultiSet.html#unions",
          "type": "function"
        },
        "index": {
          "description": "The union of list of multisets unions foldl union empty",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "unions",
          "normalized": "[MultiSet a]-\u003eMultiSet a",
          "package": "multiset",
          "signature": "[MultiSet a]-\u003eMultiSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Apply a function to each element, and take the union of the results\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "unionsMap",
          "package": "multiset",
          "signature": "(a -\u003e MultiSet b) -\u003e MultiSet a -\u003e MultiSet b",
          "source": "src/Data-MultiSet.html#unionsMap",
          "type": "function"
        },
        "index": {
          "description": "Apply function to each element and take the union of the results",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "unionsMap",
          "normalized": "(a-\u003eMultiSet b)-\u003eMultiSet a-\u003eMultiSet b",
          "package": "multiset",
          "partial": "Map",
          "signature": "(a-\u003eMultiSet b)-\u003eMultiSet a-\u003eMultiSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:unionsMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Test if the internal multiset structure is valid.\n\u003c/p\u003e",
          "module": "Data.MultiSet",
          "name": "valid",
          "package": "multiset",
          "signature": "MultiSet a -\u003e Bool",
          "source": "src/Data-MultiSet.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Test if the internal multiset structure is valid",
          "hierarchy": "Data MultiSet",
          "module": "Data.MultiSet",
          "name": "valid",
          "normalized": "MultiSet a-\u003eBool",
          "package": "multiset",
          "signature": "MultiSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiset/docs/Data-MultiSet.html#v:valid"
      }
    }
  ]
]