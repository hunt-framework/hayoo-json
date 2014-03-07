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
        "word": "ctrie"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA non-blocking concurrent map from hashable keys to values.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on \u003cem\u003elock-free concurrent hash tries\u003c/em\u003e\n (aka \u003cem\u003eCtries\u003c/em\u003e) as described by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Aleksander Prokopec, Phil Bagwell, Martin Odersky,\n      \"\u003cem\u003eCache-Aware Lock-Free Concurent Hash Tries\u003c/em\u003e\"\n\u003c/li\u003e\u003cli\u003e Aleksander Prokopec, Nathan G. Bronson, Phil Bagwell,\n      Martin Odersky \"/Concurrent Tries with Efficient Non-Blocking\n      Snapshots/\"\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOperations have a worst-case complexity of \u003cem\u003eO(log n)\u003c/em\u003e, with a base\n equal to the size of the native \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Map",
          "name": "Map",
          "package": "ctrie",
          "source": "src/Control-Concurrent-Map.html",
          "type": "module"
        },
        "index": {
          "description": "non-blocking concurrent map from hashable keys to values The implementation is based on lock-free concurrent hash tries aka Ctries as described by Aleksander Prokopec Phil Bagwell Martin Odersky Cache-Aware Lock-Free Concurent Hash Tries Aleksander Prokopec Nathan Bronson Phil Bagwell Martin Odersky Concurrent Tries with Efficient Non-Blocking Snapshots Operations have worst-case complexity of log with base equal to the size of the native Word",
          "hierarchy": "Control Concurrent Map",
          "module": "Control.Concurrent.Map",
          "name": "Map",
          "package": "ctrie",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ctrie/docs/Control-Concurrent-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from keys \u003ccode\u003ek\u003c/code\u003e to values \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Map",
          "name": "Map",
          "package": "ctrie",
          "source": "src/Control-Concurrent-Map.html#Map",
          "type": "data"
        },
        "index": {
          "description": "map from keys to values",
          "hierarchy": "Control Concurrent Map",
          "module": "Control.Concurrent.Map",
          "name": "Map",
          "package": "ctrie",
          "partial": "Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ctrie/docs/Control-Concurrent-Map.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Remove the given key and its associated value from the map,\n if present.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Map",
          "name": "delete",
          "package": "ctrie",
          "signature": "k -\u003e Map k v -\u003e IO ()",
          "source": "src/Control-Concurrent-Map.html#delete",
          "type": "function"
        },
        "index": {
          "description": "log Remove the given key and its associated value from the map if present",
          "hierarchy": "Control Concurrent Map",
          "module": "Control.Concurrent.Map",
          "name": "delete",
          "normalized": "a-\u003eMap a b-\u003eIO()",
          "package": "ctrie",
          "signature": "k-\u003eMap k v-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ctrie/docs/Control-Concurrent-Map.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Construct an empty map.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Map",
          "name": "empty",
          "package": "ctrie",
          "signature": "IO (Map k v)",
          "source": "src/Control-Concurrent-Map.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty map",
          "hierarchy": "Control Concurrent Map",
          "module": "Control.Concurrent.Map",
          "name": "empty",
          "package": "ctrie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ctrie/docs/Control-Concurrent-Map.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n * log n)\u003c/em\u003e. Construct a map from a list of key/value pairs.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Map",
          "name": "fromList",
          "package": "ctrie",
          "signature": "[(k, v)] -\u003e IO (Map k v)",
          "source": "src/Control-Concurrent-Map.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "log Construct map from list of key value pairs",
          "hierarchy": "Control Concurrent Map",
          "module": "Control.Concurrent.Map",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eIO(Map a b)",
          "package": "ctrie",
          "partial": "List",
          "signature": "[(k,v)]-\u003eIO(Map k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ctrie/docs/Control-Concurrent-Map.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Associate the given value with the given key.\n If the key is already present in the map, the old value is replaced.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Map",
          "name": "insert",
          "package": "ctrie",
          "signature": "k -\u003e v -\u003e Map k v -\u003e IO ()",
          "source": "src/Control-Concurrent-Map.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Associate the given value with the given key If the key is already present in the map the old value is replaced",
          "hierarchy": "Control Concurrent Map",
          "module": "Control.Concurrent.Map",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eMap a b-\u003eIO()",
          "package": "ctrie",
          "signature": "k-\u003ev-\u003eMap k v-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ctrie/docs/Control-Concurrent-Map.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Return the value associated with the given key, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Map",
          "name": "lookup",
          "package": "ctrie",
          "signature": "k -\u003e Map k v -\u003e IO (Maybe v)",
          "source": "src/Control-Concurrent-Map.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log Return the value associated with the given key or Nothing",
          "hierarchy": "Control Concurrent Map",
          "module": "Control.Concurrent.Map",
          "name": "lookup",
          "normalized": "a-\u003eMap a b-\u003eIO(Maybe b)",
          "package": "ctrie",
          "signature": "k-\u003eMap k v-\u003eIO(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ctrie/docs/Control-Concurrent-Map.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Unsafely convert the map to a list of key/value pairs.\n\u003c/p\u003e\u003cp\u003eWARNING: \u003ccode\u003e\u003ca\u003eunsafeToList\u003c/a\u003e\u003c/code\u003e makes no atomicity guarantees. Concurrent\n changes to the map will lead to inconsistent results.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Map",
          "name": "unsafeToList",
          "package": "ctrie",
          "signature": "Map k v -\u003e IO [(k, v)]",
          "source": "src/Control-Concurrent-Map.html#unsafeToList",
          "type": "function"
        },
        "index": {
          "description": "Unsafely convert the map to list of key value pairs WARNING unsafeToList makes no atomicity guarantees Concurrent changes to the map will lead to inconsistent results",
          "hierarchy": "Control Concurrent Map",
          "module": "Control.Concurrent.Map",
          "name": "unsafeToList",
          "normalized": "Map a b-\u003eIO[(a,b)]",
          "package": "ctrie",
          "partial": "To List",
          "signature": "Map k v-\u003eIO[(k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ctrie/docs/Control-Concurrent-Map.html#v:unsafeToList"
      }
    }
  ]
]