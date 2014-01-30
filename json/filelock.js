[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a portable interface to file locks as a mechanism for\n inter-process synchronization.\n\u003c/p\u003e\u003cp\u003eEach file lock is associated with a file. When taking a lock, the assiciated\n file is created if it's not present, then the file is locked in an\n OS-dependent way. While the lock is being held, no other process or\n thread can take it, unless the specified \u003ccode\u003e\u003ca\u003eSharedExclusive\u003c/a\u003e\u003c/code\u003e values\n allow it.\n\u003c/p\u003e\u003cp\u003eAll locks held by a process are released when the process exits. They can\n also be explicitly released using \u003ccode\u003e\u003ca\u003eunlockFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is not recommended to open or otherwise use lock files for other\n purposes, because it tends to expose differences between operating systems.\n For example, on Windows \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e for a lock file will fail when\n the lock is held, but on Unix it won't.\n\u003c/p\u003e\u003cp\u003eNote on the implementation: currently the module uses flock(2) on non-Windows\n platforms, and LockFileEx on Windows.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.FileLock",
        "fct-package": "filelock",
        "fct-signature": "module",
        "fct-source": "src/System-FileLock.html",
        "fct-type": "module",
        "title": "FileLock"
      },
      "index": {
        "description": "This module provides portable interface to file locks as mechanism for inter-process synchronization Each file lock is associated with file When taking lock the assiciated file is created if it not present then the file is locked in an OS-dependent way While the lock is being held no other process or thread can take it unless the specified SharedExclusive values allow it All locks held by process are released when the process exits They can also be explicitly released using unlockFile It is not recommended to open or otherwise use lock files for other purposes because it tends to expose differences between operating systems For example on Windows openFile for lock file will fail when the lock is held but on Unix it won Note on the implementation currently the module uses flock on non-Windows platforms and LockFileEx on Windows",
        "hierarchy": "System FileLock",
        "module": "System.FileLock",
        "name": "FileLock",
        "normalized": "",
        "package": "filelock",
        "partial": "File Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#t:FileLock",
      "description": {
        "fct-descr": "\u003cp\u003eA token that represents ownership of a lock.\n\u003c/p\u003e",
        "fct-module": "System.FileLock",
        "fct-package": "filelock",
        "fct-signature": "data",
        "fct-source": "src/System-FileLock.html#FileLock",
        "fct-type": "data",
        "title": "FileLock"
      },
      "index": {
        "description": "token that represents ownership of lock",
        "hierarchy": "System FileLock",
        "module": "System.FileLock",
        "name": "FileLock",
        "normalized": "",
        "package": "filelock",
        "partial": "File Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#t:SharedExclusive",
      "description": {
        "fct-descr": "\u003cp\u003eA type of lock to be taken.\n\u003c/p\u003e",
        "fct-module": "System.FileLock",
        "fct-package": "filelock",
        "fct-signature": "data",
        "fct-source": "src/System-FileLock.html#SharedExclusive",
        "fct-type": "data",
        "title": "SharedExclusive"
      },
      "index": {
        "description": "type of lock to be taken",
        "hierarchy": "System FileLock",
        "module": "System.FileLock",
        "name": "SharedExclusive",
        "normalized": "",
        "package": "filelock",
        "partial": "Shared Exclusive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#v:Exclusive",
      "description": {
        "fct-descr": "\u003cp\u003eNo other process can hold a lock, shared or exclusive.\n\u003c/p\u003e",
        "fct-module": "System.FileLock",
        "fct-package": "filelock",
        "fct-signature": "Exclusive",
        "fct-source": "src/System-FileLock.html#SharedExclusive",
        "fct-type": "function",
        "title": "Exclusive"
      },
      "index": {
        "description": "No other process can hold lock shared or exclusive",
        "hierarchy": "System FileLock",
        "module": "System.FileLock",
        "name": "Exclusive",
        "normalized": "",
        "package": "filelock",
        "partial": "Exclusive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#v:Shared",
      "description": {
        "fct-descr": "\u003cp\u003eOther process can hold a shared lock at the same time.\n\u003c/p\u003e",
        "fct-module": "System.FileLock",
        "fct-package": "filelock",
        "fct-signature": "Shared",
        "fct-source": "src/System-FileLock.html#SharedExclusive",
        "fct-type": "function",
        "title": "Shared"
      },
      "index": {
        "description": "Other process can hold shared lock at the same time",
        "hierarchy": "System FileLock",
        "module": "System.FileLock",
        "name": "Shared",
        "normalized": "",
        "package": "filelock",
        "partial": "Shared",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#v:lockFile",
      "description": {
        "fct-descr": "\u003cp\u003eTake a lock. This function blocks until the lock is available.\n\u003c/p\u003e",
        "fct-module": "System.FileLock",
        "fct-package": "filelock",
        "fct-signature": "FilePath -\u003e SharedExclusive -\u003e IO FileLock",
        "fct-source": "src/System-FileLock.html#lockFile",
        "fct-type": "function",
        "title": "lockFile"
      },
      "index": {
        "description": "Take lock This function blocks until the lock is available",
        "hierarchy": "System FileLock",
        "module": "System.FileLock",
        "name": "lockFile",
        "normalized": "FilePath-\u003eSharedExclusive-\u003eIO FileLock",
        "package": "filelock",
        "partial": "File",
        "signature": "FilePath-\u003eSharedExclusive-\u003eIO FileLock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#v:tryLockFile",
      "description": {
        "fct-descr": "\u003cp\u003eTry to take a lock. This function does not block. If the lock is not\n immediately available, it returns Nothing.\n\u003c/p\u003e",
        "fct-module": "System.FileLock",
        "fct-package": "filelock",
        "fct-signature": "FilePath -\u003e SharedExclusive -\u003e IO (Maybe FileLock)",
        "fct-source": "src/System-FileLock.html#tryLockFile",
        "fct-type": "function",
        "title": "tryLockFile"
      },
      "index": {
        "description": "Try to take lock This function does not block If the lock is not immediately available it returns Nothing",
        "hierarchy": "System FileLock",
        "module": "System.FileLock",
        "name": "tryLockFile",
        "normalized": "FilePath-\u003eSharedExclusive-\u003eIO(Maybe FileLock)",
        "package": "filelock",
        "partial": "Lock File",
        "signature": "FilePath-\u003eSharedExclusive-\u003eIO(Maybe FileLock)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#v:unlockFile",
      "description": {
        "fct-descr": "\u003cp\u003eRelease the lock.\n\u003c/p\u003e",
        "fct-module": "System.FileLock",
        "fct-package": "filelock",
        "fct-signature": "FileLock -\u003e IO ()",
        "fct-source": "src/System-FileLock.html#unlockFile",
        "fct-type": "function",
        "title": "unlockFile"
      },
      "index": {
        "description": "Release the lock",
        "hierarchy": "System FileLock",
        "module": "System.FileLock",
        "name": "unlockFile",
        "normalized": "FileLock-\u003eIO()",
        "package": "filelock",
        "partial": "File",
        "signature": "FileLock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filelock/docs/System-FileLock.html#v:withFileLock",
      "description": {
        "fct-descr": "\u003cp\u003ePerform some action with a lock held.\n\u003c/p\u003e",
        "fct-module": "System.FileLock",
        "fct-package": "filelock",
        "fct-signature": "FilePath -\u003e SharedExclusive -\u003e (FileLock -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-FileLock.html#withFileLock",
        "fct-type": "function",
        "title": "withFileLock"
      },
      "index": {
        "description": "Perform some action with lock held",
        "hierarchy": "System FileLock",
        "module": "System.FileLock",
        "name": "withFileLock",
        "normalized": "FilePath-\u003eSharedExclusive-\u003e(FileLock-\u003eIO a)-\u003eIO a",
        "package": "filelock",
        "partial": "File Lock",
        "signature": "FilePath-\u003eSharedExclusive-\u003e(FileLock-\u003eIO a)-\u003eIO a"
      }
    }
  }
]