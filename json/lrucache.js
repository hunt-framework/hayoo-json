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
        "word": "lrucache"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a mutable wrapping of an LRU in the IO\n monad, providing atomic access in a concurrent environment.  All\n calls preserve the same semantics as those in \u003ca\u003eData.Cache.LRU\u003c/a\u003e, but\n perform updates in place.\n\u003c/p\u003e\u003cp\u003eThis module contains the internal implementation details.  It's\n possible to put an \u003ccode\u003e\u003ca\u003eAtomicLRU\u003c/a\u003e\u003c/code\u003e into a bad state with this module.\n It is highly recommended that the external interface,\n \u003ca\u003eData.Cache.LRU.IO\u003c/a\u003e, be used instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "Internal",
          "package": "lrucache",
          "source": "src/Data-Cache-LRU-IO-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains mutable wrapping of an LRU in the IO monad providing atomic access in concurrent environment All calls preserve the same semantics as those in Data.Cache.LRU but perform updates in place This module contains the internal implementation details It possible to put an AtomicLRU into bad state with this module It is highly recommended that the external interface Data.Cache.LRU.IO be used instead",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "Internal",
          "package": "lrucache",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe opaque wrapper type\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "AtomicLRU",
          "package": "lrucache",
          "source": "src/Data-Cache-LRU-IO-Internal.html#AtomicLRU",
          "type": "newtype"
        },
        "index": {
          "description": "The opaque wrapper type",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "AtomicLRU",
          "package": "lrucache",
          "partial": "Atomic LRU",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#t:AtomicLRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "C",
          "package": "lrucache",
          "signature": "C (MVar (LRU key val))",
          "source": "src/Data-Cache-LRU-IO-Internal.html#AtomicLRU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "C",
          "package": "lrucache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an item from an AtomicLRU.  Returns the value for the\n removed key, if it was present\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.IO.Internal\",\"Data.Cache.LRU.IO\"]",
          "name": "delete",
          "package": "lrucache",
          "signature": "key -\u003e AtomicLRU key val -\u003e IO (Maybe val)",
          "source": "src/Data-Cache-LRU-IO-Internal.html#delete",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:delete\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:delete\"]"
        },
        "index": {
          "description": "Remove an item from an AtomicLRU Returns the value for the removed key if it was present",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "delete",
          "normalized": "a-\u003eAtomicLRU a b-\u003eIO(Maybe b)",
          "package": "lrucache",
          "signature": "key-\u003eAtomicLRU key val-\u003eIO(Maybe val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a new LRU from the optional maximum size and list of\n contents. See \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e for the semantics.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.IO.Internal\",\"Data.Cache.LRU.IO\"]",
          "name": "fromList",
          "package": "lrucache",
          "signature": "Maybe Integer-\u003e [(key, val)]-\u003e IO (AtomicLRU key val)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:fromList\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:fromList\"]"
        },
        "index": {
          "description": "Build new LRU from the optional maximum size and list of contents See fromList for the semantics",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "fromList",
          "normalized": "Maybe Integer-\u003e[(a,b)]-\u003eIO(AtomicLRU a b)",
          "package": "lrucache",
          "partial": "List",
          "signature": "Maybe Integer-\u003e[(key,val)]-\u003eIO(AtomicLRU key val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a key/value pair into an AtomicLRU.  See \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e for\n the semantics.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.IO.Internal\",\"Data.Cache.LRU.IO\"]",
          "name": "insert",
          "package": "lrucache",
          "signature": "key -\u003e val -\u003e AtomicLRU key val -\u003e IO ()",
          "source": "src/Data-Cache-LRU-IO-Internal.html#insert",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:insert\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:insert\"]"
        },
        "index": {
          "description": "Insert key value pair into an AtomicLRU See insert for the semantics",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eAtomicLRU a b-\u003eIO()",
          "package": "lrucache",
          "signature": "key-\u003eval-\u003eAtomicLRU key val-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a key in an AtomicLRU. See \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e for the\n semantics.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.IO.Internal\",\"Data.Cache.LRU.IO\"]",
          "name": "lookup",
          "package": "lrucache",
          "signature": "key -\u003e AtomicLRU key val -\u003e IO (Maybe val)",
          "source": "src/Data-Cache-LRU-IO-Internal.html#lookup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:lookup\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:lookup\"]"
        },
        "index": {
          "description": "Look up key in an AtomicLRU See lookup for the semantics",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "lookup",
          "normalized": "a-\u003eAtomicLRU a b-\u003eIO(Maybe b)",
          "package": "lrucache",
          "signature": "key-\u003eAtomicLRU key val-\u003eIO(Maybe val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Cache.LRU.IO.Internal\",\"Data.Cache.LRU.IO\"]",
          "name": "maxSize",
          "package": "lrucache",
          "signature": "AtomicLRU key val -\u003e IO (Maybe Integer)",
          "source": "src/Data-Cache-LRU-IO-Internal.html#maxSize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:maxSize\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:maxSize\"]"
        },
        "index": {
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "maxSize",
          "normalized": "AtomicLRU a b-\u003eIO(Maybe Integer)",
          "package": "lrucache",
          "partial": "Size",
          "signature": "AtomicLRU key val-\u003eIO(Maybe Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:maxSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a function that takes an \u003ccode\u003e\u003ca\u003eLRU\u003c/a\u003e\u003c/code\u003e and returns one of the\n same type, use it to modify the contents of this AtomicLRU.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.IO.Internal\",\"Data.Cache.LRU.IO\"]",
          "name": "modifyAtomicLRU",
          "package": "lrucache",
          "signature": "(LRU key val -\u003e LRU key val) -\u003e AtomicLRU key val -\u003e IO ()",
          "source": "src/Data-Cache-LRU-IO-Internal.html#modifyAtomicLRU",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:modifyAtomicLRU\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:modifyAtomicLRU\"]"
        },
        "index": {
          "description": "Given function that takes an LRU and returns one of the same type use it to modify the contents of this AtomicLRU",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "modifyAtomicLRU",
          "normalized": "(LRU a b-\u003eLRU a b)-\u003eAtomicLRU a b-\u003eIO()",
          "package": "lrucache",
          "partial": "Atomic LRU",
          "signature": "(LRU key val-\u003eLRU key val)-\u003eAtomicLRU key val-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:modifyAtomicLRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a function that takes an \u003ccode\u003e\u003ca\u003eLRU\u003c/a\u003e\u003c/code\u003e and returns an IO action\n producting one of the same type, use it to modify the contents of\n this AtomicLRU.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.IO.Internal\",\"Data.Cache.LRU.IO\"]",
          "name": "modifyAtomicLRU'",
          "package": "lrucache",
          "signature": "(LRU key val -\u003e IO (LRU key val)) -\u003e AtomicLRU key val -\u003e IO ()",
          "source": "src/Data-Cache-LRU-IO-Internal.html#modifyAtomicLRU%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:modifyAtomicLRU-39-\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:modifyAtomicLRU-39-\"]"
        },
        "index": {
          "description": "Given function that takes an LRU and returns an IO action producting one of the same type use it to modify the contents of this AtomicLRU",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "modifyAtomicLRU'",
          "normalized": "(LRU a b-\u003eIO(LRU a b))-\u003eAtomicLRU a b-\u003eIO()",
          "package": "lrucache",
          "partial": "Atomic LRU'",
          "signature": "(LRU key val-\u003eIO(LRU key val))-\u003eAtomicLRU key val-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:modifyAtomicLRU-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emodifyMVar\u003c/a\u003e\u003c/code\u003e that forces the result of the\n function application to WHNF.\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "modifyMVar'",
          "package": "lrucache",
          "signature": "MVar a -\u003e (a -\u003e IO (a, b)) -\u003e IO b",
          "source": "src/Data-Cache-LRU-IO-Internal.html#modifyMVar%27",
          "type": "function"
        },
        "index": {
          "description": "version of modifyMVar that forces the result of the function application to WHNF",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "modifyMVar'",
          "normalized": "MVar a-\u003e(a-\u003eIO(a,b))-\u003eIO b",
          "package": "lrucache",
          "partial": "MVar'",
          "signature": "MVar a-\u003e(a-\u003eIO(a,b))-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:modifyMVar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emodifyMVar_\u003c/a\u003e\u003c/code\u003e that forces the result of the\n function application to WHNF.\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "modifyMVar_'",
          "package": "lrucache",
          "signature": "MVar a -\u003e (a -\u003e IO a) -\u003e IO ()",
          "source": "src/Data-Cache-LRU-IO-Internal.html#modifyMVar_%27",
          "type": "function"
        },
        "index": {
          "description": "version of modifyMVar that forces the result of the function application to WHNF",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "modifyMVar_'",
          "normalized": "MVar a-\u003e(a-\u003eIO a)-\u003eIO()",
          "package": "lrucache",
          "partial": "MVar",
          "signature": "MVar a-\u003e(a-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:modifyMVar_-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new AtomicLRU that will not grow beyond the optional\n maximum size, if specified.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.IO.Internal\",\"Data.Cache.LRU.IO\"]",
          "name": "newAtomicLRU",
          "package": "lrucache",
          "signature": "Maybe Integer-\u003e IO (AtomicLRU key val)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:newAtomicLRU\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:newAtomicLRU\"]"
        },
        "index": {
          "description": "Make new AtomicLRU that will not grow beyond the optional maximum size if specified",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "newAtomicLRU",
          "normalized": "Maybe Integer-\u003eIO(AtomicLRU a b)",
          "package": "lrucache",
          "partial": "Atomic LRU",
          "signature": "Maybe Integer-\u003eIO(AtomicLRU key val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:newAtomicLRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the least-recently accessed item from an AtomicLRU.\n Returns the (key, val) pair removed, if one was present.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.IO.Internal\",\"Data.Cache.LRU.IO\"]",
          "name": "pop",
          "package": "lrucache",
          "signature": "AtomicLRU key val -\u003e IO (Maybe (key, val))",
          "source": "src/Data-Cache-LRU-IO-Internal.html#pop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:pop\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:pop\"]"
        },
        "index": {
          "description": "Remove the least-recently accessed item from an AtomicLRU Returns the key val pair removed if one was present",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "pop",
          "normalized": "AtomicLRU a b-\u003eIO(Maybe(a,b))",
          "package": "lrucache",
          "signature": "AtomicLRU key val-\u003eIO(Maybe(key,val))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of elements the AtomicLRU currently contains.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.IO.Internal\",\"Data.Cache.LRU.IO\"]",
          "name": "size",
          "package": "lrucache",
          "signature": "AtomicLRU key val -\u003e IO Int",
          "source": "src/Data-Cache-LRU-IO-Internal.html#size",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:size\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:size\"]"
        },
        "index": {
          "description": "Returns the number of elements the AtomicLRU currently contains",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "size",
          "normalized": "AtomicLRU a b-\u003eIO Int",
          "package": "lrucache",
          "signature": "AtomicLRU key val-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a list view of an AtomicLRU.  See \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e for the\n semantics.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.IO.Internal\",\"Data.Cache.LRU.IO\"]",
          "name": "toList",
          "package": "lrucache",
          "signature": "AtomicLRU key val -\u003e IO [(key, val)]",
          "source": "src/Data-Cache-LRU-IO-Internal.html#toList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:toList\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:toList\"]"
        },
        "index": {
          "description": "Retrieve list view of an AtomicLRU See toList for the semantics",
          "hierarchy": "Data Cache LRU IO Internal",
          "module": "Data.Cache.LRU.IO.Internal",
          "name": "toList",
          "normalized": "AtomicLRU a b-\u003eIO[(a,b)]",
          "package": "lrucache",
          "partial": "List",
          "signature": "AtomicLRU key val-\u003eIO[(key,val)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a mutable wrapping of an LRU in the IO\n monad, providing atomic access in a concurrent environment.  All\n calls preserve the same semantics as those in \u003ca\u003eData.Cache.LRU\u003c/a\u003e, but\n perform updates in place.  All functions use a single atomic update\n of the backing structure.\n\u003c/p\u003e\u003cp\u003eThe interface this module provides is opaque.  If further control\n is desired, the \u003ca\u003eData.Cache.LRU.IO.Internal\u003c/a\u003e module can be used in\n combination with \u003ca\u003eData.Cache.LRU.Internal\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e(This implementation uses an MVar for coarse locking. It's unclear\n if anything else would give better performance, given that many\n calls alter the head of the access list.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Cache.LRU.IO",
          "name": "IO",
          "package": "lrucache",
          "source": "src/Data-Cache-LRU-IO.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains mutable wrapping of an LRU in the IO monad providing atomic access in concurrent environment All calls preserve the same semantics as those in Data.Cache.LRU but perform updates in place All functions use single atomic update of the backing structure The interface this module provides is opaque If further control is desired the Data.Cache.LRU.IO.Internal module can be used in combination with Data.Cache.LRU.Internal This implementation uses an MVar for coarse locking It unclear if anything else would give better performance given that many calls alter the head of the access list",
          "hierarchy": "Data Cache LRU IO",
          "module": "Data.Cache.LRU.IO",
          "name": "IO",
          "package": "lrucache",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe opaque wrapper type\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.IO",
          "name": "AtomicLRU",
          "package": "lrucache",
          "source": "src/Data-Cache-LRU-IO-Internal.html#AtomicLRU",
          "type": "data"
        },
        "index": {
          "description": "The opaque wrapper type",
          "hierarchy": "Data Cache LRU IO",
          "module": "Data.Cache.LRU.IO",
          "name": "AtomicLRU",
          "package": "lrucache",
          "partial": "Atomic LRU",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#t:AtomicLRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides access to all the internals use by the LRU\n type.  This can be used to create data structures that violate the\n invariants the public interface maintains.  Be careful when using\n this module.  The \u003ccode\u003e\u003ca\u003evalid\u003c/a\u003e\u003c/code\u003e function can be used to check if an LRU\n structure satisfies the invariants the public interface maintains.\n\u003c/p\u003e\u003cp\u003eIf this degree of control isn't needed, consider using\n \u003ca\u003eData.Cache.LRU\u003c/a\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "Internal",
          "package": "lrucache",
          "source": "src/Data-Cache-LRU-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides access to all the internals use by the LRU type This can be used to create data structures that violate the invariants the public interface maintains Be careful when using this module The valid function can be used to check if an LRU structure satisfies the invariants the public interface maintains If this degree of control isn needed consider using Data.Cache.LRU instead",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "Internal",
          "package": "lrucache",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores the information that makes up an LRU cache\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "LRU",
          "package": "lrucache",
          "source": "src/Data-Cache-LRU-Internal.html#LRU",
          "type": "data"
        },
        "index": {
          "description": "Stores the information that makes up an LRU cache",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "LRU",
          "package": "lrucache",
          "partial": "LRU",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#t:LRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe values stored in the Map of the LRU cache.  They embed a\n doubly-linked list through the values of the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "LinkedVal",
          "package": "lrucache",
          "source": "src/Data-Cache-LRU-Internal.html#LinkedVal",
          "type": "data"
        },
        "index": {
          "description": "The values stored in the Map of the LRU cache They embed doubly-linked list through the values of the Map",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "LinkedVal",
          "package": "lrucache",
          "partial": "Linked Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#t:LinkedVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cache.LRU.Internal",
          "name": "LRU",
          "package": "lrucache",
          "signature": "LRU",
          "source": "src/Data-Cache-LRU-Internal.html#LRU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "LRU",
          "package": "lrucache",
          "partial": "LRU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:LRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cache.LRU.Internal",
          "name": "Link",
          "package": "lrucache",
          "signature": "Link",
          "source": "src/Data-Cache-LRU-Internal.html#LinkedVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "Link",
          "package": "lrucache",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal function.  This is very similar to \u003ccode\u003e\u003ca\u003eadjust\u003c/a\u003e\u003c/code\u003e, with\n two major differences.  First, it's strict in the application of\n the function, which is a huge win when working with this structure.\n\u003c/p\u003e\u003cp\u003eSecond, it requires that the key be present in order to work.  If\n the key isn't present, \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e will be inserted into the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e,\n which will cause problems later.\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "adjust'",
          "package": "lrucache",
          "signature": "(a -\u003e a) -\u003e k -\u003e Map k a -\u003e Map k a",
          "source": "src/Data-Cache-LRU-Internal.html#adjust%27",
          "type": "function"
        },
        "index": {
          "description": "Internal function This is very similar to adjust with two major differences First it strict in the application of the function which is huge win when working with this structure Second it requires that the key be present in order to work If the key isn present undefined will be inserted into the Map which will cause problems later",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "adjust'",
          "normalized": "(a-\u003ea)-\u003eb-\u003eMap b a-\u003eMap b a",
          "package": "lrucache",
          "signature": "(a-\u003ea)-\u003ek-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:adjust-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe backing \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "content",
          "package": "lrucache",
          "signature": "(Map key (LinkedVal key val))",
          "source": "src/Data-Cache-LRU-Internal.html#LRU",
          "type": "function"
        },
        "index": {
          "description": "the backing Map",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "content",
          "package": "lrucache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an item from an LRU.  Returns the new LRU, and the value\n removed if the key was present.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.Internal\",\"Data.Cache.LRU\"]",
          "name": "delete",
          "package": "lrucache",
          "signature": "key -\u003e LRU key val -\u003e (LRU key val, Maybe val)",
          "source": "src/Data-Cache-LRU-Internal.html#delete",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:delete\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:delete\"]"
        },
        "index": {
          "description": "Remove an item from an LRU Returns the new LRU and the value removed if the key was present",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "delete",
          "normalized": "a-\u003eLRU a b-\u003e(LRU a b,Maybe b)",
          "package": "lrucache",
          "signature": "key-\u003eLRU key val-\u003e(LRU key val,Maybe val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn internal function used by \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e (when the cache is full)\n and \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e.  This function has strict requirements on its\n arguments in order to work properly.\n\u003c/p\u003e\u003cp\u003eAs this is intended to be an internal function, the arguments were\n chosen to avoid repeated computation, rather than for simplicity of\n calling this function.\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "delete'",
          "package": "lrucache",
          "signature": "key-\u003e LRU key val-\u003e Map key (LinkedVal key val)-\u003e LinkedVal key val-\u003e LRU key val",
          "type": "function"
        },
        "index": {
          "description": "An internal function used by insert when the cache is full and delete This function has strict requirements on its arguments in order to work properly As this is intended to be an internal function the arguments were chosen to avoid repeated computation rather than for simplicity of calling this function",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "delete'",
          "normalized": "a-\u003eLRU a b-\u003eMap a(LinkedVal a b)-\u003eLinkedVal a b-\u003eLRU a b",
          "package": "lrucache",
          "signature": "key-\u003eLRU key val-\u003eMap key(LinkedVal key val)-\u003eLinkedVal key val-\u003eLRU key val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:delete-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe key of the most recently accessed entry\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "first",
          "package": "lrucache",
          "signature": "(Maybe key)",
          "source": "src/Data-Cache-LRU-Internal.html#LRU",
          "type": "function"
        },
        "index": {
          "description": "the key of the most recently accessed entry",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "first",
          "package": "lrucache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a new LRU from the given maximum size and list of contents,\n in order from most recently accessed to least recently accessed.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.Internal\",\"Data.Cache.LRU\"]",
          "name": "fromList",
          "package": "lrucache",
          "signature": "Maybe Integer-\u003e [(key, val)]-\u003e LRU key val",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:fromList\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:fromList\"]"
        },
        "index": {
          "description": "Build new LRU from the given maximum size and list of contents in order from most recently accessed to least recently accessed",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "fromList",
          "normalized": "Maybe Integer-\u003e[(a,b)]-\u003eLRU a b",
          "package": "lrucache",
          "partial": "List",
          "signature": "Maybe Integer-\u003e[(key,val)]-\u003eLRU key val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal function.  The key passed in must be present in the\n LRU.  Moves the item associated with that key to the most\n recently accessed position.\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "hit'",
          "package": "lrucache",
          "signature": "key -\u003e LRU key val -\u003e LRU key val",
          "source": "src/Data-Cache-LRU-Internal.html#hit%27",
          "type": "function"
        },
        "index": {
          "description": "Internal function The key passed in must be present in the LRU Moves the item associated with that key to the most recently accessed position",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "hit'",
          "normalized": "a-\u003eLRU a b-\u003eLRU a b",
          "package": "lrucache",
          "signature": "key-\u003eLRU key val-\u003eLRU key val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:hit-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an item to an LRU.  If the key was already present in the\n LRU, the value is changed to the new value passed in.  The\n item added is marked as the most recently accessed item in the\n LRU returned.\n\u003c/p\u003e\u003cp\u003eIf this would cause the LRU to exceed its maximum size, the\n least recently used item is dropped from the cache.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.Internal\",\"Data.Cache.LRU\"]",
          "name": "insert",
          "package": "lrucache",
          "signature": "key -\u003e val -\u003e LRU key val -\u003e LRU key val",
          "source": "src/Data-Cache-LRU-Internal.html#insert",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:insert\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:insert\"]"
        },
        "index": {
          "description": "Add an item to an LRU If the key was already present in the LRU the value is changed to the new value passed in The item added is marked as the most recently accessed item in the LRU returned If this would cause the LRU to exceed its maximum size the least recently used item is dropped from the cache",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eLRU a b-\u003eLRU a b",
          "package": "lrucache",
          "signature": "key-\u003eval-\u003eLRU key val-\u003eLRU key val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe key of the least recently accessed entry\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "last",
          "package": "lrucache",
          "signature": "(Maybe key)",
          "source": "src/Data-Cache-LRU-Internal.html#LRU",
          "type": "function"
        },
        "index": {
          "description": "the key of the least recently accessed entry",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "last",
          "package": "lrucache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up an item in an LRU.  If it was present, it is marked as\n the most recently accesed in the returned LRU.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.Internal\",\"Data.Cache.LRU\"]",
          "name": "lookup",
          "package": "lrucache",
          "signature": "key -\u003e LRU key val -\u003e (LRU key val, Maybe val)",
          "source": "src/Data-Cache-LRU-Internal.html#lookup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:lookup\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:lookup\"]"
        },
        "index": {
          "description": "Look up an item in an LRU If it was present it is marked as the most recently accesed in the returned LRU",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "lookup",
          "normalized": "a-\u003eLRU a b-\u003e(LRU a b,Maybe b)",
          "package": "lrucache",
          "signature": "key-\u003eLRU key val-\u003e(LRU key val,Maybe val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe maximum size of the LRU cache\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "maxSize",
          "package": "lrucache",
          "signature": "(Maybe Integer)",
          "source": "src/Data-Cache-LRU-Internal.html#LRU",
          "type": "function"
        },
        "index": {
          "description": "the maximum size of the LRU cache",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "maxSize",
          "package": "lrucache",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:maxSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an LRU.  If a size limit is specified, the LRU is guaranteed\n to not grow above the specified number of entries.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.Internal\",\"Data.Cache.LRU\"]",
          "name": "newLRU",
          "package": "lrucache",
          "signature": "Maybe Integer-\u003e LRU key val",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:newLRU\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:newLRU\"]"
        },
        "index": {
          "description": "Make an LRU If size limit is specified the LRU is guaranteed to not grow above the specified number of entries",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "newLRU",
          "normalized": "Maybe Integer-\u003eLRU a b",
          "package": "lrucache",
          "partial": "LRU",
          "signature": "Maybe Integer-\u003eLRU key val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:newLRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe key of the value after this one\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "next",
          "package": "lrucache",
          "signature": "(Maybe key)",
          "source": "src/Data-Cache-LRU-Internal.html#LinkedVal",
          "type": "function"
        },
        "index": {
          "description": "the key of the value after this one",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "next",
          "package": "lrucache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the least-recently accessed element from the LRU.\n Returns the new LRU, and the key and value from the least-recently\n used element, if there was one.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.Internal\",\"Data.Cache.LRU\"]",
          "name": "pop",
          "package": "lrucache",
          "signature": "LRU key val -\u003e (LRU key val, Maybe (key, val))",
          "source": "src/Data-Cache-LRU-Internal.html#pop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:pop\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:pop\"]"
        },
        "index": {
          "description": "Removes the least-recently accessed element from the LRU Returns the new LRU and the key and value from the least-recently used element if there was one",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "pop",
          "normalized": "LRU a b-\u003e(LRU a b,Maybe(a,b))",
          "package": "lrucache",
          "signature": "LRU key val-\u003e(LRU key val,Maybe(key,val))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe key of the value before this one\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "prev",
          "package": "lrucache",
          "signature": "(Maybe key)",
          "source": "src/Data-Cache-LRU-Internal.html#LinkedVal",
          "type": "function"
        },
        "index": {
          "description": "the key of the value before this one",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "prev",
          "package": "lrucache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of elements the LRU currently contains.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.Internal\",\"Data.Cache.LRU\"]",
          "name": "size",
          "package": "lrucache",
          "signature": "LRU key val -\u003e Int",
          "source": "src/Data-Cache-LRU-Internal.html#size",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:size\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:size\"]"
        },
        "index": {
          "description": "Returns the number of elements the LRU currently contains",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "size",
          "normalized": "LRU a b-\u003eInt",
          "package": "lrucache",
          "signature": "LRU key val-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a list view of an LRU.  The items are returned in\n order from most recently accessed to least recently accessed.\n\u003c/p\u003e",
          "module": "[\"Data.Cache.LRU.Internal\",\"Data.Cache.LRU\"]",
          "name": "toList",
          "package": "lrucache",
          "signature": "LRU key val -\u003e [(key, val)]",
          "source": "src/Data-Cache-LRU-Internal.html#toList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:toList\",\"http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:toList\"]"
        },
        "index": {
          "description": "Retrieve list view of an LRU The items are returned in order from most recently accessed to least recently accessed",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "toList",
          "normalized": "LRU a b-\u003e[(a,b)]",
          "package": "lrucache",
          "partial": "List",
          "signature": "LRU key val-\u003e[(key,val)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal function.  This checks the four structural invariants\n of the LRU cache structure:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The cache's size does not exceed the specified max size.\n\u003c/li\u003e\u003cli\u003e The linked list through the nodes is consistent in both directions.\n\u003c/li\u003e\u003cli\u003e The linked list contains the same number of nodes as the cache.\n\u003c/li\u003e\u003cli\u003e Every key in the linked list is in the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "valid",
          "package": "lrucache",
          "signature": "LRU key val -\u003e Bool",
          "source": "src/Data-Cache-LRU-Internal.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Internal function This checks the four structural invariants of the LRU cache structure The cache size does not exceed the specified max size The linked list through the nodes is consistent in both directions The linked list contains the same number of nodes as the cache Every key in the linked list is in the Map",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "valid",
          "normalized": "LRU a b-\u003eBool",
          "package": "lrucache",
          "signature": "LRU key val-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual value\n\u003c/p\u003e",
          "module": "Data.Cache.LRU.Internal",
          "name": "value",
          "package": "lrucache",
          "signature": "val",
          "source": "src/Data-Cache-LRU-Internal.html#LinkedVal",
          "type": "function"
        },
        "index": {
          "description": "The actual value",
          "hierarchy": "Data Cache LRU Internal",
          "module": "Data.Cache.LRU.Internal",
          "name": "value",
          "package": "lrucache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements an LRU cache.\n\u003c/p\u003e\u003cp\u003eThis module provides a pure LRU cache based on a doubly-linked list\n through a Data.Map structure.  This gives O(log n) operations on\n \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003epop\u003c/a\u003e\u003c/code\u003e, and O(n * log n) for \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe interface this module provides is opaque.  If further control\n is desired, the \u003ca\u003eData.Cache.LRU.Internal\u003c/a\u003e module can be used.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Cache.LRU",
          "name": "LRU",
          "package": "lrucache",
          "source": "src/Data-Cache-LRU.html",
          "type": "module"
        },
        "index": {
          "description": "Implements an LRU cache This module provides pure LRU cache based on doubly-linked list through Data.Map structure This gives log operations on insert lookup delete and pop and log for toList The interface this module provides is opaque If further control is desired the Data.Cache.LRU.Internal module can be used",
          "hierarchy": "Data Cache LRU",
          "module": "Data.Cache.LRU",
          "name": "LRU",
          "package": "lrucache",
          "partial": "LRU",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores the information that makes up an LRU cache\n\u003c/p\u003e",
          "module": "Data.Cache.LRU",
          "name": "LRU",
          "package": "lrucache",
          "source": "src/Data-Cache-LRU-Internal.html#LRU",
          "type": "data"
        },
        "index": {
          "description": "Stores the information that makes up an LRU cache",
          "hierarchy": "Data Cache LRU",
          "module": "Data.Cache.LRU",
          "name": "LRU",
          "package": "lrucache",
          "partial": "LRU",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#t:LRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe maximum size of the LRU cache\n\u003c/p\u003e",
          "module": "Data.Cache.LRU",
          "name": "maxSize",
          "package": "lrucache",
          "signature": "LRU key val -\u003e Maybe Integer",
          "source": "src/Data-Cache-LRU-Internal.html#maxSize",
          "type": "function"
        },
        "index": {
          "description": "the maximum size of the LRU cache",
          "hierarchy": "Data Cache LRU",
          "module": "Data.Cache.LRU",
          "name": "maxSize",
          "normalized": "LRU a b-\u003eMaybe Integer",
          "package": "lrucache",
          "partial": "Size",
          "signature": "LRU key val-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:maxSize"
      }
    }
  ]
]