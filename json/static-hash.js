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
        "word": "static-hash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure immutable hash whose lookup is O(1) on the average,\n  but O(N) in the worst case.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StaticHash",
          "name": "StaticHash",
          "package": "static-hash",
          "source": "src/Data-StaticHash.html",
          "type": "module"
        },
        "index": {
          "description": "Pure immutable hash whose lookup is on the average but in the worst case",
          "hierarchy": "Data StaticHash",
          "module": "Data.StaticHash",
          "name": "StaticHash",
          "package": "static-hash",
          "partial": "Static Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/static-hash/docs/Data-StaticHash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for immutable hashes.\n\u003c/p\u003e",
          "module": "Data.StaticHash",
          "name": "StaticHash",
          "package": "static-hash",
          "source": "src/Data-StaticHash.html#StaticHash",
          "type": "data"
        },
        "index": {
          "description": "Data type for immutable hashes",
          "hierarchy": "Data StaticHash",
          "module": "Data.StaticHash",
          "name": "StaticHash",
          "package": "static-hash",
          "partial": "Static Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/static-hash/docs/Data-StaticHash.html#t:StaticHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eStaticHash\u003c/a\u003e\u003c/code\u003e from a list. A prime around the length of\n  the list x 2 is chosen for the size of array. This may prevent\n  collisions.\n\u003c/p\u003e",
          "module": "Data.StaticHash",
          "name": "fromList",
          "package": "static-hash",
          "signature": "[(k, v)] -\u003e StaticHash k v",
          "source": "src/Data-StaticHash.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creating StaticHash from list prime around the length of the list is chosen for the size of array This may prevent collisions",
          "hierarchy": "Data StaticHash",
          "module": "Data.StaticHash",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eStaticHash a b",
          "package": "static-hash",
          "partial": "List",
          "signature": "[(k,v)]-\u003eStaticHash k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-hash/docs/Data-StaticHash.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eStaticHash\u003c/a\u003e\u003c/code\u003e from a list and its size.\n\u003c/p\u003e",
          "module": "Data.StaticHash",
          "name": "fromList'",
          "package": "static-hash",
          "signature": "Int -\u003e [(k, v)] -\u003e StaticHash k v",
          "source": "src/Data-StaticHash.html#fromList%27",
          "type": "function"
        },
        "index": {
          "description": "Creating StaticHash from list and its size",
          "hierarchy": "Data StaticHash",
          "module": "Data.StaticHash",
          "name": "fromList'",
          "normalized": "Int-\u003e[(a,b)]-\u003eStaticHash a b",
          "package": "static-hash",
          "partial": "List'",
          "signature": "Int-\u003e[(k,v)]-\u003eStaticHash k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-hash/docs/Data-StaticHash.html#v:fromList-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooking up \u003ccode\u003e\u003ca\u003eStaticHash\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StaticHash",
          "name": "lookup",
          "package": "static-hash",
          "signature": "k -\u003e StaticHash k v -\u003e Maybe v",
          "source": "src/Data-StaticHash.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Looking up StaticHash",
          "hierarchy": "Data StaticHash",
          "module": "Data.StaticHash",
          "name": "lookup",
          "normalized": "a-\u003eStaticHash a b-\u003eMaybe b",
          "package": "static-hash",
          "signature": "k-\u003eStaticHash k v-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-hash/docs/Data-StaticHash.html#v:lookup"
      }
    }
  ]
]