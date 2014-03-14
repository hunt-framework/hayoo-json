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
        "word": "spawn"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Spawn",
          "name": "Spawn",
          "package": "spawn",
          "source": "src/Control-Concurrent-Spawn.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Spawn",
          "module": "Control.Concurrent.Spawn",
          "name": "Spawn",
          "package": "spawn",
          "partial": "Spawn",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo ways a computation of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e can end.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Spawn",
          "name": "Result",
          "package": "spawn",
          "source": "src/Control-Concurrent-Spawn.html#Result",
          "type": "type"
        },
        "index": {
          "description": "Two ways computation of type IO can end",
          "hierarchy": "Control Concurrent Spawn",
          "module": "Control.Concurrent.Spawn",
          "name": "Result",
          "package": "spawn",
          "partial": "Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concurrent version of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e(\u003c*\u003e)\u003c/code\u003e for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSpawns a thread for the right-hand action, while executing the\n left-hand action in the current thread.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Spawn",
          "name": "(|*|)",
          "package": "spawn",
          "signature": "IO (a -\u003e b) -\u003e IO a -\u003e IO b",
          "source": "src/Control-Concurrent-Spawn.html#%7C%2A%7C",
          "type": "function"
        },
        "index": {
          "description": "concurrent version of ap or for IO Spawns thread for the right-hand action while executing the left-hand action in the current thread",
          "hierarchy": "Control Concurrent Spawn",
          "module": "Control.Concurrent.Spawn",
          "name": "(|*|) |*|",
          "normalized": "IO(a-\u003eb)-\u003eIO a-\u003eIO b",
          "package": "spawn",
          "signature": "IO(a-\u003eb)-\u003eIO a-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#v:-124--42--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a separate thread of IO for each element of a list, and\n collect results.\n\u003c/p\u003e\u003cp\u003eThe analogy to \u003ccode\u003eparMap\u003c/code\u003e is misleading.  The concurrent execution\n of these actions is non-deterministic and can affect results.\n However, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMapIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is expected to be most useful for actions\n which do not interact.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Spawn",
          "name": "parMapIO",
          "package": "spawn",
          "signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO [b]",
          "source": "src/Control-Concurrent-Spawn.html#parMapIO",
          "type": "function"
        },
        "index": {
          "description": "Execute separate thread of IO for each element of list and collect results The analogy to parMap is misleading The concurrent execution of these actions is non-deterministic and can affect results However parMapIO is expected to be most useful for actions which do not interact",
          "hierarchy": "Control Concurrent Spawn",
          "module": "Control.Concurrent.Spawn",
          "name": "parMapIO",
          "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]",
          "package": "spawn",
          "partial": "Map IO",
          "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#v:parMapIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a separate thread of IO for each element of a list.\n\u003c/p\u003e\u003cp\u003eResults are discarded, but the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMapIO_\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e action does not\n complete until all threads have finished.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Spawn",
          "name": "parMapIO_",
          "package": "spawn",
          "signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO ()",
          "source": "src/Control-Concurrent-Spawn.html#parMapIO_",
          "type": "function"
        },
        "index": {
          "description": "Execute separate thread of IO for each element of list Results are discarded but the parMapIO action does not complete until all threads have finished",
          "hierarchy": "Control Concurrent Spawn",
          "module": "Control.Concurrent.Spawn",
          "name": "parMapIO_",
          "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO()",
          "package": "spawn",
          "partial": "Map IO",
          "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#v:parMapIO_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven \u003cem\u003en\u003c/em\u003e, produces a function to wrap \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e actions.\n No more than \u003cem\u003en\u003c/em\u003e wrapped actions will be in progress at\n one time.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Spawn",
          "name": "pool",
          "package": "spawn",
          "signature": "Int -\u003e IO (IO a -\u003e IO a)",
          "source": "src/Control-Concurrent-Spawn.html#pool",
          "type": "function"
        },
        "index": {
          "description": "Given produces function to wrap IO actions No more than wrapped actions will be in progress at one time",
          "hierarchy": "Control Concurrent Spawn",
          "module": "Control.Concurrent.Spawn",
          "name": "pool",
          "normalized": "Int-\u003eIO(IO a-\u003eIO a)",
          "package": "spawn",
          "signature": "Int-\u003eIO(IO a-\u003eIO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#v:pool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a concurrent computation.  Produces an action which\n demands the result.  Any exception from the original computation\n is re-thrown when and where the result is demanded.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Spawn",
          "name": "spawn",
          "package": "spawn",
          "signature": "IO a -\u003e IO (IO a)",
          "source": "src/Control-Concurrent-Spawn.html#spawn",
          "type": "function"
        },
        "index": {
          "description": "Spawn concurrent computation Produces an action which demands the result Any exception from the original computation is re-thrown when and where the result is demanded",
          "hierarchy": "Control Concurrent Spawn",
          "module": "Control.Concurrent.Spawn",
          "name": "spawn",
          "normalized": "IO a-\u003eIO(IO a)",
          "package": "spawn",
          "signature": "IO a-\u003eIO(IO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a concurrent computation.  Produces an action which\n demands a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Spawn",
          "name": "spawnTry",
          "package": "spawn",
          "signature": "IO a -\u003e IO (IO (Result a))",
          "source": "src/Control-Concurrent-Spawn.html#spawnTry",
          "type": "function"
        },
        "index": {
          "description": "Spawn concurrent computation Produces an action which demands Result",
          "hierarchy": "Control Concurrent Spawn",
          "module": "Control.Concurrent.Spawn",
          "name": "spawnTry",
          "normalized": "IO a-\u003eIO(IO(Result a))",
          "package": "spawn",
          "partial": "Try",
          "signature": "IO a-\u003eIO(IO(Result a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spawn/docs/Control-Concurrent-Spawn.html#v:spawnTry"
      }
    }
  ]
]