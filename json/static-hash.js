[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-hash/docs/Data-StaticHash.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure immutable hash whose lookup is O(1) on the average,\n  but O(N) in the worst case.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.StaticHash",
        "fct-package": "static-hash",
        "fct-signature": "module",
        "fct-source": "src/Data-StaticHash.html",
        "fct-type": "module",
        "title": "StaticHash"
      },
      "index": {
        "description": "Pure immutable hash whose lookup is on the average but in the worst case",
        "hierarchy": "Data StaticHash",
        "module": "Data.StaticHash",
        "name": "StaticHash",
        "normalized": "",
        "package": "static-hash",
        "partial": "Static Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-hash/docs/Data-StaticHash.html#t:StaticHash",
      "description": {
        "fct-descr": "\u003cp\u003eData type for immutable hashes.\n\u003c/p\u003e",
        "fct-module": "Data.StaticHash",
        "fct-package": "static-hash",
        "fct-signature": "data",
        "fct-source": "src/Data-StaticHash.html#StaticHash",
        "fct-type": "data",
        "title": "StaticHash"
      },
      "index": {
        "description": "Data type for immutable hashes",
        "hierarchy": "Data StaticHash",
        "module": "Data.StaticHash",
        "name": "StaticHash",
        "normalized": "",
        "package": "static-hash",
        "partial": "Static Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-hash/docs/Data-StaticHash.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eStaticHash\u003c/a\u003e\u003c/code\u003e from a list. A prime around the length of\n  the list x 2 is chosen for the size of array. This may prevent\n  collisions.\n\u003c/p\u003e",
        "fct-module": "Data.StaticHash",
        "fct-package": "static-hash",
        "fct-signature": "[(k, v)] -\u003e StaticHash k v",
        "fct-source": "src/Data-StaticHash.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creating StaticHash from list prime around the length of the list is chosen for the size of array This may prevent collisions",
        "hierarchy": "Data StaticHash",
        "module": "Data.StaticHash",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eStaticHash a b",
        "package": "static-hash",
        "partial": "List",
        "signature": "[(k,v)]-\u003eStaticHash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-hash/docs/Data-StaticHash.html#v:fromList-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eStaticHash\u003c/a\u003e\u003c/code\u003e from a list and its size.\n\u003c/p\u003e",
        "fct-module": "Data.StaticHash",
        "fct-package": "static-hash",
        "fct-signature": "Int -\u003e [(k, v)] -\u003e StaticHash k v",
        "fct-source": "src/Data-StaticHash.html#fromList%27",
        "fct-type": "function",
        "title": "fromList'"
      },
      "index": {
        "description": "Creating StaticHash from list and its size",
        "hierarchy": "Data StaticHash",
        "module": "Data.StaticHash",
        "name": "fromList'",
        "normalized": "Int-\u003e[(a,b)]-\u003eStaticHash a b",
        "package": "static-hash",
        "partial": "List'",
        "signature": "Int-\u003e[(k,v)]-\u003eStaticHash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-hash/docs/Data-StaticHash.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLooking up \u003ccode\u003e\u003ca\u003eStaticHash\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.StaticHash",
        "fct-package": "static-hash",
        "fct-signature": "k -\u003e StaticHash k v -\u003e Maybe v",
        "fct-source": "src/Data-StaticHash.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Looking up StaticHash",
        "hierarchy": "Data StaticHash",
        "module": "Data.StaticHash",
        "name": "lookup",
        "normalized": "a-\u003eStaticHash a b-\u003eMaybe b",
        "package": "static-hash",
        "partial": "",
        "signature": "k-\u003eStaticHash k v-\u003eMaybe v"
      }
    }
  }
]