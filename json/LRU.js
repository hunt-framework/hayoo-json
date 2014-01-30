[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a least-recently-used structure. Conceptually,\n   it's a list of values where the head of the list is the most recently used\n   value. When a value is used, it's moved from its place in the list to the\n   head of the list. The last element in the list is thus the\n   least-recently-used value.\n\u003c/p\u003e\u003cp\u003eThis structure is often used in caches to decide which values to evict when\n   the cache becomes full.\n\u003c/p\u003e\u003cp\u003eThis module uses a Map to implement the LRU efficiently and thus there's the\n   requirement that the elements of the LRU be instances of Ord, which a more\n   general (but slower) LRU implementation could avoid.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LRU",
        "fct-package": "LRU",
        "fct-signature": "module",
        "fct-source": "src/Data-LRU.html",
        "fct-type": "module",
        "title": "LRU"
      },
      "index": {
        "description": "This module implements least-recently-used structure Conceptually it list of values where the head of the list is the most recently used value When value is used it moved from its place in the list to the head of the list The last element in the list is thus the least-recently-used value This structure is often used in caches to decide which values to evict when the cache becomes full This module uses Map to implement the LRU efficiently and thus there the requirement that the elements of the LRU be instances of Ord which more general but slower LRU implementation could avoid",
        "hierarchy": "Data LRU",
        "module": "Data.LRU",
        "name": "LRU",
        "normalized": "",
        "package": "LRU",
        "partial": "LRU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#t:LRU",
      "description": {
        "fct-descr": "\u003cp\u003eAn LRU. Contains the head element, last element and the map from elements\n to their Items\n\u003c/p\u003e",
        "fct-module": "Data.LRU",
        "fct-package": "LRU",
        "fct-signature": "data",
        "fct-source": "src/Data-LRU.html#LRU",
        "fct-type": "data",
        "title": "LRU"
      },
      "index": {
        "description": "An LRU Contains the head element last element and the map from elements to their Items",
        "hierarchy": "Data LRU",
        "module": "Data.LRU",
        "name": "LRU",
        "normalized": "",
        "package": "LRU",
        "partial": "LRU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves an element from the LRU, if it exists. O(log n)\n\u003c/p\u003e",
        "fct-module": "Data.LRU",
        "fct-package": "LRU",
        "fct-signature": "a -\u003e LRU a -\u003e LRU a",
        "fct-source": "src/Data-LRU.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Removes an element from the LRU if it exists log",
        "hierarchy": "Data LRU",
        "module": "Data.LRU",
        "name": "delete",
        "normalized": "a-\u003eLRU a-\u003eLRU a",
        "package": "LRU",
        "partial": "",
        "signature": "a-\u003eLRU a-\u003eLRU a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an empty LRU. O(1)\n\u003c/p\u003e",
        "fct-module": "Data.LRU",
        "fct-package": "LRU",
        "fct-signature": "LRU a",
        "fct-source": "src/Data-LRU.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Returns an empty LRU",
        "hierarchy": "Data LRU",
        "module": "Data.LRU",
        "name": "empty",
        "normalized": "",
        "package": "LRU",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:hit",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a value into an LRU. If the value is already in the LRU, it's\n   moved to the head of the list. O(log n)\n\u003c/p\u003e",
        "fct-module": "Data.LRU",
        "fct-package": "LRU",
        "fct-signature": "a -\u003e LRU a -\u003e LRU a",
        "fct-source": "src/Data-LRU.html#hit",
        "fct-type": "function",
        "title": "hit"
      },
      "index": {
        "description": "Insert value into an LRU If the value is already in the LRU it moved to the head of the list log",
        "hierarchy": "Data LRU",
        "module": "Data.LRU",
        "name": "hit",
        "normalized": "a-\u003eLRU a-\u003eLRU a",
        "package": "LRU",
        "partial": "",
        "signature": "a-\u003eLRU a-\u003eLRU a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the last element of the LRU. O(1)\n\u003c/p\u003e",
        "fct-module": "Data.LRU",
        "fct-package": "LRU",
        "fct-signature": "LRU a -\u003e m a",
        "fct-source": "src/Data-LRU.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "Return the last element of the LRU",
        "hierarchy": "Data LRU",
        "module": "Data.LRU",
        "name": "last",
        "normalized": "LRU a-\u003eb a",
        "package": "LRU",
        "partial": "",
        "signature": "LRU a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true iff the given element is in the LRU. O(log n)\n\u003c/p\u003e",
        "fct-module": "Data.LRU",
        "fct-package": "LRU",
        "fct-signature": "a -\u003e LRU a -\u003e Bool",
        "fct-source": "src/Data-LRU.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Returns true iff the given element is in the LRU log",
        "hierarchy": "Data LRU",
        "module": "Data.LRU",
        "name": "member",
        "normalized": "a-\u003eLRU a-\u003eBool",
        "package": "LRU",
        "partial": "",
        "signature": "a-\u003eLRU a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True iff the LRU is empty. O(1)\n\u003c/p\u003e",
        "fct-module": "Data.LRU",
        "fct-package": "LRU",
        "fct-signature": "LRU a -\u003e Bool",
        "fct-source": "src/Data-LRU.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Returns True iff the LRU is empty",
        "hierarchy": "Data LRU",
        "module": "Data.LRU",
        "name": "null",
        "normalized": "LRU a-\u003eBool",
        "package": "LRU",
        "partial": "",
        "signature": "LRU a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the last element of the LRU. Errors out if the LRU is empty. O(log n)\n\u003c/p\u003e",
        "fct-module": "Data.LRU",
        "fct-package": "LRU",
        "fct-signature": "LRU a -\u003e LRU a",
        "fct-source": "src/Data-LRU.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Remove the last element of the LRU Errors out if the LRU is empty log",
        "hierarchy": "Data LRU",
        "module": "Data.LRU",
        "name": "pop",
        "normalized": "LRU a-\u003eLRU a",
        "package": "LRU",
        "partial": "",
        "signature": "LRU a-\u003eLRU a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of elements in the LRU. O(1)\n\u003c/p\u003e",
        "fct-module": "Data.LRU",
        "fct-package": "LRU",
        "fct-signature": "LRU a -\u003e Int",
        "fct-source": "src/Data-LRU.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Returns the number of elements in the LRU",
        "hierarchy": "Data LRU",
        "module": "Data.LRU",
        "name": "size",
        "normalized": "LRU a-\u003eInt",
        "package": "LRU",
        "partial": "",
        "signature": "LRU a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LRU/docs/Data-LRU.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of the members of the LRU in order, newest first. O(n(log n))\n\u003c/p\u003e",
        "fct-module": "Data.LRU",
        "fct-package": "LRU",
        "fct-signature": "LRU a -\u003e [a]",
        "fct-source": "src/Data-LRU.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Returns list of the members of the LRU in order newest first log",
        "hierarchy": "Data LRU",
        "module": "Data.LRU",
        "name": "toList",
        "normalized": "LRU a-\u003e[a]",
        "package": "LRU",
        "partial": "List",
        "signature": "LRU a-\u003e[a]"
      }
    }
  }
]