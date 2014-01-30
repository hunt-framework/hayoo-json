[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a mutable wrapping of an LRU in the IO\n monad, providing atomic access in a concurrent environment.  All\n calls preserve the same semantics as those in \u003ca\u003eData.Cache.LRU\u003c/a\u003e, but\n perform updates in place.\n\u003c/p\u003e\u003cp\u003eThis module contains the internal implementation details.  It's\n possible to put an \u003ccode\u003e\u003ca\u003eAtomicLRU\u003c/a\u003e\u003c/code\u003e into a bad state with this module.\n It is highly recommended that the external interface,\n \u003ca\u003eData.Cache.LRU.IO\u003c/a\u003e, be used instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "module",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module contains mutable wrapping of an LRU in the IO monad providing atomic access in concurrent environment All calls preserve the same semantics as those in Data.Cache.LRU but perform updates in place This module contains the internal implementation details It possible to put an AtomicLRU into bad state with this module It is highly recommended that the external interface Data.Cache.LRU.IO be used instead",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "lrucache",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#t:AtomicLRU",
      "description": {
        "fct-descr": "\u003cp\u003eThe opaque wrapper type\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#AtomicLRU",
        "fct-type": "newtype",
        "title": "AtomicLRU"
      },
      "index": {
        "description": "The opaque wrapper type",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "AtomicLRU",
        "normalized": "",
        "package": "lrucache",
        "partial": "Atomic LRU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:C",
      "description": {
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "C (MVar (LRU key val))",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#AtomicLRU",
        "fct-type": "function",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "C",
        "normalized": "",
        "package": "lrucache",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an item from an AtomicLRU.  Returns the value for the\n removed key, if it was present\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e AtomicLRU key val -\u003e IO (Maybe val)",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Remove an item from an AtomicLRU Returns the value for the removed key if it was present",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "delete",
        "normalized": "a-\u003eAtomicLRU a b-\u003eIO(Maybe b)",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eAtomicLRU key val-\u003eIO(Maybe val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a new LRU from the optional maximum size and list of\n contents. See \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e for the semantics.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "Maybe Integer-\u003e [(key, val)]-\u003e IO (AtomicLRU key val)",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Build new LRU from the optional maximum size and list of contents See fromList for the semantics",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "fromList",
        "normalized": "Maybe Integer-\u003e[(a,b)]-\u003eIO(AtomicLRU a b)",
        "package": "lrucache",
        "partial": "List",
        "signature": "Maybe Integer-\u003e[(key,val)]-\u003eIO(AtomicLRU key val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a key/value pair into an AtomicLRU.  See \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e for\n the semantics.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e val -\u003e AtomicLRU key val -\u003e IO ()",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert key value pair into an AtomicLRU See insert for the semantics",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eAtomicLRU a b-\u003eIO()",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eval-\u003eAtomicLRU key val-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLook up a key in an AtomicLRU. See \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e for the\n semantics.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e AtomicLRU key val -\u003e IO (Maybe val)",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Look up key in an AtomicLRU See lookup for the semantics",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "lookup",
        "normalized": "a-\u003eAtomicLRU a b-\u003eIO(Maybe b)",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eAtomicLRU key val-\u003eIO(Maybe val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:maxSize",
      "description": {
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "AtomicLRU key val -\u003e IO (Maybe Integer)",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#maxSize",
        "fct-type": "function",
        "title": "maxSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "maxSize",
        "normalized": "AtomicLRU a b-\u003eIO(Maybe Integer)",
        "package": "lrucache",
        "partial": "Size",
        "signature": "AtomicLRU key val-\u003eIO(Maybe Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:modifyAtomicLRU",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a function that takes an \u003ccode\u003e\u003ca\u003eLRU\u003c/a\u003e\u003c/code\u003e and returns one of the\n same type, use it to modify the contents of this AtomicLRU.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "(LRU key val -\u003e LRU key val) -\u003e AtomicLRU key val -\u003e IO ()",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#modifyAtomicLRU",
        "fct-type": "function",
        "title": "modifyAtomicLRU"
      },
      "index": {
        "description": "Given function that takes an LRU and returns one of the same type use it to modify the contents of this AtomicLRU",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "modifyAtomicLRU",
        "normalized": "(LRU a b-\u003eLRU a b)-\u003eAtomicLRU a b-\u003eIO()",
        "package": "lrucache",
        "partial": "Atomic LRU",
        "signature": "(LRU key val-\u003eLRU key val)-\u003eAtomicLRU key val-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:modifyAtomicLRU-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a function that takes an \u003ccode\u003e\u003ca\u003eLRU\u003c/a\u003e\u003c/code\u003e and returns an IO action\n producting one of the same type, use it to modify the contents of\n this AtomicLRU.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "(LRU key val -\u003e IO (LRU key val)) -\u003e AtomicLRU key val -\u003e IO ()",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#modifyAtomicLRU%27",
        "fct-type": "function",
        "title": "modifyAtomicLRU'"
      },
      "index": {
        "description": "Given function that takes an LRU and returns an IO action producting one of the same type use it to modify the contents of this AtomicLRU",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "modifyAtomicLRU'",
        "normalized": "(LRU a b-\u003eIO(LRU a b))-\u003eAtomicLRU a b-\u003eIO()",
        "package": "lrucache",
        "partial": "Atomic LRU'",
        "signature": "(LRU key val-\u003eIO(LRU key val))-\u003eAtomicLRU key val-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:modifyMVar-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emodifyMVar\u003c/a\u003e\u003c/code\u003e that forces the result of the\n function application to WHNF.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "MVar a -\u003e (a -\u003e IO (a, b)) -\u003e IO b",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#modifyMVar%27",
        "fct-type": "function",
        "title": "modifyMVar'"
      },
      "index": {
        "description": "version of modifyMVar that forces the result of the function application to WHNF",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "modifyMVar'",
        "normalized": "MVar a-\u003e(a-\u003eIO(a,b))-\u003eIO b",
        "package": "lrucache",
        "partial": "MVar'",
        "signature": "MVar a-\u003e(a-\u003eIO(a,b))-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:modifyMVar_-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emodifyMVar_\u003c/a\u003e\u003c/code\u003e that forces the result of the\n function application to WHNF.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "MVar a -\u003e (a -\u003e IO a) -\u003e IO ()",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#modifyMVar_%27",
        "fct-type": "function",
        "title": "modifyMVar_'"
      },
      "index": {
        "description": "version of modifyMVar that forces the result of the function application to WHNF",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "modifyMVar_'",
        "normalized": "MVar a-\u003e(a-\u003eIO a)-\u003eIO()",
        "package": "lrucache",
        "partial": "MVar",
        "signature": "MVar a-\u003e(a-\u003eIO a)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:newAtomicLRU",
      "description": {
        "fct-descr": "\u003cp\u003eMake a new AtomicLRU that will not grow beyond the optional\n maximum size, if specified.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "Maybe Integer-\u003e IO (AtomicLRU key val)",
        "fct-type": "function",
        "title": "newAtomicLRU"
      },
      "index": {
        "description": "Make new AtomicLRU that will not grow beyond the optional maximum size if specified",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "newAtomicLRU",
        "normalized": "Maybe Integer-\u003eIO(AtomicLRU a b)",
        "package": "lrucache",
        "partial": "Atomic LRU",
        "signature": "Maybe Integer-\u003eIO(AtomicLRU key val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the least-recently accessed item from an AtomicLRU.\n Returns the (key, val) pair removed, if one was present.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "AtomicLRU key val -\u003e IO (Maybe (key, val))",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Remove the least-recently accessed item from an AtomicLRU Returns the key val pair removed if one was present",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "pop",
        "normalized": "AtomicLRU a b-\u003eIO(Maybe(a,b))",
        "package": "lrucache",
        "partial": "",
        "signature": "AtomicLRU key val-\u003eIO(Maybe(key,val))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of elements the AtomicLRU currently contains.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "AtomicLRU key val -\u003e IO Int",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Returns the number of elements the AtomicLRU currently contains",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "size",
        "normalized": "AtomicLRU a b-\u003eIO Int",
        "package": "lrucache",
        "partial": "",
        "signature": "AtomicLRU key val-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO-Internal.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a list view of an AtomicLRU.  See \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e for the\n semantics.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO.Internal",
        "fct-package": "lrucache",
        "fct-signature": "AtomicLRU key val -\u003e IO [(key, val)]",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Retrieve list view of an AtomicLRU See toList for the semantics",
        "hierarchy": "Data Cache LRU IO Internal",
        "module": "Data.Cache.LRU.IO.Internal",
        "name": "toList",
        "normalized": "AtomicLRU a b-\u003eIO[(a,b)]",
        "package": "lrucache",
        "partial": "List",
        "signature": "AtomicLRU key val-\u003eIO[(key,val)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a mutable wrapping of an LRU in the IO\n monad, providing atomic access in a concurrent environment.  All\n calls preserve the same semantics as those in \u003ca\u003eData.Cache.LRU\u003c/a\u003e, but\n perform updates in place.  All functions use a single atomic update\n of the backing structure.\n\u003c/p\u003e\u003cp\u003eThe interface this module provides is opaque.  If further control\n is desired, the \u003ca\u003eData.Cache.LRU.IO.Internal\u003c/a\u003e module can be used in\n combination with \u003ca\u003eData.Cache.LRU.Internal\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e(This implementation uses an MVar for coarse locking. It's unclear\n if anything else would give better performance, given that many\n calls alter the head of the access list.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "module",
        "fct-source": "src/Data-Cache-LRU-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "This module contains mutable wrapping of an LRU in the IO monad providing atomic access in concurrent environment All calls preserve the same semantics as those in Data.Cache.LRU but perform updates in place All functions use single atomic update of the backing structure The interface this module provides is opaque If further control is desired the Data.Cache.LRU.IO.Internal module can be used in combination with Data.Cache.LRU.Internal This implementation uses an MVar for coarse locking It unclear if anything else would give better performance given that many calls alter the head of the access list",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "IO",
        "normalized": "",
        "package": "lrucache",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#t:AtomicLRU",
      "description": {
        "fct-descr": "\u003cp\u003eThe opaque wrapper type\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "data",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#AtomicLRU",
        "fct-type": "data",
        "title": "AtomicLRU"
      },
      "index": {
        "description": "The opaque wrapper type",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "AtomicLRU",
        "normalized": "",
        "package": "lrucache",
        "partial": "Atomic LRU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an item from an AtomicLRU.  Returns the value for the\n removed key, if it was present\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e AtomicLRU key val -\u003e IO (Maybe val)",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Remove an item from an AtomicLRU Returns the value for the removed key if it was present",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "delete",
        "normalized": "a-\u003eAtomicLRU a b-\u003eIO(Maybe b)",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eAtomicLRU key val-\u003eIO(Maybe val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a new LRU from the optional maximum size and list of\n contents. See \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e for the semantics.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "Maybe Integer-\u003e [(key, val)]-\u003e IO (AtomicLRU key val)",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Build new LRU from the optional maximum size and list of contents See fromList for the semantics",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "fromList",
        "normalized": "Maybe Integer-\u003e[(a,b)]-\u003eIO(AtomicLRU a b)",
        "package": "lrucache",
        "partial": "List",
        "signature": "Maybe Integer-\u003e[(key,val)]-\u003eIO(AtomicLRU key val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a key/value pair into an AtomicLRU.  See \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e for\n the semantics.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e val -\u003e AtomicLRU key val -\u003e IO ()",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert key value pair into an AtomicLRU See insert for the semantics",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eAtomicLRU a b-\u003eIO()",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eval-\u003eAtomicLRU key val-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLook up a key in an AtomicLRU. See \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e for the\n semantics.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e AtomicLRU key val -\u003e IO (Maybe val)",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Look up key in an AtomicLRU See lookup for the semantics",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "lookup",
        "normalized": "a-\u003eAtomicLRU a b-\u003eIO(Maybe b)",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eAtomicLRU key val-\u003eIO(Maybe val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:maxSize",
      "description": {
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "AtomicLRU key val -\u003e IO (Maybe Integer)",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#maxSize",
        "fct-type": "function",
        "title": "maxSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "maxSize",
        "normalized": "AtomicLRU a b-\u003eIO(Maybe Integer)",
        "package": "lrucache",
        "partial": "Size",
        "signature": "AtomicLRU key val-\u003eIO(Maybe Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:modifyAtomicLRU",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a function that takes an \u003ccode\u003e\u003ca\u003eLRU\u003c/a\u003e\u003c/code\u003e and returns one of the\n same type, use it to modify the contents of this AtomicLRU.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "(LRU key val -\u003e LRU key val) -\u003e AtomicLRU key val -\u003e IO ()",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#modifyAtomicLRU",
        "fct-type": "function",
        "title": "modifyAtomicLRU"
      },
      "index": {
        "description": "Given function that takes an LRU and returns one of the same type use it to modify the contents of this AtomicLRU",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "modifyAtomicLRU",
        "normalized": "(LRU a b-\u003eLRU a b)-\u003eAtomicLRU a b-\u003eIO()",
        "package": "lrucache",
        "partial": "Atomic LRU",
        "signature": "(LRU key val-\u003eLRU key val)-\u003eAtomicLRU key val-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:modifyAtomicLRU-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a function that takes an \u003ccode\u003e\u003ca\u003eLRU\u003c/a\u003e\u003c/code\u003e and returns an IO action\n producting one of the same type, use it to modify the contents of\n this AtomicLRU.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "(LRU key val -\u003e IO (LRU key val)) -\u003e AtomicLRU key val -\u003e IO ()",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#modifyAtomicLRU%27",
        "fct-type": "function",
        "title": "modifyAtomicLRU'"
      },
      "index": {
        "description": "Given function that takes an LRU and returns an IO action producting one of the same type use it to modify the contents of this AtomicLRU",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "modifyAtomicLRU'",
        "normalized": "(LRU a b-\u003eIO(LRU a b))-\u003eAtomicLRU a b-\u003eIO()",
        "package": "lrucache",
        "partial": "Atomic LRU'",
        "signature": "(LRU key val-\u003eIO(LRU key val))-\u003eAtomicLRU key val-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:newAtomicLRU",
      "description": {
        "fct-descr": "\u003cp\u003eMake a new AtomicLRU that will not grow beyond the optional\n maximum size, if specified.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "Maybe Integer-\u003e IO (AtomicLRU key val)",
        "fct-type": "function",
        "title": "newAtomicLRU"
      },
      "index": {
        "description": "Make new AtomicLRU that will not grow beyond the optional maximum size if specified",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "newAtomicLRU",
        "normalized": "Maybe Integer-\u003eIO(AtomicLRU a b)",
        "package": "lrucache",
        "partial": "Atomic LRU",
        "signature": "Maybe Integer-\u003eIO(AtomicLRU key val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the least-recently accessed item from an AtomicLRU.\n Returns the (key, val) pair removed, if one was present.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "AtomicLRU key val -\u003e IO (Maybe (key, val))",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Remove the least-recently accessed item from an AtomicLRU Returns the key val pair removed if one was present",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "pop",
        "normalized": "AtomicLRU a b-\u003eIO(Maybe(a,b))",
        "package": "lrucache",
        "partial": "",
        "signature": "AtomicLRU key val-\u003eIO(Maybe(key,val))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of elements the AtomicLRU currently contains.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "AtomicLRU key val -\u003e IO Int",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Returns the number of elements the AtomicLRU currently contains",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "size",
        "normalized": "AtomicLRU a b-\u003eIO Int",
        "package": "lrucache",
        "partial": "",
        "signature": "AtomicLRU key val-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-IO.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a list view of an AtomicLRU.  See \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e for the\n semantics.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.IO",
        "fct-package": "lrucache",
        "fct-signature": "AtomicLRU key val -\u003e IO [(key, val)]",
        "fct-source": "src/Data-Cache-LRU-IO-Internal.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Retrieve list view of an AtomicLRU See toList for the semantics",
        "hierarchy": "Data Cache LRU IO",
        "module": "Data.Cache.LRU.IO",
        "name": "toList",
        "normalized": "AtomicLRU a b-\u003eIO[(a,b)]",
        "package": "lrucache",
        "partial": "List",
        "signature": "AtomicLRU key val-\u003eIO[(key,val)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides access to all the internals use by the LRU\n type.  This can be used to create data structures that violate the\n invariants the public interface maintains.  Be careful when using\n this module.  The \u003ccode\u003e\u003ca\u003evalid\u003c/a\u003e\u003c/code\u003e function can be used to check if an LRU\n structure satisfies the invariants the public interface maintains.\n\u003c/p\u003e\u003cp\u003eIf this degree of control isn't needed, consider using\n \u003ca\u003eData.Cache.LRU\u003c/a\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "module",
        "fct-source": "src/Data-Cache-LRU-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module provides access to all the internals use by the LRU type This can be used to create data structures that violate the invariants the public interface maintains Be careful when using this module The valid function can be used to check if an LRU structure satisfies the invariants the public interface maintains If this degree of control isn needed consider using Data.Cache.LRU instead",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "lrucache",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#t:LRU",
      "description": {
        "fct-descr": "\u003cp\u003eStores the information that makes up an LRU cache\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "data",
        "fct-source": "src/Data-Cache-LRU-Internal.html#LRU",
        "fct-type": "data",
        "title": "LRU"
      },
      "index": {
        "description": "Stores the information that makes up an LRU cache",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "LRU",
        "normalized": "",
        "package": "lrucache",
        "partial": "LRU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#t:LinkedVal",
      "description": {
        "fct-descr": "\u003cp\u003eThe values stored in the Map of the LRU cache.  They embed a\n doubly-linked list through the values of the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "data",
        "fct-source": "src/Data-Cache-LRU-Internal.html#LinkedVal",
        "fct-type": "data",
        "title": "LinkedVal"
      },
      "index": {
        "description": "The values stored in the Map of the LRU cache They embed doubly-linked list through the values of the Map",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "LinkedVal",
        "normalized": "",
        "package": "lrucache",
        "partial": "Linked Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:LRU",
      "description": {
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "LRU",
        "fct-source": "src/Data-Cache-LRU-Internal.html#LRU",
        "fct-type": "function",
        "title": "LRU"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "LRU",
        "normalized": "",
        "package": "lrucache",
        "partial": "LRU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:Link",
      "description": {
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "Link",
        "fct-source": "src/Data-Cache-LRU-Internal.html#LinkedVal",
        "fct-type": "function",
        "title": "Link"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "Link",
        "normalized": "",
        "package": "lrucache",
        "partial": "Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:adjust-39-",
      "description": {
        "fct-descr": "\u003cp\u003eInternal function.  This is very similar to \u003ccode\u003e\u003ca\u003eadjust\u003c/a\u003e\u003c/code\u003e, with\n two major differences.  First, it's strict in the application of\n the function, which is a huge win when working with this structure.\n\u003c/p\u003e\u003cp\u003eSecond, it requires that the key be present in order to work.  If\n the key isn't present, \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e will be inserted into the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e,\n which will cause problems later.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "(a -\u003e a) -\u003e k -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Data-Cache-LRU-Internal.html#adjust%27",
        "fct-type": "function",
        "title": "adjust'"
      },
      "index": {
        "description": "Internal function This is very similar to adjust with two major differences First it strict in the application of the function which is huge win when working with this structure Second it requires that the key be present in order to work If the key isn present undefined will be inserted into the Map which will cause problems later",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "adjust'",
        "normalized": "(a-\u003ea)-\u003eb-\u003eMap b a-\u003eMap b a",
        "package": "lrucache",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ek-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:content",
      "description": {
        "fct-descr": "\u003cp\u003ethe backing \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "!(Map key (LinkedVal key val))",
        "fct-source": "src/Data-Cache-LRU-Internal.html#LRU",
        "fct-type": "function",
        "title": "content"
      },
      "index": {
        "description": "the backing Map",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "content",
        "normalized": "",
        "package": "lrucache",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an item from an LRU.  Returns the new LRU, and the value\n removed if the key was present.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e LRU key val -\u003e (LRU key val, Maybe val)",
        "fct-source": "src/Data-Cache-LRU-Internal.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Remove an item from an LRU Returns the new LRU and the value removed if the key was present",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "delete",
        "normalized": "a-\u003eLRU a b-\u003e(LRU a b,Maybe b)",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eLRU key val-\u003e(LRU key val,Maybe val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:delete-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAn internal function used by \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e (when the cache is full)\n and \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e.  This function has strict requirements on its\n arguments in order to work properly.\n\u003c/p\u003e\u003cp\u003eAs this is intended to be an internal function, the arguments were\n chosen to avoid repeated computation, rather than for simplicity of\n calling this function.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "key-\u003e LRU key val-\u003e Map key (LinkedVal key val)-\u003e LinkedVal key val-\u003e LRU key val",
        "fct-type": "function",
        "title": "delete'"
      },
      "index": {
        "description": "An internal function used by insert when the cache is full and delete This function has strict requirements on its arguments in order to work properly As this is intended to be an internal function the arguments were chosen to avoid repeated computation rather than for simplicity of calling this function",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "delete'",
        "normalized": "a-\u003eLRU a b-\u003eMap a(LinkedVal a b)-\u003eLinkedVal a b-\u003eLRU a b",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eLRU key val-\u003eMap key(LinkedVal key val)-\u003eLinkedVal key val-\u003eLRU key val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:first",
      "description": {
        "fct-descr": "\u003cp\u003ethe key of the most recently accessed entry\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "!(Maybe key)",
        "fct-source": "src/Data-Cache-LRU-Internal.html#LRU",
        "fct-type": "function",
        "title": "first"
      },
      "index": {
        "description": "the key of the most recently accessed entry",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "first",
        "normalized": "",
        "package": "lrucache",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a new LRU from the given maximum size and list of contents,\n in order from most recently accessed to least recently accessed.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "Maybe Integer-\u003e [(key, val)]-\u003e LRU key val",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Build new LRU from the given maximum size and list of contents in order from most recently accessed to least recently accessed",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "fromList",
        "normalized": "Maybe Integer-\u003e[(a,b)]-\u003eLRU a b",
        "package": "lrucache",
        "partial": "List",
        "signature": "Maybe Integer-\u003e[(key,val)]-\u003eLRU key val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:hit-39-",
      "description": {
        "fct-descr": "\u003cp\u003eInternal function.  The key passed in must be present in the\n LRU.  Moves the item associated with that key to the most\n recently accessed position.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e LRU key val -\u003e LRU key val",
        "fct-source": "src/Data-Cache-LRU-Internal.html#hit%27",
        "fct-type": "function",
        "title": "hit'"
      },
      "index": {
        "description": "Internal function The key passed in must be present in the LRU Moves the item associated with that key to the most recently accessed position",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "hit'",
        "normalized": "a-\u003eLRU a b-\u003eLRU a b",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eLRU key val-\u003eLRU key val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an item to an LRU.  If the key was already present in the\n LRU, the value is changed to the new value passed in.  The\n item added is marked as the most recently accessed item in the\n LRU returned.\n\u003c/p\u003e\u003cp\u003eIf this would cause the LRU to exceed its maximum size, the\n least recently used item is dropped from the cache.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e val -\u003e LRU key val -\u003e LRU key val",
        "fct-source": "src/Data-Cache-LRU-Internal.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Add an item to an LRU If the key was already present in the LRU the value is changed to the new value passed in The item added is marked as the most recently accessed item in the LRU returned If this would cause the LRU to exceed its maximum size the least recently used item is dropped from the cache",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eLRU a b-\u003eLRU a b",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eval-\u003eLRU key val-\u003eLRU key val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003ethe key of the least recently accessed entry\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "!(Maybe key)",
        "fct-source": "src/Data-Cache-LRU-Internal.html#LRU",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "the key of the least recently accessed entry",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "last",
        "normalized": "",
        "package": "lrucache",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLook up an item in an LRU.  If it was present, it is marked as\n the most recently accesed in the returned LRU.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e LRU key val -\u003e (LRU key val, Maybe val)",
        "fct-source": "src/Data-Cache-LRU-Internal.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Look up an item in an LRU If it was present it is marked as the most recently accesed in the returned LRU",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "lookup",
        "normalized": "a-\u003eLRU a b-\u003e(LRU a b,Maybe b)",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eLRU key val-\u003e(LRU key val,Maybe val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:maxSize",
      "description": {
        "fct-descr": "\u003cp\u003ethe maximum size of the LRU cache\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "!(Maybe Integer)",
        "fct-source": "src/Data-Cache-LRU-Internal.html#LRU",
        "fct-type": "function",
        "title": "maxSize"
      },
      "index": {
        "description": "the maximum size of the LRU cache",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "maxSize",
        "normalized": "",
        "package": "lrucache",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:newLRU",
      "description": {
        "fct-descr": "\u003cp\u003eMake an LRU.  If a size limit is specified, the LRU is guaranteed\n to not grow above the specified number of entries.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "Maybe Integer-\u003e LRU key val",
        "fct-type": "function",
        "title": "newLRU"
      },
      "index": {
        "description": "Make an LRU If size limit is specified the LRU is guaranteed to not grow above the specified number of entries",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "newLRU",
        "normalized": "Maybe Integer-\u003eLRU a b",
        "package": "lrucache",
        "partial": "LRU",
        "signature": "Maybe Integer-\u003eLRU key val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003ethe key of the value after this one\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "!(Maybe key)",
        "fct-source": "src/Data-Cache-LRU-Internal.html#LinkedVal",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "the key of the value after this one",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "next",
        "normalized": "",
        "package": "lrucache",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves the least-recently accessed element from the LRU.\n Returns the new LRU, and the key and value from the least-recently\n used element, if there was one.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "LRU key val -\u003e (LRU key val, Maybe (key, val))",
        "fct-source": "src/Data-Cache-LRU-Internal.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Removes the least-recently accessed element from the LRU Returns the new LRU and the key and value from the least-recently used element if there was one",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "pop",
        "normalized": "LRU a b-\u003e(LRU a b,Maybe(a,b))",
        "package": "lrucache",
        "partial": "",
        "signature": "LRU key val-\u003e(LRU key val,Maybe(key,val))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:prev",
      "description": {
        "fct-descr": "\u003cp\u003ethe key of the value before this one\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "!(Maybe key)",
        "fct-source": "src/Data-Cache-LRU-Internal.html#LinkedVal",
        "fct-type": "function",
        "title": "prev"
      },
      "index": {
        "description": "the key of the value before this one",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "prev",
        "normalized": "",
        "package": "lrucache",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of elements the LRU currently contains.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "LRU key val -\u003e Int",
        "fct-source": "src/Data-Cache-LRU-Internal.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Returns the number of elements the LRU currently contains",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "size",
        "normalized": "LRU a b-\u003eInt",
        "package": "lrucache",
        "partial": "",
        "signature": "LRU key val-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a list view of an LRU.  The items are returned in\n order from most recently accessed to least recently accessed.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "LRU key val -\u003e [(key, val)]",
        "fct-source": "src/Data-Cache-LRU-Internal.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Retrieve list view of an LRU The items are returned in order from most recently accessed to least recently accessed",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "toList",
        "normalized": "LRU a b-\u003e[(a,b)]",
        "package": "lrucache",
        "partial": "List",
        "signature": "LRU key val-\u003e[(key,val)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:valid",
      "description": {
        "fct-descr": "\u003cp\u003eInternal function.  This checks the four structural invariants\n of the LRU cache structure:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The cache's size does not exceed the specified max size.\n\u003c/li\u003e\u003cli\u003e The linked list through the nodes is consistent in both directions.\n\u003c/li\u003e\u003cli\u003e The linked list contains the same number of nodes as the cache.\n\u003c/li\u003e\u003cli\u003e Every key in the linked list is in the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "LRU key val -\u003e Bool",
        "fct-source": "src/Data-Cache-LRU-Internal.html#valid",
        "fct-type": "function",
        "title": "valid"
      },
      "index": {
        "description": "Internal function This checks the four structural invariants of the LRU cache structure The cache size does not exceed the specified max size The linked list through the nodes is consistent in both directions The linked list contains the same number of nodes as the cache Every key in the linked list is in the Map",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "valid",
        "normalized": "LRU a b-\u003eBool",
        "package": "lrucache",
        "partial": "",
        "signature": "LRU key val-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU-Internal.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual value\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU.Internal",
        "fct-package": "lrucache",
        "fct-signature": "val",
        "fct-source": "src/Data-Cache-LRU-Internal.html#LinkedVal",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "The actual value",
        "hierarchy": "Data Cache LRU Internal",
        "module": "Data.Cache.LRU.Internal",
        "name": "value",
        "normalized": "",
        "package": "lrucache",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements an LRU cache.\n\u003c/p\u003e\u003cp\u003eThis module provides a pure LRU cache based on a doubly-linked list\n through a Data.Map structure.  This gives O(log n) operations on\n \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003epop\u003c/a\u003e\u003c/code\u003e, and O(n * log n) for \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe interface this module provides is opaque.  If further control\n is desired, the \u003ca\u003eData.Cache.LRU.Internal\u003c/a\u003e module can be used.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Cache.LRU",
        "fct-package": "lrucache",
        "fct-signature": "module",
        "fct-source": "src/Data-Cache-LRU.html",
        "fct-type": "module",
        "title": "LRU"
      },
      "index": {
        "description": "Implements an LRU cache This module provides pure LRU cache based on doubly-linked list through Data.Map structure This gives log operations on insert lookup delete and pop and log for toList The interface this module provides is opaque If further control is desired the Data.Cache.LRU.Internal module can be used",
        "hierarchy": "Data Cache LRU",
        "module": "Data.Cache.LRU",
        "name": "LRU",
        "normalized": "",
        "package": "lrucache",
        "partial": "LRU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#t:LRU",
      "description": {
        "fct-descr": "\u003cp\u003eStores the information that makes up an LRU cache\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU",
        "fct-package": "lrucache",
        "fct-signature": "data",
        "fct-source": "src/Data-Cache-LRU-Internal.html#LRU",
        "fct-type": "data",
        "title": "LRU"
      },
      "index": {
        "description": "Stores the information that makes up an LRU cache",
        "hierarchy": "Data Cache LRU",
        "module": "Data.Cache.LRU",
        "name": "LRU",
        "normalized": "",
        "package": "lrucache",
        "partial": "LRU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an item from an LRU.  Returns the new LRU, and the value\n removed if the key was present.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e LRU key val -\u003e (LRU key val, Maybe val)",
        "fct-source": "src/Data-Cache-LRU-Internal.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Remove an item from an LRU Returns the new LRU and the value removed if the key was present",
        "hierarchy": "Data Cache LRU",
        "module": "Data.Cache.LRU",
        "name": "delete",
        "normalized": "a-\u003eLRU a b-\u003e(LRU a b,Maybe b)",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eLRU key val-\u003e(LRU key val,Maybe val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a new LRU from the given maximum size and list of contents,\n in order from most recently accessed to least recently accessed.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU",
        "fct-package": "lrucache",
        "fct-signature": "Maybe Integer-\u003e [(key, val)]-\u003e LRU key val",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Build new LRU from the given maximum size and list of contents in order from most recently accessed to least recently accessed",
        "hierarchy": "Data Cache LRU",
        "module": "Data.Cache.LRU",
        "name": "fromList",
        "normalized": "Maybe Integer-\u003e[(a,b)]-\u003eLRU a b",
        "package": "lrucache",
        "partial": "List",
        "signature": "Maybe Integer-\u003e[(key,val)]-\u003eLRU key val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an item to an LRU.  If the key was already present in the\n LRU, the value is changed to the new value passed in.  The\n item added is marked as the most recently accessed item in the\n LRU returned.\n\u003c/p\u003e\u003cp\u003eIf this would cause the LRU to exceed its maximum size, the\n least recently used item is dropped from the cache.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e val -\u003e LRU key val -\u003e LRU key val",
        "fct-source": "src/Data-Cache-LRU-Internal.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Add an item to an LRU If the key was already present in the LRU the value is changed to the new value passed in The item added is marked as the most recently accessed item in the LRU returned If this would cause the LRU to exceed its maximum size the least recently used item is dropped from the cache",
        "hierarchy": "Data Cache LRU",
        "module": "Data.Cache.LRU",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eLRU a b-\u003eLRU a b",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eval-\u003eLRU key val-\u003eLRU key val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLook up an item in an LRU.  If it was present, it is marked as\n the most recently accesed in the returned LRU.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU",
        "fct-package": "lrucache",
        "fct-signature": "key -\u003e LRU key val -\u003e (LRU key val, Maybe val)",
        "fct-source": "src/Data-Cache-LRU-Internal.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Look up an item in an LRU If it was present it is marked as the most recently accesed in the returned LRU",
        "hierarchy": "Data Cache LRU",
        "module": "Data.Cache.LRU",
        "name": "lookup",
        "normalized": "a-\u003eLRU a b-\u003e(LRU a b,Maybe b)",
        "package": "lrucache",
        "partial": "",
        "signature": "key-\u003eLRU key val-\u003e(LRU key val,Maybe val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:maxSize",
      "description": {
        "fct-descr": "\u003cp\u003ethe maximum size of the LRU cache\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU",
        "fct-package": "lrucache",
        "fct-signature": "LRU key val -\u003e Maybe Integer",
        "fct-source": "src/Data-Cache-LRU-Internal.html#maxSize",
        "fct-type": "function",
        "title": "maxSize"
      },
      "index": {
        "description": "the maximum size of the LRU cache",
        "hierarchy": "Data Cache LRU",
        "module": "Data.Cache.LRU",
        "name": "maxSize",
        "normalized": "LRU a b-\u003eMaybe Integer",
        "package": "lrucache",
        "partial": "Size",
        "signature": "LRU key val-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:newLRU",
      "description": {
        "fct-descr": "\u003cp\u003eMake an LRU.  If a size limit is specified, the LRU is guaranteed\n to not grow above the specified number of entries.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU",
        "fct-package": "lrucache",
        "fct-signature": "Maybe Integer-\u003e LRU key val",
        "fct-type": "function",
        "title": "newLRU"
      },
      "index": {
        "description": "Make an LRU If size limit is specified the LRU is guaranteed to not grow above the specified number of entries",
        "hierarchy": "Data Cache LRU",
        "module": "Data.Cache.LRU",
        "name": "newLRU",
        "normalized": "Maybe Integer-\u003eLRU a b",
        "package": "lrucache",
        "partial": "LRU",
        "signature": "Maybe Integer-\u003eLRU key val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves the least-recently accessed element from the LRU.\n Returns the new LRU, and the key and value from the least-recently\n used element, if there was one.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU",
        "fct-package": "lrucache",
        "fct-signature": "LRU key val -\u003e (LRU key val, Maybe (key, val))",
        "fct-source": "src/Data-Cache-LRU-Internal.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Removes the least-recently accessed element from the LRU Returns the new LRU and the key and value from the least-recently used element if there was one",
        "hierarchy": "Data Cache LRU",
        "module": "Data.Cache.LRU",
        "name": "pop",
        "normalized": "LRU a b-\u003e(LRU a b,Maybe(a,b))",
        "package": "lrucache",
        "partial": "",
        "signature": "LRU key val-\u003e(LRU key val,Maybe(key,val))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of elements the LRU currently contains.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU",
        "fct-package": "lrucache",
        "fct-signature": "LRU key val -\u003e Int",
        "fct-source": "src/Data-Cache-LRU-Internal.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Returns the number of elements the LRU currently contains",
        "hierarchy": "Data Cache LRU",
        "module": "Data.Cache.LRU",
        "name": "size",
        "normalized": "LRU a b-\u003eInt",
        "package": "lrucache",
        "partial": "",
        "signature": "LRU key val-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lrucache/docs/Data-Cache-LRU.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a list view of an LRU.  The items are returned in\n order from most recently accessed to least recently accessed.\n\u003c/p\u003e",
        "fct-module": "Data.Cache.LRU",
        "fct-package": "lrucache",
        "fct-signature": "LRU key val -\u003e [(key, val)]",
        "fct-source": "src/Data-Cache-LRU-Internal.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Retrieve list view of an LRU The items are returned in order from most recently accessed to least recently accessed",
        "hierarchy": "Data Cache LRU",
        "module": "Data.Cache.LRU",
        "name": "toList",
        "normalized": "LRU a b-\u003e[(a,b)]",
        "package": "lrucache",
        "partial": "List",
        "signature": "LRU key val-\u003e[(key,val)]"
      }
    }
  }
]