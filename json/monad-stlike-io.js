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
        "word": "monad-stlike-io"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.STLike.IO",
          "name": "IO",
          "package": "monad-stlike-io",
          "source": "src/Control-Monad-STLike-IO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "IO",
          "package": "monad-stlike-io",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.STLike.IO",
          "name": ":\u003c",
          "package": "monad-stlike-io",
          "source": "src/Control-Monad-STLike-Internal.html#%3A%3C",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": ":\u003c",
          "package": "monad-stlike-io",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#t::-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad for scoped IO computations\n The underlying monad must be strict here.\n\u003c/p\u003e",
          "module": "Control.Monad.STLike.IO",
          "name": "IOS",
          "package": "monad-stlike-io",
          "source": "src/Control-Monad-STLike-IO.html#IOS",
          "type": "type"
        },
        "index": {
          "description": "Monad for scoped IO computations The underlying monad must be strict here",
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "IOS",
          "package": "monad-stlike-io",
          "partial": "IOS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#t:IOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.STLike.IO",
          "name": "RegionMonad",
          "package": "monad-stlike-io",
          "source": "src/Control-Monad-STLike-Internal.html#RegionMonad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "RegionMonad",
          "package": "monad-stlike-io",
          "partial": "Region Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#t:RegionMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegioned variables.\n A regioned variable is \u003cem\u003esafe\u003c/em\u003e i.e. no references to\n it may escape the current IOS.\n\u003c/p\u003e",
          "module": "Control.Monad.STLike.IO",
          "name": "Regioned",
          "package": "monad-stlike-io",
          "source": "src/Control-Monad-STLike-Internal.html#Regioned",
          "type": "data"
        },
        "index": {
          "description": "Regioned variables regioned variable is safe i.e no references to it may escape the current IOS",
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "Regioned",
          "package": "monad-stlike-io",
          "partial": "Regioned",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#t:Regioned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift IO computations into IOS. liftIO also works.\n\u003c/p\u003e",
          "module": "Control.Monad.STLike.IO",
          "name": "io",
          "package": "monad-stlike-io",
          "signature": "IO t -\u003e IOS s t",
          "source": "src/Control-Monad-STLike-IO.html#io",
          "type": "function"
        },
        "index": {
          "description": "Lift IO computations into IOS liftIO also works",
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "io",
          "normalized": "IO a-\u003eIOS b a",
          "package": "monad-stlike-io",
          "signature": "IO t-\u003eIOS s t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a ByteString representing the pointer and length. \n   No copying done, O(1).\n\u003c/p\u003e",
          "module": "Control.Monad.STLike.IO",
          "name": "rbsFromPtr",
          "package": "monad-stlike-io",
          "signature": "Ptr a -\u003e Int -\u003e IOS s (Regioned s ByteString)",
          "source": "src/Control-Monad-STLike-IO.html#rbsFromPtr",
          "type": "function"
        },
        "index": {
          "description": "Create ByteString representing the pointer and length No copying done",
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "rbsFromPtr",
          "normalized": "Ptr a-\u003eInt-\u003eIOS b(Regioned b ByteString)",
          "package": "monad-stlike-io",
          "partial": "From Ptr",
          "signature": "Ptr a-\u003eInt-\u003eIOS s(Regioned s ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:rbsFromPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup inside a Map with a regioned ByteString.\n\u003c/p\u003e",
          "module": "Control.Monad.STLike.IO",
          "name": "rbsMapLookup",
          "package": "monad-stlike-io",
          "signature": "Regioned s key -\u003e Map key value -\u003e STLike m reg (Maybe value)",
          "source": "src/Control-Monad-STLike-IO.html#rbsMapLookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup inside Map with regioned ByteString",
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "rbsMapLookup",
          "normalized": "Regioned a b-\u003eMap b c-\u003eSTLike d e(Maybe c)",
          "package": "monad-stlike-io",
          "partial": "Map Lookup",
          "signature": "Regioned s key-\u003eMap key value-\u003eSTLike m reg(Maybe value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:rbsMapLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a copy of a regioned ByteString as a normal ByteString. O(n).\n\u003c/p\u003e",
          "module": "Control.Monad.STLike.IO",
          "name": "rbsToBS",
          "package": "monad-stlike-io",
          "signature": "Regioned s ByteString -\u003e STLike m reg ByteString",
          "source": "src/Control-Monad-STLike-IO.html#rbsToBS",
          "type": "function"
        },
        "index": {
          "description": "Create copy of regioned ByteString as normal ByteString",
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "rbsToBS",
          "normalized": "Regioned a ByteString-\u003eSTLike b c ByteString",
          "package": "monad-stlike-io",
          "partial": "To BS",
          "signature": "Regioned s ByteString-\u003eSTLike m reg ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:rbsToBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegions a value. Synonym for \u003cem\u003ereturn\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.STLike.IO",
          "name": "region",
          "package": "monad-stlike-io",
          "signature": "t -\u003e Regioned s t",
          "source": "src/Control-Monad-STLike-IO.html#region",
          "type": "function"
        },
        "index": {
          "description": "Regions value Synonym for return",
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "region",
          "normalized": "a-\u003eRegioned b a",
          "package": "monad-stlike-io",
          "signature": "t-\u003eRegioned s t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:region"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IOS computation in the IO monad.\n\u003c/p\u003e",
          "module": "Control.Monad.STLike.IO",
          "name": "runIOS",
          "package": "monad-stlike-io",
          "signature": "(forall s.  IOS s t) -\u003e IO t",
          "source": "src/Control-Monad-STLike-IO.html#runIOS",
          "type": "function"
        },
        "index": {
          "description": "Run an IOS computation in the IO monad",
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "runIOS",
          "normalized": "(a b IOS c d)-\u003eIO d",
          "package": "monad-stlike-io",
          "partial": "IOS",
          "signature": "(forall s. IOS s t)-\u003eIO t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:runIOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation on regioned data\n and return the result in a strict fashion.\n\u003c/p\u003e",
          "module": "Control.Monad.STLike.IO",
          "name": "runRegion",
          "package": "monad-stlike-io",
          "signature": "Regioned s ty -\u003e STLike m region ty",
          "source": "src/Control-Monad-STLike-Internal.html#runRegion",
          "type": "function"
        },
        "index": {
          "description": "Run computation on regioned data and return the result in strict fashion",
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "runRegion",
          "normalized": "Regioned a b-\u003eSTLike c d b",
          "package": "monad-stlike-io",
          "partial": "Region",
          "signature": "Regioned s ty-\u003eSTLike m region ty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:runRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.STLike.IO",
          "name": "try",
          "package": "monad-stlike-io",
          "signature": "IOS s t -\u003e IOS s (Either SomeException t)",
          "source": "src/Control-Monad-STLike-IO.html#try",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "try",
          "normalized": "IOS a b-\u003eIOS a(Either SomeException b)",
          "package": "monad-stlike-io",
          "signature": "IOS s t-\u003eIOS s(Either SomeException t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.STLike.IO",
          "name": "unfoldRegion",
          "package": "monad-stlike-io",
          "signature": "Regioned s (t a) -\u003e [Regioned s a]",
          "source": "src/Control-Monad-STLike-Internal.html#unfoldRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "unfoldRegion",
          "normalized": "Regioned a(b c)-\u003e[Regioned a c]",
          "package": "monad-stlike-io",
          "partial": "Region",
          "signature": "Regioned s(t a)-\u003e[Regioned s a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:unfoldRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a resource with IOS. Like \u003cem\u003ebracket\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.STLike.IO",
          "name": "withRIOR",
          "package": "monad-stlike-io",
          "signature": "IOS o resource-\u003e (resource -\u003e IOS o ())-\u003e (forall s.  Regioned (s :\u003c o) resource -\u003e IOS (s :\u003c o) result)-\u003e IOS o result",
          "type": "function"
        },
        "index": {
          "description": "Use resource with IOS Like bracket",
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "withRIOR",
          "normalized": "IOS a b-\u003e(b-\u003eIOS a())-\u003e(c d Regioned(e a)b-\u003eIOS(e a)f)-\u003eIOS a f",
          "package": "monad-stlike-io",
          "partial": "RIOR",
          "signature": "IOS o resource-\u003e(resource-\u003eIOS o())-\u003e(forall s. Regioned(s o)resource-\u003eIOS(s o)result)-\u003eIOS o result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:withRIOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a regioned ByteString as a pointer. O(1). \n   The pointer points to the region contents,\n   so be cafeful with it.\n\u003c/p\u003e",
          "module": "Control.Monad.STLike.IO",
          "name": "withRbsPtr",
          "package": "monad-stlike-io",
          "signature": "Regioned s ByteString -\u003e (Ptr any -\u003e Int -\u003e IOS s t) -\u003e IOS s t",
          "source": "src/Control-Monad-STLike-IO.html#withRbsPtr",
          "type": "function"
        },
        "index": {
          "description": "Use regioned ByteString as pointer The pointer points to the region contents so be cafeful with it",
          "hierarchy": "Control Monad STLike IO",
          "module": "Control.Monad.STLike.IO",
          "name": "withRbsPtr",
          "normalized": "Regioned a ByteString-\u003e(Ptr b-\u003eInt-\u003eIOS a c)-\u003eIOS a c",
          "package": "monad-stlike-io",
          "partial": "Rbs Ptr",
          "signature": "Regioned s ByteString-\u003e(Ptr any-\u003eInt-\u003eIOS s t)-\u003eIOS s t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-IO.html#v:withRbsPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnsafe interface for implementators.\n   Purposefully not documented.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.STLike.Unsafe",
          "name": "Unsafe",
          "package": "monad-stlike-io",
          "source": "src/Control-Monad-STLike-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "Unsafe interface for implementators Purposefully not documented",
          "hierarchy": "Control Monad STLike Unsafe",
          "module": "Control.Monad.STLike.Unsafe",
          "name": "Unsafe",
          "package": "monad-stlike-io",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-stlike-io/docs/Control-Monad-STLike-Unsafe.html#"
      }
    }
  ]
]