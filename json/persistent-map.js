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
        "word": "persistent-map"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Provides a least recently used caching policy.\n Note: This module is simply a wrapper around the LRU-package.\n",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure-LRU.html",
          "type": "unknown"
        },
        "index": {
          "description": "Provides least recently used caching policy Note This module is simply wrapper around the LRU-package",
          "type": "unknown"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure-LRU.html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CacheStructure",
          "name": "CacheException",
          "package": "persistent-map",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-CacheStructure.html#CacheException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data CacheStructure",
          "module": "Data.CacheStructure",
          "name": "CacheException",
          "package": "persistent-map",
          "partial": "Cache Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure.html#t:CacheException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CacheStructure",
          "name": "CacheStructure",
          "package": "persistent-map",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-CacheStructure.html#CacheStructure",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data CacheStructure",
          "module": "Data.CacheStructure",
          "name": "CacheStructure",
          "package": "persistent-map",
          "partial": "Cache Structure",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure.html#v:CacheStructure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "An element is deleted.\n",
          "module": "Data.CacheStructure",
          "name": "delete",
          "package": "persistent-map",
          "signature": "a -\u003e c a -\u003e c a",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-CacheStructure.html#delete",
          "type": "function"
        },
        "index": {
          "description": "An element is deleted",
          "hierarchy": "Data CacheStructure",
          "module": "Data.CacheStructure",
          "name": "delete",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "persistent-map",
          "signature": "a-\u003ec a-\u003ec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Creates an empty cache structure.\n",
          "module": "Data.CacheStructure",
          "name": "empty",
          "package": "persistent-map",
          "signature": "c a",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-CacheStructure.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Creates an empty cache structure",
          "hierarchy": "Data CacheStructure",
          "module": "Data.CacheStructure",
          "name": "empty",
          "package": "persistent-map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A new element is added to the cache or an already existing element\n was accessed.\n",
          "module": "Data.CacheStructure",
          "name": "hit",
          "package": "persistent-map",
          "signature": "a -\u003e c a -\u003e c a",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-CacheStructure.html#hit",
          "type": "function"
        },
        "index": {
          "description": "new element is added to the cache or an already existing element was accessed",
          "hierarchy": "Data CacheStructure",
          "module": "Data.CacheStructure",
          "name": "hit",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "persistent-map",
          "signature": "a-\u003ec a-\u003ec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure.html#v:hit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns the \"last\" element w.r.t. the caching policy.\n",
          "module": "Data.CacheStructure",
          "name": "last",
          "package": "persistent-map",
          "signature": "c a -\u003e a",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-CacheStructure.html#last",
          "type": "function"
        },
        "index": {
          "description": "Returns the last element w.r.t the caching policy",
          "hierarchy": "Data CacheStructure",
          "module": "Data.CacheStructure",
          "name": "last",
          "normalized": "a b-\u003eb",
          "package": "persistent-map",
          "signature": "c a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Checks if an element is in the cache structure.\n",
          "module": "Data.CacheStructure",
          "name": "member",
          "package": "persistent-map",
          "signature": "a -\u003e c a -\u003e Bool",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-CacheStructure.html#member",
          "type": "function"
        },
        "index": {
          "description": "Checks if an element is in the cache structure",
          "hierarchy": "Data CacheStructure",
          "module": "Data.CacheStructure",
          "name": "member",
          "normalized": "a-\u003eb a-\u003eBool",
          "package": "persistent-map",
          "signature": "a-\u003ec a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Checks for emptyness. \n",
          "module": "Data.CacheStructure",
          "name": "null",
          "package": "persistent-map",
          "signature": "c a -\u003e Bool",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-CacheStructure.html#null",
          "type": "function"
        },
        "index": {
          "description": "Checks for emptyness",
          "hierarchy": "Data CacheStructure",
          "module": "Data.CacheStructure",
          "name": "null",
          "normalized": "a b-\u003eBool",
          "package": "persistent-map",
          "signature": "c a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Removes and returns the \"last\" element w.r.t. the caching policy.\n",
          "module": "Data.CacheStructure",
          "name": "pop",
          "package": "persistent-map",
          "signature": "c a -\u003e (c a, a)",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-CacheStructure.html#pop",
          "type": "function"
        },
        "index": {
          "description": "Removes and returns the last element w.r.t the caching policy",
          "hierarchy": "Data CacheStructure",
          "module": "Data.CacheStructure",
          "name": "pop",
          "normalized": "a b-\u003e(a b,b)",
          "package": "persistent-map",
          "signature": "c a-\u003e(c a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Runs \u003ctt\u003e\u003ca\u003epop\u003c/a\u003e\u003c/tt\u003e a number of times. Has a default implementation. \n",
          "module": "Data.CacheStructure",
          "name": "popMany",
          "package": "persistent-map",
          "signature": "Int -\u003e c a -\u003e (c a, [a])",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-CacheStructure.html#popMany",
          "type": "function"
        },
        "index": {
          "description": "Runs pop number of times Has default implementation",
          "hierarchy": "Data CacheStructure",
          "module": "Data.CacheStructure",
          "name": "popMany",
          "normalized": "Int-\u003ea b-\u003e(a b,[b])",
          "package": "persistent-map",
          "partial": "Many",
          "signature": "Int-\u003ec a-\u003e(c a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure.html#v:popMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns the size. Should be \u003cem\u003eO(1)\u003c/em\u003e.\n",
          "module": "Data.CacheStructure",
          "name": "size",
          "package": "persistent-map",
          "signature": "c a -\u003e Int",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-CacheStructure.html#size",
          "type": "function"
        },
        "index": {
          "description": "Returns the size Should be",
          "hierarchy": "Data CacheStructure",
          "module": "Data.CacheStructure",
          "name": "size",
          "normalized": "a b-\u003eInt",
          "package": "persistent-map",
          "signature": "c a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Transforms the cache structure to a list.\n",
          "module": "Data.CacheStructure",
          "name": "toList",
          "package": "persistent-map",
          "signature": "c a -\u003e [a]",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-CacheStructure.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Transforms the cache structure to list",
          "hierarchy": "Data CacheStructure",
          "module": "Data.CacheStructure",
          "name": "toList",
          "normalized": "a b-\u003e[b]",
          "package": "persistent-map",
          "partial": "List",
          "signature": "c a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-CacheStructure.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HasKey",
          "name": "HasKey",
          "package": "persistent-map",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-HasKey.html#HasKey",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HasKey",
          "module": "Data.HasKey",
          "name": "HasKey",
          "package": "persistent-map",
          "partial": "Has Key",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-HasKey.html#v:HasKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.HasKey\",\"Data.TStorage\"]",
          "name": "key",
          "package": "persistent-map",
          "signature": "a -\u003e k",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-HasKey.html#key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/persistent-map/docs/Data-HasKey.html#v:key\",\"http://hackage.haskell.org/package/persistent-map/docs/Data-TStorage.html#v:key\"]"
        },
        "index": {
          "hierarchy": "Data HasKey",
          "module": "Data.HasKey",
          "name": "key",
          "normalized": "a-\u003eb",
          "package": "persistent-map",
          "signature": "a-\u003ek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-HasKey.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TMap.Backend.Binary",
          "name": "BinaryBackend",
          "package": "persistent-map",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Backend-Binary.html#BinaryBackend",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TMap Backend Binary",
          "module": "Data.TMap.Backend.Binary",
          "name": "BinaryBackend",
          "package": "persistent-map",
          "partial": "Binary Backend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap-Backend-Binary.html#t:BinaryBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Creates a new backend that stores one file per entry in the given working directory.\n",
          "module": "Data.TMap.Backend.Binary",
          "name": "mkBinaryBackend",
          "package": "persistent-map",
          "signature": "FilePath -\u003e IO (BinaryBackend k a)",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Backend-Binary.html#mkBinaryBackend",
          "type": "function"
        },
        "index": {
          "description": "Creates new backend that stores one file per entry in the given working directory",
          "hierarchy": "Data TMap Backend Binary",
          "module": "Data.TMap.Backend.Binary",
          "name": "mkBinaryBackend",
          "normalized": "FilePath-\u003eIO(BinaryBackend a b)",
          "package": "persistent-map",
          "partial": "Binary Backend",
          "signature": "FilePath-\u003eIO(BinaryBackend k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap-Backend-Binary.html#v:mkBinaryBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TMap.Backend.NoBackend",
          "name": "NoBackend",
          "package": "persistent-map",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Backend-NoBackend.html#NoBackend",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TMap Backend NoBackend",
          "module": "Data.TMap.Backend.NoBackend",
          "name": "NoBackend",
          "package": "persistent-map",
          "partial": "No Backend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap-Backend-NoBackend.html#t:NoBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TMap.Backend.StdoutBackend",
          "name": "StdoutBackend",
          "package": "persistent-map",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Backend-StdoutBackend.html#StdoutBackend",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TMap Backend StdoutBackend",
          "module": "Data.TMap.Backend.StdoutBackend",
          "name": "StdoutBackend",
          "package": "persistent-map",
          "partial": "Stdout Backend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap-Backend-StdoutBackend.html#t:StdoutBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Creates a new \u003ctt\u003e\u003ca\u003eStdoutBackend\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Data.TMap.Backend.StdoutBackend",
          "name": "newStdoutBackend",
          "package": "persistent-map",
          "signature": "StdoutBackend k a",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Backend-StdoutBackend.html#newStdoutBackend",
          "type": "function"
        },
        "index": {
          "description": "Creates new StdoutBackend",
          "hierarchy": "Data TMap Backend StdoutBackend",
          "module": "Data.TMap.Backend.StdoutBackend",
          "name": "newStdoutBackend",
          "package": "persistent-map",
          "partial": "Stdout Backend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap-Backend-StdoutBackend.html#v:newStdoutBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TMap.Backend",
          "name": "Backend",
          "package": "persistent-map",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Backend.html#Backend",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data TMap Backend",
          "module": "Data.TMap.Backend",
          "name": "Backend",
          "package": "persistent-map",
          "partial": "Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap-Backend.html#v:Backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Called when an element was updated.\n",
          "module": "Data.TMap.Backend",
          "name": "adjust",
          "package": "persistent-map",
          "signature": "b k a -\u003e (a -\u003e a) -\u003e k -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Backend.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "Called when an element was updated",
          "hierarchy": "Data TMap Backend",
          "module": "Data.TMap.Backend",
          "name": "adjust",
          "normalized": "a b c-\u003e(c-\u003ec)-\u003eb-\u003eIO()",
          "package": "persistent-map",
          "signature": "b k a-\u003e(a-\u003ea)-\u003ek-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap-Backend.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Called when an element was deleted from the map.\n",
          "module": "Data.TMap.Backend",
          "name": "delete",
          "package": "persistent-map",
          "signature": "b k a -\u003e k -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Backend.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Called when an element was deleted from the map",
          "hierarchy": "Data TMap Backend",
          "module": "Data.TMap.Backend",
          "name": "delete",
          "normalized": "a b c-\u003eb-\u003eIO()",
          "package": "persistent-map",
          "signature": "b k a-\u003ek-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap-Backend.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Called by \u003cem\u003eflushBackend\u003c/em\u003e and \u003cem\u003epurgeTMap\u003c/em\u003e.\n",
          "module": "Data.TMap.Backend",
          "name": "flush",
          "package": "persistent-map",
          "signature": "b k a -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Backend.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Called by flushBackend and purgeTMap",
          "hierarchy": "Data TMap Backend",
          "module": "Data.TMap.Backend",
          "name": "flush",
          "normalized": "a b c-\u003eIO()",
          "package": "persistent-map",
          "signature": "b k a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap-Backend.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Called in newTMapIO \n",
          "module": "Data.TMap.Backend",
          "name": "initialize",
          "package": "persistent-map",
          "signature": "b k a -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Backend.html#initialize",
          "type": "function"
        },
        "index": {
          "description": "Called in newTMapIO",
          "hierarchy": "Data TMap Backend",
          "module": "Data.TMap.Backend",
          "name": "initialize",
          "normalized": "a b c-\u003eIO()",
          "package": "persistent-map",
          "signature": "b k a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap-Backend.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Called when a new element was inserted.\n",
          "module": "Data.TMap.Backend",
          "name": "insert",
          "package": "persistent-map",
          "signature": "b k a -\u003e k -\u003e a -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Backend.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Called when new element was inserted",
          "hierarchy": "Data TMap Backend",
          "module": "Data.TMap.Backend",
          "name": "insert",
          "normalized": "a b c-\u003eb-\u003ec-\u003eIO()",
          "package": "persistent-map",
          "signature": "b k a-\u003ek-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap-Backend.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Called when an element is not found in the map. \n",
          "module": "Data.TMap.Backend",
          "name": "lookup",
          "package": "persistent-map",
          "signature": "b k a -\u003e k -\u003e IO (Maybe a)",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Backend.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Called when an element is not found in the map",
          "hierarchy": "Data TMap Backend",
          "module": "Data.TMap.Backend",
          "name": "lookup",
          "normalized": "a b c-\u003eb-\u003eIO(Maybe c)",
          "package": "persistent-map",
          "signature": "b k a-\u003ek-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap-Backend.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The standard library type Data.Map repackaged as a \u003ctt\u003e\u003ca\u003eTMap\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Data.TMap",
          "name": "TFiniteMap",
          "package": "persistent-map",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#TFiniteMap",
          "type": "type"
        },
        "index": {
          "description": "The standard library type Data.Map repackaged as TMap",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "TFiniteMap",
          "package": "persistent-map",
          "partial": "TFinite Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#t:TFiniteMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TMap",
          "name": "TMap",
          "package": "persistent-map",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#TMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "TMap",
          "package": "persistent-map",
          "partial": "TMap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#t:TMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TMap",
          "name": "TMapException",
          "package": "persistent-map",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap-Exception.html#TMapException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "TMapException",
          "package": "persistent-map",
          "partial": "TMap Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#t:TMapException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Applies a function to the element identified by the key. Can throw an \u003ctt\u003e\u003ca\u003eEntryNotFound\u003c/a\u003e\u003c/tt\u003e exception.\n",
          "module": "Data.TMap",
          "name": "adjust",
          "package": "persistent-map",
          "signature": "(a -\u003e a) -\u003e k -\u003e TMap map k a b c -\u003e stm ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "Applies function to the element identified by the key Can throw an EntryNotFound exception",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003eTMap c b a d e-\u003ef()",
          "package": "persistent-map",
          "signature": "(a-\u003ea)-\u003ek-\u003eTMap map k a b c-\u003estm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Removes a key from the map. Can throw an \u003ctt\u003e\u003ca\u003eEntryNotFound\u003c/a\u003e\u003c/tt\u003e exception.\n",
          "module": "Data.TMap",
          "name": "delete",
          "package": "persistent-map",
          "signature": "k -\u003e TMap map k a b c -\u003e stm ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Removes key from the map Can throw an EntryNotFound exception",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "delete",
          "normalized": "a-\u003eTMap b a c d e-\u003ef()",
          "package": "persistent-map",
          "signature": "k-\u003eTMap map k a b c-\u003estm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sends a \u003cem\u003eB.flush\u003c/em\u003e request to the backend. Useful for asynchronous backend\n implementations.\n",
          "module": "Data.TMap",
          "name": "flushBackend",
          "package": "persistent-map",
          "signature": "TMap map k a b c -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#flushBackend",
          "type": "function"
        },
        "index": {
          "description": "Sends B.flush request to the backend Useful for asynchronous backend implementations",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "flushBackend",
          "normalized": "TMap a b c d e-\u003eIO()",
          "package": "persistent-map",
          "partial": "Backend",
          "signature": "TMap map k a b c-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:flushBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Gets the current size of the map. \u003cem\u003eO(1)\u003c/em\u003e.\n",
          "module": "Data.TMap",
          "name": "getCurrentSize",
          "package": "persistent-map",
          "signature": "TMap map k a b c -\u003e stm Int",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#getCurrentSize",
          "type": "function"
        },
        "index": {
          "description": "Gets the current size of the map",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "getCurrentSize",
          "normalized": "TMap a b c d e-\u003ef Int",
          "package": "persistent-map",
          "partial": "Current Size",
          "signature": "TMap map k a b c-\u003estm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:getCurrentSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Gets the maximum size of the map. \u003cem\u003eO(1)\u003c/em\u003e.\n",
          "module": "Data.TMap",
          "name": "getMaximumSize",
          "package": "persistent-map",
          "signature": "TMap map k a b c -\u003e stm (Maybe Int)",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#getMaximumSize",
          "type": "function"
        },
        "index": {
          "description": "Gets the maximum size of the map",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "getMaximumSize",
          "normalized": "TMap a b c d e-\u003ef(Maybe Int)",
          "package": "persistent-map",
          "partial": "Maximum Size",
          "signature": "TMap map k a b c-\u003estm(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:getMaximumSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Adds a key-value mapping to the map. Can throw a \u003ctt\u003e\u003ca\u003eDuplicateEntry\u003c/a\u003e\u003c/tt\u003e\n exception.\n",
          "module": "Data.TMap",
          "name": "insert",
          "package": "persistent-map",
          "signature": "k -\u003e a -\u003e TMap map k a b c -\u003e stm ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Adds key-value mapping to the map Can throw DuplicateEntry exception",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eTMap c a b d e-\u003ef()",
          "package": "persistent-map",
          "signature": "k-\u003ea-\u003eTMap map k a b c-\u003estm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Looks for a given key in the map and (if necessary) in the persistent storage \n and updates the map if necessary.\n",
          "module": "Data.TMap",
          "name": "lookup",
          "package": "persistent-map",
          "signature": "k -\u003e TMap map k a b c -\u003e stm (Maybe a)",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Looks for given key in the map and if necessary in the persistent storage and updates the map if necessary",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "lookup",
          "normalized": "a-\u003eTMap b a c d e-\u003ef(Maybe c)",
          "package": "persistent-map",
          "signature": "k-\u003eTMap map k a b c-\u003estm(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Causes the element to be reread from the backend on the next \u003ctt\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/tt\u003e.\n Throws an \u003ctt\u003e\u003ca\u003eEntryNotFound\u003c/a\u003e\u003c/tt\u003e exception if the entry does not exist.\n",
          "module": "Data.TMap",
          "name": "markAsDirty",
          "package": "persistent-map",
          "signature": "k -\u003e TMap map k a b c -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#markAsDirty",
          "type": "function"
        },
        "index": {
          "description": "Causes the element to be reread from the backend on the next lookup Throws an EntryNotFound exception if the entry does not exist",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "markAsDirty",
          "normalized": "a-\u003eTMap b a c d e-\u003eIO()",
          "package": "persistent-map",
          "partial": "As Dirty",
          "signature": "k-\u003eTMap map k a b c-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:markAsDirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Checks whether the given key is in the map.\n",
          "module": "Data.TMap",
          "name": "member",
          "package": "persistent-map",
          "signature": "k -\u003e TMap map k a b c -\u003e stm Bool",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#member",
          "type": "function"
        },
        "index": {
          "description": "Checks whether the given key is in the map",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "member",
          "normalized": "a-\u003eTMap b a c d e-\u003ef Bool",
          "package": "persistent-map",
          "signature": "k-\u003eTMap map k a b c-\u003estm Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the backend\n",
          "module": "Data.TMap",
          "name": "newTFiniteMapIO",
          "package": "persistent-map",
          "signature": "b k a-\u003e IO (TFiniteMap k a b)",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#newTFiniteMapIO",
          "type": "function"
        },
        "index": {
          "description": "the backend",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "newTFiniteMapIO",
          "normalized": "a b c-\u003eIO(TFiniteMap b c a)",
          "package": "persistent-map",
          "partial": "TFinite Map IO",
          "signature": "b k a-\u003eIO(TFiniteMap k a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:newTFiniteMapIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the backend\nmaximum-size: Use \u003ctt\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/tt\u003e for unbounded size.\n",
          "module": "[\"Data.TMap\",\"Data.TStorage\"]",
          "name": "newTMapIO",
          "package": "persistent-map",
          "signature": "b k a-\u003e Maybe Int-\u003e IO (TMap map k a b c)",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#newTMapIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:newTMapIO\",\"http://hackage.haskell.org/package/persistent-map/docs/Data-TStorage.html#v:newTMapIO\"]"
        },
        "index": {
          "description": "the backend maximum-size Use Nothing for unbounded size",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "newTMapIO",
          "normalized": "a b c-\u003eMaybe Int-\u003eIO(TMap d b c a e)",
          "package": "persistent-map",
          "partial": "TMap IO",
          "signature": "b k a-\u003eMaybe Int-\u003eIO(TMap map k a b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:newTMapIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Reduces the map to the appropriate size if the maximum size was exceeded.\n Calls \u003cem\u003eData.TMap.Backend.flush\u003c/em\u003e if the map is purged.\n Runs in \u003cem\u003eO(1)\u003c/em\u003e if the map size is within bounds, otherwise \u003cem\u003eO(n)\u003c/em\u003e.\n",
          "module": "[\"Data.TMap\",\"Data.TStorage\"]",
          "name": "purgeTMapIO",
          "package": "persistent-map",
          "signature": "TMap map k a b c -\u003e io ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#purgeTMapIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:purgeTMapIO\",\"http://hackage.haskell.org/package/persistent-map/docs/Data-TStorage.html#v:purgeTMapIO\"]"
        },
        "index": {
          "description": "Reduces the map to the appropriate size if the maximum size was exceeded Calls Data.TMap.Backend.flush if the map is purged Runs in if the map size is within bounds otherwise",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "purgeTMapIO",
          "normalized": "TMap a b c d e-\u003ef()",
          "package": "persistent-map",
          "partial": "TMap IO",
          "signature": "TMap map k a b c-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:purgeTMapIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Sets the maximum size of the map. \u003cem\u003eO(1)\u003c/em\u003e. Note that the size of the TMap needs\n to be reduced manually to the maximum size by calling \u003cem\u003epurgeTMap\u003c/em\u003e.\n",
          "module": "Data.TMap",
          "name": "setMaximumSize",
          "package": "persistent-map",
          "signature": "TMap map k a b c -\u003e Int -\u003e stm ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#setMaximumSize",
          "type": "function"
        },
        "index": {
          "description": "Sets the maximum size of the map Note that the size of the TMap needs to be reduced manually to the maximum size by calling purgeTMap",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "setMaximumSize",
          "normalized": "TMap a b c d e-\u003eInt-\u003ef()",
          "package": "persistent-map",
          "partial": "Maximum Size",
          "signature": "TMap map k a b c-\u003eInt-\u003estm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:setMaximumSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Causes the element to be reread from the backend on the next \u003ctt\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/tt\u003e. Does\n not throw an error when the element does not exist.\n",
          "module": "Data.TMap",
          "name": "tryMarkAsDirty",
          "package": "persistent-map",
          "signature": "k -\u003e TMap map k a b c -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#tryMarkAsDirty",
          "type": "function"
        },
        "index": {
          "description": "Causes the element to be reread from the backend on the next lookup Does not throw an error when the element does not exist",
          "hierarchy": "Data TMap",
          "module": "Data.TMap",
          "name": "tryMarkAsDirty",
          "normalized": "a-\u003eTMap b a c d e-\u003eIO()",
          "package": "persistent-map",
          "partial": "Mark As Dirty",
          "signature": "k-\u003eTMap map k a b c-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TMap.html#v:tryMarkAsDirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TStorage",
          "name": "TMap",
          "package": "persistent-map",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TMap.html#TMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TStorage",
          "module": "Data.TStorage",
          "name": "TMap",
          "package": "persistent-map",
          "partial": "TMap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TStorage.html#t:TMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TStorage",
          "name": "HasKey",
          "package": "persistent-map",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-HasKey.html#HasKey",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data TStorage",
          "module": "Data.TStorage",
          "name": "HasKey",
          "package": "persistent-map",
          "partial": "Has Key",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TStorage.html#v:HasKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Adds a new element to the map. The key is automatically deduced by the\n \u003ctt\u003e\u003ca\u003eHasKey\u003c/a\u003e\u003c/tt\u003e instantiation.\n",
          "module": "Data.TStorage",
          "name": "add",
          "package": "persistent-map",
          "signature": "a -\u003e TMap map k a b c -\u003e stm ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TStorage.html#add",
          "type": "function"
        },
        "index": {
          "description": "Adds new element to the map The key is automatically deduced by the HasKey instantiation",
          "hierarchy": "Data TStorage",
          "module": "Data.TStorage",
          "name": "add",
          "normalized": "a-\u003eTMap b c a d e-\u003ef()",
          "package": "persistent-map",
          "signature": "a-\u003eTMap map k a b c-\u003estm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TStorage.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Applies a function to an element that might be only partially initialized.\n",
          "module": "Data.TStorage",
          "name": "apply",
          "package": "persistent-map",
          "signature": "(a -\u003e a) -\u003e a -\u003e TMap map k a b c -\u003e stm a",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TStorage.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Applies function to an element that might be only partially initialized",
          "hierarchy": "Data TStorage",
          "module": "Data.TStorage",
          "name": "apply",
          "normalized": "(a-\u003ea)-\u003ea-\u003eTMap b c a d e-\u003ef a",
          "package": "persistent-map",
          "signature": "(a-\u003ea)-\u003ea-\u003eTMap map k a b c-\u003estm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TStorage.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Fills a partially initialized value with data from the TMap. Throws\n an \u003ctt\u003e\u003ca\u003eEntryNotFound\u003c/a\u003e\u003c/tt\u003e exception if there is no corresponding entry.\n",
          "module": "Data.TStorage",
          "name": "complete",
          "package": "persistent-map",
          "signature": "a -\u003e TMap map k a b c -\u003e stm a",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TStorage.html#complete",
          "type": "function"
        },
        "index": {
          "description": "Fills partially initialized value with data from the TMap Throws an EntryNotFound exception if there is no corresponding entry",
          "hierarchy": "Data TStorage",
          "module": "Data.TStorage",
          "name": "complete",
          "normalized": "a-\u003eTMap b c a d e-\u003ef a",
          "package": "persistent-map",
          "signature": "a-\u003eTMap map k a b c-\u003estm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TStorage.html#v:complete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Removes the element from the map.\n",
          "module": "Data.TStorage",
          "name": "remove",
          "package": "persistent-map",
          "signature": "a -\u003e TMap map k a b c -\u003e stm ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TStorage.html#remove",
          "type": "function"
        },
        "index": {
          "description": "Removes the element from the map",
          "hierarchy": "Data TStorage",
          "module": "Data.TStorage",
          "name": "remove",
          "normalized": "a-\u003eTMap b c a d e-\u003ef()",
          "package": "persistent-map",
          "signature": "a-\u003eTMap map k a b c-\u003estm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TStorage.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Removes the entry that has the supplied key.\n",
          "module": "Data.TStorage",
          "name": "removeByKey",
          "package": "persistent-map",
          "signature": "k -\u003e TMap map k a b c -\u003e stm ()",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TStorage.html#removeByKey",
          "type": "function"
        },
        "index": {
          "description": "Removes the entry that has the supplied key",
          "hierarchy": "Data TStorage",
          "module": "Data.TStorage",
          "name": "removeByKey",
          "normalized": "a-\u003eTMap b a c d e-\u003ef()",
          "package": "persistent-map",
          "partial": "By Key",
          "signature": "k-\u003eTMap map k a b c-\u003estm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TStorage.html#v:removeByKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Tries to fill a partially initialized value with data from the TMap. Returns\n \u003ctt\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/tt\u003e if the TMap does not contain a corresponding entry. \n",
          "module": "Data.TStorage",
          "name": "tryComplete",
          "package": "persistent-map",
          "signature": "a -\u003e TMap map k a b c -\u003e stm (Maybe a)",
          "source": "http://hackage.haskell.org/package/persistent-map/docs/src/Data-TStorage.html#tryComplete",
          "type": "function"
        },
        "index": {
          "description": "Tries to fill partially initialized value with data from the TMap Returns Nothing if the TMap does not contain corresponding entry",
          "hierarchy": "Data TStorage",
          "module": "Data.TStorage",
          "name": "tryComplete",
          "normalized": "a-\u003eTMap b c a d e-\u003ef(Maybe a)",
          "package": "persistent-map",
          "partial": "Complete",
          "signature": "a-\u003eTMap map k a b c-\u003estm(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-map/docs/Data-TStorage.html#v:tryComplete"
      }
    }
  ]
]