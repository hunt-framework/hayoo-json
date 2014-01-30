[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes the internals of a pure priority queue,\n implemented on top of \u003ca\u003eData.Map\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eEstimates of worst-case time complexity are given.  The value \u003cem\u003en\u003c/em\u003e\n is the number of elements in the queue.  The value \u003cem\u003ep\u003c/em\u003e is the\n cardinality of the set of priorities of the elements in the queue.\n \u003cem\u003ep\u003c/em\u003e is never greater than \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "module",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module exposes the internals of pure priority queue implemented on top of Data.Map Estimates of worst-case time complexity are given The value is the number of elements in the queue The value is the cardinality of the set of priorities of the elements in the queue is never greater than",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "pure-priority-queue",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#t:MinMaxQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA queue of values of type \u003ccode\u003ea\u003c/code\u003e with priority of type \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "newtype",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#MinMaxQueue",
        "fct-type": "newtype",
        "title": "MinMaxQueue"
      },
      "index": {
        "description": "queue of values of type with priority of type",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "MinMaxQueue",
        "normalized": "",
        "package": "pure-priority-queue",
        "partial": "Min Max Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:MinMaxQueue",
      "description": {
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#MinMaxQueue",
        "fct-type": "function",
        "title": "MinMaxQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "MinMaxQueue",
        "normalized": "",
        "package": "pure-priority-queue",
        "partial": "Min Max Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:deleteMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Remove the value with the maximum priority from the\n queue.\n\u003c/p\u003e\u003cp\u003eIf the queue is empty, \u003ccode\u003e\u003ca\u003edeleteMax\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.  Ties are\n broken arbitrarily.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "log Remove the value with the maximum priority from the queue If the queue is empty deleteMax returns empty Ties are broken arbitrarily",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "deleteMax",
        "normalized": "MinMaxQueue a b-\u003eMinMaxQueue a b",
        "package": "pure-priority-queue",
        "partial": "Max",
        "signature": "MinMaxQueue p a-\u003eMinMaxQueue p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Remove the value with the minimum priority from the\n queue.\n\u003c/p\u003e\u003cp\u003eIf the queue is empty, \u003ccode\u003e\u003ca\u003edeleteMin\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.  Ties are\n broken arbitrarily.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "log Remove the value with the minimum priority from the queue If the queue is empty deleteMin returns empty Ties are broken arbitrarily",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "deleteMin",
        "normalized": "MinMaxQueue a b-\u003eMinMaxQueue a b",
        "package": "pure-priority-queue",
        "partial": "Min",
        "signature": "MinMaxQueue p a-\u003eMinMaxQueue p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e An empty priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty priority queue",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "empty",
        "normalized": "",
        "package": "pure-priority-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log p)\u003c/em\u003e Filter all values that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinMaxQueue p a -\u003e MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "log Filter all values that satisfy the predicate",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eMinMaxQueue b a-\u003eMinMaxQueue b a",
        "package": "pure-priority-queue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMinMaxQueue p a-\u003eMinMaxQueue p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:filterWithPriority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log p)\u003c/em\u003e Filter all entries that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "(a -\u003e p -\u003e Bool) -\u003e MinMaxQueue p a -\u003e MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#filterWithPriority",
        "fct-type": "function",
        "title": "filterWithPriority"
      },
      "index": {
        "description": "log Filter all entries that satisfy the predicate",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "filterWithPriority",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMinMaxQueue b a-\u003eMinMaxQueue b a",
        "package": "pure-priority-queue",
        "partial": "With Priority",
        "signature": "(a-\u003ep-\u003eBool)-\u003eMinMaxQueue p a-\u003eMinMaxQueue p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:foldWithPriority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold the priorities and values of a priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "(p -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e MinMaxQueue p a -\u003e b",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#foldWithPriority",
        "fct-type": "function",
        "title": "foldWithPriority"
      },
      "index": {
        "description": "Fold the priorities and values of priority queue",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "foldWithPriority",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eMinMaxQueue a b-\u003ec",
        "package": "pure-priority-queue",
        "partial": "With Priority",
        "signature": "(p-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eMinMaxQueue p a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Insert a value with given priority into a priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "a -\u003e p -\u003e MinMaxQueue p a -\u003e MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Insert value with given priority into priority queue",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eMinMaxQueue b a-\u003eMinMaxQueue b a",
        "package": "pure-priority-queue",
        "partial": "",
        "signature": "a-\u003ep-\u003eMinMaxQueue p a-\u003eMinMaxQueue p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:maxPriority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Get the maximum priority of the elements in the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e Maybe p",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#maxPriority",
        "fct-type": "function",
        "title": "maxPriority"
      },
      "index": {
        "description": "log Get the maximum priority of the elements in the queue",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "maxPriority",
        "normalized": "MinMaxQueue a b-\u003eMaybe a",
        "package": "pure-priority-queue",
        "partial": "Priority",
        "signature": "MinMaxQueue p a-\u003eMaybe p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:maxView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e View a priority queue to get the (value, priority)\n pair with the highest priority and the remainder of the queue.\n\u003c/p\u003e\u003cp\u003eTies are broken arbitrarily.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e Maybe ((a, p), MinMaxQueue p a)",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "log View priority queue to get the value priority pair with the highest priority and the remainder of the queue Ties are broken arbitrarily",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "maxView",
        "normalized": "MinMaxQueue a b-\u003eMaybe((b,a),MinMaxQueue a b)",
        "package": "pure-priority-queue",
        "partial": "View",
        "signature": "MinMaxQueue p a-\u003eMaybe((a,p),MinMaxQueue p a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:minPriority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Get the minimum priority of the elements in the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e Maybe p",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#minPriority",
        "fct-type": "function",
        "title": "minPriority"
      },
      "index": {
        "description": "log Get the minimum priority of the elements in the queue",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "minPriority",
        "normalized": "MinMaxQueue a b-\u003eMaybe a",
        "package": "pure-priority-queue",
        "partial": "Priority",
        "signature": "MinMaxQueue p a-\u003eMaybe p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e View a priority queue to get the (value, priority)\n pair with the lowest priority and the remainder of the queue.\n\u003c/p\u003e\u003cp\u003eTies are broken arbitrarily.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e Maybe ((a, p), MinMaxQueue p a)",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "log View priority queue to get the value priority pair with the lowest priority and the remainder of the queue Ties are broken arbitrarily",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "minView",
        "normalized": "MinMaxQueue a b-\u003eMaybe((b,a),MinMaxQueue a b)",
        "package": "pure-priority-queue",
        "partial": "View",
        "signature": "MinMaxQueue p a-\u003eMaybe((a,p),MinMaxQueue p a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a priority queue is empty.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e Bool",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Test whether priority queue is empty",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "null",
        "normalized": "MinMaxQueue a b-\u003eBool",
        "package": "pure-priority-queue",
        "partial": "",
        "signature": "MinMaxQueue p a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A priority queue with a single entry.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "a -\u003e p -\u003e MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "priority queue with single entry",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eMinMaxQueue b a",
        "package": "pure-priority-queue",
        "partial": "",
        "signature": "a-\u003ep-\u003eMinMaxQueue p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The number of entries in a priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e Int",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of entries in priority queue",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "size",
        "normalized": "MinMaxQueue a b-\u003eInt",
        "package": "pure-priority-queue",
        "partial": "",
        "signature": "MinMaxQueue p a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:splitByPriority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Split a priority queue \u003ccode\u003eq\u003c/code\u003e into two queues \u003ccode\u003e(q1, q2)\u003c/code\u003e\n by the given priority \u003ccode\u003ep\u003c/code\u003e, such that \u003ccode\u003eq1\u003c/code\u003e contains exactly the\n entries with priority less than \u003ccode\u003ep\u003c/code\u003e, and \u003ccode\u003eq2\u003c/code\u003e containes exactly the\n entries with priority greater than or equal to \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "p -\u003e MinMaxQueue p a -\u003e (MinMaxQueue p a, MinMaxQueue p a)",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#splitByPriority",
        "fct-type": "function",
        "title": "splitByPriority"
      },
      "index": {
        "description": "log Split priority queue into two queues q1 q2 by the given priority such that q1 contains exactly the entries with priority less than and q2 containes exactly the entries with priority greater than or equal to",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "splitByPriority",
        "normalized": "a-\u003eMinMaxQueue a b-\u003e(MinMaxQueue a b,MinMaxQueue a b)",
        "package": "pure-priority-queue",
        "partial": "By Priority",
        "signature": "p-\u003eMinMaxQueue p a-\u003e(MinMaxQueue p a,MinMaxQueue p a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert the priority queue into a list of (value,\n priority) pairs in ascending priority.\n\u003c/p\u003e\u003cp\u003eTies are broken in an arbitrary manner.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e [(a, p)]",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Convert the priority queue into list of value priority pairs in ascending priority Ties are broken in an arbitrary manner",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "toAscList",
        "normalized": "MinMaxQueue a b-\u003e[(b,a)]",
        "package": "pure-priority-queue",
        "partial": "Asc List",
        "signature": "MinMaxQueue p a-\u003e[(a,p)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:unMinMaxQueue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "Map p [a]",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#MinMaxQueue",
        "fct-type": "function",
        "title": "unMinMaxQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "unMinMaxQueue",
        "normalized": "Map a[b]",
        "package": "pure-priority-queue",
        "partial": "Min Max Queue",
        "signature": "Map p[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue-Internal.html#v:viewWith",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a \u003ccode\u003eData.Map.Map\u003c/code\u003e view function to a given priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue.Internal",
        "fct-package": "pure-priority-queue",
        "fct-signature": "(Map p [a] -\u003e Maybe ((p, [a]), Map p [a]))-\u003e MinMaxQueue p a-\u003e Maybe ((a, p), MinMaxQueue p a)",
        "fct-type": "function",
        "title": "viewWith"
      },
      "index": {
        "description": "Applies Data.Map.Map view function to given priority queue",
        "hierarchy": "Data PurePriorityQueue Internal",
        "module": "Data.PurePriorityQueue.Internal",
        "name": "viewWith",
        "normalized": "(Map a[b]-\u003eMaybe((a,[b]),Map a[b]))-\u003eMinMaxQueue a b-\u003eMaybe((b,a),MinMaxQueue a b)",
        "package": "pure-priority-queue",
        "partial": "With",
        "signature": "(Map p[a]-\u003eMaybe((p,[a]),Map p[a]))-\u003eMinMaxQueue p a-\u003eMaybe((a,p),MinMaxQueue p a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure priority queue.\n\u003c/p\u003e\u003cp\u003eBecause many function names clash with \u003ca\u003ePrelude\u003c/a\u003e names, this module\n is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.,\n\u003c/p\u003e\u003cpre\u003e  import qualified Data.PurePriorityQueue as PQ\n\u003c/pre\u003e\u003cp\u003eThis implementation is built on top of \u003ca\u003eData.Map\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eEstimates of worst-case time complexity are given.  The value \u003cem\u003en\u003c/em\u003e\n is the number of elements in the queue.  The value \u003cem\u003ep\u003c/em\u003e is the\n cardinality of the set of priorities of the elements in the queue.\n \u003cem\u003ep\u003c/em\u003e is never greater than \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "module",
        "fct-source": "src/Data-PurePriorityQueue.html",
        "fct-type": "module",
        "title": "PurePriorityQueue"
      },
      "index": {
        "description": "pure priority queue Because many function names clash with Prelude names this module is usually imported qualified e.g import qualified Data.PurePriorityQueue as PQ This implementation is built on top of Data.Map Estimates of worst-case time complexity are given The value is the number of elements in the queue The value is the cardinality of the set of priorities of the elements in the queue is never greater than",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "PurePriorityQueue",
        "normalized": "",
        "package": "pure-priority-queue",
        "partial": "Pure Priority Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#t:MinMaxQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA queue of values of type \u003ccode\u003ea\u003c/code\u003e with priority of type \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "data",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#MinMaxQueue",
        "fct-type": "data",
        "title": "MinMaxQueue"
      },
      "index": {
        "description": "queue of values of type with priority of type",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "MinMaxQueue",
        "normalized": "",
        "package": "pure-priority-queue",
        "partial": "Min Max Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:deleteMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Remove the value with the maximum priority from the\n queue.\n\u003c/p\u003e\u003cp\u003eIf the queue is empty, \u003ccode\u003e\u003ca\u003edeleteMax\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.  Ties are\n broken arbitrarily.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "log Remove the value with the maximum priority from the queue If the queue is empty deleteMax returns empty Ties are broken arbitrarily",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "deleteMax",
        "normalized": "MinMaxQueue a b-\u003eMinMaxQueue a b",
        "package": "pure-priority-queue",
        "partial": "Max",
        "signature": "MinMaxQueue p a-\u003eMinMaxQueue p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Remove the value with the minimum priority from the\n queue.\n\u003c/p\u003e\u003cp\u003eIf the queue is empty, \u003ccode\u003e\u003ca\u003edeleteMin\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.  Ties are\n broken arbitrarily.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "log Remove the value with the minimum priority from the queue If the queue is empty deleteMin returns empty Ties are broken arbitrarily",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "deleteMin",
        "normalized": "MinMaxQueue a b-\u003eMinMaxQueue a b",
        "package": "pure-priority-queue",
        "partial": "Min",
        "signature": "MinMaxQueue p a-\u003eMinMaxQueue p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e An empty priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty priority queue",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "empty",
        "normalized": "",
        "package": "pure-priority-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log p)\u003c/em\u003e Filter all values that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinMaxQueue p a -\u003e MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "log Filter all values that satisfy the predicate",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eMinMaxQueue b a-\u003eMinMaxQueue b a",
        "package": "pure-priority-queue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMinMaxQueue p a-\u003eMinMaxQueue p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:filterWithPriority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log p)\u003c/em\u003e Filter all entries that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "(a -\u003e p -\u003e Bool) -\u003e MinMaxQueue p a -\u003e MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#filterWithPriority",
        "fct-type": "function",
        "title": "filterWithPriority"
      },
      "index": {
        "description": "log Filter all entries that satisfy the predicate",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "filterWithPriority",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMinMaxQueue b a-\u003eMinMaxQueue b a",
        "package": "pure-priority-queue",
        "partial": "With Priority",
        "signature": "(a-\u003ep-\u003eBool)-\u003eMinMaxQueue p a-\u003eMinMaxQueue p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:foldWithPriority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold the priorities and values of a priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "(p -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e MinMaxQueue p a -\u003e b",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#foldWithPriority",
        "fct-type": "function",
        "title": "foldWithPriority"
      },
      "index": {
        "description": "Fold the priorities and values of priority queue",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "foldWithPriority",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eMinMaxQueue a b-\u003ec",
        "package": "pure-priority-queue",
        "partial": "With Priority",
        "signature": "(p-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eMinMaxQueue p a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Insert a value with given priority into a priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "a -\u003e p -\u003e MinMaxQueue p a -\u003e MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Insert value with given priority into priority queue",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eMinMaxQueue b a-\u003eMinMaxQueue b a",
        "package": "pure-priority-queue",
        "partial": "",
        "signature": "a-\u003ep-\u003eMinMaxQueue p a-\u003eMinMaxQueue p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:maxPriority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Get the maximum priority of the elements in the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e Maybe p",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#maxPriority",
        "fct-type": "function",
        "title": "maxPriority"
      },
      "index": {
        "description": "log Get the maximum priority of the elements in the queue",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "maxPriority",
        "normalized": "MinMaxQueue a b-\u003eMaybe a",
        "package": "pure-priority-queue",
        "partial": "Priority",
        "signature": "MinMaxQueue p a-\u003eMaybe p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:maxView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e View a priority queue to get the (value, priority)\n pair with the highest priority and the remainder of the queue.\n\u003c/p\u003e\u003cp\u003eTies are broken arbitrarily.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e Maybe ((a, p), MinMaxQueue p a)",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "log View priority queue to get the value priority pair with the highest priority and the remainder of the queue Ties are broken arbitrarily",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "maxView",
        "normalized": "MinMaxQueue a b-\u003eMaybe((b,a),MinMaxQueue a b)",
        "package": "pure-priority-queue",
        "partial": "View",
        "signature": "MinMaxQueue p a-\u003eMaybe((a,p),MinMaxQueue p a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:minPriority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Get the minimum priority of the elements in the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e Maybe p",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#minPriority",
        "fct-type": "function",
        "title": "minPriority"
      },
      "index": {
        "description": "log Get the minimum priority of the elements in the queue",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "minPriority",
        "normalized": "MinMaxQueue a b-\u003eMaybe a",
        "package": "pure-priority-queue",
        "partial": "Priority",
        "signature": "MinMaxQueue p a-\u003eMaybe p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e View a priority queue to get the (value, priority)\n pair with the lowest priority and the remainder of the queue.\n\u003c/p\u003e\u003cp\u003eTies are broken arbitrarily.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e Maybe ((a, p), MinMaxQueue p a)",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "log View priority queue to get the value priority pair with the lowest priority and the remainder of the queue Ties are broken arbitrarily",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "minView",
        "normalized": "MinMaxQueue a b-\u003eMaybe((b,a),MinMaxQueue a b)",
        "package": "pure-priority-queue",
        "partial": "View",
        "signature": "MinMaxQueue p a-\u003eMaybe((a,p),MinMaxQueue p a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a priority queue is empty.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e Bool",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Test whether priority queue is empty",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "null",
        "normalized": "MinMaxQueue a b-\u003eBool",
        "package": "pure-priority-queue",
        "partial": "",
        "signature": "MinMaxQueue p a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A priority queue with a single entry.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "a -\u003e p -\u003e MinMaxQueue p a",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "priority queue with single entry",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eMinMaxQueue b a",
        "package": "pure-priority-queue",
        "partial": "",
        "signature": "a-\u003ep-\u003eMinMaxQueue p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The number of entries in a priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e Int",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of entries in priority queue",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "size",
        "normalized": "MinMaxQueue a b-\u003eInt",
        "package": "pure-priority-queue",
        "partial": "",
        "signature": "MinMaxQueue p a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:splitByPriority",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log p)\u003c/em\u003e Split a priority queue \u003ccode\u003eq\u003c/code\u003e into two queues \u003ccode\u003e(q1, q2)\u003c/code\u003e\n by the given priority \u003ccode\u003ep\u003c/code\u003e, such that \u003ccode\u003eq1\u003c/code\u003e contains exactly the\n entries with priority less than \u003ccode\u003ep\u003c/code\u003e, and \u003ccode\u003eq2\u003c/code\u003e containes exactly the\n entries with priority greater than or equal to \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "p -\u003e MinMaxQueue p a -\u003e (MinMaxQueue p a, MinMaxQueue p a)",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#splitByPriority",
        "fct-type": "function",
        "title": "splitByPriority"
      },
      "index": {
        "description": "log Split priority queue into two queues q1 q2 by the given priority such that q1 contains exactly the entries with priority less than and q2 containes exactly the entries with priority greater than or equal to",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "splitByPriority",
        "normalized": "a-\u003eMinMaxQueue a b-\u003e(MinMaxQueue a b,MinMaxQueue a b)",
        "package": "pure-priority-queue",
        "partial": "By Priority",
        "signature": "p-\u003eMinMaxQueue p a-\u003e(MinMaxQueue p a,MinMaxQueue p a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pure-priority-queue/docs/Data-PurePriorityQueue.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert the priority queue into a list of (value,\n priority) pairs in ascending priority.\n\u003c/p\u003e\u003cp\u003eTies are broken in an arbitrary manner.\n\u003c/p\u003e",
        "fct-module": "Data.PurePriorityQueue",
        "fct-package": "pure-priority-queue",
        "fct-signature": "MinMaxQueue p a -\u003e [(a, p)]",
        "fct-source": "src/Data-PurePriorityQueue-Internal.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Convert the priority queue into list of value priority pairs in ascending priority Ties are broken in an arbitrary manner",
        "hierarchy": "Data PurePriorityQueue",
        "module": "Data.PurePriorityQueue",
        "name": "toAscList",
        "normalized": "MinMaxQueue a b-\u003e[(b,a)]",
        "package": "pure-priority-queue",
        "partial": "Asc List",
        "signature": "MinMaxQueue p a-\u003e[(a,p)]"
      }
    }
  }
]