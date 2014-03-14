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
        "word": "stm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTArrays: transactional arrays, for use in the STM monad\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TArray",
          "name": "TArray",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TArray.html",
          "type": "module"
        },
        "index": {
          "description": "TArrays transactional arrays for use in the STM monad",
          "hierarchy": "Control Concurrent STM TArray",
          "module": "Control.Concurrent.STM.TArray",
          "name": "TArray",
          "package": "stm",
          "partial": "TArray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTArray is a transactional array, supporting the usual \u003ccode\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/code\u003e\n interface for mutable arrays.\n\u003c/p\u003e\u003cp\u003eIt is currently implemented as \u003ccode\u003eArray ix (TVar e)\u003c/code\u003e,\n but it may be replaced by a more efficient implementation in the future\n (the interface will remain the same, however).\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TArray",
          "name": "TArray",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TArray.html#TArray",
          "type": "data"
        },
        "index": {
          "description": "TArray is transactional array supporting the usual MArray interface for mutable arrays It is currently implemented as Array ix TVar but it may be replaced by more efficient implementation in the future the interface will remain the same however",
          "hierarchy": "Control Concurrent STM TArray",
          "module": "Control.Concurrent.STM.TArray",
          "name": "TArray",
          "package": "stm",
          "partial": "TArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TArray.html#t:TArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTBQueue\u003c/a\u003e\u003c/code\u003e is a bounded version of \u003ccode\u003eTQueue\u003c/code\u003e. The queue has a maximum\n capacity set when it is created.  If the queue already contains the\n maximum number of elements, then \u003ccode\u003e\u003ca\u003ewriteTBQueue\u003c/a\u003e\u003c/code\u003e blocks until an\n element is removed from the queue.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on the traditional purely-functional\n queue representation that uses two lists to obtain amortised \u003cem\u003eO(1)\u003c/em\u003e\n enqueue and dequeue operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "TBQueue",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TBQueue.html",
          "type": "module"
        },
        "index": {
          "description": "TBQueue is bounded version of TQueue The queue has maximum capacity set when it is created If the queue already contains the maximum number of elements then writeTBQueue blocks until an element is removed from the queue The implementation is based on the traditional purely-functional queue representation that uses two lists to obtain amortised enqueue and dequeue operations",
          "hierarchy": "Control Concurrent STM TBQueue",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "TBQueue",
          "package": "stm",
          "partial": "TBQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TBQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTBQueue\u003c/a\u003e\u003c/code\u003e is an abstract type representing a bounded FIFO channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "TBQueue",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TBQueue.html#TBQueue",
          "type": "data"
        },
        "index": {
          "description": "TBQueue is an abstract type representing bounded FIFO channel",
          "hierarchy": "Control Concurrent STM TBQueue",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "TBQueue",
          "package": "stm",
          "partial": "TBQueue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TBQueue.html#t:TBQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eTBQueue\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "isEmptyTBQueue",
          "package": "stm",
          "signature": "TBQueue a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TBQueue.html#isEmptyTBQueue",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TBQueue is empty",
          "hierarchy": "Control Concurrent STM TBQueue",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "isEmptyTBQueue",
          "normalized": "TBQueue a-\u003eSTM Bool",
          "package": "stm",
          "partial": "Empty TBQueue",
          "signature": "TBQueue a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TBQueue.html#v:isEmptyTBQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003e\u003ca\u003eTBQueue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "newTBQueue",
          "package": "stm",
          "signature": "Int-\u003e STM (TBQueue a)",
          "type": "function"
        },
        "index": {
          "description": "Build and returns new instance of TBQueue",
          "hierarchy": "Control Concurrent STM TBQueue",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "newTBQueue",
          "normalized": "Int-\u003eSTM(TBQueue a)",
          "package": "stm",
          "partial": "TBQueue",
          "signature": "Int-\u003eSTM(TBQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TBQueue.html#v:newTBQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTBQueue\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTBQueue\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "newTBQueueIO",
          "package": "stm",
          "signature": "Int -\u003e IO (TBQueue a)",
          "source": "src/Control-Concurrent-STM-TBQueue.html#newTBQueueIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTBQueue This is useful for creating top-level TBQueue using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent STM TBQueue",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "newTBQueueIO",
          "normalized": "Int-\u003eIO(TBQueue a)",
          "package": "stm",
          "partial": "TBQueue IO",
          "signature": "Int-\u003eIO(TBQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TBQueue.html#v:newTBQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next value from the \u003ccode\u003eTBQueue\u003c/code\u003e without removing it,\n retrying if the channel is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "peekTBQueue",
          "package": "stm",
          "signature": "TBQueue a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TBQueue.html#peekTBQueue",
          "type": "function"
        },
        "index": {
          "description": "Get the next value from the TBQueue without removing it retrying if the channel is empty",
          "hierarchy": "Control Concurrent STM TBQueue",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "peekTBQueue",
          "normalized": "TBQueue a-\u003eSTM a",
          "package": "stm",
          "partial": "TBQueue",
          "signature": "TBQueue a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TBQueue.html#v:peekTBQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003e\u003ca\u003eTBQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "readTBQueue",
          "package": "stm",
          "signature": "TBQueue a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TBQueue.html#readTBQueue",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the TBQueue",
          "hierarchy": "Control Concurrent STM TBQueue",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "readTBQueue",
          "normalized": "TBQueue a-\u003eSTM a",
          "package": "stm",
          "partial": "TBQueue",
          "signature": "TBQueue a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TBQueue.html#v:readTBQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekTBQueue\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "tryPeekTBQueue",
          "package": "stm",
          "signature": "TBQueue a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TBQueue.html#tryPeekTBQueue",
          "type": "function"
        },
        "index": {
          "description": "version of peekTBQueue which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent STM TBQueue",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "tryPeekTBQueue",
          "normalized": "TBQueue a-\u003eSTM(Maybe a)",
          "package": "stm",
          "partial": "Peek TBQueue",
          "signature": "TBQueue a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TBQueue.html#v:tryPeekTBQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadTBQueue\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "tryReadTBQueue",
          "package": "stm",
          "signature": "TBQueue a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TBQueue.html#tryReadTBQueue",
          "type": "function"
        },
        "index": {
          "description": "version of readTBQueue which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent STM TBQueue",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "tryReadTBQueue",
          "normalized": "TBQueue a-\u003eSTM(Maybe a)",
          "package": "stm",
          "partial": "Read TBQueue",
          "signature": "TBQueue a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TBQueue.html#v:tryReadTBQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a channel, where it will be the next item read.\n Blocks if the queue is full.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "unGetTBQueue",
          "package": "stm",
          "signature": "TBQueue a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TBQueue.html#unGetTBQueue",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto channel where it will be the next item read Blocks if the queue is full",
          "hierarchy": "Control Concurrent STM TBQueue",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "unGetTBQueue",
          "normalized": "TBQueue a-\u003ea-\u003eSTM()",
          "package": "stm",
          "partial": "Get TBQueue",
          "signature": "TBQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TBQueue.html#v:unGetTBQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003e\u003ca\u003eTBQueue\u003c/a\u003e\u003c/code\u003e; blocks if the queue is full.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "writeTBQueue",
          "package": "stm",
          "signature": "TBQueue a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TBQueue.html#writeTBQueue",
          "type": "function"
        },
        "index": {
          "description": "Write value to TBQueue blocks if the queue is full",
          "hierarchy": "Control Concurrent STM TBQueue",
          "module": "Control.Concurrent.STM.TBQueue",
          "name": "writeTBQueue",
          "normalized": "TBQueue a-\u003ea-\u003eSTM()",
          "package": "stm",
          "partial": "TBQueue",
          "signature": "TBQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TBQueue.html#v:writeTBQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTChan: Transactional channels\n (GHC only)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "TChan",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TChan.html",
          "type": "module"
        },
        "index": {
          "description": "TChan Transactional channels GHC only",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "TChan",
          "package": "stm",
          "partial": "TChan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "TChan",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TChan.html#TChan",
          "type": "data"
        },
        "index": {
          "description": "TChan is an abstract type representing an unbounded FIFO channel",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "TChan",
          "package": "stm",
          "partial": "TChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#t:TChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClone a \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e: similar to dupTChan, but the cloned channel starts with the\n same content available as the original channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "cloneTChan",
          "package": "stm",
          "signature": "TChan a -\u003e STM (TChan a)",
          "source": "src/Control-Concurrent-STM-TChan.html#cloneTChan",
          "type": "function"
        },
        "index": {
          "description": "Clone TChan similar to dupTChan but the cloned channel starts with the same content available as the original channel",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "cloneTChan",
          "normalized": "TChan a-\u003eSTM(TChan a)",
          "package": "stm",
          "partial": "TChan",
          "signature": "TChan a-\u003eSTM(TChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:cloneTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuplicate a \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e: the duplicate channel begins empty, but data written to\n either channel from then on will be available from both.  Hence this creates\n a kind of broadcast channel, where data written by anyone is seen by\n everyone else.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "dupTChan",
          "package": "stm",
          "signature": "TChan a -\u003e STM (TChan a)",
          "source": "src/Control-Concurrent-STM-TChan.html#dupTChan",
          "type": "function"
        },
        "index": {
          "description": "Duplicate TChan the duplicate channel begins empty but data written to either channel from then on will be available from both Hence this creates kind of broadcast channel where data written by anyone is seen by everyone else",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "dupTChan",
          "normalized": "TChan a-\u003eSTM(TChan a)",
          "package": "stm",
          "partial": "TChan",
          "signature": "TChan a-\u003eSTM(TChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:dupTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "isEmptyTChan",
          "package": "stm",
          "signature": "TChan a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TChan.html#isEmptyTChan",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TChan is empty",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "isEmptyTChan",
          "normalized": "TChan a-\u003eSTM Bool",
          "package": "stm",
          "partial": "Empty TChan",
          "signature": "TChan a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:isEmptyTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a write-only \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e.  More precisely, \u003ccode\u003e\u003ca\u003ereadTChan\u003c/a\u003e\u003c/code\u003e will \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e\n even after items have been written to the channel.  The only way to read\n a broadcast channel is to duplicate it with \u003ccode\u003e\u003ca\u003edupTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConsider a server that broadcasts messages to clients:\n\u003c/p\u003e\u003cpre\u003eserve :: TChan Message -\u003e Client -\u003e IO loop\nserve broadcastChan client = do\n    myChan \u003c- dupTChan broadcastChan\n    forever $ do\n        message \u003c- readTChan myChan\n        send client message\n\u003c/pre\u003e\u003cp\u003eThe problem with using \u003ccode\u003e\u003ca\u003enewTChan\u003c/a\u003e\u003c/code\u003e to create the broadcast channel is that if\n it is only written to and never read, items will pile up in memory.  By\n using \u003ccode\u003e\u003ca\u003enewBroadcastTChan\u003c/a\u003e\u003c/code\u003e to create the broadcast channel, items can be\n garbage collected after clients have seen them.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "newBroadcastTChan",
          "package": "stm",
          "signature": "STM (TChan a)",
          "source": "src/Control-Concurrent-STM-TChan.html#newBroadcastTChan",
          "type": "function"
        },
        "index": {
          "description": "Create write-only TChan More precisely readTChan will retry even after items have been written to the channel The only way to read broadcast channel is to duplicate it with dupTChan Consider server that broadcasts messages to clients serve TChan Message Client IO loop serve broadcastChan client do myChan dupTChan broadcastChan forever do message readTChan myChan send client message The problem with using newTChan to create the broadcast channel is that if it is only written to and never read items will pile up in memory By using newBroadcastTChan to create the broadcast channel items can be garbage collected after clients have seen them",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "newBroadcastTChan",
          "package": "stm",
          "partial": "Broadcast TChan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:newBroadcastTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewBroadcastTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "newBroadcastTChanIO",
          "package": "stm",
          "signature": "IO (TChan a)",
          "source": "src/Control-Concurrent-STM-TChan.html#newBroadcastTChanIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newBroadcastTChan",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "newBroadcastTChanIO",
          "package": "stm",
          "partial": "Broadcast TChan IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:newBroadcastTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and return a new instance of \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "newTChan",
          "package": "stm",
          "signature": "STM (TChan a)",
          "source": "src/Control-Concurrent-STM-TChan.html#newTChan",
          "type": "function"
        },
        "index": {
          "description": "Build and return new instance of TChan",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "newTChan",
          "package": "stm",
          "partial": "TChan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:newTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTChan\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "newTChanIO",
          "package": "stm",
          "signature": "IO (TChan a)",
          "source": "src/Control-Concurrent-STM-TChan.html#newTChanIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTChan This is useful for creating top-level TChan using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "newTChanIO",
          "package": "stm",
          "partial": "TChan IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:newTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next value from the \u003ccode\u003eTChan\u003c/code\u003e without removing it,\n retrying if the channel is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "peekTChan",
          "package": "stm",
          "signature": "TChan a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TChan.html#peekTChan",
          "type": "function"
        },
        "index": {
          "description": "Get the next value from the TChan without removing it retrying if the channel is empty",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "peekTChan",
          "normalized": "TChan a-\u003eSTM a",
          "package": "stm",
          "partial": "TChan",
          "signature": "TChan a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:peekTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "readTChan",
          "package": "stm",
          "signature": "TChan a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TChan.html#readTChan",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the TChan",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "readTChan",
          "normalized": "TChan a-\u003eSTM a",
          "package": "stm",
          "partial": "TChan",
          "signature": "TChan a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:readTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekTChan\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "tryPeekTChan",
          "package": "stm",
          "signature": "TChan a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TChan.html#tryPeekTChan",
          "type": "function"
        },
        "index": {
          "description": "version of peekTChan which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "tryPeekTChan",
          "normalized": "TChan a-\u003eSTM(Maybe a)",
          "package": "stm",
          "partial": "Peek TChan",
          "signature": "TChan a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:tryPeekTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadTChan\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "tryReadTChan",
          "package": "stm",
          "signature": "TChan a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TChan.html#tryReadTChan",
          "type": "function"
        },
        "index": {
          "description": "version of readTChan which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "tryReadTChan",
          "normalized": "TChan a-\u003eSTM(Maybe a)",
          "package": "stm",
          "partial": "Read TChan",
          "signature": "TChan a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:tryReadTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a channel, where it will be the next item read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "unGetTChan",
          "package": "stm",
          "signature": "TChan a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TChan.html#unGetTChan",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto channel where it will be the next item read",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "unGetTChan",
          "normalized": "TChan a-\u003ea-\u003eSTM()",
          "package": "stm",
          "partial": "Get TChan",
          "signature": "TChan a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:unGetTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan",
          "name": "writeTChan",
          "package": "stm",
          "signature": "TChan a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TChan.html#writeTChan",
          "type": "function"
        },
        "index": {
          "description": "Write value to TChan",
          "hierarchy": "Control Concurrent STM TChan",
          "module": "Control.Concurrent.STM.TChan",
          "name": "writeTChan",
          "normalized": "TChan a-\u003ea-\u003eSTM()",
          "package": "stm",
          "partial": "TChan",
          "signature": "TChan a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TChan.html#v:writeTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTMVar: Transactional MVars, for use in the STM monad\n (GHC only)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "TMVar",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TMVar.html",
          "type": "module"
        },
        "index": {
          "description": "TMVar Transactional MVars for use in the STM monad GHC only",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "TMVar",
          "package": "stm",
          "partial": "TMVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a box, which may be empty or full.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "TMVar",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TMVar.html#TMVar",
          "type": "data"
        },
        "index": {
          "description": "TMVar is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "TMVar",
          "package": "stm",
          "partial": "TMVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#t:TMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a given \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "isEmptyTMVar",
          "package": "stm",
          "signature": "TMVar a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TMVar.html#isEmptyTMVar",
          "type": "function"
        },
        "index": {
          "description": "Check whether given TMVar is empty",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "isEmptyTMVar",
          "normalized": "TMVar a-\u003eSTM Bool",
          "package": "stm",
          "partial": "Empty TMVar",
          "signature": "TMVar a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#v:isEmptyTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e which is initially empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "newEmptyTMVar",
          "package": "stm",
          "signature": "STM (TMVar a)",
          "source": "src/Control-Concurrent-STM-TMVar.html#newEmptyTMVar",
          "type": "function"
        },
        "index": {
          "description": "Create TMVar which is initially empty",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "newEmptyTMVar",
          "package": "stm",
          "partial": "Empty TMVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#v:newEmptyTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewEmptyTMVar\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "newEmptyTMVarIO",
          "package": "stm",
          "signature": "IO (TMVar a)",
          "source": "src/Control-Concurrent-STM-TMVar.html#newEmptyTMVarIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newEmptyTMVar This is useful for creating top-level TMVar using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "newEmptyTMVarIO",
          "package": "stm",
          "partial": "Empty TMVar IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#v:newEmptyTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e which contains the supplied value.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "newTMVar",
          "package": "stm",
          "signature": "a -\u003e STM (TMVar a)",
          "source": "src/Control-Concurrent-STM-TMVar.html#newTMVar",
          "type": "function"
        },
        "index": {
          "description": "Create TMVar which contains the supplied value",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "newTMVar",
          "normalized": "a-\u003eSTM(TMVar a)",
          "package": "stm",
          "partial": "TMVar",
          "signature": "a-\u003eSTM(TMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#v:newTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTMVar\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "newTMVarIO",
          "package": "stm",
          "signature": "a -\u003e IO (TMVar a)",
          "source": "src/Control-Concurrent-STM-TMVar.html#newTMVarIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTMVar This is useful for creating top-level TMVar using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "newTMVarIO",
          "normalized": "a-\u003eIO(TMVar a)",
          "package": "stm",
          "partial": "TMVar IO",
          "signature": "a-\u003eIO(TMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#v:newTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a value into a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e.  If the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is currently full,\n \u003ccode\u003e\u003ca\u003eputTMVar\u003c/a\u003e\u003c/code\u003e will \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "putTMVar",
          "package": "stm",
          "signature": "TMVar a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TMVar.html#putTMVar",
          "type": "function"
        },
        "index": {
          "description": "Put value into TMVar If the TMVar is currently full putTMVar will retry",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "putTMVar",
          "normalized": "TMVar a-\u003ea-\u003eSTM()",
          "package": "stm",
          "partial": "TMVar",
          "signature": "TMVar a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#v:putTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a combination of \u003ccode\u003e\u003ca\u003etakeTMVar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputTMVar\u003c/a\u003e\u003c/code\u003e; ie. it\n takes the value from the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e, puts it back, and also returns\n it.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "readTMVar",
          "package": "stm",
          "signature": "TMVar a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TMVar.html#readTMVar",
          "type": "function"
        },
        "index": {
          "description": "This is combination of takeTMVar and putTMVar ie it takes the value from the TMVar puts it back and also returns it",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "readTMVar",
          "normalized": "TMVar a-\u003eSTM a",
          "package": "stm",
          "partial": "TMVar",
          "signature": "TMVar a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#v:readTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the contents of a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e for a new value.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "swapTMVar",
          "package": "stm",
          "signature": "TMVar a -\u003e a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TMVar.html#swapTMVar",
          "type": "function"
        },
        "index": {
          "description": "Swap the contents of TMVar for new value",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "swapTMVar",
          "normalized": "TMVar a-\u003ea-\u003eSTM a",
          "package": "stm",
          "partial": "TMVar",
          "signature": "TMVar a-\u003ea-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#v:swapTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the contents of the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e.  If the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is currently\n empty, the transaction will \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  After a \u003ccode\u003e\u003ca\u003etakeTMVar\u003c/a\u003e\u003c/code\u003e, \n the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is left empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "takeTMVar",
          "package": "stm",
          "signature": "TMVar a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TMVar.html#takeTMVar",
          "type": "function"
        },
        "index": {
          "description": "Return the contents of the TMVar If the TMVar is currently empty the transaction will retry After takeTMVar the TMVar is left empty",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "takeTMVar",
          "normalized": "TMVar a-\u003eSTM a",
          "package": "stm",
          "partial": "TMVar",
          "signature": "TMVar a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#v:takeTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eputTMVar\u003c/a\u003e\u003c/code\u003e that does not \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003etryPutTMVar\u003c/a\u003e\u003c/code\u003e\n function attempts to put the value \u003ccode\u003ea\u003c/code\u003e into the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e, returning\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if it was successful, or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "tryPutTMVar",
          "package": "stm",
          "signature": "TMVar a -\u003e a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TMVar.html#tryPutTMVar",
          "type": "function"
        },
        "index": {
          "description": "version of putTMVar that does not retry The tryPutTMVar function attempts to put the value into the TMVar returning True if it was successful or False otherwise",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "tryPutTMVar",
          "normalized": "TMVar a-\u003ea-\u003eSTM Bool",
          "package": "stm",
          "partial": "Put TMVar",
          "signature": "TMVar a-\u003ea-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#v:tryPutTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadTMVar\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "tryReadTMVar",
          "package": "stm",
          "signature": "TMVar a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TMVar.html#tryReadTMVar",
          "type": "function"
        },
        "index": {
          "description": "version of readTMVar which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "tryReadTMVar",
          "normalized": "TMVar a-\u003eSTM(Maybe a)",
          "package": "stm",
          "partial": "Read TMVar",
          "signature": "TMVar a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#v:tryReadTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003etakeTMVar\u003c/a\u003e\u003c/code\u003e that does not \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003etryTakeTMVar\u003c/a\u003e\u003c/code\u003e\n function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e was empty, or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e if\n the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e was full with contents \u003ccode\u003ea\u003c/code\u003e.  After \u003ccode\u003e\u003ca\u003etryTakeTMVar\u003c/a\u003e\u003c/code\u003e, the\n \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is left empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "tryTakeTMVar",
          "package": "stm",
          "signature": "TMVar a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TMVar.html#tryTakeTMVar",
          "type": "function"
        },
        "index": {
          "description": "version of takeTMVar that does not retry The tryTakeTMVar function returns Nothing if the TMVar was empty or Just if the TMVar was full with contents After tryTakeTMVar the TMVar is left empty",
          "hierarchy": "Control Concurrent STM TMVar",
          "module": "Control.Concurrent.STM.TMVar",
          "name": "tryTakeTMVar",
          "normalized": "TMVar a-\u003eSTM(Maybe a)",
          "package": "stm",
          "partial": "Take TMVar",
          "signature": "TMVar a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TMVar.html#v:tryTakeTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e is like a \u003ccode\u003eTChan\u003c/code\u003e, with two important differences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e it has faster throughput than both \u003ccode\u003eTChan\u003c/code\u003e and \u003ccode\u003eChan\u003c/code\u003e (although\n    the costs are amortised, so the cost of individual operations\n    can vary a lot).\n\u003c/li\u003e\u003cli\u003e it does \u003cem\u003enot\u003c/em\u003e provide equivalents of the \u003ccode\u003edupTChan\u003c/code\u003e and\n    \u003ccode\u003ecloneTChan\u003c/code\u003e operations.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe implementation is based on the traditional purely-functional\n queue representation that uses two lists to obtain amortised \u003cem\u003eO(1)\u003c/em\u003e\n enqueue and dequeue operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "TQueue",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TQueue.html",
          "type": "module"
        },
        "index": {
          "description": "TQueue is like TChan with two important differences it has faster throughput than both TChan and Chan although the costs are amortised so the cost of individual operations can vary lot it does not provide equivalents of the dupTChan and cloneTChan operations The implementation is based on the traditional purely-functional queue representation that uses two lists to obtain amortised enqueue and dequeue operations",
          "hierarchy": "Control Concurrent STM TQueue",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "TQueue",
          "package": "stm",
          "partial": "TQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "TQueue",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TQueue.html#TQueue",
          "type": "data"
        },
        "index": {
          "description": "TQueue is an abstract type representing an unbounded FIFO channel",
          "hierarchy": "Control Concurrent STM TQueue",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "TQueue",
          "package": "stm",
          "partial": "TQueue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TQueue.html#t:TQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "isEmptyTQueue",
          "package": "stm",
          "signature": "TQueue a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TQueue.html#isEmptyTQueue",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TQueue is empty",
          "hierarchy": "Control Concurrent STM TQueue",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "isEmptyTQueue",
          "normalized": "TQueue a-\u003eSTM Bool",
          "package": "stm",
          "partial": "Empty TQueue",
          "signature": "TQueue a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TQueue.html#v:isEmptyTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "newTQueue",
          "package": "stm",
          "signature": "STM (TQueue a)",
          "source": "src/Control-Concurrent-STM-TQueue.html#newTQueue",
          "type": "function"
        },
        "index": {
          "description": "Build and returns new instance of TQueue",
          "hierarchy": "Control Concurrent STM TQueue",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "newTQueue",
          "package": "stm",
          "partial": "TQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TQueue.html#v:newTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTQueue\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "newTQueueIO",
          "package": "stm",
          "signature": "IO (TQueue a)",
          "source": "src/Control-Concurrent-STM-TQueue.html#newTQueueIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTQueue This is useful for creating top-level TQueue using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent STM TQueue",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "newTQueueIO",
          "package": "stm",
          "partial": "TQueue IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TQueue.html#v:newTQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next value from the \u003ccode\u003eTQueue\u003c/code\u003e without removing it,\n retrying if the channel is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "peekTQueue",
          "package": "stm",
          "signature": "TQueue a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TQueue.html#peekTQueue",
          "type": "function"
        },
        "index": {
          "description": "Get the next value from the TQueue without removing it retrying if the channel is empty",
          "hierarchy": "Control Concurrent STM TQueue",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "peekTQueue",
          "normalized": "TQueue a-\u003eSTM a",
          "package": "stm",
          "partial": "TQueue",
          "signature": "TQueue a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TQueue.html#v:peekTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "readTQueue",
          "package": "stm",
          "signature": "TQueue a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TQueue.html#readTQueue",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the TQueue",
          "hierarchy": "Control Concurrent STM TQueue",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "readTQueue",
          "normalized": "TQueue a-\u003eSTM a",
          "package": "stm",
          "partial": "TQueue",
          "signature": "TQueue a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TQueue.html#v:readTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekTQueue\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "tryPeekTQueue",
          "package": "stm",
          "signature": "TQueue a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TQueue.html#tryPeekTQueue",
          "type": "function"
        },
        "index": {
          "description": "version of peekTQueue which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent STM TQueue",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "tryPeekTQueue",
          "normalized": "TQueue a-\u003eSTM(Maybe a)",
          "package": "stm",
          "partial": "Peek TQueue",
          "signature": "TQueue a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TQueue.html#v:tryPeekTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadTQueue\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "tryReadTQueue",
          "package": "stm",
          "signature": "TQueue a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TQueue.html#tryReadTQueue",
          "type": "function"
        },
        "index": {
          "description": "version of readTQueue which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent STM TQueue",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "tryReadTQueue",
          "normalized": "TQueue a-\u003eSTM(Maybe a)",
          "package": "stm",
          "partial": "Read TQueue",
          "signature": "TQueue a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TQueue.html#v:tryReadTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a channel, where it will be the next item read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "unGetTQueue",
          "package": "stm",
          "signature": "TQueue a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TQueue.html#unGetTQueue",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto channel where it will be the next item read",
          "hierarchy": "Control Concurrent STM TQueue",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "unGetTQueue",
          "normalized": "TQueue a-\u003ea-\u003eSTM()",
          "package": "stm",
          "partial": "Get TQueue",
          "signature": "TQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TQueue.html#v:unGetTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "writeTQueue",
          "package": "stm",
          "signature": "TQueue a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TQueue.html#writeTQueue",
          "type": "function"
        },
        "index": {
          "description": "Write value to TQueue",
          "hierarchy": "Control Concurrent STM TQueue",
          "module": "Control.Concurrent.STM.TQueue",
          "name": "writeTQueue",
          "normalized": "TQueue a-\u003ea-\u003eSTM()",
          "package": "stm",
          "partial": "TQueue",
          "signature": "TQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TQueue.html#v:writeTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTSem\u003c/a\u003e\u003c/code\u003e: transactional semaphores.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TSem",
          "name": "TSem",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TSem.html",
          "type": "module"
        },
        "index": {
          "description": "TSem transactional semaphores",
          "hierarchy": "Control Concurrent STM TSem",
          "module": "Control.Concurrent.STM.TSem",
          "name": "TSem",
          "package": "stm",
          "partial": "TSem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TSem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTSem\u003c/a\u003e\u003c/code\u003e is a transactional semaphore.  It holds a certain number\n of units, and units may be acquired or released by \u003ccode\u003e\u003ca\u003ewaitTSem\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003esignalTSem\u003c/a\u003e\u003c/code\u003e respectively.  When the \u003ccode\u003e\u003ca\u003eTSem\u003c/a\u003e\u003c/code\u003e is empty, \u003ccode\u003e\u003ca\u003ewaitTSem\u003c/a\u003e\u003c/code\u003e\n blocks.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eTSem\u003c/a\u003e\u003c/code\u003e has no concept of fairness, and there is no\n guarantee that threads blocked in \u003ccode\u003e\u003ca\u003ewaitTSem\u003c/a\u003e\u003c/code\u003e will be unblocked in\n the same order; in fact they will all be unblocked at the same time\n and will fight over the \u003ccode\u003e\u003ca\u003eTSem\u003c/a\u003e\u003c/code\u003e.  Hence \u003ccode\u003e\u003ca\u003eTSem\u003c/a\u003e\u003c/code\u003e is not suitable if\n you expect there to be a high number of threads contending for the\n resource.  However, like other STM abstractions, \u003ccode\u003e\u003ca\u003eTSem\u003c/a\u003e\u003c/code\u003e is\n composable.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TSem",
          "name": "TSem",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TSem.html#TSem",
          "type": "data"
        },
        "index": {
          "description": "TSem is transactional semaphore It holds certain number of units and units may be acquired or released by waitTSem and signalTSem respectively When the TSem is empty waitTSem blocks Note that TSem has no concept of fairness and there is no guarantee that threads blocked in waitTSem will be unblocked in the same order in fact they will all be unblocked at the same time and will fight over the TSem Hence TSem is not suitable if you expect there to be high number of threads contending for the resource However like other STM abstractions TSem is composable",
          "hierarchy": "Control Concurrent STM TSem",
          "module": "Control.Concurrent.STM.TSem",
          "name": "TSem",
          "package": "stm",
          "partial": "TSem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TSem.html#t:TSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TSem",
          "name": "newTSem",
          "package": "stm",
          "signature": "Int -\u003e STM TSem",
          "source": "src/Control-Concurrent-STM-TSem.html#newTSem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TSem",
          "module": "Control.Concurrent.STM.TSem",
          "name": "newTSem",
          "normalized": "Int-\u003eSTM TSem",
          "package": "stm",
          "partial": "TSem",
          "signature": "Int-\u003eSTM TSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TSem.html#v:newTSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TSem",
          "name": "signalTSem",
          "package": "stm",
          "signature": "TSem -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TSem.html#signalTSem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TSem",
          "module": "Control.Concurrent.STM.TSem",
          "name": "signalTSem",
          "normalized": "TSem-\u003eSTM()",
          "package": "stm",
          "partial": "TSem",
          "signature": "TSem-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TSem.html#v:signalTSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TSem",
          "name": "waitTSem",
          "package": "stm",
          "signature": "TSem -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TSem.html#waitTSem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TSem",
          "module": "Control.Concurrent.STM.TSem",
          "name": "waitTSem",
          "normalized": "TSem-\u003eSTM()",
          "package": "stm",
          "partial": "TSem",
          "signature": "TSem-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TSem.html#v:waitTSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTVar: Transactional variables\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TVar",
          "name": "TVar",
          "package": "stm",
          "source": "src/Control-Concurrent-STM-TVar.html",
          "type": "module"
        },
        "index": {
          "description": "TVar Transactional variables",
          "hierarchy": "Control Concurrent STM TVar",
          "module": "Control.Concurrent.STM.TVar",
          "name": "TVar",
          "package": "stm",
          "partial": "TVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShared memory locations that support atomic memory transactions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TVar",
          "name": "TVar",
          "package": "stm",
          "type": "data"
        },
        "index": {
          "description": "Shared memory locations that support atomic memory transactions",
          "hierarchy": "Control Concurrent STM TVar",
          "module": "Control.Concurrent.STM.TVar",
          "name": "TVar",
          "package": "stm",
          "partial": "TVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TVar.html#t:TVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the contents of a \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e. \u003cem\u003eN.B.\u003c/em\u003e, this version is\n non-strict.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TVar",
          "name": "modifyTVar",
          "package": "stm",
          "signature": "TVar a -\u003e (a -\u003e a) -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TVar.html#modifyTVar",
          "type": "function"
        },
        "index": {
          "description": "Mutate the contents of TVar N.B this version is non-strict",
          "hierarchy": "Control Concurrent STM TVar",
          "module": "Control.Concurrent.STM.TVar",
          "name": "modifyTVar",
          "normalized": "TVar a-\u003e(a-\u003ea)-\u003eSTM()",
          "package": "stm",
          "partial": "TVar",
          "signature": "TVar a-\u003e(a-\u003ea)-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TVar.html#v:modifyTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003emodifyTVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TVar",
          "name": "modifyTVar'",
          "package": "stm",
          "signature": "TVar a -\u003e (a -\u003e a) -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TVar.html#modifyTVar%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of modifyTVar",
          "hierarchy": "Control Concurrent STM TVar",
          "module": "Control.Concurrent.STM.TVar",
          "name": "modifyTVar'",
          "normalized": "TVar a-\u003e(a-\u003ea)-\u003eSTM()",
          "package": "stm",
          "partial": "TVar'",
          "signature": "TVar a-\u003e(a-\u003ea)-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TVar.html#v:modifyTVar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new TVar holding a value supplied\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TVar",
          "name": "newTVar",
          "package": "stm",
          "signature": "a -\u003e STM (TVar a)",
          "type": "function"
        },
        "index": {
          "description": "Create new TVar holding value supplied",
          "hierarchy": "Control Concurrent STM TVar",
          "module": "Control.Concurrent.STM.TVar",
          "name": "newTVar",
          "normalized": "a-\u003eSTM(TVar a)",
          "package": "stm",
          "partial": "TVar",
          "signature": "a-\u003eSTM(TVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TVar.html#v:newTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTVar\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TVar",
          "name": "newTVarIO",
          "package": "stm",
          "signature": "a -\u003e IO (TVar a)",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTVar This is useful for creating top-level TVar using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent STM TVar",
          "module": "Control.Concurrent.STM.TVar",
          "name": "newTVarIO",
          "normalized": "a-\u003eIO(TVar a)",
          "package": "stm",
          "partial": "TVar IO",
          "signature": "a-\u003eIO(TVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TVar.html#v:newTVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current value stored in a TVar\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TVar",
          "name": "readTVar",
          "package": "stm",
          "signature": "TVar a -\u003e STM a",
          "type": "function"
        },
        "index": {
          "description": "Return the current value stored in TVar",
          "hierarchy": "Control Concurrent STM TVar",
          "module": "Control.Concurrent.STM.TVar",
          "name": "readTVar",
          "normalized": "TVar a-\u003eSTM a",
          "package": "stm",
          "partial": "TVar",
          "signature": "TVar a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TVar.html#v:readTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current value stored in a TVar.\n This is equivalent to\n\u003c/p\u003e\u003cpre\u003e  readTVarIO = atomically . readTVar\n\u003c/pre\u003e\u003cp\u003ebut works much faster, because it doesn't perform a complete\n transaction, it just reads the current value of the \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TVar",
          "name": "readTVarIO",
          "package": "stm",
          "signature": "TVar a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Return the current value stored in TVar This is equivalent to readTVarIO atomically readTVar but works much faster because it doesn perform complete transaction it just reads the current value of the TVar",
          "hierarchy": "Control Concurrent STM TVar",
          "module": "Control.Concurrent.STM.TVar",
          "name": "readTVarIO",
          "normalized": "TVar a-\u003eIO a",
          "package": "stm",
          "partial": "TVar IO",
          "signature": "TVar a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TVar.html#v:readTVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of returned TVar to True after a given number of\n microseconds. The caveats associated with threadDelay also apply.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TVar",
          "name": "registerDelay",
          "package": "stm",
          "signature": "Int -\u003e IO (TVar Bool)",
          "type": "function"
        },
        "index": {
          "description": "Set the value of returned TVar to True after given number of microseconds The caveats associated with threadDelay also apply",
          "hierarchy": "Control Concurrent STM TVar",
          "module": "Control.Concurrent.STM.TVar",
          "name": "registerDelay",
          "normalized": "Int-\u003eIO(TVar Bool)",
          "package": "stm",
          "partial": "Delay",
          "signature": "Int-\u003eIO(TVar Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TVar.html#v:registerDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the contents of a \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e for a new value.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TVar",
          "name": "swapTVar",
          "package": "stm",
          "signature": "TVar a -\u003e a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TVar.html#swapTVar",
          "type": "function"
        },
        "index": {
          "description": "Swap the contents of TVar for new value",
          "hierarchy": "Control Concurrent STM TVar",
          "module": "Control.Concurrent.STM.TVar",
          "name": "swapTVar",
          "normalized": "TVar a-\u003ea-\u003eSTM a",
          "package": "stm",
          "partial": "TVar",
          "signature": "TVar a-\u003ea-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TVar.html#v:swapTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the supplied value into a TVar\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TVar",
          "name": "writeTVar",
          "package": "stm",
          "signature": "TVar a -\u003e a -\u003e STM ()",
          "type": "function"
        },
        "index": {
          "description": "Write the supplied value into TVar",
          "hierarchy": "Control Concurrent STM TVar",
          "module": "Control.Concurrent.STM.TVar",
          "name": "writeTVar",
          "normalized": "TVar a-\u003ea-\u003eSTM()",
          "package": "stm",
          "partial": "TVar",
          "signature": "TVar a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM-TVar.html#v:writeTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSoftware Transactional Memory: a modular composable concurrency\n abstraction.  See\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eComposable memory transactions\u003c/em\u003e, by Tim Harris, Simon Marlow, Simon\n    Peyton Jones, and Maurice Herlihy, in /ACM Conference on Principles\n    and Practice of Parallel Programming/ 2005.\n    \u003ca\u003ehttp://research.microsoft.com/Users/simonpj/papers/stm/index.htm\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM",
          "name": "STM",
          "package": "stm",
          "source": "src/Control-Concurrent-STM.html",
          "type": "module"
        },
        "index": {
          "description": "Software Transactional Memory modular composable concurrency abstraction See Composable memory transactions by Tim Harris Simon Marlow Simon Peyton Jones and Maurice Herlihy in ACM Conference on Principles and Practice of Parallel Programming http research.microsoft.com Users simonpj papers stm index.htm",
          "hierarchy": "Control Concurrent STM",
          "module": "Control.Concurrent.STM",
          "name": "STM",
          "package": "stm",
          "partial": "STM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Concurrent-STM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSoftware Transactional Memory: a modular composable concurrency\n abstraction.  See\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eComposable memory transactions\u003c/em\u003e, by Tim Harris, Simon Marlow, Simon\n    Peyton Jones, and Maurice Herlihy, in /ACM Conference on Principles\n    and Practice of Parallel Programming/ 2005.\n    \u003ca\u003ehttp://research.microsoft.com/Users/simonpj/papers/stm/index.htm\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module only defines the \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e monad; you probably want to \n import \u003ca\u003eControl.Concurrent.STM\u003c/a\u003e (which exports \u003ca\u003eControl.Monad.STM\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.STM",
          "name": "STM",
          "package": "stm",
          "source": "src/Control-Monad-STM.html",
          "type": "module"
        },
        "index": {
          "description": "Software Transactional Memory modular composable concurrency abstraction See Composable memory transactions by Tim Harris Simon Marlow Simon Peyton Jones and Maurice Herlihy in ACM Conference on Principles and Practice of Parallel Programming http research.microsoft.com Users simonpj papers stm index.htm This module only defines the STM monad you probably want to import Control.Concurrent.STM which exports Control.Monad.STM",
          "hierarchy": "Control Monad STM",
          "module": "Control.Monad.STM",
          "name": "STM",
          "package": "stm",
          "partial": "STM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Monad-STM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad supporting atomic memory transactions.\n\u003c/p\u003e",
          "module": "Control.Monad.STM",
          "name": "STM",
          "package": "stm",
          "type": "data"
        },
        "index": {
          "description": "monad supporting atomic memory transactions",
          "hierarchy": "Control Monad STM",
          "module": "Control.Monad.STM",
          "name": "STM",
          "package": "stm",
          "partial": "STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Monad-STM.html#t:STM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealways is a variant of alwaysSucceeds in which the invariant is\n expressed as an STM Bool action that must return True.  Returning\n False or raising an exception are both treated as invariant failures.\n\u003c/p\u003e",
          "module": "Control.Monad.STM",
          "name": "always",
          "package": "stm",
          "signature": "STM Bool -\u003e STM ()",
          "type": "function"
        },
        "index": {
          "description": "always is variant of alwaysSucceeds in which the invariant is expressed as an STM Bool action that must return True Returning False or raising an exception are both treated as invariant failures",
          "hierarchy": "Control Monad STM",
          "module": "Control.Monad.STM",
          "name": "always",
          "normalized": "STM Bool-\u003eSTM()",
          "package": "stm",
          "signature": "STM Bool-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Monad-STM.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealwaysSucceeds adds a new invariant that must be true when passed\n to alwaysSucceeds, at the end of the current transaction, and at\n the end of every subsequent transaction.  If it fails at any\n of those points then the transaction violating it is aborted\n and the exception raised by the invariant is propagated.\n\u003c/p\u003e",
          "module": "Control.Monad.STM",
          "name": "alwaysSucceeds",
          "package": "stm",
          "signature": "STM a -\u003e STM ()",
          "type": "function"
        },
        "index": {
          "description": "alwaysSucceeds adds new invariant that must be true when passed to alwaysSucceeds at the end of the current transaction and at the end of every subsequent transaction If it fails at any of those points then the transaction violating it is aborted and the exception raised by the invariant is propagated",
          "hierarchy": "Control Monad STM",
          "module": "Control.Monad.STM",
          "name": "alwaysSucceeds",
          "normalized": "STM a-\u003eSTM()",
          "package": "stm",
          "partial": "Succeeds",
          "signature": "STM a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Monad-STM.html#v:alwaysSucceeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a series of STM actions atomically.\n\u003c/p\u003e\u003cp\u003eYou cannot use \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside an \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e.\n Any attempt to do so will result in a runtime error.  (Reason: allowing\n this would effectively allow a transaction inside a transaction, depending\n on exactly when the thunk is evaluated.)\n\u003c/p\u003e\u003cp\u003eHowever, see \u003ccode\u003e\u003ca\u003enewTVarIO\u003c/a\u003e\u003c/code\u003e, which can be called inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e,\n and which allows top-level TVars to be allocated.\n\u003c/p\u003e",
          "module": "Control.Monad.STM",
          "name": "atomically",
          "package": "stm",
          "signature": "STM a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Perform series of STM actions atomically You cannot use atomically inside an unsafePerformIO or unsafeInterleaveIO Any attempt to do so will result in runtime error Reason allowing this would effectively allow transaction inside transaction depending on exactly when the thunk is evaluated However see newTVarIO which can be called inside unsafePerformIO and which allows top-level TVars to be allocated",
          "hierarchy": "Control Monad STM",
          "module": "Control.Monad.STM",
          "name": "atomically",
          "normalized": "STM a-\u003eIO a",
          "package": "stm",
          "signature": "STM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Monad-STM.html#v:atomically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException handling within STM actions.\n\u003c/p\u003e",
          "module": "Control.Monad.STM",
          "name": "catchSTM",
          "package": "stm",
          "signature": "STM a -\u003e (e -\u003e STM a) -\u003e STM a",
          "type": "function"
        },
        "index": {
          "description": "Exception handling within STM actions",
          "hierarchy": "Control Monad STM",
          "module": "Control.Monad.STM",
          "name": "catchSTM",
          "normalized": "STM a-\u003e(b-\u003eSTM a)-\u003eSTM a",
          "package": "stm",
          "partial": "STM",
          "signature": "STM a-\u003e(e-\u003eSTM a)-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Monad-STM.html#v:catchSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.STM",
          "name": "check",
          "package": "stm",
          "signature": "Bool -\u003e STM ()",
          "source": "src/Control-Monad-STM.html#check",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad STM",
          "module": "Control.Monad.STM",
          "name": "check",
          "normalized": "Bool-\u003eSTM()",
          "package": "stm",
          "signature": "Bool-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Monad-STM.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two alternative STM actions (GHC only).  If the first action\n completes without retrying then it forms the result of the orElse.\n Otherwise, if the first action retries, then the second action is\n tried in its place.  If both actions retry then the orElse as a\n whole retries.\n\u003c/p\u003e",
          "module": "Control.Monad.STM",
          "name": "orElse",
          "package": "stm",
          "signature": "STM a -\u003e STM a -\u003e STM a",
          "type": "function"
        },
        "index": {
          "description": "Compose two alternative STM actions GHC only If the first action completes without retrying then it forms the result of the orElse Otherwise if the first action retries then the second action is tried in its place If both actions retry then the orElse as whole retries",
          "hierarchy": "Control Monad STM",
          "module": "Control.Monad.STM",
          "name": "orElse",
          "normalized": "STM a-\u003eSTM a-\u003eSTM a",
          "package": "stm",
          "partial": "Else",
          "signature": "STM a-\u003eSTM a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Monad-STM.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetry execution of the current memory transaction because it has seen\n values in TVars which mean that it should not continue (e.g. the TVars\n represent a shared buffer that is now empty).  The implementation may\n block the thread until one of the TVars that it has read from has been\n udpated. (GHC only)\n\u003c/p\u003e",
          "module": "Control.Monad.STM",
          "name": "retry",
          "package": "stm",
          "signature": "STM a",
          "type": "function"
        },
        "index": {
          "description": "Retry execution of the current memory transaction because it has seen values in TVars which mean that it should not continue e.g the TVars represent shared buffer that is now empty The implementation may block the thread until one of the TVars that it has read from has been udpated GHC only",
          "hierarchy": "Control Monad STM",
          "module": "Control.Monad.STM",
          "name": "retry",
          "package": "stm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Monad-STM.html#v:retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e that can only be used within the \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThrowing an exception in \u003ccode\u003eSTM\u003c/code\u003e aborts the transaction and propagates the\n exception.\n\u003c/p\u003e\u003cp\u003eAlthough \u003ccode\u003e\u003ca\u003ethrowSTM\u003c/a\u003e\u003c/code\u003e has a type that is an instance of the type of \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e, the\n two functions are subtly different:\n\u003c/p\u003e\u003cpre\u003e throw e    `seq` x  ===\u003e throw e\n throwSTM e `seq` x  ===\u003e x\n\u003c/pre\u003e\u003cp\u003eThe first example will cause the exception \u003ccode\u003ee\u003c/code\u003e to be raised,\n whereas the second one won't.  In fact, \u003ccode\u003e\u003ca\u003ethrowSTM\u003c/a\u003e\u003c/code\u003e will only cause\n an exception to be raised when it is used within the \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e monad.\n The \u003ccode\u003e\u003ca\u003ethrowSTM\u003c/a\u003e\u003c/code\u003e variant should be used in preference to \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e to\n raise an exception within the \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e monad because it guarantees\n ordering with respect to other \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e operations, whereas \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e\n does not.\n\u003c/p\u003e",
          "module": "Control.Monad.STM",
          "name": "throwSTM",
          "package": "stm",
          "signature": "e -\u003e STM a",
          "type": "function"
        },
        "index": {
          "description": "variant of throw that can only be used within the STM monad Throwing an exception in STM aborts the transaction and propagates the exception Although throwSTM has type that is an instance of the type of throw the two functions are subtly different throw seq throw throwSTM seq The first example will cause the exception to be raised whereas the second one won In fact throwSTM will only cause an exception to be raised when it is used within the STM monad The throwSTM variant should be used in preference to throw to raise an exception within the STM monad because it guarantees ordering with respect to other STM operations whereas throw does not",
          "hierarchy": "Control Monad STM",
          "module": "Control.Monad.STM",
          "name": "throwSTM",
          "normalized": "a-\u003eSTM b",
          "package": "stm",
          "partial": "STM",
          "signature": "e-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm/docs/Control-Monad-STM.html#v:throwSTM"
      }
    }
  ]
]