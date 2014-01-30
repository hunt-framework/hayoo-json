[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue-Show.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA newtype used entirely for its derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instances. These are\nthen used by \u003ccode\u003eshowDequeue\u003c/code\u003e and \u003ccode\u003ereadDequeue\u003c/code\u003e to make writing \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\ninstances for \u003ccode\u003e\u003ca\u003eDequeue\u003c/a\u003e\u003c/code\u003es easier.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Dequeue.Show",
        "fct-package": "dequeue",
        "fct-signature": "module",
        "fct-source": "src/Data-Dequeue-Show.html",
        "fct-type": "module",
        "title": "Show"
      },
      "index": {
        "description": "newtype used entirely for its derived Read and Show instances These are then used by showDequeue and readDequeue to make writing Read and Show instances for Dequeue easier",
        "hierarchy": "Data Dequeue Show",
        "module": "Data.Dequeue.Show",
        "name": "Show",
        "normalized": "",
        "package": "dequeue",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue-Show.html#t:Dequeue",
      "description": {
        "fct-module": "Data.Dequeue.Show",
        "fct-package": "dequeue",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Dequeue-Show.html#Dequeue",
        "fct-type": "newtype",
        "title": "Dequeue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dequeue Show",
        "module": "Data.Dequeue.Show",
        "name": "Dequeue",
        "normalized": "",
        "package": "dequeue",
        "partial": "Dequeue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue-Show.html#v:Dequeue",
      "description": {
        "fct-module": "Data.Dequeue.Show",
        "fct-package": "dequeue",
        "fct-signature": "Dequeue [a]",
        "fct-source": "src/Data-Dequeue-Show.html#Dequeue",
        "fct-type": "function",
        "title": "Dequeue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dequeue Show",
        "module": "Data.Dequeue.Show",
        "name": "Dequeue",
        "normalized": "Dequeue[a]",
        "package": "dequeue",
        "partial": "Dequeue",
        "signature": "Dequeue[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA typeclass for double-ended queues, and an implementation of Banker's\nDequeues, as described in Chris Okasaki's Purely Functional Data Structures.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "module",
        "fct-source": "src/Data-Dequeue.html",
        "fct-type": "module",
        "title": "Dequeue"
      },
      "index": {
        "description": "typeclass for double-ended queues and an implementation of Banker Dequeues as described in Chris Okasaki Purely Functional Data Structures",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "Dequeue",
        "normalized": "",
        "package": "dequeue",
        "partial": "Dequeue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#t:BankersDequeue",
      "description": {
        "fct-descr": "\u003cp\u003eAn implementation of Banker's Dequeues, as described in Chris Okasaki's\n   Purely Functional Data Structures. The functions for the \u003ccode\u003e\u003ca\u003eDequeue\u003c/a\u003e\u003c/code\u003e\n   instance have the following complexities (where n is the \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e of the\n   queue):\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e: O(1)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e: O(1)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e: O(1)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etakeFront\u003c/a\u003e\u003c/code\u003e: O(n)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etakeBack\u003c/a\u003e\u003c/code\u003e: O(n)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epushFront\u003c/a\u003e\u003c/code\u003e: O(1) amortised\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epopFront\u003c/a\u003e\u003c/code\u003e: O(1) amortised\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epushBack\u003c/a\u003e\u003c/code\u003e: O(1) amortised\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epopBack\u003c/a\u003e\u003c/code\u003e: O(1) amortised\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e: O(n)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "data",
        "fct-source": "src/Data-Dequeue.html#BankersDequeue",
        "fct-type": "data",
        "title": "BankersDequeue"
      },
      "index": {
        "description": "An implementation of Banker Dequeues as described in Chris Okasaki Purely Functional Data Structures The functions for the Dequeue instance have the following complexities where is the length of the queue length first last takeFront takeBack pushFront amortised popFront amortised pushBack amortised popBack amortised fromList",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "BankersDequeue",
        "normalized": "",
        "package": "dequeue",
        "partial": "Bankers Dequeue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#t:Dequeue",
      "description": {
        "fct-descr": "\u003cp\u003eA typeclass for double-ended queues.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "class",
        "fct-source": "src/Data-Dequeue.html#Dequeue",
        "fct-type": "class",
        "title": "Dequeue"
      },
      "index": {
        "description": "typeclass for double-ended queues",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "Dequeue",
        "normalized": "",
        "package": "dequeue",
        "partial": "Dequeue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an empty queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a",
        "fct-source": "src/Data-Dequeue.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "Generates an empty queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "empty",
        "normalized": "",
        "package": "dequeue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:first",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the item on the front of the queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e Maybe a",
        "fct-source": "src/Data-Dequeue.html#first",
        "fct-type": "method",
        "title": "first"
      },
      "index": {
        "description": "Returns the item on the front of the queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "first",
        "normalized": "a b-\u003eMaybe b",
        "package": "dequeue",
        "partial": "",
        "signature": "q a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a list into a queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "[a] -\u003e q a",
        "fct-source": "src/Data-Dequeue.html#fromList",
        "fct-type": "method",
        "title": "fromList"
      },
      "index": {
        "description": "Converts list into queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "fromList",
        "normalized": "[a]-\u003eb a",
        "package": "dequeue",
        "partial": "List",
        "signature": "[a]-\u003eq a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the item on the end of the queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e Maybe a",
        "fct-source": "src/Data-Dequeue.html#last",
        "fct-type": "method",
        "title": "last"
      },
      "index": {
        "description": "Returns the item on the end of the queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "last",
        "normalized": "a b-\u003eMaybe b",
        "package": "dequeue",
        "partial": "",
        "signature": "q a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of elements in this queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e Int",
        "fct-source": "src/Data-Dequeue.html#length",
        "fct-type": "method",
        "title": "length"
      },
      "index": {
        "description": "Returns the number of elements in this queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "length",
        "normalized": "a b-\u003eInt",
        "package": "dequeue",
        "partial": "",
        "signature": "q a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if this queue is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#null",
        "fct-type": "method",
        "title": "null"
      },
      "index": {
        "description": "Returns True if this queue is empty",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "null",
        "normalized": "a b-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "q a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:popBack",
      "description": {
        "fct-descr": "\u003cp\u003ePops an item from the back of the queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e (Maybe a, q a)",
        "fct-source": "src/Data-Dequeue.html#popBack",
        "fct-type": "method",
        "title": "popBack"
      },
      "index": {
        "description": "Pops an item from the back of the queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "popBack",
        "normalized": "a b-\u003e(Maybe b,a b)",
        "package": "dequeue",
        "partial": "Back",
        "signature": "q a-\u003e(Maybe a,q a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:popFront",
      "description": {
        "fct-descr": "\u003cp\u003ePops an item from the front of the queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e (Maybe a, q a)",
        "fct-source": "src/Data-Dequeue.html#popFront",
        "fct-type": "method",
        "title": "popFront"
      },
      "index": {
        "description": "Pops an item from the front of the queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "popFront",
        "normalized": "a b-\u003e(Maybe b,a b)",
        "package": "dequeue",
        "partial": "Front",
        "signature": "q a-\u003e(Maybe a,q a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_fromList_toList",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that fromList . toList is the identity.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_fromList_toList",
        "fct-type": "function",
        "title": "prop_fromList_toList"
      },
      "index": {
        "description": "Validates that fromList toList is the identity",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_fromList_toList",
        "normalized": "a b-\u003eBool",
        "package": "dequeue",
        "partial": "List List",
        "signature": "q a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_fromList_toList_bq",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that fromList . toList is the identity for a \u003ccode\u003e\u003ca\u003eBankersDequeue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_fromList_toList_bq",
        "fct-type": "function",
        "title": "prop_fromList_toList_bq"
      },
      "index": {
        "description": "Validates that fromList toList is the identity for BankersDequeue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_fromList_toList_bq",
        "normalized": "BankersDequeue Int-\u003eBool",
        "package": "dequeue",
        "partial": "List List",
        "signature": "BankersDequeue Int-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_length_toList",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that the length of a queue is the same as the length of the\n   list generated from the queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_length_toList",
        "fct-type": "function",
        "title": "prop_length_toList"
      },
      "index": {
        "description": "Validates that the length of queue is the same as the length of the list generated from the queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_length_toList",
        "normalized": "a b-\u003eBool",
        "package": "dequeue",
        "partial": "List",
        "signature": "q a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_length_toList_bq",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that the length of a \u003ccode\u003e\u003ca\u003eBankersDequeue\u003c/a\u003e\u003c/code\u003e is the same as the length\n   of the list generated from the queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_length_toList_bq",
        "fct-type": "function",
        "title": "prop_length_toList_bq"
      },
      "index": {
        "description": "Validates that the length of BankersDequeue is the same as the length of the list generated from the queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_length_toList_bq",
        "normalized": "BankersDequeue Int-\u003eBool",
        "package": "dequeue",
        "partial": "List",
        "signature": "BankersDequeue Int-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_pop_back_bq_balance",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that a \u003ccode\u003e\u003ca\u003eBankersDequeue\u003c/a\u003e\u003c/code\u003e remains balanced despite repeated\n   pops from the back.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_pop_back_bq_balance",
        "fct-type": "function",
        "title": "prop_pop_back_bq_balance"
      },
      "index": {
        "description": "Validates that BankersDequeue remains balanced despite repeated pops from the back",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_pop_back_bq_balance",
        "normalized": "BankersDequeue Int-\u003eInt-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "BankersDequeue Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_pop_front_bq_balance",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that a \u003ccode\u003e\u003ca\u003eBankersDequeue\u003c/a\u003e\u003c/code\u003e remains balanced despite repeated\n   pops from the front.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_pop_front_bq_balance",
        "fct-type": "function",
        "title": "prop_pop_front_bq_balance"
      },
      "index": {
        "description": "Validates that BankersDequeue remains balanced despite repeated pops from the front",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_pop_front_bq_balance",
        "normalized": "BankersDequeue Int-\u003eInt-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "BankersDequeue Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_push_back",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e returns the last \u003ccode\u003epushBack'\u003c/code\u003ed element.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_push_back",
        "fct-type": "function",
        "title": "prop_push_back"
      },
      "index": {
        "description": "Validates that last returns the last pushBack element",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_push_back",
        "normalized": "a b-\u003eb-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "q a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_push_back_bq",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e returns the last \u003ccode\u003epushBack'\u003c/code\u003ed element.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_push_back_bq",
        "fct-type": "function",
        "title": "prop_push_back_bq"
      },
      "index": {
        "description": "Validates that last returns the last pushBack element",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_push_back_bq",
        "normalized": "BankersDequeue Int-\u003eInt-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "BankersDequeue Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_push_back_bq_balance",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that a \u003ccode\u003e\u003ca\u003eBankersDequeue\u003c/a\u003e\u003c/code\u003e remains balanced despite repeated\n   pushes to the back.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_push_back_bq_balance",
        "fct-type": "function",
        "title": "prop_push_back_bq_balance"
      },
      "index": {
        "description": "Validates that BankersDequeue remains balanced despite repeated pushes to the back",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_push_back_bq_balance",
        "normalized": "BankersDequeue Int-\u003eInt-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "BankersDequeue Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_push_front",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e returns the last \u003ccode\u003epushFront'\u003c/code\u003ed element.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_push_front",
        "fct-type": "function",
        "title": "prop_push_front"
      },
      "index": {
        "description": "Validates that first returns the last pushFront element",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_push_front",
        "normalized": "a b-\u003eb-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "q a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_push_front_bq",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e returns the last \u003ccode\u003epushFront'\u003c/code\u003ed element.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_push_front_bq",
        "fct-type": "function",
        "title": "prop_push_front_bq"
      },
      "index": {
        "description": "Validates that first returns the last pushFront element",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_push_front_bq",
        "normalized": "BankersDequeue Int-\u003eInt-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "BankersDequeue Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_push_front_bq_balance",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that a \u003ccode\u003e\u003ca\u003eBankersDequeue\u003c/a\u003e\u003c/code\u003e remains balanced despite repeated\n   pushes to the front.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_push_front_bq_balance",
        "fct-type": "function",
        "title": "prop_push_front_bq_balance"
      },
      "index": {
        "description": "Validates that BankersDequeue remains balanced despite repeated pushes to the front",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_push_front_bq_balance",
        "normalized": "BankersDequeue Int-\u003eInt-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "BankersDequeue Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_pushpop_back",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that if you push, then pop, the back of the queue,\n   you get the same queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_pushpop_back",
        "fct-type": "function",
        "title": "prop_pushpop_back"
      },
      "index": {
        "description": "Validates that if you push then pop the back of the queue you get the same queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_pushpop_back",
        "normalized": "a b-\u003eb-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "q a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_pushpop_back_bq",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that if you push, then pop, the back of a \u003ccode\u003e\u003ca\u003eBankersDequeue\u003c/a\u003e\u003c/code\u003e,\n   you get the same queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_pushpop_back_bq",
        "fct-type": "function",
        "title": "prop_pushpop_back_bq"
      },
      "index": {
        "description": "Validates that if you push then pop the back of BankersDequeue you get the same queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_pushpop_back_bq",
        "normalized": "BankersDequeue Int-\u003eInt-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "BankersDequeue Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_pushpop_front",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that if you push, then pop, the front of the queue,\n   you get the same queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_pushpop_front",
        "fct-type": "function",
        "title": "prop_pushpop_front"
      },
      "index": {
        "description": "Validates that if you push then pop the front of the queue you get the same queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_pushpop_front",
        "normalized": "a b-\u003eb-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "q a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_pushpop_front_bq",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that if you push, then pop, the front of a \u003ccode\u003eBankersQueue\u003c/code\u003e,\n   you get the same queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_pushpop_front_bq",
        "fct-type": "function",
        "title": "prop_pushpop_front_bq"
      },
      "index": {
        "description": "Validates that if you push then pop the front of BankersQueue you get the same queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_pushpop_front_bq",
        "normalized": "BankersDequeue Int-\u003eInt-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "BankersDequeue Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_read_show_bq",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that a \u003ccode\u003e\u003ca\u003eBankersDequeue\u003c/a\u003e\u003c/code\u003e has read and show instances that are\n   the inverse of each other.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_read_show_bq",
        "fct-type": "function",
        "title": "prop_read_show_bq"
      },
      "index": {
        "description": "Validates that BankersDequeue has read and show instances that are the inverse of each other",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_read_show_bq",
        "normalized": "BankersDequeue Int-\u003eBool",
        "package": "dequeue",
        "partial": "",
        "signature": "BankersDequeue Int-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_takeBack",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that the last \u003ccode\u003en\u003c/code\u003e pushed elements are returned by takeBack.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_takeBack",
        "fct-type": "function",
        "title": "prop_takeBack"
      },
      "index": {
        "description": "Validates that the last pushed elements are returned by takeBack",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_takeBack",
        "normalized": "a b-\u003e[b]-\u003eBool",
        "package": "dequeue",
        "partial": "Back",
        "signature": "q a-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_takeBack_bq",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that the last \u003ccode\u003en\u003c/code\u003e pushed elements are returned by takeBack.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e [Int] -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_takeBack_bq",
        "fct-type": "function",
        "title": "prop_takeBack_bq"
      },
      "index": {
        "description": "Validates that the last pushed elements are returned by takeBack",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_takeBack_bq",
        "normalized": "BankersDequeue Int-\u003e[Int]-\u003eBool",
        "package": "dequeue",
        "partial": "Back",
        "signature": "BankersDequeue Int-\u003e[Int]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_takeFront",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that the last \u003ccode\u003en\u003c/code\u003e pushed elements are returned by takeFront.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e [a] -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_takeFront",
        "fct-type": "function",
        "title": "prop_takeFront"
      },
      "index": {
        "description": "Validates that the last pushed elements are returned by takeFront",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_takeFront",
        "normalized": "a b-\u003e[b]-\u003eBool",
        "package": "dequeue",
        "partial": "Front",
        "signature": "q a-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:prop_takeFront_bq",
      "description": {
        "fct-descr": "\u003cp\u003eValidates that the last \u003ccode\u003en\u003c/code\u003e pushed elements are returned by takeFront.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "BankersDequeue Int -\u003e [Int] -\u003e Bool",
        "fct-source": "src/Data-Dequeue.html#prop_takeFront_bq",
        "fct-type": "function",
        "title": "prop_takeFront_bq"
      },
      "index": {
        "description": "Validates that the last pushed elements are returned by takeFront",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "prop_takeFront_bq",
        "normalized": "BankersDequeue Int-\u003e[Int]-\u003eBool",
        "package": "dequeue",
        "partial": "Front",
        "signature": "BankersDequeue Int-\u003e[Int]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:pushBack",
      "description": {
        "fct-descr": "\u003cp\u003ePushes an item onto the back of the queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e a -\u003e q a",
        "fct-source": "src/Data-Dequeue.html#pushBack",
        "fct-type": "method",
        "title": "pushBack"
      },
      "index": {
        "description": "Pushes an item onto the back of the queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "pushBack",
        "normalized": "a b-\u003eb-\u003ea b",
        "package": "dequeue",
        "partial": "Back",
        "signature": "q a-\u003ea-\u003eq a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:pushFront",
      "description": {
        "fct-descr": "\u003cp\u003ePushes an item onto the front of the queue.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e a -\u003e q a",
        "fct-source": "src/Data-Dequeue.html#pushFront",
        "fct-type": "method",
        "title": "pushFront"
      },
      "index": {
        "description": "Pushes an item onto the front of the queue",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "pushFront",
        "normalized": "a b-\u003eb-\u003ea b",
        "package": "dequeue",
        "partial": "Front",
        "signature": "q a-\u003ea-\u003eq a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:readDequeue",
      "description": {
        "fct-descr": "\u003cp\u003eSupport to make generating \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eDequeue\u003c/a\u003e\u003c/code\u003es easier. Use as\n   follows:\n\u003c/p\u003e\u003cpre\u003e\n   instance Read a =\u003e Read (MyDequeue a) where\n       readsPrec i = readDequeue $ readsPrec i\n\u003c/pre\u003e\u003cp\u003eThe resulting \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance will be portable between \u003ccode\u003eDeqeue\u003c/code\u003e instances,\n   and will not expose the details of how your \u003ccode\u003e\u003ca\u003eDequeue\u003c/a\u003e\u003c/code\u003e instance is\n   constructed.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "ReadS (Dequeue a) -\u003e ReadS (q a)",
        "fct-source": "src/Data-Dequeue.html#readDequeue",
        "fct-type": "function",
        "title": "readDequeue"
      },
      "index": {
        "description": "Support to make generating Read instances for Dequeue easier Use as follows instance Read Read MyDequeue where readsPrec readDequeue readsPrec The resulting Read instance will be portable between Deqeue instances and will not expose the details of how your Dequeue instance is constructed",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "readDequeue",
        "normalized": "ReadS(Dequeue a)-\u003eReadS(b a)",
        "package": "dequeue",
        "partial": "Dequeue",
        "signature": "ReadS(Dequeue a)-\u003eReadS(q a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:showDequeue",
      "description": {
        "fct-descr": "\u003cp\u003eSupport to make generating \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eDequeue\u003c/a\u003e\u003c/code\u003es easier. Use as\n   follows:\n\u003c/p\u003e\u003cpre\u003e\n   instance Show a =\u003e Show (MyDequeue a) where\n       show q = showDequeue q\n\u003c/pre\u003e\u003cp\u003eThe resulting \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance will be portable between \u003ccode\u003eDeqeue\u003c/code\u003e instances,\n   and will not expose the details of how your \u003ccode\u003e\u003ca\u003eDequeue\u003c/a\u003e\u003c/code\u003e instance is\n   constructed.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "q a -\u003e String",
        "fct-source": "src/Data-Dequeue.html#showDequeue",
        "fct-type": "function",
        "title": "showDequeue"
      },
      "index": {
        "description": "Support to make generating Show instances for Dequeue easier Use as follows instance Show Show MyDequeue where show showDequeue The resulting Show instance will be portable between Deqeue instances and will not expose the details of how your Dequeue instance is constructed",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "showDequeue",
        "normalized": "a b-\u003eString",
        "package": "dequeue",
        "partial": "Dequeue",
        "signature": "q a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:takeBack",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the last n items from the end of the queue, in the order they\n  would be popped.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "Int -\u003e q a -\u003e [a]",
        "fct-source": "src/Data-Dequeue.html#takeBack",
        "fct-type": "method",
        "title": "takeBack"
      },
      "index": {
        "description": "Returns the last items from the end of the queue in the order they would be popped",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "takeBack",
        "normalized": "Int-\u003ea b-\u003e[b]",
        "package": "dequeue",
        "partial": "Back",
        "signature": "Int-\u003eq a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dequeue/docs/Data-Dequeue.html#v:takeFront",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the first n items from the front of the queue, in the order\n   they would be popped.\n\u003c/p\u003e",
        "fct-module": "Data.Dequeue",
        "fct-package": "dequeue",
        "fct-signature": "Int -\u003e q a -\u003e [a]",
        "fct-source": "src/Data-Dequeue.html#takeFront",
        "fct-type": "method",
        "title": "takeFront"
      },
      "index": {
        "description": "Returns the first items from the front of the queue in the order they would be popped",
        "hierarchy": "Data Dequeue",
        "module": "Data.Dequeue",
        "name": "takeFront",
        "normalized": "Int-\u003ea b-\u003e[b]",
        "package": "dequeue",
        "partial": "Front",
        "signature": "Int-\u003eq a-\u003e[a]"
      }
    }
  }
]