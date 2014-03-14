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
        "word": "PSQueue"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003cem\u003epriority search queue\u003c/em\u003e (henceforth \u003cem\u003equeue\u003c/em\u003e) efficiently supports the\nopperations of both a search tree and a priority queue. A \u003ccode\u003e\u003ca\u003eBinding\u003c/a\u003e\u003c/code\u003e is a\nproduct of a key and a priority. Bindings can be inserted, deleted, modified\nand queried in logarithmic time, and the binding with the least priority can be\nretrieved in constant time. A queue can be built from a list of bindings,\nsorted by keys, in linear time.\n\u003c/p\u003e\u003cp\u003eThis implementation is due to Ralf Hinze.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Hinze, R., \u003cem\u003eA Simple Implementation Technique for Priority Search Queues\u003c/em\u003e, ICFP 2001, pp. 110-121\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ca\u003ehttp://citeseer.ist.psu.edu/hinze01simple.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PSQueue",
          "name": "PSQueue",
          "package": "PSQueue",
          "source": "src/Data-PSQueue.html",
          "type": "module"
        },
        "index": {
          "description": "priority search queue henceforth queue efficiently supports the opperations of both search tree and priority queue Binding is product of key and priority Bindings can be inserted deleted modified and queried in logarithmic time and the binding with the least priority can be retrieved in constant time queue can be built from list of bindings sorted by keys in linear time This implementation is due to Ralf Hinze Hinze Simple Implementation Technique for Priority Search Queues ICFP pp http citeseer.ist.psu.edu hinze01simple.html",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "PSQueue",
          "package": "PSQueue",
          "partial": "PSQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ek :-\u003e p\u003c/code\u003e binds the key \u003ccode\u003ek\u003c/code\u003e with the priority \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "Binding",
          "package": "PSQueue",
          "source": "src/Data-PSQueue.html#Binding",
          "type": "data"
        },
        "index": {
          "description": "binds the key with the priority",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "Binding",
          "package": "PSQueue",
          "partial": "Binding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#t:Binding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from keys \u003ccode\u003ek\u003c/code\u003e to priorites \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "PSQ",
          "package": "PSQueue",
          "source": "src/Data-PSQueue.html#PSQ",
          "type": "data"
        },
        "index": {
          "description": "mapping from keys to priorites",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "PSQ",
          "package": "PSQueue",
          "partial": "PSQ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#t:PSQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PSQueue",
          "name": ":-\u003e",
          "package": "PSQueue",
          "signature": "k :-\u003e p",
          "source": "src/Data-PSQueue.html#Binding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": ":-\u003e",
          "normalized": "a-\u003eb",
          "package": "PSQueue",
          "signature": "k-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Adjust the priority of a key.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "adjust",
          "package": "PSQueue",
          "signature": "(p -\u003e p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "log Adjust the priority of key",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003ePSQ b a-\u003ePSQ b a",
          "package": "PSQueue",
          "signature": "(p-\u003ep)-\u003ek-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Adjust the priority of a key.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "adjustWithKey",
          "package": "PSQueue",
          "signature": "(k -\u003e p -\u003e p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#adjustWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Adjust the priority of key",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "adjustWithKey",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003ePSQ a b-\u003ePSQ a b",
          "package": "PSQueue",
          "partial": "With Key",
          "signature": "(k-\u003ep-\u003ep)-\u003ek-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k q\u003c/code\u003e) alters the priority \u003ccode\u003ep\u003c/code\u003e bound to \u003ccode\u003ek\u003c/code\u003e, or absence thereof.\n alter can be used to insert, delete, or update a priority in a queue.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "alter",
          "package": "PSQueue",
          "signature": "(Maybe p -\u003e Maybe p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#alter",
          "type": "function"
        },
        "index": {
          "description": "log The expression alter alters the priority bound to or absence thereof alter can be used to insert delete or update priority in queue",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003ePSQ b a-\u003ePSQ b a",
          "package": "PSQueue",
          "signature": "(Maybe p-\u003eMaybe p)-\u003ek-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(r(log n - log r)\u003c/em\u003e \u003ccode\u003eatMost p q\u003c/code\u003e is a list of all the bindings in \u003ccode\u003eq\u003c/code\u003e with\n priority less than \u003ccode\u003ep\u003c/code\u003e, in order of ascending keys.\n Effectively, \n\u003c/p\u003e\u003cpre\u003e\n   atMost p' q = filter (\\(k:-\u003ep) -\u003e p\u003c=p') . toList\n\u003c/pre\u003e",
          "module": "Data.PSQueue",
          "name": "atMost",
          "package": "PSQueue",
          "signature": "p -\u003e PSQ k p -\u003e [Binding k p]",
          "source": "src/Data-PSQueue.html#atMost",
          "type": "function"
        },
        "index": {
          "description": "log log atMost is list of all the bindings in with priority less than in order of ascending keys Effectively atMost filter toList",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "atMost",
          "normalized": "a-\u003ePSQ b a-\u003e[Binding b a]",
          "package": "PSQueue",
          "partial": "Most",
          "signature": "p-\u003ePSQ k p-\u003e[Binding k p]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:atMost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(r(log n - log r))\u003c/em\u003e \u003ccode\u003eatMostRange p (l,u) q\u003c/code\u003e is a list of all the bindings in\n \u003ccode\u003eq\u003c/code\u003e with a priority less than \u003ccode\u003ep\u003c/code\u003e and a key in the range \u003ccode\u003e(l,u)\u003c/code\u003e inclusive.\n Effectively,\n\u003c/p\u003e\u003cpre\u003e\n    atMostRange p' (l,u) q = filter (\\(k:-\u003ep) -\u003e l\u003c=k && k\u003c=u ) . \u003ccode\u003e\u003ca\u003eatMost\u003c/a\u003e\u003c/code\u003e p'\n\u003c/pre\u003e",
          "module": "Data.PSQueue",
          "name": "atMostRange",
          "package": "PSQueue",
          "signature": "p -\u003e (k, k) -\u003e PSQ k p -\u003e [Binding k p]",
          "source": "src/Data-PSQueue.html#atMostRange",
          "type": "function"
        },
        "index": {
          "description": "log log atMostRange is list of all the bindings in with priority less than and key in the range inclusive Effectively atMostRange filter atMost",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "atMostRange",
          "normalized": "a-\u003e(b,b)-\u003ePSQ b a-\u003e[Binding b a]",
          "package": "PSQueue",
          "partial": "Most Range",
          "signature": "p-\u003e(k,k)-\u003ePSQ k p-\u003e[Binding k p]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:atMostRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Remove a binding from the queue.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "delete",
          "package": "PSQueue",
          "signature": "k -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#delete",
          "type": "function"
        },
        "index": {
          "description": "log Remove binding from the queue",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "delete",
          "normalized": "a-\u003ePSQ a b-\u003ePSQ a b",
          "package": "PSQueue",
          "signature": "k-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Remove the binding with the lowest priority.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "deleteMin",
          "package": "PSQueue",
          "signature": "PSQ k p -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "log Remove the binding with the lowest priority",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "deleteMin",
          "normalized": "PSQ a b-\u003ePSQ a b",
          "package": "PSQueue",
          "partial": "Min",
          "signature": "PSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PSQueue",
          "name": "empty",
          "package": "PSQueue",
          "signature": "PSQ k p",
          "source": "src/Data-PSQueue.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "empty",
          "package": "PSQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The binding with the lowest priority.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "findMin",
          "package": "PSQueue",
          "signature": "PSQ k p -\u003e Maybe (Binding k p)",
          "source": "src/Data-PSQueue.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "The binding with the lowest priority",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "findMin",
          "normalized": "PSQ a b-\u003eMaybe(Binding a b)",
          "package": "PSQueue",
          "partial": "Min",
          "signature": "PSQ k p-\u003eMaybe(Binding k p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft fold over the bindings in the queue, in key order.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "foldl",
          "package": "PSQueue",
          "signature": "(b -\u003e Binding k p -\u003e b) -\u003e b -\u003e PSQ k p -\u003e b",
          "source": "src/Data-PSQueue.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Left fold over the bindings in the queue in key order",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "foldl",
          "normalized": "(a-\u003eBinding b c-\u003ea)-\u003ea-\u003ePSQ b c-\u003ea",
          "package": "PSQueue",
          "signature": "(b-\u003eBinding k p-\u003eb)-\u003eb-\u003ePSQ k p-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight fold over the bindings in the queue, in key order.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "foldr",
          "package": "PSQueue",
          "signature": "(Binding k p -\u003e b -\u003e b) -\u003e b -\u003e PSQ k p -\u003e b",
          "source": "src/Data-PSQueue.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Right fold over the bindings in the queue in key order",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "foldr",
          "normalized": "(Binding a b-\u003ec-\u003ec)-\u003ec-\u003ePSQ a b-\u003ec",
          "package": "PSQueue",
          "signature": "(Binding k p-\u003eb-\u003eb)-\u003eb-\u003ePSQ k p-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Build a queue from a list of bindings in order of\n ascending keys. The precondition that the keys are ascending is not checked.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "fromAscList",
          "package": "PSQueue",
          "signature": "[Binding k p] -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "Build queue from list of bindings in order of ascending keys The precondition that the keys are ascending is not checked",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "fromAscList",
          "normalized": "[Binding a b]-\u003ePSQ a b",
          "package": "PSQueue",
          "partial": "Asc List",
          "signature": "[Binding k p]-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Build a queue from a list of distinct bindings in order of\n ascending keys. The precondition that keys are distinct and ascending is not checked.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "fromDistinctAscList",
          "package": "PSQueue",
          "signature": "[Binding k p] -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#fromDistinctAscList",
          "type": "function"
        },
        "index": {
          "description": "Build queue from list of distinct bindings in order of ascending keys The precondition that keys are distinct and ascending is not checked",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "fromDistinctAscList",
          "normalized": "[Binding a b]-\u003ePSQ a b",
          "package": "PSQueue",
          "partial": "Distinct Asc List",
          "signature": "[Binding k p]-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e Build a queue from a list of bindings.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "fromList",
          "package": "PSQueue",
          "signature": "[Binding k p] -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "log Build queue from list of bindings",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "fromList",
          "normalized": "[Binding a b]-\u003ePSQ a b",
          "package": "PSQueue",
          "partial": "List",
          "signature": "[Binding k p]-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Insert a binding into the queue.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "insert",
          "package": "PSQueue",
          "signature": "k -\u003e p -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Insert binding into the queue",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "insert",
          "normalized": "a-\u003eb-\u003ePSQ a b-\u003ePSQ a b",
          "package": "PSQueue",
          "signature": "k-\u003ep-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Insert a binding with a combining function. \n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "insertWith",
          "package": "PSQueue",
          "signature": "(p -\u003e p -\u003e p) -\u003e k -\u003e p -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "log Insert binding with combining function",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003ePSQ b a-\u003ePSQ b a",
          "package": "PSQueue",
          "partial": "With",
          "signature": "(p-\u003ep-\u003ep)-\u003ek-\u003ep-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe key of a binding\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "key",
          "package": "PSQueue",
          "signature": "Binding k p -\u003e k",
          "source": "src/Data-PSQueue.html#key",
          "type": "function"
        },
        "index": {
          "description": "The key of binding",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "key",
          "normalized": "Binding a b-\u003ea",
          "package": "PSQueue",
          "signature": "Binding k p-\u003ek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The keys of a priority queue\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "keys",
          "package": "PSQueue",
          "signature": "PSQ k p -\u003e [k]",
          "source": "src/Data-PSQueue.html#keys",
          "type": "function"
        },
        "index": {
          "description": "The keys of priority queue",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "keys",
          "normalized": "PSQ a b-\u003e[a]",
          "package": "PSQueue",
          "signature": "PSQ k p-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e The priority of a given key, or Nothing if the key is not\n bound.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "lookup",
          "package": "PSQueue",
          "signature": "k -\u003e PSQ k p -\u003e Maybe p",
          "source": "src/Data-PSQueue.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log The priority of given key or Nothing if the key is not bound",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "lookup",
          "normalized": "a-\u003ePSQ a b-\u003eMaybe b",
          "package": "PSQueue",
          "signature": "k-\u003ePSQ k p-\u003eMaybe p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e Retrieve the binding with the least priority, and the rest of\n the queue stripped of that binding. \n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "minView",
          "package": "PSQueue",
          "signature": "PSQ k p -\u003e Maybe (Binding k p, PSQ k p)",
          "source": "src/Data-PSQueue.html#minView",
          "type": "function"
        },
        "index": {
          "description": "log Retrieve the binding with the least priority and the rest of the queue stripped of that binding",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "minView",
          "normalized": "PSQ a b-\u003eMaybe(Binding a b,PSQ a b)",
          "package": "PSQueue",
          "partial": "View",
          "signature": "PSQ k p-\u003eMaybe(Binding k p,PSQ k p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e True if the queue is empty.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "null",
          "package": "PSQueue",
          "signature": "PSQ k p -\u003e Bool",
          "source": "src/Data-PSQueue.html#null",
          "type": "function"
        },
        "index": {
          "description": "True if the queue is empty",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "null",
          "normalized": "PSQ a b-\u003eBool",
          "package": "PSQueue",
          "signature": "PSQ k p-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe priority of a binding\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "prio",
          "package": "PSQueue",
          "signature": "Binding k p -\u003e p",
          "source": "src/Data-PSQueue.html#prio",
          "type": "function"
        },
        "index": {
          "description": "The priority of binding",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "prio",
          "normalized": "Binding a b-\u003eb",
          "package": "PSQueue",
          "signature": "Binding k p-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:prio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Build a queue with one binding.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "singleton",
          "package": "PSQueue",
          "signature": "k -\u003e p -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Build queue with one binding",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003ePSQ a b",
          "package": "PSQueue",
          "signature": "k-\u003ep-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The number of bindings in a queue.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "size",
          "package": "PSQueue",
          "signature": "PSQ k p -\u003e Int",
          "source": "src/Data-PSQueue.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of bindings in queue",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "size",
          "normalized": "PSQ a b-\u003eInt",
          "package": "PSQueue",
          "signature": "PSQ k p-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a queue to a list in ascending order of keys.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "toAscList",
          "package": "PSQueue",
          "signature": "PSQ k p -\u003e [Binding k p]",
          "source": "src/Data-PSQueue.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Convert queue to list in ascending order of keys",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "toAscList",
          "normalized": "PSQ a b-\u003e[Binding a b]",
          "package": "PSQueue",
          "partial": "Asc List",
          "signature": "PSQ k p-\u003e[Binding k p]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a queue to a list in descending order of keys.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "toDescList",
          "package": "PSQueue",
          "signature": "PSQ k p -\u003e [Binding k p]",
          "source": "src/Data-PSQueue.html#toDescList",
          "type": "function"
        },
        "index": {
          "description": "Convert queue to list in descending order of keys",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "toDescList",
          "normalized": "PSQ a b-\u003e[Binding a b]",
          "package": "PSQueue",
          "partial": "Desc List",
          "signature": "PSQ k p-\u003e[Binding k p]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:toDescList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a queue to a list.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "toList",
          "package": "PSQueue",
          "signature": "PSQ k p -\u003e [Binding k p]",
          "source": "src/Data-PSQueue.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert queue to list",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "toList",
          "normalized": "PSQ a b-\u003e[Binding a b]",
          "package": "PSQueue",
          "partial": "List",
          "signature": "PSQ k p-\u003e[Binding k p]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e The expression (\u003ccode\u003eupdate f k q\u003c/code\u003e) updates the\n priority \u003ccode\u003ep\u003c/code\u003e bound \u003ccode\u003ek\u003c/code\u003e (if it is in the queue). If (\u003ccode\u003ef p\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the binding is deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound\n to the new priority \u003ccode\u003ez\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "update",
          "package": "PSQueue",
          "signature": "(p -\u003e Maybe p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#update",
          "type": "function"
        },
        "index": {
          "description": "log The expression update updates the priority bound if it is in the queue If is Nothing the binding is deleted If it is Just the key is bound to the new priority",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003ePSQ b a-\u003ePSQ b a",
          "package": "PSQueue",
          "signature": "(p-\u003eMaybe p)-\u003ek-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003eupdateWithKey f k q\u003c/code\u003e) updates the\n priority \u003ccode\u003ep\u003c/code\u003e bound \u003ccode\u003ek\u003c/code\u003e (if it is in the queue). If (\u003ccode\u003ef k p\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the binding is deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound\n to the new priority \u003ccode\u003ez\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PSQueue",
          "name": "updateWithKey",
          "package": "PSQueue",
          "signature": "(k -\u003e p -\u003e Maybe p) -\u003e k -\u003e PSQ k p -\u003e PSQ k p",
          "source": "src/Data-PSQueue.html#updateWithKey",
          "type": "function"
        },
        "index": {
          "description": "log The expression updateWithKey updates the priority bound if it is in the queue If is Nothing the binding is deleted If it is Just the key is bound to the new priority",
          "hierarchy": "Data PSQueue",
          "module": "Data.PSQueue",
          "name": "updateWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003ePSQ a b-\u003ePSQ a b",
          "package": "PSQueue",
          "partial": "With Key",
          "signature": "(k-\u003ep-\u003eMaybe p)-\u003ek-\u003ePSQ k p-\u003ePSQ k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PSQueue/docs/Data-PSQueue.html#v:updateWithKey"
      }
    }
  ]
]