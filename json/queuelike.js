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
        "word": "queuelike"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines a Chan-like structure and makes it an MQueue instance.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MQueue.Chan",
          "name": "Chan",
          "package": "queuelike",
          "source": "src/Data-MQueue-Chan.html",
          "type": "module"
        },
        "index": {
          "description": "Defines Chan-like structure and makes it an MQueue instance",
          "hierarchy": "Data MQueue Chan",
          "module": "Data.MQueue.Chan",
          "name": "Chan",
          "package": "queuelike",
          "partial": "Chan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Chan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.Chan",
          "name": "blockingPop",
          "package": "queuelike",
          "signature": "Chan a -\u003e IO a",
          "source": "src/Data-MQueue-Chan.html#blockingPop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MQueue Chan",
          "module": "Data.MQueue.Chan",
          "name": "blockingPop",
          "normalized": "Chan a-\u003eIO a",
          "package": "queuelike",
          "partial": "Pop",
          "signature": "Chan a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Chan.html#v:blockingPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.Class",
          "name": "Class",
          "package": "queuelike",
          "source": "src/Data-MQueue-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data MQueue Class",
          "module": "Data.MQueue.Class",
          "name": "Class",
          "package": "queuelike",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.Class",
          "name": "MQueue",
          "package": "queuelike",
          "source": "src/Data-MQueue-Class.html#MQueue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data MQueue Class",
          "module": "Data.MQueue.Class",
          "name": "MQueue",
          "package": "queuelike",
          "partial": "MQueue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Class.html#t:MQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.Class",
          "name": "isEmpty",
          "package": "queuelike",
          "signature": "q -\u003e m Bool",
          "source": "src/Data-MQueue-Class.html#isEmpty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MQueue Class",
          "module": "Data.MQueue.Class",
          "name": "isEmpty",
          "normalized": "a-\u003eb Bool",
          "package": "queuelike",
          "partial": "Empty",
          "signature": "q-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Class.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.Class",
          "name": "newQueue",
          "package": "queuelike",
          "signature": "m q",
          "source": "src/Data-MQueue-Class.html#newQueue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MQueue Class",
          "module": "Data.MQueue.Class",
          "name": "newQueue",
          "package": "queuelike",
          "partial": "Queue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Class.html#v:newQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.Class",
          "name": "peek",
          "package": "queuelike",
          "signature": "q -\u003e m (Maybe (MQueueKey q))",
          "source": "src/Data-MQueue-Class.html#peek",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MQueue Class",
          "module": "Data.MQueue.Class",
          "name": "peek",
          "normalized": "a-\u003eb(Maybe(MQueueKey a))",
          "package": "queuelike",
          "signature": "q-\u003em(Maybe(MQueueKey q))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Class.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.Class",
          "name": "pop",
          "package": "queuelike",
          "signature": "q -\u003e m (Maybe (MQueueKey q))",
          "source": "src/Data-MQueue-Class.html#pop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MQueue Class",
          "module": "Data.MQueue.Class",
          "name": "pop",
          "normalized": "a-\u003eb(Maybe(MQueueKey a))",
          "package": "queuelike",
          "signature": "q-\u003em(Maybe(MQueueKey q))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Class.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.Class",
          "name": "pop_",
          "package": "queuelike",
          "signature": "q -\u003e m ()",
          "source": "src/Data-MQueue-Class.html#pop_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MQueue Class",
          "module": "Data.MQueue.Class",
          "name": "pop_",
          "normalized": "a-\u003eb()",
          "package": "queuelike",
          "signature": "q-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Class.html#v:pop_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.Class",
          "name": "push",
          "package": "queuelike",
          "signature": "q -\u003e MQueueKey q -\u003e m ()",
          "source": "src/Data-MQueue-Class.html#push",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MQueue Class",
          "module": "Data.MQueue.Class",
          "name": "push",
          "normalized": "a-\u003eMQueueKey a-\u003eb()",
          "package": "queuelike",
          "signature": "q-\u003eMQueueKey q-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Class.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.Class",
          "name": "pushAll",
          "package": "queuelike",
          "signature": "q -\u003e [MQueueKey q] -\u003e m ()",
          "source": "src/Data-MQueue-Class.html#pushAll",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MQueue Class",
          "module": "Data.MQueue.Class",
          "name": "pushAll",
          "normalized": "a-\u003e[MQueueKey a]-\u003eb()",
          "package": "queuelike",
          "partial": "All",
          "signature": "q-\u003e[MQueueKey q]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Class.html#v:pushAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArray-based implementation of an entirely traditional binary heap.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MQueue.Heap",
          "name": "Heap",
          "package": "queuelike",
          "source": "src/Data-MQueue-Heap.html",
          "type": "module"
        },
        "index": {
          "description": "Array-based implementation of an entirely traditional binary heap",
          "hierarchy": "Data MQueue Heap",
          "module": "Data.MQueue.Heap",
          "name": "Heap",
          "package": "queuelike",
          "partial": "Heap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Heap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.Heap",
          "name": "Heap",
          "package": "queuelike",
          "source": "src/Data-MQueue-Heap.html#Heap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MQueue Heap",
          "module": "Data.MQueue.Heap",
          "name": "Heap",
          "package": "queuelike",
          "partial": "Heap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Heap.html#t:Heap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.Heap",
          "name": "getSize",
          "package": "queuelike",
          "signature": "Heap s e -\u003e m Int",
          "source": "src/Data-MQueue-Heap.html#getSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MQueue Heap",
          "module": "Data.MQueue.Heap",
          "name": "getSize",
          "normalized": "Heap a b-\u003ec Int",
          "package": "queuelike",
          "partial": "Size",
          "signature": "Heap s e-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-Heap.html#v:getSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn the IO monad, provides thread-safe \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e-based wrappers for \u003ccode\u003eQueuelike\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMQueue\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MQueue.SyncQueue",
          "name": "SyncQueue",
          "package": "queuelike",
          "source": "src/Data-MQueue-SyncQueue.html",
          "type": "module"
        },
        "index": {
          "description": "In the IO monad provides thread-safe MVar based wrappers for Queuelike and MQueue instances",
          "hierarchy": "Data MQueue SyncQueue",
          "module": "Data.MQueue.SyncQueue",
          "name": "SyncQueue",
          "package": "queuelike",
          "partial": "Sync Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-SyncQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.SyncQueue",
          "name": "SyncMQ",
          "package": "queuelike",
          "source": "src/Data-MQueue-SyncQueue.html#SyncMQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MQueue SyncQueue",
          "module": "Data.MQueue.SyncQueue",
          "name": "SyncMQ",
          "package": "queuelike",
          "partial": "Sync MQ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-SyncQueue.html#t:SyncMQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue.SyncQueue",
          "name": "SyncQ",
          "package": "queuelike",
          "source": "src/Data-MQueue-SyncQueue.html#SyncQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MQueue SyncQueue",
          "module": "Data.MQueue.SyncQueue",
          "name": "SyncQ",
          "package": "queuelike",
          "partial": "Sync",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue-SyncQueue.html#t:SyncQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MQueue",
          "name": "MQueue",
          "package": "queuelike",
          "source": "src/Data-MQueue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data MQueue",
          "module": "Data.MQueue",
          "name": "MQueue",
          "package": "queuelike",
          "partial": "MQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-MQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstracts the implementation details of a single-insertion, single-extraction queuelike structure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Queue.Class",
          "name": "Class",
          "package": "queuelike",
          "source": "src/Data-Queue-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Abstracts the implementation details of single-insertion single-extraction queuelike structure",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "Class",
          "package": "queuelike",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType that only orders on the key, ignoring the value completely; frequently useful in priority queues, so made available here.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": ":-\u003e",
          "package": "queuelike",
          "source": "src/Data-Queue-Class.html#%3A-%3E",
          "type": "data"
        },
        "index": {
          "description": "Type that only orders on the key ignoring the value completely frequently useful in priority queues so made available here",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": ":-\u003e",
          "package": "queuelike",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic type class encapsulating a generic queuelike structure, that supports single-insertion and single-extraction; this abstraction includes priority queues, stacks, and FIFO queues.  There are many minimal implementations, so each method lists the prerequisites for its default implementation.  Most implementations will implement \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e) or \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, (\u003ccode\u003epeek\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e) or \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e.  (The absolute minimal implementation is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "IQueue",
          "package": "queuelike",
          "source": "src/Data-Queue-Class.html#IQueue",
          "type": "class"
        },
        "index": {
          "description": "generic type class encapsulating generic queuelike structure that supports single-insertion and single-extraction this abstraction includes priority queues stacks and FIFO queues There are many minimal implementations so each method lists the prerequisites for its default implementation Most implementations will implement empty singleton and merge or insert peek and delete or extract and size The absolute minimal implementation is empty insert extract and size",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "IQueue",
          "package": "queuelike",
          "partial": "IQueue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#t:IQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Class",
          "name": ":-\u003e",
          "package": "queuelike",
          "signature": "e :-\u003e f",
          "source": "src/Data-Queue-Class.html#%3A-%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": ":-\u003e",
          "normalized": "a-\u003eb",
          "package": "queuelike",
          "signature": "e-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes an element from the queue, if the queue is nonempty.  The default implementation uses \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "delete",
          "package": "queuelike",
          "signature": "q -\u003e Maybe q",
          "source": "src/Data-Queue-Class.html#delete",
          "type": "method"
        },
        "index": {
          "description": "Deletes an element from the queue if the queue is nonempty The default implementation uses extract",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "delete",
          "normalized": "a-\u003eMaybe a",
          "package": "queuelike",
          "signature": "q-\u003eMaybe q",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an empty queue.  The default implementation uses \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "empty",
          "package": "queuelike",
          "signature": "q",
          "source": "src/Data-Queue-Class.html#empty",
          "type": "method"
        },
        "index": {
          "description": "Constructs an empty queue The default implementation uses fromList",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "empty",
          "package": "queuelike",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to extract an element from the queue; if the queue is empty, returns Nothing.  The default implementation uses \u003ccode\u003epeek\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "extract",
          "package": "queuelike",
          "signature": "q -\u003e Maybe (QueueKey q, q)",
          "source": "src/Data-Queue-Class.html#extract",
          "type": "method"
        },
        "index": {
          "description": "Attempts to extract an element from the queue if the queue is empty returns Nothing The default implementation uses peek and delete",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "extract",
          "normalized": "a-\u003eMaybe(QueueKey a,a)",
          "package": "queuelike",
          "signature": "q-\u003eMaybe(QueueKey q,q)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a queue with all of the elements in the list.  The default implementation uses \u003ccode\u003e\u003ca\u003einsertAll\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "fromList",
          "package": "queuelike",
          "signature": "[QueueKey q] -\u003e q",
          "source": "src/Data-Queue-Class.html#fromList",
          "type": "method"
        },
        "index": {
          "description": "Constructs queue with all of the elements in the list The default implementation uses insertAll and empty",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "fromList",
          "normalized": "[QueueKey a]-\u003ea",
          "package": "queuelike",
          "partial": "List",
          "signature": "[QueueKey q]-\u003eq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a single element into the queue.  The default implementation uses \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "insert",
          "package": "queuelike",
          "signature": "QueueKey q -\u003e q -\u003e q",
          "source": "src/Data-Queue-Class.html#insert",
          "type": "method"
        },
        "index": {
          "description": "Inserts single element into the queue The default implementation uses merge and singleton",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "insert",
          "normalized": "QueueKey a-\u003ea-\u003ea",
          "package": "queuelike",
          "signature": "QueueKey q-\u003eq-\u003eq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts several elements into the queue.  The default implementation uses \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.  (In some cases, it may be advantageous to override this implementation with \u003ccode\u003exs `\u003ccode\u003e\u003ca\u003einsertAll\u003c/a\u003e\u003c/code\u003e` q = q `\u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "insertAll",
          "package": "queuelike",
          "signature": "[QueueKey q] -\u003e q -\u003e q",
          "source": "src/Data-Queue-Class.html#insertAll",
          "type": "method"
        },
        "index": {
          "description": "Inserts several elements into the queue The default implementation uses insert In some cases it may be advantageous to override this implementation with xs insertAll merge fromList xs",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "insertAll",
          "normalized": "[QueueKey a]-\u003ea-\u003ea",
          "package": "queuelike",
          "partial": "All",
          "signature": "[QueueKey q]-\u003eq-\u003eq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:insertAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two queues so that the contents of the second queue are inserted into the first queue in extraction order.  The default implementation uses \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einsertAll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "merge",
          "package": "queuelike",
          "signature": "q -\u003e q -\u003e q",
          "source": "src/Data-Queue-Class.html#merge",
          "type": "method"
        },
        "index": {
          "description": "Merges two queues so that the contents of the second queue are inserted into the first queue in extraction order The default implementation uses toList and insertAll",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "merge",
          "normalized": "a-\u003ea-\u003ea",
          "package": "queuelike",
          "signature": "q-\u003eq-\u003eq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Class",
          "name": "mergeAll",
          "package": "queuelike",
          "signature": "[q] -\u003e q",
          "source": "src/Data-Queue-Class.html#mergeAll",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "mergeAll",
          "normalized": "[a]-\u003ea",
          "package": "queuelike",
          "partial": "All",
          "signature": "[q]-\u003eq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:mergeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the queue is empty.  The default implementation uses \u003ccode\u003epeek\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "null",
          "package": "queuelike",
          "signature": "q -\u003e Bool",
          "source": "src/Data-Queue-Class.html#null",
          "type": "method"
        },
        "index": {
          "description": "Checks if the queue is empty The default implementation uses peek",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "null",
          "normalized": "a-\u003eBool",
          "package": "queuelike",
          "signature": "q-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a queue with a single element.  The default implementation uses \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "singleton",
          "package": "queuelike",
          "signature": "QueueKey q -\u003e q",
          "source": "src/Data-Queue-Class.html#singleton",
          "type": "method"
        },
        "index": {
          "description": "Constructs queue with single element The default implementation uses insert and empty",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "singleton",
          "normalized": "QueueKey a-\u003ea",
          "package": "queuelike",
          "signature": "QueueKey q-\u003eq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the size of the queue.  The default implementation uses \u003ccode\u003e\u003ca\u003etoList_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "size",
          "package": "queuelike",
          "signature": "q -\u003e Int",
          "source": "src/Data-Queue-Class.html#size",
          "type": "method"
        },
        "index": {
          "description": "Gets the size of the queue The default implementation uses toList",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "size",
          "normalized": "a-\u003eInt",
          "package": "queuelike",
          "signature": "q-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts every element from the queue.  The default implementation uses \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "toList",
          "package": "queuelike",
          "signature": "q -\u003e [QueueKey q]",
          "source": "src/Data-Queue-Class.html#toList",
          "type": "method"
        },
        "index": {
          "description": "Extracts every element from the queue The default implementation uses extract",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "toList",
          "normalized": "a-\u003e[QueueKey a]",
          "package": "queuelike",
          "partial": "List",
          "signature": "q-\u003e[QueueKey q]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts every element from the queue, with no guarantees upon order.  The default implementation uses \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "toList_",
          "package": "queuelike",
          "signature": "q -\u003e [QueueKey q]",
          "source": "src/Data-Queue-Class.html#toList_",
          "type": "method"
        },
        "index": {
          "description": "Extracts every element from the queue with no guarantees upon order The default implementation uses toList",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "toList_",
          "normalized": "a-\u003e[QueueKey a]",
          "package": "queuelike",
          "partial": "List",
          "signature": "q-\u003e[QueueKey q]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:toList_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the element that will next be extracted from the queue, if there is an element available.  The default implementation uses \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Queue.Class",
          "name": "top",
          "package": "queuelike",
          "signature": "q -\u003e Maybe (QueueKey q)",
          "source": "src/Data-Queue-Class.html#top",
          "type": "method"
        },
        "index": {
          "description": "Gets the element that will next be extracted from the queue if there is an element available The default implementation uses extract",
          "hierarchy": "Data Queue Class",
          "module": "Data.Queue.Class",
          "name": "top",
          "normalized": "a-\u003eMaybe(QueueKey a)",
          "package": "queuelike",
          "signature": "q-\u003eMaybe(QueueKey q)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Class.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Instances",
          "name": "Instances",
          "package": "queuelike",
          "source": "src/Data-Queue-Instances.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Queue Instances",
          "module": "Data.Queue.Instances",
          "name": "Instances",
          "package": "queuelike",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of a priority queue.\n\u003c/p\u003e\u003cp\u003eThe implementation of \u003ccode\u003e\u003ca\u003ePQueue\u003c/a\u003e\u003c/code\u003e is based on a \u003cem\u003epairing heap\u003c/em\u003e, a simple and efficient implementation of a general-purpose priority queue.  \u003ccode\u003e\u003ca\u003ePQueue\u003c/a\u003e\u003c/code\u003e supports \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003epeek\u003c/code\u003e in constant time, and \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e in logarithmic time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Queue.PQueue",
          "name": "PQueue",
          "package": "queuelike",
          "source": "src/Data-Queue-PQueue.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of priority queue The implementation of PQueue is based on pairing heap simple and efficient implementation of general-purpose priority queue PQueue supports insert merge and peek in constant time and extract and delete in logarithmic time",
          "hierarchy": "Data Queue PQueue",
          "module": "Data.Queue.PQueue",
          "name": "PQueue",
          "package": "queuelike",
          "partial": "PQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-PQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.PQueue",
          "name": "PQueue",
          "package": "queuelike",
          "source": "src/Data-Queue-PQueue.html#PQueue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Queue PQueue",
          "module": "Data.Queue.PQueue",
          "name": "PQueue",
          "package": "queuelike",
          "partial": "PQueue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-PQueue.html#t:PQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.PQueue",
          "name": "drawQueue",
          "package": "queuelike",
          "signature": "PQueue e -\u003e String",
          "source": "src/Data-Queue-PQueue.html#drawQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Queue PQueue",
          "module": "Data.Queue.PQueue",
          "name": "drawQueue",
          "normalized": "PQueue a-\u003eString",
          "package": "queuelike",
          "partial": "Queue",
          "signature": "PQueue e-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-PQueue.html#v:drawQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA basic first-in, first-out queue implementation implementing the \u003ccode\u003eQueuelike\u003c/code\u003e abstraction.  Bootstrapped from \u003ca\u003eData.Sequence\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Queue.Queue",
          "name": "Queue",
          "package": "queuelike",
          "source": "src/Data-Queue-Queue.html",
          "type": "module"
        },
        "index": {
          "description": "basic first-in first-out queue implementation implementing the Queuelike abstraction Bootstrapped from Data.Sequence",
          "hierarchy": "Data Queue Queue",
          "module": "Data.Queue.Queue",
          "name": "Queue",
          "package": "queuelike",
          "partial": "Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Queue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Queue",
          "name": "Queue",
          "package": "queuelike",
          "source": "src/Data-Queue-Queue.html#Queue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Queue Queue",
          "module": "Data.Queue.Queue",
          "name": "Queue",
          "package": "queuelike",
          "partial": "Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Queue.html#t:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Queue",
          "name": "cons",
          "package": "queuelike",
          "signature": "e -\u003e Queue e -\u003e Queue e",
          "source": "src/Data-Queue-Queue.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Queue Queue",
          "module": "Data.Queue.Queue",
          "name": "cons",
          "normalized": "a-\u003eQueue a-\u003eQueue a",
          "package": "queuelike",
          "signature": "e-\u003eQueue e-\u003eQueue e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Queue.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA basic implementation of a stack implementing the \u003ccode\u003eQueue\u003c/code\u003e abstraction.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Queue.Stack",
          "name": "Stack",
          "package": "queuelike",
          "source": "src/Data-Queue-Stack.html",
          "type": "module"
        },
        "index": {
          "description": "basic implementation of stack implementing the Queue abstraction",
          "hierarchy": "Data Queue Stack",
          "module": "Data.Queue.Stack",
          "name": "Stack",
          "package": "queuelike",
          "partial": "Stack",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Stack.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.Stack",
          "name": "Stack",
          "package": "queuelike",
          "source": "src/Data-Queue-Stack.html#Stack",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Queue Stack",
          "module": "Data.Queue.Stack",
          "name": "Stack",
          "package": "queuelike",
          "partial": "Stack",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-Stack.html#t:Stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eTrieQueue e\u003c/code\u003e is a priority queue \u003ccode\u003eIQueue\u003c/code\u003e instance satisfying \u003ccode\u003eQueueKey (TrieQueue e) ~ [e]\u003c/code\u003e, with the property that this queue frequently performs better than any other queue\n implementation in this package for keys of type \u003ccode\u003e[e]\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003eThis particular implementation is highly experimental and possibly a genuinely new data structure.  See the source code for details.\n However, for many cases this priority queue may be used for a heap sort that runs faster than the \u003ca\u003eData.List\u003c/a\u003e implementation,\n or the vanilla \u003ca\u003eData.Queue.PQueue\u003c/a\u003e implementation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Queue.TrieQueue",
          "name": "TrieQueue",
          "package": "queuelike",
          "source": "src/Data-Queue-TrieQueue.html",
          "type": "module"
        },
        "index": {
          "description": "TrieQueue is priority queue IQueue instance satisfying QueueKey TrieQueue with the property that this queue frequently performs better than any other queue implementation in this package for keys of type This particular implementation is highly experimental and possibly genuinely new data structure See the source code for details However for many cases this priority queue may be used for heap sort that runs faster than the Data.List implementation or the vanilla Data.Queue.PQueue implementation",
          "hierarchy": "Data Queue TrieQueue",
          "module": "Data.Queue.TrieQueue",
          "name": "TrieQueue",
          "package": "queuelike",
          "partial": "Trie Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-TrieQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue.TrieQueue",
          "name": "TrieQueue",
          "package": "queuelike",
          "source": "src/Data-Queue-TrieQueue.html#TrieQueue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Queue TrieQueue",
          "module": "Data.Queue.TrieQueue",
          "name": "TrieQueue",
          "package": "queuelike",
          "partial": "Trie Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue-TrieQueue.html#t:TrieQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Queue",
          "name": "Queue",
          "package": "queuelike",
          "source": "src/Data-Queue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Queue",
          "module": "Data.Queue",
          "name": "Queue",
          "package": "queuelike",
          "partial": "Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/queuelike/docs/Data-Queue.html#"
      }
    }
  ]
]