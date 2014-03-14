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
        "word": "threadmanager"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntended to be imported qualified, as in\n\u003c/p\u003e\u003cpre\u003e\n import qualified Control.Concurrent.ThreadManager as TM\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.ThreadManager",
          "name": "ThreadManager",
          "package": "threadmanager",
          "source": "src/Control-Concurrent-ThreadManager.html",
          "type": "module"
        },
        "index": {
          "description": "Intended to be imported qualified as in import qualified Control.Concurrent.ThreadManager as TM",
          "hierarchy": "Control Concurrent ThreadManager",
          "module": "Control.Concurrent.ThreadManager",
          "name": "ThreadManager",
          "package": "threadmanager",
          "partial": "Thread Manager",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threadmanager/docs/Control-Concurrent-ThreadManager.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ThreadManager",
          "name": "ThreadManager",
          "package": "threadmanager",
          "source": "src/Control-Concurrent-ThreadManager.html#ThreadManager",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent ThreadManager",
          "module": "Control.Concurrent.ThreadManager",
          "name": "ThreadManager",
          "package": "threadmanager",
          "partial": "Thread Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threadmanager/docs/Control-Concurrent-ThreadManager.html#t:ThreadManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ThreadManager",
          "name": "ThreadStatus",
          "package": "threadmanager",
          "source": "src/Control-Concurrent-ThreadManager.html#ThreadStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent ThreadManager",
          "module": "Control.Concurrent.ThreadManager",
          "name": "ThreadStatus",
          "package": "threadmanager",
          "partial": "Thread Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threadmanager/docs/Control-Concurrent-ThreadManager.html#t:ThreadStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ThreadManager",
          "name": "Finished",
          "package": "threadmanager",
          "signature": "Finished",
          "source": "src/Control-Concurrent-ThreadManager.html#ThreadStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent ThreadManager",
          "module": "Control.Concurrent.ThreadManager",
          "name": "Finished",
          "package": "threadmanager",
          "partial": "Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threadmanager/docs/Control-Concurrent-ThreadManager.html#v:Finished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ThreadManager",
          "name": "Running",
          "package": "threadmanager",
          "signature": "Running",
          "source": "src/Control-Concurrent-ThreadManager.html#ThreadStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent ThreadManager",
          "module": "Control.Concurrent.ThreadManager",
          "name": "Running",
          "package": "threadmanager",
          "partial": "Running",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threadmanager/docs/Control-Concurrent-ThreadManager.html#v:Running"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ThreadManager",
          "name": "Threw",
          "package": "threadmanager",
          "signature": "Threw SomeException",
          "source": "src/Control-Concurrent-ThreadManager.html#ThreadStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent ThreadManager",
          "module": "Control.Concurrent.ThreadManager",
          "name": "Threw",
          "package": "threadmanager",
          "partial": "Threw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threadmanager/docs/Control-Concurrent-ThreadManager.html#v:Threw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a managed thread. Uses \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ThreadManager",
          "name": "fork",
          "package": "threadmanager",
          "signature": "ThreadManager -\u003e IO () -\u003e IO ThreadId",
          "source": "src/Control-Concurrent-ThreadManager.html#fork",
          "type": "function"
        },
        "index": {
          "description": "Make managed thread Uses forkIO",
          "hierarchy": "Control Concurrent ThreadManager",
          "module": "Control.Concurrent.ThreadManager",
          "name": "fork",
          "normalized": "ThreadManager-\u003eIO()-\u003eIO ThreadId",
          "package": "threadmanager",
          "signature": "ThreadManager-\u003eIO()-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threadmanager/docs/Control-Concurrent-ThreadManager.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake the given number of managed threads.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ThreadManager",
          "name": "forkn",
          "package": "threadmanager",
          "signature": "ThreadManager -\u003e Int -\u003e IO () -\u003e IO [ThreadId]",
          "source": "src/Control-Concurrent-ThreadManager.html#forkn",
          "type": "function"
        },
        "index": {
          "description": "Make the given number of managed threads",
          "hierarchy": "Control Concurrent ThreadManager",
          "module": "Control.Concurrent.ThreadManager",
          "name": "forkn",
          "normalized": "ThreadManager-\u003eInt-\u003eIO()-\u003eIO[ThreadId]",
          "package": "threadmanager",
          "signature": "ThreadManager-\u003eInt-\u003eIO()-\u003eIO[ThreadId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threadmanager/docs/Control-Concurrent-ThreadManager.html#v:forkn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the status of a managed thread.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ThreadManager",
          "name": "getStatus",
          "package": "threadmanager",
          "signature": "ThreadManager -\u003e ThreadId -\u003e IO (Maybe ThreadStatus)",
          "source": "src/Control-Concurrent-ThreadManager.html#getStatus",
          "type": "function"
        },
        "index": {
          "description": "Get the status of managed thread",
          "hierarchy": "Control Concurrent ThreadManager",
          "module": "Control.Concurrent.ThreadManager",
          "name": "getStatus",
          "normalized": "ThreadManager-\u003eThreadId-\u003eIO(Maybe ThreadStatus)",
          "package": "threadmanager",
          "partial": "Status",
          "signature": "ThreadManager-\u003eThreadId-\u003eIO(Maybe ThreadStatus)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threadmanager/docs/Control-Concurrent-ThreadManager.html#v:getStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a thread manager.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ThreadManager",
          "name": "make",
          "package": "threadmanager",
          "signature": "IO ThreadManager",
          "source": "src/Control-Concurrent-ThreadManager.html#make",
          "type": "function"
        },
        "index": {
          "description": "Make thread manager",
          "hierarchy": "Control Concurrent ThreadManager",
          "module": "Control.Concurrent.ThreadManager",
          "name": "make",
          "package": "threadmanager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threadmanager/docs/Control-Concurrent-ThreadManager.html#v:make"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock until a specific managed thread terminates.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ThreadManager",
          "name": "waitFor",
          "package": "threadmanager",
          "signature": "ThreadManager -\u003e ThreadId -\u003e IO (Maybe ThreadStatus)",
          "source": "src/Control-Concurrent-ThreadManager.html#waitFor",
          "type": "function"
        },
        "index": {
          "description": "Block until specific managed thread terminates",
          "hierarchy": "Control Concurrent ThreadManager",
          "module": "Control.Concurrent.ThreadManager",
          "name": "waitFor",
          "normalized": "ThreadManager-\u003eThreadId-\u003eIO(Maybe ThreadStatus)",
          "package": "threadmanager",
          "partial": "For",
          "signature": "ThreadManager-\u003eThreadId-\u003eIO(Maybe ThreadStatus)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threadmanager/docs/Control-Concurrent-ThreadManager.html#v:waitFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock until all managed threads terminate.\n\u003c/p\u003e",
          "module": "Control.Concurrent.ThreadManager",
          "name": "waitForAll",
          "package": "threadmanager",
          "signature": "ThreadManager -\u003e IO ()",
          "source": "src/Control-Concurrent-ThreadManager.html#waitForAll",
          "type": "function"
        },
        "index": {
          "description": "Block until all managed threads terminate",
          "hierarchy": "Control Concurrent ThreadManager",
          "module": "Control.Concurrent.ThreadManager",
          "name": "waitForAll",
          "normalized": "ThreadManager-\u003eIO()",
          "package": "threadmanager",
          "partial": "For All",
          "signature": "ThreadManager-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threadmanager/docs/Control-Concurrent-ThreadManager.html#v:waitForAll"
      }
    }
  ]
]