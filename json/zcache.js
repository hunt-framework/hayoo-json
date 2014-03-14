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
        "word": "zcache"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eZobrist keys compactly represent the state of perfect information games. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZCache",
          "name": "ZCache",
          "package": "zcache",
          "source": "src/Data-ZCache.html",
          "type": "module"
        },
        "index": {
          "description": "Zobrist keys compactly represent the state of perfect information games",
          "hierarchy": "Data ZCache",
          "module": "Data.ZCache",
          "name": "ZCache",
          "package": "zcache",
          "partial": "ZCache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zcache/docs/Data-ZCache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps from board states, indexed by zobrist keys\n\u003c/p\u003e",
          "module": "Data.ZCache",
          "name": "ZMap",
          "package": "zcache",
          "source": "src/Data-ZCache.html#ZMap",
          "type": "data"
        },
        "index": {
          "description": "Maps from board states indexed by zobrist keys",
          "hierarchy": "Data ZCache",
          "module": "Data.ZCache",
          "name": "ZMap",
          "package": "zcache",
          "partial": "ZMap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zcache/docs/Data-ZCache.html#t:ZMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets of board states, indexed by zobrist keys\n\u003c/p\u003e",
          "module": "Data.ZCache",
          "name": "ZSet",
          "package": "zcache",
          "source": "src/Data-ZCache.html#ZSet",
          "type": "data"
        },
        "index": {
          "description": "Sets of board states indexed by zobrist keys",
          "hierarchy": "Data ZCache",
          "module": "Data.ZCache",
          "name": "ZSet",
          "package": "zcache",
          "partial": "ZSet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zcache/docs/Data-ZCache.html#t:ZSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZCache",
          "name": "ZMap",
          "package": "zcache",
          "signature": "ZMap Word64 (ZArray k) (Map Word64 v)",
          "source": "src/Data-ZCache.html#ZMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZCache",
          "module": "Data.ZCache",
          "name": "ZMap",
          "package": "zcache",
          "partial": "ZMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zcache/docs/Data-ZCache.html#v:ZMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZCache",
          "name": "ZSet",
          "package": "zcache",
          "signature": "ZSet Word64 (ZArray a) (Set Word64)",
          "source": "src/Data-ZCache.html#ZSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZCache",
          "module": "Data.ZCache",
          "name": "ZSet",
          "package": "zcache",
          "partial": "ZSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zcache/docs/Data-ZCache.html#v:ZSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZCache",
          "name": "flipPos",
          "package": "zcache",
          "signature": "a-\u003e ZSet a-\u003e Maybe (ZSet a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZCache",
          "module": "Data.ZCache",
          "name": "flipPos",
          "normalized": "a-\u003eZSet a-\u003eMaybe(ZSet a)",
          "package": "zcache",
          "partial": "Pos",
          "signature": "a-\u003eZSet a-\u003eMaybe(ZSet a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zcache/docs/Data-ZCache.html#v:flipPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the internal array used for the zobrist key creation\n\u003c/p\u003e",
          "module": "Data.ZCache",
          "name": "zArray",
          "package": "zcache",
          "signature": "Word64 -\u003e (a, a) -\u003e Int -\u003e ZArray a",
          "source": "src/Data-ZCache.html#zArray",
          "type": "function"
        },
        "index": {
          "description": "Create the internal array used for the zobrist key creation",
          "hierarchy": "Data ZCache",
          "module": "Data.ZCache",
          "name": "zArray",
          "normalized": "Word-\u003e(a,a)-\u003eInt-\u003eZArray a",
          "package": "zcache",
          "partial": "Array",
          "signature": "Word-\u003e(a,a)-\u003eInt-\u003eZArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zcache/docs/Data-ZCache.html#v:zArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a ZMap\n\u003c/p\u003e",
          "module": "Data.ZCache",
          "name": "zMap",
          "package": "zcache",
          "signature": "Word64-\u003e (a, a)-\u003e Int-\u003e ZMap a b",
          "type": "function"
        },
        "index": {
          "description": "Construct ZMap",
          "hierarchy": "Data ZCache",
          "module": "Data.ZCache",
          "name": "zMap",
          "normalized": "Word-\u003e(a,a)-\u003eInt-\u003eZMap a b",
          "package": "zcache",
          "partial": "Map",
          "signature": "Word-\u003e(a,a)-\u003eInt-\u003eZMap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zcache/docs/Data-ZCache.html#v:zMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a ZSet\n\u003c/p\u003e",
          "module": "Data.ZCache",
          "name": "zSet",
          "package": "zcache",
          "signature": "Word64-\u003e (a, a)-\u003e Int-\u003e ZSet a",
          "type": "function"
        },
        "index": {
          "description": "Construct ZSet",
          "hierarchy": "Data ZCache",
          "module": "Data.ZCache",
          "name": "zSet",
          "normalized": "Word-\u003e(a,a)-\u003eInt-\u003eZSet a",
          "package": "zcache",
          "partial": "Set",
          "signature": "Word-\u003e(a,a)-\u003eInt-\u003eZSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zcache/docs/Data-ZCache.html#v:zSet"
      }
    }
  ]
]