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
        "word": "LRU"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a least-recently-used structure. Conceptually,\n   it's a list of values where the head of the list is the most recently used\n   value. When a value is used, it's moved from its place in the list to the\n   head of the list. The last element in the list is thus the\n   least-recently-used value.\n\u003c/p\u003e\u003cp\u003eThis structure is often used in caches to decide which values to evict when\n   the cache becomes full.\n\u003c/p\u003e\u003cp\u003eThis module uses a Map to implement the LRU efficiently and thus there's the\n   requirement that the elements of the LRU be instances of Ord, which a more\n   general (but slower) LRU implementation could avoid.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.LRU",
          "name": "LRU",
          "package": "LRU",
          "source": "src/Data-LRU.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements least-recently-used structure Conceptually it list of values where the head of the list is the most recently used value When value is used it moved from its place in the list to the head of the list The last element in the list is thus the least-recently-used value This structure is often used in caches to decide which values to evict when the cache becomes full This module uses Map to implement the LRU efficiently and thus there the requirement that the elements of the LRU be instances of Ord which more general but slower LRU implementation could avoid",
          "hierarchy": "Data LRU",
          "module": "Data.LRU",
          "name": "LRU",
          "package": "LRU",
          "partial": "LRU",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn LRU. Contains the head element, last element and the map from elements\n to their Items\n\u003c/p\u003e",
          "module": "Data.LRU",
          "name": "LRU",
          "package": "LRU",
          "source": "src/Data-LRU.html#LRU",
          "type": "data"
        },
        "index": {
          "description": "An LRU Contains the head element last element and the map from elements to their Items",
          "hierarchy": "Data LRU",
          "module": "Data.LRU",
          "name": "LRU",
          "package": "LRU",
          "partial": "LRU",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#t:LRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves an element from the LRU, if it exists. O(log n)\n\u003c/p\u003e",
          "module": "Data.LRU",
          "name": "delete",
          "package": "LRU",
          "signature": "a -\u003e LRU a -\u003e LRU a",
          "source": "src/Data-LRU.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Removes an element from the LRU if it exists log",
          "hierarchy": "Data LRU",
          "module": "Data.LRU",
          "name": "delete",
          "normalized": "a-\u003eLRU a-\u003eLRU a",
          "package": "LRU",
          "signature": "a-\u003eLRU a-\u003eLRU a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an empty LRU. O(1)\n\u003c/p\u003e",
          "module": "Data.LRU",
          "name": "empty",
          "package": "LRU",
          "signature": "LRU a",
          "source": "src/Data-LRU.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Returns an empty LRU",
          "hierarchy": "Data LRU",
          "module": "Data.LRU",
          "name": "empty",
          "package": "LRU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a value into an LRU. If the value is already in the LRU, it's\n   moved to the head of the list. O(log n)\n\u003c/p\u003e",
          "module": "Data.LRU",
          "name": "hit",
          "package": "LRU",
          "signature": "a -\u003e LRU a -\u003e LRU a",
          "source": "src/Data-LRU.html#hit",
          "type": "function"
        },
        "index": {
          "description": "Insert value into an LRU If the value is already in the LRU it moved to the head of the list log",
          "hierarchy": "Data LRU",
          "module": "Data.LRU",
          "name": "hit",
          "normalized": "a-\u003eLRU a-\u003eLRU a",
          "package": "LRU",
          "signature": "a-\u003eLRU a-\u003eLRU a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:hit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the last element of the LRU. O(1)\n\u003c/p\u003e",
          "module": "Data.LRU",
          "name": "last",
          "package": "LRU",
          "signature": "LRU a -\u003e m a",
          "source": "src/Data-LRU.html#last",
          "type": "function"
        },
        "index": {
          "description": "Return the last element of the LRU",
          "hierarchy": "Data LRU",
          "module": "Data.LRU",
          "name": "last",
          "normalized": "LRU a-\u003eb a",
          "package": "LRU",
          "signature": "LRU a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true iff the given element is in the LRU. O(log n)\n\u003c/p\u003e",
          "module": "Data.LRU",
          "name": "member",
          "package": "LRU",
          "signature": "a -\u003e LRU a -\u003e Bool",
          "source": "src/Data-LRU.html#member",
          "type": "function"
        },
        "index": {
          "description": "Returns true iff the given element is in the LRU log",
          "hierarchy": "Data LRU",
          "module": "Data.LRU",
          "name": "member",
          "normalized": "a-\u003eLRU a-\u003eBool",
          "package": "LRU",
          "signature": "a-\u003eLRU a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True iff the LRU is empty. O(1)\n\u003c/p\u003e",
          "module": "Data.LRU",
          "name": "null",
          "package": "LRU",
          "signature": "LRU a -\u003e Bool",
          "source": "src/Data-LRU.html#null",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff the LRU is empty",
          "hierarchy": "Data LRU",
          "module": "Data.LRU",
          "name": "null",
          "normalized": "LRU a-\u003eBool",
          "package": "LRU",
          "signature": "LRU a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the last element of the LRU. Errors out if the LRU is empty. O(log n)\n\u003c/p\u003e",
          "module": "Data.LRU",
          "name": "pop",
          "package": "LRU",
          "signature": "LRU a -\u003e LRU a",
          "source": "src/Data-LRU.html#pop",
          "type": "function"
        },
        "index": {
          "description": "Remove the last element of the LRU Errors out if the LRU is empty log",
          "hierarchy": "Data LRU",
          "module": "Data.LRU",
          "name": "pop",
          "normalized": "LRU a-\u003eLRU a",
          "package": "LRU",
          "signature": "LRU a-\u003eLRU a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of elements in the LRU. O(1)\n\u003c/p\u003e",
          "module": "Data.LRU",
          "name": "size",
          "package": "LRU",
          "signature": "LRU a -\u003e Int",
          "source": "src/Data-LRU.html#size",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of elements in the LRU",
          "hierarchy": "Data LRU",
          "module": "Data.LRU",
          "name": "size",
          "normalized": "LRU a-\u003eInt",
          "package": "LRU",
          "signature": "LRU a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of the members of the LRU in order, newest first. O(n(log n))\n\u003c/p\u003e",
          "module": "Data.LRU",
          "name": "toList",
          "package": "LRU",
          "signature": "LRU a -\u003e [a]",
          "source": "src/Data-LRU.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Returns list of the members of the LRU in order newest first log",
          "hierarchy": "Data LRU",
          "module": "Data.LRU",
          "name": "toList",
          "normalized": "LRU a-\u003e[a]",
          "package": "LRU",
          "partial": "List",
          "signature": "LRU a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:toList"
      }
    }
  ]
]