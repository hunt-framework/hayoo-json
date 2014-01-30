[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-lock/docs/Control-Concurrent-NamedLock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements \"named locks\".\n\u003c/p\u003e\u003cp\u003eA named lock is like a normal lock (\u003ccode\u003eMVar ()\u003c/code\u003e) but is created\n on demand.  This is useful when you have a potentially infinite\n number of resources that should not be used concurrently.\n\u003c/p\u003e\u003cp\u003eFor example, in a web-server you might create a new lock for each\n database query so that the same query is only run once.\n\u003c/p\u003e\u003cp\u003eNamed locks are allocated in a \u003ccode\u003e\u003ca\u003eLockPool\u003c/a\u003e\u003c/code\u003e.  Names are arbitrary,\n well-behaved instances of the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.NamedLock",
        "fct-package": "named-lock",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-NamedLock.html",
        "fct-type": "module",
        "title": "NamedLock"
      },
      "index": {
        "description": "This module implements named locks named lock is like normal lock MVar but is created on demand This is useful when you have potentially infinite number of resources that should not be used concurrently For example in web-server you might create new lock for each database query so that the same query is only run once Named locks are allocated in LockPool Names are arbitrary well-behaved instances of the Ord class",
        "hierarchy": "Control Concurrent NamedLock",
        "module": "Control.Concurrent.NamedLock",
        "name": "NamedLock",
        "normalized": "",
        "package": "named-lock",
        "partial": "Named Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-lock/docs/Control-Concurrent-NamedLock.html#t:LockPool",
      "description": {
        "fct-module": "Control.Concurrent.NamedLock",
        "fct-package": "named-lock",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-NamedLock.html#LockPool",
        "fct-type": "data",
        "title": "LockPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent NamedLock",
        "module": "Control.Concurrent.NamedLock",
        "name": "LockPool",
        "normalized": "",
        "package": "named-lock",
        "partial": "Lock Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-lock/docs/Control-Concurrent-NamedLock.html#v:grabNamedLock",
      "description": {
        "fct-descr": "\u003cp\u003eGrab the lock with given name.  Blocks until the lock becomes\n available.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.NamedLock",
        "fct-package": "named-lock",
        "fct-signature": "LockPool name -\u003e name -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-NamedLock.html#grabNamedLock",
        "fct-type": "function",
        "title": "grabNamedLock"
      },
      "index": {
        "description": "Grab the lock with given name Blocks until the lock becomes available",
        "hierarchy": "Control Concurrent NamedLock",
        "module": "Control.Concurrent.NamedLock",
        "name": "grabNamedLock",
        "normalized": "LockPool a-\u003ea-\u003eIO()",
        "package": "named-lock",
        "partial": "Named Lock",
        "signature": "LockPool name-\u003ename-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-lock/docs/Control-Concurrent-NamedLock.html#v:newLockPool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new, empty, lock pool.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.NamedLock",
        "fct-package": "named-lock",
        "fct-signature": "IO (LockPool name)",
        "fct-source": "src/Control-Concurrent-NamedLock.html#newLockPool",
        "fct-type": "function",
        "title": "newLockPool"
      },
      "index": {
        "description": "Create new empty lock pool",
        "hierarchy": "Control Concurrent NamedLock",
        "module": "Control.Concurrent.NamedLock",
        "name": "newLockPool",
        "normalized": "",
        "package": "named-lock",
        "partial": "Lock Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-lock/docs/Control-Concurrent-NamedLock.html#v:releaseNamedLock",
      "description": {
        "fct-descr": "\u003cp\u003eRelease the lock with the given name.\n\u003c/p\u003e\u003cp\u003eThe released lock must have previously been grabbed via\n \u003ccode\u003e\u003ca\u003egrabNamedLock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.NamedLock",
        "fct-package": "named-lock",
        "fct-signature": "LockPool name -\u003e name -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-NamedLock.html#releaseNamedLock",
        "fct-type": "function",
        "title": "releaseNamedLock"
      },
      "index": {
        "description": "Release the lock with the given name The released lock must have previously been grabbed via grabNamedLock",
        "hierarchy": "Control Concurrent NamedLock",
        "module": "Control.Concurrent.NamedLock",
        "name": "releaseNamedLock",
        "normalized": "LockPool a-\u003ea-\u003eIO()",
        "package": "named-lock",
        "partial": "Named Lock",
        "signature": "LockPool name-\u003ename-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/named-lock/docs/Control-Concurrent-NamedLock.html#v:withNamedLock",
      "description": {
        "fct-descr": "\u003cp\u003eHold the lock while running the action.\n\u003c/p\u003e\u003cp\u003eIf the action throws an exception, the lock is released an the\n exception propagated.  Returns the result of the action.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.NamedLock",
        "fct-package": "named-lock",
        "fct-signature": "LockPool name -\u003e name -\u003e IO a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-NamedLock.html#withNamedLock",
        "fct-type": "function",
        "title": "withNamedLock"
      },
      "index": {
        "description": "Hold the lock while running the action If the action throws an exception the lock is released an the exception propagated Returns the result of the action",
        "hierarchy": "Control Concurrent NamedLock",
        "module": "Control.Concurrent.NamedLock",
        "name": "withNamedLock",
        "normalized": "LockPool a-\u003ea-\u003eIO b-\u003eIO b",
        "package": "named-lock",
        "partial": "Named Lock",
        "signature": "LockPool name-\u003ename-\u003eIO a-\u003eIO a"
      }
    }
  }
]