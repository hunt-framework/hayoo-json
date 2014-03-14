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
        "word": "rwlock"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of a multiple-reader / single-writer lock, using\n \u003ca\u003eControl.Concurrent.STM\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.RWLock",
          "name": "RWLock",
          "package": "rwlock",
          "source": "src/Control-Concurrent-RWLock.html",
          "type": "module"
        },
        "index": {
          "description": "simple implementation of multiple-reader single-writer lock using Control.Concurrent.STM",
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "RWLock",
          "package": "rwlock",
          "partial": "RWLock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "RWLock",
          "package": "rwlock",
          "source": "src/Control-Concurrent-RWLock.html#RWLock",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "RWLock",
          "package": "rwlock",
          "partial": "RWLock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#t:RWLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type representing the state of a lock: available, in use by a certain\n number of readers, or in use by a writer.\n\u003c/p\u003e",
          "module": "Control.Concurrent.RWLock",
          "name": "RWLockState",
          "package": "rwlock",
          "source": "src/Control-Concurrent-RWLock.html#RWLockState",
          "type": "data"
        },
        "index": {
          "description": "type representing the state of lock available in use by certain number of readers or in use by writer",
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "RWLockState",
          "package": "rwlock",
          "partial": "RWLock State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#t:RWLockState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "Open",
          "package": "rwlock",
          "signature": "Open",
          "source": "src/Control-Concurrent-RWLock.html#RWLockState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "Open",
          "package": "rwlock",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "Readers",
          "package": "rwlock",
          "signature": "Readers Int",
          "source": "src/Control-Concurrent-RWLock.html#RWLockState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "Readers",
          "package": "rwlock",
          "partial": "Readers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:Readers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "Writing",
          "package": "rwlock",
          "signature": "Writing",
          "source": "src/Control-Concurrent-RWLock.html#RWLockState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "Writing",
          "package": "rwlock",
          "partial": "Writing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:Writing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "newRWLock",
          "package": "rwlock",
          "signature": "STM RWLock",
          "source": "src/Control-Concurrent-RWLock.html#newRWLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "newRWLock",
          "package": "rwlock",
          "partial": "RWLock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:newRWLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "newRWLockIO",
          "package": "rwlock",
          "signature": "IO RWLock",
          "source": "src/Control-Concurrent-RWLock.html#newRWLockIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "newRWLockIO",
          "package": "rwlock",
          "partial": "RWLock IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:newRWLockIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "putReadLock",
          "package": "rwlock",
          "signature": "RWLock -\u003e STM ()",
          "source": "src/Control-Concurrent-RWLock.html#putReadLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "putReadLock",
          "normalized": "RWLock-\u003eSTM()",
          "package": "rwlock",
          "partial": "Read Lock",
          "signature": "RWLock-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:putReadLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "putReadLockIO",
          "package": "rwlock",
          "signature": "RWLock -\u003e IO ()",
          "source": "src/Control-Concurrent-RWLock.html#putReadLockIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "putReadLockIO",
          "normalized": "RWLock-\u003eIO()",
          "package": "rwlock",
          "partial": "Read Lock IO",
          "signature": "RWLock-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:putReadLockIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "putWriteLock",
          "package": "rwlock",
          "signature": "RWLock -\u003e STM ()",
          "source": "src/Control-Concurrent-RWLock.html#putWriteLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "putWriteLock",
          "normalized": "RWLock-\u003eSTM()",
          "package": "rwlock",
          "partial": "Write Lock",
          "signature": "RWLock-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:putWriteLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "putWriteLockIO",
          "package": "rwlock",
          "signature": "RWLock -\u003e IO ()",
          "source": "src/Control-Concurrent-RWLock.html#putWriteLockIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "putWriteLockIO",
          "normalized": "RWLock-\u003eIO()",
          "package": "rwlock",
          "partial": "Write Lock IO",
          "signature": "RWLock-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:putWriteLockIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "readRWLock",
          "package": "rwlock",
          "signature": "RWLock -\u003e STM RWLockState",
          "source": "src/Control-Concurrent-RWLock.html#readRWLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "readRWLock",
          "normalized": "RWLock-\u003eSTM RWLockState",
          "package": "rwlock",
          "partial": "RWLock",
          "signature": "RWLock-\u003eSTM RWLockState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:readRWLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "readRWLockIO",
          "package": "rwlock",
          "signature": "RWLock -\u003e IO RWLockState",
          "source": "src/Control-Concurrent-RWLock.html#readRWLockIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "readRWLockIO",
          "normalized": "RWLock-\u003eIO RWLockState",
          "package": "rwlock",
          "partial": "RWLock IO",
          "signature": "RWLock-\u003eIO RWLockState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:readRWLockIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "takeReadLock",
          "package": "rwlock",
          "signature": "RWLock -\u003e STM ()",
          "source": "src/Control-Concurrent-RWLock.html#takeReadLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "takeReadLock",
          "normalized": "RWLock-\u003eSTM()",
          "package": "rwlock",
          "partial": "Read Lock",
          "signature": "RWLock-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:takeReadLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "takeReadLockIO",
          "package": "rwlock",
          "signature": "RWLock -\u003e IO ()",
          "source": "src/Control-Concurrent-RWLock.html#takeReadLockIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "takeReadLockIO",
          "normalized": "RWLock-\u003eIO()",
          "package": "rwlock",
          "partial": "Read Lock IO",
          "signature": "RWLock-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:takeReadLockIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "takeWriteLock",
          "package": "rwlock",
          "signature": "RWLock -\u003e STM ()",
          "source": "src/Control-Concurrent-RWLock.html#takeWriteLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "takeWriteLock",
          "normalized": "RWLock-\u003eSTM()",
          "package": "rwlock",
          "partial": "Write Lock",
          "signature": "RWLock-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:takeWriteLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "takeWriteLockIO",
          "package": "rwlock",
          "signature": "RWLock -\u003e IO ()",
          "source": "src/Control-Concurrent-RWLock.html#takeWriteLockIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "takeWriteLockIO",
          "normalized": "RWLock-\u003eIO()",
          "package": "rwlock",
          "partial": "Write Lock IO",
          "signature": "RWLock-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:takeWriteLockIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "tryPutReadLock",
          "package": "rwlock",
          "signature": "RWLock -\u003e STM Bool",
          "source": "src/Control-Concurrent-RWLock.html#tryPutReadLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "tryPutReadLock",
          "normalized": "RWLock-\u003eSTM Bool",
          "package": "rwlock",
          "partial": "Put Read Lock",
          "signature": "RWLock-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:tryPutReadLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "tryPutReadLockIO",
          "package": "rwlock",
          "signature": "RWLock -\u003e IO Bool",
          "source": "src/Control-Concurrent-RWLock.html#tryPutReadLockIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "tryPutReadLockIO",
          "normalized": "RWLock-\u003eIO Bool",
          "package": "rwlock",
          "partial": "Put Read Lock IO",
          "signature": "RWLock-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:tryPutReadLockIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "tryPutWriteLock",
          "package": "rwlock",
          "signature": "RWLock -\u003e STM Bool",
          "source": "src/Control-Concurrent-RWLock.html#tryPutWriteLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "tryPutWriteLock",
          "normalized": "RWLock-\u003eSTM Bool",
          "package": "rwlock",
          "partial": "Put Write Lock",
          "signature": "RWLock-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:tryPutWriteLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "tryPutWriteLockIO",
          "package": "rwlock",
          "signature": "RWLock -\u003e IO Bool",
          "source": "src/Control-Concurrent-RWLock.html#tryPutWriteLockIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "tryPutWriteLockIO",
          "normalized": "RWLock-\u003eIO Bool",
          "package": "rwlock",
          "partial": "Put Write Lock IO",
          "signature": "RWLock-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:tryPutWriteLockIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "tryTakeReadLock",
          "package": "rwlock",
          "signature": "RWLock -\u003e STM Bool",
          "source": "src/Control-Concurrent-RWLock.html#tryTakeReadLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "tryTakeReadLock",
          "normalized": "RWLock-\u003eSTM Bool",
          "package": "rwlock",
          "partial": "Take Read Lock",
          "signature": "RWLock-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:tryTakeReadLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "tryTakeReadLockIO",
          "package": "rwlock",
          "signature": "RWLock -\u003e IO Bool",
          "source": "src/Control-Concurrent-RWLock.html#tryTakeReadLockIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "tryTakeReadLockIO",
          "normalized": "RWLock-\u003eIO Bool",
          "package": "rwlock",
          "partial": "Take Read Lock IO",
          "signature": "RWLock-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:tryTakeReadLockIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "tryTakeWriteLock",
          "package": "rwlock",
          "signature": "RWLock -\u003e STM Bool",
          "source": "src/Control-Concurrent-RWLock.html#tryTakeWriteLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "tryTakeWriteLock",
          "normalized": "RWLock-\u003eSTM Bool",
          "package": "rwlock",
          "partial": "Take Write Lock",
          "signature": "RWLock-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:tryTakeWriteLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.RWLock",
          "name": "tryTakeWriteLockIO",
          "package": "rwlock",
          "signature": "RWLock -\u003e IO Bool",
          "source": "src/Control-Concurrent-RWLock.html#tryTakeWriteLockIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "tryTakeWriteLockIO",
          "normalized": "RWLock-\u003eIO Bool",
          "package": "rwlock",
          "partial": "Take Write Lock IO",
          "signature": "RWLock-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:tryTakeWriteLockIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcquire a lock in read mode, try to execute some action, and release the lock.\n\u003c/p\u003e",
          "module": "Control.Concurrent.RWLock",
          "name": "withReadLock",
          "package": "rwlock",
          "signature": "RWLock -\u003e IO a -\u003e IO a",
          "source": "src/Control-Concurrent-RWLock.html#withReadLock",
          "type": "function"
        },
        "index": {
          "description": "Acquire lock in read mode try to execute some action and release the lock",
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "withReadLock",
          "normalized": "RWLock-\u003eIO a-\u003eIO a",
          "package": "rwlock",
          "partial": "Read Lock",
          "signature": "RWLock-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:withReadLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcquire a lock in write mode, try to execute some action, and release the lock.\n\u003c/p\u003e",
          "module": "Control.Concurrent.RWLock",
          "name": "withWriteLock",
          "package": "rwlock",
          "signature": "RWLock -\u003e IO a -\u003e IO a",
          "source": "src/Control-Concurrent-RWLock.html#withWriteLock",
          "type": "function"
        },
        "index": {
          "description": "Acquire lock in write mode try to execute some action and release the lock",
          "hierarchy": "Control Concurrent RWLock",
          "module": "Control.Concurrent.RWLock",
          "name": "withWriteLock",
          "normalized": "RWLock-\u003eIO a-\u003eIO a",
          "package": "rwlock",
          "partial": "Write Lock",
          "signature": "RWLock-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rwlock/docs/Control-Concurrent-RWLock.html#v:withWriteLock"
      }
    }
  ]
]