[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#",
      "description": {
        "fct-module": "Control.Monad.Loops.STM",
        "fct-package": "monad-loops-stm",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Loops-STM.html",
        "fct-type": "module",
        "title": "STM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Loops STM",
        "module": "Control.Monad.Loops.STM",
        "name": "STM",
        "normalized": "",
        "package": "monad-loops-stm",
        "partial": "STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#v:atomLoop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforever\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e rolled\n into one.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Loops.STM",
        "fct-package": "monad-loops-stm",
        "fct-signature": "STM a -\u003e IO ()",
        "fct-source": "src/Control-Monad-Loops-STM.html#atomLoop",
        "fct-type": "function",
        "title": "atomLoop"
      },
      "index": {
        "description": "forever and atomically rolled into one",
        "hierarchy": "Control Monad Loops STM",
        "module": "Control.Monad.Loops.STM",
        "name": "atomLoop",
        "normalized": "STM a-\u003eIO()",
        "package": "monad-loops-stm",
        "partial": "Loop",
        "signature": "STM a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#v:forkAtomLoop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eatomLoop\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Loops.STM",
        "fct-package": "monad-loops-stm",
        "fct-signature": "STM a -\u003e IO ThreadId",
        "fct-source": "src/Control-Monad-Loops-STM.html#forkAtomLoop",
        "fct-type": "function",
        "title": "forkAtomLoop"
      },
      "index": {
        "description": "atomLoop with forkIO",
        "hierarchy": "Control Monad Loops STM",
        "module": "Control.Monad.Loops.STM",
        "name": "forkAtomLoop",
        "normalized": "STM a-\u003eIO ThreadId",
        "package": "monad-loops-stm",
        "partial": "Atom Loop",
        "signature": "STM a-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#v:waitFor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e until the given condition is true of\n the given value.  Then return the value that satisfied the condition.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Loops.STM",
        "fct-package": "monad-loops-stm",
        "fct-signature": "(a -\u003e Bool) -\u003e STM a -\u003e STM a",
        "fct-source": "src/Control-Monad-Loops-STM.html#waitFor",
        "fct-type": "function",
        "title": "waitFor"
      },
      "index": {
        "description": "retry until the given condition is true of the given value Then return the value that satisfied the condition",
        "hierarchy": "Control Monad Loops STM",
        "module": "Control.Monad.Loops.STM",
        "name": "waitFor",
        "normalized": "(a-\u003eBool)-\u003eSTM a-\u003eSTM a",
        "package": "monad-loops-stm",
        "partial": "For",
        "signature": "(a-\u003eBool)-\u003eSTM a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#v:waitForEvent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewaitFor\u003c/a\u003e\u003c/code\u003e a value satisfying a condition to come out of a\n \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e, reading and discarding everything else.\n Returns the winner.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Loops.STM",
        "fct-package": "monad-loops-stm",
        "fct-signature": "(a -\u003e Bool) -\u003e TChan a -\u003e STM a",
        "fct-source": "src/Control-Monad-Loops-STM.html#waitForEvent",
        "fct-type": "function",
        "title": "waitForEvent"
      },
      "index": {
        "description": "waitFor value satisfying condition to come out of TChan reading and discarding everything else Returns the winner",
        "hierarchy": "Control Monad Loops STM",
        "module": "Control.Monad.Loops.STM",
        "name": "waitForEvent",
        "normalized": "(a-\u003eBool)-\u003eTChan a-\u003eSTM a",
        "package": "monad-loops-stm",
        "partial": "For Event",
        "signature": "(a-\u003eBool)-\u003eTChan a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#v:waitForJust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e until the given value is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e _, returning\n the contained value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Loops.STM",
        "fct-package": "monad-loops-stm",
        "fct-signature": "STM (Maybe a) -\u003e STM a",
        "fct-source": "src/Control-Monad-Loops-STM.html#waitForJust",
        "fct-type": "function",
        "title": "waitForJust"
      },
      "index": {
        "description": "retry until the given value is Just returning the contained value",
        "hierarchy": "Control Monad Loops STM",
        "module": "Control.Monad.Loops.STM",
        "name": "waitForJust",
        "normalized": "STM(Maybe a)-\u003eSTM a",
        "package": "monad-loops-stm",
        "partial": "For Just",
        "signature": "STM(Maybe a)-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-loops-stm/docs/Control-Monad-Loops-STM.html#v:waitForTrue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e until the given value is True.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Loops.STM",
        "fct-package": "monad-loops-stm",
        "fct-signature": "STM Bool -\u003e STM ()",
        "fct-source": "src/Control-Monad-Loops-STM.html#waitForTrue",
        "fct-type": "function",
        "title": "waitForTrue"
      },
      "index": {
        "description": "retry until the given value is True",
        "hierarchy": "Control Monad Loops STM",
        "module": "Control.Monad.Loops.STM",
        "name": "waitForTrue",
        "normalized": "STM Bool-\u003eSTM()",
        "package": "monad-loops-stm",
        "partial": "For True",
        "signature": "STM Bool-\u003eSTM()"
      }
    }
  }
]