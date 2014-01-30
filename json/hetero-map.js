[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#",
      "description": {
        "fct-module": "HeteroMap.Map",
        "fct-package": "hetero-map",
        "fct-signature": "module",
        "fct-source": "src/HeteroMap-Map.html",
        "fct-type": "module",
        "title": "Map"
      },
      "index": {
        "description": "",
        "hierarchy": "HeteroMap Map",
        "module": "HeteroMap.Map",
        "name": "Map",
        "normalized": "",
        "package": "hetero-map",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eA Key in a heterogeneous map.  \u003ccode\u003ex\u003c/code\u003e is the key identifier type, \n which ensures that we don't look up a key in a map that doesn't\n have it.\n\u003c/p\u003e",
        "fct-module": "HeteroMap.Map",
        "fct-package": "hetero-map",
        "fct-signature": "data",
        "fct-source": "src/HeteroMap-Map.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "Key in heterogeneous map is the key identifier type which ensures that we don look up key in map that doesn have it",
        "hierarchy": "HeteroMap Map",
        "module": "HeteroMap.Map",
        "name": "Key",
        "normalized": "",
        "package": "hetero-map",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#t:Map",
      "description": {
        "fct-descr": "\u003cp\u003eA heterogeneous map, including keys \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HeteroMap.Map",
        "fct-package": "hetero-map",
        "fct-signature": "data",
        "fct-source": "src/HeteroMap-Map.html#Map",
        "fct-type": "data",
        "title": "Map"
      },
      "index": {
        "description": "heterogeneous map including keys xs",
        "hierarchy": "HeteroMap Map",
        "module": "HeteroMap.Map",
        "name": "Map",
        "normalized": "",
        "package": "hetero-map",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#v:empty",
      "description": {
        "fct-module": "HeteroMap.Map",
        "fct-package": "hetero-map",
        "fct-signature": "Map Z",
        "fct-source": "src/HeteroMap-Map.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "HeteroMap Map",
        "module": "HeteroMap.Map",
        "name": "empty",
        "normalized": "",
        "package": "hetero-map",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#v:insert",
      "description": {
        "fct-module": "HeteroMap.Map",
        "fct-package": "hetero-map",
        "fct-signature": "Key x a -\u003e a -\u003e Map xs -\u003e Map (x :* xs)",
        "fct-source": "src/HeteroMap-Map.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "HeteroMap Map",
        "module": "HeteroMap.Map",
        "name": "insert",
        "normalized": "Key a b-\u003eb-\u003eMap c-\u003eMap(a*c)",
        "package": "hetero-map",
        "partial": "",
        "signature": "Key x a-\u003ea-\u003eMap xs-\u003eMap(x*xs)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#v:lookup",
      "description": {
        "fct-module": "HeteroMap.Map",
        "fct-package": "hetero-map",
        "fct-signature": "Key x a -\u003e Map xs -\u003e a",
        "fct-source": "src/HeteroMap-Map.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "HeteroMap Map",
        "module": "HeteroMap.Map",
        "name": "lookup",
        "normalized": "Key a b-\u003eMap c-\u003eb",
        "package": "hetero-map",
        "partial": "",
        "signature": "Key x a-\u003eMap xs-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#v:newKey",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate a new key, which is only valid within the passed function\n (and will be a type error if it tries to escape).\n\u003c/p\u003e",
        "fct-module": "HeteroMap.Map",
        "fct-package": "hetero-map",
        "fct-signature": "(forall x.  Key x a -\u003e b) -\u003e b",
        "fct-source": "src/HeteroMap-Map.html#newKey",
        "fct-type": "function",
        "title": "newKey"
      },
      "index": {
        "description": "Allocate new key which is only valid within the passed function and will be type error if it tries to escape",
        "hierarchy": "HeteroMap Map",
        "module": "HeteroMap.Map",
        "name": "newKey",
        "normalized": "(a b Key c d-\u003ee)-\u003ee",
        "package": "hetero-map",
        "partial": "Key",
        "signature": "(forall x. Key x a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#v:overwrite",
      "description": {
        "fct-descr": "\u003cp\u003eSame as insert, except does not add the key identifier to the map,\n instead ensuring that it's already there.\n\u003c/p\u003e",
        "fct-module": "HeteroMap.Map",
        "fct-package": "hetero-map",
        "fct-signature": "Key x a -\u003e a -\u003e Map xs -\u003e Map xs",
        "fct-source": "src/HeteroMap-Map.html#overwrite",
        "fct-type": "function",
        "title": "overwrite"
      },
      "index": {
        "description": "Same as insert except does not add the key identifier to the map instead ensuring that it already there",
        "hierarchy": "HeteroMap Map",
        "module": "HeteroMap.Map",
        "name": "overwrite",
        "normalized": "Key a b-\u003eb-\u003eMap c-\u003eMap c",
        "package": "hetero-map",
        "partial": "",
        "signature": "Key x a-\u003ea-\u003eMap xs-\u003eMap xs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hetero-map/docs/HeteroMap-Map.html#v:singleton",
      "description": {
        "fct-module": "HeteroMap.Map",
        "fct-package": "hetero-map",
        "fct-signature": "Key x a -\u003e a -\u003e Map (x :* Z)",
        "fct-source": "src/HeteroMap-Map.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "HeteroMap Map",
        "module": "HeteroMap.Map",
        "name": "singleton",
        "normalized": "Key a b-\u003eb-\u003eMap(a*Z)",
        "package": "hetero-map",
        "partial": "",
        "signature": "Key x a-\u003ea-\u003eMap(x*Z)"
      }
    }
  }
]