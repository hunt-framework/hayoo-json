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
        "word": "pure-priority-queue"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes the internals of a pure priority queue,\n implemented on top of \u003ca\u003eData.Map\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eEstimates of worst-case time complexity are given.  The value \u003cem\u003en\u003c/em\u003e\n is the number of elements in the queue.  The value \u003cem\u003ep\u003c/em\u003e is the\n cardinality of the set of priorities of the elements in the queue.\n \u003cem\u003ep\u003c/em\u003e is never greater than \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "Internal",
          "package": "pure-priority-queue",
          "source": "src/Data-PurePriorityQueue-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module exposes the internals of pure priority queue implemented on top of Data.Map Estimates of worst-case time complexity are given The value is the number of elements in the queue The value is the cardinality of the set of priorities of the elements in the queue is never greater than",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "Internal",
          "package": "pure-priority-queue",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA queue of values of type \u003ccode\u003ea\u003c/code\u003e with priority of type \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "MinMaxQueue",
          "package": "pure-priority-queue",
          "source": "src/Data-PurePriorityQueue-Internal.html#MinMaxQueue",
          "type": "newtype"
        },
        "index": {
          "description": "queue of values of type with priority of type",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "MinMaxQueue",
          "package": "pure-priority-queue",
          "partial": "Min Max Queue",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#t:MinMaxQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PurePriorityQueue.Internal",
          "name": "MinMaxQueue",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue",
          "source": "src/Data-PurePriorityQueue-Internal.html#MinMaxQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "MinMaxQueue",
          "package": "pure-priority-queue",
          "partial": "Min Max Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:MinMaxQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Remove the value with the maximum priority from the\n queue.\n\u003c/p\u003e\u003cp\u003eIf the queue is empty, \u003ccode\u003e\u003ca\u003edeleteMax\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.  Ties are\n broken arbitrarily.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "deleteMax",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue p a -\u003e MinMaxQueue p a",
          "source": "src/Data-PurePriorityQueue-Internal.html#deleteMax",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:deleteMax\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:deleteMax\"]"
        },
        "index": {
          "description": "log Remove the value with the maximum priority from the queue If the queue is empty deleteMax returns empty Ties are broken arbitrarily",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "deleteMax",
          "normalized": "MinMaxQueue a b-\u003eMinMaxQueue a b",
          "package": "pure-priority-queue",
          "partial": "Max",
          "signature": "MinMaxQueue p a-\u003eMinMaxQueue p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Remove the value with the minimum priority from the\n queue.\n\u003c/p\u003e\u003cp\u003eIf the queue is empty, \u003ccode\u003e\u003ca\u003edeleteMin\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.  Ties are\n broken arbitrarily.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "deleteMin",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue p a -\u003e MinMaxQueue p a",
          "source": "src/Data-PurePriorityQueue-Internal.html#deleteMin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:deleteMin\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:deleteMin\"]"
        },
        "index": {
          "description": "log Remove the value with the minimum priority from the queue If the queue is empty deleteMin returns empty Ties are broken arbitrarily",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "deleteMin",
          "normalized": "MinMaxQueue a b-\u003eMinMaxQueue a b",
          "package": "pure-priority-queue",
          "partial": "Min",
          "signature": "MinMaxQueue p a-\u003eMinMaxQueue p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e An empty priority queue.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "empty",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue p a",
          "source": "src/Data-PurePriorityQueue-Internal.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:empty\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:empty\"]"
        },
        "index": {
          "description": "An empty priority queue",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "empty",
          "package": "pure-priority-queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log p)\u003c/em\u003e Filter all values that satisfy the predicate.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "filter",
          "package": "pure-priority-queue",
          "signature": "(a -\u003e Bool) -\u003e MinMaxQueue p a -\u003e MinMaxQueue p a",
          "source": "src/Data-PurePriorityQueue-Internal.html#filter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:filter\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:filter\"]"
        },
        "index": {
          "description": "log Filter all values that satisfy the predicate",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eMinMaxQueue b a-\u003eMinMaxQueue b a",
          "package": "pure-priority-queue",
          "signature": "(a-\u003eBool)-\u003eMinMaxQueue p a-\u003eMinMaxQueue p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log p)\u003c/em\u003e Filter all entries that satisfy the predicate.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "filterWithPriority",
          "package": "pure-priority-queue",
          "signature": "(a -\u003e p -\u003e Bool) -\u003e MinMaxQueue p a -\u003e MinMaxQueue p a",
          "source": "src/Data-PurePriorityQueue-Internal.html#filterWithPriority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:filterWithPriority\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:filterWithPriority\"]"
        },
        "index": {
          "description": "log Filter all entries that satisfy the predicate",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "filterWithPriority",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eMinMaxQueue b a-\u003eMinMaxQueue b a",
          "package": "pure-priority-queue",
          "partial": "With Priority",
          "signature": "(a-\u003ep-\u003eBool)-\u003eMinMaxQueue p a-\u003eMinMaxQueue p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:filterWithPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold the priorities and values of a priority queue.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "foldWithPriority",
          "package": "pure-priority-queue",
          "signature": "(p -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e MinMaxQueue p a -\u003e b",
          "source": "src/Data-PurePriorityQueue-Internal.html#foldWithPriority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:foldWithPriority\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:foldWithPriority\"]"
        },
        "index": {
          "description": "Fold the priorities and values of priority queue",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "foldWithPriority",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eMinMaxQueue a b-\u003ec",
          "package": "pure-priority-queue",
          "partial": "With Priority",
          "signature": "(p-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eMinMaxQueue p a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:foldWithPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Insert a value with given priority into a priority queue.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "insert",
          "package": "pure-priority-queue",
          "signature": "a -\u003e p -\u003e MinMaxQueue p a -\u003e MinMaxQueue p a",
          "source": "src/Data-PurePriorityQueue-Internal.html#insert",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:insert\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:insert\"]"
        },
        "index": {
          "description": "log Insert value with given priority into priority queue",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eMinMaxQueue b a-\u003eMinMaxQueue b a",
          "package": "pure-priority-queue",
          "signature": "a-\u003ep-\u003eMinMaxQueue p a-\u003eMinMaxQueue p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Get the maximum priority of the elements in the queue.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "maxPriority",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue p a -\u003e Maybe p",
          "source": "src/Data-PurePriorityQueue-Internal.html#maxPriority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:maxPriority\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:maxPriority\"]"
        },
        "index": {
          "description": "log Get the maximum priority of the elements in the queue",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "maxPriority",
          "normalized": "MinMaxQueue a b-\u003eMaybe a",
          "package": "pure-priority-queue",
          "partial": "Priority",
          "signature": "MinMaxQueue p a-\u003eMaybe p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:maxPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e View a priority queue to get the (value, priority)\n pair with the highest priority and the remainder of the queue.\n\u003c/p\u003e\u003cp\u003eTies are broken arbitrarily.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "maxView",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue p a -\u003e Maybe ((a, p), MinMaxQueue p a)",
          "source": "src/Data-PurePriorityQueue-Internal.html#maxView",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:maxView\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:maxView\"]"
        },
        "index": {
          "description": "log View priority queue to get the value priority pair with the highest priority and the remainder of the queue Ties are broken arbitrarily",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "maxView",
          "normalized": "MinMaxQueue a b-\u003eMaybe((b,a),MinMaxQueue a b)",
          "package": "pure-priority-queue",
          "partial": "View",
          "signature": "MinMaxQueue p a-\u003eMaybe((a,p),MinMaxQueue p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Get the minimum priority of the elements in the queue.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "minPriority",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue p a -\u003e Maybe p",
          "source": "src/Data-PurePriorityQueue-Internal.html#minPriority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:minPriority\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:minPriority\"]"
        },
        "index": {
          "description": "log Get the minimum priority of the elements in the queue",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "minPriority",
          "normalized": "MinMaxQueue a b-\u003eMaybe a",
          "package": "pure-priority-queue",
          "partial": "Priority",
          "signature": "MinMaxQueue p a-\u003eMaybe p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:minPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e View a priority queue to get the (value, priority)\n pair with the lowest priority and the remainder of the queue.\n\u003c/p\u003e\u003cp\u003eTies are broken arbitrarily.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "minView",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue p a -\u003e Maybe ((a, p), MinMaxQueue p a)",
          "source": "src/Data-PurePriorityQueue-Internal.html#minView",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:minView\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:minView\"]"
        },
        "index": {
          "description": "log View priority queue to get the value priority pair with the lowest priority and the remainder of the queue Ties are broken arbitrarily",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "minView",
          "normalized": "MinMaxQueue a b-\u003eMaybe((b,a),MinMaxQueue a b)",
          "package": "pure-priority-queue",
          "partial": "View",
          "signature": "MinMaxQueue p a-\u003eMaybe((a,p),MinMaxQueue p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a priority queue is empty.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "null",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue p a -\u003e Bool",
          "source": "src/Data-PurePriorityQueue-Internal.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:null\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:null\"]"
        },
        "index": {
          "description": "Test whether priority queue is empty",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "null",
          "normalized": "MinMaxQueue a b-\u003eBool",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue p a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A priority queue with a single entry.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "singleton",
          "package": "pure-priority-queue",
          "signature": "a -\u003e p -\u003e MinMaxQueue p a",
          "source": "src/Data-PurePriorityQueue-Internal.html#singleton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:singleton\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:singleton\"]"
        },
        "index": {
          "description": "priority queue with single entry",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eMinMaxQueue b a",
          "package": "pure-priority-queue",
          "signature": "a-\u003ep-\u003eMinMaxQueue p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The number of entries in a priority queue.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "size",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue p a -\u003e Int",
          "source": "src/Data-PurePriorityQueue-Internal.html#size",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:size\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:size\"]"
        },
        "index": {
          "description": "The number of entries in priority queue",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "size",
          "normalized": "MinMaxQueue a b-\u003eInt",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue p a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Split a priority queue \u003ccode\u003eq\u003c/code\u003e into two queues \u003ccode\u003e(q1, q2)\u003c/code\u003e\n by the given priority \u003ccode\u003ep\u003c/code\u003e, such that \u003ccode\u003eq1\u003c/code\u003e contains exactly the\n entries with priority less than \u003ccode\u003ep\u003c/code\u003e, and \u003ccode\u003eq2\u003c/code\u003e containes exactly the\n entries with priority greater than or equal to \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "splitByPriority",
          "package": "pure-priority-queue",
          "signature": "p -\u003e MinMaxQueue p a -\u003e (MinMaxQueue p a, MinMaxQueue p a)",
          "source": "src/Data-PurePriorityQueue-Internal.html#splitByPriority",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:splitByPriority\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:splitByPriority\"]"
        },
        "index": {
          "description": "log Split priority queue into two queues q1 q2 by the given priority such that q1 contains exactly the entries with priority less than and q2 containes exactly the entries with priority greater than or equal to",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "splitByPriority",
          "normalized": "a-\u003eMinMaxQueue a b-\u003e(MinMaxQueue a b,MinMaxQueue a b)",
          "package": "pure-priority-queue",
          "partial": "By Priority",
          "signature": "p-\u003eMinMaxQueue p a-\u003e(MinMaxQueue p a,MinMaxQueue p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:splitByPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert the priority queue into a list of (value,\n priority) pairs in ascending priority.\n\u003c/p\u003e\u003cp\u003eTies are broken in an arbitrary manner.\n\u003c/p\u003e",
          "module": "[\"Data.PurePriorityQueue.Internal\",\"Data.PurePriorityQueue\"]",
          "name": "toAscList",
          "package": "pure-priority-queue",
          "signature": "MinMaxQueue p a -\u003e [(a, p)]",
          "source": "src/Data-PurePriorityQueue-Internal.html#toAscList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:toAscList\",\"http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:toAscList\"]"
        },
        "index": {
          "description": "Convert the priority queue into list of value priority pairs in ascending priority Ties are broken in an arbitrary manner",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "toAscList",
          "normalized": "MinMaxQueue a b-\u003e[(b,a)]",
          "package": "pure-priority-queue",
          "partial": "Asc List",
          "signature": "MinMaxQueue p a-\u003e[(a,p)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PurePriorityQueue.Internal",
          "name": "unMinMaxQueue",
          "package": "pure-priority-queue",
          "signature": "Map p [a]",
          "source": "src/Data-PurePriorityQueue-Internal.html#MinMaxQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "unMinMaxQueue",
          "normalized": "Map a[b]",
          "package": "pure-priority-queue",
          "partial": "Min Max Queue",
          "signature": "Map p[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:unMinMaxQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a \u003ccode\u003eData.Map.Map\u003c/code\u003e view function to a given priority queue.\n\u003c/p\u003e",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "viewWith",
          "package": "pure-priority-queue",
          "signature": "(Map p [a] -\u003e Maybe ((p, [a]), Map p [a]))-\u003e MinMaxQueue p a-\u003e Maybe ((a, p), MinMaxQueue p a)",
          "type": "function"
        },
        "index": {
          "description": "Applies Data.Map.Map view function to given priority queue",
          "hierarchy": "Data PurePriorityQueue Internal",
          "module": "Data.PurePriorityQueue.Internal",
          "name": "viewWith",
          "normalized": "(Map a[b]-\u003eMaybe((a,[b]),Map a[b]))-\u003eMinMaxQueue a b-\u003eMaybe((b,a),MinMaxQueue a b)",
          "package": "pure-priority-queue",
          "partial": "With",
          "signature": "(Map p[a]-\u003eMaybe((p,[a]),Map p[a]))-\u003eMinMaxQueue p a-\u003eMaybe((a,p),MinMaxQueue p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:viewWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure priority queue.\n\u003c/p\u003e\u003cp\u003eBecause many function names clash with \u003ca\u003ePrelude\u003c/a\u003e names, this module\n is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.,\n\u003c/p\u003e\u003cpre\u003e  import qualified Data.PurePriorityQueue as PQ\n\u003c/pre\u003e\u003cp\u003eThis implementation is built on top of \u003ca\u003eData.Map\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eEstimates of worst-case time complexity are given.  The value \u003cem\u003en\u003c/em\u003e\n is the number of elements in the queue.  The value \u003cem\u003ep\u003c/em\u003e is the\n cardinality of the set of priorities of the elements in the queue.\n \u003cem\u003ep\u003c/em\u003e is never greater than \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PurePriorityQueue",
          "name": "PurePriorityQueue",
          "package": "pure-priority-queue",
          "source": "src/Data-PurePriorityQueue.html",
          "type": "module"
        },
        "index": {
          "description": "pure priority queue Because many function names clash with Prelude names this module is usually imported qualified e.g import qualified Data.PurePriorityQueue as PQ This implementation is built on top of Data.Map Estimates of worst-case time complexity are given The value is the number of elements in the queue The value is the cardinality of the set of priorities of the elements in the queue is never greater than",
          "hierarchy": "Data PurePriorityQueue",
          "module": "Data.PurePriorityQueue",
          "name": "PurePriorityQueue",
          "package": "pure-priority-queue",
          "partial": "Pure Priority Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA queue of values of type \u003ccode\u003ea\u003c/code\u003e with priority of type \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PurePriorityQueue",
          "name": "MinMaxQueue",
          "package": "pure-priority-queue",
          "source": "src/Data-PurePriorityQueue-Internal.html#MinMaxQueue",
          "type": "data"
        },
        "index": {
          "description": "queue of values of type with priority of type",
          "hierarchy": "Data PurePriorityQueue",
          "module": "Data.PurePriorityQueue",
          "name": "MinMaxQueue",
          "package": "pure-priority-queue",
          "partial": "Min Max Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#t:MinMaxQueue"
      }
    }
  ]
]