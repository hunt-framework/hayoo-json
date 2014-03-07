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
        "word": "rolling-queue"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is usually imported qualified:\n\u003c/p\u003e\u003cpre\u003eimport Data.STM.RollingQueue (RollingQueue)\nimport qualified Data.STM.RollingQueue as RQ\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "RollingQueue",
          "package": "rolling-queue",
          "source": "src/Data-STM-RollingQueue.html",
          "type": "module"
        },
        "index": {
          "description": "This module is usually imported qualified import Data.STM.RollingQueue RollingQueue import qualified Data.STM.RollingQueue as RQ",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "RollingQueue",
          "package": "rolling-queue",
          "partial": "Rolling Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STM.RollingQueue",
          "name": "CheckException",
          "package": "rolling-queue",
          "source": "src/Data-STM-RollingQueue.html#CheckException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "CheckException",
          "package": "rolling-queue",
          "partial": "Check Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#t:CheckException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRollingQueue\u003c/a\u003e\u003c/code\u003e is a bounded FIFO channel.  When the size limit is\n exceeded, older entries are discarded to make way for newer entries.\n\u003c/p\u003e\u003cp\u003eNote: if the size limit is less than \u003ccode\u003e1\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e will have no effect, and\n \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e will always \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "RollingQueue",
          "package": "rolling-queue",
          "source": "src/Data-STM-RollingQueue.html#RollingQueue",
          "type": "data"
        },
        "index": {
          "description": "RollingQueue is bounded FIFO channel When the size limit is exceeded older entries are discarded to make way for newer entries Note if the size limit is less than write will have no effect and read will always retry",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "RollingQueue",
          "package": "rolling-queue",
          "partial": "Rolling Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#t:RollingQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STM.RollingQueue",
          "name": "CheckException",
          "package": "rolling-queue",
          "signature": "CheckException String",
          "source": "src/Data-STM-RollingQueue.html#CheckException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "CheckException",
          "package": "rolling-queue",
          "partial": "Check Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:CheckException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify internal structure.  Throw a \u003ccode\u003e\u003ca\u003eCheckException\u003c/a\u003e\u003c/code\u003e if the check fails,\n signifying a bug in the implementation.\n\u003c/p\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "checkInvariants",
          "package": "rolling-queue",
          "signature": "RollingQueue a -\u003e STM ()",
          "source": "src/Data-STM-RollingQueue.html#checkInvariants",
          "type": "function"
        },
        "index": {
          "description": "Verify internal structure Throw CheckException if the check fails signifying bug in the implementation",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "checkInvariants",
          "normalized": "RollingQueue a-\u003eSTM()",
          "package": "rolling-queue",
          "partial": "Invariants",
          "signature": "RollingQueue a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:checkInvariants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump the RollingQueue (output and internal counters) to standard output.\n This calls \u003ccode\u003e\u003ca\u003echeckInvariants\u003c/a\u003e\u003c/code\u003e first.\n\u003c/p\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "dump",
          "package": "rolling-queue",
          "signature": "RollingQueue a -\u003e IO ()",
          "source": "src/Data-STM-RollingQueue.html#dump",
          "type": "function"
        },
        "index": {
          "description": "Dump the RollingQueue output and internal counters to standard output This calls checkInvariants first",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "dump",
          "normalized": "RollingQueue a-\u003eIO()",
          "package": "rolling-queue",
          "signature": "RollingQueue a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:dump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current size limit.  This will return 0 if a negative value was\n passed to \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enewIO\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003esetLimit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "getLimit",
          "package": "rolling-queue",
          "signature": "RollingQueue a -\u003e STM Int",
          "source": "src/Data-STM-RollingQueue.html#getLimit",
          "type": "function"
        },
        "index": {
          "description": "Get the current size limit This will return if negative value was passed to new newIO or setLimit",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "getLimit",
          "normalized": "RollingQueue a-\u003eSTM Int",
          "package": "rolling-queue",
          "partial": "Limit",
          "signature": "RollingQueue a-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:getLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the queue is empty.\n\u003c/p\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "isEmpty",
          "package": "rolling-queue",
          "signature": "RollingQueue a -\u003e STM Bool",
          "source": "src/Data-STM-RollingQueue.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Test if the queue is empty",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "isEmpty",
          "normalized": "RollingQueue a-\u003eSTM Bool",
          "package": "rolling-queue",
          "partial": "Empty",
          "signature": "RollingQueue a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Get the number of items in the queue.\n\u003c/p\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "length",
          "package": "rolling-queue",
          "signature": "RollingQueue a -\u003e STM Int",
          "source": "src/Data-STM-RollingQueue.html#length",
          "type": "function"
        },
        "index": {
          "description": "Get the number of items in the queue",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "length",
          "normalized": "RollingQueue a-\u003eSTM Int",
          "package": "rolling-queue",
          "signature": "RollingQueue a-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new, empty \u003ccode\u003e\u003ca\u003eRollingQueue\u003c/a\u003e\u003c/code\u003e, with the given size limit.\n\u003c/p\u003e\u003cp\u003eTo change the size limit later, use \u003ccode\u003e\u003ca\u003esetLimit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "new",
          "package": "rolling-queue",
          "signature": "Int -\u003e STM (RollingQueue a)",
          "source": "src/Data-STM-RollingQueue.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new empty RollingQueue with the given size limit To change the size limit later use setLimit",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "new",
          "normalized": "Int-\u003eSTM(RollingQueue a)",
          "package": "rolling-queue",
          "signature": "Int-\u003eSTM(RollingQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n\u003ccode\u003e\u003ca\u003eRollingQueue\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because performing\n\u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside a pure computation is extremely dangerous (can lead to\n\u003ccode\u003e\u003ca\u003eNestedAtomically\u003c/a\u003e\u003c/code\u003e errors and even segfaults, see GHC ticket\n#5866).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\nlogQueue :: \u003ccode\u003e\u003ca\u003eRollingQueue\u003c/a\u003e\u003c/code\u003e LogEntry\nlogQueue = \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e (RQ.\u003ccode\u003e\u003ca\u003enewIO\u003c/a\u003e\u003c/code\u003e 1000)\n{-# NOINLINE logQueue #-}\n\u003c/pre\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "newIO",
          "package": "rolling-queue",
          "signature": "Int -\u003e IO (RollingQueue a)",
          "source": "src/Data-STM-RollingQueue.html#newIO",
          "type": "function"
        },
        "index": {
          "description": "IO variant of new This is useful for creating top-level RollingQueue using unsafePerformIO because performing atomically inside pure computation is extremely dangerous can lead to NestedAtomically errors and even segfaults see GHC ticket Example logQueue RollingQueue LogEntry logQueue unsafePerformIO RQ newIO NOINLINE logQueue",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "newIO",
          "normalized": "Int-\u003eIO(RollingQueue a)",
          "package": "rolling-queue",
          "partial": "IO",
          "signature": "Int-\u003eIO(RollingQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:newIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next entry from the \u003ccode\u003e\u003ca\u003eRollingQueue\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e if the queue is\n empty.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is the number of entries discarded since the last read operation\n (usually 0).\n\u003c/p\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "read",
          "package": "rolling-queue",
          "signature": "RollingQueue a -\u003e STM (a, Int)",
          "source": "src/Data-STM-RollingQueue.html#read",
          "type": "function"
        },
        "index": {
          "description": "Read the next entry from the RollingQueue retry if the queue is empty The Int is the number of entries discarded since the last read operation usually",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "read",
          "normalized": "RollingQueue a-\u003eSTM(a,Int)",
          "package": "rolling-queue",
          "signature": "RollingQueue a-\u003eSTM(a,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust the size limit.  Queue entries will be discarded if necessary to\n satisfy the new limit.\n\u003c/p\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "setLimit",
          "package": "rolling-queue",
          "signature": "RollingQueue a -\u003e Int -\u003e STM ()",
          "source": "src/Data-STM-RollingQueue.html#setLimit",
          "type": "function"
        },
        "index": {
          "description": "Adjust the size limit Queue entries will be discarded if necessary to satisfy the new limit",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "setLimit",
          "normalized": "RollingQueue a-\u003eInt-\u003eSTM()",
          "package": "rolling-queue",
          "partial": "Limit",
          "signature": "RollingQueue a-\u003eInt-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:setLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e, but do not \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  Instead, return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the queue\n is empty.\n\u003c/p\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "tryRead",
          "package": "rolling-queue",
          "signature": "RollingQueue a -\u003e STM (Maybe (a, Int))",
          "source": "src/Data-STM-RollingQueue.html#tryRead",
          "type": "function"
        },
        "index": {
          "description": "Like read but do not retry Instead return Nothing if the queue is empty",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "tryRead",
          "normalized": "RollingQueue a-\u003eSTM(Maybe(a,Int))",
          "package": "rolling-queue",
          "partial": "Read",
          "signature": "RollingQueue a-\u003eSTM(Maybe(a,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:tryRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an entry to the rolling queue.  If the queue is full, discard the\n oldest entry.\n\u003c/p\u003e\u003cp\u003eThere is no \u003ccode\u003etryWrite\u003c/code\u003e, because \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e never retries.\n\u003c/p\u003e",
          "module": "Data.STM.RollingQueue",
          "name": "write",
          "package": "rolling-queue",
          "signature": "RollingQueue a -\u003e a -\u003e STM ()",
          "source": "src/Data-STM-RollingQueue.html#write",
          "type": "function"
        },
        "index": {
          "description": "Write an entry to the rolling queue If the queue is full discard the oldest entry There is no tryWrite because write never retries",
          "hierarchy": "Data STM RollingQueue",
          "module": "Data.STM.RollingQueue",
          "name": "write",
          "normalized": "RollingQueue a-\u003ea-\u003eSTM()",
          "package": "rolling-queue",
          "signature": "RollingQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rolling-queue/docs/Data-STM-RollingQueue.html#v:write"
      }
    }
  ]
]