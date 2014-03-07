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
        "word": "posix-filelock"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.FileLock",
          "name": "FileLock",
          "package": "posix-filelock",
          "source": "src/System-Posix-FileLock.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Posix FileLock",
          "module": "System.Posix.FileLock",
          "name": "FileLock",
          "package": "posix-filelock",
          "partial": "File Lock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/posix-filelock/docs/System-Posix-FileLock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.FileLock",
          "name": "FileLock",
          "package": "posix-filelock",
          "source": "src/System-Posix-FileLock.html#FileLock",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix FileLock",
          "module": "System.Posix.FileLock",
          "name": "FileLock",
          "package": "posix-filelock",
          "partial": "File Lock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/posix-filelock/docs/System-Posix-FileLock.html#t:FileLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.FileLock",
          "name": "LockType",
          "package": "posix-filelock",
          "source": "src/System-Posix-FileLock.html#LockType",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix FileLock",
          "module": "System.Posix.FileLock",
          "name": "LockType",
          "package": "posix-filelock",
          "partial": "Lock Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/posix-filelock/docs/System-Posix-FileLock.html#t:LockType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.FileLock",
          "name": "ReadLock",
          "package": "posix-filelock",
          "signature": "ReadLock",
          "source": "src/System-Posix-FileLock.html#LockType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix FileLock",
          "module": "System.Posix.FileLock",
          "name": "ReadLock",
          "package": "posix-filelock",
          "partial": "Read Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-filelock/docs/System-Posix-FileLock.html#v:ReadLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.FileLock",
          "name": "WriteLock",
          "package": "posix-filelock",
          "signature": "WriteLock",
          "source": "src/System-Posix-FileLock.html#LockType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix FileLock",
          "module": "System.Posix.FileLock",
          "name": "WriteLock",
          "package": "posix-filelock",
          "partial": "Write Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-filelock/docs/System-Posix-FileLock.html#v:WriteLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a lock of the given type on the given path\n\u003c/p\u003e",
          "module": "System.Posix.FileLock",
          "name": "lock",
          "package": "posix-filelock",
          "signature": "FilePath -\u003e LockType -\u003e m FileLock",
          "source": "src/System-Posix-FileLock.html#lock",
          "type": "function"
        },
        "index": {
          "description": "Get lock of the given type on the given path",
          "hierarchy": "System Posix FileLock",
          "module": "System.Posix.FileLock",
          "name": "lock",
          "normalized": "FilePath-\u003eLockType-\u003ea FileLock",
          "package": "posix-filelock",
          "signature": "FilePath-\u003eLockType-\u003em FileLock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-filelock/docs/System-Posix-FileLock.html#v:lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease a lock\n\u003c/p\u003e",
          "module": "System.Posix.FileLock",
          "name": "unlock",
          "package": "posix-filelock",
          "signature": "FileLock -\u003e m ()",
          "source": "src/System-Posix-FileLock.html#unlock",
          "type": "function"
        },
        "index": {
          "description": "Release lock",
          "hierarchy": "System Posix FileLock",
          "module": "System.Posix.FileLock",
          "name": "unlock",
          "normalized": "FileLock-\u003ea()",
          "package": "posix-filelock",
          "signature": "FileLock-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-filelock/docs/System-Posix-FileLock.html#v:unlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the lock, executes the IO action, and then releases the lock.\n   Releases the lock even if an exception occurs.\n\u003c/p\u003e",
          "module": "System.Posix.FileLock",
          "name": "withLock",
          "package": "posix-filelock",
          "signature": "FilePath -\u003e LockType -\u003e IO a -\u003e m a",
          "source": "src/System-Posix-FileLock.html#withLock",
          "type": "function"
        },
        "index": {
          "description": "Gets the lock executes the IO action and then releases the lock Releases the lock even if an exception occurs",
          "hierarchy": "System Posix FileLock",
          "module": "System.Posix.FileLock",
          "name": "withLock",
          "normalized": "FilePath-\u003eLockType-\u003eIO a-\u003eb a",
          "package": "posix-filelock",
          "partial": "Lock",
          "signature": "FilePath-\u003eLockType-\u003eIO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-filelock/docs/System-Posix-FileLock.html#v:withLock"
      }
    }
  ]
]