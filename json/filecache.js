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
        "word": "filecache"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module let you create caches where keys are file names, and values are automatically expired when the file is modified for any reason.\n\u003c/p\u003e\u003cp\u003eThis is usually done in the following fashion :\n\u003c/p\u003e\u003cpre\u003e cache \u003c- newFileCache\n o \u003c- query cache \"/path/to/file\" computation\n\u003c/pre\u003e\u003cp\u003eThe computation will be used to populate the cache if this call results in a miss.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FileCache",
          "name": "FileCache",
          "package": "filecache",
          "source": "src/Data-FileCache.html",
          "type": "module"
        },
        "index": {
          "description": "This module let you create caches where keys are file names and values are automatically expired when the file is modified for any reason This is usually done in the following fashion cache newFileCache query cache path to file computation The computation will be used to populate the cache if this call results in miss",
          "hierarchy": "Data FileCache",
          "module": "Data.FileCache",
          "name": "FileCache",
          "package": "filecache",
          "partial": "File Cache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default type synonym, for String errors.\n\u003c/p\u003e",
          "module": "Data.FileCache",
          "name": "FileCache",
          "package": "filecache",
          "source": "src/Data-FileCache.html#FileCache",
          "type": "type"
        },
        "index": {
          "description": "default type synonym for String errors",
          "hierarchy": "Data FileCache",
          "module": "Data.FileCache",
          "name": "FileCache",
          "package": "filecache",
          "partial": "File Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#t:FileCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main FileCache type, for queries returning 'Either r a'. The r\n type must be an instance of \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.FileCache",
          "name": "FileCacheR",
          "package": "filecache",
          "source": "src/Data-FileCache.html#FileCacheR",
          "type": "data"
        },
        "index": {
          "description": "The main FileCache type for queries returning Either The type must be an instance of Error",
          "hierarchy": "Data FileCache",
          "module": "Data.FileCache",
          "name": "FileCacheR",
          "package": "filecache",
          "partial": "File Cache",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#t:FileCacheR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a copy of the cache.\n\u003c/p\u003e",
          "module": "Data.FileCache",
          "name": "getCache",
          "package": "filecache",
          "signature": "FileCacheR r a -\u003e IO (HashMap FilePath (Either r a, WatchDescriptor))",
          "source": "src/Data-FileCache.html#getCache",
          "type": "function"
        },
        "index": {
          "description": "Gets copy of the cache",
          "hierarchy": "Data FileCache",
          "module": "Data.FileCache",
          "name": "getCache",
          "normalized": "FileCacheR a b-\u003eIO(HashMap FilePath(Either a b,WatchDescriptor))",
          "package": "filecache",
          "partial": "Cache",
          "signature": "FileCacheR r a-\u003eIO(HashMap FilePath(Either r a,WatchDescriptor))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#v:getCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eManually invalidates an entry.\n\u003c/p\u003e",
          "module": "Data.FileCache",
          "name": "invalidate",
          "package": "filecache",
          "signature": "FilePath -\u003e FileCacheR r a -\u003e IO ()",
          "source": "src/Data-FileCache.html#invalidate",
          "type": "function"
        },
        "index": {
          "description": "Manually invalidates an entry",
          "hierarchy": "Data FileCache",
          "module": "Data.FileCache",
          "name": "invalidate",
          "normalized": "FilePath-\u003eFileCacheR a b-\u003eIO()",
          "package": "filecache",
          "signature": "FilePath-\u003eFileCacheR r a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#v:invalidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroys the thread running the FileCache. Pretty dangerous stuff.\n\u003c/p\u003e",
          "module": "Data.FileCache",
          "name": "killFileCache",
          "package": "filecache",
          "signature": "FileCacheR r a -\u003e IO ()",
          "source": "src/Data-FileCache.html#killFileCache",
          "type": "function"
        },
        "index": {
          "description": "Destroys the thread running the FileCache Pretty dangerous stuff",
          "hierarchy": "Data FileCache",
          "module": "Data.FileCache",
          "name": "killFileCache",
          "normalized": "FileCacheR a b-\u003eIO()",
          "package": "filecache",
          "partial": "File Cache",
          "signature": "FileCacheR r a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#v:killFileCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e, but with the standard \u003ca\u003eEither\u003c/a\u003e type.\n\u003c/p\u003e",
          "module": "Data.FileCache",
          "name": "lazyQuery",
          "package": "filecache",
          "signature": "FileCacheR r a-\u003e FilePath-\u003e IO (Either r a)-\u003e IO (Either r a)",
          "type": "function"
        },
        "index": {
          "description": "Just like query but with the standard Either type",
          "hierarchy": "Data FileCache",
          "module": "Data.FileCache",
          "name": "lazyQuery",
          "normalized": "FileCacheR a b-\u003eFilePath-\u003eIO(Either a b)-\u003eIO(Either a b)",
          "package": "filecache",
          "partial": "Query",
          "signature": "FileCacheR r a-\u003eFilePath-\u003eIO(Either r a)-\u003eIO(Either r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#v:lazyQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a new file cache. The opaque type is for use with other\n functions.\n\u003c/p\u003e",
          "module": "Data.FileCache",
          "name": "newFileCache",
          "package": "filecache",
          "signature": "IO (FileCacheR r a)",
          "source": "src/Data-FileCache.html#newFileCache",
          "type": "function"
        },
        "index": {
          "description": "Generates new file cache The opaque type is for use with other functions",
          "hierarchy": "Data FileCache",
          "module": "Data.FileCache",
          "name": "newFileCache",
          "package": "filecache",
          "partial": "File Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#v:newFileCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries the cache, populating it if necessary, returning a strict\n \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e (from \u003ca\u003eData.Either.Strict\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eQueries that fail with an \u003ccode\u003eIOExeception\u003c/code\u003e will not create a cache entry.\n Also please note that there is a race condition between the potential\n execution of the computation and the establishment of the watch.\n\u003c/p\u003e",
          "module": "Data.FileCache",
          "name": "query",
          "package": "filecache",
          "signature": "FileCacheR r a-\u003e FilePath-\u003e IO (Either r a)-\u003e IO (Either r a)",
          "type": "function"
        },
        "index": {
          "description": "Queries the cache populating it if necessary returning strict Either from Data.Either.Strict Queries that fail with an IOExeception will not create cache entry Also please note that there is race condition between the potential execution of the computation and the establishment of the watch",
          "hierarchy": "Data FileCache",
          "module": "Data.FileCache",
          "name": "query",
          "normalized": "FileCacheR a b-\u003eFilePath-\u003eIO(Either a b)-\u003eIO(Either a b)",
          "package": "filecache",
          "signature": "FileCacheR r a-\u003eFilePath-\u003eIO(Either r a)-\u003eIO(Either r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filecache/docs/Data-FileCache.html#v:query"
      }
    }
  ]
]