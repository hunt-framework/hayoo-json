[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an implementation of a skip list in the \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e monad.\n The elements of the skip list are stored in a \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA skip list is a probabilistic data structure with dictionary operations\n (similar to Data.Map).\n In contrast to a balanced tree, a skip list does not need any \n (expensive) rebalancing operation, which makes it particularly suitable \n for concurrent programming. \n\u003c/p\u003e\u003cp\u003eSee: \u003cem\u003eWilliam Pugh. Skip Lists: A Probabilistic Alternative to Balanced Trees.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis module should be imported qualified.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eExample (GHCi):\u003c/em\u003e \n\u003c/p\u003e\u003cpre\u003e t \u003c- newIO 0.5 5  :: IO (TSkipList Int String) \n atomically $ sequence_ [ insert i (show i) t | i \u003c- [1..10] ]\n\n putStrLn =\u003c\u003c atomically (toString 100 t)\n 9\n 9\n 3 7 9\n 1 3 7 9\n 1 2 3 4 5 6 7 8 9 10\n\n atomically $ delete  7 t\n putStrLn =\u003c\u003c atomically (toString 100 t)\n 9\n 9\n 3 9\n 1 3 9\n 1 2 3 4 5 6 8 9 10\n \n atomically $ sequence [ lookup i t | i \u003c- [5..10] ]\n [Just \"5\",Just \"6\",Nothing,Just \"8\",Just \"9\",Just \"10\"]\n\n atomically $ update 8 \"X\" t\n atomically $ sequence [ lookup i t | i \u003c- [5..10] ]\n [Just \"5\",Just \"6\",Nothing,Just \"X\",Just \"9\",Just \"10\"]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-TSkipList.html",
        "fct-type": "module",
        "title": "TSkipList"
      },
      "index": {
        "description": "This module provides an implementation of skip list in the STM monad The elements of the skip list are stored in TVar skip list is probabilistic data structure with dictionary operations similar to Data.Map In contrast to balanced tree skip list does not need any expensive rebalancing operation which makes it particularly suitable for concurrent programming See William Pugh Skip Lists Probabilistic Alternative to Balanced Trees This module should be imported qualified Example GHCi newIO IO TSkipList Int String atomically sequence insert show putStrLn atomically toString atomically delete putStrLn atomically toString atomically sequence lookup Just Just Nothing Just Just Just atomically update atomically sequence lookup Just Just Nothing Just Just Just",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "TSkipList",
        "normalized": "",
        "package": "tskiplist",
        "partial": "TSkip List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#t:TSkipList",
      "description": {
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-TSkipList.html#TSkipList",
        "fct-type": "data",
        "title": "TSkipList"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "TSkipList",
        "normalized": "",
        "package": "tskiplist",
        "partial": "TSkip List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#v:chooseLevel",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a randomly chosen level. Is used for inserting new elements.\n For performance reasons, this function uses \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e to access the\n random number generator. (It would be possible to store the random number\n generator in a \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e and thus be able to access it safely from within the\n STM monad. This, however, might cause high contention among threads.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "TSkipList k a -\u003e Int",
        "fct-source": "src/Control-Concurrent-STM-TSkipList.html#chooseLevel",
        "fct-type": "function",
        "title": "chooseLevel"
      },
      "index": {
        "description": "Returns randomly chosen level Is used for inserting new elements For performance reasons this function uses unsafePerformIO to access the random number generator It would be possible to store the random number generator in TVar and thus be able to access it safely from within the STM monad This however might cause high contention among threads",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "chooseLevel",
        "normalized": "TSkipList a b-\u003eInt",
        "package": "tskiplist",
        "partial": "Level",
        "signature": "TSkipList k a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes an element. Does nothing if the element is not found.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "k -\u003e TSkipList k a -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-TSkipList.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Deletes an element Does nothing if the element is not found",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "delete",
        "normalized": "a-\u003eTSkipList a b-\u003eSTM()",
        "package": "tskiplist",
        "partial": "",
        "signature": "k-\u003eTSkipList k a-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all elements that satisfy the predicate. \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e TSkipList k a -\u003e STM (Map k a)",
        "fct-source": "src/Control-Concurrent-STM-TSkipList.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Returns all elements that satisfy the predicate",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "filter",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eTSkipList a b-\u003eSTM(Map a b)",
        "package": "tskiplist",
        "partial": "",
        "signature": "(k-\u003ea-\u003eBool)-\u003eTSkipList k a-\u003eSTM(Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#v:geq",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all elements greater or equal than the key.\n TODO: currently in O(n), should be made more efficient (like \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "k -\u003e TSkipList k a -\u003e STM (Map k a)",
        "fct-source": "src/Control-Concurrent-STM-TSkipList.html#geq",
        "fct-type": "function",
        "title": "geq"
      },
      "index": {
        "description": "Returns all elements greater or equal than the key TODO currently in should be made more efficient like leq",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "geq",
        "normalized": "a-\u003eTSkipList a b-\u003eSTM(Map a b)",
        "package": "tskiplist",
        "partial": "",
        "signature": "k-\u003eTSkipList k a-\u003eSTM(Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts/updates the value for a specific key. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "k -\u003e a -\u003e TSkipList k a -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-TSkipList.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Inserts updates the value for specific key",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eTSkipList a b-\u003eSTM()",
        "package": "tskiplist",
        "partial": "",
        "signature": "k-\u003ea-\u003eTSkipList k a-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#v:leq",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all elements less or equal than the key. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "k -\u003e TSkipList k a -\u003e STM (Map k a)",
        "fct-source": "src/Control-Concurrent-STM-TSkipList.html#leq",
        "fct-type": "function",
        "title": "leq"
      },
      "index": {
        "description": "Returns all elements less or equal than the key",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "leq",
        "normalized": "a-\u003eTSkipList a b-\u003eSTM(Map a b)",
        "package": "tskiplist",
        "partial": "",
        "signature": "k-\u003eTSkipList k a-\u003eSTM(Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#v:lookup",
      "description": {
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "k -\u003e TSkipList k a -\u003e STM (Maybe a)",
        "fct-source": "src/Control-Concurrent-STM-TSkipList.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "lookup",
        "normalized": "a-\u003eTSkipList a b-\u003eSTM(Maybe b)",
        "package": "tskiplist",
        "partial": "",
        "signature": "k-\u003eTSkipList k a-\u003eSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty skiplist.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "Float-\u003e Int-\u003e STM (TSkipList k a)",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "An empty skiplist",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "new",
        "normalized": "Float-\u003eInt-\u003eSTM(TSkipList a b)",
        "package": "tskiplist",
        "partial": "",
        "signature": "Float-\u003eInt-\u003eSTM(TSkipList k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#v:newIO",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty skiplist that uses the standard random generator.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "Float-\u003e Int-\u003e IO (TSkipList k a)",
        "fct-type": "function",
        "title": "newIO"
      },
      "index": {
        "description": "An empty skiplist that uses the standard random generator",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "newIO",
        "normalized": "Float-\u003eInt-\u003eIO(TSkipList a b)",
        "package": "tskiplist",
        "partial": "IO",
        "signature": "Float-\u003eInt-\u003eIO(TSkipList k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eDebug helper. Returns the skip list as a string.\n All elements smaller than the given key are written to the string.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "k -\u003e TSkipList k a -\u003e STM String",
        "fct-source": "src/Control-Concurrent-STM-TSkipList.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Debug helper Returns the skip list as string All elements smaller than the given key are written to the string",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "toString",
        "normalized": "a-\u003eTSkipList a b-\u003eSTM String",
        "package": "tskiplist",
        "partial": "String",
        "signature": "k-\u003eTSkipList k a-\u003eSTM String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tskiplist/docs/Control-Concurrent-STM-TSkipList.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates an element. Throws \u003ccode\u003e\u003ca\u003eAssertionFailed\u003c/a\u003e\u003c/code\u003e if the element is not in the\n list.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.TSkipList",
        "fct-package": "tskiplist",
        "fct-signature": "k -\u003e a -\u003e TSkipList k a -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-TSkipList.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Updates an element Throws AssertionFailed if the element is not in the list",
        "hierarchy": "Control Concurrent STM TSkipList",
        "module": "Control.Concurrent.STM.TSkipList",
        "name": "update",
        "normalized": "a-\u003eb-\u003eTSkipList a b-\u003eSTM()",
        "package": "tskiplist",
        "partial": "",
        "signature": "k-\u003ea-\u003eTSkipList k a-\u003eSTM()"
      }
    }
  }
]