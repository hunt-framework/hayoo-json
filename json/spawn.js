[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#",
      "description": {
        "fct-module": "Control.Concurrent.Spawn",
        "fct-package": "spawn",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Spawn.html",
        "fct-type": "module",
        "title": "Spawn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Spawn",
        "module": "Control.Concurrent.Spawn",
        "name": "Spawn",
        "normalized": "",
        "package": "spawn",
        "partial": "Spawn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eTwo ways a computation of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e can end.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Spawn",
        "fct-package": "spawn",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-Spawn.html#Result",
        "fct-type": "type",
        "title": "Result"
      },
      "index": {
        "description": "Two ways computation of type IO can end",
        "hierarchy": "Control Concurrent Spawn",
        "module": "Control.Concurrent.Spawn",
        "name": "Result",
        "normalized": "",
        "package": "spawn",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#v:-124--42--124-",
      "description": {
        "fct-descr": "\u003cp\u003eA concurrent version of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e(\u003c*\u003e)\u003c/code\u003e for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSpawns a thread for the right-hand action, while executing the\n left-hand action in the current thread.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Spawn",
        "fct-package": "spawn",
        "fct-signature": "IO (a -\u003e b) -\u003e IO a -\u003e IO b",
        "fct-source": "src/Control-Concurrent-Spawn.html#%7C%2A%7C",
        "fct-type": "function",
        "title": "(|*|)"
      },
      "index": {
        "description": "concurrent version of ap or for IO Spawns thread for the right-hand action while executing the left-hand action in the current thread",
        "hierarchy": "Control Concurrent Spawn",
        "module": "Control.Concurrent.Spawn",
        "name": "(|*|) |*|",
        "normalized": "IO(a-\u003eb)-\u003eIO a-\u003eIO b",
        "package": "spawn",
        "partial": "",
        "signature": "IO(a-\u003eb)-\u003eIO a-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#v:parMapIO",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a separate thread of IO for each element of a list, and\n collect results.\n\u003c/p\u003e\u003cp\u003eThe analogy to \u003ccode\u003eparMap\u003c/code\u003e is misleading.  The concurrent execution\n of these actions is non-deterministic and can affect results.\n However, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMapIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is expected to be most useful for actions\n which do not interact.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Spawn",
        "fct-package": "spawn",
        "fct-signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO [b]",
        "fct-source": "src/Control-Concurrent-Spawn.html#parMapIO",
        "fct-type": "function",
        "title": "parMapIO"
      },
      "index": {
        "description": "Execute separate thread of IO for each element of list and collect results The analogy to parMap is misleading The concurrent execution of these actions is non-deterministic and can affect results However parMapIO is expected to be most useful for actions which do not interact",
        "hierarchy": "Control Concurrent Spawn",
        "module": "Control.Concurrent.Spawn",
        "name": "parMapIO",
        "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]",
        "package": "spawn",
        "partial": "Map IO",
        "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#v:parMapIO_",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a separate thread of IO for each element of a list.\n\u003c/p\u003e\u003cp\u003eResults are discarded, but the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMapIO_\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e action does not\n complete until all threads have finished.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Spawn",
        "fct-package": "spawn",
        "fct-signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Spawn.html#parMapIO_",
        "fct-type": "function",
        "title": "parMapIO_"
      },
      "index": {
        "description": "Execute separate thread of IO for each element of list Results are discarded but the parMapIO action does not complete until all threads have finished",
        "hierarchy": "Control Concurrent Spawn",
        "module": "Control.Concurrent.Spawn",
        "name": "parMapIO_",
        "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO()",
        "package": "spawn",
        "partial": "Map IO",
        "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#v:pool",
      "description": {
        "fct-descr": "\u003cp\u003eGiven \u003cem\u003en\u003c/em\u003e, produces a function to wrap \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e actions.\n No more than \u003cem\u003en\u003c/em\u003e wrapped actions will be in progress at\n one time.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Spawn",
        "fct-package": "spawn",
        "fct-signature": "Int -\u003e IO (IO a -\u003e IO a)",
        "fct-source": "src/Control-Concurrent-Spawn.html#pool",
        "fct-type": "function",
        "title": "pool"
      },
      "index": {
        "description": "Given produces function to wrap IO actions No more than wrapped actions will be in progress at one time",
        "hierarchy": "Control Concurrent Spawn",
        "module": "Control.Concurrent.Spawn",
        "name": "pool",
        "normalized": "Int-\u003eIO(IO a-\u003eIO a)",
        "package": "spawn",
        "partial": "",
        "signature": "Int-\u003eIO(IO a-\u003eIO a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#v:spawn",
      "description": {
        "fct-descr": "\u003cp\u003eSpawn a concurrent computation.  Produces an action which\n demands the result.  Any exception from the original computation\n is re-thrown when and where the result is demanded.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Spawn",
        "fct-package": "spawn",
        "fct-signature": "IO a -\u003e IO (IO a)",
        "fct-source": "src/Control-Concurrent-Spawn.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "Spawn concurrent computation Produces an action which demands the result Any exception from the original computation is re-thrown when and where the result is demanded",
        "hierarchy": "Control Concurrent Spawn",
        "module": "Control.Concurrent.Spawn",
        "name": "spawn",
        "normalized": "IO a-\u003eIO(IO a)",
        "package": "spawn",
        "partial": "",
        "signature": "IO a-\u003eIO(IO a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#v:spawnTry",
      "description": {
        "fct-descr": "\u003cp\u003eSpawn a concurrent computation.  Produces an action which\n demands a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Spawn",
        "fct-package": "spawn",
        "fct-signature": "IO a -\u003e IO (IO (Result a))",
        "fct-source": "src/Control-Concurrent-Spawn.html#spawnTry",
        "fct-type": "function",
        "title": "spawnTry"
      },
      "index": {
        "description": "Spawn concurrent computation Produces an action which demands Result",
        "hierarchy": "Control Concurrent Spawn",
        "module": "Control.Concurrent.Spawn",
        "name": "spawnTry",
        "normalized": "IO a-\u003eIO(IO(Result a))",
        "package": "spawn",
        "partial": "Try",
        "signature": "IO a-\u003eIO(IO(Result a))"
      }
    }
  }
]