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
        "word": "sharedio"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllows \u003ca\u003ebundling\u003c/a\u003e or \u003ca\u003ethrottling\u003c/a\u003e of concurrent IO to perform computation\n  only once.\n\u003c/p\u003e\u003cp\u003eUseful in situations where concurrency can be expensive, such as file\n system scans (where concurrent execution usually returns the same\n result but introduces much disk seeking overhead).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.SharedIO",
          "name": "SharedIO",
          "package": "sharedio",
          "source": "src/Control-Concurrent-SharedIO.html",
          "type": "module"
        },
        "index": {
          "description": "Allows bundling or throttling of concurrent IO to perform computation only once Useful in situations where concurrency can be expensive such as file system scans where concurrent execution usually returns the same result but introduces much disk seeking overhead",
          "hierarchy": "Control Concurrent SharedIO",
          "module": "Control.Concurrent.SharedIO",
          "name": "SharedIO",
          "package": "sharedio",
          "partial": "Shared IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sharedio/docs/Control-Concurrent-SharedIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ca\u003esharing lock\u003c/a\u003e on a shared IO computation.\n\u003c/p\u003e\u003cp\u003eWhen it is \u003ca\u003efree\u003c/a\u003e, a computation can be started on it.\n\u003c/p\u003e\u003cp\u003eWhen it is \u003ca\u003elocked\u003c/a\u003e, started computation will not execute,\n but instead block until the running computation finished, and receive\n the same result.\n\u003c/p\u003e",
          "module": "Control.Concurrent.SharedIO",
          "name": "SharedIO",
          "package": "sharedio",
          "source": "src/Control-Concurrent-SharedIO.html#SharedIO",
          "type": "data"
        },
        "index": {
          "description": "sharing lock on shared IO computation When it is free computation can be started on it When it is locked started computation will not execute but instead block until the running computation finished and receive the same result",
          "hierarchy": "Control Concurrent SharedIO",
          "module": "Control.Concurrent.SharedIO",
          "name": "SharedIO",
          "package": "sharedio",
          "partial": "Shared IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sharedio/docs/Control-Concurrent-SharedIO.html#t:SharedIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new sharing lock.\n\u003c/p\u003e",
          "module": "Control.Concurrent.SharedIO",
          "name": "newSharedIO",
          "package": "sharedio",
          "signature": "IO (SharedIO a)",
          "source": "src/Control-Concurrent-SharedIO.html#newSharedIO",
          "type": "function"
        },
        "index": {
          "description": "Creates new sharing lock",
          "hierarchy": "Control Concurrent SharedIO",
          "module": "Control.Concurrent.SharedIO",
          "name": "newSharedIO",
          "package": "sharedio",
          "partial": "Shared IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sharedio/docs/Control-Concurrent-SharedIO.html#v:newSharedIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest to start a computation on the given sharing lock.\n\u003c/p\u003e\u003cp\u003eIf a computation is already running on that lock, the requested computation\n will not start, but instead block for the running computation to finish and\n return the same result for all threads waiting for it.\n\u003c/p\u003e\u003cp\u003eEnsures that (a)synchronous exceptions in the computation will be forwarded\n to all threads waiting for its result.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e- A webserver that lists directory contents, using\n     -- SharedIO to bundle clients fanatically hitting refresh.\n\u003c/li\u003e\u003cli\u003e- Without this, the file seeking would slow the server to a crawl.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003emain = do\n         fileScanSharedIO \u003c- newSharedIO\n         runWebserver (handleRequest fileScanSharedIO)\n\u003c/p\u003e\u003cp\u003ehandleRequest :: SharedIO -\u003e IO [FilePath]\n     handleRequest fileScanSharedIO = do\n         withSharedIO fileScanSharedIO (getDirectoryContents \u003ca\u003elargefolder\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "Control.Concurrent.SharedIO",
          "name": "withSharedIO",
          "package": "sharedio",
          "signature": "SharedIO a -\u003e IO a -\u003e IO a",
          "source": "src/Control-Concurrent-SharedIO.html#withSharedIO",
          "type": "function"
        },
        "index": {
          "description": "Request to start computation on the given sharing lock If computation is already running on that lock the requested computation will not start but instead block for the running computation to finish and return the same result for all threads waiting for it Ensures that synchronous exceptions in the computation will be forwarded to all threads waiting for its result Example webserver that lists directory contents using SharedIO to bundle clients fanatically hitting refresh Without this the file seeking would slow the server to crawl main do fileScanSharedIO newSharedIO runWebserver handleRequest fileScanSharedIO handleRequest SharedIO IO FilePath handleRequest fileScanSharedIO do withSharedIO fileScanSharedIO getDirectoryContents largefolder",
          "hierarchy": "Control Concurrent SharedIO",
          "module": "Control.Concurrent.SharedIO",
          "name": "withSharedIO",
          "normalized": "SharedIO a-\u003eIO a-\u003eIO a",
          "package": "sharedio",
          "partial": "Shared IO",
          "signature": "SharedIO a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sharedio/docs/Control-Concurrent-SharedIO.html#v:withSharedIO"
      }
    }
  ]
]