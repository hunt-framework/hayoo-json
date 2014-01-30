[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-barrier/docs/Control-Concurrent-Barrier.html#",
      "description": {
        "fct-module": "Control.Concurrent.Barrier",
        "fct-package": "concurrent-barrier",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Barrier.html",
        "fct-type": "module",
        "title": "Barrier"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Barrier",
        "module": "Control.Concurrent.Barrier",
        "name": "Barrier",
        "normalized": "",
        "package": "concurrent-barrier",
        "partial": "Barrier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-barrier/docs/Control-Concurrent-Barrier.html#t:Barrier",
      "description": {
        "fct-module": "Control.Concurrent.Barrier",
        "fct-package": "concurrent-barrier",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-Barrier.html#Barrier",
        "fct-type": "type",
        "title": "Barrier"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Barrier",
        "module": "Control.Concurrent.Barrier",
        "name": "Barrier",
        "normalized": "",
        "package": "concurrent-barrier",
        "partial": "Barrier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-barrier/docs/Control-Concurrent-Barrier.html#v:barrier",
      "description": {
        "fct-descr": "\u003cp\u003eSelf-resetting barrier.  \u003ccode\u003e\u003ca\u003ebarrier\u003c/a\u003e\u003c/code\u003e blocks until a specified\n number of threads have reached it, and then they are all allowed to\n run.  The barrier is then reset so that a further \u003ccode\u003ecount\u003c/code\u003e threads\n can block on it.  Typical usage is:\n\u003c/p\u003e\u003cpre\u003e do b \u003c- barrier 3\n    forkIO $ b \u003e\u003e putStrLn \"1\"  -- blocked\n    forkIO $ b \u003e\u003e putStrLn \"2\"  -- blocked\n    forkIO $ b \u003e\u003e putStrLn \"3\"  -- all three threads run\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Barrier",
        "fct-package": "concurrent-barrier",
        "fct-signature": "Int-\u003e IO Barrier",
        "fct-type": "function",
        "title": "barrier"
      },
      "index": {
        "description": "Self-resetting barrier barrier blocks until specified number of threads have reached it and then they are all allowed to run The barrier is then reset so that further count threads can block on it Typical usage is do barrier forkIO putStrLn blocked forkIO putStrLn blocked forkIO putStrLn all three threads run",
        "hierarchy": "Control Concurrent Barrier",
        "module": "Control.Concurrent.Barrier",
        "name": "barrier",
        "normalized": "Int-\u003eIO Barrier",
        "package": "concurrent-barrier",
        "partial": "",
        "signature": "Int-\u003eIO Barrier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-barrier/docs/Control-Concurrent-Barrier.html#v:latchBarrier",
      "description": {
        "fct-descr": "\u003cp\u003eLatching barrier.  This is the same as \u003ccode\u003e\u003ca\u003ebarrier\u003c/a\u003e\u003c/code\u003e, except once the\n barrier has opened (the requisite number of threads has reached\n it), it remains open, allowing all subsequent threads through\n unblocked.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Barrier",
        "fct-package": "concurrent-barrier",
        "fct-signature": "Int-\u003e IO Barrier",
        "fct-type": "function",
        "title": "latchBarrier"
      },
      "index": {
        "description": "Latching barrier This is the same as barrier except once the barrier has opened the requisite number of threads has reached it it remains open allowing all subsequent threads through unblocked",
        "hierarchy": "Control Concurrent Barrier",
        "module": "Control.Concurrent.Barrier",
        "name": "latchBarrier",
        "normalized": "Int-\u003eIO Barrier",
        "package": "concurrent-barrier",
        "partial": "Barrier",
        "signature": "Int-\u003eIO Barrier"
      }
    }
  }
]