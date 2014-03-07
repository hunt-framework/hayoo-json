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
        "word": "fingertree-psqueue"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FingerTree.PSQueue",
          "name": "PSQueue",
          "package": "fingertree-psqueue",
          "source": "src/Data-FingerTree-PSQueue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "PSQueue",
          "package": "fingertree-psqueue",
          "partial": "PSQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FingerTree.PSQueue",
          "name": "Binding",
          "package": "fingertree-psqueue",
          "source": "src/Data-FingerTree-PSQueue.html#Binding",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "Binding",
          "package": "fingertree-psqueue",
          "partial": "Binding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#t:Binding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FingerTree.PSQueue",
          "name": "PSQ",
          "package": "fingertree-psqueue",
          "source": "src/Data-FingerTree-PSQueue.html#PSQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "PSQ",
          "package": "fingertree-psqueue",
          "partial": "PSQ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#t:PSQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FingerTree.PSQueue",
          "name": ":-\u003e",
          "package": "fingertree-psqueue",
          "signature": "k :-\u003e p",
          "source": "src/Data-FingerTree-PSQueue.html#Binding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": ":-\u003e",
          "normalized": "a-\u003eb",
          "package": "fingertree-psqueue",
          "signature": "k-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(log n). Adjust the priority of a key in the queue, provided that key exists.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "adjust",
          "package": "fingertree-psqueue",
          "signature": "(p -\u003e p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-FingerTree-PSQueue.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "log Adjust the priority of key in the queue provided that key exists",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003ePSQ b a-\u003ePSQ b a",
          "package": "fingertree-psqueue",
          "signature": "(p-\u003ep)-\u003ek-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(log n). Adjust the priority of a key in the queue, provided that key exists, according to a function which additionally takes\n the key as a parameter.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "adjustWithKey",
          "package": "fingertree-psqueue",
          "signature": "(k -\u003e p -\u003e p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-FingerTree-PSQueue.html#adjustWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Adjust the priority of key in the queue provided that key exists according to function which additionally takes the key as parameter",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "adjustWithKey",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003ePSQ a b-\u003ePSQ a b",
          "package": "fingertree-psqueue",
          "partial": "With Key",
          "signature": "(k-\u003ep-\u003ep)-\u003ek-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(log n). Alters a priority search queue such that \u003ccode\u003elookup k (alter f k q) = f (lookup k q)\u003c/code\u003e. This can be used to insert, delete,\n or update a priority in a queue.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "alter",
          "package": "fingertree-psqueue",
          "signature": "(Maybe p -\u003e Maybe p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-FingerTree-PSQueue.html#alter",
          "type": "function"
        },
        "index": {
          "description": "log Alters priority search queue such that lookup alter lookup This can be used to insert delete or update priority in queue",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003ePSQ b a-\u003ePSQ b a",
          "package": "fingertree-psqueue",
          "signature": "(Maybe p-\u003eMaybe p)-\u003ek-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(r (log n)). Finds all the bindings in a queue whose priority is less than the given value.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "atMost",
          "package": "fingertree-psqueue",
          "signature": "p -\u003e PSQ k p -\u003e [Binding k p]",
          "source": "src/Data-FingerTree-PSQueue.html#atMost",
          "type": "function"
        },
        "index": {
          "description": "log Finds all the bindings in queue whose priority is less than the given value",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "atMost",
          "normalized": "a-\u003ePSQ b a-\u003e[Binding b a]",
          "package": "fingertree-psqueue",
          "partial": "Most",
          "signature": "p-\u003ePSQ k p-\u003e[Binding k p]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:atMost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(log n). Delete a key from a queue.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "delete",
          "package": "fingertree-psqueue",
          "signature": "k -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-FingerTree-PSQueue.html#delete",
          "type": "function"
        },
        "index": {
          "description": "log Delete key from queue",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "delete",
          "normalized": "a-\u003ePSQ a b-\u003ePSQ a b",
          "package": "fingertree-psqueue",
          "signature": "k-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(log n). Delete the key with minimum priority from a queue.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "deleteMin",
          "package": "fingertree-psqueue",
          "signature": "PSQ k p -\u003e PSQ k p",
          "source": "src/Data-FingerTree-PSQueue.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete the key with minimum priority from queue",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "deleteMin",
          "normalized": "PSQ a b-\u003ePSQ a b",
          "package": "fingertree-psqueue",
          "partial": "Min",
          "signature": "PSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). The empty queue.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "empty",
          "package": "fingertree-psqueue",
          "signature": "PSQ k p",
          "source": "src/Data-FingerTree-PSQueue.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty queue",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "empty",
          "package": "fingertree-psqueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Find the binding with minimum priority in a queue.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "findMin",
          "package": "fingertree-psqueue",
          "signature": "PSQ k p -\u003e Maybe (Binding k p)",
          "source": "src/Data-FingerTree-PSQueue.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "Find the binding with minimum priority in queue",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "findMin",
          "normalized": "PSQ a b-\u003eMaybe(Binding a b)",
          "package": "fingertree-psqueue",
          "partial": "Min",
          "signature": "PSQ k p-\u003eMaybe(Binding k p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft fold over the list of bindings in a queue.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "foldl",
          "package": "fingertree-psqueue",
          "signature": "(b -\u003e Binding k p -\u003e b) -\u003e b -\u003e PSQ k p -\u003e b",
          "source": "src/Data-FingerTree-PSQueue.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Left fold over the list of bindings in queue",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "foldl",
          "normalized": "(a-\u003eBinding b c-\u003ea)-\u003ea-\u003ePSQ b c-\u003ea",
          "package": "fingertree-psqueue",
          "signature": "(b-\u003eBinding k p-\u003eb)-\u003eb-\u003ePSQ k p-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight fold over the list of bindings in a queue. \n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "foldr",
          "package": "fingertree-psqueue",
          "signature": "(Binding k p -\u003e b -\u003e b) -\u003e b -\u003e PSQ k p -\u003e b",
          "source": "src/Data-FingerTree-PSQueue.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Right fold over the list of bindings in queue",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "foldr",
          "normalized": "(Binding a b-\u003ec-\u003ec)-\u003ec-\u003ePSQ a b-\u003ec",
          "package": "fingertree-psqueue",
          "signature": "(Binding k p-\u003eb-\u003eb)-\u003eb-\u003ePSQ k p-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n log n). Contstruct a queue from an already ascending list of bindings. Does not check that the list is sorted.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "fromAscList",
          "package": "fingertree-psqueue",
          "signature": "[Binding k p] -\u003e PSQ k p",
          "source": "src/Data-FingerTree-PSQueue.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "log Contstruct queue from an already ascending list of bindings Does not check that the list is sorted",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "fromAscList",
          "normalized": "[Binding a b]-\u003ePSQ a b",
          "package": "fingertree-psqueue",
          "partial": "Asc List",
          "signature": "[Binding k p]-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n log n). Construct a queue from a list of bindings.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "fromList",
          "package": "fingertree-psqueue",
          "signature": "[Binding k p] -\u003e PSQ k p",
          "source": "src/Data-FingerTree-PSQueue.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "log Construct queue from list of bindings",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "fromList",
          "normalized": "[Binding a b]-\u003ePSQ a b",
          "package": "fingertree-psqueue",
          "partial": "List",
          "signature": "[Binding k p]-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Extract the list of keys of a queue.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "keys",
          "package": "fingertree-psqueue",
          "signature": "PSQ k p -\u003e [k]",
          "source": "src/Data-FingerTree-PSQueue.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Extract the list of keys of queue",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "keys",
          "normalized": "PSQ a b-\u003e[a]",
          "package": "fingertree-psqueue",
          "signature": "PSQ k p-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(log n). Determine if a key is in the queue, and its priority.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "lookup",
          "package": "fingertree-psqueue",
          "signature": "k -\u003e PSQ k p -\u003e Maybe p",
          "source": "src/Data-FingerTree-PSQueue.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log Determine if key is in the queue and its priority",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "lookup",
          "normalized": "a-\u003ePSQ a b-\u003eMaybe b",
          "package": "fingertree-psqueue",
          "signature": "k-\u003ePSQ k p-\u003eMaybe p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(log n). Split a queue into the element with minimum priority, and the remainder.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "minView",
          "package": "fingertree-psqueue",
          "signature": "PSQ k p -\u003e Maybe (Binding k p, PSQ k p)",
          "source": "src/Data-FingerTree-PSQueue.html#minView",
          "type": "function"
        },
        "index": {
          "description": "log Split queue into the element with minimum priority and the remainder",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "minView",
          "normalized": "PSQ a b-\u003eMaybe(Binding a b,PSQ a b)",
          "package": "fingertree-psqueue",
          "partial": "View",
          "signature": "PSQ k p-\u003eMaybe(Binding k p,PSQ k p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Test if a queue is empty.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "null",
          "package": "fingertree-psqueue",
          "signature": "PSQ k p -\u003e Bool",
          "source": "src/Data-FingerTree-PSQueue.html#null",
          "type": "function"
        },
        "index": {
          "description": "Test if queue is empty",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "null",
          "normalized": "PSQ a b-\u003eBool",
          "package": "fingertree-psqueue",
          "signature": "PSQ k p-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(log n). The expression \u003ccode\u003erange (l,u) q\u003c/code\u003e selects the keys k from q where \u003ccode\u003el \u003c= k\u003c/code\u003e and \u003ccode\u003ek \u003c= u\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "range",
          "package": "fingertree-psqueue",
          "signature": "(k, k) -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-FingerTree-PSQueue.html#range",
          "type": "function"
        },
        "index": {
          "description": "log The expression range selects the keys from where and",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "range",
          "normalized": "(a,a)-\u003ePSQ a b-\u003ePSQ a b",
          "package": "fingertree-psqueue",
          "signature": "(k,k)-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a queue with a single key/priority binding.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "singleton",
          "package": "fingertree-psqueue",
          "signature": "k -\u003e p -\u003e PSQ k p",
          "source": "src/Data-FingerTree-PSQueue.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct queue with single key priority binding",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003ePSQ a b",
          "package": "fingertree-psqueue",
          "signature": "k-\u003ep-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). The number of bindings in a queue.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "size",
          "package": "fingertree-psqueue",
          "signature": "PSQ k p -\u003e Int",
          "source": "src/Data-FingerTree-PSQueue.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of bindings in queue",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "size",
          "normalized": "PSQ a b-\u003eInt",
          "package": "fingertree-psqueue",
          "signature": "PSQ k p-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Flatten a queue into a list of bindings.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "toList",
          "package": "fingertree-psqueue",
          "signature": "PSQ k p -\u003e [Binding k p]",
          "source": "src/Data-FingerTree-PSQueue.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Flatten queue into list of bindings",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "toList",
          "normalized": "PSQ a b-\u003e[Binding a b]",
          "package": "fingertree-psqueue",
          "partial": "List",
          "signature": "PSQ k p-\u003e[Binding k p]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(log n). Update or delete a priority in the queue, provided that key exists.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "update",
          "package": "fingertree-psqueue",
          "signature": "(p -\u003e Maybe p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-FingerTree-PSQueue.html#update",
          "type": "function"
        },
        "index": {
          "description": "log Update or delete priority in the queue provided that key exists",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003ePSQ b a-\u003ePSQ b a",
          "package": "fingertree-psqueue",
          "signature": "(p-\u003eMaybe p)-\u003ek-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(log n). Update or delete a priority in the queue, provided that key exists, according to a function which additionally takes\n the key as a parameter.\n\u003c/p\u003e",
          "module": "Data.FingerTree.PSQueue",
          "name": "updateWithKey",
          "package": "fingertree-psqueue",
          "signature": "(k -\u003e p -\u003e Maybe p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-FingerTree-PSQueue.html#updateWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Update or delete priority in the queue provided that key exists according to function which additionally takes the key as parameter",
          "hierarchy": "Data FingerTree PSQueue",
          "module": "Data.FingerTree.PSQueue",
          "name": "updateWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003ePSQ a b-\u003ePSQ a b",
          "package": "fingertree-psqueue",
          "partial": "With Key",
          "signature": "(k-\u003ep-\u003eMaybe p)-\u003ek-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:updateWithKey"
      }
    }
  ]
]