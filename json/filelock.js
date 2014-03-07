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
        "word": "filelock"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a portable interface to file locks as a mechanism for\n inter-process synchronization.\n\u003c/p\u003e\u003cp\u003eEach file lock is associated with a file. When taking a lock, the assiciated\n file is created if it's not present, then the file is locked in an\n OS-dependent way. While the lock is being held, no other process or\n thread can take it, unless the specified \u003ccode\u003e\u003ca\u003eSharedExclusive\u003c/a\u003e\u003c/code\u003e values\n allow it.\n\u003c/p\u003e\u003cp\u003eAll locks held by a process are released when the process exits. They can\n also be explicitly released using \u003ccode\u003e\u003ca\u003eunlockFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is not recommended to open or otherwise use lock files for other\n purposes, because it tends to expose differences between operating systems.\n For example, on Windows \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e for a lock file will fail when\n the lock is held, but on Unix it won't.\n\u003c/p\u003e\u003cp\u003eNote on the implementation: currently the module uses flock(2) on non-Windows\n platforms, and LockFileEx on Windows.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.FileLock",
          "name": "FileLock",
          "package": "filelock",
          "source": "src/System-FileLock.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides portable interface to file locks as mechanism for inter-process synchronization Each file lock is associated with file When taking lock the assiciated file is created if it not present then the file is locked in an OS-dependent way While the lock is being held no other process or thread can take it unless the specified SharedExclusive values allow it All locks held by process are released when the process exits They can also be explicitly released using unlockFile It is not recommended to open or otherwise use lock files for other purposes because it tends to expose differences between operating systems For example on Windows openFile for lock file will fail when the lock is held but on Unix it won Note on the implementation currently the module uses flock on non-Windows platforms and LockFileEx on Windows",
          "hierarchy": "System FileLock",
          "module": "System.FileLock",
          "name": "FileLock",
          "package": "filelock",
          "partial": "File Lock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA token that represents ownership of a lock.\n\u003c/p\u003e",
          "module": "System.FileLock",
          "name": "FileLock",
          "package": "filelock",
          "source": "src/System-FileLock.html#FileLock",
          "type": "data"
        },
        "index": {
          "description": "token that represents ownership of lock",
          "hierarchy": "System FileLock",
          "module": "System.FileLock",
          "name": "FileLock",
          "package": "filelock",
          "partial": "File Lock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#t:FileLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of lock to be taken.\n\u003c/p\u003e",
          "module": "System.FileLock",
          "name": "SharedExclusive",
          "package": "filelock",
          "source": "src/System-FileLock.html#SharedExclusive",
          "type": "data"
        },
        "index": {
          "description": "type of lock to be taken",
          "hierarchy": "System FileLock",
          "module": "System.FileLock",
          "name": "SharedExclusive",
          "package": "filelock",
          "partial": "Shared Exclusive",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#t:SharedExclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo other process can hold a lock, shared or exclusive.\n\u003c/p\u003e",
          "module": "System.FileLock",
          "name": "Exclusive",
          "package": "filelock",
          "signature": "Exclusive",
          "source": "src/System-FileLock.html#SharedExclusive",
          "type": "function"
        },
        "index": {
          "description": "No other process can hold lock shared or exclusive",
          "hierarchy": "System FileLock",
          "module": "System.FileLock",
          "name": "Exclusive",
          "package": "filelock",
          "partial": "Exclusive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#v:Exclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther process can hold a shared lock at the same time.\n\u003c/p\u003e",
          "module": "System.FileLock",
          "name": "Shared",
          "package": "filelock",
          "signature": "Shared",
          "source": "src/System-FileLock.html#SharedExclusive",
          "type": "function"
        },
        "index": {
          "description": "Other process can hold shared lock at the same time",
          "hierarchy": "System FileLock",
          "module": "System.FileLock",
          "name": "Shared",
          "package": "filelock",
          "partial": "Shared",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#v:Shared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a lock. This function blocks until the lock is available.\n\u003c/p\u003e",
          "module": "System.FileLock",
          "name": "lockFile",
          "package": "filelock",
          "signature": "FilePath -\u003e SharedExclusive -\u003e IO FileLock",
          "source": "src/System-FileLock.html#lockFile",
          "type": "function"
        },
        "index": {
          "description": "Take lock This function blocks until the lock is available",
          "hierarchy": "System FileLock",
          "module": "System.FileLock",
          "name": "lockFile",
          "normalized": "FilePath-\u003eSharedExclusive-\u003eIO FileLock",
          "package": "filelock",
          "partial": "File",
          "signature": "FilePath-\u003eSharedExclusive-\u003eIO FileLock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#v:lockFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to take a lock. This function does not block. If the lock is not\n immediately available, it returns Nothing.\n\u003c/p\u003e",
          "module": "System.FileLock",
          "name": "tryLockFile",
          "package": "filelock",
          "signature": "FilePath -\u003e SharedExclusive -\u003e IO (Maybe FileLock)",
          "source": "src/System-FileLock.html#tryLockFile",
          "type": "function"
        },
        "index": {
          "description": "Try to take lock This function does not block If the lock is not immediately available it returns Nothing",
          "hierarchy": "System FileLock",
          "module": "System.FileLock",
          "name": "tryLockFile",
          "normalized": "FilePath-\u003eSharedExclusive-\u003eIO(Maybe FileLock)",
          "package": "filelock",
          "partial": "Lock File",
          "signature": "FilePath-\u003eSharedExclusive-\u003eIO(Maybe FileLock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#v:tryLockFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease the lock.\n\u003c/p\u003e",
          "module": "System.FileLock",
          "name": "unlockFile",
          "package": "filelock",
          "signature": "FileLock -\u003e IO ()",
          "source": "src/System-FileLock.html#unlockFile",
          "type": "function"
        },
        "index": {
          "description": "Release the lock",
          "hierarchy": "System FileLock",
          "module": "System.FileLock",
          "name": "unlockFile",
          "normalized": "FileLock-\u003eIO()",
          "package": "filelock",
          "partial": "File",
          "signature": "FileLock-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#v:unlockFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform some action with a lock held.\n\u003c/p\u003e",
          "module": "System.FileLock",
          "name": "withFileLock",
          "package": "filelock",
          "signature": "FilePath -\u003e SharedExclusive -\u003e (FileLock -\u003e IO a) -\u003e IO a",
          "source": "src/System-FileLock.html#withFileLock",
          "type": "function"
        },
        "index": {
          "description": "Perform some action with lock held",
          "hierarchy": "System FileLock",
          "module": "System.FileLock",
          "name": "withFileLock",
          "normalized": "FilePath-\u003eSharedExclusive-\u003e(FileLock-\u003eIO a)-\u003eIO a",
          "package": "filelock",
          "partial": "File Lock",
          "signature": "FilePath-\u003eSharedExclusive-\u003e(FileLock-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#v:withFileLock"
      }
    }
  ]
]