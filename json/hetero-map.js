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
        "word": "hetero-map"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HeteroMap.Map",
          "name": "Map",
          "package": "hetero-map",
          "source": "src/HeteroMap-Map.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HeteroMap Map",
          "module": "HeteroMap.Map",
          "name": "Map",
          "package": "hetero-map",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Key in a heterogeneous map.  \u003ccode\u003ex\u003c/code\u003e is the key identifier type, \n which ensures that we don't look up a key in a map that doesn't\n have it.\n\u003c/p\u003e",
          "module": "HeteroMap.Map",
          "name": "Key",
          "package": "hetero-map",
          "source": "src/HeteroMap-Map.html#Key",
          "type": "data"
        },
        "index": {
          "description": "Key in heterogeneous map is the key identifier type which ensures that we don look up key in map that doesn have it",
          "hierarchy": "HeteroMap Map",
          "module": "HeteroMap.Map",
          "name": "Key",
          "package": "hetero-map",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA heterogeneous map, including keys \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HeteroMap.Map",
          "name": "Map",
          "package": "hetero-map",
          "source": "src/HeteroMap-Map.html#Map",
          "type": "data"
        },
        "index": {
          "description": "heterogeneous map including keys xs",
          "hierarchy": "HeteroMap Map",
          "module": "HeteroMap.Map",
          "name": "Map",
          "package": "hetero-map",
          "partial": "Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HeteroMap.Map",
          "name": "empty",
          "package": "hetero-map",
          "signature": "Map Z",
          "source": "src/HeteroMap-Map.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "HeteroMap Map",
          "module": "HeteroMap.Map",
          "name": "empty",
          "package": "hetero-map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HeteroMap.Map",
          "name": "insert",
          "package": "hetero-map",
          "signature": "Key x a -\u003e a -\u003e Map xs -\u003e Map (x :* xs)",
          "source": "src/HeteroMap-Map.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "HeteroMap Map",
          "module": "HeteroMap.Map",
          "name": "insert",
          "normalized": "Key a b-\u003eb-\u003eMap c-\u003eMap(a*c)",
          "package": "hetero-map",
          "signature": "Key x a-\u003ea-\u003eMap xs-\u003eMap(x*xs)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HeteroMap.Map",
          "name": "lookup",
          "package": "hetero-map",
          "signature": "Key x a -\u003e Map xs -\u003e a",
          "source": "src/HeteroMap-Map.html#lookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "HeteroMap Map",
          "module": "HeteroMap.Map",
          "name": "lookup",
          "normalized": "Key a b-\u003eMap c-\u003eb",
          "package": "hetero-map",
          "signature": "Key x a-\u003eMap xs-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new key, which is only valid within the passed function\n (and will be a type error if it tries to escape).\n\u003c/p\u003e",
          "module": "HeteroMap.Map",
          "name": "newKey",
          "package": "hetero-map",
          "signature": "(forall x.  Key x a -\u003e b) -\u003e b",
          "source": "src/HeteroMap-Map.html#newKey",
          "type": "function"
        },
        "index": {
          "description": "Allocate new key which is only valid within the passed function and will be type error if it tries to escape",
          "hierarchy": "HeteroMap Map",
          "module": "HeteroMap.Map",
          "name": "newKey",
          "normalized": "(a b Key c d-\u003ee)-\u003ee",
          "package": "hetero-map",
          "partial": "Key",
          "signature": "(forall x. Key x a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#v:newKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as insert, except does not add the key identifier to the map,\n instead ensuring that it's already there.\n\u003c/p\u003e",
          "module": "HeteroMap.Map",
          "name": "overwrite",
          "package": "hetero-map",
          "signature": "Key x a -\u003e a -\u003e Map xs -\u003e Map xs",
          "source": "src/HeteroMap-Map.html#overwrite",
          "type": "function"
        },
        "index": {
          "description": "Same as insert except does not add the key identifier to the map instead ensuring that it already there",
          "hierarchy": "HeteroMap Map",
          "module": "HeteroMap.Map",
          "name": "overwrite",
          "normalized": "Key a b-\u003eb-\u003eMap c-\u003eMap c",
          "package": "hetero-map",
          "signature": "Key x a-\u003ea-\u003eMap xs-\u003eMap xs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#v:overwrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HeteroMap.Map",
          "name": "singleton",
          "package": "hetero-map",
          "signature": "Key x a -\u003e a -\u003e Map (x :* Z)",
          "source": "src/HeteroMap-Map.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HeteroMap Map",
          "module": "HeteroMap.Map",
          "name": "singleton",
          "normalized": "Key a b-\u003eb-\u003eMap(a*Z)",
          "package": "hetero-map",
          "signature": "Key x a-\u003ea-\u003eMap(x*Z)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#v:singleton"
      }
    }
  ]
]