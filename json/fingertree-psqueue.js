[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#",
      "description": {
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "module",
        "fct-source": "src/Data-FingerTree-PSQueue.html",
        "fct-type": "module",
        "title": "PSQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "PSQueue",
        "normalized": "",
        "package": "fingertree-psqueue",
        "partial": "PSQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#t:Binding",
      "description": {
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "data",
        "fct-source": "src/Data-FingerTree-PSQueue.html#Binding",
        "fct-type": "data",
        "title": "Binding"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "Binding",
        "normalized": "",
        "package": "fingertree-psqueue",
        "partial": "Binding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#t:PSQ",
      "description": {
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "data",
        "fct-source": "src/Data-FingerTree-PSQueue.html#PSQ",
        "fct-type": "data",
        "title": "PSQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "PSQ",
        "normalized": "",
        "package": "fingertree-psqueue",
        "partial": "PSQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v::-45--62-",
      "description": {
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "k :-\u003e p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#Binding",
        "fct-type": "function",
        "title": ":-\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": ":-\u003e",
        "normalized": "a-\u003eb",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "k-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Adjust the priority of a key in the queue, provided that key exists.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "(p -\u003e p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "log Adjust the priority of key in the queue provided that key exists",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eb-\u003ePSQ b a-\u003ePSQ b a",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "(p-\u003ep)-\u003ek-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:adjustWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Adjust the priority of a key in the queue, provided that key exists, according to a function which additionally takes\n the key as a parameter.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "(k -\u003e p -\u003e p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#adjustWithKey",
        "fct-type": "function",
        "title": "adjustWithKey"
      },
      "index": {
        "description": "log Adjust the priority of key in the queue provided that key exists according to function which additionally takes the key as parameter",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "adjustWithKey",
        "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003ePSQ a b-\u003ePSQ a b",
        "package": "fingertree-psqueue",
        "partial": "With Key",
        "signature": "(k-\u003ep-\u003ep)-\u003ek-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:alter",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Alters a priority search queue such that \u003ccode\u003elookup k (alter f k q) = f (lookup k q)\u003c/code\u003e. This can be used to insert, delete,\n or update a priority in a queue.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "(Maybe p -\u003e Maybe p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#alter",
        "fct-type": "function",
        "title": "alter"
      },
      "index": {
        "description": "log Alters priority search queue such that lookup alter lookup This can be used to insert delete or update priority in queue",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "alter",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003ePSQ b a-\u003ePSQ b a",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "(Maybe p-\u003eMaybe p)-\u003ek-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:atMost",
      "description": {
        "fct-descr": "\u003cp\u003eO(r (log n)). Finds all the bindings in a queue whose priority is less than the given value.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "p -\u003e PSQ k p -\u003e [Binding k p]",
        "fct-source": "src/Data-FingerTree-PSQueue.html#atMost",
        "fct-type": "function",
        "title": "atMost"
      },
      "index": {
        "description": "log Finds all the bindings in queue whose priority is less than the given value",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "atMost",
        "normalized": "a-\u003ePSQ b a-\u003e[Binding b a]",
        "package": "fingertree-psqueue",
        "partial": "Most",
        "signature": "p-\u003ePSQ k p-\u003e[Binding k p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Delete a key from a queue.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "k -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Delete key from queue",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "delete",
        "normalized": "a-\u003ePSQ a b-\u003ePSQ a b",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "k-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Delete the key with minimum priority from a queue.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "log Delete the key with minimum priority from queue",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "deleteMin",
        "normalized": "PSQ a b-\u003ePSQ a b",
        "package": "fingertree-psqueue",
        "partial": "Min",
        "signature": "PSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). The empty queue.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "PSQ k p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty queue",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "empty",
        "normalized": "",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Find the binding with minimum priority in a queue.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "PSQ k p -\u003e Maybe (Binding k p)",
        "fct-source": "src/Data-FingerTree-PSQueue.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "Find the binding with minimum priority in queue",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "findMin",
        "normalized": "PSQ a b-\u003eMaybe(Binding a b)",
        "package": "fingertree-psqueue",
        "partial": "Min",
        "signature": "PSQ k p-\u003eMaybe(Binding k p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eLeft fold over the list of bindings in a queue.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "(b -\u003e Binding k p -\u003e b) -\u003e b -\u003e PSQ k p -\u003e b",
        "fct-source": "src/Data-FingerTree-PSQueue.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Left fold over the list of bindings in queue",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "foldl",
        "normalized": "(a-\u003eBinding b c-\u003ea)-\u003ea-\u003ePSQ b c-\u003ea",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "(b-\u003eBinding k p-\u003eb)-\u003eb-\u003ePSQ k p-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eRight fold over the list of bindings in a queue. \n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "(Binding k p -\u003e b -\u003e b) -\u003e b -\u003e PSQ k p -\u003e b",
        "fct-source": "src/Data-FingerTree-PSQueue.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Right fold over the list of bindings in queue",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "foldr",
        "normalized": "(Binding a b-\u003ec-\u003ec)-\u003ec-\u003ePSQ a b-\u003ec",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "(Binding k p-\u003eb-\u003eb)-\u003eb-\u003ePSQ k p-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003eO(n log n). Contstruct a queue from an already ascending list of bindings. Does not check that the list is sorted.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "[Binding k p] -\u003e PSQ k p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "log Contstruct queue from an already ascending list of bindings Does not check that the list is sorted",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "fromAscList",
        "normalized": "[Binding a b]-\u003ePSQ a b",
        "package": "fingertree-psqueue",
        "partial": "Asc List",
        "signature": "[Binding k p]-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eO(n log n). Construct a queue from a list of bindings.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "[Binding k p] -\u003e PSQ k p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "log Construct queue from list of bindings",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "fromList",
        "normalized": "[Binding a b]-\u003ePSQ a b",
        "package": "fingertree-psqueue",
        "partial": "List",
        "signature": "[Binding k p]-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Extract the list of keys of a queue.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "PSQ k p -\u003e [k]",
        "fct-source": "src/Data-FingerTree-PSQueue.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Extract the list of keys of queue",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "keys",
        "normalized": "PSQ a b-\u003e[a]",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "PSQ k p-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Determine if a key is in the queue, and its priority.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "k -\u003e PSQ k p -\u003e Maybe p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "log Determine if key is in the queue and its priority",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "lookup",
        "normalized": "a-\u003ePSQ a b-\u003eMaybe b",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "k-\u003ePSQ k p-\u003eMaybe p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Split a queue into the element with minimum priority, and the remainder.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "PSQ k p -\u003e Maybe (Binding k p, PSQ k p)",
        "fct-source": "src/Data-FingerTree-PSQueue.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "log Split queue into the element with minimum priority and the remainder",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "minView",
        "normalized": "PSQ a b-\u003eMaybe(Binding a b,PSQ a b)",
        "package": "fingertree-psqueue",
        "partial": "View",
        "signature": "PSQ k p-\u003eMaybe(Binding k p,PSQ k p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Test if a queue is empty.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "PSQ k p -\u003e Bool",
        "fct-source": "src/Data-FingerTree-PSQueue.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Test if queue is empty",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "null",
        "normalized": "PSQ a b-\u003eBool",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "PSQ k p-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:range",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). The expression \u003ccode\u003erange (l,u) q\u003c/code\u003e selects the keys k from q where \u003ccode\u003el \u003c= k\u003c/code\u003e and \u003ccode\u003ek \u003c= u\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "(k, k) -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#range",
        "fct-type": "function",
        "title": "range"
      },
      "index": {
        "description": "log The expression range selects the keys from where and",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "range",
        "normalized": "(a,a)-\u003ePSQ a b-\u003ePSQ a b",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "(k,k)-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a queue with a single key/priority binding.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "k -\u003e p -\u003e PSQ k p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Construct queue with single key priority binding",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003ePSQ a b",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "k-\u003ep-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). The number of bindings in a queue.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "PSQ k p -\u003e Int",
        "fct-source": "src/Data-FingerTree-PSQueue.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of bindings in queue",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "size",
        "normalized": "PSQ a b-\u003eInt",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "PSQ k p-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Flatten a queue into a list of bindings.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "PSQ k p -\u003e [Binding k p]",
        "fct-source": "src/Data-FingerTree-PSQueue.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Flatten queue into list of bindings",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "toList",
        "normalized": "PSQ a b-\u003e[Binding a b]",
        "package": "fingertree-psqueue",
        "partial": "List",
        "signature": "PSQ k p-\u003e[Binding k p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Update or delete a priority in the queue, provided that key exists.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "(p -\u003e Maybe p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "log Update or delete priority in the queue provided that key exists",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003eb-\u003ePSQ b a-\u003ePSQ b a",
        "package": "fingertree-psqueue",
        "partial": "",
        "signature": "(p-\u003eMaybe p)-\u003ek-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fingertree-psqueue/docs/Data-FingerTree-PSQueue.html#v:updateWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Update or delete a priority in the queue, provided that key exists, according to a function which additionally takes\n the key as a parameter.\n\u003c/p\u003e",
        "fct-module": "Data.FingerTree.PSQueue",
        "fct-package": "fingertree-psqueue",
        "fct-signature": "(k -\u003e p -\u003e Maybe p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-FingerTree-PSQueue.html#updateWithKey",
        "fct-type": "function",
        "title": "updateWithKey"
      },
      "index": {
        "description": "log Update or delete priority in the queue provided that key exists according to function which additionally takes the key as parameter",
        "hierarchy": "Data FingerTree PSQueue",
        "module": "Data.FingerTree.PSQueue",
        "name": "updateWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003ePSQ a b-\u003ePSQ a b",
        "package": "fingertree-psqueue",
        "partial": "With Key",
        "signature": "(k-\u003ep-\u003eMaybe p)-\u003ek-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  }
]