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
        "word": "lockfree-queue"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Queue.MichaelScott.DequeInstance",
          "name": "DequeInstance",
          "package": "lockfree-queue",
          "source": "src/Data-Concurrent-Queue-MichaelScott-DequeInstance.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Concurrent Queue MichaelScott DequeInstance",
          "module": "Data.Concurrent.Queue.MichaelScott.DequeInstance",
          "name": "DequeInstance",
          "package": "lockfree-queue",
          "partial": "Deque Instance",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott-DequeInstance.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMichael and Scott lock-free, single-ended queues.\n\u003c/p\u003e\u003cp\u003eThis is a straightforward implementation of classic Michael & Scott Queues.\n Pseudocode for this algorithm can be found here:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.cs.rochester.edu/research/synchronization/pseudocode/queues.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Concurrent.Queue.MichaelScott",
          "name": "MichaelScott",
          "package": "lockfree-queue",
          "source": "src/Data-Concurrent-Queue-MichaelScott.html",
          "type": "module"
        },
        "index": {
          "description": "Michael and Scott lock-free single-ended queues This is straightforward implementation of classic Michael Scott Queues Pseudocode for this algorithm can be found here http www.cs.rochester.edu research synchronization pseudocode queues.html",
          "hierarchy": "Data Concurrent Queue MichaelScott",
          "module": "Data.Concurrent.Queue.MichaelScott",
          "name": "MichaelScott",
          "package": "lockfree-queue",
          "partial": "Michael Scott",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Concurrent.Queue.MichaelScott",
          "name": "LinkedQueue",
          "package": "lockfree-queue",
          "source": "src/Data-Concurrent-Queue-MichaelScott.html#LinkedQueue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Concurrent Queue MichaelScott",
          "module": "Data.Concurrent.Queue.MichaelScott",
          "name": "LinkedQueue",
          "package": "lockfree-queue",
          "partial": "Linked Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott.html#t:LinkedQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new queue.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Queue.MichaelScott",
          "name": "newQ",
          "package": "lockfree-queue",
          "signature": "IO (LinkedQueue a)",
          "source": "src/Data-Concurrent-Queue-MichaelScott.html#newQ",
          "type": "function"
        },
        "index": {
          "description": "Create new queue",
          "hierarchy": "Data Concurrent Queue MichaelScott",
          "module": "Data.Concurrent.Queue.MichaelScott",
          "name": "newQ",
          "package": "lockfree-queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott.html#v:newQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the queue currently empty?  Beware that this can be a highly transient state.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Queue.MichaelScott",
          "name": "nullQ",
          "package": "lockfree-queue",
          "signature": "LinkedQueue a -\u003e IO Bool",
          "source": "src/Data-Concurrent-Queue-MichaelScott.html#nullQ",
          "type": "function"
        },
        "index": {
          "description": "Is the queue currently empty Beware that this can be highly transient state",
          "hierarchy": "Data Concurrent Queue MichaelScott",
          "module": "Data.Concurrent.Queue.MichaelScott",
          "name": "nullQ",
          "normalized": "LinkedQueue a-\u003eIO Bool",
          "package": "lockfree-queue",
          "signature": "LinkedQueue a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott.html#v:nullQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush a new element onto the queue.  Because the queue can grow,\n   this always succeeds.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Queue.MichaelScott",
          "name": "pushL",
          "package": "lockfree-queue",
          "signature": "forall a.  LinkedQueue a -\u003e a -\u003e IO ()",
          "source": "src/Data-Concurrent-Queue-MichaelScott.html#pushL",
          "type": "function"
        },
        "index": {
          "description": "Push new element onto the queue Because the queue can grow this always succeeds",
          "hierarchy": "Data Concurrent Queue MichaelScott",
          "module": "Data.Concurrent.Queue.MichaelScott",
          "name": "pushL",
          "normalized": "a b LinkedQueue c-\u003ec-\u003eIO()",
          "package": "lockfree-queue",
          "signature": "forall a. LinkedQueue a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott.html#v:pushL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to pop an element from the queue if one is available.\n   tryPop will return semi-promptly (depending on contention), but\n   will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the queue is empty.\n\u003c/p\u003e",
          "module": "Data.Concurrent.Queue.MichaelScott",
          "name": "tryPopR",
          "package": "lockfree-queue",
          "signature": "forall a.  LinkedQueue a -\u003e IO (Maybe a)",
          "source": "src/Data-Concurrent-Queue-MichaelScott.html#tryPopR",
          "type": "function"
        },
        "index": {
          "description": "Attempt to pop an element from the queue if one is available tryPop will return semi-promptly depending on contention but will return Nothing if the queue is empty",
          "hierarchy": "Data Concurrent Queue MichaelScott",
          "module": "Data.Concurrent.Queue.MichaelScott",
          "name": "tryPopR",
          "normalized": "a b LinkedQueue c-\u003eIO(Maybe c)",
          "package": "lockfree-queue",
          "partial": "Pop",
          "signature": "forall a. LinkedQueue a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott.html#v:tryPopR"
      }
    }
  ]
]