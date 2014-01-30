[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003cem\u003epriority search queue\u003c/em\u003e (henceforth \u003cem\u003equeue\u003c/em\u003e) efficiently supports the\nopperations of both a search tree and a priority queue. A \u003ccode\u003e\u003ca\u003eBinding\u003c/a\u003e\u003c/code\u003e is a\nproduct of a key and a priority. Bindings can be inserted, deleted, modified\nand queried in logarithmic time, and the binding with the least priority can be\nretrieved in constant time. A queue can be built from a list of bindings,\nsorted by keys, in linear time.\n\u003c/p\u003e\u003cp\u003eThis implementation is due to Ralf Hinze.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Hinze, R., \u003cem\u003eA Simple Implementation Technique for Priority Search Queues\u003c/em\u003e, ICFP 2001, pp. 110-121\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ca\u003ehttp://citeseer.ist.psu.edu/hinze01simple.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "module",
        "fct-source": "src/Data-PSQueue.html",
        "fct-type": "module",
        "title": "PSQueue"
      },
      "index": {
        "description": "priority search queue henceforth queue efficiently supports the opperations of both search tree and priority queue Binding is product of key and priority Bindings can be inserted deleted modified and queried in logarithmic time and the binding with the least priority can be retrieved in constant time queue can be built from list of bindings sorted by keys in linear time This implementation is due to Ralf Hinze Hinze Simple Implementation Technique for Priority Search Queues ICFP pp http citeseer.ist.psu.edu hinze01simple.html",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "PSQueue",
        "normalized": "",
        "package": "PSQueue",
        "partial": "PSQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#t:Binding",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ek :-\u003e p\u003c/code\u003e binds the key \u003ccode\u003ek\u003c/code\u003e with the priority \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "data",
        "fct-source": "src/Data-PSQueue.html#Binding",
        "fct-type": "data",
        "title": "Binding"
      },
      "index": {
        "description": "binds the key with the priority",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "Binding",
        "normalized": "",
        "package": "PSQueue",
        "partial": "Binding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#t:PSQ",
      "description": {
        "fct-descr": "\u003cp\u003eA mapping from keys \u003ccode\u003ek\u003c/code\u003e to priorites \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "data",
        "fct-source": "src/Data-PSQueue.html#PSQ",
        "fct-type": "data",
        "title": "PSQ"
      },
      "index": {
        "description": "mapping from keys to priorites",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "PSQ",
        "normalized": "",
        "package": "PSQueue",
        "partial": "PSQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v::-45--62-",
      "description": {
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "k :-\u003e p",
        "fct-source": "src/Data-PSQueue.html#Binding",
        "fct-type": "function",
        "title": ":-\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": ":-\u003e",
        "normalized": "a-\u003eb",
        "package": "PSQueue",
        "partial": "",
        "signature": "k-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Adjust the priority of a key.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "(p -\u003e p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "log Adjust the priority of key",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eb-\u003ePSQ b a-\u003ePSQ b a",
        "package": "PSQueue",
        "partial": "",
        "signature": "(p-\u003ep)-\u003ek-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:adjustWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Adjust the priority of a key.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "(k -\u003e p -\u003e p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#adjustWithKey",
        "fct-type": "function",
        "title": "adjustWithKey"
      },
      "index": {
        "description": "log Adjust the priority of key",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "adjustWithKey",
        "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003ePSQ a b-\u003ePSQ a b",
        "package": "PSQueue",
        "partial": "With Key",
        "signature": "(k-\u003ep-\u003ep)-\u003ek-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:alter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k q\u003c/code\u003e) alters the priority \u003ccode\u003ep\u003c/code\u003e bound to \u003ccode\u003ek\u003c/code\u003e, or absence thereof.\n alter can be used to insert, delete, or update a priority in a queue.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "(Maybe p -\u003e Maybe p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#alter",
        "fct-type": "function",
        "title": "alter"
      },
      "index": {
        "description": "log The expression alter alters the priority bound to or absence thereof alter can be used to insert delete or update priority in queue",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "alter",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003ePSQ b a-\u003ePSQ b a",
        "package": "PSQueue",
        "partial": "",
        "signature": "(Maybe p-\u003eMaybe p)-\u003ek-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:atMost",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(r(log n - log r)\u003c/em\u003e \u003ccode\u003eatMost p q\u003c/code\u003e is a list of all the bindings in \u003ccode\u003eq\u003c/code\u003e with\n priority less than \u003ccode\u003ep\u003c/code\u003e, in order of ascending keys.\n Effectively, \n\u003c/p\u003e\u003cpre\u003e\n   atMost p' q = filter (\\(k:-\u003ep) -\u003e p\u003c=p') . toList\n\u003c/pre\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "p -\u003e PSQ k p -\u003e [Binding k p]",
        "fct-source": "src/Data-PSQueue.html#atMost",
        "fct-type": "function",
        "title": "atMost"
      },
      "index": {
        "description": "log log atMost is list of all the bindings in with priority less than in order of ascending keys Effectively atMost filter toList",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "atMost",
        "normalized": "a-\u003ePSQ b a-\u003e[Binding b a]",
        "package": "PSQueue",
        "partial": "Most",
        "signature": "p-\u003ePSQ k p-\u003e[Binding k p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:atMostRange",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(r(log n - log r))\u003c/em\u003e \u003ccode\u003eatMostRange p (l,u) q\u003c/code\u003e is a list of all the bindings in\n \u003ccode\u003eq\u003c/code\u003e with a priority less than \u003ccode\u003ep\u003c/code\u003e and a key in the range \u003ccode\u003e(l,u)\u003c/code\u003e inclusive.\n Effectively,\n\u003c/p\u003e\u003cpre\u003e\n    atMostRange p' (l,u) q = filter (\\(k:-\u003ep) -\u003e l\u003c=k && k\u003c=u ) . \u003ccode\u003e\u003ca\u003eatMost\u003c/a\u003e\u003c/code\u003e p'\n\u003c/pre\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "p -\u003e (k, k) -\u003e PSQ k p -\u003e [Binding k p]",
        "fct-source": "src/Data-PSQueue.html#atMostRange",
        "fct-type": "function",
        "title": "atMostRange"
      },
      "index": {
        "description": "log log atMostRange is list of all the bindings in with priority less than and key in the range inclusive Effectively atMostRange filter atMost",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "atMostRange",
        "normalized": "a-\u003e(b,b)-\u003ePSQ b a-\u003e[Binding b a]",
        "package": "PSQueue",
        "partial": "Most Range",
        "signature": "p-\u003e(k,k)-\u003ePSQ k p-\u003e[Binding k p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Remove a binding from the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "k -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Remove binding from the queue",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "delete",
        "normalized": "a-\u003ePSQ a b-\u003ePSQ a b",
        "package": "PSQueue",
        "partial": "",
        "signature": "k-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Remove the binding with the lowest priority.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "log Remove the binding with the lowest priority",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "deleteMin",
        "normalized": "PSQ a b-\u003ePSQ a b",
        "package": "PSQueue",
        "partial": "Min",
        "signature": "PSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:empty",
      "description": {
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "PSQ k p",
        "fct-source": "src/Data-PSQueue.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "empty",
        "normalized": "",
        "package": "PSQueue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The binding with the lowest priority.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "PSQ k p -\u003e Maybe (Binding k p)",
        "fct-source": "src/Data-PSQueue.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "The binding with the lowest priority",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "findMin",
        "normalized": "PSQ a b-\u003eMaybe(Binding a b)",
        "package": "PSQueue",
        "partial": "Min",
        "signature": "PSQ k p-\u003eMaybe(Binding k p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eLeft fold over the bindings in the queue, in key order.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "(b -\u003e Binding k p -\u003e b) -\u003e b -\u003e PSQ k p -\u003e b",
        "fct-source": "src/Data-PSQueue.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Left fold over the bindings in the queue in key order",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "foldl",
        "normalized": "(a-\u003eBinding b c-\u003ea)-\u003ea-\u003ePSQ b c-\u003ea",
        "package": "PSQueue",
        "partial": "",
        "signature": "(b-\u003eBinding k p-\u003eb)-\u003eb-\u003ePSQ k p-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eRight fold over the bindings in the queue, in key order.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "(Binding k p -\u003e b -\u003e b) -\u003e b -\u003e PSQ k p -\u003e b",
        "fct-source": "src/Data-PSQueue.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Right fold over the bindings in the queue in key order",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "foldr",
        "normalized": "(Binding a b-\u003ec-\u003ec)-\u003ec-\u003ePSQ a b-\u003ec",
        "package": "PSQueue",
        "partial": "",
        "signature": "(Binding k p-\u003eb-\u003eb)-\u003eb-\u003ePSQ k p-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Build a queue from a list of bindings in order of\n ascending keys. The precondition that the keys are ascending is not checked.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "[Binding k p] -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Build queue from list of bindings in order of ascending keys The precondition that the keys are ascending is not checked",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "fromAscList",
        "normalized": "[Binding a b]-\u003ePSQ a b",
        "package": "PSQueue",
        "partial": "Asc List",
        "signature": "[Binding k p]-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:fromDistinctAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Build a queue from a list of distinct bindings in order of\n ascending keys. The precondition that keys are distinct and ascending is not checked.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "[Binding k p] -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#fromDistinctAscList",
        "fct-type": "function",
        "title": "fromDistinctAscList"
      },
      "index": {
        "description": "Build queue from list of distinct bindings in order of ascending keys The precondition that keys are distinct and ascending is not checked",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "fromDistinctAscList",
        "normalized": "[Binding a b]-\u003ePSQ a b",
        "package": "PSQueue",
        "partial": "Distinct Asc List",
        "signature": "[Binding k p]-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e Build a queue from a list of bindings.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "[Binding k p] -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "log Build queue from list of bindings",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "fromList",
        "normalized": "[Binding a b]-\u003ePSQ a b",
        "package": "PSQueue",
        "partial": "List",
        "signature": "[Binding k p]-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Insert a binding into the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "k -\u003e p -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Insert binding into the queue",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "insert",
        "normalized": "a-\u003eb-\u003ePSQ a b-\u003ePSQ a b",
        "package": "PSQueue",
        "partial": "",
        "signature": "k-\u003ep-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Insert a binding with a combining function. \n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "(p -\u003e p -\u003e p) -\u003e k -\u003e p -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "log Insert binding with combining function",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003ePSQ b a-\u003ePSQ b a",
        "package": "PSQueue",
        "partial": "With",
        "signature": "(p-\u003ep-\u003ep)-\u003ek-\u003ep-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:key",
      "description": {
        "fct-descr": "\u003cp\u003eThe key of a binding\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "Binding k p -\u003e k",
        "fct-source": "src/Data-PSQueue.html#key",
        "fct-type": "function",
        "title": "key"
      },
      "index": {
        "description": "The key of binding",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "key",
        "normalized": "Binding a b-\u003ea",
        "package": "PSQueue",
        "partial": "",
        "signature": "Binding k p-\u003ek"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The keys of a priority queue\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "PSQ k p -\u003e [k]",
        "fct-source": "src/Data-PSQueue.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "The keys of priority queue",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "keys",
        "normalized": "PSQ a b-\u003e[a]",
        "package": "PSQueue",
        "partial": "",
        "signature": "PSQ k p-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e The priority of a given key, or Nothing if the key is not\n bound.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "k -\u003e PSQ k p -\u003e Maybe p",
        "fct-source": "src/Data-PSQueue.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "log The priority of given key or Nothing if the key is not bound",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "lookup",
        "normalized": "a-\u003ePSQ a b-\u003eMaybe b",
        "package": "PSQueue",
        "partial": "",
        "signature": "k-\u003ePSQ k p-\u003eMaybe p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Retrieve the binding with the least priority, and the rest of\n the queue stripped of that binding. \n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "PSQ k p -\u003e Maybe (Binding k p, PSQ k p)",
        "fct-source": "src/Data-PSQueue.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "log Retrieve the binding with the least priority and the rest of the queue stripped of that binding",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "minView",
        "normalized": "PSQ a b-\u003eMaybe(Binding a b,PSQ a b)",
        "package": "PSQueue",
        "partial": "View",
        "signature": "PSQ k p-\u003eMaybe(Binding k p,PSQ k p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e True if the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "PSQ k p -\u003e Bool",
        "fct-source": "src/Data-PSQueue.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "True if the queue is empty",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "null",
        "normalized": "PSQ a b-\u003eBool",
        "package": "PSQueue",
        "partial": "",
        "signature": "PSQ k p-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:prio",
      "description": {
        "fct-descr": "\u003cp\u003eThe priority of a binding\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "Binding k p -\u003e p",
        "fct-source": "src/Data-PSQueue.html#prio",
        "fct-type": "function",
        "title": "prio"
      },
      "index": {
        "description": "The priority of binding",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "prio",
        "normalized": "Binding a b-\u003eb",
        "package": "PSQueue",
        "partial": "",
        "signature": "Binding k p-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eO(1) Build a queue with one binding.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "k -\u003e p -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Build queue with one binding",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003ePSQ a b",
        "package": "PSQueue",
        "partial": "",
        "signature": "k-\u003ep-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The number of bindings in a queue.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "PSQ k p -\u003e Int",
        "fct-source": "src/Data-PSQueue.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of bindings in queue",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "size",
        "normalized": "PSQ a b-\u003eInt",
        "package": "PSQueue",
        "partial": "",
        "signature": "PSQ k p-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a queue to a list in ascending order of keys.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "PSQ k p -\u003e [Binding k p]",
        "fct-source": "src/Data-PSQueue.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Convert queue to list in ascending order of keys",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "toAscList",
        "normalized": "PSQ a b-\u003e[Binding a b]",
        "package": "PSQueue",
        "partial": "Asc List",
        "signature": "PSQ k p-\u003e[Binding k p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:toDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a queue to a list in descending order of keys.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "PSQ k p -\u003e [Binding k p]",
        "fct-source": "src/Data-PSQueue.html#toDescList",
        "fct-type": "function",
        "title": "toDescList"
      },
      "index": {
        "description": "Convert queue to list in descending order of keys",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "toDescList",
        "normalized": "PSQ a b-\u003e[Binding a b]",
        "package": "PSQueue",
        "partial": "Desc List",
        "signature": "PSQ k p-\u003e[Binding k p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a queue to a list.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "PSQ k p -\u003e [Binding k p]",
        "fct-source": "src/Data-PSQueue.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert queue to list",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "toList",
        "normalized": "PSQ a b-\u003e[Binding a b]",
        "package": "PSQueue",
        "partial": "List",
        "signature": "PSQ k p-\u003e[Binding k p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e The expression (\u003ccode\u003eupdate f k q\u003c/code\u003e) updates the\n priority \u003ccode\u003ep\u003c/code\u003e bound \u003ccode\u003ek\u003c/code\u003e (if it is in the queue). If (\u003ccode\u003ef p\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the binding is deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound\n to the new priority \u003ccode\u003ez\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "(p -\u003e Maybe p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "log The expression update updates the priority bound if it is in the queue If is Nothing the binding is deleted If it is Just the key is bound to the new priority",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003eb-\u003ePSQ b a-\u003ePSQ b a",
        "package": "PSQueue",
        "partial": "",
        "signature": "(p-\u003eMaybe p)-\u003ek-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:updateWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003eupdateWithKey f k q\u003c/code\u003e) updates the\n priority \u003ccode\u003ep\u003c/code\u003e bound \u003ccode\u003ek\u003c/code\u003e (if it is in the queue). If (\u003ccode\u003ef k p\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the binding is deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound\n to the new priority \u003ccode\u003ez\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PSQueue",
        "fct-package": "PSQueue",
        "fct-signature": "(k -\u003e p -\u003e Maybe p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
        "fct-source": "src/Data-PSQueue.html#updateWithKey",
        "fct-type": "function",
        "title": "updateWithKey"
      },
      "index": {
        "description": "log The expression updateWithKey updates the priority bound if it is in the queue If is Nothing the binding is deleted If it is Just the key is bound to the new priority",
        "hierarchy": "Data PSQueue",
        "module": "Data.PSQueue",
        "name": "updateWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003ePSQ a b-\u003ePSQ a b",
        "package": "PSQueue",
        "partial": "With Key",
        "signature": "(k-\u003ep-\u003eMaybe p)-\u003ek-\u003ePSQ k p-\u003ePSQ k p"
      }
    }
  }
]