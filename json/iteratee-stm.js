[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#",
      "description": {
        "fct-module": "Data.Iteratee.STM",
        "fct-package": "iteratee-stm",
        "fct-signature": "module",
        "fct-source": "src/Data-Iteratee-STM.html",
        "fct-type": "module",
        "title": "STM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Iteratee STM",
        "module": "Data.Iteratee.STM",
        "name": "STM",
        "normalized": "",
        "package": "iteratee-stm",
        "partial": "STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#v:enumChan",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate over data provided by a TBMChan.\n\u003c/p\u003e",
        "fct-module": "Data.Iteratee.STM",
        "fct-package": "iteratee-stm",
        "fct-signature": "TBMChan s -\u003e Enumerator s m a",
        "fct-source": "src/Data-Iteratee-STM.html#enumChan",
        "fct-type": "function",
        "title": "enumChan"
      },
      "index": {
        "description": "Enumerate over data provided by TBMChan",
        "hierarchy": "Data Iteratee STM",
        "module": "Data.Iteratee.STM",
        "name": "enumChan",
        "normalized": "TBMChan a-\u003eEnumerator a b c",
        "package": "iteratee-stm",
        "partial": "Chan",
        "signature": "TBMChan s-\u003eEnumerator s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#v:enumCloseChan",
      "description": {
        "fct-descr": "\u003cp\u003eAn enumerator which closes the provided channel and sends EOF to the iteratee.\n\u003c/p\u003e",
        "fct-module": "Data.Iteratee.STM",
        "fct-package": "iteratee-stm",
        "fct-signature": "TBMChan s -\u003e Enumerator s m a",
        "fct-source": "src/Data-Iteratee-STM.html#enumCloseChan",
        "fct-type": "function",
        "title": "enumCloseChan"
      },
      "index": {
        "description": "An enumerator which closes the provided channel and sends EOF to the iteratee",
        "hierarchy": "Data Iteratee STM",
        "module": "Data.Iteratee.STM",
        "name": "enumCloseChan",
        "normalized": "TBMChan a-\u003eEnumerator a b c",
        "package": "iteratee-stm",
        "partial": "Close Chan",
        "signature": "TBMChan s-\u003eEnumerator s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#v:forkEnum",
      "description": {
        "fct-descr": "\u003cp\u003eFork an enumerator to run in a separate thread, with a \u003ccode\u003esz\u003c/code\u003e upper bound on the\n channel size.\n\u003c/p\u003e\u003cp\u003eThe current thread will wait for the forked thread to terminate\n\u003c/p\u003e",
        "fct-module": "Data.Iteratee.STM",
        "fct-package": "iteratee-stm",
        "fct-signature": "Int -\u003e Enumerator s IO () -\u003e Enumerator s m a",
        "fct-source": "src/Data-Iteratee-STM.html#forkEnum",
        "fct-type": "function",
        "title": "forkEnum"
      },
      "index": {
        "description": "Fork an enumerator to run in separate thread with sz upper bound on the channel size The current thread will wait for the forked thread to terminate",
        "hierarchy": "Data Iteratee STM",
        "module": "Data.Iteratee.STM",
        "name": "forkEnum",
        "normalized": "Int-\u003eEnumerator a IO()-\u003eEnumerator a b c",
        "package": "iteratee-stm",
        "partial": "Enum",
        "signature": "Int-\u003eEnumerator s IO()-\u003eEnumerator s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#v:forkIter",
      "description": {
        "fct-descr": "\u003cp\u003eFork an iteratee to run in a separate thread, with a \u003ccode\u003esz\u003c/code\u003e upper bound on the\n channel size.\n\u003c/p\u003e\u003cp\u003eThe current thread will wait for the forked thread to finish before returning.\n\u003c/p\u003e",
        "fct-module": "Data.Iteratee.STM",
        "fct-package": "iteratee-stm",
        "fct-signature": "Int -\u003e Iteratee s IO () -\u003e Iteratee s m ()",
        "fct-source": "src/Data-Iteratee-STM.html#forkIter",
        "fct-type": "function",
        "title": "forkIter"
      },
      "index": {
        "description": "Fork an iteratee to run in separate thread with sz upper bound on the channel size The current thread will wait for the forked thread to finish before returning",
        "hierarchy": "Data Iteratee STM",
        "module": "Data.Iteratee.STM",
        "name": "forkIter",
        "normalized": "Int-\u003eIteratee a IO()-\u003eIteratee a b()",
        "package": "iteratee-stm",
        "partial": "Iter",
        "signature": "Int-\u003eIteratee s IO()-\u003eIteratee s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#v:iterChan",
      "description": {
        "fct-descr": "\u003cp\u003eAn iteratee which writes all its data to a TBMChan.\n\u003c/p\u003e\u003cp\u003eThe iteratee moves to a complete state when the channel is closed.\n\u003c/p\u003e",
        "fct-module": "Data.Iteratee.STM",
        "fct-package": "iteratee-stm",
        "fct-signature": "TBMChan s -\u003e Iteratee s m ()",
        "fct-source": "src/Data-Iteratee-STM.html#iterChan",
        "fct-type": "function",
        "title": "iterChan"
      },
      "index": {
        "description": "An iteratee which writes all its data to TBMChan The iteratee moves to complete state when the channel is closed",
        "hierarchy": "Data Iteratee STM",
        "module": "Data.Iteratee.STM",
        "name": "iterChan",
        "normalized": "TBMChan a-\u003eIteratee a b()",
        "package": "iteratee-stm",
        "partial": "Chan",
        "signature": "TBMChan s-\u003eIteratee s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#v:iterCloseChan",
      "description": {
        "fct-descr": "\u003cp\u003eClose a channel.\n\u003c/p\u003e",
        "fct-module": "Data.Iteratee.STM",
        "fct-package": "iteratee-stm",
        "fct-signature": "TBMChan s -\u003e Iteratee s m ()",
        "fct-source": "src/Data-Iteratee-STM.html#iterCloseChan",
        "fct-type": "function",
        "title": "iterCloseChan"
      },
      "index": {
        "description": "Close channel",
        "hierarchy": "Data Iteratee STM",
        "module": "Data.Iteratee.STM",
        "name": "iterCloseChan",
        "normalized": "TBMChan a-\u003eIteratee a b()",
        "package": "iteratee-stm",
        "partial": "Close Chan",
        "signature": "TBMChan s-\u003eIteratee s m()"
      }
    }
  }
]