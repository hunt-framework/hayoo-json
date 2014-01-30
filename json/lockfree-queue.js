[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott-DequeInstance.html#",
      "description": {
        "fct-module": "Data.Concurrent.Queue.MichaelScott.DequeInstance",
        "fct-package": "lockfree-queue",
        "fct-signature": "module",
        "fct-source": "src/Data-Concurrent-Queue-MichaelScott-DequeInstance.html",
        "fct-type": "module",
        "title": "DequeInstance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Concurrent Queue MichaelScott DequeInstance",
        "module": "Data.Concurrent.Queue.MichaelScott.DequeInstance",
        "name": "DequeInstance",
        "normalized": "",
        "package": "lockfree-queue",
        "partial": "Deque Instance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMichael and Scott lock-free, single-ended queues.\n\u003c/p\u003e\u003cp\u003eThis is a straightforward implementation of classic Michael & Scott Queues.\n Pseudocode for this algorithm can be found here:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.cs.rochester.edu/research/synchronization/pseudocode/queues.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Concurrent.Queue.MichaelScott",
        "fct-package": "lockfree-queue",
        "fct-signature": "module",
        "fct-source": "src/Data-Concurrent-Queue-MichaelScott.html",
        "fct-type": "module",
        "title": "MichaelScott"
      },
      "index": {
        "description": "Michael and Scott lock-free single-ended queues This is straightforward implementation of classic Michael Scott Queues Pseudocode for this algorithm can be found here http www.cs.rochester.edu research synchronization pseudocode queues.html",
        "hierarchy": "Data Concurrent Queue MichaelScott",
        "module": "Data.Concurrent.Queue.MichaelScott",
        "name": "MichaelScott",
        "normalized": "",
        "package": "lockfree-queue",
        "partial": "Michael Scott",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott.html#t:LinkedQueue",
      "description": {
        "fct-module": "Data.Concurrent.Queue.MichaelScott",
        "fct-package": "lockfree-queue",
        "fct-signature": "data",
        "fct-source": "src/Data-Concurrent-Queue-MichaelScott.html#LinkedQueue",
        "fct-type": "data",
        "title": "LinkedQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Concurrent Queue MichaelScott",
        "module": "Data.Concurrent.Queue.MichaelScott",
        "name": "LinkedQueue",
        "normalized": "",
        "package": "lockfree-queue",
        "partial": "Linked Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott.html#v:newQ",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new queue.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.Queue.MichaelScott",
        "fct-package": "lockfree-queue",
        "fct-signature": "IO (LinkedQueue a)",
        "fct-source": "src/Data-Concurrent-Queue-MichaelScott.html#newQ",
        "fct-type": "function",
        "title": "newQ"
      },
      "index": {
        "description": "Create new queue",
        "hierarchy": "Data Concurrent Queue MichaelScott",
        "module": "Data.Concurrent.Queue.MichaelScott",
        "name": "newQ",
        "normalized": "",
        "package": "lockfree-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott.html#v:nullQ",
      "description": {
        "fct-descr": "\u003cp\u003eIs the queue currently empty?  Beware that this can be a highly transient state.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.Queue.MichaelScott",
        "fct-package": "lockfree-queue",
        "fct-signature": "LinkedQueue a -\u003e IO Bool",
        "fct-source": "src/Data-Concurrent-Queue-MichaelScott.html#nullQ",
        "fct-type": "function",
        "title": "nullQ"
      },
      "index": {
        "description": "Is the queue currently empty Beware that this can be highly transient state",
        "hierarchy": "Data Concurrent Queue MichaelScott",
        "module": "Data.Concurrent.Queue.MichaelScott",
        "name": "nullQ",
        "normalized": "LinkedQueue a-\u003eIO Bool",
        "package": "lockfree-queue",
        "partial": "",
        "signature": "LinkedQueue a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott.html#v:pushL",
      "description": {
        "fct-descr": "\u003cp\u003ePush a new element onto the queue.  Because the queue can grow,\n   this always succeeds.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.Queue.MichaelScott",
        "fct-package": "lockfree-queue",
        "fct-signature": "forall a.  LinkedQueue a -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-Concurrent-Queue-MichaelScott.html#pushL",
        "fct-type": "function",
        "title": "pushL"
      },
      "index": {
        "description": "Push new element onto the queue Because the queue can grow this always succeeds",
        "hierarchy": "Data Concurrent Queue MichaelScott",
        "module": "Data.Concurrent.Queue.MichaelScott",
        "name": "pushL",
        "normalized": "a b LinkedQueue c-\u003ec-\u003eIO()",
        "package": "lockfree-queue",
        "partial": "",
        "signature": "forall a. LinkedQueue a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lockfree-queue/docs/Data-Concurrent-Queue-MichaelScott.html#v:tryPopR",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to pop an element from the queue if one is available.\n   tryPop will return semi-promptly (depending on contention), but\n   will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Concurrent.Queue.MichaelScott",
        "fct-package": "lockfree-queue",
        "fct-signature": "forall a.  LinkedQueue a -\u003e IO (Maybe a)",
        "fct-source": "src/Data-Concurrent-Queue-MichaelScott.html#tryPopR",
        "fct-type": "function",
        "title": "tryPopR"
      },
      "index": {
        "description": "Attempt to pop an element from the queue if one is available tryPop will return semi-promptly depending on contention but will return Nothing if the queue is empty",
        "hierarchy": "Data Concurrent Queue MichaelScott",
        "module": "Data.Concurrent.Queue.MichaelScott",
        "name": "tryPopR",
        "normalized": "a b LinkedQueue c-\u003eIO(Maybe c)",
        "package": "lockfree-queue",
        "partial": "Pop",
        "signature": "forall a. LinkedQueue a-\u003eIO(Maybe a)"
      }
    }
  }
]