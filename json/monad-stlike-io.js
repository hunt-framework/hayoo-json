[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#",
      "description": {
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-STLike-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "IO",
        "normalized": "",
        "package": "monad-stlike-io",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#t::-60-",
      "description": {
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-STLike-Internal.html#%3A%3C",
        "fct-type": "data",
        "title": ":\u003c"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": ":\u003c",
        "normalized": "",
        "package": "monad-stlike-io",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#t:IOS",
      "description": {
        "fct-descr": "\u003cp\u003eMonad for scoped IO computations\n The underlying monad must be strict here.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-STLike-IO.html#IOS",
        "fct-type": "type",
        "title": "IOS"
      },
      "index": {
        "description": "Monad for scoped IO computations The underlying monad must be strict here",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "IOS",
        "normalized": "",
        "package": "monad-stlike-io",
        "partial": "IOS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#t:RegionMonad",
      "description": {
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-STLike-Internal.html#RegionMonad",
        "fct-type": "class",
        "title": "RegionMonad"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "RegionMonad",
        "normalized": "",
        "package": "monad-stlike-io",
        "partial": "Region Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#t:Regioned",
      "description": {
        "fct-descr": "\u003cp\u003eRegioned variables.\n A regioned variable is \u003cem\u003esafe\u003c/em\u003e i.e. no references to\n it may escape the current IOS.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-STLike-Internal.html#Regioned",
        "fct-type": "data",
        "title": "Regioned"
      },
      "index": {
        "description": "Regioned variables regioned variable is safe i.e no references to it may escape the current IOS",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "Regioned",
        "normalized": "",
        "package": "monad-stlike-io",
        "partial": "Regioned",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:io",
      "description": {
        "fct-descr": "\u003cp\u003eLift IO computations into IOS. liftIO also works.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "IO t -\u003e IOS s t",
        "fct-source": "src/Control-Monad-STLike-IO.html#io",
        "fct-type": "function",
        "title": "io"
      },
      "index": {
        "description": "Lift IO computations into IOS liftIO also works",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "io",
        "normalized": "IO a-\u003eIOS b a",
        "package": "monad-stlike-io",
        "partial": "",
        "signature": "IO t-\u003eIOS s t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:rbsFromPtr",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a ByteString representing the pointer and length. \n   No copying done, O(1).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "Ptr a -\u003e Int -\u003e IOS s (Regioned s ByteString)",
        "fct-source": "src/Control-Monad-STLike-IO.html#rbsFromPtr",
        "fct-type": "function",
        "title": "rbsFromPtr"
      },
      "index": {
        "description": "Create ByteString representing the pointer and length No copying done",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "rbsFromPtr",
        "normalized": "Ptr a-\u003eInt-\u003eIOS b(Regioned b ByteString)",
        "package": "monad-stlike-io",
        "partial": "From Ptr",
        "signature": "Ptr a-\u003eInt-\u003eIOS s(Regioned s ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:rbsMapLookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup inside a Map with a regioned ByteString.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "Regioned s key -\u003e Map key value -\u003e STLike m reg (Maybe value)",
        "fct-source": "src/Control-Monad-STLike-IO.html#rbsMapLookup",
        "fct-type": "function",
        "title": "rbsMapLookup"
      },
      "index": {
        "description": "Lookup inside Map with regioned ByteString",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "rbsMapLookup",
        "normalized": "Regioned a b-\u003eMap b c-\u003eSTLike d e(Maybe c)",
        "package": "monad-stlike-io",
        "partial": "Map Lookup",
        "signature": "Regioned s key-\u003eMap key value-\u003eSTLike m reg(Maybe value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:rbsToBS",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a copy of a regioned ByteString as a normal ByteString. O(n).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "Regioned s ByteString -\u003e STLike m reg ByteString",
        "fct-source": "src/Control-Monad-STLike-IO.html#rbsToBS",
        "fct-type": "function",
        "title": "rbsToBS"
      },
      "index": {
        "description": "Create copy of regioned ByteString as normal ByteString",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "rbsToBS",
        "normalized": "Regioned a ByteString-\u003eSTLike b c ByteString",
        "package": "monad-stlike-io",
        "partial": "To BS",
        "signature": "Regioned s ByteString-\u003eSTLike m reg ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:region",
      "description": {
        "fct-descr": "\u003cp\u003eRegions a value. Synonym for \u003cem\u003ereturn\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "t -\u003e Regioned s t",
        "fct-source": "src/Control-Monad-STLike-IO.html#region",
        "fct-type": "function",
        "title": "region"
      },
      "index": {
        "description": "Regions value Synonym for return",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "region",
        "normalized": "a-\u003eRegioned b a",
        "package": "monad-stlike-io",
        "partial": "",
        "signature": "t-\u003eRegioned s t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:runIOS",
      "description": {
        "fct-descr": "\u003cp\u003eRun an IOS computation in the IO monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "(forall s.  IOS s t) -\u003e IO t",
        "fct-source": "src/Control-Monad-STLike-IO.html#runIOS",
        "fct-type": "function",
        "title": "runIOS"
      },
      "index": {
        "description": "Run an IOS computation in the IO monad",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "runIOS",
        "normalized": "(a b IOS c d)-\u003eIO d",
        "package": "monad-stlike-io",
        "partial": "IOS",
        "signature": "(forall s. IOS s t)-\u003eIO t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:runRegion",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation on regioned data\n and return the result in a strict fashion.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "Regioned s ty -\u003e STLike m region ty",
        "fct-source": "src/Control-Monad-STLike-Internal.html#runRegion",
        "fct-type": "function",
        "title": "runRegion"
      },
      "index": {
        "description": "Run computation on regioned data and return the result in strict fashion",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "runRegion",
        "normalized": "Regioned a b-\u003eSTLike c d b",
        "package": "monad-stlike-io",
        "partial": "Region",
        "signature": "Regioned s ty-\u003eSTLike m region ty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:try",
      "description": {
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "IOS s t -\u003e IOS s (Either SomeException t)",
        "fct-source": "src/Control-Monad-STLike-IO.html#try",
        "fct-type": "function",
        "title": "try"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "try",
        "normalized": "IOS a b-\u003eIOS a(Either SomeException b)",
        "package": "monad-stlike-io",
        "partial": "",
        "signature": "IOS s t-\u003eIOS s(Either SomeException t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:unfoldRegion",
      "description": {
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "Regioned s (t a) -\u003e [Regioned s a]",
        "fct-source": "src/Control-Monad-STLike-Internal.html#unfoldRegion",
        "fct-type": "function",
        "title": "unfoldRegion"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "unfoldRegion",
        "normalized": "Regioned a(b c)-\u003e[Regioned a c]",
        "package": "monad-stlike-io",
        "partial": "Region",
        "signature": "Regioned s(t a)-\u003e[Regioned s a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:withRIOR",
      "description": {
        "fct-descr": "\u003cp\u003eUse a resource with IOS. Like \u003cem\u003ebracket\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "IOS o resource-\u003e (resource -\u003e IOS o ())-\u003e (forall s.  Regioned (s :\u003c o) resource -\u003e IOS (s :\u003c o) result)-\u003e IOS o result",
        "fct-type": "function",
        "title": "withRIOR"
      },
      "index": {
        "description": "Use resource with IOS Like bracket",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "withRIOR",
        "normalized": "IOS a b-\u003e(b-\u003eIOS a())-\u003e(c d Regioned(e a)b-\u003eIOS(e a)f)-\u003eIOS a f",
        "package": "monad-stlike-io",
        "partial": "RIOR",
        "signature": "IOS o resource-\u003e(resource-\u003eIOS o())-\u003e(forall s. Regioned(s o)resource-\u003eIOS(s o)result)-\u003eIOS o result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:withRbsPtr",
      "description": {
        "fct-descr": "\u003cp\u003eUse a regioned ByteString as a pointer. O(1). \n   The pointer points to the region contents,\n   so be cafeful with it.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.STLike.IO",
        "fct-package": "monad-stlike-io",
        "fct-signature": "Regioned s ByteString -\u003e (Ptr any -\u003e Int -\u003e IOS s t) -\u003e IOS s t",
        "fct-source": "src/Control-Monad-STLike-IO.html#withRbsPtr",
        "fct-type": "function",
        "title": "withRbsPtr"
      },
      "index": {
        "description": "Use regioned ByteString as pointer The pointer points to the region contents so be cafeful with it",
        "hierarchy": "Control Monad STLike IO",
        "module": "Control.Monad.STLike.IO",
        "name": "withRbsPtr",
        "normalized": "Regioned a ByteString-\u003e(Ptr b-\u003eInt-\u003eIOS a c)-\u003eIOS a c",
        "package": "monad-stlike-io",
        "partial": "Rbs Ptr",
        "signature": "Regioned s ByteString-\u003e(Ptr any-\u003eInt-\u003eIOS s t)-\u003eIOS s t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnsafe interface for implementators.\n   Purposefully not documented.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.STLike.Unsafe",
        "fct-package": "monad-stlike-io",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-STLike-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "Unsafe interface for implementators Purposefully not documented",
        "hierarchy": "Control Monad STLike Unsafe",
        "module": "Control.Monad.STLike.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "monad-stlike-io",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  }
]