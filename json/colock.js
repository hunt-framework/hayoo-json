[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colock/docs/System-IO-Lock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eSystem.IO.Lock\u003c/a\u003e provides thread-friendly file locks. The locking functions in\n \u003ca\u003eSystem.Posix.IO\u003c/a\u003e (actually, it's just \u003ccode\u003eSystem.Posix.IO.waitToSetLock\u003c/code\u003e) will\n block the entire program, not just the calling thread (even with the\n threaded runtime). This module avoids the problem by spawning a new process\n for each lock and communicating with it over pipes.\n\u003c/p\u003e\u003cp\u003eAdvantages:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Only blocks the calling thread\n\u003c/li\u003e\u003cli\u003e Works both with and without \u003ccode\u003e-threaded\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eDisadvantages:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Forks one new process per lock\n\u003c/li\u003e\u003cli\u003e Consumes one file descriptor per lock\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOddities:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Closing the file descriptor doesn't affect the lock (because it's really in\n   a separate process); you must call \u003ccode\u003e\u003ca\u003eunLock\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Lock",
        "fct-package": "colock",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Lock.html",
        "fct-type": "module",
        "title": "Lock"
      },
      "index": {
        "description": "System.IO.Lock provides thread-friendly file locks The locking functions in System.Posix.IO actually it just System.Posix.IO.waitToSetLock will block the entire program not just the calling thread even with the threaded runtime This module avoids the problem by spawning new process for each lock and communicating with it over pipes Advantages Only blocks the calling thread Works both with and without threaded Disadvantages Forks one new process per lock Consumes one file descriptor per lock Oddities Closing the file descriptor doesn affect the lock because it really in separate process you must call unLock instead",
        "hierarchy": "System IO Lock",
        "module": "System.IO.Lock",
        "name": "Lock",
        "normalized": "",
        "package": "colock",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colock/docs/System-IO-Lock.html#t:LockDescriptor",
      "description": {
        "fct-module": "System.IO.Lock",
        "fct-package": "colock",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Lock.html#LockDescriptor",
        "fct-type": "data",
        "title": "LockDescriptor"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Lock",
        "module": "System.IO.Lock",
        "name": "LockDescriptor",
        "normalized": "",
        "package": "colock",
        "partial": "Lock Descriptor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colock/docs/System-IO-Lock.html#t:LockMode",
      "description": {
        "fct-module": "System.IO.Lock",
        "fct-package": "colock",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Lock.html#LockMode",
        "fct-type": "data",
        "title": "LockMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Lock",
        "module": "System.IO.Lock",
        "name": "LockMode",
        "normalized": "",
        "package": "colock",
        "partial": "Lock Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colock/docs/System-IO-Lock.html#v:LockRead",
      "description": {
        "fct-module": "System.IO.Lock",
        "fct-package": "colock",
        "fct-signature": "LockRead",
        "fct-source": "src/System-IO-Lock.html#LockMode",
        "fct-type": "function",
        "title": "LockRead"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Lock",
        "module": "System.IO.Lock",
        "name": "LockRead",
        "normalized": "",
        "package": "colock",
        "partial": "Lock Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colock/docs/System-IO-Lock.html#v:LockWrite",
      "description": {
        "fct-module": "System.IO.Lock",
        "fct-package": "colock",
        "fct-signature": "LockWrite",
        "fct-source": "src/System-IO-Lock.html#LockMode",
        "fct-type": "function",
        "title": "LockWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Lock",
        "module": "System.IO.Lock",
        "name": "LockWrite",
        "normalized": "",
        "package": "colock",
        "partial": "Lock Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colock/docs/System-IO-Lock.html#v:setLock",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetLock\u003c/a\u003e\u003c/code\u003e locks the specified region of the file. It blocks the calling thread\n until the lock is granted.\n\u003c/p\u003e",
        "fct-module": "System.IO.Lock",
        "fct-package": "colock",
        "fct-signature": "Fd -\u003e (LockMode, SeekMode, FileOffset, FileOffset) -\u003e IO LockDescriptor",
        "fct-source": "src/System-IO-Lock.html#setLock",
        "fct-type": "function",
        "title": "setLock"
      },
      "index": {
        "description": "setLock locks the specified region of the file It blocks the calling thread until the lock is granted",
        "hierarchy": "System IO Lock",
        "module": "System.IO.Lock",
        "name": "setLock",
        "normalized": "Fd-\u003e(LockMode,SeekMode,FileOffset,FileOffset)-\u003eIO LockDescriptor",
        "package": "colock",
        "partial": "Lock",
        "signature": "Fd-\u003e(LockMode,SeekMode,FileOffset,FileOffset)-\u003eIO LockDescriptor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colock/docs/System-IO-Lock.html#v:setLockAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetLockAll\u003c/a\u003e\u003c/code\u003e fd lm\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetLock\u003c/a\u003e\u003c/code\u003e fd\n (lm, \u003ccode\u003e\u003ca\u003eAbsoluteSeek\u003c/a\u003e\u003c/code\u003e, 0, 0)\u003c/code\u003e. It locks the entire file, no matter\n how big it is.\n\u003c/p\u003e",
        "fct-module": "System.IO.Lock",
        "fct-package": "colock",
        "fct-signature": "Fd -\u003e LockMode -\u003e IO LockDescriptor",
        "fct-source": "src/System-IO-Lock.html#setLockAll",
        "fct-type": "function",
        "title": "setLockAll"
      },
      "index": {
        "description": "setLockAll fd lm is equivalent to setLock fd lm AbsoluteSeek It locks the entire file no matter how big it is",
        "hierarchy": "System IO Lock",
        "module": "System.IO.Lock",
        "name": "setLockAll",
        "normalized": "Fd-\u003eLockMode-\u003eIO LockDescriptor",
        "package": "colock",
        "partial": "Lock All",
        "signature": "Fd-\u003eLockMode-\u003eIO LockDescriptor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colock/docs/System-IO-Lock.html#v:unLock",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunLock\u003c/a\u003e\u003c/code\u003e destroys the given lock.\n\u003c/p\u003e",
        "fct-module": "System.IO.Lock",
        "fct-package": "colock",
        "fct-signature": "LockDescriptor -\u003e IO ()",
        "fct-source": "src/System-IO-Lock.html#unLock",
        "fct-type": "function",
        "title": "unLock"
      },
      "index": {
        "description": "unLock destroys the given lock",
        "hierarchy": "System IO Lock",
        "module": "System.IO.Lock",
        "name": "unLock",
        "normalized": "LockDescriptor-\u003eIO()",
        "package": "colock",
        "partial": "Lock",
        "signature": "LockDescriptor-\u003eIO()"
      }
    }
  }
]