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
        "word": "monad-loops-stm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Loops.STM",
          "name": "STM",
          "package": "monad-loops-stm",
          "source": "src/Control-Monad-Loops-STM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Loops STM",
          "module": "Control.Monad.Loops.STM",
          "name": "STM",
          "package": "monad-loops-stm",
          "partial": "STM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforever\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e rolled\n into one.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops.STM",
          "name": "atomLoop",
          "package": "monad-loops-stm",
          "signature": "STM a -\u003e IO ()",
          "source": "src/Control-Monad-Loops-STM.html#atomLoop",
          "type": "function"
        },
        "index": {
          "description": "forever and atomically rolled into one",
          "hierarchy": "Control Monad Loops STM",
          "module": "Control.Monad.Loops.STM",
          "name": "atomLoop",
          "normalized": "STM a-\u003eIO()",
          "package": "monad-loops-stm",
          "partial": "Loop",
          "signature": "STM a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#v:atomLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eatomLoop\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Loops.STM",
          "name": "forkAtomLoop",
          "package": "monad-loops-stm",
          "signature": "STM a -\u003e IO ThreadId",
          "source": "src/Control-Monad-Loops-STM.html#forkAtomLoop",
          "type": "function"
        },
        "index": {
          "description": "atomLoop with forkIO",
          "hierarchy": "Control Monad Loops STM",
          "module": "Control.Monad.Loops.STM",
          "name": "forkAtomLoop",
          "normalized": "STM a-\u003eIO ThreadId",
          "package": "monad-loops-stm",
          "partial": "Atom Loop",
          "signature": "STM a-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#v:forkAtomLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e until the given condition is true of\n the given value.  Then return the value that satisfied the condition.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops.STM",
          "name": "waitFor",
          "package": "monad-loops-stm",
          "signature": "(a -\u003e Bool) -\u003e STM a -\u003e STM a",
          "source": "src/Control-Monad-Loops-STM.html#waitFor",
          "type": "function"
        },
        "index": {
          "description": "retry until the given condition is true of the given value Then return the value that satisfied the condition",
          "hierarchy": "Control Monad Loops STM",
          "module": "Control.Monad.Loops.STM",
          "name": "waitFor",
          "normalized": "(a-\u003eBool)-\u003eSTM a-\u003eSTM a",
          "package": "monad-loops-stm",
          "partial": "For",
          "signature": "(a-\u003eBool)-\u003eSTM a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#v:waitFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewaitFor\u003c/a\u003e\u003c/code\u003e a value satisfying a condition to come out of a\n \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e, reading and discarding everything else.\n Returns the winner.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops.STM",
          "name": "waitForEvent",
          "package": "monad-loops-stm",
          "signature": "(a -\u003e Bool) -\u003e TChan a -\u003e STM a",
          "source": "src/Control-Monad-Loops-STM.html#waitForEvent",
          "type": "function"
        },
        "index": {
          "description": "waitFor value satisfying condition to come out of TChan reading and discarding everything else Returns the winner",
          "hierarchy": "Control Monad Loops STM",
          "module": "Control.Monad.Loops.STM",
          "name": "waitForEvent",
          "normalized": "(a-\u003eBool)-\u003eTChan a-\u003eSTM a",
          "package": "monad-loops-stm",
          "partial": "For Event",
          "signature": "(a-\u003eBool)-\u003eTChan a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#v:waitForEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e until the given value is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e _, returning\n the contained value.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops.STM",
          "name": "waitForJust",
          "package": "monad-loops-stm",
          "signature": "STM (Maybe a) -\u003e STM a",
          "source": "src/Control-Monad-Loops-STM.html#waitForJust",
          "type": "function"
        },
        "index": {
          "description": "retry until the given value is Just returning the contained value",
          "hierarchy": "Control Monad Loops STM",
          "module": "Control.Monad.Loops.STM",
          "name": "waitForJust",
          "normalized": "STM(Maybe a)-\u003eSTM a",
          "package": "monad-loops-stm",
          "partial": "For Just",
          "signature": "STM(Maybe a)-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#v:waitForJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e until the given value is True.\n\u003c/p\u003e",
          "module": "Control.Monad.Loops.STM",
          "name": "waitForTrue",
          "package": "monad-loops-stm",
          "signature": "STM Bool -\u003e STM ()",
          "source": "src/Control-Monad-Loops-STM.html#waitForTrue",
          "type": "function"
        },
        "index": {
          "description": "retry until the given value is True",
          "hierarchy": "Control Monad Loops STM",
          "module": "Control.Monad.Loops.STM",
          "name": "waitForTrue",
          "normalized": "STM Bool-\u003eSTM()",
          "package": "monad-loops-stm",
          "partial": "For True",
          "signature": "STM Bool-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#v:waitForTrue"
      }
    }
  ]
]