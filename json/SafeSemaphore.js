[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a fair RWLock, similar to one from Java, which is itself documented at\n \u003ca\u003ehttp://download.oracle.com/javase/7/docs/api/java/util/concurrent/locks/ReentrantReadWriteLock.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThere are complicated policy choices that have to be made.  The policy choices here are different\nfrom the ones for the RWLock in concurrent-extras.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eFairRWLock\u003c/code\u003e may be in a free unlocked state, it may be in a read locked state, or it may be a\nwrite locked state.  Many running threads may hold the read lock and execute concurrently.  Only one\nrunning thread may hold the write lock.  The scheduling is a fair FIFO queue that avoids starvation.\n\u003c/p\u003e\u003cp\u003eWhen in the read lock state the first \u003ccode\u003e\u003ca\u003eacquireWrite\u003c/a\u003e\u003c/code\u003e will block, and subsequent \u003ccode\u003e\u003ca\u003eacquireRead\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003eacquireWrite\u003c/a\u003e\u003c/code\u003e will queue in order.  When in the write locked state all other threads trying to\n\u003ccode\u003e\u003ca\u003eacquireWrite\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eacquireRead\u003c/a\u003e\u003c/code\u003e will queue in order.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eFairRWLock\u003c/code\u003e allows recursive write locks, and it allows recursive read locks, and it allows the\nwrite lock holding thread to acquire read locks.  When the current writer also holds read locks and\nthen releases its last write lock it will immediately convert to the read locked state (and other\nwaiting readers may join it).  When a reader acquires a write lock it will (1) release all its read\nlocks, (2) wait to acquire the write lock, (3) retake the same number of read locks released in (1).\n\u003c/p\u003e\u003cp\u003eThe preferred way to use this API is sticking to \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewithRead\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003ewithWrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNo sequence of calling acquire on a single RWLock should lead to deadlock.  Exceptions, espcially\nfrom \u003ccode\u003e\u003ca\u003ekillThread\u003c/a\u003e\u003c/code\u003e, do not break \u003ccode\u003e\u003ca\u003ewithRead\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ewithWrite\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003ewithRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewithWrite\u003c/a\u003e\u003c/code\u003e ensure\nall locks get released when exiting due to an exception.\n\u003c/p\u003e\u003cp\u003eThe readers and writers are always identified by their \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e.  Each thread that calls\n\u003ccode\u003e\u003ca\u003eacquireRead\u003c/a\u003e\u003c/code\u003e must later call \u003ccode\u003e\u003ca\u003ereleaseRead\u003c/a\u003e\u003c/code\u003e from the same thread.  Each thread that calls\n\u003ccode\u003e\u003ca\u003eacquireWrite\u003c/a\u003e\u003c/code\u003e must later call \u003ccode\u003e\u003ca\u003ereleaseWrite\u003c/a\u003e\u003c/code\u003e from the same thread. The main way to misuse a\nFairRWLock is to call a release without having called an acquire.  This is reported in the (Left\nerror) outcomes from \u003ccode\u003e\u003ca\u003ereleaseRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereleaseWrite\u003c/a\u003e\u003c/code\u003e.  Only if the \u003ccode\u003eFairRWLock\u003c/code\u003e has a bug and finds\nitself in an impossible state then it will throw an error.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-FairRWLock.html",
        "fct-type": "module",
        "title": "FairRWLock"
      },
      "index": {
        "description": "Provides fair RWLock similar to one from Java which is itself documented at http download.oracle.com javase docs api java util concurrent locks ReentrantReadWriteLock.html There are complicated policy choices that have to be made The policy choices here are different from the ones for the RWLock in concurrent-extras The FairRWLock may be in free unlocked state it may be in read locked state or it may be write locked state Many running threads may hold the read lock and execute concurrently Only one running thread may hold the write lock The scheduling is fair FIFO queue that avoids starvation When in the read lock state the first acquireWrite will block and subsequent acquireRead and acquireWrite will queue in order When in the write locked state all other threads trying to acquireWrite or acquireRead will queue in order FairRWLock allows recursive write locks and it allows recursive read locks and it allows the write lock holding thread to acquire read locks When the current writer also holds read locks and then releases its last write lock it will immediately convert to the read locked state and other waiting readers may join it When reader acquires write lock it will release all its read locks wait to acquire the write lock retake the same number of read locks released in The preferred way to use this API is sticking to new withRead and withWrite No sequence of calling acquire on single RWLock should lead to deadlock Exceptions espcially from killThread do not break withRead or withWrite The withRead and withWrite ensure all locks get released when exiting due to an exception The readers and writers are always identified by their ThreadId Each thread that calls acquireRead must later call releaseRead from the same thread Each thread that calls acquireWrite must later call releaseWrite from the same thread The main way to misuse FairRWLock is to call release without having called an acquire This is reported in the Left error outcomes from releaseRead and releaseWrite Only if the FairRWLock has bug and finds itself in an impossible state then it will throw an error",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "FairRWLock",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "Fair RWLock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#t:FRW",
      "description": {
        "fct-descr": "\u003cp\u003eObservable state of holder(s) of lock(s).  The W returns a pair of Ints where the first is number of\n read locks (at least 0) and the second is the number of write locks held (at least 1).  The R\n returns a map from thread id to the number of read locks held (at least 1).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#FRW",
        "fct-type": "data",
        "title": "FRW"
      },
      "index": {
        "description": "Observable state of holder of lock The returns pair of Ints where the first is number of read locks at least and the second is the number of write locks held at least The returns map from thread id to the number of read locks held at least",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "FRW",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "FRW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#t:LockKind",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#LockKind",
        "fct-type": "data",
        "title": "LockKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "LockKind",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "Lock Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#t:RWLock",
      "description": {
        "fct-descr": "\u003cp\u003eOpaque type of the fair RWLock.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#RWLock",
        "fct-type": "data",
        "title": "RWLock"
      },
      "index": {
        "description": "Opaque type of the fair RWLock",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "RWLock",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "RWLock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#t:RWLockException",
      "description": {
        "fct-descr": "\u003cp\u003eException type thrown or returned by this module.  \"Impossible\" conditions get the error thrown\n  and usage problems get the error returned.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#RWLockException",
        "fct-type": "data",
        "title": "RWLockException"
      },
      "index": {
        "description": "Exception type thrown or returned by this module Impossible conditions get the error thrown and usage problems get the error returned",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "RWLockException",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "RWLock Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#t:RWLockExceptionKind",
      "description": {
        "fct-descr": "\u003cp\u003eOperation in which error arose, \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#RWLockExceptionKind",
        "fct-type": "data",
        "title": "RWLockExceptionKind"
      },
      "index": {
        "description": "Operation in which error arose",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "RWLockExceptionKind",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "RWLock Exception Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#t:TMap",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#TMap",
        "fct-type": "type",
        "title": "TMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "TMap",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "TMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#t:TSet",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#TSet",
        "fct-type": "type",
        "title": "TSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "TSet",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "TSet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:F",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "F",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#FRW",
        "fct-type": "function",
        "title": "F"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "F",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:R",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "R TMap",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#FRW",
        "fct-type": "function",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "R",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:RWLock-39-acquireRead",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLock'acquireRead",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#RWLockExceptionKind",
        "fct-type": "function",
        "title": "RWLock'acquireRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "RWLock'acquireRead",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "RWLock'acquire Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:RWLock-39-acquireWrite",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLock'acquireWrite",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#RWLockExceptionKind",
        "fct-type": "function",
        "title": "RWLock'acquireWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "RWLock'acquireWrite",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "RWLock'acquire Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:RWLock-39-releaseRead",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLock'releaseRead",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#RWLockExceptionKind",
        "fct-type": "function",
        "title": "RWLock'releaseRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "RWLock'releaseRead",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "RWLock'release Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:RWLock-39-releaseWrite",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLock'releaseWrite",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#RWLockExceptionKind",
        "fct-type": "function",
        "title": "RWLock'releaseWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "RWLock'releaseWrite",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "RWLock'release Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:RWLockException",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLockException ThreadId RWLockExceptionKind String",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#RWLockException",
        "fct-type": "function",
        "title": "RWLockException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "RWLockException",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "RWLock Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:ReaderKind",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "ReaderKind",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#LockKind",
        "fct-type": "function",
        "title": "ReaderKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "ReaderKind",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "Reader Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:W",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "W (ThreadId, (Int, Int))",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#FRW",
        "fct-type": "function",
        "title": "W"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "W",
        "normalized": "W(ThreadId,(Int,Int))",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "W(ThreadId,(Int,Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:WriterKind",
      "description": {
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "WriterKind",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#LockKind",
        "fct-type": "function",
        "title": "WriterKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "WriterKind",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "Writer Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:acquireRead",
      "description": {
        "fct-descr": "\u003cp\u003eAny thread may call acquireRead (even ones holding write locks).  This read lock may be\n acquired multiple times, requiring an identical number of releaseRead calls.\n\u003c/p\u003e\u003cp\u003eAll previous calls to acquireWrite by other threads will have succeeded and been released (or\n interrupted) before this acquireRead will return.\n\u003c/p\u003e\u003cp\u003eThe best way to use acquireRead is to use withRead instead to ensure releaseRead will be called\n exactly once.\n\u003c/p\u003e\u003cp\u003eThis may block and be safely interrupted.  If interrupted then the RWLock will be left unchanged.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#acquireRead",
        "fct-type": "function",
        "title": "acquireRead"
      },
      "index": {
        "description": "Any thread may call acquireRead even ones holding write locks This read lock may be acquired multiple times requiring an identical number of releaseRead calls All previous calls to acquireWrite by other threads will have succeeded and been released or interrupted before this acquireRead will return The best way to use acquireRead is to use withRead instead to ensure releaseRead will be called exactly once This may block and be safely interrupted If interrupted then the RWLock will be left unchanged",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "acquireRead",
        "normalized": "RWLock-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "Read",
        "signature": "RWLock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:acquireWrite",
      "description": {
        "fct-descr": "\u003cp\u003eAny thread may call acquireWrite (even ones holding read locks, but see below for interrupted\n behavior).  This write lock may be acquired multiple times, requiring an identical number of\n releaseWrite calls.\n\u003c/p\u003e\u003cp\u003eAll previous calls to acquireRead by other threads will have succeeded and been released (or\n interrupted) before this acquireWrite will return.\n\u003c/p\u003e\u003cp\u003eThe best way to use acquireWrite is to use withWrite instead to ensure releaseWrite will be\n called exactly once.\n\u003c/p\u003e\u003cp\u003eThis may block and usually be safely interrupted.  If interrupted then the RWLock will be left\n unchanged.  The exception to being able to interrupted when this blocks is very subtle: if this\n thread holds read locks and calls acquireWrite then it will release those read locks and go to\n the back of the queue to acquire the write lock (it does not get to skip the queue).  While\n blocking waiting for the write lock to be available this thread may be interrupted.  If not\n interrupted then the write lock will eventually be acquired, followed by re-acquiring the\n original number of read locks.  But if acquireWrite is interrupted after releasing read locks\n then it MUST restore those read locks on the way out.  To do this the internal error handler will\n use \u003ccode\u003e\u003ca\u003euninterruptibleMask_\u003c/a\u003e\u003c/code\u003e and a special version of acquireRead that skips to the front of the\n queue; when the current lock state is a reader this works instantly but when the current lock\n state is a writer this thread will block in an UNINTERRUPTIBLE state until the current writer is\n finished.  Once this other writer is finished the error handler will obtain the read locks it\n needs to allow the error propagation to continue.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#acquireWrite",
        "fct-type": "function",
        "title": "acquireWrite"
      },
      "index": {
        "description": "Any thread may call acquireWrite even ones holding read locks but see below for interrupted behavior This write lock may be acquired multiple times requiring an identical number of releaseWrite calls All previous calls to acquireRead by other threads will have succeeded and been released or interrupted before this acquireWrite will return The best way to use acquireWrite is to use withWrite instead to ensure releaseWrite will be called exactly once This may block and usually be safely interrupted If interrupted then the RWLock will be left unchanged The exception to being able to interrupted when this blocks is very subtle if this thread holds read locks and calls acquireWrite then it will release those read locks and go to the back of the queue to acquire the write lock it does not get to skip the queue While blocking waiting for the write lock to be available this thread may be interrupted If not interrupted then the write lock will eventually be acquired followed by re-acquiring the original number of read locks But if acquireWrite is interrupted after releasing read locks then it MUST restore those read locks on the way out To do this the internal error handler will use uninterruptibleMask and special version of acquireRead that skips to the front of the queue when the current lock state is reader this works instantly but when the current lock state is writer this thread will block in an UNINTERRUPTIBLE state until the current writer is finished Once this other writer is finished the error handler will obtain the read locks it needs to allow the error propagation to continue",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "acquireWrite",
        "normalized": "RWLock-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "Write",
        "signature": "RWLock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:checkLock",
      "description": {
        "fct-descr": "\u003cp\u003echeckLocks return a pair of numbers, the first is the count of read locks this thread holds,\n the second is the number of write locks that this thread holds.  This may be useful for sanity\n checking complex usage of RWLocks.\n\u003c/p\u003e\u003cp\u003eThis may block and be safely interrupted.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLock -\u003e IO (Int, Int)",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#checkLock",
        "fct-type": "function",
        "title": "checkLock"
      },
      "index": {
        "description": "checkLocks return pair of numbers the first is the count of read locks this thread holds the second is the number of write locks that this thread holds This may be useful for sanity checking complex usage of RWLocks This may block and be safely interrupted",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "checkLock",
        "normalized": "RWLock-\u003eIO(Int,Int)",
        "package": "SafeSemaphore",
        "partial": "Lock",
        "signature": "RWLock-\u003eIO(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new RWLock which starts in a free and unlocked state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "IO RWLock",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new RWLock which starts in free and unlocked state",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "new",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:peekLock",
      "description": {
        "fct-descr": "\u003cp\u003eObserve which threads are holding the lock and which threads are waiting (in order).  This is\n particularly useful for writing tests.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLock -\u003e IO (FRW, [LockKind])",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#peekLock",
        "fct-type": "function",
        "title": "peekLock"
      },
      "index": {
        "description": "Observe which threads are holding the lock and which threads are waiting in order This is particularly useful for writing tests",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "peekLock",
        "normalized": "RWLock-\u003eIO(FRW,[LockKind])",
        "package": "SafeSemaphore",
        "partial": "Lock",
        "signature": "RWLock-\u003eIO(FRW,[LockKind])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:releaseRead",
      "description": {
        "fct-descr": "\u003cp\u003eA thread that calls acquireRead must later call releaseRead once for each call to acquireRead.\n\u003c/p\u003e\u003cp\u003eIf this thread has not previous called acquireRead then releaseRead will do nothing and return a\n (Left error).\n\u003c/p\u003e\u003cp\u003eThis can block but cannot be interrupted.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLock -\u003e IO (Either RWLockException ())",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#releaseRead",
        "fct-type": "function",
        "title": "releaseRead"
      },
      "index": {
        "description": "thread that calls acquireRead must later call releaseRead once for each call to acquireRead If this thread has not previous called acquireRead then releaseRead will do nothing and return Left error This can block but cannot be interrupted",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "releaseRead",
        "normalized": "RWLock-\u003eIO(Either RWLockException())",
        "package": "SafeSemaphore",
        "partial": "Read",
        "signature": "RWLock-\u003eIO(Either RWLockException())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:releaseWrite",
      "description": {
        "fct-descr": "\u003cp\u003eA thread that calls acquireWrite must later call releaseWrite once for each call to acquireWrite.\n\u003c/p\u003e\u003cp\u003eIf this thread has not previous called acquireWrite then releaseWrite will do nothing and return\n a (Left error).\n\u003c/p\u003e\u003cp\u003eThis can block but cannot be interrupted.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLock -\u003e IO (Either RWLockException ())",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#releaseWrite",
        "fct-type": "function",
        "title": "releaseWrite"
      },
      "index": {
        "description": "thread that calls acquireWrite must later call releaseWrite once for each call to acquireWrite If this thread has not previous called acquireWrite then releaseWrite will do nothing and return Left error This can block but cannot be interrupted",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "releaseWrite",
        "normalized": "RWLock-\u003eIO(Either RWLockException())",
        "package": "SafeSemaphore",
        "partial": "Write",
        "signature": "RWLock-\u003eIO(Either RWLockException())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:unRK",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "TSet",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#LockKind",
        "fct-type": "function",
        "title": "unRK"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "unRK",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "RK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:unWK",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "ThreadId",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#LockKind",
        "fct-type": "function",
        "title": "unWK"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "unWK",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "WK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:withRead",
      "description": {
        "fct-descr": "\u003cp\u003eThis is by far the preferred way to acquire a read lock.  This uses bracket_ to ensure\n acquireRead and releaseRead are called correctly around the passed command.\n\u003c/p\u003e\u003cp\u003eThis ought to ensure releaseRead will not return a (Left error), but if it does then this error\n will be thrown.\n\u003c/p\u003e\u003cp\u003eThis can block and be safely interrupted.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLock -\u003e IO a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#withRead",
        "fct-type": "function",
        "title": "withRead"
      },
      "index": {
        "description": "This is by far the preferred way to acquire read lock This uses bracket to ensure acquireRead and releaseRead are called correctly around the passed command This ought to ensure releaseRead will not return Left error but if it does then this error will be thrown This can block and be safely interrupted",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "withRead",
        "normalized": "RWLock-\u003eIO a-\u003eIO a",
        "package": "SafeSemaphore",
        "partial": "Read",
        "signature": "RWLock-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-FairRWLock.html#v:withWrite",
      "description": {
        "fct-descr": "\u003cp\u003eThis is by far the preferred way to acquire a write lock.  This uses bracket_ to ensure\n acquireWrite and releaseWrite are called correctly around the passed command.\n\u003c/p\u003e\u003cp\u003eThis ought to ensure releaseWrite will not return a (Left error), but if it does then this error\n will be thrown.\n\u003c/p\u003e\u003cp\u003eThis can block and be safely interrupted.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.FairRWLock",
        "fct-package": "SafeSemaphore",
        "fct-signature": "RWLock -\u003e IO a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-FairRWLock.html#withWrite",
        "fct-type": "function",
        "title": "withWrite"
      },
      "index": {
        "description": "This is by far the preferred way to acquire write lock This uses bracket to ensure acquireWrite and releaseWrite are called correctly around the passed command This ought to ensure releaseWrite will not return Left error but if it does then this error will be thrown This can block and be safely interrupted",
        "hierarchy": "Control Concurrent FairRWLock",
        "module": "Control.Concurrent.FairRWLock",
        "name": "withWrite",
        "normalized": "RWLock-\u003eIO a-\u003eIO a",
        "package": "SafeSemaphore",
        "partial": "Write",
        "signature": "RWLock-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSampleVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e is a safer version of the \u003ca\u003eControl.Concurrent.SampleVar\u003c/a\u003e in\n base.  The same problem as QSem(N) is being fixed, that of handling waiters\n that die before being woken normally.  For \u003ca\u003eControl.Concurrent.SampleVar\u003c/a\u003e in\n base this error can lead to thinking a full \u003ccode\u003eSampleVar\u003c/code\u003e is really empty and\n cause \u003ccode\u003ewriteSampleVar\u003c/code\u003e to hang.  The \u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e in this module is immune\n to this error, and has a simpler implementation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.MSampleVar",
        "fct-package": "SafeSemaphore",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-MSampleVar.html",
        "fct-type": "module",
        "title": "MSampleVar"
      },
      "index": {
        "description": "MSampleVar is safer version of the Control.Concurrent.SampleVar in base The same problem as QSem is being fixed that of handling waiters that die before being woken normally For Control.Concurrent.SampleVar in base this error can lead to thinking full SampleVar is really empty and cause writeSampleVar to hang The MSampleVar in this module is immune to this error and has simpler implementation",
        "hierarchy": "Control Concurrent MSampleVar",
        "module": "Control.Concurrent.MSampleVar",
        "name": "MSampleVar",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "MSample Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSampleVar.html#t:MSampleVar",
      "description": {
        "fct-descr": "\u003cp\u003eSample variables are slightly different from a normal \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Reading an empty \u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e causes the reader to block.\n    (same as \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e on empty \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e Reading a filled \u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e empties it and returns value.\n    (same as \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e Try reading a filled \u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e returns a Maybe value.\n    (same as \u003ccode\u003e\u003ca\u003etryTakeMVar\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e Writing to an empty \u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e fills it with a value, and\n    potentially, wakes up a blocked reader (same as for \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e on\n    empty \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e Writing to a filled \u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e overwrites the current value.\n    (different from \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e on full \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe readers queue in FIFO order, with the lead reader joining the writers in\n a second FIFO queue to access the stored value.  Thus writers can jump the\n queue of non-leading waiting readers to update the value, but the lead\n reader has to wait on all previous writes to finish before taking the value.\n\u003c/p\u003e\u003cp\u003eThis design choice emphasises that each reader sees the most up-to-date\n value possible while still guaranteeing progress.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSampleVar",
        "fct-package": "SafeSemaphore",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-MSampleVar.html#MSampleVar",
        "fct-type": "data",
        "title": "MSampleVar"
      },
      "index": {
        "description": "Sample variables are slightly different from normal MVar Reading an empty MSampleVar causes the reader to block same as takeMVar on empty MVar Reading filled MSampleVar empties it and returns value same as takeMVar Try reading filled MSampleVar returns Maybe value same as tryTakeMVar Writing to an empty MSampleVar fills it with value and potentially wakes up blocked reader same as for putMVar on empty MVar Writing to filled MSampleVar overwrites the current value different from putMVar on full MVar The readers queue in FIFO order with the lead reader joining the writers in second FIFO queue to access the stored value Thus writers can jump the queue of non-leading waiting readers to update the value but the lead reader has to wait on all previous writes to finish before taking the value This design choice emphasises that each reader sees the most up-to-date value possible while still guaranteeing progress",
        "hierarchy": "Control Concurrent MSampleVar",
        "module": "Control.Concurrent.MSampleVar",
        "name": "MSampleVar",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "MSample Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSampleVar.html#v:emptySV",
      "description": {
        "fct-descr": "\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e is full, forget the value and leave it empty.\n Otherwise, do nothing.  This avoids any the FIFO queue of blocked \u003ccode\u003e\u003ca\u003ereadSV\u003c/a\u003e\u003c/code\u003e\n threads.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eemptySV\u003c/a\u003e\u003c/code\u003e can block and be interrupted, in which case it does nothing.  If\n \u003ccode\u003e\u003ca\u003eemptySV\u003c/a\u003e\u003c/code\u003e returns then it left the \u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e in an empty state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSampleVar",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSampleVar a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-MSampleVar.html#emptySV",
        "fct-type": "function",
        "title": "emptySV"
      },
      "index": {
        "description": "If the MSampleVar is full forget the value and leave it empty Otherwise do nothing This avoids any the FIFO queue of blocked readSV threads emptySV can block and be interrupted in which case it does nothing If emptySV returns then it left the MSampleVar in an empty state",
        "hierarchy": "Control Concurrent MSampleVar",
        "module": "Control.Concurrent.MSampleVar",
        "name": "emptySV",
        "normalized": "MSampleVar a-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "SV",
        "signature": "MSampleVar a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSampleVar.html#v:isEmptySV",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eisEmptySV\u003c/a\u003e\u003c/code\u003e can block and be interrupted, in which case it does nothing.\n If \u003ccode\u003e\u003ca\u003eisEmptySV\u003c/a\u003e\u003c/code\u003e returns then it reports the momentary status the\n \u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e.  Using this value without producing unwanted race conditions\n is left up to the programmer.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSampleVar",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSampleVar a -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-MSampleVar.html#isEmptySV",
        "fct-type": "function",
        "title": "isEmptySV"
      },
      "index": {
        "description": "isEmptySV can block and be interrupted in which case it does nothing If isEmptySV returns then it reports the momentary status the MSampleVar Using this value without producing unwanted race conditions is left up to the programmer",
        "hierarchy": "Control Concurrent MSampleVar",
        "module": "Control.Concurrent.MSampleVar",
        "name": "isEmptySV",
        "normalized": "MSampleVar a-\u003eIO Bool",
        "package": "SafeSemaphore",
        "partial": "Empty SV",
        "signature": "MSampleVar a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSampleVar.html#v:newEmptySV",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enewEmptySV\u003c/a\u003e\u003c/code\u003e allocates a new MSampleVar in an empty state.  No futher\n allocation is done when using the \u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSampleVar",
        "fct-package": "SafeSemaphore",
        "fct-signature": "IO (MSampleVar a)",
        "fct-source": "src/Control-Concurrent-MSampleVar.html#newEmptySV",
        "fct-type": "function",
        "title": "newEmptySV"
      },
      "index": {
        "description": "newEmptySV allocates new MSampleVar in an empty state No futher allocation is done when using the MSampleVar",
        "hierarchy": "Control Concurrent MSampleVar",
        "module": "Control.Concurrent.MSampleVar",
        "name": "newEmptySV",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "Empty SV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSampleVar.html#v:newSV",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enewSV\u003c/a\u003e\u003c/code\u003e allocates a new MSampleVar containing the passed value.  The value\n is not evalated or forced, but stored lazily.  No futher allocation is done\n when using the \u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSampleVar",
        "fct-package": "SafeSemaphore",
        "fct-signature": "a -\u003e IO (MSampleVar a)",
        "fct-source": "src/Control-Concurrent-MSampleVar.html#newSV",
        "fct-type": "function",
        "title": "newSV"
      },
      "index": {
        "description": "newSV allocates new MSampleVar containing the passed value The value is not evalated or forced but stored lazily No futher allocation is done when using the MSampleVar",
        "hierarchy": "Control Concurrent MSampleVar",
        "module": "Control.Concurrent.MSampleVar",
        "name": "newSV",
        "normalized": "a-\u003eIO(MSampleVar a)",
        "package": "SafeSemaphore",
        "partial": "SV",
        "signature": "a-\u003eIO(MSampleVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSampleVar.html#v:readSV",
      "description": {
        "fct-descr": "\u003cp\u003eWait for a value to become available, then take it and return.  The queue\n of blocked \u003ccode\u003e\u003ca\u003ereadSV\u003c/a\u003e\u003c/code\u003e threads is a fair FIFO queue.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ereadSV\u003c/a\u003e\u003c/code\u003e can block and be interrupted, in which case it takes nothing.  If\n 'readSV returns normally then it has taken a value.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSampleVar",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSampleVar a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-MSampleVar.html#readSV",
        "fct-type": "function",
        "title": "readSV"
      },
      "index": {
        "description": "Wait for value to become available then take it and return The queue of blocked readSV threads is fair FIFO queue readSV can block and be interrupted in which case it takes nothing If readSV returns normally then it has taken value",
        "hierarchy": "Control Concurrent MSampleVar",
        "module": "Control.Concurrent.MSampleVar",
        "name": "readSV",
        "normalized": "MSampleVar a-\u003eIO a",
        "package": "SafeSemaphore",
        "partial": "SV",
        "signature": "MSampleVar a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSampleVar.html#v:writeSV",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value into the \u003ccode\u003e\u003ca\u003eMSampleVar\u003c/a\u003e\u003c/code\u003e, overwriting any previous value that\n was there.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ewriteSV\u003c/a\u003e\u003c/code\u003e can block and be interrupted, in which case it does nothing.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSampleVar",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSampleVar a -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-MSampleVar.html#writeSV",
        "fct-type": "function",
        "title": "writeSV"
      },
      "index": {
        "description": "Write value into the MSampleVar overwriting any previous value that was there writeSV can block and be interrupted in which case it does nothing",
        "hierarchy": "Control Concurrent MSampleVar",
        "module": "Control.Concurrent.MSampleVar",
        "name": "writeSV",
        "normalized": "MSampleVar a-\u003ea-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "SV",
        "signature": "MSampleVar a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSem.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a literate haskell version of Control.Concurrent.MSem for increased clarity.\n\u003c/p\u003e\u003cp\u003eA semaphore in which operations may \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e for or \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e single units of value.  This modules\n is intended to improve on \u003ca\u003eControl.Concurrent.QSem\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis semaphore gracefully handles threads which die while blocked waiting.  The fairness\n guarantee is that blocked threads are servied in a FIFO order.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e is used to guard a critical section then no quantity of the semaphore will be lost if\n the activity throws an exception or if this thread is killed by the rest of the program.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e can initialize the semaphore to negative, zero, or positive quantity.\n \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e always leaves the \u003ccode\u003e\u003ca\u003eMSem\u003c/a\u003e\u003c/code\u003e with non-negative quantity.\n \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e alawys adds one to the quantity.\n\u003c/p\u003e\u003cp\u003eThe functions below are generic in (Integral i) with specialization to Int, Word, and Integer.\n\u003c/p\u003e\u003cp\u003eOverflow warning: These operations do not check for overflow errors.  If the Integral type is too\n small to accept the new total then the behavior of \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e is undefined.  Using (MSem\n Integer) prevents the possibility of an overflow error.  [ A version of \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e that checks the upper\n bound could be added, but how would it report failure and how would you use this sanely? ]\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.MSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-MSem.html",
        "fct-type": "module",
        "title": "MSem"
      },
      "index": {
        "description": "This is literate haskell version of Control.Concurrent.MSem for increased clarity semaphore in which operations may wait for or signal single units of value This modules is intended to improve on Control.Concurrent.QSem This semaphore gracefully handles threads which die while blocked waiting The fairness guarantee is that blocked threads are servied in FIFO order If with is used to guard critical section then no quantity of the semaphore will be lost if the activity throws an exception or if this thread is killed by the rest of the program new can initialize the semaphore to negative zero or positive quantity wait always leaves the MSem with non-negative quantity signal alawys adds one to the quantity The functions below are generic in Integral with specialization to Int Word and Integer Overflow warning These operations do not check for overflow errors If the Integral type is too small to accept the new total then the behavior of signal is undefined Using MSem Integer prevents the possibility of an overflow error version of signal that checks the upper bound could be added but how would it report failure and how would you use this sanely",
        "hierarchy": "Control Concurrent MSem",
        "module": "Control.Concurrent.MSem",
        "name": "MSem",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "MSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSem.html#t:MSem",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMSem\u003c/a\u003e\u003c/code\u003e is a semaphore in which the available quantity can be added and removed in single\n  units, and which can start with positive, zero, or negative value.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-MSem.html#MSem",
        "fct-type": "data",
        "title": "MSem"
      },
      "index": {
        "description": "MSem is semaphore in which the available quantity can be added and removed in single units and which can start with positive zero or negative value",
        "hierarchy": "Control Concurrent MSem",
        "module": "Control.Concurrent.MSem",
        "name": "MSem",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "MSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSem.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e allows positive, zero, and negative initial values.  The initial value is forced here to\n better localize errors.\n\u003c/p\u003e\u003cp\u003eThe only way to achieve a negative value with MSem is to start negative with \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e.  Once a negative quantity becomes non-negative\n by use of \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e it will never later be negative.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "i -\u003e IO (MSem i)",
        "fct-source": "src/Control-Concurrent-MSem.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "new allows positive zero and negative initial values The initial value is forced here to better localize errors The only way to achieve negative value with MSem is to start negative with new Once negative quantity becomes non-negative by use of signal it will never later be negative",
        "hierarchy": "Control Concurrent MSem",
        "module": "Control.Concurrent.MSem",
        "name": "new",
        "normalized": "a-\u003eIO(MSem a)",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "i-\u003eIO(MSem i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSem.html#v:peekAvail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e skips the queue of any blocked \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e threads, but may momentarily block on\n \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e, other \u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e, and the head waiter. This returns the amount of value available to\n be taken.  Using this value without producing unwanted race conditions is left up to the\n programmer.\n\u003c/p\u003e\u003cp\u003eNote that \u003ca\u003eControl.Concurrent.MSemN\u003c/a\u003e offers a more powerful API for making decisions based on the\n available amount.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSem i -\u003e IO i",
        "fct-source": "src/Control-Concurrent-MSem.html#peekAvail",
        "fct-type": "function",
        "title": "peekAvail"
      },
      "index": {
        "description": "peekAvail skips the queue of any blocked wait threads but may momentarily block on signal other peekAvail and the head waiter This returns the amount of value available to be taken Using this value without producing unwanted race conditions is left up to the programmer Note that Control.Concurrent.MSemN offers more powerful API for making decisions based on the available amount",
        "hierarchy": "Control Concurrent MSem",
        "module": "Control.Concurrent.MSem",
        "name": "peekAvail",
        "normalized": "MSem a-\u003eIO a",
        "package": "SafeSemaphore",
        "partial": "Avail",
        "signature": "MSem i-\u003eIO i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSem.html#v:signal",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e adds one unit to the sempahore.  Overflow is not checked.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e may block, but it cannot be interrupted, which allows it to dependably restore value to\n the \u003ccode\u003e\u003ca\u003eMSem\u003c/a\u003e\u003c/code\u003e.  All \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e, and the head waiter may momentarily block in a fair FIFO\n manner.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSem i -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-MSem.html#signal",
        "fct-type": "function",
        "title": "signal"
      },
      "index": {
        "description": "signal adds one unit to the sempahore Overflow is not checked signal may block but it cannot be interrupted which allows it to dependably restore value to the MSem All signal peekAvail and the head waiter may momentarily block in fair FIFO manner",
        "hierarchy": "Control Concurrent MSem",
        "module": "Control.Concurrent.MSem",
        "name": "signal",
        "normalized": "MSem a-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSem i-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSem.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e will take one unit of value from the sempahore, but will block if the quantity available\n is not positive.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e returns normally (not interrupted) then it left the \u003ccode\u003e\u003ca\u003eMSem\u003c/a\u003e\u003c/code\u003e with a remaining quantity that was\n greater than or equal to zero.  If \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e is interrupted then no quantity is lost.  If \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e\n returns without interruption then it is known that each earlier waiter has definitely either been\n interrupted or has retured without interruption (the FIFO guarantee).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSem i -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-MSem.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "wait will take one unit of value from the sempahore but will block if the quantity available is not positive If wait returns normally not interrupted then it left the MSem with remaining quantity that was greater than or equal to zero If wait is interrupted then no quantity is lost If wait returns without interruption then it is known that each earlier waiter has definitely either been interrupted or has retured without interruption the FIFO guarantee",
        "hierarchy": "Control Concurrent MSem",
        "module": "Control.Concurrent.MSem",
        "name": "wait",
        "normalized": "MSem a-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSem i-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSem.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e takes a unit of value from the semaphore to hold while performing the provided\n operation.  \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e ensures the quantity of the sempahore cannot be lost if there are exceptions or\n if killThread is used.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e to ensure \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e get called correctly.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSem i -\u003e IO a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-MSem.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "with takes unit of value from the semaphore to hold while performing the provided operation with ensures the quantity of the sempahore cannot be lost if there are exceptions or if killThread is used with uses bracket to ensure wait and signal get called correctly",
        "hierarchy": "Control Concurrent MSem",
        "module": "Control.Concurrent.MSem",
        "name": "with",
        "normalized": "MSem a-\u003eIO b-\u003eIO b",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSem i-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuantity semaphores in which each thread may wait for an arbitrary amount.  This modules is\n intended to improve on \u003ca\u003eControl.Concurrent.QSemN\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis semaphore gracefully handles threads which die while blocked waiting for quantity.  The\n fairness guarantee is that blocked threads are FIFO.  An early thread waiting for a large\n quantity will prevent a later thread waiting for a small quantity from jumping the queue.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e is used to guard a critical section then no quantity of the semaphore will be lost\n if the activity throws an exception.\n\u003c/p\u003e\u003cp\u003eThe functions below are generic in (Integral i) with specialization to Int and Integer.\n\u003c/p\u003e\u003cp\u003eOverflow warning: These operations do not check for overflow errors.  If the Integral type is too\n small to accept the new total then the behavior of these operations is undefined.  Using (MSem\n Integer) prevents the possibility of an overflow error.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.MSemN",
        "fct-package": "SafeSemaphore",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-MSemN.html",
        "fct-type": "module",
        "title": "MSemN"
      },
      "index": {
        "description": "Quantity semaphores in which each thread may wait for an arbitrary amount This modules is intended to improve on Control.Concurrent.QSemN This semaphore gracefully handles threads which die while blocked waiting for quantity The fairness guarantee is that blocked threads are FIFO An early thread waiting for large quantity will prevent later thread waiting for small quantity from jumping the queue If with is used to guard critical section then no quantity of the semaphore will be lost if the activity throws an exception The functions below are generic in Integral with specialization to Int and Integer Overflow warning These operations do not check for overflow errors If the Integral type is too small to accept the new total then the behavior of these operations is undefined Using MSem Integer prevents the possibility of an overflow error",
        "hierarchy": "Control Concurrent MSemN",
        "module": "Control.Concurrent.MSemN",
        "name": "MSemN",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "MSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN.html#t:MSemN",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e is a quantity semaphore, in which the available quantity may be signalled or\n waited for in arbitrary amounts.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN",
        "fct-package": "SafeSemaphore",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-MSemN.html#MSemN",
        "fct-type": "data",
        "title": "MSemN"
      },
      "index": {
        "description": "MSemN is quantity semaphore in which the available quantity may be signalled or waited for in arbitrary amounts",
        "hierarchy": "Control Concurrent MSemN",
        "module": "Control.Concurrent.MSemN",
        "name": "MSemN",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "MSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e allows positive, zero, and negative initial values.  The initial value is forced here to\n better localize errors.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN",
        "fct-package": "SafeSemaphore",
        "fct-signature": "i -\u003e IO (MSemN i)",
        "fct-source": "src/Control-Concurrent-MSemN.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "new allows positive zero and negative initial values The initial value is forced here to better localize errors",
        "hierarchy": "Control Concurrent MSemN",
        "module": "Control.Concurrent.MSemN",
        "name": "new",
        "normalized": "a-\u003eIO(MSemN a)",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "i-\u003eIO(MSemN i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN.html#v:peekAvail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e skips the queue of any blocked \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e threads, but may momentarily\n block on \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esignalF\u003c/a\u003e\u003c/code\u003e, other \u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e, and the head waiter. This returns the amount of\n value available to be taken.  Using this value without producing unwanted race conditions is left\n up to the programmer.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e is an optimized form of \"signalF m (x -\u003e (0,x))\".\n\u003c/p\u003e\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e that joins the FIFO queue of \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e can be acheived by\n \"waitF m (x -\u003e (0,x))\"\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e IO i",
        "fct-source": "src/Control-Concurrent-MSemN.html#peekAvail",
        "fct-type": "function",
        "title": "peekAvail"
      },
      "index": {
        "description": "peekAvail skips the queue of any blocked wait and waitF threads but may momentarily block on signal signalF other peekAvail and the head waiter This returns the amount of value available to be taken Using this value without producing unwanted race conditions is left up to the programmer peekAvail is an optimized form of signalF version of peekAvail that joins the FIFO queue of wait and waitF can be acheived by waitF",
        "hierarchy": "Control Concurrent MSemN",
        "module": "Control.Concurrent.MSemN",
        "name": "peekAvail",
        "normalized": "MSemN a-\u003eIO a",
        "package": "SafeSemaphore",
        "partial": "Avail",
        "signature": "MSemN i-\u003eIO i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN.html#v:signal",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e allows positive, zero, and negative values, thus this is also way to remove quantity\n that skips any threads in the 'wait'/'waitF' queue.  If the new total is greater than the next\n value being waited for (if present) then the first waiter is woken.  If there are queued waiters\n then the next one will wake after a waiter has proceeded and notice the remaining value; thus a\n single \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e may result in several waiters obtaining values.  Waking waiting threads is\n asynchronous.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e may block, but it cannot be interrupted, which allows it to dependably restore value to\n the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e.  All \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esignalF\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e, and the head waiter may momentarily block in a\n fair FIFO manner.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e i -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-MSemN.html#signal",
        "fct-type": "function",
        "title": "signal"
      },
      "index": {
        "description": "signal allows positive zero and negative values thus this is also way to remove quantity that skips any threads in the wait waitF queue If the new total is greater than the next value being waited for if present then the first waiter is woken If there are queued waiters then the next one will wake after waiter has proceeded and notice the remaining value thus single signal may result in several waiters obtaining values Waking waiting threads is asynchronous signal may block but it cannot be interrupted which allows it to dependably restore value to the MSemN All signal signalF peekAvail and the head waiter may momentarily block in fair FIFO manner",
        "hierarchy": "Control Concurrent MSemN",
        "module": "Control.Concurrent.MSemN",
        "name": "signal",
        "normalized": "MSemN a-\u003ea-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSemN i-\u003ei-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN.html#v:signalF",
      "description": {
        "fct-descr": "\u003cp\u003eInstead of providing a fixed change to the available quantity, \u003ccode\u003e\u003ca\u003esignalF\u003c/a\u003e\u003c/code\u003e applies a provided\n pure function to the available quantity to compute the change and a second value.  The\n requested change is stricly evaluated but the second value is returned lazily.  If the new total is\n greater than the next value being waited for then the first waiter is woken.  If there are queued\n waiters then the next one will wake after a waiter has proceeded and notice the remaining value;\n thus a single \u003ccode\u003e\u003ca\u003esignalF\u003c/a\u003e\u003c/code\u003e may result in several waiters obtaining values.  Waking waiting threads\n is asynchronous.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esignalF\u003c/a\u003e\u003c/code\u003e may block, and it can be safely interrupted.  If the provided function throws an error\n or is interrupted then it leaves the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e unchanged.  All \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esignalF\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e, and\n the head waiter may momentarily block in a fair FIFO manner.\n\u003c/p\u003e\u003cp\u003eNote: A long running pure function will block all other access to the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e while it is\n evaluated.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e (i -\u003e (i, b)) -\u003e IO (i, b)",
        "fct-source": "src/Control-Concurrent-MSemN.html#signalF",
        "fct-type": "function",
        "title": "signalF"
      },
      "index": {
        "description": "Instead of providing fixed change to the available quantity signalF applies provided pure function to the available quantity to compute the change and second value The requested change is stricly evaluated but the second value is returned lazily If the new total is greater than the next value being waited for then the first waiter is woken If there are queued waiters then the next one will wake after waiter has proceeded and notice the remaining value thus single signalF may result in several waiters obtaining values Waking waiting threads is asynchronous signalF may block and it can be safely interrupted If the provided function throws an error or is interrupted then it leaves the MSemN unchanged All signal signalF peekAvail and the head waiter may momentarily block in fair FIFO manner Note long running pure function will block all other access to the MSemN while it is evaluated",
        "hierarchy": "Control Concurrent MSemN",
        "module": "Control.Concurrent.MSemN",
        "name": "signalF",
        "normalized": "MSemN a-\u003e(a-\u003e(a,b))-\u003eIO(a,b)",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSemN i-\u003e(i-\u003e(i,b))-\u003eIO(i,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e allow positive, zero, and negative wanted values.  Waiters may block, and will be handled\n fairly in FIFO order.  Waiters will succeed when the wanted value is less than or equal to the\n available value.  The FIFO order means that a \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e for a large quantity that blocks will prevent later\n requests from being considered even if the later requests would be for a small quantity that could be fulfilled.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e returns without interruption then it left the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e with a remaining quantity that was\n greater than or equal to zero.  If \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e is interrupted then no quantity is lost.  If \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e\n returns without interruption then it is known that each earlier waiter has definitely either been\n interrupted or has retured without interruption.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e i -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-MSemN.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "wait allow positive zero and negative wanted values Waiters may block and will be handled fairly in FIFO order Waiters will succeed when the wanted value is less than or equal to the available value The FIFO order means that wait for large quantity that blocks will prevent later requests from being considered even if the later requests would be for small quantity that could be fulfilled If wait returns without interruption then it left the MSemN with remaining quantity that was greater than or equal to zero If wait is interrupted then no quantity is lost If wait returns without interruption then it is known that each earlier waiter has definitely either been interrupted or has retured without interruption",
        "hierarchy": "Control Concurrent MSemN",
        "module": "Control.Concurrent.MSemN",
        "name": "wait",
        "normalized": "MSemN a-\u003ea-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSemN i-\u003ei-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN.html#v:waitF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewaitWith\u003c/code\u003e takes the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e and a pure function that takes the available quantity and computes the\n amount wanted and a second value.  The value wanted is stricly evaluated but the second value is\n returned lazily.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e allow positive, zero, and negative wanted values.  Waiters may block, and will be handled\n fairly in FIFO order.  Waiters will succeed when the wanted value is less than or equal to the\n available value.  The FIFO order means that a \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e for a large quantity that blocks will prevent later\n requests from being considered even if the later requests would be for a small quantity that could be fulfilled.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e returns without interruption then it left the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e with a remaining quantity that was\n greater than or equal to zero.  If \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e or the provided function are interrupted then no\n quantity is lost.  If \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e returns without interruption then it is known that each previous\n waiter has each definitely either been interrupted or has retured without interruption.\n\u003c/p\u003e\u003cp\u003eNote: A long running pure function will block all other access to the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e while it is\n evaluated.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e (i -\u003e (i, b)) -\u003e IO (i, b)",
        "fct-source": "src/Control-Concurrent-MSemN.html#waitF",
        "fct-type": "function",
        "title": "waitF"
      },
      "index": {
        "description": "waitWith takes the MSemN and pure function that takes the available quantity and computes the amount wanted and second value The value wanted is stricly evaluated but the second value is returned lazily waitF allow positive zero and negative wanted values Waiters may block and will be handled fairly in FIFO order Waiters will succeed when the wanted value is less than or equal to the available value The FIFO order means that waitF for large quantity that blocks will prevent later requests from being considered even if the later requests would be for small quantity that could be fulfilled If waitF returns without interruption then it left the MSemN with remaining quantity that was greater than or equal to zero If waitF or the provided function are interrupted then no quantity is lost If waitF returns without interruption then it is known that each previous waiter has each definitely either been interrupted or has retured without interruption Note long running pure function will block all other access to the MSemN while it is evaluated",
        "hierarchy": "Control Concurrent MSemN",
        "module": "Control.Concurrent.MSemN",
        "name": "waitF",
        "normalized": "MSemN a-\u003e(a-\u003e(a,b))-\u003eIO(a,b)",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSemN i-\u003e(i-\u003e(i,b))-\u003eIO(i,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e takes a quantity of the semaphore to take and hold while performing the provided\n operation.  \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e ensures the quantity of the sempahore cannot be lost if there are exceptions.\n This uses \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e to ensure \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e get called correctly.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e i -\u003e IO a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-MSemN.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "with takes quantity of the semaphore to take and hold while performing the provided operation with ensures the quantity of the sempahore cannot be lost if there are exceptions This uses bracket to ensure wait and signal get called correctly",
        "hierarchy": "Control Concurrent MSemN",
        "module": "Control.Concurrent.MSemN",
        "name": "with",
        "normalized": "MSemN a-\u003ea-\u003eIO b-\u003eIO b",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSemN i-\u003ei-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN.html#v:withF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithF\u003c/a\u003e\u003c/code\u003e takes a pure function and an operation.  The pure function converts the available\n quantity to a pair of the wanted quantity and a returned value.  The operation takes the result\n of the pure function.  \u003ccode\u003e\u003ca\u003ewithF\u003c/a\u003e\u003c/code\u003e ensures the quantity of the sempahore cannot be lost if there\n are exceptions.  This uses \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e to ensure \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e get called correctly.\n\u003c/p\u003e\u003cp\u003eNote: A long running pure function will block all other access to the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e while it is\n evaluated.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e (i -\u003e (i, b)) -\u003e ((i, b) -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Control-Concurrent-MSemN.html#withF",
        "fct-type": "function",
        "title": "withF"
      },
      "index": {
        "description": "withF takes pure function and an operation The pure function converts the available quantity to pair of the wanted quantity and returned value The operation takes the result of the pure function withF ensures the quantity of the sempahore cannot be lost if there are exceptions This uses bracket to ensure waitF and signal get called correctly Note long running pure function will block all other access to the MSemN while it is evaluated",
        "hierarchy": "Control Concurrent MSemN",
        "module": "Control.Concurrent.MSemN",
        "name": "withF",
        "normalized": "MSemN a-\u003e(a-\u003e(a,b))-\u003e((a,b)-\u003eIO c)-\u003eIO c",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSemN i-\u003e(i-\u003e(i,b))-\u003e((i,b)-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN2.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuantity semaphores in which each thread may wait for an arbitrary amount.  This modules is\n intended to improve on \u003ca\u003eControl.Concurrent.QSemN\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis semaphore gracefully handles threads which die while blocked waiting for quantity.  The\n fairness guarantee is that blocked threads are FIFO.  An early thread waiting for a large\n quantity will prevent a later thread waiting for a small quantity from jumping the queue.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e is used to guard a critical section then no quantity of the semaphore will be lost\n if the activity throws an exception.\n\u003c/p\u003e\u003cp\u003eThe functions below are generic in (Integral i) with specialization to Int and Integer.\n\u003c/p\u003e\u003cp\u003eOverflow warning: These operations do not check for overflow errors.  If the Integral type is too\n small to accept the new total then the behavior of these operations is undefined.  Using (MSem\n Integer) prevents the possibility of an overflow error.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.MSemN2",
        "fct-package": "SafeSemaphore",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-MSemN2.html",
        "fct-type": "module",
        "title": "MSemN2"
      },
      "index": {
        "description": "Quantity semaphores in which each thread may wait for an arbitrary amount This modules is intended to improve on Control.Concurrent.QSemN This semaphore gracefully handles threads which die while blocked waiting for quantity The fairness guarantee is that blocked threads are FIFO An early thread waiting for large quantity will prevent later thread waiting for small quantity from jumping the queue If with is used to guard critical section then no quantity of the semaphore will be lost if the activity throws an exception The functions below are generic in Integral with specialization to Int and Integer Overflow warning These operations do not check for overflow errors If the Integral type is too small to accept the new total then the behavior of these operations is undefined Using MSem Integer prevents the possibility of an overflow error",
        "hierarchy": "Control Concurrent MSemN2",
        "module": "Control.Concurrent.MSemN2",
        "name": "MSemN2",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "MSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN2.html#t:MSemN",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e is a quantity semaphore, in which the available quantity may be signalled or\n waited for in arbitrary amounts.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN2",
        "fct-package": "SafeSemaphore",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-MSemN2.html#MSemN",
        "fct-type": "data",
        "title": "MSemN"
      },
      "index": {
        "description": "MSemN is quantity semaphore in which the available quantity may be signalled or waited for in arbitrary amounts",
        "hierarchy": "Control Concurrent MSemN2",
        "module": "Control.Concurrent.MSemN2",
        "name": "MSemN",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "MSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN2.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e allows positive, zero, and negative initial values.  The initial value is forced here to\n better localize errors.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN2",
        "fct-package": "SafeSemaphore",
        "fct-signature": "i -\u003e IO (MSemN i)",
        "fct-source": "src/Control-Concurrent-MSemN2.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "new allows positive zero and negative initial values The initial value is forced here to better localize errors",
        "hierarchy": "Control Concurrent MSemN2",
        "module": "Control.Concurrent.MSemN2",
        "name": "new",
        "normalized": "a-\u003eIO(MSemN a)",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "i-\u003eIO(MSemN i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN2.html#v:peekAvail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e skips the queue of any blocked \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e threads, but may momentarily\n block on \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esignalF\u003c/a\u003e\u003c/code\u003e, other \u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e, and the head waiter. This returns the amount of\n value available to be taken.  Using this value without producing unwanted race conditions is left\n up to the programmer.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e is an optimized form of \"signalF m (x -\u003e (0,x))\".\n\u003c/p\u003e\u003cp\u003eQuantity that has been passed to a blocked waiter but not picked up is not counted.  If the\n blocked waiter is killed before picking it up then the passed quantity will be recovered by the\n next waiter.  In this exceptional case this next waiter may see an available total that is\n different than returned by peekAvail.\n\u003c/p\u003e\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e that joins the FIFO queue of \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e can be acheived by\n \"waitF m (x -\u003e (0,x))\" but this will block if x is negative.  On the other hand this method\n will see the total including any recovered quantity.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN2",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e IO i",
        "fct-source": "src/Control-Concurrent-MSemN2.html#peekAvail",
        "fct-type": "function",
        "title": "peekAvail"
      },
      "index": {
        "description": "peekAvail skips the queue of any blocked wait and waitF threads but may momentarily block on signal signalF other peekAvail and the head waiter This returns the amount of value available to be taken Using this value without producing unwanted race conditions is left up to the programmer peekAvail is an optimized form of signalF Quantity that has been passed to blocked waiter but not picked up is not counted If the blocked waiter is killed before picking it up then the passed quantity will be recovered by the next waiter In this exceptional case this next waiter may see an available total that is different than returned by peekAvail version of peekAvail that joins the FIFO queue of wait and waitF can be acheived by waitF but this will block if is negative On the other hand this method will see the total including any recovered quantity",
        "hierarchy": "Control Concurrent MSemN2",
        "module": "Control.Concurrent.MSemN2",
        "name": "peekAvail",
        "normalized": "MSemN a-\u003eIO a",
        "package": "SafeSemaphore",
        "partial": "Avail",
        "signature": "MSemN i-\u003eIO i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN2.html#v:signal",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e allows positive, zero, and negative values, thus this is also way to remove quantity\n that skips any threads in the 'wait'/'waitF' queue.  If the new total is greater than the next\n value being waited for (if present) then the first waiter is woken.  If there are queued waiters\n then the next one will wake after a waiter has proceeded and notice the remaining value; thus a\n single \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e may result in several waiters obtaining values.  Waking waiting threads is\n asynchronous.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e may block, but it cannot be interrupted, which allows it to dependably restore value to\n the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e.  All \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esignalF\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e, and the head waiter may momentarily block in a\n fair FIFO manner.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN2",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e i -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-MSemN2.html#signal",
        "fct-type": "function",
        "title": "signal"
      },
      "index": {
        "description": "signal allows positive zero and negative values thus this is also way to remove quantity that skips any threads in the wait waitF queue If the new total is greater than the next value being waited for if present then the first waiter is woken If there are queued waiters then the next one will wake after waiter has proceeded and notice the remaining value thus single signal may result in several waiters obtaining values Waking waiting threads is asynchronous signal may block but it cannot be interrupted which allows it to dependably restore value to the MSemN All signal signalF peekAvail and the head waiter may momentarily block in fair FIFO manner",
        "hierarchy": "Control Concurrent MSemN2",
        "module": "Control.Concurrent.MSemN2",
        "name": "signal",
        "normalized": "MSemN a-\u003ea-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSemN i-\u003ei-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN2.html#v:signalF",
      "description": {
        "fct-descr": "\u003cp\u003eInstead of providing a fixed change to the available quantity, \u003ccode\u003e\u003ca\u003esignalF\u003c/a\u003e\u003c/code\u003e applies a provided\n pure function to the available quantity to compute the change and a second value.  The\n requested change is stricly evaluated but the second value is returned lazily.  If the new total is\n greater than the next value being waited for then the first waiter is woken.  If there are queued\n waiters then the next one will wake after a waiter has proceeded and notice the remaining value;\n thus a single \u003ccode\u003e\u003ca\u003esignalF\u003c/a\u003e\u003c/code\u003e may result in several waiters obtaining values.  Waking waiting threads\n is asynchronous.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esignalF\u003c/a\u003e\u003c/code\u003e may block, and it can be safely interrupted.  If the provided function throws an error\n or is interrupted then it leaves the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e unchanged.  All \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esignalF\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epeekAvail\u003c/a\u003e\u003c/code\u003e, and\n the head waiter may momentarily block in a fair FIFO manner.\n\u003c/p\u003e\u003cp\u003eNote: A long running pure function will block all other access to the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e while it is\n evaluated.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN2",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e (i -\u003e (i, b)) -\u003e IO (i, b)",
        "fct-source": "src/Control-Concurrent-MSemN2.html#signalF",
        "fct-type": "function",
        "title": "signalF"
      },
      "index": {
        "description": "Instead of providing fixed change to the available quantity signalF applies provided pure function to the available quantity to compute the change and second value The requested change is stricly evaluated but the second value is returned lazily If the new total is greater than the next value being waited for then the first waiter is woken If there are queued waiters then the next one will wake after waiter has proceeded and notice the remaining value thus single signalF may result in several waiters obtaining values Waking waiting threads is asynchronous signalF may block and it can be safely interrupted If the provided function throws an error or is interrupted then it leaves the MSemN unchanged All signal signalF peekAvail and the head waiter may momentarily block in fair FIFO manner Note long running pure function will block all other access to the MSemN while it is evaluated",
        "hierarchy": "Control Concurrent MSemN2",
        "module": "Control.Concurrent.MSemN2",
        "name": "signalF",
        "normalized": "MSemN a-\u003e(a-\u003e(a,b))-\u003eIO(a,b)",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSemN i-\u003e(i-\u003e(i,b))-\u003eIO(i,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN2.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e allow positive, zero, and negative wanted values.  Waiters may block, and will be handled\n fairly in FIFO order.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e returns without interruption then it left the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e with a remaining quantity that was\n greater than or equal to zero.  If \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e is interrupted then no quantity is lost.  If \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e\n returns without interruption then it is known that each earlier waiter has definitely either been\n interrupted or has retured without interruption.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN2",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e i -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-MSemN2.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "wait allow positive zero and negative wanted values Waiters may block and will be handled fairly in FIFO order If wait returns without interruption then it left the MSemN with remaining quantity that was greater than or equal to zero If wait is interrupted then no quantity is lost If wait returns without interruption then it is known that each earlier waiter has definitely either been interrupted or has retured without interruption",
        "hierarchy": "Control Concurrent MSemN2",
        "module": "Control.Concurrent.MSemN2",
        "name": "wait",
        "normalized": "MSemN a-\u003ea-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSemN i-\u003ei-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN2.html#v:waitF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewaitWith\u003c/code\u003e takes the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e and a pure function that takes the available quantity and computes the\n amount wanted and a second value.  The value wanted is stricly evaluated but the second value is\n returned lazily.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e allow positive, zero, and negative wanted values.  Waiters may block, and will be handled\n fairly in FIFO order.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e returns without interruption then it left the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e with a remaining quantity that was\n greater than or equal to zero.  If \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e or the provided function are interrupted then no\n quantity is lost.  If \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e returns without interruption then it is known that each previous\n waiter has each definitely either been interrupted or has retured without interruption.\n\u003c/p\u003e\u003cp\u003eNote: A long running pure function will block all other access to the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e while it is\n evaluated.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN2",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e (i -\u003e (i, b)) -\u003e IO (i, b)",
        "fct-source": "src/Control-Concurrent-MSemN2.html#waitF",
        "fct-type": "function",
        "title": "waitF"
      },
      "index": {
        "description": "waitWith takes the MSemN and pure function that takes the available quantity and computes the amount wanted and second value The value wanted is stricly evaluated but the second value is returned lazily waitF allow positive zero and negative wanted values Waiters may block and will be handled fairly in FIFO order If waitF returns without interruption then it left the MSemN with remaining quantity that was greater than or equal to zero If waitF or the provided function are interrupted then no quantity is lost If waitF returns without interruption then it is known that each previous waiter has each definitely either been interrupted or has retured without interruption Note long running pure function will block all other access to the MSemN while it is evaluated",
        "hierarchy": "Control Concurrent MSemN2",
        "module": "Control.Concurrent.MSemN2",
        "name": "waitF",
        "normalized": "MSemN a-\u003e(a-\u003e(a,b))-\u003eIO(a,b)",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSemN i-\u003e(i-\u003e(i,b))-\u003eIO(i,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN2.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e takes a quantity of the semaphore to take and hold while performing the provided\n operation.  \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e ensures the quantity of the sempahore cannot be lost if there are exceptions.\n This uses \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e to ensure \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e get called correctly.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN2",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e i -\u003e IO a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-MSemN2.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "with takes quantity of the semaphore to take and hold while performing the provided operation with ensures the quantity of the sempahore cannot be lost if there are exceptions This uses bracket to ensure wait and signal get called correctly",
        "hierarchy": "Control Concurrent MSemN2",
        "module": "Control.Concurrent.MSemN2",
        "name": "with",
        "normalized": "MSemN a-\u003ea-\u003eIO b-\u003eIO b",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSemN i-\u003ei-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-MSemN2.html#v:withF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithF\u003c/a\u003e\u003c/code\u003e takes a pure function and an operation.  The pure function converts the available\n quantity to a pair of the wanted quantity and a returned value.  The operation takes the result\n of the pure function.  \u003ccode\u003e\u003ca\u003ewithF\u003c/a\u003e\u003c/code\u003e ensures the quantity of the sempahore cannot be lost if there\n are exceptions.  This uses \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e to ensure \u003ccode\u003e\u003ca\u003ewaitF\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e get called correctly.\n\u003c/p\u003e\u003cp\u003eNote: A long running pure function will block all other access to the \u003ccode\u003e\u003ca\u003eMSemN\u003c/a\u003e\u003c/code\u003e while it is\n evaluated.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MSemN2",
        "fct-package": "SafeSemaphore",
        "fct-signature": "MSemN i -\u003e (i -\u003e (i, b)) -\u003e ((i, b) -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Control-Concurrent-MSemN2.html#withF",
        "fct-type": "function",
        "title": "withF"
      },
      "index": {
        "description": "withF takes pure function and an operation The pure function converts the available quantity to pair of the wanted quantity and returned value The operation takes the result of the pure function withF ensures the quantity of the sempahore cannot be lost if there are exceptions This uses bracket to ensure waitF and signal get called correctly Note long running pure function will block all other access to the MSemN while it is evaluated",
        "hierarchy": "Control Concurrent MSemN2",
        "module": "Control.Concurrent.MSemN2",
        "name": "withF",
        "normalized": "MSemN a-\u003e(a-\u003e(a,b))-\u003e((a,b)-\u003eIO c)-\u003eIO c",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "MSemN i-\u003e(i-\u003e(i,b))-\u003e((i,b)-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-SSem.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVery simple quantity semaphore.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-SSem.html",
        "fct-type": "module",
        "title": "SSem"
      },
      "index": {
        "description": "Very simple quantity semaphore",
        "hierarchy": "Control Concurrent SSem",
        "module": "Control.Concurrent.SSem",
        "name": "SSem",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "SSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-SSem.html#t:SSem",
      "description": {
        "fct-module": "Control.Concurrent.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-SSemInternals.html#SSem",
        "fct-type": "data",
        "title": "SSem"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SSem",
        "module": "Control.Concurrent.SSem",
        "name": "SSem",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "SSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-SSem.html#v:getValue",
      "description": {
        "fct-descr": "\u003cp\u003eThis returns the current quantity in the semaphore.  This is diffucult to use due to race conditions.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e IO Int",
        "fct-source": "src/Control-Concurrent-SSem.html#getValue",
        "fct-type": "function",
        "title": "getValue"
      },
      "index": {
        "description": "This returns the current quantity in the semaphore This is diffucult to use due to race conditions",
        "hierarchy": "Control Concurrent SSem",
        "module": "Control.Concurrent.SSem",
        "name": "getValue",
        "normalized": "SSem-\u003eIO Int",
        "package": "SafeSemaphore",
        "partial": "Value",
        "signature": "SSem-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-SSem.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new semaphore with the given argument as the initially available quantity.  This\n allows new semaphores to start with a negative, zero, or positive quantity.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "Int -\u003e IO SSem",
        "fct-source": "src/Control-Concurrent-SSem.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new semaphore with the given argument as the initially available quantity This allows new semaphores to start with negative zero or positive quantity",
        "hierarchy": "Control Concurrent SSem",
        "module": "Control.Concurrent.SSem",
        "name": "new",
        "normalized": "Int-\u003eIO SSem",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "Int-\u003eIO SSem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-SSem.html#v:signal",
      "description": {
        "fct-descr": "\u003cp\u003eSignal that single unit of the semaphore is available.  This increases the available quantity\n by one.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-SSem.html#signal",
        "fct-type": "function",
        "title": "signal"
      },
      "index": {
        "description": "Signal that single unit of the semaphore is available This increases the available quantity by one",
        "hierarchy": "Control Concurrent SSem",
        "module": "Control.Concurrent.SSem",
        "name": "signal",
        "normalized": "SSem-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "SSem-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-SSem.html#v:signalN",
      "description": {
        "fct-descr": "\u003cp\u003eSignal that many units of the semaphore are available.  This changes the available quantity by\n adding the passed size.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e Int -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-SSem.html#signalN",
        "fct-type": "function",
        "title": "signalN"
      },
      "index": {
        "description": "Signal that many units of the semaphore are available This changes the available quantity by adding the passed size",
        "hierarchy": "Control Concurrent SSem",
        "module": "Control.Concurrent.SSem",
        "name": "signalN",
        "normalized": "SSem-\u003eInt-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "SSem-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-SSem.html#v:tryWait",
      "description": {
        "fct-descr": "\u003cp\u003eNon-waiting version of wait.  `tryWait s` is defined as `tryWaitN s 1`\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e IO (Maybe Int)",
        "fct-source": "src/Control-Concurrent-SSem.html#tryWait",
        "fct-type": "function",
        "title": "tryWait"
      },
      "index": {
        "description": "Non-waiting version of wait tryWait is defined as tryWaitN",
        "hierarchy": "Control Concurrent SSem",
        "module": "Control.Concurrent.SSem",
        "name": "tryWait",
        "normalized": "SSem-\u003eIO(Maybe Int)",
        "package": "SafeSemaphore",
        "partial": "Wait",
        "signature": "SSem-\u003eIO(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-SSem.html#v:tryWaitN",
      "description": {
        "fct-descr": "\u003cp\u003eNon-waiting version of waitN.  It either takes the quantity from the semaphore like\n waitN and returns `Just value taken` or finds insufficient quantity to take and returns\n Nothing\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e Int -\u003e IO (Maybe Int)",
        "fct-source": "src/Control-Concurrent-SSem.html#tryWaitN",
        "fct-type": "function",
        "title": "tryWaitN"
      },
      "index": {
        "description": "Non-waiting version of waitN It either takes the quantity from the semaphore like waitN and returns Just value taken or finds insufficient quantity to take and returns Nothing",
        "hierarchy": "Control Concurrent SSem",
        "module": "Control.Concurrent.SSem",
        "name": "tryWaitN",
        "normalized": "SSem-\u003eInt-\u003eIO(Maybe Int)",
        "package": "SafeSemaphore",
        "partial": "Wait",
        "signature": "SSem-\u003eInt-\u003eIO(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-SSem.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003eTry to take a unit of value from the semaphore.  This succeeds when the current quantity is\n positive, and then reduces the quantity by one.  Otherwise this will block and \u003ccode\u003eretry\u003c/code\u003e until it\n succeeds or is killed.  This will never result in a negative quantity.  If several threads are\n retying then which one succeeds next is undefined -- an unlucky thread might starve.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-SSem.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "Try to take unit of value from the semaphore This succeeds when the current quantity is positive and then reduces the quantity by one Otherwise this will block and retry until it succeeds or is killed This will never result in negative quantity If several threads are retying then which one succeeds next is undefined an unlucky thread might starve",
        "hierarchy": "Control Concurrent SSem",
        "module": "Control.Concurrent.SSem",
        "name": "wait",
        "normalized": "SSem-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "SSem-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-SSem.html#v:waitN",
      "description": {
        "fct-descr": "\u003cp\u003eTry to take the given value from the semaphore.  This succeeds when the quantity is greater or\n equal to the given value, and then subtracts the given value from the quantity.  Otherwise this\n will block and \u003ccode\u003eretry\u003c/code\u003e until it succeeds or is killed.  This will never result in a negative\n quantity.  If several threads are retrying then which one succeeds next is undefined -- an\n unlucky thread might starve.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e Int -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-SSem.html#waitN",
        "fct-type": "function",
        "title": "waitN"
      },
      "index": {
        "description": "Try to take the given value from the semaphore This succeeds when the quantity is greater or equal to the given value and then subtracts the given value from the quantity Otherwise this will block and retry until it succeeds or is killed This will never result in negative quantity If several threads are retrying then which one succeeds next is undefined an unlucky thread might starve",
        "hierarchy": "Control Concurrent SSem",
        "module": "Control.Concurrent.SSem",
        "name": "waitN",
        "normalized": "SSem-\u003eInt-\u003eIO()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "SSem-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-SSem.html#v:withSem",
      "description": {
        "fct-descr": "\u003cp\u003eIt is recommended that all paired uses of \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e use the \u003ccode\u003ewith\u003c/code\u003e bracketed form\n to ensure exceptions safety.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e IO a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-SSem.html#withSem",
        "fct-type": "function",
        "title": "withSem"
      },
      "index": {
        "description": "It is recommended that all paired uses of wait and signal use the with bracketed form to ensure exceptions safety",
        "hierarchy": "Control Concurrent SSem",
        "module": "Control.Concurrent.SSem",
        "name": "withSem",
        "normalized": "SSem-\u003eIO a-\u003eIO a",
        "package": "SafeSemaphore",
        "partial": "Sem",
        "signature": "SSem-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-SSem.html#v:withSemN",
      "description": {
        "fct-descr": "\u003cp\u003eIt is recommended that all paired uses of \u003ccode\u003e\u003ca\u003ewaitN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignalN\u003c/a\u003e\u003c/code\u003e use the \u003ccode\u003ewithN\u003c/code\u003e\n bracketed form to ensure exceptions safety.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e Int -\u003e IO a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-SSem.html#withSemN",
        "fct-type": "function",
        "title": "withSemN"
      },
      "index": {
        "description": "It is recommended that all paired uses of waitN and signalN use the withN bracketed form to ensure exceptions safety",
        "hierarchy": "Control Concurrent SSem",
        "module": "Control.Concurrent.SSem",
        "name": "withSemN",
        "normalized": "SSem-\u003eInt-\u003eIO a-\u003eIO a",
        "package": "SafeSemaphore",
        "partial": "Sem",
        "signature": "SSem-\u003eInt-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-STM-SSem.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVery simple quantity semaphore.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-SSem.html",
        "fct-type": "module",
        "title": "SSem"
      },
      "index": {
        "description": "Very simple quantity semaphore",
        "hierarchy": "Control Concurrent STM SSem",
        "module": "Control.Concurrent.STM.SSem",
        "name": "SSem",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "SSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-STM-SSem.html#t:SSem",
      "description": {
        "fct-module": "Control.Concurrent.STM.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-SSemInternals.html#SSem",
        "fct-type": "data",
        "title": "SSem"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM SSem",
        "module": "Control.Concurrent.STM.SSem",
        "name": "SSem",
        "normalized": "",
        "package": "SafeSemaphore",
        "partial": "SSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-STM-SSem.html#v:getValue",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current quantity in the semaphore.  This is potentially useful in a larger STM\n transaciton and less useful as `atomically getValueSem :: IO Int` due to race conditions.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e STM Int",
        "fct-source": "src/Control-Concurrent-STM-SSem.html#getValue",
        "fct-type": "function",
        "title": "getValue"
      },
      "index": {
        "description": "Return the current quantity in the semaphore This is potentially useful in larger STM transaciton and less useful as atomically getValueSem IO Int due to race conditions",
        "hierarchy": "Control Concurrent STM SSem",
        "module": "Control.Concurrent.STM.SSem",
        "name": "getValue",
        "normalized": "SSem-\u003eSTM Int",
        "package": "SafeSemaphore",
        "partial": "Value",
        "signature": "SSem-\u003eSTM Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-STM-SSem.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new semaphore with the given argument as the initially available quantity.  This\n allows new semaphores to start with a negative, zero, or positive quantity.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "Int -\u003e STM SSem",
        "fct-source": "src/Control-Concurrent-STM-SSem.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new semaphore with the given argument as the initially available quantity This allows new semaphores to start with negative zero or positive quantity",
        "hierarchy": "Control Concurrent STM SSem",
        "module": "Control.Concurrent.STM.SSem",
        "name": "new",
        "normalized": "Int-\u003eSTM SSem",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "Int-\u003eSTM SSem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-STM-SSem.html#v:signal",
      "description": {
        "fct-descr": "\u003cp\u003eSignal that single unit of the semaphore is available.  This increases the available quantity\n by one.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-SSem.html#signal",
        "fct-type": "function",
        "title": "signal"
      },
      "index": {
        "description": "Signal that single unit of the semaphore is available This increases the available quantity by one",
        "hierarchy": "Control Concurrent STM SSem",
        "module": "Control.Concurrent.STM.SSem",
        "name": "signal",
        "normalized": "SSem-\u003eSTM()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "SSem-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-STM-SSem.html#v:signalN",
      "description": {
        "fct-descr": "\u003cp\u003eSignal that many units of the semaphore are available.  This changes the available quantity by\n adding the passed size.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e Int -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-SSem.html#signalN",
        "fct-type": "function",
        "title": "signalN"
      },
      "index": {
        "description": "Signal that many units of the semaphore are available This changes the available quantity by adding the passed size",
        "hierarchy": "Control Concurrent STM SSem",
        "module": "Control.Concurrent.STM.SSem",
        "name": "signalN",
        "normalized": "SSem-\u003eInt-\u003eSTM()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "SSem-\u003eInt-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-STM-SSem.html#v:tryWait",
      "description": {
        "fct-descr": "\u003cp\u003eNon-retrying version of \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e.  `tryWait s` is defined as `tryN s 1`\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e STM (Maybe Int)",
        "fct-source": "src/Control-Concurrent-STM-SSem.html#tryWait",
        "fct-type": "function",
        "title": "tryWait"
      },
      "index": {
        "description": "Non-retrying version of wait tryWait is defined as tryN",
        "hierarchy": "Control Concurrent STM SSem",
        "module": "Control.Concurrent.STM.SSem",
        "name": "tryWait",
        "normalized": "SSem-\u003eSTM(Maybe Int)",
        "package": "SafeSemaphore",
        "partial": "Wait",
        "signature": "SSem-\u003eSTM(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-STM-SSem.html#v:tryWaitN",
      "description": {
        "fct-descr": "\u003cp\u003eNon-retrying version of waitN.  It either takes the quantity from the semaphore like\n waitN and returns `Just value taken` or finds insufficient quantity to take and returns\n Nothing\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e Int -\u003e STM (Maybe Int)",
        "fct-source": "src/Control-Concurrent-STM-SSem.html#tryWaitN",
        "fct-type": "function",
        "title": "tryWaitN"
      },
      "index": {
        "description": "Non-retrying version of waitN It either takes the quantity from the semaphore like waitN and returns Just value taken or finds insufficient quantity to take and returns Nothing",
        "hierarchy": "Control Concurrent STM SSem",
        "module": "Control.Concurrent.STM.SSem",
        "name": "tryWaitN",
        "normalized": "SSem-\u003eInt-\u003eSTM(Maybe Int)",
        "package": "SafeSemaphore",
        "partial": "Wait",
        "signature": "SSem-\u003eInt-\u003eSTM(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-STM-SSem.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003eTry to take a unit of value from the semaphore.  This succeeds when the current quantity is\n positive, and then reduces the quantity by one.  Otherwise this will \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  This will never\n result in a negative quantity.  If several threads are retying then which one succeeds next is\n undefined -- an unlucky thread might starve.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-SSem.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "Try to take unit of value from the semaphore This succeeds when the current quantity is positive and then reduces the quantity by one Otherwise this will retry This will never result in negative quantity If several threads are retying then which one succeeds next is undefined an unlucky thread might starve",
        "hierarchy": "Control Concurrent STM SSem",
        "module": "Control.Concurrent.STM.SSem",
        "name": "wait",
        "normalized": "SSem-\u003eSTM()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "SSem-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SafeSemaphore/docs/Control-Concurrent-STM-SSem.html#v:waitN",
      "description": {
        "fct-descr": "\u003cp\u003eTry to take the given value from the semaphore.  This succeeds when the quantity is greater or\n equal to the given value, and then subtracts the given value from the quantity.  Otherwise this\n will \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  This will never result in a negative quantity.  If several threads are retrying\n then which one succeeds next is undefined -- an unlucky thread might starve.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.SSem",
        "fct-package": "SafeSemaphore",
        "fct-signature": "SSem -\u003e Int -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-SSem.html#waitN",
        "fct-type": "function",
        "title": "waitN"
      },
      "index": {
        "description": "Try to take the given value from the semaphore This succeeds when the quantity is greater or equal to the given value and then subtracts the given value from the quantity Otherwise this will retry This will never result in negative quantity If several threads are retrying then which one succeeds next is undefined an unlucky thread might starve",
        "hierarchy": "Control Concurrent STM SSem",
        "module": "Control.Concurrent.STM.SSem",
        "name": "waitN",
        "normalized": "SSem-\u003eInt-\u003eSTM()",
        "package": "SafeSemaphore",
        "partial": "",
        "signature": "SSem-\u003eInt-\u003eSTM()"
      }
    }
  }
]