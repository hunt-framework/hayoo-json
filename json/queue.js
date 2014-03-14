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
        "word": "queue"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Classes",
          "name": "Classes",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "Classes",
          "package": "queue",
          "partial": "Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class carrying an altered set of functional dependencies used to\n  constrain queues when the type of the queue never escapes far enough for\n  a more deliberate choice to be made.\n\u003c/p\u003e",
          "module": "Data.Queue.Classes",
          "name": "DefaultFifo",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#DefaultFifo",
          "type": "class"
        },
        "index": {
          "description": "type class carrying an altered set of functional dependencies used to constrain queues when the type of the queue never escapes far enough for more deliberate choice to be made",
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "DefaultFifo",
          "package": "queue",
          "partial": "Default Fifo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#t:DefaultFifo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Classes",
          "name": "Dequeue",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#Dequeue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "Dequeue",
          "package": "queue",
          "partial": "Dequeue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#t:Dequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Classes",
          "name": "DequeueWhere",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#DequeueWhere",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "DequeueWhere",
          "package": "queue",
          "partial": "Dequeue Where",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#t:DequeueWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Classes",
          "name": "Enqueue",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#Enqueue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "Enqueue",
          "package": "queue",
          "partial": "Enqueue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#t:Enqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new FIFO queue.\n\u003c/p\u003e",
          "module": "Data.Queue.Classes",
          "name": "NewFifo",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#NewFifo",
          "type": "class"
        },
        "index": {
          "description": "Construct new FIFO queue",
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "NewFifo",
          "package": "queue",
          "partial": "New Fifo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#t:NewFifo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Classes",
          "name": "PeekQueue",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#PeekQueue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "PeekQueue",
          "package": "queue",
          "partial": "Peek Queue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#t:PeekQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Classes",
          "name": "QueueSize",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#QueueSize",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "QueueSize",
          "package": "queue",
          "partial": "Queue Size",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#t:QueueSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull an item out of a queue.  Should not block.  No ordering\n  constraints are implied other than that any item that went into\n  the queue \u003ca\u003ereally ought to\u003c/a\u003e come out before \u003ccode\u003e\u003ca\u003edequeue\u003c/a\u003e\u003c/code\u003e returns\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Classes",
          "name": "dequeue",
          "package": "queue",
          "signature": "q -\u003e m (Maybe a)",
          "source": "src/Data-Queue-Classes.html#dequeue",
          "type": "method"
        },
        "index": {
          "description": "Pull an item out of queue Should not block No ordering constraints are implied other than that any item that went into the queue really ought to come out before dequeue returns Nothing",
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "dequeue",
          "normalized": "a-\u003eb(Maybe c)",
          "package": "queue",
          "signature": "q-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#v:dequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Classes",
          "name": "dequeueBatch",
          "package": "queue",
          "signature": "q -\u003e m [a]",
          "source": "src/Data-Queue-Classes.html#dequeueBatch",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "dequeueBatch",
          "normalized": "a-\u003eb[c]",
          "package": "queue",
          "partial": "Batch",
          "signature": "q-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#v:dequeueBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull an item matching the given predicate out of a queue.\n\u003c/p\u003e",
          "module": "Data.Queue.Classes",
          "name": "dequeueWhere",
          "package": "queue",
          "signature": "q -\u003e (a -\u003e Bool) -\u003e m (Maybe a)",
          "source": "src/Data-Queue-Classes.html#dequeueWhere",
          "type": "method"
        },
        "index": {
          "description": "Pull an item matching the given predicate out of queue",
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "dequeueWhere",
          "normalized": "a-\u003e(b-\u003eBool)-\u003ec(Maybe b)",
          "package": "queue",
          "partial": "Where",
          "signature": "q-\u003e(a-\u003eBool)-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#v:dequeueWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut an item into a queue.  May block while trying to do so.\n  No constraint is placed on the behavior of the queue except that\n  every item put in \u003ca\u003ereally ought to\u003c/a\u003e come out sometime before\n  \u003ccode\u003e\u003ca\u003edequeue\u003c/a\u003e\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Classes",
          "name": "enqueue",
          "package": "queue",
          "signature": "q -\u003e a -\u003e m ()",
          "source": "src/Data-Queue-Classes.html#enqueue",
          "type": "method"
        },
        "index": {
          "description": "Put an item into queue May block while trying to do so No constraint is placed on the behavior of the queue except that every item put in really ought to come out sometime before dequeue returns Nothing",
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "enqueue",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "queue",
          "signature": "q-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#v:enqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Classes",
          "name": "enqueueBatch",
          "package": "queue",
          "signature": "q -\u003e [a] -\u003e m ()",
          "source": "src/Data-Queue-Classes.html#enqueueBatch",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "enqueueBatch",
          "normalized": "a-\u003e[b]-\u003ec()",
          "package": "queue",
          "partial": "Batch",
          "signature": "q-\u003e[a]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#v:enqueueBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Classes",
          "name": "newFifo",
          "package": "queue",
          "signature": "m q",
          "source": "src/Data-Queue-Classes.html#newFifo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "newFifo",
          "package": "queue",
          "partial": "Fifo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#v:newFifo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the whole contents of the queue (if possible) without \n  altering the queue's contents.  Obviously in cases where this\n  can't be done lazily this can be a very expensive operation.\n\u003c/p\u003e",
          "module": "Data.Queue.Classes",
          "name": "peekQueue",
          "package": "queue",
          "signature": "q -\u003e m [a]",
          "source": "src/Data-Queue-Classes.html#peekQueue",
          "type": "method"
        },
        "index": {
          "description": "return the whole contents of the queue if possible without altering the queue contents Obviously in cases where this can be done lazily this can be very expensive operation",
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "peekQueue",
          "normalized": "a-\u003eb[c]",
          "package": "queue",
          "partial": "Queue",
          "signature": "q-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#v:peekQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epeek a specified number of items off the queue.  The default\n  implementation is hideously wasteful in cases where peekQueue is\n  not able to get the contents lazily.\n\u003c/p\u003e",
          "module": "Data.Queue.Classes",
          "name": "peekQueueTaking",
          "package": "queue",
          "signature": "Int -\u003e q -\u003e m [a]",
          "source": "src/Data-Queue-Classes.html#peekQueueTaking",
          "type": "method"
        },
        "index": {
          "description": "peek specified number of items off the queue The default implementation is hideously wasteful in cases where peekQueue is not able to get the contents lazily",
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "peekQueueTaking",
          "normalized": "Int-\u003ea-\u003eb[c]",
          "package": "queue",
          "partial": "Queue Taking",
          "signature": "Int-\u003eq-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#v:peekQueueTaking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the number of elements in the queue\n\u003c/p\u003e",
          "module": "Data.Queue.Classes",
          "name": "queueSize",
          "package": "queue",
          "signature": "q -\u003e m Int",
          "source": "src/Data-Queue-Classes.html#queueSize",
          "type": "method"
        },
        "index": {
          "description": "return the number of elements in the queue",
          "hierarchy": "Data Queue Classes",
          "module": "Data.Queue.Classes",
          "name": "queueSize",
          "normalized": "a-\u003eb Int",
          "package": "queue",
          "partial": "Size",
          "signature": "q-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Classes.html#v:queueSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Instances",
          "name": "Instances",
          "package": "queue",
          "source": "src/Data-Queue-Instances.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Queue Instances",
          "module": "Data.Queue.Instances",
          "name": "Instances",
          "package": "queue",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
          "module": "Data.Queue.Instances",
          "name": "Chan",
          "package": "queue",
          "type": "data"
        },
        "index": {
          "description": "Chan is an abstract type representing an unbounded FIFO channel",
          "hierarchy": "Data Queue Instances",
          "module": "Data.Queue.Instances",
          "name": "Chan",
          "package": "queue",
          "partial": "Chan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Instances.html#t:Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e (pronounced \"em-var\") is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a a box, which may be empty or full.\n\u003c/p\u003e",
          "module": "Data.Queue.Instances",
          "name": "MVar",
          "package": "queue",
          "type": "data"
        },
        "index": {
          "description": "An MVar pronounced em-var is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
          "hierarchy": "Data Queue Instances",
          "module": "Data.Queue.Instances",
          "name": "MVar",
          "package": "queue",
          "partial": "MVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Instances.html#t:MVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad supporting atomic memory transactions.\n\u003c/p\u003e",
          "module": "Data.Queue.Instances",
          "name": "STM",
          "package": "queue",
          "type": "data"
        },
        "index": {
          "description": "monad supporting atomic memory transactions",
          "hierarchy": "Data Queue Instances",
          "module": "Data.Queue.Instances",
          "name": "STM",
          "package": "queue",
          "partial": "STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Instances.html#t:STM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
          "module": "Data.Queue.Instances",
          "name": "TChan",
          "package": "queue",
          "type": "data"
        },
        "index": {
          "description": "TChan is an abstract type representing an unbounded FIFO channel",
          "hierarchy": "Data Queue Instances",
          "module": "Data.Queue.Instances",
          "name": "TChan",
          "package": "queue",
          "partial": "TChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Instances.html#t:TChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a box, which may be empty or full.\n\u003c/p\u003e",
          "module": "Data.Queue.Instances",
          "name": "TMVar",
          "package": "queue",
          "type": "data"
        },
        "index": {
          "description": "TMVar is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
          "hierarchy": "Data Queue Instances",
          "module": "Data.Queue.Instances",
          "name": "TMVar",
          "package": "queue",
          "partial": "TMVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Instances.html#t:TMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a series of STM actions atomically.\n\u003c/p\u003e\u003cp\u003eYou cannot use \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside an \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e.\n Any attempt to do so will result in a runtime error.  (Reason: allowing\n this would effectively allow a transaction inside a transaction, depending\n on exactly when the thunk is evaluated.)\n\u003c/p\u003e\u003cp\u003eHowever, see \u003ccode\u003e\u003ca\u003enewTVarIO\u003c/a\u003e\u003c/code\u003e, which can be called inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e,\n and which allows top-level TVars to be allocated.\n\u003c/p\u003e",
          "module": "Data.Queue.Instances",
          "name": "atomically",
          "package": "queue",
          "signature": "STM a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Perform series of STM actions atomically You cannot use atomically inside an unsafePerformIO or unsafeInterleaveIO Any attempt to do so will result in runtime error Reason allowing this would effectively allow transaction inside transaction depending on exactly when the thunk is evaluated However see newTVarIO which can be called inside unsafePerformIO and which allows top-level TVars to be allocated",
          "hierarchy": "Data Queue Instances",
          "module": "Data.Queue.Instances",
          "name": "atomically",
          "normalized": "STM a-\u003eIO a",
          "package": "queue",
          "signature": "STM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue-Instances.html#v:atomically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue",
          "name": "Queue",
          "package": "queue",
          "source": "src/Data-Queue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "Queue",
          "package": "queue",
          "partial": "Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class carrying an altered set of functional dependencies used to\n  constrain queues when the type of the queue never escapes far enough for\n  a more deliberate choice to be made.\n\u003c/p\u003e",
          "module": "Data.Queue",
          "name": "DefaultFifo",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#DefaultFifo",
          "type": "class"
        },
        "index": {
          "description": "type class carrying an altered set of functional dependencies used to constrain queues when the type of the queue never escapes far enough for more deliberate choice to be made",
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "DefaultFifo",
          "package": "queue",
          "partial": "Default Fifo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#t:DefaultFifo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue",
          "name": "Dequeue",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#Dequeue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "Dequeue",
          "package": "queue",
          "partial": "Dequeue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#t:Dequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue",
          "name": "DequeueWhere",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#DequeueWhere",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "DequeueWhere",
          "package": "queue",
          "partial": "Dequeue Where",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#t:DequeueWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue",
          "name": "Enqueue",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#Enqueue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "Enqueue",
          "package": "queue",
          "partial": "Enqueue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#t:Enqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new FIFO queue.\n\u003c/p\u003e",
          "module": "Data.Queue",
          "name": "NewFifo",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#NewFifo",
          "type": "class"
        },
        "index": {
          "description": "Construct new FIFO queue",
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "NewFifo",
          "package": "queue",
          "partial": "New Fifo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#t:NewFifo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue",
          "name": "PeekQueue",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#PeekQueue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "PeekQueue",
          "package": "queue",
          "partial": "Peek Queue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#t:PeekQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue",
          "name": "QueueSize",
          "package": "queue",
          "source": "src/Data-Queue-Classes.html#QueueSize",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "QueueSize",
          "package": "queue",
          "partial": "Queue Size",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#t:QueueSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRQueue\u003c/a\u003e\u003c/code\u003e : read-only newtype wrapper for arbitrary queues\n\u003c/p\u003e",
          "module": "Data.Queue",
          "name": "RQueue",
          "package": "queue",
          "source": "src/Data-Queue.html#RQueue",
          "type": "data"
        },
        "index": {
          "description": "RQueue read-only newtype wrapper for arbitrary queues",
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "RQueue",
          "package": "queue",
          "partial": "RQueue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#t:RQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWQueue\u003c/a\u003e\u003c/code\u003e : write-only newtype wrapper for arbitrary queues\n\u003c/p\u003e",
          "module": "Data.Queue",
          "name": "WQueue",
          "package": "queue",
          "source": "src/Data-Queue.html#WQueue",
          "type": "data"
        },
        "index": {
          "description": "WQueue write-only newtype wrapper for arbitrary queues",
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "WQueue",
          "package": "queue",
          "partial": "WQueue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#t:WQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull an item out of a queue.  Should not block.  No ordering\n  constraints are implied other than that any item that went into\n  the queue \u003ca\u003ereally ought to\u003c/a\u003e come out before \u003ccode\u003e\u003ca\u003edequeue\u003c/a\u003e\u003c/code\u003e returns\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue",
          "name": "dequeue",
          "package": "queue",
          "signature": "q -\u003e m (Maybe a)",
          "source": "src/Data-Queue-Classes.html#dequeue",
          "type": "method"
        },
        "index": {
          "description": "Pull an item out of queue Should not block No ordering constraints are implied other than that any item that went into the queue really ought to come out before dequeue returns Nothing",
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "dequeue",
          "normalized": "a-\u003eb(Maybe c)",
          "package": "queue",
          "signature": "q-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#v:dequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue",
          "name": "dequeueBatch",
          "package": "queue",
          "signature": "q -\u003e m [a]",
          "source": "src/Data-Queue-Classes.html#dequeueBatch",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "dequeueBatch",
          "normalized": "a-\u003eb[c]",
          "package": "queue",
          "partial": "Batch",
          "signature": "q-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#v:dequeueBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull an item matching the given predicate out of a queue.\n\u003c/p\u003e",
          "module": "Data.Queue",
          "name": "dequeueWhere",
          "package": "queue",
          "signature": "q -\u003e (a -\u003e Bool) -\u003e m (Maybe a)",
          "source": "src/Data-Queue-Classes.html#dequeueWhere",
          "type": "method"
        },
        "index": {
          "description": "Pull an item matching the given predicate out of queue",
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "dequeueWhere",
          "normalized": "a-\u003e(b-\u003eBool)-\u003ec(Maybe b)",
          "package": "queue",
          "partial": "Where",
          "signature": "q-\u003e(a-\u003eBool)-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#v:dequeueWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut an item into a queue.  May block while trying to do so.\n  No constraint is placed on the behavior of the queue except that\n  every item put in \u003ca\u003ereally ought to\u003c/a\u003e come out sometime before\n  \u003ccode\u003e\u003ca\u003edequeue\u003c/a\u003e\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue",
          "name": "enqueue",
          "package": "queue",
          "signature": "q -\u003e a -\u003e m ()",
          "source": "src/Data-Queue-Classes.html#enqueue",
          "type": "method"
        },
        "index": {
          "description": "Put an item into queue May block while trying to do so No constraint is placed on the behavior of the queue except that every item put in really ought to come out sometime before dequeue returns Nothing",
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "enqueue",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "queue",
          "signature": "q-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#v:enqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue",
          "name": "enqueueBatch",
          "package": "queue",
          "signature": "q -\u003e [a] -\u003e m ()",
          "source": "src/Data-Queue-Classes.html#enqueueBatch",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "enqueueBatch",
          "normalized": "a-\u003e[b]-\u003ec()",
          "package": "queue",
          "partial": "Batch",
          "signature": "q-\u003e[a]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#v:enqueueBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue",
          "name": "mkRQueue",
          "package": "queue",
          "signature": "q -\u003e RQueue q",
          "source": "src/Data-Queue.html#mkRQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "mkRQueue",
          "normalized": "a-\u003eRQueue a",
          "package": "queue",
          "partial": "RQueue",
          "signature": "q-\u003eRQueue q",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#v:mkRQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue",
          "name": "mkWQueue",
          "package": "queue",
          "signature": "q -\u003e WQueue q",
          "source": "src/Data-Queue.html#mkWQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "mkWQueue",
          "normalized": "a-\u003eWQueue a",
          "package": "queue",
          "partial": "WQueue",
          "signature": "q-\u003eWQueue q",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#v:mkWQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue",
          "name": "newFifo",
          "package": "queue",
          "signature": "m q",
          "source": "src/Data-Queue-Classes.html#newFifo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "newFifo",
          "package": "queue",
          "partial": "Fifo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#v:newFifo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the whole contents of the queue (if possible) without \n  altering the queue's contents.  Obviously in cases where this\n  can't be done lazily this can be a very expensive operation.\n\u003c/p\u003e",
          "module": "Data.Queue",
          "name": "peekQueue",
          "package": "queue",
          "signature": "q -\u003e m [a]",
          "source": "src/Data-Queue-Classes.html#peekQueue",
          "type": "method"
        },
        "index": {
          "description": "return the whole contents of the queue if possible without altering the queue contents Obviously in cases where this can be done lazily this can be very expensive operation",
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "peekQueue",
          "normalized": "a-\u003eb[c]",
          "package": "queue",
          "partial": "Queue",
          "signature": "q-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#v:peekQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epeek a specified number of items off the queue.  The default\n  implementation is hideously wasteful in cases where peekQueue is\n  not able to get the contents lazily.\n\u003c/p\u003e",
          "module": "Data.Queue",
          "name": "peekQueueTaking",
          "package": "queue",
          "signature": "Int -\u003e q -\u003e m [a]",
          "source": "src/Data-Queue-Classes.html#peekQueueTaking",
          "type": "method"
        },
        "index": {
          "description": "peek specified number of items off the queue The default implementation is hideously wasteful in cases where peekQueue is not able to get the contents lazily",
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "peekQueueTaking",
          "normalized": "Int-\u003ea-\u003eb[c]",
          "package": "queue",
          "partial": "Queue Taking",
          "signature": "Int-\u003eq-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#v:peekQueueTaking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the number of elements in the queue\n\u003c/p\u003e",
          "module": "Data.Queue",
          "name": "queueSize",
          "package": "queue",
          "signature": "q -\u003e m Int",
          "source": "src/Data-Queue-Classes.html#queueSize",
          "type": "method"
        },
        "index": {
          "description": "return the number of elements in the queue",
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "queueSize",
          "normalized": "a-\u003eb Int",
          "package": "queue",
          "partial": "Size",
          "signature": "q-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queue/docs/Data-Queue.html#v:queueSize"
      }
    }
  ]
]