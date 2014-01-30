[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#",
      "description": {
        "fct-module": "Data.FileCache",
        "fct-package": "filecache",
        "fct-signature": "module",
        "fct-source": "src/Data-FileCache.html",
        "fct-type": "module",
        "title": "FileCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FileCache",
        "module": "Data.FileCache",
        "name": "FileCache",
        "normalized": "",
        "package": "filecache",
        "partial": "File Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#t:FileCache",
      "description": {
        "fct-module": "Data.FileCache",
        "fct-package": "filecache",
        "fct-signature": "type",
        "fct-source": "src/Data-FileCache.html#FileCache",
        "fct-type": "type",
        "title": "FileCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FileCache",
        "module": "Data.FileCache",
        "name": "FileCache",
        "normalized": "",
        "package": "filecache",
        "partial": "File Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#t:FileCacheR",
      "description": {
        "fct-module": "Data.FileCache",
        "fct-package": "filecache",
        "fct-signature": "data",
        "fct-source": "src/Data-FileCache.html#FileCacheR",
        "fct-type": "data",
        "title": "FileCacheR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FileCache",
        "module": "Data.FileCache",
        "name": "FileCacheR",
        "normalized": "",
        "package": "filecache",
        "partial": "File Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#v:getCache",
      "description": {
        "fct-descr": "\u003cp\u003eGets a copy of the cache.\n\u003c/p\u003e",
        "fct-module": "Data.FileCache",
        "fct-package": "filecache",
        "fct-signature": "FileCacheR r a -\u003e IO (HashMap FilePath (Either r a, WatchDescriptor))",
        "fct-source": "src/Data-FileCache.html#getCache",
        "fct-type": "function",
        "title": "getCache"
      },
      "index": {
        "description": "Gets copy of the cache",
        "hierarchy": "Data FileCache",
        "module": "Data.FileCache",
        "name": "getCache",
        "normalized": "FileCacheR a b-\u003eIO(HashMap FilePath(Either a b,WatchDescriptor))",
        "package": "filecache",
        "partial": "Cache",
        "signature": "FileCacheR r a-\u003eIO(HashMap FilePath(Either r a,WatchDescriptor))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#v:invalidate",
      "description": {
        "fct-descr": "\u003cp\u003eManually invalidates an entry.\n\u003c/p\u003e",
        "fct-module": "Data.FileCache",
        "fct-package": "filecache",
        "fct-signature": "FilePath -\u003e FileCacheR r a -\u003e IO ()",
        "fct-source": "src/Data-FileCache.html#invalidate",
        "fct-type": "function",
        "title": "invalidate"
      },
      "index": {
        "description": "Manually invalidates an entry",
        "hierarchy": "Data FileCache",
        "module": "Data.FileCache",
        "name": "invalidate",
        "normalized": "FilePath-\u003eFileCacheR a b-\u003eIO()",
        "package": "filecache",
        "partial": "",
        "signature": "FilePath-\u003eFileCacheR r a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#v:killFileCache",
      "description": {
        "fct-descr": "\u003cp\u003eDestroys the thread running the FileCache. Pretty dangerous stuff.\n\u003c/p\u003e",
        "fct-module": "Data.FileCache",
        "fct-package": "filecache",
        "fct-signature": "FileCacheR r a -\u003e IO ()",
        "fct-source": "src/Data-FileCache.html#killFileCache",
        "fct-type": "function",
        "title": "killFileCache"
      },
      "index": {
        "description": "Destroys the thread running the FileCache Pretty dangerous stuff",
        "hierarchy": "Data FileCache",
        "module": "Data.FileCache",
        "name": "killFileCache",
        "normalized": "FileCacheR a b-\u003eIO()",
        "package": "filecache",
        "partial": "File Cache",
        "signature": "FileCacheR r a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#v:lazyQuery",
      "description": {
        "fct-descr": "\u003cp\u003eJust like \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e, but with the standard \u003ca\u003eEither\u003c/a\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.FileCache",
        "fct-package": "filecache",
        "fct-signature": "FileCacheR r a-\u003e FilePath-\u003e IO (Either r a)-\u003e IO (Either r a)",
        "fct-type": "function",
        "title": "lazyQuery"
      },
      "index": {
        "description": "Just like query but with the standard Either type",
        "hierarchy": "Data FileCache",
        "module": "Data.FileCache",
        "name": "lazyQuery",
        "normalized": "FileCacheR a b-\u003eFilePath-\u003eIO(Either a b)-\u003eIO(Either a b)",
        "package": "filecache",
        "partial": "Query",
        "signature": "FileCacheR r a-\u003eFilePath-\u003eIO(Either r a)-\u003eIO(Either r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#v:newFileCache",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a new file cache. The opaque type is for use with other\n functions.\n\u003c/p\u003e",
        "fct-module": "Data.FileCache",
        "fct-package": "filecache",
        "fct-signature": "IO (FileCacheR r a)",
        "fct-source": "src/Data-FileCache.html#newFileCache",
        "fct-type": "function",
        "title": "newFileCache"
      },
      "index": {
        "description": "Generates new file cache The opaque type is for use with other functions",
        "hierarchy": "Data FileCache",
        "module": "Data.FileCache",
        "name": "newFileCache",
        "normalized": "",
        "package": "filecache",
        "partial": "File Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eQueries the cache, populating it if necessary.\n\u003c/p\u003e",
        "fct-module": "Data.FileCache",
        "fct-package": "filecache",
        "fct-signature": "FileCacheR r a-\u003e FilePath-\u003e IO (Either r a)-\u003e IO (Either r a)",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "Queries the cache populating it if necessary",
        "hierarchy": "Data FileCache",
        "module": "Data.FileCache",
        "name": "query",
        "normalized": "FileCacheR a b-\u003eFilePath-\u003eIO(Either a b)-\u003eIO(Either a b)",
        "package": "filecache",
        "partial": "",
        "signature": "FileCacheR r a-\u003eFilePath-\u003eIO(Either r a)-\u003eIO(Either r a)"
      }
    }
  }
]