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
        "word": "iteratee-stm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.STM",
          "name": "STM",
          "package": "iteratee-stm",
          "source": "src/Data-Iteratee-STM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Iteratee STM",
          "module": "Data.Iteratee.STM",
          "name": "STM",
          "package": "iteratee-stm",
          "partial": "STM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate over data provided by a TBMChan.\n\u003c/p\u003e",
          "module": "Data.Iteratee.STM",
          "name": "enumChan",
          "package": "iteratee-stm",
          "signature": "TBMChan s -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-STM.html#enumChan",
          "type": "function"
        },
        "index": {
          "description": "Enumerate over data provided by TBMChan",
          "hierarchy": "Data Iteratee STM",
          "module": "Data.Iteratee.STM",
          "name": "enumChan",
          "normalized": "TBMChan a-\u003eEnumerator a b c",
          "package": "iteratee-stm",
          "partial": "Chan",
          "signature": "TBMChan s-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#v:enumChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumerator which closes the provided channel and sends EOF to the iteratee.\n\u003c/p\u003e",
          "module": "Data.Iteratee.STM",
          "name": "enumCloseChan",
          "package": "iteratee-stm",
          "signature": "TBMChan s -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-STM.html#enumCloseChan",
          "type": "function"
        },
        "index": {
          "description": "An enumerator which closes the provided channel and sends EOF to the iteratee",
          "hierarchy": "Data Iteratee STM",
          "module": "Data.Iteratee.STM",
          "name": "enumCloseChan",
          "normalized": "TBMChan a-\u003eEnumerator a b c",
          "package": "iteratee-stm",
          "partial": "Close Chan",
          "signature": "TBMChan s-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#v:enumCloseChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork an enumerator to run in a separate thread, with a \u003ccode\u003esz\u003c/code\u003e upper bound on the\n channel size.\n\u003c/p\u003e\u003cp\u003eThe current thread will wait for the forked thread to terminate\n\u003c/p\u003e",
          "module": "Data.Iteratee.STM",
          "name": "forkEnum",
          "package": "iteratee-stm",
          "signature": "Int -\u003e Enumerator s IO () -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-STM.html#forkEnum",
          "type": "function"
        },
        "index": {
          "description": "Fork an enumerator to run in separate thread with sz upper bound on the channel size The current thread will wait for the forked thread to terminate",
          "hierarchy": "Data Iteratee STM",
          "module": "Data.Iteratee.STM",
          "name": "forkEnum",
          "normalized": "Int-\u003eEnumerator a IO()-\u003eEnumerator a b c",
          "package": "iteratee-stm",
          "partial": "Enum",
          "signature": "Int-\u003eEnumerator s IO()-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#v:forkEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork an iteratee to run in a separate thread, with a \u003ccode\u003esz\u003c/code\u003e upper bound on the\n channel size.\n\u003c/p\u003e\u003cp\u003eThe current thread will wait for the forked thread to finish before returning.\n\u003c/p\u003e",
          "module": "Data.Iteratee.STM",
          "name": "forkIter",
          "package": "iteratee-stm",
          "signature": "Int -\u003e Iteratee s IO () -\u003e Iteratee s m ()",
          "source": "src/Data-Iteratee-STM.html#forkIter",
          "type": "function"
        },
        "index": {
          "description": "Fork an iteratee to run in separate thread with sz upper bound on the channel size The current thread will wait for the forked thread to finish before returning",
          "hierarchy": "Data Iteratee STM",
          "module": "Data.Iteratee.STM",
          "name": "forkIter",
          "normalized": "Int-\u003eIteratee a IO()-\u003eIteratee a b()",
          "package": "iteratee-stm",
          "partial": "Iter",
          "signature": "Int-\u003eIteratee s IO()-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#v:forkIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iteratee which writes all its data to a TBMChan.\n\u003c/p\u003e\u003cp\u003eThe iteratee moves to a complete state when the channel is closed.\n\u003c/p\u003e",
          "module": "Data.Iteratee.STM",
          "name": "iterChan",
          "package": "iteratee-stm",
          "signature": "TBMChan s -\u003e Iteratee s m ()",
          "source": "src/Data-Iteratee-STM.html#iterChan",
          "type": "function"
        },
        "index": {
          "description": "An iteratee which writes all its data to TBMChan The iteratee moves to complete state when the channel is closed",
          "hierarchy": "Data Iteratee STM",
          "module": "Data.Iteratee.STM",
          "name": "iterChan",
          "normalized": "TBMChan a-\u003eIteratee a b()",
          "package": "iteratee-stm",
          "partial": "Chan",
          "signature": "TBMChan s-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#v:iterChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a channel.\n\u003c/p\u003e",
          "module": "Data.Iteratee.STM",
          "name": "iterCloseChan",
          "package": "iteratee-stm",
          "signature": "TBMChan s -\u003e Iteratee s m ()",
          "source": "src/Data-Iteratee-STM.html#iterCloseChan",
          "type": "function"
        },
        "index": {
          "description": "Close channel",
          "hierarchy": "Data Iteratee STM",
          "module": "Data.Iteratee.STM",
          "name": "iterCloseChan",
          "normalized": "TBMChan a-\u003eIteratee a b()",
          "package": "iteratee-stm",
          "partial": "Close Chan",
          "signature": "TBMChan s-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-stm/docs/Data-Iteratee-STM.html#v:iterCloseChan"
      }
    }
  ]
]