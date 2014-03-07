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
        "word": "priority-queue"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PriorityQueue",
          "name": "PriorityQueue",
          "package": "priority-queue",
          "source": "src/Data-PriorityQueue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "PriorityQueue",
          "package": "priority-queue",
          "partial": "Priority Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PriorityQueue",
          "name": "Dequeue",
          "package": "priority-queue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "Dequeue",
          "package": "priority-queue",
          "partial": "Dequeue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#t:Dequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PriorityQueue",
          "name": "DequeueWhere",
          "package": "priority-queue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "DequeueWhere",
          "package": "priority-queue",
          "partial": "Dequeue Where",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#t:DequeueWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PriorityQueue",
          "name": "Enqueue",
          "package": "priority-queue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "Enqueue",
          "package": "priority-queue",
          "partial": "Enqueue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#t:Enqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ca\u003epure\u003c/a\u003e type at the chewy center.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "PQ",
          "package": "priority-queue",
          "source": "src/Data-PriorityQueue.html#PQ",
          "type": "data"
        },
        "index": {
          "description": "The pure type at the chewy center",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "PQ",
          "package": "priority-queue",
          "partial": "PQ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#t:PQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PriorityQueue",
          "name": "PeekQueue",
          "package": "priority-queue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "PeekQueue",
          "package": "priority-queue",
          "partial": "Peek Queue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#t:PeekQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA priority queue usable in the monad \u003ccode\u003em\u003c/code\u003e with values of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "PriorityQueue",
          "package": "priority-queue",
          "source": "src/Data-PriorityQueue.html#PriorityQueue",
          "type": "data"
        },
        "index": {
          "description": "priority queue usable in the monad with values of type",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "PriorityQueue",
          "package": "priority-queue",
          "partial": "Priority Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#t:PriorityQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PriorityQueue",
          "name": "QueueSize",
          "package": "priority-queue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "QueueSize",
          "package": "priority-queue",
          "partial": "Queue Size",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#t:QueueSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull an item out of a queue.  Should not block.  No ordering\n  constraints are implied other than that any item that went into\n  the queue \u003ca\u003ereally ought to\u003c/a\u003e come out before \u003ccode\u003e\u003ca\u003edequeue\u003c/a\u003e\u003c/code\u003e returns\n  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "dequeue",
          "package": "priority-queue",
          "signature": "q -\u003e m (Maybe a)",
          "type": "method"
        },
        "index": {
          "description": "Pull an item out of queue Should not block No ordering constraints are implied other than that any item that went into the queue really ought to come out before dequeue returns Nothing",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "dequeue",
          "normalized": "a-\u003eb(Maybe c)",
          "package": "priority-queue",
          "signature": "q-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:dequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PriorityQueue",
          "name": "dequeueBatch",
          "package": "priority-queue",
          "signature": "q -\u003e m [a]",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "dequeueBatch",
          "normalized": "a-\u003eb[c]",
          "package": "priority-queue",
          "partial": "Batch",
          "signature": "q-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:dequeueBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull an item matching the given predicate out of a queue.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "dequeueWhere",
          "package": "priority-queue",
          "signature": "q -\u003e (a -\u003e Bool) -\u003e m (Maybe a)",
          "type": "method"
        },
        "index": {
          "description": "Pull an item matching the given predicate out of queue",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "dequeueWhere",
          "normalized": "a-\u003e(b-\u003eBool)-\u003ec(Maybe b)",
          "package": "priority-queue",
          "partial": "Where",
          "signature": "q-\u003e(a-\u003eBool)-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:dequeueWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA new empty \u003ccode\u003e\u003ca\u003ePQ\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "emptyPQ",
          "package": "priority-queue",
          "signature": "(a -\u003e p) -\u003e PQ a",
          "source": "src/Data-PriorityQueue.html#emptyPQ",
          "type": "function"
        },
        "index": {
          "description": "new empty PQ",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "emptyPQ",
          "normalized": "(a-\u003eb)-\u003ePQ a",
          "package": "priority-queue",
          "partial": "PQ",
          "signature": "(a-\u003ep)-\u003ePQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:emptyPQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut an item into a queue.  May block while trying to do so.\n  No constraint is placed on the behavior of the queue except that\n  every item put in \u003ca\u003ereally ought to\u003c/a\u003e come out sometime before\n  \u003ccode\u003e\u003ca\u003edequeue\u003c/a\u003e\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "enqueue",
          "package": "priority-queue",
          "signature": "q -\u003e a -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "Put an item into queue May block while trying to do so No constraint is placed on the behavior of the queue except that every item put in really ought to come out sometime before dequeue returns Nothing",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "enqueue",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "priority-queue",
          "signature": "q-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:enqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PriorityQueue",
          "name": "enqueueBatch",
          "package": "priority-queue",
          "signature": "q -\u003e [a] -\u003e m ()",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "enqueueBatch",
          "normalized": "a-\u003e[b]-\u003ec()",
          "package": "priority-queue",
          "partial": "Batch",
          "signature": "q-\u003e[a]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:enqueueBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a priority queue using an instance of the default modifiable \n  reference for the requested monad and value type\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "mkDefaultPriorityQueue",
          "package": "priority-queue",
          "signature": "Ref m (PQ a) -\u003e PriorityQueue m a",
          "source": "src/Data-PriorityQueue.html#mkDefaultPriorityQueue",
          "type": "function"
        },
        "index": {
          "description": "Build priority queue using an instance of the default modifiable reference for the requested monad and value type",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "mkDefaultPriorityQueue",
          "normalized": "Ref a(PQ b)-\u003ePriorityQueue a b",
          "package": "priority-queue",
          "partial": "Default Priority Queue",
          "signature": "Ref m(PQ a)-\u003ePriorityQueue m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:mkDefaultPriorityQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a priority queue from a modifiable reference containing\n  a \u003ccode\u003e\u003ca\u003ePQ\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "mkPriorityQueue",
          "package": "priority-queue",
          "signature": "sr -\u003e PriorityQueue m a",
          "source": "src/Data-PriorityQueue.html#mkPriorityQueue",
          "type": "function"
        },
        "index": {
          "description": "Build priority queue from modifiable reference containing PQ",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "mkPriorityQueue",
          "normalized": "a-\u003ePriorityQueue b c",
          "package": "priority-queue",
          "partial": "Priority Queue",
          "signature": "sr-\u003ePriorityQueue m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:mkPriorityQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new priority queue using the specified indexing function\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "newPriorityQueue",
          "package": "priority-queue",
          "signature": "(a -\u003e p) -\u003e m (PriorityQueue m1 a)",
          "source": "src/Data-PriorityQueue.html#newPriorityQueue",
          "type": "function"
        },
        "index": {
          "description": "Construct new priority queue using the specified indexing function",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "newPriorityQueue",
          "normalized": "(a-\u003eb)-\u003ec(PriorityQueue c a)",
          "package": "priority-queue",
          "partial": "Priority Queue",
          "signature": "(a-\u003ep)-\u003em(PriorityQueue m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:newPriorityQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new priority queue using a comparator function.  It is \n  the user's responsibility to ensure that this function provides a\n  sensible order.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "newPriorityQueueBy",
          "package": "priority-queue",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e m (PriorityQueue m1 a)",
          "source": "src/Data-PriorityQueue.html#newPriorityQueueBy",
          "type": "function"
        },
        "index": {
          "description": "Construct new priority queue using comparator function It is the user responsibility to ensure that this function provides sensible order",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "newPriorityQueueBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eb(PriorityQueue b a)",
          "package": "priority-queue",
          "partial": "Priority Queue By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003em(PriorityQueue m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:newPriorityQueueBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the whole contents of the queue (if possible) without \n  altering the queue's contents.  Obviously in cases where this\n  can't be done lazily this can be a very expensive operation.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "peekQueue",
          "package": "priority-queue",
          "signature": "q -\u003e m [a]",
          "type": "method"
        },
        "index": {
          "description": "return the whole contents of the queue if possible without altering the queue contents Obviously in cases where this can be done lazily this can be very expensive operation",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "peekQueue",
          "normalized": "a-\u003eb[c]",
          "package": "priority-queue",
          "partial": "Queue",
          "signature": "q-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:peekQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epeek a specified number of items off the queue.  The default\n  implementation is hideously wasteful in cases where peekQueue is\n  not able to get the contents lazily.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "peekQueueTaking",
          "package": "priority-queue",
          "signature": "Int -\u003e q -\u003e m [a]",
          "type": "method"
        },
        "index": {
          "description": "peek specified number of items off the queue The default implementation is hideously wasteful in cases where peekQueue is not able to get the contents lazily",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "peekQueueTaking",
          "normalized": "Int-\u003ea-\u003eb[c]",
          "package": "priority-queue",
          "partial": "Queue Taking",
          "signature": "Int-\u003eq-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:peekQueueTaking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the number of elements in the queue\n\u003c/p\u003e",
          "module": "Data.PriorityQueue",
          "name": "queueSize",
          "package": "priority-queue",
          "signature": "q -\u003e m Int",
          "type": "method"
        },
        "index": {
          "description": "return the number of elements in the queue",
          "hierarchy": "Data PriorityQueue",
          "module": "Data.PriorityQueue",
          "name": "queueSize",
          "normalized": "a-\u003eb Int",
          "package": "priority-queue",
          "partial": "Size",
          "signature": "q-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/priority-queue/docs/Data-PriorityQueue.html#v:queueSize"
      }
    }
  ]
]