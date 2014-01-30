[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Counter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Counter module implements a thread-safe integer counter. It\n can be used to generate unique ids in a multi-threaded system.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.Counter",
        "fct-package": "twilight-stm",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-Counter.html",
        "fct-type": "module",
        "title": "Counter"
      },
      "index": {
        "description": "The Counter module implements thread-safe integer counter It can be used to generate unique ids in multi-threaded system",
        "hierarchy": "Control Concurrent STM Counter",
        "module": "Control.Concurrent.STM.Counter",
        "name": "Counter",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Counter.html#t:Counter",
      "description": {
        "fct-descr": "\u003cp\u003eThe counter is implemented as a simple IORef and modified atomically.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Counter",
        "fct-package": "twilight-stm",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-STM-Counter.html#Counter",
        "fct-type": "type",
        "title": "Counter"
      },
      "index": {
        "description": "The counter is implemented as simple IORef and modified atomically",
        "hierarchy": "Control Concurrent STM Counter",
        "module": "Control.Concurrent.STM.Counter",
        "name": "Counter",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Counter.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current value of the counter.                 \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Counter",
        "fct-package": "twilight-stm",
        "fct-signature": "Counter -\u003e IO Int",
        "fct-source": "src/Control-Concurrent-STM-Counter.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Returns the current value of the counter",
        "hierarchy": "Control Concurrent STM Counter",
        "module": "Control.Concurrent.STM.Counter",
        "name": "get",
        "normalized": "Counter-\u003eIO Int",
        "package": "twilight-stm",
        "partial": "",
        "signature": "Counter-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Counter.html#v:getAndIncr",
      "description": {
        "fct-descr": "\u003cp\u003eIncrements the counter and returns the previous version.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Counter",
        "fct-package": "twilight-stm",
        "fct-signature": "Counter -\u003e IO Int",
        "fct-source": "src/Control-Concurrent-STM-Counter.html#getAndIncr",
        "fct-type": "function",
        "title": "getAndIncr"
      },
      "index": {
        "description": "Increments the counter and returns the previous version",
        "hierarchy": "Control Concurrent STM Counter",
        "module": "Control.Concurrent.STM.Counter",
        "name": "getAndIncr",
        "normalized": "Counter-\u003eIO Int",
        "package": "twilight-stm",
        "partial": "And Incr",
        "signature": "Counter-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Counter.html#v:getCounter",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a global counter.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Counter",
        "fct-package": "twilight-stm",
        "fct-signature": "Counter",
        "fct-source": "src/Control-Concurrent-STM-Counter.html#getCounter",
        "fct-type": "function",
        "title": "getCounter"
      },
      "index": {
        "description": "Returns global counter",
        "hierarchy": "Control Concurrent STM Counter",
        "module": "Control.Concurrent.STM.Counter",
        "name": "getCounter",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Counter.html#v:incr",
      "description": {
        "fct-descr": "\u003cp\u003eIncrements the counter.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Counter",
        "fct-package": "twilight-stm",
        "fct-signature": "Counter -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-STM-Counter.html#incr",
        "fct-type": "function",
        "title": "incr"
      },
      "index": {
        "description": "Increments the counter",
        "hierarchy": "Control Concurrent STM Counter",
        "module": "Control.Concurrent.STM.Counter",
        "name": "incr",
        "normalized": "Counter-\u003eIO()",
        "package": "twilight-stm",
        "partial": "",
        "signature": "Counter-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParametrized monad, by Oleg Kiselyov\n \u003ca\u003ehttp://okmij.org/ftp/Computation/monads.html#param-monad\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.Monadish",
        "fct-package": "twilight-stm",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-Monadish.html",
        "fct-type": "module",
        "title": "Monadish"
      },
      "index": {
        "description": "Parametrized monad by Oleg Kiselyov http okmij.org ftp Computation monads.html param-monad",
        "hierarchy": "Control Concurrent STM Monadish",
        "module": "Control.Concurrent.STM.Monadish",
        "name": "Monadish",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "Monadish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#t:MW",
      "description": {
        "fct-descr": "\u003cp\u003eInject regular monads to be monadish things too\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Monadish",
        "fct-package": "twilight-stm",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Concurrent-STM-Monadish.html#MW",
        "fct-type": "newtype",
        "title": "MW"
      },
      "index": {
        "description": "Inject regular monads to be monadish things too",
        "hierarchy": "Control Concurrent STM Monadish",
        "module": "Control.Concurrent.STM.Monadish",
        "name": "MW",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "MW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#t:Monadish",
      "description": {
        "fct-descr": "\u003cp\u003eA parameterized \u003ccode\u003emonad\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Monadish",
        "fct-package": "twilight-stm",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-STM-Monadish.html#Monadish",
        "fct-type": "class",
        "title": "Monadish"
      },
      "index": {
        "description": "parameterized monad",
        "hierarchy": "Control Concurrent STM Monadish",
        "module": "Control.Concurrent.STM.Monadish",
        "name": "Monadish",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "Monadish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#v:MW",
      "description": {
        "fct-module": "Control.Concurrent.STM.Monadish",
        "fct-package": "twilight-stm",
        "fct-signature": "MW",
        "fct-source": "src/Control-Concurrent-STM-Monadish.html#MW",
        "fct-type": "function",
        "title": "MW"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Monadish",
        "module": "Control.Concurrent.STM.Monadish",
        "name": "MW",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "MW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#v:gbind",
      "description": {
        "fct-module": "Control.Concurrent.STM.Monadish",
        "fct-package": "twilight-stm",
        "fct-signature": "m p q a -\u003e (a -\u003e m q r b) -\u003e m p r b",
        "fct-source": "src/Control-Concurrent-STM-Monadish.html#gbind",
        "fct-type": "method",
        "title": "gbind"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Monadish",
        "module": "Control.Concurrent.STM.Monadish",
        "name": "gbind",
        "normalized": "a b c d-\u003e(d-\u003ea c e f)-\u003ea b e f",
        "package": "twilight-stm",
        "partial": "",
        "signature": "m p q a-\u003e(a-\u003em q r b)-\u003em p r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#v:gret",
      "description": {
        "fct-module": "Control.Concurrent.STM.Monadish",
        "fct-package": "twilight-stm",
        "fct-signature": "a -\u003e m p p a",
        "fct-source": "src/Control-Concurrent-STM-Monadish.html#gret",
        "fct-type": "method",
        "title": "gret"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Monadish",
        "module": "Control.Concurrent.STM.Monadish",
        "name": "gret",
        "normalized": "a-\u003eb c c a",
        "package": "twilight-stm",
        "partial": "",
        "signature": "a-\u003em p p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#v:unMW",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.STM.Monadish",
        "fct-package": "twilight-stm",
        "fct-signature": "m a",
        "fct-source": "src/Control-Concurrent-STM-Monadish.html#MW",
        "fct-type": "function",
        "title": "unMW"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Monadish",
        "module": "Control.Concurrent.STM.Monadish",
        "name": "unMW",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "MW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Twilight STM enhances a transaction with twilight code that\n executes between the preparation to commit the transaction and its\n actual commit or abort. Twilight code runs irrevocably and\n concurrently with the rest of the program. It can detect and repair\n potential read inconsistencies in the state of its transaction and\n may thus turn a failing transaction into a successful\n one. Moreover, twilight code can safely use I/O operations while\n modifying the transactionally managed memory.\n\u003c/p\u003e\u003cp\u003eMore information and publications can be found at\n \u003ca\u003ehttp://proglang.informatik.uni-freiburg.de/projects/twilight/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html",
        "fct-type": "module",
        "title": "Twilight"
      },
      "index": {
        "description": "The Twilight STM enhances transaction with twilight code that executes between the preparation to commit the transaction and its actual commit or abort Twilight code runs irrevocably and concurrently with the rest of the program It can detect and repair potential read inconsistencies in the state of its transaction and may thus turn failing transaction into successful one Moreover twilight code can safely use operations while modifying the transactionally managed memory More information and publications can be found at http proglang.informatik.uni-freiburg.de projects twilight",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "Twilight",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "Twilight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:Atomic",
      "description": {
        "fct-descr": "\u003cp\u003eType of the atomic phase.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#Atomic",
        "fct-type": "data",
        "title": "Atomic"
      },
      "index": {
        "description": "Type of the atomic phase",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "Atomic",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "Atomic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:RTwiVar",
      "description": {
        "fct-descr": "\u003cp\u003eRead handle associated to a TVar. It is only valid for the scope\n of one transaction.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#RTwiVar",
        "fct-type": "data",
        "title": "RTwiVar"
      },
      "index": {
        "description": "Read handle associated to TVar It is only valid for the scope of one transaction",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "RTwiVar",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "RTwi Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:STM",
      "description": {
        "fct-descr": "\u003cp\u003eThe STM monad, supporting atomic memory transactions. In\n Twilight, the STM monad parametrized by different transactional\n states.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#STM",
        "fct-type": "data",
        "title": "STM"
      },
      "index": {
        "description": "The STM monad supporting atomic memory transactions In Twilight the STM monad parametrized by different transactional states",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "STM",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:Safe",
      "description": {
        "fct-descr": "\u003cp\u003eType of the safe phase.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#Safe",
        "fct-type": "data",
        "title": "Safe"
      },
      "index": {
        "description": "Type of the safe phase",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "Safe",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "Safe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:TVar",
      "description": {
        "fct-descr": "\u003cp\u003eTransactional variable. It represents a shared memory locations\n that support atomic memory transactions.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#TVar",
        "fct-type": "data",
        "title": "TVar"
      },
      "index": {
        "description": "Transactional variable It represents shared memory locations that support atomic memory transactions",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "TVar",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "TVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:Tag",
      "description": {
        "fct-descr": "\u003cp\u003eTag for grouping TVars. This allows simplified conflict checks\n for a group of TVars. They are only valid for the scope of one\n transaction.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "Tag for grouping TVars This allows simplified conflict checks for group of TVars They are only valid for the scope of one transaction",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "Tag",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:Twi",
      "description": {
        "fct-descr": "\u003cp\u003eType of the twilight phase.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#Twi",
        "fct-type": "data",
        "title": "Twi"
      },
      "index": {
        "description": "Type of the twilight phase",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "Twi",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "Twi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:WTwiVar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite handle associated to a TVar. It is only valid for the scope\n of one transaction.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#WTwiVar",
        "fct-type": "data",
        "title": "WTwiVar"
      },
      "index": {
        "description": "Write handle associated to TVar It is only valid for the scope of one transaction",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "WTwiVar",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "WTwi Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:atomically",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a series of STM actions atomically.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "(forall s.  STM s p q a) -\u003e IO a",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#atomically",
        "fct-type": "function",
        "title": "atomically"
      },
      "index": {
        "description": "Perform series of STM actions atomically",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "atomically",
        "normalized": "(a b STM c d e f)-\u003eIO f",
        "package": "twilight-stm",
        "partial": "",
        "signature": "(forall s. STM s p q a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:gbind",
      "description": {
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "m p q a -\u003e (a -\u003e m q r b) -\u003e m p r b",
        "fct-source": "src/Control-Concurrent-STM-Monadish.html#gbind",
        "fct-type": "function",
        "title": "gbind"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "gbind",
        "normalized": "a b c d-\u003e(d-\u003ea c e f)-\u003ea b e f",
        "package": "twilight-stm",
        "partial": "",
        "signature": "m p q a-\u003e(a-\u003em q r b)-\u003em p r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:gret",
      "description": {
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "a -\u003e m p p a",
        "fct-source": "src/Control-Concurrent-STM-Monadish.html#gret",
        "fct-type": "function",
        "title": "gret"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "gret",
        "normalized": "a-\u003eb c c a",
        "package": "twilight-stm",
        "partial": "",
        "signature": "a-\u003em p p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:ignoreAllConflicts",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore conflicting updates to any variables that the transaction\n has read.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "STM r a Safe ()",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#ignoreAllConflicts",
        "fct-type": "function",
        "title": "ignoreAllConflicts"
      },
      "index": {
        "description": "Ignore conflicting updates to any variables that the transaction has read",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "ignoreAllConflicts",
        "normalized": "STM a b Safe()",
        "package": "twilight-stm",
        "partial": "All Conflicts",
        "signature": "STM r a Safe()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:isInconsistent",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if any of the variables that are marked with the tag are\n inconsistent because of intermediate updates by other transaction.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "Tag r -\u003e STM r p p Bool",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#isInconsistent",
        "fct-type": "function",
        "title": "isInconsistent"
      },
      "index": {
        "description": "Checks if any of the variables that are marked with the tag are inconsistent because of intermediate updates by other transaction",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "isInconsistent",
        "normalized": "Tag a-\u003eSTM a b b Bool",
        "package": "twilight-stm",
        "partial": "Inconsistent",
        "signature": "Tag r-\u003eSTM r p p Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:markTVar",
      "description": {
        "fct-descr": "\u003cp\u003eMark a variable with a tag.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "TVar a -\u003e Tag r -\u003e STM r Atomic Atomic ()",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#markTVar",
        "fct-type": "function",
        "title": "markTVar"
      },
      "index": {
        "description": "Mark variable with tag",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "markTVar",
        "normalized": "TVar a-\u003eTag b-\u003eSTM b Atomic Atomic()",
        "package": "twilight-stm",
        "partial": "TVar",
        "signature": "TVar a-\u003eTag r-\u003eSTM r Atomic Atomic()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:newTVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new TVar containing the value that is supplied.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "a -\u003e STM r p p (TVar a)",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#newTVar",
        "fct-type": "function",
        "title": "newTVar"
      },
      "index": {
        "description": "Create new TVar containing the value that is supplied",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "newTVar",
        "normalized": "a-\u003eSTM b c c(TVar a)",
        "package": "twilight-stm",
        "partial": "TVar",
        "signature": "a-\u003eSTM r p p(TVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:newTVarIO",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new TVar with the value supplied. This is useful for\n creating top-level TVars.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "a -\u003e IO (TVar a)",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#newTVarIO",
        "fct-type": "function",
        "title": "newTVarIO"
      },
      "index": {
        "description": "Create new TVar with the value supplied This is useful for creating top-level TVars",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "newTVarIO",
        "normalized": "a-\u003eIO(TVar a)",
        "package": "twilight-stm",
        "partial": "TVar IO",
        "signature": "a-\u003eIO(TVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:newTag",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new tag.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "STM r Atomic Atomic (Tag r)",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#newTag",
        "fct-type": "function",
        "title": "newTag"
      },
      "index": {
        "description": "Create new tag",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "newTag",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:readTVar",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current value stored in a TVar. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "TVar a -\u003e STM r Atomic Atomic a",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#readTVar",
        "fct-type": "function",
        "title": "readTVar"
      },
      "index": {
        "description": "Return the current value stored in TVar",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "readTVar",
        "normalized": "TVar a-\u003eSTM b Atomic Atomic a",
        "package": "twilight-stm",
        "partial": "TVar",
        "signature": "TVar a-\u003eSTM r Atomic Atomic a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:readTVarR",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current value stored in a TVar, together with a read\n handle to the TVar which can be used for further read access to the TVar.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "TVar a -\u003e Tag r -\u003e STM r Atomic Atomic (a, RTwiVar a)",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#readTVarR",
        "fct-type": "function",
        "title": "readTVarR"
      },
      "index": {
        "description": "Return the current value stored in TVar together with read handle to the TVar which can be used for further read access to the TVar",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "readTVarR",
        "normalized": "TVar a-\u003eTag b-\u003eSTM b Atomic Atomic(a,RTwiVar a)",
        "package": "twilight-stm",
        "partial": "TVar",
        "signature": "TVar a-\u003eTag r-\u003eSTM r Atomic Atomic(a,RTwiVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:reload",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate all variables that the transaction has read with an atomic\n reload operation. This operation can only be done once.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "STM r Twi Safe ()",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#reload",
        "fct-type": "function",
        "title": "reload"
      },
      "index": {
        "description": "Update all variables that the transaction has read with an atomic reload operation This operation can only be done once",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "reload",
        "normalized": "STM a Twi Safe()",
        "package": "twilight-stm",
        "partial": "",
        "signature": "STM r Twi Safe()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:rereadTVar",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the value of the TVar as read before.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "RTwiVar a -\u003e STM r p p a",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#rereadTVar",
        "fct-type": "function",
        "title": "rereadTVar"
      },
      "index": {
        "description": "Obtain the value of the TVar as read before",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "rereadTVar",
        "normalized": "RTwiVar a-\u003eSTM b c c a",
        "package": "twilight-stm",
        "partial": "TVar",
        "signature": "RTwiVar a-\u003eSTM r p p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:retry",
      "description": {
        "fct-descr": "\u003cp\u003eAbort and restart the transaction.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "STM r p q a",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#retry",
        "fct-type": "function",
        "title": "retry"
      },
      "index": {
        "description": "Abort and restart the transaction",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "retry",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:rewriteTVar",
      "description": {
        "fct-descr": "\u003cp\u003eModify the TVar associated to the handle by replacing the value\n that is stored in it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "WTwiVar a -\u003e a -\u003e STM r p p ()",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#rewriteTVar",
        "fct-type": "function",
        "title": "rewriteTVar"
      },
      "index": {
        "description": "Modify the TVar associated to the handle by replacing the value that is stored in it",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "rewriteTVar",
        "normalized": "WTwiVar a-\u003ea-\u003eSTM b c c()",
        "package": "twilight-stm",
        "partial": "TVar",
        "signature": "WTwiVar a-\u003ea-\u003eSTM r p p()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:safeTwiIO",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed an IO action into the safe phase of the transaction. The\n transaction does not restart and re-execute this action unless\n specified by the programmer.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "IO a -\u003e STM r Safe Safe a",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#safeTwiIO",
        "fct-type": "function",
        "title": "safeTwiIO"
      },
      "index": {
        "description": "Embed an IO action into the safe phase of the transaction The transaction does not restart and re-execute this action unless specified by the programmer",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "safeTwiIO",
        "normalized": "IO a-\u003eSTM b Safe Safe a",
        "package": "twilight-stm",
        "partial": "Twi IO",
        "signature": "IO a-\u003eSTM r Safe Safe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:tryCommit",
      "description": {
        "fct-descr": "\u003cp\u003ePhase transition from Twi phase to Safe phase. It will fail if\n there are inconsistencies in form of intermediate updates to the\n variables that the transaction has read.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "STM r Twi Safe ()",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#tryCommit",
        "fct-type": "function",
        "title": "tryCommit"
      },
      "index": {
        "description": "Phase transition from Twi phase to Safe phase It will fail if there are inconsistencies in form of intermediate updates to the variables that the transaction has read",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "tryCommit",
        "normalized": "STM a Twi Safe()",
        "package": "twilight-stm",
        "partial": "Commit",
        "signature": "STM r Twi Safe()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:twilight",
      "description": {
        "fct-descr": "\u003cp\u003eGoing from the Atomic phase and the Twi phase. The return value\n indicates if there were intermediate updates to the variables that\n have been read.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "STM r Atomic Twi Bool",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#twilight",
        "fct-type": "function",
        "title": "twilight"
      },
      "index": {
        "description": "Going from the Atomic phase and the Twi phase The return value indicates if there were intermediate updates to the variables that have been read",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "twilight",
        "normalized": "",
        "package": "twilight-stm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:unsafeTwiIO",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed an IO action into any phase of the transaction. Due to\n conflicts with other transactions, this action will be re-executed\n if the transaction aborts and restarts.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "IO a -\u003e STM r p p a",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#unsafeTwiIO",
        "fct-type": "function",
        "title": "unsafeTwiIO"
      },
      "index": {
        "description": "Embed an IO action into any phase of the transaction Due to conflicts with other transactions this action will be re-executed if the transaction aborts and restarts",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "unsafeTwiIO",
        "normalized": "IO a-\u003eSTM b c c a",
        "package": "twilight-stm",
        "partial": "Twi IO",
        "signature": "IO a-\u003eSTM r p p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:writeTVar",
      "description": {
        "fct-descr": "\u003cp\u003eModify a TVar by replacing its old value with the supplied one.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "TVar a -\u003e a -\u003e STM r Atomic Atomic ()",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#writeTVar",
        "fct-type": "function",
        "title": "writeTVar"
      },
      "index": {
        "description": "Modify TVar by replacing its old value with the supplied one",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "writeTVar",
        "normalized": "TVar a-\u003ea-\u003eSTM b Atomic Atomic()",
        "package": "twilight-stm",
        "partial": "TVar",
        "signature": "TVar a-\u003ea-\u003eSTM r Atomic Atomic()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:writeTVarR",
      "description": {
        "fct-descr": "\u003cp\u003eModify a TVar by replacing its old value with the supplied\n one. The function returns a write handle to the TVar which can be\n used for latter modifications of this TVar.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Twilight",
        "fct-package": "twilight-stm",
        "fct-signature": "TVar a -\u003e a -\u003e STM r Atomic Atomic (WTwiVar a)",
        "fct-source": "src/Control-Concurrent-STM-Twilight.html#writeTVarR",
        "fct-type": "function",
        "title": "writeTVarR"
      },
      "index": {
        "description": "Modify TVar by replacing its old value with the supplied one The function returns write handle to the TVar which can be used for latter modifications of this TVar",
        "hierarchy": "Control Concurrent STM Twilight",
        "module": "Control.Concurrent.STM.Twilight",
        "name": "writeTVarR",
        "normalized": "TVar a-\u003ea-\u003eSTM b Atomic Atomic(WTwiVar a)",
        "package": "twilight-stm",
        "partial": "TVar",
        "signature": "TVar a-\u003ea-\u003eSTM r Atomic Atomic(WTwiVar a)"
      }
    }
  }
]