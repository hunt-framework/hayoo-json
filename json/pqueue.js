[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral purpose priority queue, supporting view-maximum operations.\n\u003c/p\u003e\u003cp\u003eAn amortized running time is given for each operation, with \u003cem\u003en\u003c/em\u003e referring\n to the length of the sequence and \u003cem\u003ek\u003c/em\u003e being the integral index used by\n some operations.  These bounds hold even in a persistent (shared) setting.\n\u003c/p\u003e\u003cp\u003eThis implementation is based on a binomial heap augmented with a global root.\n The spine of the heap is maintained lazily.  To force the spine of the heap,\n use \u003ccode\u003e\u003ca\u003eseqSpine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis implementation does not guarantee stable behavior.\n\u003c/p\u003e\u003cp\u003eThis implementation offers a number of methods of the form \u003ccode\u003exxxU\u003c/code\u003e, where \u003ccode\u003eU\u003c/code\u003e stands for\n unordered.  No guarantees whatsoever are made on the execution or traversal order of\n these functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "module",
        "fct-source": "src/Data-PQueue-Max.html",
        "fct-type": "module",
        "title": "Max"
      },
      "index": {
        "description": "General purpose priority queue supporting view-maximum operations An amortized running time is given for each operation with referring to the length of the sequence and being the integral index used by some operations These bounds hold even in persistent shared setting This implementation is based on binomial heap augmented with global root The spine of the heap is maintained lazily To force the spine of the heap use seqSpine This implementation does not guarantee stable behavior This implementation offers number of methods of the form xxxU where stands for unordered No guarantees whatsoever are made on the execution or traversal order of these functions",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "Max",
        "normalized": "",
        "package": "pqueue",
        "partial": "Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#t:MaxQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA priority queue with elements of type \u003ccode\u003ea\u003c/code\u003e.  Supports extracting the maximum element.  \n Implemented as a wrapper around \u003ccode\u003e\u003ca\u003eMinQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "data",
        "fct-source": "src/Data-PQueue-Max.html#MaxQueue",
        "fct-type": "data",
        "title": "MaxQueue"
      },
      "index": {
        "description": "priority queue with elements of type Supports extracting the maximum element Implemented as wrapper around MinQueue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "MaxQueue",
        "normalized": "",
        "package": "pqueue",
        "partial": "Max Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:-33--33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  Returns the \u003ccode\u003e(k+1)\u003c/code\u003eth largest element of the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e Int -\u003e a",
        "fct-source": "src/Data-PQueue-Max.html#%21%21",
        "fct-type": "function",
        "title": "(!!)"
      },
      "index": {
        "description": "log Returns the th largest element of the queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "(!!) !!",
        "normalized": "MaxQueue a-\u003eInt-\u003ea",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxQueue a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a queue \u003ccode\u003equeue\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003equeue\u003c/code\u003e of elements that\n \u003cem\u003edo not satisfy\u003c/em\u003e \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MaxQueue a -\u003e ([a], MaxQueue a)",
        "fct-source": "src/Data-PQueue-Max.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "break applied to predicate and queue queue returns tuple where first element is longest prefix possibly empty of queue of elements that do not satisfy and second element is the remainder of the queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "break",
        "normalized": "(a-\u003eBool)-\u003eMaxQueue a-\u003e([a],MaxQueue a)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMaxQueue a-\u003e([a],MaxQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:deleteFindMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Extracts the maximum element of the queue.  Throws an error on an empty queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e (a, MaxQueue a)",
        "fct-source": "src/Data-PQueue-Max.html#deleteFindMax",
        "fct-type": "function",
        "title": "deleteFindMax"
      },
      "index": {
        "description": "log Extracts the maximum element of the queue Throws an error on an empty queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "deleteFindMax",
        "normalized": "MaxQueue a-\u003e(a,MaxQueue a)",
        "package": "pqueue",
        "partial": "Find Max",
        "signature": "MaxQueue a-\u003e(a,MaxQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:deleteMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Deletes the maximum element of the queue.  Does nothing on an empty queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e MaxQueue a",
        "fct-source": "src/Data-PQueue-Max.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "log Deletes the maximum element of the queue Does nothing on an empty queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "deleteMax",
        "normalized": "MaxQueue a-\u003eMaxQueue a",
        "package": "pqueue",
        "partial": "Max",
        "signature": "MaxQueue a-\u003eMaxQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  Returns the queue with the \u003ccode\u003ek\u003c/code\u003e largest elements deleted, or the empty queue if \u003ccode\u003ek \u003e= n\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "Int -\u003e MaxQueue a -\u003e MaxQueue a",
        "fct-source": "src/Data-PQueue-Max.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "log Returns the queue with the largest elements deleted or the empty queue if",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "drop",
        "normalized": "Int-\u003eMaxQueue a-\u003eMaxQueue a",
        "package": "pqueue",
        "partial": "",
        "signature": "Int-\u003eMaxQueue a-\u003eMaxQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep queue\u003c/code\u003e returns the queue remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep queue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MaxQueue a -\u003e MaxQueue a",
        "fct-source": "src/Data-PQueue-Max.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "dropWhile queue returns the queue remaining after takeWhile queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003eMaxQueue a-\u003eMaxQueue a",
        "package": "pqueue",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eMaxQueue a-\u003eMaxQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:elemsU",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003etoListU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Max.html#elemsU",
        "fct-type": "function",
        "title": "elemsU"
      },
      "index": {
        "description": "Equivalent to toListU",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "elemsU",
        "normalized": "MaxQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The empty priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a",
        "fct-source": "src/Data-PQueue-Max.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty priority queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "empty",
        "normalized": "",
        "package": "pqueue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns a queue of those elements which satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MaxQueue a -\u003e MaxQueue a",
        "fct-source": "src/Data-PQueue-Max.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Returns queue of those elements which satisfy the predicate",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eMaxQueue a-\u003eMaxQueue a",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMaxQueue a-\u003eMaxQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Returns the maximum element of the queue.  Throws an error on an empty queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e a",
        "fct-source": "src/Data-PQueue-Max.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "Returns the maximum element of the queue Throws an error on an empty queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "findMax",
        "normalized": "MaxQueue a-\u003ea",
        "package": "pqueue",
        "partial": "Max",
        "signature": "MaxQueue a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:foldlAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Performs a left-fold on the elements of a priority queue in descending order.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldlAsc\u003c/a\u003e\u003c/code\u003e f z q == \u003ccode\u003e\u003ca\u003efoldrDesc\u003c/a\u003e\u003c/code\u003e (flip f) z q\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e MaxQueue a -\u003e b",
        "fct-source": "src/Data-PQueue-Max.html#foldlAsc",
        "fct-type": "function",
        "title": "foldlAsc"
      },
      "index": {
        "description": "log Performs left-fold on the elements of priority queue in descending order foldlAsc foldrDesc flip",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "foldlAsc",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMaxQueue b-\u003ea",
        "package": "pqueue",
        "partial": "Asc",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eMaxQueue a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:foldlDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Performs a left-fold on the elements of a priority queue in descending order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e MaxQueue a -\u003e b",
        "fct-source": "src/Data-PQueue-Max.html#foldlDesc",
        "fct-type": "function",
        "title": "foldlDesc"
      },
      "index": {
        "description": "log Performs left-fold on the elements of priority queue in descending order",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "foldlDesc",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMaxQueue b-\u003ea",
        "package": "pqueue",
        "partial": "Desc",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eMaxQueue a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:foldlU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Unordered left fold on a priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e MaxQueue a -\u003e b",
        "fct-source": "src/Data-PQueue-Max.html#foldlU",
        "fct-type": "function",
        "title": "foldlU"
      },
      "index": {
        "description": "Unordered left fold on priority queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "foldlU",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMaxQueue b-\u003ea",
        "package": "pqueue",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eMaxQueue a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:foldrAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Performs a right-fold on the elements of a priority queue in ascending order.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldrAsc\u003c/a\u003e\u003c/code\u003e f z q == \u003ccode\u003e\u003ca\u003efoldlDesc\u003c/a\u003e\u003c/code\u003e (flip f) z q\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e MaxQueue a -\u003e b",
        "fct-source": "src/Data-PQueue-Max.html#foldrAsc",
        "fct-type": "function",
        "title": "foldrAsc"
      },
      "index": {
        "description": "log Performs right-fold on the elements of priority queue in ascending order foldrAsc foldlDesc flip",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "foldrAsc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMaxQueue a-\u003eb",
        "package": "pqueue",
        "partial": "Asc",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMaxQueue a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:foldrDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Performs a right-fold on the elements of a priority queue in descending order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e MaxQueue a -\u003e b",
        "fct-source": "src/Data-PQueue-Max.html#foldrDesc",
        "fct-type": "function",
        "title": "foldrDesc"
      },
      "index": {
        "description": "log Performs right-fold on the elements of priority queue in descending order",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "foldrDesc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMaxQueue a-\u003eb",
        "package": "pqueue",
        "partial": "Desc",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMaxQueue a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:foldrU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Unordered right fold on a priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e MaxQueue a -\u003e b",
        "fct-source": "src/Data-PQueue-Max.html#foldrU",
        "fct-type": "function",
        "title": "foldrU"
      },
      "index": {
        "description": "Unordered right fold on priority queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "foldrU",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMaxQueue a-\u003eb",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMaxQueue a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Constructs a priority queue from an ascending list.  \u003cem\u003eWarning\u003c/em\u003e: Does not check the precondition. \n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "[a] -\u003e MaxQueue a",
        "fct-source": "src/Data-PQueue-Max.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Constructs priority queue from an ascending list Warning Does not check the precondition",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "fromAscList",
        "normalized": "[a]-\u003eMaxQueue a",
        "package": "pqueue",
        "partial": "Asc List",
        "signature": "[a]-\u003eMaxQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:fromDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Constructs a priority queue from a descending list.  \u003cem\u003eWarning\u003c/em\u003e: Does not check the precondition.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "[a] -\u003e MaxQueue a",
        "fct-source": "src/Data-PQueue-Max.html#fromDescList",
        "fct-type": "function",
        "title": "fromDescList"
      },
      "index": {
        "description": "Constructs priority queue from descending list Warning Does not check the precondition",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "fromDescList",
        "normalized": "[a]-\u003eMaxQueue a",
        "package": "pqueue",
        "partial": "Desc List",
        "signature": "[a]-\u003eMaxQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Constructs a priority queue from an unordered list.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "[a] -\u003e MaxQueue a",
        "fct-source": "src/Data-PQueue-Max.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "log Constructs priority queue from an unordered list",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "fromList",
        "normalized": "[a]-\u003eMaxQueue a",
        "package": "pqueue",
        "partial": "List",
        "signature": "[a]-\u003eMaxQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:getMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The top (maximum) element of the queue, if there is one.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e Maybe a",
        "fct-source": "src/Data-PQueue-Max.html#getMax",
        "fct-type": "function",
        "title": "getMax"
      },
      "index": {
        "description": "The top maximum element of the queue if there is one",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "getMax",
        "normalized": "MaxQueue a-\u003eMaybe a",
        "package": "pqueue",
        "partial": "Max",
        "signature": "MaxQueue a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Insert an element into the priority queue.  \n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "a -\u003e MaxQueue a -\u003e MaxQueue a",
        "fct-source": "src/Data-PQueue-Max.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert an element into the priority queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "insert",
        "normalized": "a-\u003eMaxQueue a-\u003eMaxQueue a",
        "package": "pqueue",
        "partial": "",
        "signature": "a-\u003eMaxQueue a-\u003eMaxQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:keysQueue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Constructs a priority queue from the keys of a \u003ccode\u003e\u003ca\u003eMaxPQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e MaxQueue k",
        "fct-source": "src/Data-PQueue-Max.html#keysQueue",
        "fct-type": "function",
        "title": "keysQueue"
      },
      "index": {
        "description": "Constructs priority queue from the keys of MaxPQueue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "keysQueue",
        "normalized": "MaxPQueue a b-\u003eMaxQueue a",
        "package": "pqueue",
        "partial": "Queue",
        "signature": "MaxPQueue k a-\u003eMaxQueue k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the list obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element\n of \u003ccode\u003exs\u003c/code\u003e, i.e.,\n\u003c/p\u003e\u003cpre\u003e map f [x1, x2, ..., xn] == [f x1, f x2, ..., f xn]\n map f [x1, x2, ...] == [f x1, f x2, ...]\n\u003c/pre\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "map xs is the list obtained by applying to each element of xs i.e map x1 x2 xn x1 x2 xn map x1 x2 x1 x2",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:mapEither",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Maps a function over the elements of the queue, and separates the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Either b c) -\u003e MaxQueue a -\u003e (MaxQueue b, MaxQueue c)",
        "fct-source": "src/Data-PQueue-Max.html#mapEither",
        "fct-type": "function",
        "title": "mapEither"
      },
      "index": {
        "description": "Maps function over the elements of the queue and separates the Left and Right values",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "mapEither",
        "normalized": "(a-\u003eEither b c)-\u003eMaxQueue a-\u003e(MaxQueue b,MaxQueue c)",
        "package": "pqueue",
        "partial": "Either",
        "signature": "(a-\u003eEither b c)-\u003eMaxQueue a-\u003e(MaxQueue b,MaxQueue c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Maps a function over the elements of the queue, and collects the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Maybe b) -\u003e MaxQueue a -\u003e MaxQueue b",
        "fct-source": "src/Data-PQueue-Max.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Maps function over the elements of the queue and collects the Just values",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eMaxQueue a-\u003eMaxQueue b",
        "package": "pqueue",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eMaxQueue a-\u003eMaxQueue b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:mapU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Assumes that the function it is given is monotonic, and applies this function to every element of the priority queue.\n \u003cem\u003eDoes not check the precondition\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b) -\u003e MaxQueue a -\u003e MaxQueue b",
        "fct-source": "src/Data-PQueue-Max.html#mapU",
        "fct-type": "function",
        "title": "mapU"
      },
      "index": {
        "description": "Assumes that the function it is given is monotonic and applies this function to every element of the priority queue Does not check the precondition",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "mapU",
        "normalized": "(a-\u003eb)-\u003eMaxQueue a-\u003eMaxQueue b",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eMaxQueue a-\u003eMaxQueue b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:maxView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Extract the top (maximum) element of the sequence, if there is one.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e Maybe (a, MaxQueue a)",
        "fct-source": "src/Data-PQueue-Max.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "log Extract the top maximum element of the sequence if there is one",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "maxView",
        "normalized": "MaxQueue a-\u003eMaybe(a,MaxQueue a)",
        "package": "pqueue",
        "partial": "View",
        "signature": "MaxQueue a-\u003eMaybe(a,MaxQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Is this the empty priority queue?\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e Bool",
        "fct-source": "src/Data-PQueue-Max.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is this the empty priority queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "null",
        "normalized": "MaxQueue a-\u003eBool",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxQueue a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns a pair of queues, where the left queue contains those elements that satisfy the predicate,\n and the right queue contains those that do not.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MaxQueue a -\u003e (MaxQueue a, MaxQueue a)",
        "fct-source": "src/Data-PQueue-Max.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Returns pair of queues where the left queue contains those elements that satisfy the predicate and the right queue contains those that do not",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eMaxQueue a-\u003e(MaxQueue a,MaxQueue a)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMaxQueue a-\u003e(MaxQueue a,MaxQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:seqSpine",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Forces the spine of the heap.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e b -\u003e b",
        "fct-source": "src/Data-PQueue-Max.html#seqSpine",
        "fct-type": "function",
        "title": "seqSpine"
      },
      "index": {
        "description": "log Forces the spine of the heap",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "seqSpine",
        "normalized": "MaxQueue a-\u003eb-\u003eb",
        "package": "pqueue",
        "partial": "Spine",
        "signature": "MaxQueue a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Construct a priority queue with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "a -\u003e MaxQueue a",
        "fct-source": "src/Data-PQueue-Max.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Construct priority queue with single element",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "singleton",
        "normalized": "a-\u003eMaxQueue a",
        "package": "pqueue",
        "partial": "",
        "signature": "a-\u003eMaxQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The number of elements in the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e Int",
        "fct-source": "src/Data-PQueue-Max.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "size",
        "normalized": "MaxQueue a-\u003eInt",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxQueue a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a queue \u003ccode\u003equeue\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003equeue\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MaxQueue a -\u003e ([a], MaxQueue a)",
        "fct-source": "src/Data-PQueue-Max.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "span applied to predicate and queue queue returns tuple where first element is longest prefix possibly empty of queue of elements that satisfy and second element is the remainder of the queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003eMaxQueue a-\u003e([a],MaxQueue a)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMaxQueue a-\u003e([a],MaxQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e(take k queue, drop k queue)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "Int -\u003e MaxQueue a -\u003e ([a], MaxQueue a)",
        "fct-source": "src/Data-PQueue-Max.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "log Equivalent to take queue drop queue",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "splitAt",
        "normalized": "Int-\u003eMaxQueue a-\u003e([a],MaxQueue a)",
        "package": "pqueue",
        "partial": "At",
        "signature": "Int-\u003eMaxQueue a-\u003e([a],MaxQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  Returns the list of the \u003ccode\u003ek\u003c/code\u003e largest elements of the queue, in descending order, or\n all elements of the queue, if \u003ccode\u003ek \u003e= n\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "Int -\u003e MaxQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Max.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "log Returns the list of the largest elements of the queue in descending order or all elements of the queue if",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "take",
        "normalized": "Int-\u003eMaxQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "",
        "signature": "Int-\u003eMaxQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a queue \u003ccode\u003equeue\u003c/code\u003e, returns the\n longest prefix (possibly empty) of \u003ccode\u003equeue\u003c/code\u003e of elements that satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MaxQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Max.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "takeWhile applied to predicate and queue queue returns the longest prefix possibly empty of queue of elements that satisfy",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003eMaxQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eMaxQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Extracts the elements of the priority queue in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Max.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "log Extracts the elements of the priority queue in ascending order",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "toAscList",
        "normalized": "MaxQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "Asc List",
        "signature": "MaxQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:toDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Extracts the elements of the priority queue in descending order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Max.html#toDescList",
        "fct-type": "function",
        "title": "toDescList"
      },
      "index": {
        "description": "log Extracts the elements of the priority queue in descending order",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "toDescList",
        "normalized": "MaxQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "Desc List",
        "signature": "MaxQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns the elements of the priority queue in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Max.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Returns the elements of the priority queue in no particular order",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "toList",
        "normalized": "MaxQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "List",
        "signature": "MaxQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:toListU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns a list of the elements of the priority queue, in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Max.html#toListU",
        "fct-type": "function",
        "title": "toListU"
      },
      "index": {
        "description": "Returns list of the elements of the priority queue in no particular order",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "toListU",
        "normalized": "MaxQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "List",
        "signature": "MaxQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log (min(n1,n2)))\u003c/em\u003e.  Take the union of two priority queues.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxQueue a -\u003e MaxQueue a -\u003e MaxQueue a",
        "fct-source": "src/Data-PQueue-Max.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "log min n1 n2 Take the union of two priority queues",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "union",
        "normalized": "MaxQueue a-\u003eMaxQueue a-\u003eMaxQueue a",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxQueue a-\u003eMaxQueue a-\u003eMaxQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Max.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the union of a list of priority queues.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Max",
        "fct-package": "pqueue",
        "fct-signature": "[MaxQueue a] -\u003e MaxQueue a",
        "fct-source": "src/Data-PQueue-Max.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "Takes the union of list of priority queues Equivalent to foldl union empty",
        "hierarchy": "Data PQueue Max",
        "module": "Data.PQueue.Max",
        "name": "unions",
        "normalized": "[MaxQueue a]-\u003eMaxQueue a",
        "package": "pqueue",
        "partial": "",
        "signature": "[MaxQueue a]-\u003eMaxQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral purpose priority queue, supporting extract-minimum operations.\n\u003c/p\u003e\u003cp\u003eAn amortized running time is given for each operation, with \u003cem\u003en\u003c/em\u003e referring\n to the length of the sequence and \u003cem\u003ek\u003c/em\u003e being the integral index used by\n some operations.  These bounds hold even in a persistent (shared) setting.\n\u003c/p\u003e\u003cp\u003eThis implementation is based on a binomial heap augmented with a global root.\n The spine of the heap is maintained lazily.  To force the spine of the heap,\n use \u003ccode\u003e\u003ca\u003eseqSpine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis implementation does not guarantee stable behavior.\n\u003c/p\u003e\u003cp\u003eThis implementation offers a number of methods of the form \u003ccode\u003exxxU\u003c/code\u003e, where \u003ccode\u003eU\u003c/code\u003e stands for\n unordered.  No guarantees whatsoever are made on the execution or traversal order of\n these functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "module",
        "fct-source": "src/Data-PQueue-Min.html",
        "fct-type": "module",
        "title": "Min"
      },
      "index": {
        "description": "General purpose priority queue supporting extract-minimum operations An amortized running time is given for each operation with referring to the length of the sequence and being the integral index used by some operations These bounds hold even in persistent shared setting This implementation is based on binomial heap augmented with global root The spine of the heap is maintained lazily To force the spine of the heap use seqSpine This implementation does not guarantee stable behavior This implementation offers number of methods of the form xxxU where stands for unordered No guarantees whatsoever are made on the execution or traversal order of these functions",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "Min",
        "normalized": "",
        "package": "pqueue",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#t:MinQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA priority queue with elements of type \u003ccode\u003ea\u003c/code\u003e.  Supports extracting the minimum element.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "data",
        "fct-source": "src/Data-PQueue-Internals.html#MinQueue",
        "fct-type": "data",
        "title": "MinQueue"
      },
      "index": {
        "description": "priority queue with elements of type Supports extracting the minimum element",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "MinQueue",
        "normalized": "",
        "package": "pqueue",
        "partial": "Min Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:-33--33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  Index (subscript) operator, starting from 0.  \u003ccode\u003equeue !! k\u003c/code\u003e returns the \u003ccode\u003e(k+1)\u003c/code\u003eth smallest \n element in the queue.  Equivalent to \u003ccode\u003etoAscList queue !! k\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e Int -\u003e a",
        "fct-source": "src/Data-PQueue-Min.html#%21%21",
        "fct-type": "function",
        "title": "(!!)"
      },
      "index": {
        "description": "log Index subscript operator starting from queue returns the th smallest element in the queue Equivalent to toAscList queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "(!!) !!",
        "normalized": "MinQueue a-\u003eInt-\u003ea",
        "package": "pqueue",
        "partial": "",
        "signature": "MinQueue a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a queue \u003ccode\u003equeue\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003equeue\u003c/code\u003e of elements that\n \u003cem\u003edo not satisfy\u003c/em\u003e \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinQueue a -\u003e ([a], MinQueue a)",
        "fct-source": "src/Data-PQueue-Min.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "break applied to predicate and queue queue returns tuple where first element is longest prefix possibly empty of queue of elements that do not satisfy and second element is the remainder of the queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "break",
        "normalized": "(a-\u003eBool)-\u003eMinQueue a-\u003e([a],MinQueue a)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMinQueue a-\u003e([a],MinQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:deleteFindMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Extracts the minimum element.  Throws an error on an empty queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e (a, MinQueue a)",
        "fct-source": "src/Data-PQueue-Min.html#deleteFindMin",
        "fct-type": "function",
        "title": "deleteFindMin"
      },
      "index": {
        "description": "log Extracts the minimum element Throws an error on an empty queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "deleteFindMin",
        "normalized": "MinQueue a-\u003e(a,MinQueue a)",
        "package": "pqueue",
        "partial": "Find Min",
        "signature": "MinQueue a-\u003e(a,MinQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Deletes the minimum element.  If the queue is empty, does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e MinQueue a",
        "fct-source": "src/Data-PQueue-Min.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "log Deletes the minimum element If the queue is empty does nothing",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "deleteMin",
        "normalized": "MinQueue a-\u003eMinQueue a",
        "package": "pqueue",
        "partial": "Min",
        "signature": "MinQueue a-\u003eMinQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ek\u003c/code\u003e, applied to a queue \u003ccode\u003equeue\u003c/code\u003e, returns \u003ccode\u003equeue\u003c/code\u003e with the smallest \u003ccode\u003ek\u003c/code\u003e elements deleted,\n or an empty queue if \u003ccode\u003ek \u003e= size \u003ccode\u003equeue\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "Int -\u003e MinQueue a -\u003e MinQueue a",
        "fct-source": "src/Data-PQueue-Min.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "log drop applied to queue queue returns queue with the smallest elements deleted or an empty queue if size queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "drop",
        "normalized": "Int-\u003eMinQueue a-\u003eMinQueue a",
        "package": "pqueue",
        "partial": "",
        "signature": "Int-\u003eMinQueue a-\u003eMinQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep queue\u003c/code\u003e returns the queue remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep queue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinQueue a -\u003e MinQueue a",
        "fct-source": "src/Data-PQueue-Min.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "dropWhile queue returns the queue remaining after takeWhile queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003eMinQueue a-\u003eMinQueue a",
        "package": "pqueue",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eMinQueue a-\u003eMinQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:elemsU",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003etoListU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Min.html#elemsU",
        "fct-type": "function",
        "title": "elemsU"
      },
      "index": {
        "description": "Equivalent to toListU",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "elemsU",
        "normalized": "MinQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "",
        "signature": "MinQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The empty priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a",
        "fct-source": "src/Data-PQueue-Internals.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty priority queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "empty",
        "normalized": "",
        "package": "pqueue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns the queue with all elements not satisfying \u003ccode\u003ep\u003c/code\u003e removed.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinQueue a -\u003e MinQueue a",
        "fct-source": "src/Data-PQueue-Min.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Returns the queue with all elements not satisfying removed",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eMinQueue a-\u003eMinQueue a",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMinQueue a-\u003eMinQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Returns the minimum element.  Throws an error on an empty queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e a",
        "fct-source": "src/Data-PQueue-Min.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "Returns the minimum element Throws an error on an empty queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "findMin",
        "normalized": "MinQueue a-\u003ea",
        "package": "pqueue",
        "partial": "Min",
        "signature": "MinQueue a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:foldlAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Performs a left-fold on the elements of a priority queue in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e MinQueue a -\u003e b",
        "fct-source": "src/Data-PQueue-Internals.html#foldlAsc",
        "fct-type": "function",
        "title": "foldlAsc"
      },
      "index": {
        "description": "log Performs left-fold on the elements of priority queue in ascending order",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "foldlAsc",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMinQueue b-\u003ea",
        "package": "pqueue",
        "partial": "Asc",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eMinQueue a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:foldlDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Performs a left-fold on the elements of a priority queue in descending order.\n \u003ccode\u003efoldlDesc f z q == foldrAsc (flip f) z q\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e MinQueue a -\u003e b",
        "fct-source": "src/Data-PQueue-Min.html#foldlDesc",
        "fct-type": "function",
        "title": "foldlDesc"
      },
      "index": {
        "description": "log Performs left-fold on the elements of priority queue in descending order foldlDesc foldrAsc flip",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "foldlDesc",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMinQueue b-\u003ea",
        "package": "pqueue",
        "partial": "Desc",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eMinQueue a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:foldlU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Unordered left fold on a priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e MinQueue a -\u003e b",
        "fct-source": "src/Data-PQueue-Internals.html#foldlU",
        "fct-type": "function",
        "title": "foldlU"
      },
      "index": {
        "description": "Unordered left fold on priority queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "foldlU",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMinQueue b-\u003ea",
        "package": "pqueue",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eMinQueue a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:foldrAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Performs a right-fold on the elements of a priority queue in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e MinQueue a -\u003e b",
        "fct-source": "src/Data-PQueue-Internals.html#foldrAsc",
        "fct-type": "function",
        "title": "foldrAsc"
      },
      "index": {
        "description": "log Performs right-fold on the elements of priority queue in ascending order",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "foldrAsc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMinQueue a-\u003eb",
        "package": "pqueue",
        "partial": "Asc",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMinQueue a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:foldrDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Performs a right-fold on the elements of a priority queue in descending order.\n \u003ccode\u003efoldrDesc f z q == foldlAsc (flip f) z q\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e MinQueue a -\u003e b",
        "fct-source": "src/Data-PQueue-Min.html#foldrDesc",
        "fct-type": "function",
        "title": "foldrDesc"
      },
      "index": {
        "description": "log Performs right-fold on the elements of priority queue in descending order foldrDesc foldlAsc flip",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "foldrDesc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMinQueue a-\u003eb",
        "package": "pqueue",
        "partial": "Desc",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMinQueue a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:foldrU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Unordered right fold on a priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e MinQueue a -\u003e b",
        "fct-source": "src/Data-PQueue-Internals.html#foldrU",
        "fct-type": "function",
        "title": "foldrU"
      },
      "index": {
        "description": "Unordered right fold on priority queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "foldrU",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMinQueue a-\u003eb",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMinQueue a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Constructs a priority queue from an ascending list.  \u003cem\u003eWarning\u003c/em\u003e: Does not check the precondition.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "[a] -\u003e MinQueue a",
        "fct-source": "src/Data-PQueue-Min.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Constructs priority queue from an ascending list Warning Does not check the precondition",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "fromAscList",
        "normalized": "[a]-\u003eMinQueue a",
        "package": "pqueue",
        "partial": "Asc List",
        "signature": "[a]-\u003eMinQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:fromDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Constructs a priority queue from an descending list.  \u003cem\u003eWarning\u003c/em\u003e: Does not check the precondition.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "[a] -\u003e MinQueue a",
        "fct-source": "src/Data-PQueue-Min.html#fromDescList",
        "fct-type": "function",
        "title": "fromDescList"
      },
      "index": {
        "description": "Constructs priority queue from an descending list Warning Does not check the precondition",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "fromDescList",
        "normalized": "[a]-\u003eMinQueue a",
        "package": "pqueue",
        "partial": "Desc List",
        "signature": "[a]-\u003eMinQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Constructs a priority queue from an unordered list.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "[a] -\u003e MinQueue a",
        "fct-source": "src/Data-PQueue-Min.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Constructs priority queue from an unordered list",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "fromList",
        "normalized": "[a]-\u003eMinQueue a",
        "package": "pqueue",
        "partial": "List",
        "signature": "[a]-\u003eMinQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:getMin",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the minimum element of the queue, if the queue is nonempty.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e Maybe a",
        "fct-source": "src/Data-PQueue-Internals.html#getMin",
        "fct-type": "function",
        "title": "getMin"
      },
      "index": {
        "description": "Returns the minimum element of the queue if the queue is nonempty",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "getMin",
        "normalized": "MinQueue a-\u003eMaybe a",
        "package": "pqueue",
        "partial": "Min",
        "signature": "MinQueue a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eAmortized \u003cem\u003eO(1)\u003c/em\u003e, worst-case \u003cem\u003eO(log n)\u003c/em\u003e.  Insert an element into the priority queue.  \n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "a -\u003e MinQueue a -\u003e MinQueue a",
        "fct-source": "src/Data-PQueue-Internals.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Amortized worst-case log Insert an element into the priority queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "insert",
        "normalized": "a-\u003eMinQueue a-\u003eMinQueue a",
        "package": "pqueue",
        "partial": "",
        "signature": "a-\u003eMinQueue a-\u003eMinQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:keysQueue",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a priority queue out of the keys of the specified \u003ccode\u003e\u003ca\u003eMinPQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e MinQueue k",
        "fct-source": "src/Data-PQueue-Internals.html#keysQueue",
        "fct-type": "function",
        "title": "keysQueue"
      },
      "index": {
        "description": "Constructs priority queue out of the keys of the specified MinPQueue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "keysQueue",
        "normalized": "MinPQueue a b-\u003eMinQueue a",
        "package": "pqueue",
        "partial": "Queue",
        "signature": "MinPQueue k a-\u003eMinQueue k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Creates a new priority queue containing the images of the elements of this queue.\n Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f . toList\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b) -\u003e MinQueue a -\u003e MinQueue b",
        "fct-source": "src/Data-PQueue-Min.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Creates new priority queue containing the images of the elements of this queue Equivalent to fromList map toList",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eMinQueue a-\u003eMinQueue b",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eMinQueue a-\u003eMinQueue b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:mapEither",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map elements and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Either b c) -\u003e MinQueue a -\u003e (MinQueue b, MinQueue c)",
        "fct-source": "src/Data-PQueue-Internals.html#mapEither",
        "fct-type": "function",
        "title": "mapEither"
      },
      "index": {
        "description": "Map elements and separate the Left and Right results",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "mapEither",
        "normalized": "(a-\u003eEither b c)-\u003eMinQueue a-\u003e(MinQueue b,MinQueue c)",
        "package": "pqueue",
        "partial": "Either",
        "signature": "(a-\u003eEither b c)-\u003eMinQueue a-\u003e(MinQueue b,MinQueue c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map elements and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Maybe b) -\u003e MinQueue a -\u003e MinQueue b",
        "fct-source": "src/Data-PQueue-Internals.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Map elements and collect the Just results",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eMinQueue a-\u003eMinQueue b",
        "package": "pqueue",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eMinQueue a-\u003eMinQueue b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:mapU",
      "description": {
        "fct-descr": "\u003cp\u003eMaps a function over the elements of the queue, ignoring order.  This function is only safe if the function is monotonic.\n This function \u003cem\u003edoes not\u003c/em\u003e check the precondition.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b) -\u003e MinQueue a -\u003e MinQueue b",
        "fct-source": "src/Data-PQueue-Min.html#mapU",
        "fct-type": "function",
        "title": "mapU"
      },
      "index": {
        "description": "Maps function over the elements of the queue ignoring order This function is only safe if the function is monotonic This function does not check the precondition",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "mapU",
        "normalized": "(a-\u003eb)-\u003eMinQueue a-\u003eMinQueue b",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eMinQueue a-\u003eMinQueue b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the minimum element of the queue, and the queue stripped of that element, \n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e Maybe (a, MinQueue a)",
        "fct-source": "src/Data-PQueue-Internals.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "Retrieves the minimum element of the queue and the queue stripped of that element or Nothing if passed an empty queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "minView",
        "normalized": "MinQueue a-\u003eMaybe(a,MinQueue a)",
        "package": "pqueue",
        "partial": "View",
        "signature": "MinQueue a-\u003eMaybe(a,MinQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Is this the empty priority queue?\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e Bool",
        "fct-source": "src/Data-PQueue-Internals.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is this the empty priority queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "null",
        "normalized": "MinQueue a-\u003eBool",
        "package": "pqueue",
        "partial": "",
        "signature": "MinQueue a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns a pair where the first queue contains all elements satisfying \u003ccode\u003ep\u003c/code\u003e, and the second queue\n contains all elements not satisfying \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinQueue a -\u003e (MinQueue a, MinQueue a)",
        "fct-source": "src/Data-PQueue-Min.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Returns pair where the first queue contains all elements satisfying and the second queue contains all elements not satisfying",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eMinQueue a-\u003e(MinQueue a,MinQueue a)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMinQueue a-\u003e(MinQueue a,MinQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:seqSpine",
      "description": {
        "fct-descr": "\u003cp\u003eForces the spine of the priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e b -\u003e b",
        "fct-source": "src/Data-PQueue-Internals.html#seqSpine",
        "fct-type": "function",
        "title": "seqSpine"
      },
      "index": {
        "description": "Forces the spine of the priority queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "seqSpine",
        "normalized": "MinQueue a-\u003eb-\u003eb",
        "package": "pqueue",
        "partial": "Spine",
        "signature": "MinQueue a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Construct a priority queue with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "a -\u003e MinQueue a",
        "fct-source": "src/Data-PQueue-Internals.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Construct priority queue with single element",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "singleton",
        "normalized": "a-\u003eMinQueue a",
        "package": "pqueue",
        "partial": "",
        "signature": "a-\u003eMinQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The number of elements in the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e Int",
        "fct-source": "src/Data-PQueue-Internals.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "size",
        "normalized": "MinQueue a-\u003eInt",
        "package": "pqueue",
        "partial": "",
        "signature": "MinQueue a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a queue \u003ccode\u003equeue\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003equeue\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinQueue a -\u003e ([a], MinQueue a)",
        "fct-source": "src/Data-PQueue-Min.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "span applied to predicate and queue queue returns tuple where first element is longest prefix possibly empty of queue of elements that satisfy and second element is the remainder of the queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003eMinQueue a-\u003e([a],MinQueue a)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMinQueue a-\u003e([a],MinQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e k queue, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e k queue)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "Int -\u003e MinQueue a -\u003e ([a], MinQueue a)",
        "fct-source": "src/Data-PQueue-Min.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "log Equivalent to take queue drop queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "splitAt",
        "normalized": "Int-\u003eMinQueue a-\u003e([a],MinQueue a)",
        "package": "pqueue",
        "partial": "At",
        "signature": "Int-\u003eMinQueue a-\u003e([a],MinQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ek\u003c/code\u003e, applied to a queue \u003ccode\u003equeue\u003c/code\u003e, returns a list of the smallest \u003ccode\u003ek\u003c/code\u003e elements of \u003ccode\u003equeue\u003c/code\u003e,\n or all elements of \u003ccode\u003equeue\u003c/code\u003e itself if \u003ccode\u003ek \u003e= \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e queue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "Int -\u003e MinQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Min.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "log take applied to queue queue returns list of the smallest elements of queue or all elements of queue itself if size queue",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "take",
        "normalized": "Int-\u003eMinQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "",
        "signature": "Int-\u003eMinQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a queue \u003ccode\u003equeue\u003c/code\u003e, returns the\n longest prefix (possibly empty) of \u003ccode\u003equeue\u003c/code\u003e of elements that satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Min.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "takeWhile applied to predicate and queue queue returns the longest prefix possibly empty of queue of elements that satisfy",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003eMinQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eMinQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Extracts the elements of the priority queue in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Min.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "log Extracts the elements of the priority queue in ascending order",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "toAscList",
        "normalized": "MinQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "Asc List",
        "signature": "MinQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:toDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Extracts the elements of the priority queue in descending order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Min.html#toDescList",
        "fct-type": "function",
        "title": "toDescList"
      },
      "index": {
        "description": "log Extracts the elements of the priority queue in descending order",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "toDescList",
        "normalized": "MinQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "Desc List",
        "signature": "MinQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns the elements of the priority queue in ascending order.  Equivalent to \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the order of the elements is irrelevant, consider using \u003ccode\u003e\u003ca\u003etoListU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Min.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Returns the elements of the priority queue in ascending order Equivalent to toAscList If the order of the elements is irrelevant consider using toListU",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "toList",
        "normalized": "MinQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "List",
        "signature": "MinQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:toListU",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the elements of the queue, in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Min.html#toListU",
        "fct-type": "function",
        "title": "toListU"
      },
      "index": {
        "description": "Returns the elements of the queue in no particular order",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "toListU",
        "normalized": "MinQueue a-\u003e[a]",
        "package": "pqueue",
        "partial": "List",
        "signature": "MinQueue a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eAmortized \u003cem\u003eO(log (min(n,m)))\u003c/em\u003e, worst-case \u003cem\u003eO(log (max (n,m)))\u003c/em\u003e.  Take the union of two priority queues.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinQueue a -\u003e MinQueue a -\u003e MinQueue a",
        "fct-source": "src/Data-PQueue-Internals.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Amortized log min worst-case log max Take the union of two priority queues",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "union",
        "normalized": "MinQueue a-\u003eMinQueue a-\u003eMinQueue a",
        "package": "pqueue",
        "partial": "",
        "signature": "MinQueue a-\u003eMinQueue a-\u003eMinQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Min.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the union of a list of priority queues.  Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Min",
        "fct-package": "pqueue",
        "fct-signature": "[MinQueue a] -\u003e MinQueue a",
        "fct-source": "src/Data-PQueue-Min.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "Takes the union of list of priority queues Equivalent to foldl union empty",
        "hierarchy": "Data PQueue Min",
        "module": "Data.PQueue.Min",
        "name": "unions",
        "normalized": "[MinQueue a]-\u003eMinQueue a",
        "package": "pqueue",
        "partial": "",
        "signature": "[MinQueue a]-\u003eMinQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral purpose priority queue.\n Each element is associated with a \u003cem\u003ekey\u003c/em\u003e, and the priority queue supports\n viewing and extracting the element with the maximum key.\n\u003c/p\u003e\u003cp\u003eA worst-case bound is given for each operation.  In some cases, an amortized\n bound is also specified; these bounds do not hold in a persistent context.\n\u003c/p\u003e\u003cp\u003eThis implementation is based on a binomial heap augmented with a global root.\n The spine of the heap is maintained lazily.  To force the spine of the heap,\n use \u003ccode\u003e\u003ca\u003eseqSpine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe do not guarantee stable behavior.\n Ties are broken arbitrarily -- that is, if \u003ccode\u003ek1 \u003c= k2\u003c/code\u003e and \u003ccode\u003ek2 \u003c= k1\u003c/code\u003e, then there \n are no guarantees about the relative order in which \u003ccode\u003ek1\u003c/code\u003e, \u003ccode\u003ek2\u003c/code\u003e, and their associated\n elements are returned.  (Unlike Data.Map, we allow multiple elements with the\n same key.)\n\u003c/p\u003e\u003cp\u003eThis implementation offers a number of methods of the form \u003ccode\u003exxxU\u003c/code\u003e, where \u003ccode\u003eU\u003c/code\u003e stands for\n unordered.  No guarantees whatsoever are made on the execution or traversal order of\n these functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "module",
        "fct-source": "src/Data-PQueue-Prio-Max.html",
        "fct-type": "module",
        "title": "Max"
      },
      "index": {
        "description": "General purpose priority queue Each element is associated with key and the priority queue supports viewing and extracting the element with the maximum key worst-case bound is given for each operation In some cases an amortized bound is also specified these bounds do not hold in persistent context This implementation is based on binomial heap augmented with global root The spine of the heap is maintained lazily To force the spine of the heap use seqSpine We do not guarantee stable behavior Ties are broken arbitrarily that is if k1 k2 and k2 k1 then there are no guarantees about the relative order in which k1 k2 and their associated elements are returned Unlike Data.Map we allow multiple elements with the same key This implementation offers number of methods of the form xxxU where stands for unordered No guarantees whatsoever are made on the execution or traversal order of these functions",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "Max",
        "normalized": "",
        "package": "pqueue",
        "partial": "Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#t:MaxPQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA priority queue where values of type \u003ccode\u003ea\u003c/code\u003e are annotated with keys of type \u003ccode\u003ek\u003c/code\u003e.\n The queue supports extracting the element with maximum key.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "data",
        "fct-source": "src/Data-PQueue-Prio-Max-Internals.html#MaxPQueue",
        "fct-type": "data",
        "title": "MaxPQueue"
      },
      "index": {
        "description": "priority queue where values of type are annotated with keys of type The queue supports extracting the element with maximum key",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "MaxPQueue",
        "normalized": "",
        "package": "pqueue",
        "partial": "Max PQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:adjustMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Alter the value at the maximum key.  If the queue is empty, does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e a) -\u003e MaxPQueue k a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#adjustMax",
        "fct-type": "function",
        "title": "adjustMax"
      },
      "index": {
        "description": "Alter the value at the maximum key If the queue is empty does nothing",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "adjustMax",
        "normalized": "(a-\u003ea)-\u003eMaxPQueue b a-\u003eMaxPQueue b a",
        "package": "pqueue",
        "partial": "Max",
        "signature": "(a-\u003ea)-\u003eMaxPQueue k a-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:adjustMaxWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Alter the value at the maximum key.  If the queue is empty, does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e a) -\u003e MaxPQueue k a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#adjustMaxWithKey",
        "fct-type": "function",
        "title": "adjustMaxWithKey"
      },
      "index": {
        "description": "Alter the value at the maximum key If the queue is empty does nothing",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "adjustMaxWithKey",
        "normalized": "(a-\u003eb-\u003eb)-\u003eMaxPQueue a b-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "Max With Key",
        "signature": "(k-\u003ea-\u003ea)-\u003eMaxPQueue k a-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:assocs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#assocs",
        "fct-type": "function",
        "title": "assocs"
      },
      "index": {
        "description": "log Equivalent to toDescList",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "assocs",
        "normalized": "MaxPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:assocsU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ca\u003etoListU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#assocsU",
        "fct-type": "function",
        "title": "assocsU"
      },
      "index": {
        "description": "Equivalent to toListU",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "assocsU",
        "normalized": "MaxPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MaxPQueue k a -\u003e ([(k, a)], MaxPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "Equivalent to span not",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "break",
        "normalized": "(a-\u003eBool)-\u003eMaxPQueue b a-\u003e([(b,a)],MaxPQueue b a)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMaxPQueue k a-\u003e([(k,a)],MaxPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:breakWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espanWithKey\u003c/a\u003e\u003c/code\u003e ( k a -\u003e \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e (p k a)) q\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e MaxPQueue k a -\u003e ([(k, a)], MaxPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#breakWithKey",
        "fct-type": "function",
        "title": "breakWithKey"
      },
      "index": {
        "description": "Equivalent to spanWithKey not",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "breakWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMaxPQueue a b-\u003e([(a,b)],MaxPQueue a b)",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMaxPQueue k a-\u003e([(k,a)],MaxPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:deleteFindMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Delete and find the element with the maximum key.  Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if empty.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e ((k, a), MaxPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#deleteFindMax",
        "fct-type": "function",
        "title": "deleteFindMax"
      },
      "index": {
        "description": "log Delete and find the element with the maximum key Calls error if empty",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "deleteFindMax",
        "normalized": "MaxPQueue a b-\u003e((a,b),MaxPQueue a b)",
        "package": "pqueue",
        "partial": "Find Max",
        "signature": "MaxPQueue k a-\u003e((k,a),MaxPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:deleteMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Delete and find the element with the maximum key.  Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if empty.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "log Delete and find the element with the maximum key Calls error if empty",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "deleteMax",
        "normalized": "MaxPQueue a b-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "Max",
        "signature": "MaxPQueue k a-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  Deletes the first \u003ccode\u003ek\u003c/code\u003e (key, value) pairs in the queue, or returns an empty queue if \u003ccode\u003ek \u003e= n\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "Int -\u003e MaxPQueue k a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "log Deletes the first key value pairs in the queue or returns an empty queue if",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "drop",
        "normalized": "Int-\u003eMaxPQueue a b-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "",
        "signature": "Int-\u003eMaxPQueue k a-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves the longest possible prefix of elements satisfying the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MaxPQueue k a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "Removes the longest possible prefix of elements satisfying the predicate",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003eMaxPQueue b a-\u003eMaxPQueue b a",
        "package": "pqueue",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eMaxPQueue k a-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:dropWhileWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves the longest possible prefix of elements satisfying the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e MaxPQueue k a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#dropWhileWithKey",
        "fct-type": "function",
        "title": "dropWhileWithKey"
      },
      "index": {
        "description": "Removes the longest possible prefix of elements satisfying the predicate",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "dropWhileWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMaxPQueue a b-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "While With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMaxPQueue k a-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Return all elements of the queue in ascending order by key.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "log Return all elements of the queue in ascending order by key",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "elems",
        "normalized": "MaxPQueue a b-\u003e[b]",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxPQueue k a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:elemsU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Return all elements of the queue in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#elemsU",
        "fct-type": "function",
        "title": "elemsU"
      },
      "index": {
        "description": "Return all elements of the queue in no particular order",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "elemsU",
        "normalized": "MaxPQueue a b-\u003e[b]",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxPQueue k a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Returns the empty priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Returns the empty priority queue",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "empty",
        "normalized": "",
        "package": "pqueue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Filter all values that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MaxPQueue k a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter all values that satisfy the predicate",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eMaxPQueue b a-\u003eMaxPQueue b a",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMaxPQueue k a-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:filterWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Filter all values that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e MaxPQueue k a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#filterWithKey",
        "fct-type": "function",
        "title": "filterWithKey"
      },
      "index": {
        "description": "Filter all values that satisfy the predicate",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "filterWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMaxPQueue a b-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMaxPQueue k a-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The maximal (key, element) in the queue.  Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if empty.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e (k, a)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "The maximal key element in the queue Calls error if empty",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "findMax",
        "normalized": "MaxPQueue a b-\u003e(a,b)",
        "package": "pqueue",
        "partial": "Max",
        "signature": "MaxPQueue k a-\u003e(k,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:foldlU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  An unordered left fold over the elements of the queue, in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e MaxPQueue k a -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Max.html#foldlU",
        "fct-type": "function",
        "title": "foldlU"
      },
      "index": {
        "description": "An unordered left fold over the elements of the queue in no particular order",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "foldlU",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMaxPQueue c b-\u003ea",
        "package": "pqueue",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eMaxPQueue k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:foldlWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Fold the keys and values in the map, such that \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldlWithKey\u003c/a\u003e\u003c/code\u003e f z q == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e . f) z (\u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e q)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you do not care about the traversal order, consider using \u003ccode\u003e\u003ca\u003efoldlWithKeyU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(b -\u003e k -\u003e a -\u003e b) -\u003e b -\u003e MaxPQueue k a -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Max.html#foldlWithKey",
        "fct-type": "function",
        "title": "foldlWithKey"
      },
      "index": {
        "description": "log Fold the keys and values in the map such that foldlWithKey foldl uncurry toAscList If you do not care about the traversal order consider using foldlWithKeyU",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "foldlWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eMaxPQueue b c-\u003ea",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(b-\u003ek-\u003ea-\u003eb)-\u003eb-\u003eMaxPQueue k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:foldlWithKeyU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  An unordered left fold over the elements of the queue, in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(b -\u003e k -\u003e a -\u003e b) -\u003e b -\u003e MaxPQueue k a -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Max.html#foldlWithKeyU",
        "fct-type": "function",
        "title": "foldlWithKeyU"
      },
      "index": {
        "description": "An unordered left fold over the elements of the queue in no particular order",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "foldlWithKeyU",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eMaxPQueue b c-\u003ea",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(b-\u003ek-\u003ea-\u003eb)-\u003eb-\u003eMaxPQueue k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:foldrU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  An unordered right fold over the elements of the queue, in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e MaxPQueue k a -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Max.html#foldrU",
        "fct-type": "function",
        "title": "foldrU"
      },
      "index": {
        "description": "An unordered right fold over the elements of the queue in no particular order",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "foldrU",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMaxPQueue c a-\u003eb",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMaxPQueue k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:foldrWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Fold the keys and values in the map, such that \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldrWithKey\u003c/a\u003e\u003c/code\u003e f z q == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e f) z (\u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e q)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you do not care about the traversal order, consider using \u003ccode\u003e\u003ca\u003efoldrWithKeyU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e MaxPQueue k a -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Max.html#foldrWithKey",
        "fct-type": "function",
        "title": "foldrWithKey"
      },
      "index": {
        "description": "log Fold the keys and values in the map such that foldrWithKey foldr uncurry toAscList If you do not care about the traversal order consider using foldrWithKeyU",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "foldrWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eMaxPQueue a b-\u003ec",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eMaxPQueue k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:foldrWithKeyU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  An unordered right fold over the elements of the queue, in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e MaxPQueue k a -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Max.html#foldrWithKeyU",
        "fct-type": "function",
        "title": "foldrWithKeyU"
      },
      "index": {
        "description": "An unordered right fold over the elements of the queue in no particular order",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "foldrWithKeyU",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eMaxPQueue a b-\u003ec",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eMaxPQueue k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Build a priority queue from an ascending list of (key, value) pairs.  \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "[(k, a)] -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Build priority queue from an ascending list of key value pairs The precondition is not checked",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "fromAscList",
        "normalized": "[(a,b)]-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "Asc List",
        "signature": "[(k,a)]-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:fromDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Build a priority queue from a descending list of (key, value) pairs.  \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "[(k, a)] -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#fromDescList",
        "fct-type": "function",
        "title": "fromDescList"
      },
      "index": {
        "description": "Build priority queue from descending list of key value pairs The precondition is not checked",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "fromDescList",
        "normalized": "[(a,b)]-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "Desc List",
        "signature": "[(k,a)]-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Build a priority queue from the list of (key, value) pairs.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "[(k, a)] -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Build priority queue from the list of key value pairs",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "List",
        "signature": "[(k,a)]-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:getMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The maximal (key, element) in the queue, if the queue is nonempty.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e Maybe (k, a)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#getMax",
        "fct-type": "function",
        "title": "getMax"
      },
      "index": {
        "description": "The maximal key element in the queue if the queue is nonempty",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "getMax",
        "normalized": "MaxPQueue a b-\u003eMaybe(a,b)",
        "package": "pqueue",
        "partial": "Max",
        "signature": "MaxPQueue k a-\u003eMaybe(k,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eAmortized \u003cem\u003eO(1)\u003c/em\u003e, worst-case \u003cem\u003eO(log n)\u003c/em\u003e.  Inserts\n an element with the specified key into the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "k -\u003e a -\u003e MaxPQueue k a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Amortized worst-case log Inserts an element with the specified key into the queue",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eMaxPQueue a b-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "",
        "signature": "k-\u003ea-\u003eMaxPQueue k a-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Return all keys of the queue in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e [k]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "log Return all keys of the queue in ascending order",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "keys",
        "normalized": "MaxPQueue a b-\u003e[a]",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxPQueue k a-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:keysU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Return all keys of the queue in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e [k]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#keysU",
        "fct-type": "function",
        "title": "keysU"
      },
      "index": {
        "description": "Return all keys of the queue in no particular order",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "keysU",
        "normalized": "MaxPQueue a b-\u003e[a]",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxPQueue k a-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map a function over all values in the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b) -\u003e MaxPQueue k a -\u003e MaxPQueue k b",
        "fct-source": "src/Data-PQueue-Prio-Max.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the queue",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eMaxPQueue c a-\u003eMaxPQueue c b",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eMaxPQueue k a-\u003eMaxPQueue k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:mapEither",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Either b c) -\u003e MaxPQueue k a -\u003e (MaxPQueue k b, MaxPQueue k c)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#mapEither",
        "fct-type": "function",
        "title": "mapEither"
      },
      "index": {
        "description": "Map values and separate the Left and Right results",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "mapEither",
        "normalized": "(a-\u003eEither b c)-\u003eMaxPQueue d a-\u003e(MaxPQueue d b,MaxPQueue d c)",
        "package": "pqueue",
        "partial": "Either",
        "signature": "(a-\u003eEither b c)-\u003eMaxPQueue k a-\u003e(MaxPQueue k b,MaxPQueue k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:mapEitherWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Either b c) -\u003e MaxPQueue k a -\u003e (MaxPQueue k b, MaxPQueue k c)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#mapEitherWithKey",
        "fct-type": "function",
        "title": "mapEitherWithKey"
      },
      "index": {
        "description": "Map values and separate the Left and Right results",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "mapEitherWithKey",
        "normalized": "(a-\u003eb-\u003eEither c d)-\u003eMaxPQueue a b-\u003e(MaxPQueue a c,MaxPQueue a d)",
        "package": "pqueue",
        "partial": "Either With Key",
        "signature": "(k-\u003ea-\u003eEither b c)-\u003eMaxPQueue k a-\u003e(MaxPQueue k b,MaxPQueue k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:mapKeys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map a function over all values in the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e k') -\u003e MaxPQueue k a -\u003e MaxPQueue k' a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#mapKeys",
        "fct-type": "function",
        "title": "mapKeys"
      },
      "index": {
        "description": "Map function over all values in the queue",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "mapKeys",
        "normalized": "(a-\u003eb)-\u003eMaxPQueue a c-\u003eMaxPQueue b c",
        "package": "pqueue",
        "partial": "Keys",
        "signature": "(k-\u003ek')-\u003eMaxPQueue k a-\u003eMaxPQueue k' a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:mapKeysMonotonic",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapKeysMonotonic\u003c/a\u003e\u003c/code\u003e f q == \u003ccode\u003e\u003ca\u003emapKeys\u003c/a\u003e\u003c/code\u003e f q\u003c/code\u003e, but only works when \u003ccode\u003ef\u003c/code\u003e is strictly\n monotonic.  \u003cem\u003eThe precondition is not checked.\u003c/em\u003e  This function has better performance than\n \u003ccode\u003e\u003ca\u003emapKeys\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e k') -\u003e MaxPQueue k a -\u003e MaxPQueue k' a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#mapKeysMonotonic",
        "fct-type": "function",
        "title": "mapKeysMonotonic"
      },
      "index": {
        "description": "mapKeysMonotonic mapKeys but only works when is strictly monotonic The precondition is not checked This function has better performance than mapKeys",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "mapKeysMonotonic",
        "normalized": "(a-\u003eb)-\u003eMaxPQueue a c-\u003eMaxPQueue b c",
        "package": "pqueue",
        "partial": "Keys Monotonic",
        "signature": "(k-\u003ek')-\u003eMaxPQueue k a-\u003eMaxPQueue k' a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Maybe b) -\u003e MaxPQueue k a -\u003e MaxPQueue k b",
        "fct-source": "src/Data-PQueue-Prio-Max.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Map values and collect the Just results",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eMaxPQueue c a-\u003eMaxPQueue c b",
        "package": "pqueue",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eMaxPQueue k a-\u003eMaxPQueue k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:mapMaybeWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Maybe b) -\u003e MaxPQueue k a -\u003e MaxPQueue k b",
        "fct-source": "src/Data-PQueue-Prio-Max.html#mapMaybeWithKey",
        "fct-type": "function",
        "title": "mapMaybeWithKey"
      },
      "index": {
        "description": "Map values and collect the Just results",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "mapMaybeWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe c)-\u003eMaxPQueue a b-\u003eMaxPQueue a c",
        "package": "pqueue",
        "partial": "Maybe With Key",
        "signature": "(k-\u003ea-\u003eMaybe b)-\u003eMaxPQueue k a-\u003eMaxPQueue k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:mapWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map a function over all values in the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e b) -\u003e MaxPQueue k a -\u003e MaxPQueue k b",
        "fct-source": "src/Data-PQueue-Prio-Max.html#mapWithKey",
        "fct-type": "function",
        "title": "mapWithKey"
      },
      "index": {
        "description": "Map function over all values in the queue",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "mapWithKey",
        "normalized": "(a-\u003eb-\u003ec)-\u003eMaxPQueue a b-\u003eMaxPQueue a c",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb)-\u003eMaxPQueue k a-\u003eMaxPQueue k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:maxView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Retrieves the value associated with the maximum key of the queue, and the queue\n stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e Maybe (a, MaxPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "log Retrieves the value associated with the maximum key of the queue and the queue stripped of that element or Nothing if passed an empty queue",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "maxView",
        "normalized": "MaxPQueue a b-\u003eMaybe(b,MaxPQueue a b)",
        "package": "pqueue",
        "partial": "View",
        "signature": "MaxPQueue k a-\u003eMaybe(a,MaxPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:maxViewWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Retrieves the maximal (key, value) pair of the map, and the map stripped of that\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty map.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e Maybe ((k, a), MaxPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#maxViewWithKey",
        "fct-type": "function",
        "title": "maxViewWithKey"
      },
      "index": {
        "description": "log Retrieves the maximal key value pair of the map and the map stripped of that element or Nothing if passed an empty map",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "maxViewWithKey",
        "normalized": "MaxPQueue a b-\u003eMaybe((a,b),MaxPQueue a b)",
        "package": "pqueue",
        "partial": "View With Key",
        "signature": "MaxPQueue k a-\u003eMaybe((k,a),MaxPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Checks if this priority queue is empty.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e Bool",
        "fct-source": "src/Data-PQueue-Prio-Max.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Checks if this priority queue is empty",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "null",
        "normalized": "MaxPQueue a b-\u003eBool",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxPQueue k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Partition the queue according to a predicate.  The first queue contains all elements\n which satisfy the predicate, the second all elements that fail the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MaxPQueue k a -\u003e (MaxPQueue k a, MaxPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Partition the queue according to predicate The first queue contains all elements which satisfy the predicate the second all elements that fail the predicate",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eMaxPQueue b a-\u003e(MaxPQueue b a,MaxPQueue b a)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMaxPQueue k a-\u003e(MaxPQueue k a,MaxPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:partitionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Partition the queue according to a predicate.  The first queue contains all elements\n which satisfy the predicate, the second all elements that fail the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e MaxPQueue k a -\u003e (MaxPQueue k a, MaxPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#partitionWithKey",
        "fct-type": "function",
        "title": "partitionWithKey"
      },
      "index": {
        "description": "Partition the queue according to predicate The first queue contains all elements which satisfy the predicate the second all elements that fail the predicate",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "partitionWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMaxPQueue a b-\u003e(MaxPQueue a b,MaxPQueue a b)",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMaxPQueue k a-\u003e(MaxPQueue k a,MaxPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:seqSpine",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Analogous to \u003ccode\u003edeepseq\u003c/code\u003e in the \u003ccode\u003edeepseq\u003c/code\u003e package, but only forces the spine of the binomial heap.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e b -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Max.html#seqSpine",
        "fct-type": "function",
        "title": "seqSpine"
      },
      "index": {
        "description": "log Analogous to deepseq in the deepseq package but only forces the spine of the binomial heap",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "seqSpine",
        "normalized": "MaxPQueue a b-\u003ec-\u003ec",
        "package": "pqueue",
        "partial": "Spine",
        "signature": "MaxPQueue k a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Constructs a singleton priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "k -\u003e a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Constructs singleton priority queue",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "",
        "signature": "k-\u003ea-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Returns the size of this priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e Int",
        "fct-source": "src/Data-PQueue-Prio-Max.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Returns the size of this priority queue",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "size",
        "normalized": "MaxPQueue a b-\u003eInt",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxPQueue k a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p q, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p q)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MaxPQueue k a -\u003e ([(k, a)], MaxPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "Equivalent to takeWhile dropWhile",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003eMaxPQueue b a-\u003e([(b,a)],MaxPQueue b a)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMaxPQueue k a-\u003e([(k,a)],MaxPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:spanWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espanWithKey\u003c/a\u003e\u003c/code\u003e ( k a -\u003e \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e (p k a)) q\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e MaxPQueue k a -\u003e ([(k, a)], MaxPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#spanWithKey",
        "fct-type": "function",
        "title": "spanWithKey"
      },
      "index": {
        "description": "Equivalent to spanWithKey not",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "spanWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMaxPQueue a b-\u003e([(a,b)],MaxPQueue a b)",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMaxPQueue k a-\u003e([(k,a)],MaxPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e k q, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e k q)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "Int -\u003e MaxPQueue k a -\u003e ([(k, a)], MaxPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "log Equivalent to take drop",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "splitAt",
        "normalized": "Int-\u003eMaxPQueue a b-\u003e([(a,b)],MaxPQueue a b)",
        "package": "pqueue",
        "partial": "At",
        "signature": "Int-\u003eMaxPQueue k a-\u003e([(k,a)],MaxPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  Takes the first \u003ccode\u003ek\u003c/code\u003e (key, value) pairs in the queue, or the first \u003ccode\u003en\u003c/code\u003e if \u003ccode\u003ek \u003e= n\u003c/code\u003e.\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e k q == \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e q)\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "Int -\u003e MaxPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "log Takes the first key value pairs in the queue or the first if take take toDescList",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "take",
        "normalized": "Int-\u003eMaxPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "",
        "signature": "Int-\u003eMaxPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the longest possible prefix of elements satisfying the predicate.\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p q == \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e (p . \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e) (\u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e q)\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MaxPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "Takes the longest possible prefix of elements satisfying the predicate takeWhile takeWhile snd toAscList",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003eMaxPQueue b a-\u003e[(b,a)]",
        "package": "pqueue",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eMaxPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:takeWhileWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the longest possible prefix of elements satisfying the predicate.\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p q == \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e (uncurry p) (\u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e q)\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e MaxPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#takeWhileWithKey",
        "fct-type": "function",
        "title": "takeWhileWithKey"
      },
      "index": {
        "description": "Takes the longest possible prefix of elements satisfying the predicate takeWhile takeWhile uncurry toAscList",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "takeWhileWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMaxPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "While With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMaxPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Return all (key, value) pairs in ascending order by key.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "log Return all key value pairs in ascending order by key",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "toAscList",
        "normalized": "MaxPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "Asc List",
        "signature": "MaxPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:toDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Return all (key, value) pairs in descending order by key.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#toDescList",
        "fct-type": "function",
        "title": "toDescList"
      },
      "index": {
        "description": "log Return all key value pairs in descending order by key",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "toDescList",
        "normalized": "MaxPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "Desc List",
        "signature": "MaxPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the traversal order is irrelevant, consider using \u003ccode\u003e\u003ca\u003etoListU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "log Equivalent to toAscList If the traversal order is irrelevant consider using toListU",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "toList",
        "normalized": "MaxPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "List",
        "signature": "MaxPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:toListU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns all (key, value) pairs in the queue in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Max.html#toListU",
        "fct-type": "function",
        "title": "toListU"
      },
      "index": {
        "description": "Returns all key value pairs in the queue in no particular order",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "toListU",
        "normalized": "MaxPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "List",
        "signature": "MaxPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:traverseU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  An unordered traversal over a priority queue, in no particular order.\n While there is no guarantee in which order the elements are traversed, the resulting\n priority queue will be perfectly valid.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e f b) -\u003e MaxPQueue k a -\u003e f (MaxPQueue k b)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#traverseU",
        "fct-type": "function",
        "title": "traverseU"
      },
      "index": {
        "description": "An unordered traversal over priority queue in no particular order While there is no guarantee in which order the elements are traversed the resulting priority queue will be perfectly valid",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "traverseU",
        "normalized": "(a-\u003eb c)-\u003eMaxPQueue d a-\u003eb(MaxPQueue d c)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003eMaxPQueue k a-\u003ef(MaxPQueue k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:traverseWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Traverses the elements of the queue in descending order by key.\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etraverseWithKey\u003c/a\u003e\u003c/code\u003e f q == \u003ccode\u003e\u003ca\u003efromDescList\u003c/a\u003e\u003c/code\u003e \u003ca\u003e$\u003c/a\u003e \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e f) (\u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e q)\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eIf you do not care about the \u003cem\u003eorder\u003c/em\u003e of the traversal, consider using \u003ccode\u003e\u003ca\u003etraverseWithKeyU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e f b) -\u003e MaxPQueue k a -\u003e f (MaxPQueue k b)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#traverseWithKey",
        "fct-type": "function",
        "title": "traverseWithKey"
      },
      "index": {
        "description": "log Traverses the elements of the queue in descending order by key traverseWithKey fromDescList traverse uncurry toDescList If you do not care about the order of the traversal consider using traverseWithKeyU",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "traverseWithKey",
        "normalized": "(a-\u003eb-\u003ec d)-\u003eMaxPQueue a b-\u003ec(MaxPQueue a d)",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003ef b)-\u003eMaxPQueue k a-\u003ef(MaxPQueue k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:traverseWithKeyU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  An unordered traversal over a priority queue, in no particular order.\n While there is no guarantee in which order the elements are traversed, the resulting\n priority queue will be perfectly valid.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e f b) -\u003e MaxPQueue k a -\u003e f (MaxPQueue k b)",
        "fct-source": "src/Data-PQueue-Prio-Max.html#traverseWithKeyU",
        "fct-type": "function",
        "title": "traverseWithKeyU"
      },
      "index": {
        "description": "An unordered traversal over priority queue in no particular order While there is no guarantee in which order the elements are traversed the resulting priority queue will be perfectly valid",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "traverseWithKeyU",
        "normalized": "(a-\u003eb-\u003ec d)-\u003eMaxPQueue a b-\u003ec(MaxPQueue a d)",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003ef b)-\u003eMaxPQueue k a-\u003ef(MaxPQueue k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eAmortized \u003cem\u003eO(log(min(n1, n2)))\u003c/em\u003e, worst-case \u003cem\u003eO(log(max(n1, n2)))\u003c/em\u003e.  Returns the union\n of the two specified queues.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "MaxPQueue k a -\u003e MaxPQueue k a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Amortized log min n1 n2 worst-case log max n1 n2 Returns the union of the two specified queues",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "union",
        "normalized": "MaxPQueue a b-\u003eMaxPQueue a b-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "",
        "signature": "MaxPQueue k a-\u003eMaxPQueue k a-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of queues: (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "[MaxPQueue k a] -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "The union of list of queues unions foldl union empty",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "unions",
        "normalized": "[MaxPQueue a b]-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "",
        "signature": "[MaxPQueue k a]-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:updateMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  (Actually \u003cem\u003eO(1)\u003c/em\u003e if there's no deletion.)  Update the value at the maximum key.\n If the queue is empty, does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Maybe a) -\u003e MaxPQueue k a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#updateMax",
        "fct-type": "function",
        "title": "updateMax"
      },
      "index": {
        "description": "log Actually if there no deletion Update the value at the maximum key If the queue is empty does nothing",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "updateMax",
        "normalized": "(a-\u003eMaybe a)-\u003eMaxPQueue b a-\u003eMaxPQueue b a",
        "package": "pqueue",
        "partial": "Max",
        "signature": "(a-\u003eMaybe a)-\u003eMaxPQueue k a-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Max.html#v:updateMaxWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  (Actually \u003cem\u003eO(1)\u003c/em\u003e if there's no deletion.)  Update the value at the maximum key.\n If the queue is empty, does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Max",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Maybe a) -\u003e MaxPQueue k a -\u003e MaxPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Max.html#updateMaxWithKey",
        "fct-type": "function",
        "title": "updateMaxWithKey"
      },
      "index": {
        "description": "log Actually if there no deletion Update the value at the maximum key If the queue is empty does nothing",
        "hierarchy": "Data PQueue Prio Max",
        "module": "Data.PQueue.Prio.Max",
        "name": "updateMaxWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe b)-\u003eMaxPQueue a b-\u003eMaxPQueue a b",
        "package": "pqueue",
        "partial": "Max With Key",
        "signature": "(k-\u003ea-\u003eMaybe a)-\u003eMaxPQueue k a-\u003eMaxPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral purpose priority queue.\n Each element is associated with a \u003cem\u003ekey\u003c/em\u003e, and the priority queue supports\n viewing and extracting the element with the minimum key.\n\u003c/p\u003e\u003cp\u003eA worst-case bound is given for each operation.  In some cases, an amortized\n bound is also specified; these bounds do not hold in a persistent context.\n\u003c/p\u003e\u003cp\u003eThis implementation is based on a binomial heap augmented with a global root.\n The spine of the heap is maintained lazily.  To force the spine of the heap,\n use \u003ccode\u003e\u003ca\u003eseqSpine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe do not guarantee stable behavior.\n Ties are broken arbitrarily -- that is, if \u003ccode\u003ek1 \u003c= k2\u003c/code\u003e and \u003ccode\u003ek2 \u003c= k1\u003c/code\u003e, then there \n are no guarantees about the relative order in which \u003ccode\u003ek1\u003c/code\u003e, \u003ccode\u003ek2\u003c/code\u003e, and their associated\n elements are returned.  (Unlike Data.Map, we allow multiple elements with the\n same key.)\n\u003c/p\u003e\u003cp\u003eThis implementation offers a number of methods of the form \u003ccode\u003exxxU\u003c/code\u003e, where \u003ccode\u003eU\u003c/code\u003e stands for\n unordered.  No guarantees whatsoever are made on the execution or traversal order of\n these functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "module",
        "fct-source": "src/Data-PQueue-Prio-Min.html",
        "fct-type": "module",
        "title": "Min"
      },
      "index": {
        "description": "General purpose priority queue Each element is associated with key and the priority queue supports viewing and extracting the element with the minimum key worst-case bound is given for each operation In some cases an amortized bound is also specified these bounds do not hold in persistent context This implementation is based on binomial heap augmented with global root The spine of the heap is maintained lazily To force the spine of the heap use seqSpine We do not guarantee stable behavior Ties are broken arbitrarily that is if k1 k2 and k2 k1 then there are no guarantees about the relative order in which k1 k2 and their associated elements are returned Unlike Data.Map we allow multiple elements with the same key This implementation offers number of methods of the form xxxU where stands for unordered No guarantees whatsoever are made on the execution or traversal order of these functions",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "Min",
        "normalized": "",
        "package": "pqueue",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#t:MinPQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA priority queue where values of type \u003ccode\u003ea\u003c/code\u003e are annotated with keys of type \u003ccode\u003ek\u003c/code\u003e.\n The queue supports extracting the element with minimum key.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "data",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#MinPQueue",
        "fct-type": "data",
        "title": "MinPQueue"
      },
      "index": {
        "description": "priority queue where values of type are annotated with keys of type The queue supports extracting the element with minimum key",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "MinPQueue",
        "normalized": "",
        "package": "pqueue",
        "partial": "Min PQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:adjustMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Alter the value at the minimum key.  If the queue is empty, does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e a) -\u003e MinPQueue k a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#adjustMin",
        "fct-type": "function",
        "title": "adjustMin"
      },
      "index": {
        "description": "Alter the value at the minimum key If the queue is empty does nothing",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "adjustMin",
        "normalized": "(a-\u003ea)-\u003eMinPQueue b a-\u003eMinPQueue b a",
        "package": "pqueue",
        "partial": "Min",
        "signature": "(a-\u003ea)-\u003eMinPQueue k a-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:adjustMinWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Alter the value at the minimum key.  If the queue is empty, does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e a) -\u003e MinPQueue k a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#adjustMinWithKey",
        "fct-type": "function",
        "title": "adjustMinWithKey"
      },
      "index": {
        "description": "Alter the value at the minimum key If the queue is empty does nothing",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "adjustMinWithKey",
        "normalized": "(a-\u003eb-\u003eb)-\u003eMinPQueue a b-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "Min With Key",
        "signature": "(k-\u003ea-\u003ea)-\u003eMinPQueue k a-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:assocs",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#assocs",
        "fct-type": "function",
        "title": "assocs"
      },
      "index": {
        "description": "log Equivalent to toAscList",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "assocs",
        "normalized": "MinPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "",
        "signature": "MinPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:assocsU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ca\u003etoListU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#assocsU",
        "fct-type": "function",
        "title": "assocsU"
      },
      "index": {
        "description": "Equivalent to toListU",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "assocsU",
        "normalized": "MinPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "",
        "signature": "MinPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinPQueue k a -\u003e ([(k, a)], MinPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "Equivalent to span not",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "break",
        "normalized": "(a-\u003eBool)-\u003eMinPQueue b a-\u003e([(b,a)],MinPQueue b a)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMinPQueue k a-\u003e([(k,a)],MinPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:breakWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espanWithKey\u003c/a\u003e\u003c/code\u003e ( k a -\u003e \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e (p k a)) q\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e MinPQueue k a -\u003e ([(k, a)], MinPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#breakWithKey",
        "fct-type": "function",
        "title": "breakWithKey"
      },
      "index": {
        "description": "Equivalent to spanWithKey not",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "breakWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMinPQueue a b-\u003e([(a,b)],MinPQueue a b)",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMinPQueue k a-\u003e([(k,a)],MinPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:deleteFindMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Delete and find the element with the minimum key.  Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if empty.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e ((k, a), MinPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#deleteFindMin",
        "fct-type": "function",
        "title": "deleteFindMin"
      },
      "index": {
        "description": "log Delete and find the element with the minimum key Calls error if empty",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "deleteFindMin",
        "normalized": "MinPQueue a b-\u003e((a,b),MinPQueue a b)",
        "package": "pqueue",
        "partial": "Find Min",
        "signature": "MinPQueue k a-\u003e((k,a),MinPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Deletes the minimal (key, element) in the queue.  Returns an empty queue\n if the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "log Deletes the minimal key element in the queue Returns an empty queue if the queue is empty",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "deleteMin",
        "normalized": "MinPQueue a b-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "Min",
        "signature": "MinPQueue k a-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  Deletes the first \u003ccode\u003ek\u003c/code\u003e (key, value) pairs in the queue, or returns an empty queue if \u003ccode\u003ek \u003e= n\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "Int -\u003e MinPQueue k a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "log Deletes the first key value pairs in the queue or returns an empty queue if",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "drop",
        "normalized": "Int-\u003eMinPQueue a b-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "",
        "signature": "Int-\u003eMinPQueue k a-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves the longest possible prefix of elements satisfying the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinPQueue k a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "Removes the longest possible prefix of elements satisfying the predicate",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003eMinPQueue b a-\u003eMinPQueue b a",
        "package": "pqueue",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eMinPQueue k a-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:dropWhileWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves the longest possible prefix of elements satisfying the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e MinPQueue k a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#dropWhileWithKey",
        "fct-type": "function",
        "title": "dropWhileWithKey"
      },
      "index": {
        "description": "Removes the longest possible prefix of elements satisfying the predicate",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "dropWhileWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMinPQueue a b-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "While With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMinPQueue k a-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Return all elements of the queue in ascending order by key.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "log Return all elements of the queue in ascending order by key",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "elems",
        "normalized": "MinPQueue a b-\u003e[b]",
        "package": "pqueue",
        "partial": "",
        "signature": "MinPQueue k a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:elemsU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Return all elements of the queue in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e [a]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#elemsU",
        "fct-type": "function",
        "title": "elemsU"
      },
      "index": {
        "description": "Return all elements of the queue in no particular order",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "elemsU",
        "normalized": "MinPQueue a b-\u003e[b]",
        "package": "pqueue",
        "partial": "",
        "signature": "MinPQueue k a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Returns the empty priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Returns the empty priority queue",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "empty",
        "normalized": "",
        "package": "pqueue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Filter all values that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinPQueue k a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Filter all values that satisfy the predicate",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eMinPQueue b a-\u003eMinPQueue b a",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMinPQueue k a-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:filterWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Filter all values that satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e MinPQueue k a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#filterWithKey",
        "fct-type": "function",
        "title": "filterWithKey"
      },
      "index": {
        "description": "Filter all values that satisfy the predicate",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "filterWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMinPQueue a b-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMinPQueue k a-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The minimal (key, element) in the queue.  Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if empty.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e (k, a)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "The minimal key element in the queue Calls error if empty",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "findMin",
        "normalized": "MinPQueue a b-\u003e(a,b)",
        "package": "pqueue",
        "partial": "Min",
        "signature": "MinPQueue k a-\u003e(k,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:foldlU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  An unordered left fold over the elements of the queue, in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e MinPQueue k a -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Min.html#foldlU",
        "fct-type": "function",
        "title": "foldlU"
      },
      "index": {
        "description": "An unordered left fold over the elements of the queue in no particular order",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "foldlU",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMinPQueue c b-\u003ea",
        "package": "pqueue",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eMinPQueue k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:foldlWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Fold the keys and values in the map, such that \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldlWithKey\u003c/a\u003e\u003c/code\u003e f z q == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e . f) z (\u003ccode\u003etoAscList\u003c/code\u003e q)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you do not care about the traversal order, consider using \u003ccode\u003e\u003ca\u003efoldlWithKeyU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(b -\u003e k -\u003e a -\u003e b) -\u003e b -\u003e MinPQueue k a -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#foldlWithKey",
        "fct-type": "function",
        "title": "foldlWithKey"
      },
      "index": {
        "description": "log Fold the keys and values in the map such that foldlWithKey foldl uncurry toAscList If you do not care about the traversal order consider using foldlWithKeyU",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "foldlWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eMinPQueue b c-\u003ea",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(b-\u003ek-\u003ea-\u003eb)-\u003eb-\u003eMinPQueue k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:foldlWithKeyU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  An unordered left fold over the elements of the queue, in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(b -\u003e k -\u003e a -\u003e b) -\u003e b -\u003e MinPQueue k a -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#foldlWithKeyU",
        "fct-type": "function",
        "title": "foldlWithKeyU"
      },
      "index": {
        "description": "An unordered left fold over the elements of the queue in no particular order",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "foldlWithKeyU",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eMinPQueue b c-\u003ea",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(b-\u003ek-\u003ea-\u003eb)-\u003eb-\u003eMinPQueue k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:foldrU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  An unordered right fold over the elements of the queue, in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e MinPQueue k a -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Min.html#foldrU",
        "fct-type": "function",
        "title": "foldrU"
      },
      "index": {
        "description": "An unordered right fold over the elements of the queue in no particular order",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "foldrU",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMinPQueue c a-\u003eb",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMinPQueue k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:foldrWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Fold the keys and values in the map, such that \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldrWithKey\u003c/a\u003e\u003c/code\u003e f z q == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e f) z (\u003ccode\u003etoAscList\u003c/code\u003e q)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you do not care about the traversal order, consider using \u003ccode\u003e\u003ca\u003efoldrWithKeyU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e MinPQueue k a -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#foldrWithKey",
        "fct-type": "function",
        "title": "foldrWithKey"
      },
      "index": {
        "description": "log Fold the keys and values in the map such that foldrWithKey foldr uncurry toAscList If you do not care about the traversal order consider using foldrWithKeyU",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "foldrWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eMinPQueue a b-\u003ec",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eMinPQueue k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:foldrWithKeyU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  An unordered right fold over the elements of the queue, in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e MinPQueue k a -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#foldrWithKeyU",
        "fct-type": "function",
        "title": "foldrWithKeyU"
      },
      "index": {
        "description": "An unordered right fold over the elements of the queue in no particular order",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "foldrWithKeyU",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eMinPQueue a b-\u003ec",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eMinPQueue k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Build a priority queue from an ascending list of (key, value) pairs.  \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "[(k, a)] -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Build priority queue from an ascending list of key value pairs The precondition is not checked",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "fromAscList",
        "normalized": "[(a,b)]-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "Asc List",
        "signature": "[(k,a)]-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:fromDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Build a priority queue from a descending list of (key, value) pairs.  \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "[(k, a)] -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#fromDescList",
        "fct-type": "function",
        "title": "fromDescList"
      },
      "index": {
        "description": "Build priority queue from descending list of key value pairs The precondition is not checked",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "fromDescList",
        "normalized": "[(a,b)]-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "Desc List",
        "signature": "[(k,a)]-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Build a priority queue from the list of (key, value) pairs.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "[(k, a)] -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Build priority queue from the list of key value pairs",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "List",
        "signature": "[(k,a)]-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:getMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The minimal (key, element) in the queue, if the queue is nonempty.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e Maybe (k, a)",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#getMin",
        "fct-type": "function",
        "title": "getMin"
      },
      "index": {
        "description": "The minimal key element in the queue if the queue is nonempty",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "getMin",
        "normalized": "MinPQueue a b-\u003eMaybe(a,b)",
        "package": "pqueue",
        "partial": "Min",
        "signature": "MinPQueue k a-\u003eMaybe(k,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eAmortized \u003cem\u003eO(1)\u003c/em\u003e, worst-case \u003cem\u003eO(log n)\u003c/em\u003e.  Inserts\n an element with the specified key into the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "k -\u003e a -\u003e MinPQueue k a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Amortized worst-case log Inserts an element with the specified key into the queue",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eMinPQueue a b-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "",
        "signature": "k-\u003ea-\u003eMinPQueue k a-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Return all keys of the queue in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e [k]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "log Return all keys of the queue in ascending order",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "keys",
        "normalized": "MinPQueue a b-\u003e[a]",
        "package": "pqueue",
        "partial": "",
        "signature": "MinPQueue k a-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:keysU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Return all keys of the queue in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e [k]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#keysU",
        "fct-type": "function",
        "title": "keysU"
      },
      "index": {
        "description": "Return all keys of the queue in no particular order",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "keysU",
        "normalized": "MinPQueue a b-\u003e[a]",
        "package": "pqueue",
        "partial": "",
        "signature": "MinPQueue k a-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map a function over all values in the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e b) -\u003e MinPQueue k a -\u003e MinPQueue k b",
        "fct-source": "src/Data-PQueue-Prio-Min.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the queue",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eMinPQueue c a-\u003eMinPQueue c b",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eMinPQueue k a-\u003eMinPQueue k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:mapEither",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Either b c) -\u003e MinPQueue k a -\u003e (MinPQueue k b, MinPQueue k c)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#mapEither",
        "fct-type": "function",
        "title": "mapEither"
      },
      "index": {
        "description": "Map values and separate the Left and Right results",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "mapEither",
        "normalized": "(a-\u003eEither b c)-\u003eMinPQueue d a-\u003e(MinPQueue d b,MinPQueue d c)",
        "package": "pqueue",
        "partial": "Either",
        "signature": "(a-\u003eEither b c)-\u003eMinPQueue k a-\u003e(MinPQueue k b,MinPQueue k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:mapEitherWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Either b c) -\u003e MinPQueue k a -\u003e (MinPQueue k b, MinPQueue k c)",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#mapEitherWithKey",
        "fct-type": "function",
        "title": "mapEitherWithKey"
      },
      "index": {
        "description": "Map values and separate the Left and Right results",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "mapEitherWithKey",
        "normalized": "(a-\u003eb-\u003eEither c d)-\u003eMinPQueue a b-\u003e(MinPQueue a c,MinPQueue a d)",
        "package": "pqueue",
        "partial": "Either With Key",
        "signature": "(k-\u003ea-\u003eEither b c)-\u003eMinPQueue k a-\u003e(MinPQueue k b,MinPQueue k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:mapKeys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapKeys\u003c/a\u003e\u003c/code\u003e f q\u003c/code\u003e is the queue obtained by applying \u003ccode\u003ef\u003c/code\u003e to each key of \u003ccode\u003eq\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e k') -\u003e MinPQueue k a -\u003e MinPQueue k' a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#mapKeys",
        "fct-type": "function",
        "title": "mapKeys"
      },
      "index": {
        "description": "mapKeys is the queue obtained by applying to each key of",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "mapKeys",
        "normalized": "(a-\u003eb)-\u003eMinPQueue a c-\u003eMinPQueue b c",
        "package": "pqueue",
        "partial": "Keys",
        "signature": "(k-\u003ek')-\u003eMinPQueue k a-\u003eMinPQueue k' a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:mapKeysMonotonic",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapKeysMonotonic\u003c/a\u003e\u003c/code\u003e f q == \u003ccode\u003emapKeys\u003c/code\u003e f q\u003c/code\u003e, but only works when \u003ccode\u003ef\u003c/code\u003e is strictly\n monotonic.  \u003cem\u003eThe precondition is not checked.\u003c/em\u003e  This function has better performance than\n \u003ccode\u003emapKeys\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e k') -\u003e MinPQueue k a -\u003e MinPQueue k' a",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#mapKeysMonotonic",
        "fct-type": "function",
        "title": "mapKeysMonotonic"
      },
      "index": {
        "description": "mapKeysMonotonic mapKeys but only works when is strictly monotonic The precondition is not checked This function has better performance than mapKeys",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "mapKeysMonotonic",
        "normalized": "(a-\u003eb)-\u003eMinPQueue a c-\u003eMinPQueue b c",
        "package": "pqueue",
        "partial": "Keys Monotonic",
        "signature": "(k-\u003ek')-\u003eMinPQueue k a-\u003eMinPQueue k' a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Maybe b) -\u003e MinPQueue k a -\u003e MinPQueue k b",
        "fct-source": "src/Data-PQueue-Prio-Min.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Map values and collect the Just results",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eMinPQueue c a-\u003eMinPQueue c b",
        "package": "pqueue",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eMinPQueue k a-\u003eMinPQueue k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:mapMaybeWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Maybe b) -\u003e MinPQueue k a -\u003e MinPQueue k b",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#mapMaybeWithKey",
        "fct-type": "function",
        "title": "mapMaybeWithKey"
      },
      "index": {
        "description": "Map values and collect the Just results",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "mapMaybeWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe c)-\u003eMinPQueue a b-\u003eMinPQueue a c",
        "package": "pqueue",
        "partial": "Maybe With Key",
        "signature": "(k-\u003ea-\u003eMaybe b)-\u003eMinPQueue k a-\u003eMinPQueue k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:mapWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Map a function over all values in the queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e b) -\u003e MinPQueue k a -\u003e MinPQueue k b",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#mapWithKey",
        "fct-type": "function",
        "title": "mapWithKey"
      },
      "index": {
        "description": "Map function over all values in the queue",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "mapWithKey",
        "normalized": "(a-\u003eb-\u003ec)-\u003eMinPQueue a b-\u003eMinPQueue a c",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb)-\u003eMinPQueue k a-\u003eMinPQueue k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Retrieves the value associated with the minimal key of the queue, and the queue\n stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e Maybe (a, MinPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "log Retrieves the value associated with the minimal key of the queue and the queue stripped of that element or Nothing if passed an empty queue",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "minView",
        "normalized": "MinPQueue a b-\u003eMaybe(b,MinPQueue a b)",
        "package": "pqueue",
        "partial": "View",
        "signature": "MinPQueue k a-\u003eMaybe(a,MinPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:minViewWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Retrieves the minimal (key, value) pair of the map, and the map stripped of that\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty map.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e Maybe ((k, a), MinPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#minViewWithKey",
        "fct-type": "function",
        "title": "minViewWithKey"
      },
      "index": {
        "description": "log Retrieves the minimal key value pair of the map and the map stripped of that element or Nothing if passed an empty map",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "minViewWithKey",
        "normalized": "MinPQueue a b-\u003eMaybe((a,b),MinPQueue a b)",
        "package": "pqueue",
        "partial": "View With Key",
        "signature": "MinPQueue k a-\u003eMaybe((k,a),MinPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Checks if this priority queue is empty.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e Bool",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Checks if this priority queue is empty",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "null",
        "normalized": "MinPQueue a b-\u003eBool",
        "package": "pqueue",
        "partial": "",
        "signature": "MinPQueue k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Partition the queue according to a predicate.  The first queue contains all elements\n which satisfy the predicate, the second all elements that fail the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinPQueue k a -\u003e (MinPQueue k a, MinPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Partition the queue according to predicate The first queue contains all elements which satisfy the predicate the second all elements that fail the predicate",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eMinPQueue b a-\u003e(MinPQueue b a,MinPQueue b a)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMinPQueue k a-\u003e(MinPQueue k a,MinPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:partitionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Partition the queue according to a predicate.  The first queue contains all elements\n which satisfy the predicate, the second all elements that fail the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e MinPQueue k a -\u003e (MinPQueue k a, MinPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#partitionWithKey",
        "fct-type": "function",
        "title": "partitionWithKey"
      },
      "index": {
        "description": "Partition the queue according to predicate The first queue contains all elements which satisfy the predicate the second all elements that fail the predicate",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "partitionWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMinPQueue a b-\u003e(MinPQueue a b,MinPQueue a b)",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMinPQueue k a-\u003e(MinPQueue k a,MinPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:seqSpine",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Analogous to \u003ccode\u003edeepseq\u003c/code\u003e in the \u003ccode\u003edeepseq\u003c/code\u003e package, but only forces the spine of the binomial heap.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e b -\u003e b",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#seqSpine",
        "fct-type": "function",
        "title": "seqSpine"
      },
      "index": {
        "description": "log Analogous to deepseq in the deepseq package but only forces the spine of the binomial heap",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "seqSpine",
        "normalized": "MinPQueue a b-\u003ec-\u003ec",
        "package": "pqueue",
        "partial": "Spine",
        "signature": "MinPQueue k a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Constructs a singleton priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "k -\u003e a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Constructs singleton priority queue",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "",
        "signature": "k-\u003ea-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Returns the size of this priority queue.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e Int",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Returns the size of this priority queue",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "size",
        "normalized": "MinPQueue a b-\u003eInt",
        "package": "pqueue",
        "partial": "",
        "signature": "MinPQueue k a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p q, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p q)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinPQueue k a -\u003e ([(k, a)], MinPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "Equivalent to takeWhile dropWhile",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003eMinPQueue b a-\u003e([(b,a)],MinPQueue b a)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMinPQueue k a-\u003e([(k,a)],MinPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:spanWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhileWithKey\u003c/a\u003e\u003c/code\u003e p q, \u003ccode\u003e\u003ca\u003edropWhileWithKey\u003c/a\u003e\u003c/code\u003e p q)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e MinPQueue k a -\u003e ([(k, a)], MinPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#spanWithKey",
        "fct-type": "function",
        "title": "spanWithKey"
      },
      "index": {
        "description": "Equivalent to takeWhileWithKey dropWhileWithKey",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "spanWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMinPQueue a b-\u003e([(a,b)],MinPQueue a b)",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMinPQueue k a-\u003e([(k,a)],MinPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e k q, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e k q)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "Int -\u003e MinPQueue k a -\u003e ([(k, a)], MinPQueue k a)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "log Equivalent to take drop",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "splitAt",
        "normalized": "Int-\u003eMinPQueue a b-\u003e([(a,b)],MinPQueue a b)",
        "package": "pqueue",
        "partial": "At",
        "signature": "Int-\u003eMinPQueue k a-\u003e([(k,a)],MinPQueue k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k log n)\u003c/em\u003e.  Takes the first \u003ccode\u003ek\u003c/code\u003e (key, value) pairs in the queue, or the first \u003ccode\u003en\u003c/code\u003e if \u003ccode\u003ek \u003e= n\u003c/code\u003e.\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e k q == \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e q)\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "Int -\u003e MinPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "log Takes the first key value pairs in the queue or the first if take take toAscList",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "take",
        "normalized": "Int-\u003eMinPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "",
        "signature": "Int-\u003eMinPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the longest possible prefix of elements satisfying the predicate.\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p q == \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e (p . \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e) (\u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e q)\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Bool) -\u003e MinPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "Takes the longest possible prefix of elements satisfying the predicate takeWhile takeWhile snd toAscList",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003eMinPQueue b a-\u003e[(b,a)]",
        "package": "pqueue",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eMinPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:takeWhileWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the longest possible prefix of elements satisfying the predicate.\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p q == \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e (uncurry p) (\u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e q)\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e MinPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#takeWhileWithKey",
        "fct-type": "function",
        "title": "takeWhileWithKey"
      },
      "index": {
        "description": "Takes the longest possible prefix of elements satisfying the predicate takeWhile takeWhile uncurry toAscList",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "takeWhileWithKey",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMinPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "While With Key",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMinPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Return all (key, value) pairs in ascending order by key.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "log Return all key value pairs in ascending order by key",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "toAscList",
        "normalized": "MinPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "Asc List",
        "signature": "MinPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:toDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Return all (key, value) pairs in descending order by key.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#toDescList",
        "fct-type": "function",
        "title": "toDescList"
      },
      "index": {
        "description": "log Return all key value pairs in descending order by key",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "toDescList",
        "normalized": "MinPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "Desc List",
        "signature": "MinPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Equivalent to \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the traversal order is irrelevant, consider using \u003ccode\u003e\u003ca\u003etoListU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "log Equivalent to toAscList If the traversal order is irrelevant consider using toListU",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "toList",
        "normalized": "MinPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "List",
        "signature": "MinPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:toListU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Returns all (key, value) pairs in the queue in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e [(k, a)]",
        "fct-source": "src/Data-PQueue-Prio-Min.html#toListU",
        "fct-type": "function",
        "title": "toListU"
      },
      "index": {
        "description": "Returns all key value pairs in the queue in no particular order",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "toListU",
        "normalized": "MinPQueue a b-\u003e[(a,b)]",
        "package": "pqueue",
        "partial": "List",
        "signature": "MinPQueue k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:traverseU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  An unordered traversal over a priority queue, in no particular order.\n While there is no guarantee in which order the elements are traversed, the resulting\n priority queue will be perfectly valid.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e f b) -\u003e MinPQueue k a -\u003e f (MinPQueue k b)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#traverseU",
        "fct-type": "function",
        "title": "traverseU"
      },
      "index": {
        "description": "An unordered traversal over priority queue in no particular order While there is no guarantee in which order the elements are traversed the resulting priority queue will be perfectly valid",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "traverseU",
        "normalized": "(a-\u003eb c)-\u003eMinPQueue d a-\u003eb(MinPQueue d c)",
        "package": "pqueue",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003eMinPQueue k a-\u003ef(MinPQueue k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:traverseWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Traverses the elements of the queue in ascending order by key.\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etraverseWithKey\u003c/a\u003e\u003c/code\u003e f q == \u003ccode\u003e\u003ca\u003efromAscList\u003c/a\u003e\u003c/code\u003e \u003ca\u003e$\u003c/a\u003e \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e f) (\u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e q)\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eIf you do not care about the \u003cem\u003eorder\u003c/em\u003e of the traversal, consider using \u003ccode\u003e\u003ca\u003etraverseWithKeyU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e f b) -\u003e MinPQueue k a -\u003e f (MinPQueue k b)",
        "fct-source": "src/Data-PQueue-Prio-Min.html#traverseWithKey",
        "fct-type": "function",
        "title": "traverseWithKey"
      },
      "index": {
        "description": "log Traverses the elements of the queue in ascending order by key traverseWithKey fromAscList traverse uncurry toAscList If you do not care about the order of the traversal consider using traverseWithKeyU",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "traverseWithKey",
        "normalized": "(a-\u003eb-\u003ec d)-\u003eMinPQueue a b-\u003ec(MinPQueue a d)",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003ef b)-\u003eMinPQueue k a-\u003ef(MinPQueue k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:traverseWithKeyU",
      "description": {
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e f b) -\u003e MinPQueue k a -\u003e f (MinPQueue k b)",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#traverseWithKeyU",
        "fct-type": "function",
        "title": "traverseWithKeyU"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "traverseWithKeyU",
        "normalized": "(a-\u003eb-\u003ec d)-\u003eMinPQueue a b-\u003ec(MinPQueue a d)",
        "package": "pqueue",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003ef b)-\u003eMinPQueue k a-\u003ef(MinPQueue k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eAmortized \u003cem\u003eO(log(min(n1, n2)))\u003c/em\u003e, worst-case \u003cem\u003eO(log(max(n1, n2)))\u003c/em\u003e.  Returns the union\n of the two specified queues.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "MinPQueue k a -\u003e MinPQueue k a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Amortized log min n1 n2 worst-case log max n1 n2 Returns the union of the two specified queues",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "union",
        "normalized": "MinPQueue a b-\u003eMinPQueue a b-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "",
        "signature": "MinPQueue k a-\u003eMinPQueue k a-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of queues: (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "[MinPQueue k a] -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "The union of list of queues unions foldl union empty",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "unions",
        "normalized": "[MinPQueue a b]-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "",
        "signature": "[MinPQueue k a]-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:updateMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  (Actually \u003cem\u003eO(1)\u003c/em\u003e if there's no deletion.)  Update the value at the minimum key.\n If the queue is empty, does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(a -\u003e Maybe a) -\u003e MinPQueue k a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Min.html#updateMin",
        "fct-type": "function",
        "title": "updateMin"
      },
      "index": {
        "description": "log Actually if there no deletion Update the value at the minimum key If the queue is empty does nothing",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "updateMin",
        "normalized": "(a-\u003eMaybe a)-\u003eMinPQueue b a-\u003eMinPQueue b a",
        "package": "pqueue",
        "partial": "Min",
        "signature": "(a-\u003eMaybe a)-\u003eMinPQueue k a-\u003eMinPQueue k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pqueue/docs/Data-PQueue-Prio-Min.html#v:updateMinWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  (Actually \u003cem\u003eO(1)\u003c/em\u003e if there's no deletion.)  Update the value at the minimum key.\n If the queue is empty, does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.PQueue.Prio.Min",
        "fct-package": "pqueue",
        "fct-signature": "(k -\u003e a -\u003e Maybe a) -\u003e MinPQueue k a -\u003e MinPQueue k a",
        "fct-source": "src/Data-PQueue-Prio-Internals.html#updateMinWithKey",
        "fct-type": "function",
        "title": "updateMinWithKey"
      },
      "index": {
        "description": "log Actually if there no deletion Update the value at the minimum key If the queue is empty does nothing",
        "hierarchy": "Data PQueue Prio Min",
        "module": "Data.PQueue.Prio.Min",
        "name": "updateMinWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe b)-\u003eMinPQueue a b-\u003eMinPQueue a b",
        "package": "pqueue",
        "partial": "Min With Key",
        "signature": "(k-\u003ea-\u003eMaybe a)-\u003eMinPQueue k a-\u003eMinPQueue k a"
      }
    }
  }
]