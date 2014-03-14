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
        "word": "named-lock"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements \"named locks\".\n\u003c/p\u003e\u003cp\u003eA named lock is like a normal lock (\u003ccode\u003eMVar ()\u003c/code\u003e) but is created\n on demand.  This is useful when you have a potentially infinite\n number of resources that should not be used concurrently.\n\u003c/p\u003e\u003cp\u003eFor example, in a web-server you might create a new lock for each\n database query so that the same query is only run once.\n\u003c/p\u003e\u003cp\u003eNamed locks are allocated in a \u003ccode\u003e\u003ca\u003eLockPool\u003c/a\u003e\u003c/code\u003e.  Names are arbitrary,\n well-behaved instances of the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.NamedLock",
          "name": "NamedLock",
          "package": "named-lock",
          "source": "src/Control-Concurrent-NamedLock.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements named locks named lock is like normal lock MVar but is created on demand This is useful when you have potentially infinite number of resources that should not be used concurrently For example in web-server you might create new lock for each database query so that the same query is only run once Named locks are allocated in LockPool Names are arbitrary well-behaved instances of the Ord class",
          "hierarchy": "Control Concurrent NamedLock",
          "module": "Control.Concurrent.NamedLock",
          "name": "NamedLock",
          "package": "named-lock",
          "partial": "Named Lock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/named-lock/docs/Control-Concurrent-NamedLock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.NamedLock",
          "name": "LockPool",
          "package": "named-lock",
          "source": "src/Control-Concurrent-NamedLock.html#LockPool",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent NamedLock",
          "module": "Control.Concurrent.NamedLock",
          "name": "LockPool",
          "package": "named-lock",
          "partial": "Lock Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/named-lock/docs/Control-Concurrent-NamedLock.html#t:LockPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab the lock with given name.  Blocks until the lock becomes\n available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.NamedLock",
          "name": "grabNamedLock",
          "package": "named-lock",
          "signature": "LockPool name -\u003e name -\u003e IO ()",
          "source": "src/Control-Concurrent-NamedLock.html#grabNamedLock",
          "type": "function"
        },
        "index": {
          "description": "Grab the lock with given name Blocks until the lock becomes available",
          "hierarchy": "Control Concurrent NamedLock",
          "module": "Control.Concurrent.NamedLock",
          "name": "grabNamedLock",
          "normalized": "LockPool a-\u003ea-\u003eIO()",
          "package": "named-lock",
          "partial": "Named Lock",
          "signature": "LockPool name-\u003ename-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-lock/docs/Control-Concurrent-NamedLock.html#v:grabNamedLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new, empty, lock pool.\n\u003c/p\u003e",
          "module": "Control.Concurrent.NamedLock",
          "name": "newLockPool",
          "package": "named-lock",
          "signature": "IO (LockPool name)",
          "source": "src/Control-Concurrent-NamedLock.html#newLockPool",
          "type": "function"
        },
        "index": {
          "description": "Create new empty lock pool",
          "hierarchy": "Control Concurrent NamedLock",
          "module": "Control.Concurrent.NamedLock",
          "name": "newLockPool",
          "package": "named-lock",
          "partial": "Lock Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-lock/docs/Control-Concurrent-NamedLock.html#v:newLockPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease the lock with the given name.\n\u003c/p\u003e\u003cp\u003eThe released lock must have previously been grabbed via\n \u003ccode\u003e\u003ca\u003egrabNamedLock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.NamedLock",
          "name": "releaseNamedLock",
          "package": "named-lock",
          "signature": "LockPool name -\u003e name -\u003e IO ()",
          "source": "src/Control-Concurrent-NamedLock.html#releaseNamedLock",
          "type": "function"
        },
        "index": {
          "description": "Release the lock with the given name The released lock must have previously been grabbed via grabNamedLock",
          "hierarchy": "Control Concurrent NamedLock",
          "module": "Control.Concurrent.NamedLock",
          "name": "releaseNamedLock",
          "normalized": "LockPool a-\u003ea-\u003eIO()",
          "package": "named-lock",
          "partial": "Named Lock",
          "signature": "LockPool name-\u003ename-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-lock/docs/Control-Concurrent-NamedLock.html#v:releaseNamedLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHold the lock while running the action.\n\u003c/p\u003e\u003cp\u003eIf the action throws an exception, the lock is released an the\n exception propagated.  Returns the result of the action.\n\u003c/p\u003e",
          "module": "Control.Concurrent.NamedLock",
          "name": "withNamedLock",
          "package": "named-lock",
          "signature": "LockPool name -\u003e name -\u003e IO a -\u003e IO a",
          "source": "src/Control-Concurrent-NamedLock.html#withNamedLock",
          "type": "function"
        },
        "index": {
          "description": "Hold the lock while running the action If the action throws an exception the lock is released an the exception propagated Returns the result of the action",
          "hierarchy": "Control Concurrent NamedLock",
          "module": "Control.Concurrent.NamedLock",
          "name": "withNamedLock",
          "normalized": "LockPool a-\u003ea-\u003eIO b-\u003eIO b",
          "package": "named-lock",
          "partial": "Named Lock",
          "signature": "LockPool name-\u003ename-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/named-lock/docs/Control-Concurrent-NamedLock.html#v:withNamedLock"
      }
    }
  ]
]