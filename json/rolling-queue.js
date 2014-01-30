[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is usually imported qualified:\n\u003c/p\u003e\u003cpre\u003eimport Data.STM.RollingQueue (RollingQueue)\nimport qualified Data.STM.RollingQueue as RQ\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "module",
        "fct-source": "src/Data-STM-RollingQueue.html",
        "fct-type": "module",
        "title": "RollingQueue"
      },
      "index": {
        "description": "This module is usually imported qualified import Data.STM.RollingQueue RollingQueue import qualified Data.STM.RollingQueue as RQ",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "RollingQueue",
        "normalized": "",
        "package": "rolling-queue",
        "partial": "Rolling Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#t:CheckException",
      "description": {
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "data",
        "fct-source": "src/Data-STM-RollingQueue.html#CheckException",
        "fct-type": "data",
        "title": "CheckException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "CheckException",
        "normalized": "",
        "package": "rolling-queue",
        "partial": "Check Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#t:RollingQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRollingQueue\u003c/a\u003e\u003c/code\u003e is a bounded FIFO channel.  When the size limit is\n exceeded, older entries are discarded to make way for newer entries.\n\u003c/p\u003e\u003cp\u003eNote: if the size limit is less than \u003ccode\u003e1\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e will have no effect, and\n \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e will always \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "data",
        "fct-source": "src/Data-STM-RollingQueue.html#RollingQueue",
        "fct-type": "data",
        "title": "RollingQueue"
      },
      "index": {
        "description": "RollingQueue is bounded FIFO channel When the size limit is exceeded older entries are discarded to make way for newer entries Note if the size limit is less than write will have no effect and read will always retry",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "RollingQueue",
        "normalized": "",
        "package": "rolling-queue",
        "partial": "Rolling Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:CheckException",
      "description": {
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "CheckException String",
        "fct-source": "src/Data-STM-RollingQueue.html#CheckException",
        "fct-type": "function",
        "title": "CheckException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "CheckException",
        "normalized": "",
        "package": "rolling-queue",
        "partial": "Check Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:checkInvariants",
      "description": {
        "fct-descr": "\u003cp\u003eVerify internal structure.  Throw a \u003ccode\u003e\u003ca\u003eCheckException\u003c/a\u003e\u003c/code\u003e if the check fails,\n signifying a bug in the implementation.\n\u003c/p\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "RollingQueue a -\u003e STM ()",
        "fct-source": "src/Data-STM-RollingQueue.html#checkInvariants",
        "fct-type": "function",
        "title": "checkInvariants"
      },
      "index": {
        "description": "Verify internal structure Throw CheckException if the check fails signifying bug in the implementation",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "checkInvariants",
        "normalized": "RollingQueue a-\u003eSTM()",
        "package": "rolling-queue",
        "partial": "Invariants",
        "signature": "RollingQueue a-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:dump",
      "description": {
        "fct-descr": "\u003cp\u003eDump the RollingQueue (output and internal counters) to standard output.\n This calls \u003ccode\u003e\u003ca\u003echeckInvariants\u003c/a\u003e\u003c/code\u003e first.\n\u003c/p\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "RollingQueue a -\u003e IO ()",
        "fct-source": "src/Data-STM-RollingQueue.html#dump",
        "fct-type": "function",
        "title": "dump"
      },
      "index": {
        "description": "Dump the RollingQueue output and internal counters to standard output This calls checkInvariants first",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "dump",
        "normalized": "RollingQueue a-\u003eIO()",
        "package": "rolling-queue",
        "partial": "",
        "signature": "RollingQueue a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:getLimit",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current size limit.  This will return 0 if a negative value was\n passed to \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enewIO\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003esetLimit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "RollingQueue a -\u003e STM Int",
        "fct-source": "src/Data-STM-RollingQueue.html#getLimit",
        "fct-type": "function",
        "title": "getLimit"
      },
      "index": {
        "description": "Get the current size limit This will return if negative value was passed to new newIO or setLimit",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "getLimit",
        "normalized": "RollingQueue a-\u003eSTM Int",
        "package": "rolling-queue",
        "partial": "Limit",
        "signature": "RollingQueue a-\u003eSTM Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eTest if the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "RollingQueue a -\u003e STM Bool",
        "fct-source": "src/Data-STM-RollingQueue.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Test if the queue is empty",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "isEmpty",
        "normalized": "RollingQueue a-\u003eSTM Bool",
        "package": "rolling-queue",
        "partial": "Empty",
        "signature": "RollingQueue a-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Get the number of items in the queue.\n\u003c/p\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "RollingQueue a -\u003e STM Int",
        "fct-source": "src/Data-STM-RollingQueue.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Get the number of items in the queue",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "length",
        "normalized": "RollingQueue a-\u003eSTM Int",
        "package": "rolling-queue",
        "partial": "",
        "signature": "RollingQueue a-\u003eSTM Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new, empty \u003ccode\u003e\u003ca\u003eRollingQueue\u003c/a\u003e\u003c/code\u003e, with the given size limit.\n\u003c/p\u003e\u003cp\u003eTo change the size limit later, use \u003ccode\u003e\u003ca\u003esetLimit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "Int -\u003e STM (RollingQueue a)",
        "fct-source": "src/Data-STM-RollingQueue.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new empty RollingQueue with the given size limit To change the size limit later use setLimit",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "new",
        "normalized": "Int-\u003eSTM(RollingQueue a)",
        "package": "rolling-queue",
        "partial": "",
        "signature": "Int-\u003eSTM(RollingQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:newIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n\u003ccode\u003e\u003ca\u003eRollingQueue\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because performing\n\u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside a pure computation is extremely dangerous (can lead to\n\u003ccode\u003e\u003ca\u003eNestedAtomically\u003c/a\u003e\u003c/code\u003e errors and even segfaults, see GHC ticket\n#5866).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\nlogQueue :: \u003ccode\u003e\u003ca\u003eRollingQueue\u003c/a\u003e\u003c/code\u003e LogEntry\nlogQueue = \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e (RQ.\u003ccode\u003e\u003ca\u003enewIO\u003c/a\u003e\u003c/code\u003e 1000)\n{-# NOINLINE logQueue #-}\n\u003c/pre\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "Int -\u003e IO (RollingQueue a)",
        "fct-source": "src/Data-STM-RollingQueue.html#newIO",
        "fct-type": "function",
        "title": "newIO"
      },
      "index": {
        "description": "IO variant of new This is useful for creating top-level RollingQueue using unsafePerformIO because performing atomically inside pure computation is extremely dangerous can lead to NestedAtomically errors and even segfaults see GHC ticket Example logQueue RollingQueue LogEntry logQueue unsafePerformIO RQ newIO NOINLINE logQueue",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "newIO",
        "normalized": "Int-\u003eIO(RollingQueue a)",
        "package": "rolling-queue",
        "partial": "IO",
        "signature": "Int-\u003eIO(RollingQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eRead the next entry from the \u003ccode\u003e\u003ca\u003eRollingQueue\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e if the queue is\n empty.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is the number of entries discarded since the last read operation\n (usually 0).\n\u003c/p\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "RollingQueue a -\u003e STM (a, Int)",
        "fct-source": "src/Data-STM-RollingQueue.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "Read the next entry from the RollingQueue retry if the queue is empty The Int is the number of entries discarded since the last read operation usually",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "read",
        "normalized": "RollingQueue a-\u003eSTM(a,Int)",
        "package": "rolling-queue",
        "partial": "",
        "signature": "RollingQueue a-\u003eSTM(a,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:setLimit",
      "description": {
        "fct-descr": "\u003cp\u003eAdjust the size limit.  Queue entries will be discarded if necessary to\n satisfy the new limit.\n\u003c/p\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "RollingQueue a -\u003e Int -\u003e STM ()",
        "fct-source": "src/Data-STM-RollingQueue.html#setLimit",
        "fct-type": "function",
        "title": "setLimit"
      },
      "index": {
        "description": "Adjust the size limit Queue entries will be discarded if necessary to satisfy the new limit",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "setLimit",
        "normalized": "RollingQueue a-\u003eInt-\u003eSTM()",
        "package": "rolling-queue",
        "partial": "Limit",
        "signature": "RollingQueue a-\u003eInt-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:tryRead",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e, but do not \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  Instead, return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the queue\n is empty.\n\u003c/p\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "RollingQueue a -\u003e STM (Maybe (a, Int))",
        "fct-source": "src/Data-STM-RollingQueue.html#tryRead",
        "fct-type": "function",
        "title": "tryRead"
      },
      "index": {
        "description": "Like read but do not retry Instead return Nothing if the queue is empty",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "tryRead",
        "normalized": "RollingQueue a-\u003eSTM(Maybe(a,Int))",
        "package": "rolling-queue",
        "partial": "Read",
        "signature": "RollingQueue a-\u003eSTM(Maybe(a,Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an entry to the rolling queue.  If the queue is full, discard the\n oldest entry.\n\u003c/p\u003e\u003cp\u003eThere is no \u003ccode\u003etryWrite\u003c/code\u003e, because \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e never retries.\n\u003c/p\u003e",
        "fct-module": "Data.STM.RollingQueue",
        "fct-package": "rolling-queue",
        "fct-signature": "RollingQueue a -\u003e a -\u003e STM ()",
        "fct-source": "src/Data-STM-RollingQueue.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Write an entry to the rolling queue If the queue is full discard the oldest entry There is no tryWrite because write never retries",
        "hierarchy": "Data STM RollingQueue",
        "module": "Data.STM.RollingQueue",
        "name": "write",
        "normalized": "RollingQueue a-\u003ea-\u003eSTM()",
        "package": "rolling-queue",
        "partial": "",
        "signature": "RollingQueue a-\u003ea-\u003eSTM()"
      }
    }
  }
]