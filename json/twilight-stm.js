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
        "word": "twilight-stm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Counter module implements a thread-safe integer counter. It\n can be used to generate unique ids in a multi-threaded system.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.Counter",
          "name": "Counter",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Counter.html",
          "type": "module"
        },
        "index": {
          "description": "The Counter module implements thread-safe integer counter It can be used to generate unique ids in multi-threaded system",
          "hierarchy": "Control Concurrent STM Counter",
          "module": "Control.Concurrent.STM.Counter",
          "name": "Counter",
          "package": "twilight-stm",
          "partial": "Counter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Counter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe counter is implemented as a simple IORef and modified atomically.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Counter",
          "name": "Counter",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Counter.html#Counter",
          "type": "type"
        },
        "index": {
          "description": "The counter is implemented as simple IORef and modified atomically",
          "hierarchy": "Control Concurrent STM Counter",
          "module": "Control.Concurrent.STM.Counter",
          "name": "Counter",
          "package": "twilight-stm",
          "partial": "Counter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Counter.html#t:Counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current value of the counter.                 \n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Counter",
          "name": "get",
          "package": "twilight-stm",
          "signature": "Counter -\u003e IO Int",
          "source": "src/Control-Concurrent-STM-Counter.html#get",
          "type": "function"
        },
        "index": {
          "description": "Returns the current value of the counter",
          "hierarchy": "Control Concurrent STM Counter",
          "module": "Control.Concurrent.STM.Counter",
          "name": "get",
          "normalized": "Counter-\u003eIO Int",
          "package": "twilight-stm",
          "signature": "Counter-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Counter.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements the counter and returns the previous version.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Counter",
          "name": "getAndIncr",
          "package": "twilight-stm",
          "signature": "Counter -\u003e IO Int",
          "source": "src/Control-Concurrent-STM-Counter.html#getAndIncr",
          "type": "function"
        },
        "index": {
          "description": "Increments the counter and returns the previous version",
          "hierarchy": "Control Concurrent STM Counter",
          "module": "Control.Concurrent.STM.Counter",
          "name": "getAndIncr",
          "normalized": "Counter-\u003eIO Int",
          "package": "twilight-stm",
          "partial": "And Incr",
          "signature": "Counter-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Counter.html#v:getAndIncr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a global counter.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Counter",
          "name": "getCounter",
          "package": "twilight-stm",
          "signature": "Counter",
          "source": "src/Control-Concurrent-STM-Counter.html#getCounter",
          "type": "function"
        },
        "index": {
          "description": "Returns global counter",
          "hierarchy": "Control Concurrent STM Counter",
          "module": "Control.Concurrent.STM.Counter",
          "name": "getCounter",
          "package": "twilight-stm",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Counter.html#v:getCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements the counter.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Counter",
          "name": "incr",
          "package": "twilight-stm",
          "signature": "Counter -\u003e IO ()",
          "source": "src/Control-Concurrent-STM-Counter.html#incr",
          "type": "function"
        },
        "index": {
          "description": "Increments the counter",
          "hierarchy": "Control Concurrent STM Counter",
          "module": "Control.Concurrent.STM.Counter",
          "name": "incr",
          "normalized": "Counter-\u003eIO()",
          "package": "twilight-stm",
          "signature": "Counter-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Counter.html#v:incr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParametrized monad, by Oleg Kiselyov\n \u003ca\u003ehttp://okmij.org/ftp/Computation/monads.html#param-monad\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.Monadish",
          "name": "Monadish",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Monadish.html",
          "type": "module"
        },
        "index": {
          "description": "Parametrized monad by Oleg Kiselyov http okmij.org ftp Computation monads.html param-monad",
          "hierarchy": "Control Concurrent STM Monadish",
          "module": "Control.Concurrent.STM.Monadish",
          "name": "Monadish",
          "package": "twilight-stm",
          "partial": "Monadish",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject regular monads to be monadish things too\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Monadish",
          "name": "MW",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Monadish.html#MW",
          "type": "newtype"
        },
        "index": {
          "description": "Inject regular monads to be monadish things too",
          "hierarchy": "Control Concurrent STM Monadish",
          "module": "Control.Concurrent.STM.Monadish",
          "name": "MW",
          "package": "twilight-stm",
          "partial": "MW",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#t:MW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parameterized \u003ccode\u003emonad\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Monadish",
          "name": "Monadish",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Monadish.html#Monadish",
          "type": "class"
        },
        "index": {
          "description": "parameterized monad",
          "hierarchy": "Control Concurrent STM Monadish",
          "module": "Control.Concurrent.STM.Monadish",
          "name": "Monadish",
          "package": "twilight-stm",
          "partial": "Monadish",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#t:Monadish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Monadish",
          "name": "MW",
          "package": "twilight-stm",
          "signature": "MW",
          "source": "src/Control-Concurrent-STM-Monadish.html#MW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Monadish",
          "module": "Control.Concurrent.STM.Monadish",
          "name": "MW",
          "package": "twilight-stm",
          "partial": "MW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#v:MW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Monadish",
          "name": "gbind",
          "package": "twilight-stm",
          "signature": "m p q a -\u003e (a -\u003e m q r b) -\u003e m p r b",
          "source": "src/Control-Concurrent-STM-Monadish.html#gbind",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Monadish",
          "module": "Control.Concurrent.STM.Monadish",
          "name": "gbind",
          "normalized": "a b c d-\u003e(d-\u003ea c e f)-\u003ea b e f",
          "package": "twilight-stm",
          "signature": "m p q a-\u003e(a-\u003em q r b)-\u003em p r b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#v:gbind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Monadish",
          "name": "gret",
          "package": "twilight-stm",
          "signature": "a -\u003e m p p a",
          "source": "src/Control-Concurrent-STM-Monadish.html#gret",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Monadish",
          "module": "Control.Concurrent.STM.Monadish",
          "name": "gret",
          "normalized": "a-\u003eb c c a",
          "package": "twilight-stm",
          "signature": "a-\u003em p p a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#v:gret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Monadish",
          "name": "unMW",
          "package": "twilight-stm",
          "signature": "m a",
          "source": "src/Control-Concurrent-STM-Monadish.html#MW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Monadish",
          "module": "Control.Concurrent.STM.Monadish",
          "name": "unMW",
          "package": "twilight-stm",
          "partial": "MW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Monadish.html#v:unMW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Twilight STM enhances a transaction with twilight code that\n executes between the preparation to commit the transaction and its\n actual commit or abort. Twilight code runs irrevocably and\n concurrently with the rest of the program. It can detect and repair\n potential read inconsistencies in the state of its transaction and\n may thus turn a failing transaction into a successful\n one. Moreover, twilight code can safely use I/O operations while\n modifying the transactionally managed memory.\n\u003c/p\u003e\u003cp\u003eMore information and publications can be found at\n \u003ca\u003ehttp://proglang.informatik.uni-freiburg.de/projects/twilight/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "Twilight",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Twilight.html",
          "type": "module"
        },
        "index": {
          "description": "The Twilight STM enhances transaction with twilight code that executes between the preparation to commit the transaction and its actual commit or abort Twilight code runs irrevocably and concurrently with the rest of the program It can detect and repair potential read inconsistencies in the state of its transaction and may thus turn failing transaction into successful one Moreover twilight code can safely use operations while modifying the transactionally managed memory More information and publications can be found at http proglang.informatik.uni-freiburg.de projects twilight",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "Twilight",
          "package": "twilight-stm",
          "partial": "Twilight",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of the atomic phase.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "Atomic",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Twilight.html#Atomic",
          "type": "data"
        },
        "index": {
          "description": "Type of the atomic phase",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "Atomic",
          "package": "twilight-stm",
          "partial": "Atomic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:Atomic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead handle associated to a TVar. It is only valid for the scope\n of one transaction.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "RTwiVar",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Twilight.html#RTwiVar",
          "type": "data"
        },
        "index": {
          "description": "Read handle associated to TVar It is only valid for the scope of one transaction",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "RTwiVar",
          "package": "twilight-stm",
          "partial": "RTwi Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:RTwiVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe STM monad, supporting atomic memory transactions. In\n Twilight, the STM monad parametrized by different transactional\n states.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "STM",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Twilight.html#STM",
          "type": "data"
        },
        "index": {
          "description": "The STM monad supporting atomic memory transactions In Twilight the STM monad parametrized by different transactional states",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "STM",
          "package": "twilight-stm",
          "partial": "STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:STM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of the safe phase.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "Safe",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Twilight.html#Safe",
          "type": "data"
        },
        "index": {
          "description": "Type of the safe phase",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "Safe",
          "package": "twilight-stm",
          "partial": "Safe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:Safe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransactional variable. It represents a shared memory locations\n that support atomic memory transactions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "TVar",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Twilight.html#TVar",
          "type": "data"
        },
        "index": {
          "description": "Transactional variable It represents shared memory locations that support atomic memory transactions",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "TVar",
          "package": "twilight-stm",
          "partial": "TVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:TVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag for grouping TVars. This allows simplified conflict checks\n for a group of TVars. They are only valid for the scope of one\n transaction.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "Tag",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Twilight.html#Tag",
          "type": "data"
        },
        "index": {
          "description": "Tag for grouping TVars This allows simplified conflict checks for group of TVars They are only valid for the scope of one transaction",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "Tag",
          "package": "twilight-stm",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of the twilight phase.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "Twi",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Twilight.html#Twi",
          "type": "data"
        },
        "index": {
          "description": "Type of the twilight phase",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "Twi",
          "package": "twilight-stm",
          "partial": "Twi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:Twi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite handle associated to a TVar. It is only valid for the scope\n of one transaction.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "WTwiVar",
          "package": "twilight-stm",
          "source": "src/Control-Concurrent-STM-Twilight.html#WTwiVar",
          "type": "data"
        },
        "index": {
          "description": "Write handle associated to TVar It is only valid for the scope of one transaction",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "WTwiVar",
          "package": "twilight-stm",
          "partial": "WTwi Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#t:WTwiVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a series of STM actions atomically.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "atomically",
          "package": "twilight-stm",
          "signature": "(forall s.  STM s p q a) -\u003e IO a",
          "source": "src/Control-Concurrent-STM-Twilight.html#atomically",
          "type": "function"
        },
        "index": {
          "description": "Perform series of STM actions atomically",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "atomically",
          "normalized": "(a b STM c d e f)-\u003eIO f",
          "package": "twilight-stm",
          "signature": "(forall s. STM s p q a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:atomically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Twilight",
          "name": "gbind",
          "package": "twilight-stm",
          "signature": "m p q a -\u003e (a -\u003e m q r b) -\u003e m p r b",
          "source": "src/Control-Concurrent-STM-Monadish.html#gbind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "gbind",
          "normalized": "a b c d-\u003e(d-\u003ea c e f)-\u003ea b e f",
          "package": "twilight-stm",
          "signature": "m p q a-\u003e(a-\u003em q r b)-\u003em p r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:gbind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Twilight",
          "name": "gret",
          "package": "twilight-stm",
          "signature": "a -\u003e m p p a",
          "source": "src/Control-Concurrent-STM-Monadish.html#gret",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "gret",
          "normalized": "a-\u003eb c c a",
          "package": "twilight-stm",
          "signature": "a-\u003em p p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:gret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore conflicting updates to any variables that the transaction\n has read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "ignoreAllConflicts",
          "package": "twilight-stm",
          "signature": "STM r a Safe ()",
          "source": "src/Control-Concurrent-STM-Twilight.html#ignoreAllConflicts",
          "type": "function"
        },
        "index": {
          "description": "Ignore conflicting updates to any variables that the transaction has read",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "ignoreAllConflicts",
          "normalized": "STM a b Safe()",
          "package": "twilight-stm",
          "partial": "All Conflicts",
          "signature": "STM r a Safe()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:ignoreAllConflicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if any of the variables that are marked with the tag are\n inconsistent because of intermediate updates by other transaction.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "isInconsistent",
          "package": "twilight-stm",
          "signature": "Tag r -\u003e STM r p p Bool",
          "source": "src/Control-Concurrent-STM-Twilight.html#isInconsistent",
          "type": "function"
        },
        "index": {
          "description": "Checks if any of the variables that are marked with the tag are inconsistent because of intermediate updates by other transaction",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "isInconsistent",
          "normalized": "Tag a-\u003eSTM a b b Bool",
          "package": "twilight-stm",
          "partial": "Inconsistent",
          "signature": "Tag r-\u003eSTM r p p Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:isInconsistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark a variable with a tag.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "markTVar",
          "package": "twilight-stm",
          "signature": "TVar a -\u003e Tag r -\u003e STM r Atomic Atomic ()",
          "source": "src/Control-Concurrent-STM-Twilight.html#markTVar",
          "type": "function"
        },
        "index": {
          "description": "Mark variable with tag",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "markTVar",
          "normalized": "TVar a-\u003eTag b-\u003eSTM b Atomic Atomic()",
          "package": "twilight-stm",
          "partial": "TVar",
          "signature": "TVar a-\u003eTag r-\u003eSTM r Atomic Atomic()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:markTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new TVar containing the value that is supplied.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "newTVar",
          "package": "twilight-stm",
          "signature": "a -\u003e STM r p p (TVar a)",
          "source": "src/Control-Concurrent-STM-Twilight.html#newTVar",
          "type": "function"
        },
        "index": {
          "description": "Create new TVar containing the value that is supplied",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "newTVar",
          "normalized": "a-\u003eSTM b c c(TVar a)",
          "package": "twilight-stm",
          "partial": "TVar",
          "signature": "a-\u003eSTM r p p(TVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:newTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new TVar with the value supplied. This is useful for\n creating top-level TVars.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "newTVarIO",
          "package": "twilight-stm",
          "signature": "a -\u003e IO (TVar a)",
          "source": "src/Control-Concurrent-STM-Twilight.html#newTVarIO",
          "type": "function"
        },
        "index": {
          "description": "Create new TVar with the value supplied This is useful for creating top-level TVars",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "newTVarIO",
          "normalized": "a-\u003eIO(TVar a)",
          "package": "twilight-stm",
          "partial": "TVar IO",
          "signature": "a-\u003eIO(TVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:newTVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new tag.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "newTag",
          "package": "twilight-stm",
          "signature": "STM r Atomic Atomic (Tag r)",
          "source": "src/Control-Concurrent-STM-Twilight.html#newTag",
          "type": "function"
        },
        "index": {
          "description": "Create new tag",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "newTag",
          "package": "twilight-stm",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:newTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current value stored in a TVar. \n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "readTVar",
          "package": "twilight-stm",
          "signature": "TVar a -\u003e STM r Atomic Atomic a",
          "source": "src/Control-Concurrent-STM-Twilight.html#readTVar",
          "type": "function"
        },
        "index": {
          "description": "Return the current value stored in TVar",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "readTVar",
          "normalized": "TVar a-\u003eSTM b Atomic Atomic a",
          "package": "twilight-stm",
          "partial": "TVar",
          "signature": "TVar a-\u003eSTM r Atomic Atomic a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:readTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current value stored in a TVar, together with a read\n handle to the TVar which can be used for further read access to the TVar.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "readTVarR",
          "package": "twilight-stm",
          "signature": "TVar a -\u003e Tag r -\u003e STM r Atomic Atomic (a, RTwiVar a)",
          "source": "src/Control-Concurrent-STM-Twilight.html#readTVarR",
          "type": "function"
        },
        "index": {
          "description": "Return the current value stored in TVar together with read handle to the TVar which can be used for further read access to the TVar",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "readTVarR",
          "normalized": "TVar a-\u003eTag b-\u003eSTM b Atomic Atomic(a,RTwiVar a)",
          "package": "twilight-stm",
          "partial": "TVar",
          "signature": "TVar a-\u003eTag r-\u003eSTM r Atomic Atomic(a,RTwiVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:readTVarR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate all variables that the transaction has read with an atomic\n reload operation. This operation can only be done once.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "reload",
          "package": "twilight-stm",
          "signature": "STM r Twi Safe ()",
          "source": "src/Control-Concurrent-STM-Twilight.html#reload",
          "type": "function"
        },
        "index": {
          "description": "Update all variables that the transaction has read with an atomic reload operation This operation can only be done once",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "reload",
          "normalized": "STM a Twi Safe()",
          "package": "twilight-stm",
          "signature": "STM r Twi Safe()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:reload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the value of the TVar as read before.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "rereadTVar",
          "package": "twilight-stm",
          "signature": "RTwiVar a -\u003e STM r p p a",
          "source": "src/Control-Concurrent-STM-Twilight.html#rereadTVar",
          "type": "function"
        },
        "index": {
          "description": "Obtain the value of the TVar as read before",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "rereadTVar",
          "normalized": "RTwiVar a-\u003eSTM b c c a",
          "package": "twilight-stm",
          "partial": "TVar",
          "signature": "RTwiVar a-\u003eSTM r p p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:rereadTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort and restart the transaction.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "retry",
          "package": "twilight-stm",
          "signature": "STM r p q a",
          "source": "src/Control-Concurrent-STM-Twilight.html#retry",
          "type": "function"
        },
        "index": {
          "description": "Abort and restart the transaction",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "retry",
          "package": "twilight-stm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the TVar associated to the handle by replacing the value\n that is stored in it.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "rewriteTVar",
          "package": "twilight-stm",
          "signature": "WTwiVar a -\u003e a -\u003e STM r p p ()",
          "source": "src/Control-Concurrent-STM-Twilight.html#rewriteTVar",
          "type": "function"
        },
        "index": {
          "description": "Modify the TVar associated to the handle by replacing the value that is stored in it",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "rewriteTVar",
          "normalized": "WTwiVar a-\u003ea-\u003eSTM b c c()",
          "package": "twilight-stm",
          "partial": "TVar",
          "signature": "WTwiVar a-\u003ea-\u003eSTM r p p()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:rewriteTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed an IO action into the safe phase of the transaction. The\n transaction does not restart and re-execute this action unless\n specified by the programmer.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "safeTwiIO",
          "package": "twilight-stm",
          "signature": "IO a -\u003e STM r Safe Safe a",
          "source": "src/Control-Concurrent-STM-Twilight.html#safeTwiIO",
          "type": "function"
        },
        "index": {
          "description": "Embed an IO action into the safe phase of the transaction The transaction does not restart and re-execute this action unless specified by the programmer",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "safeTwiIO",
          "normalized": "IO a-\u003eSTM b Safe Safe a",
          "package": "twilight-stm",
          "partial": "Twi IO",
          "signature": "IO a-\u003eSTM r Safe Safe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:safeTwiIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhase transition from Twi phase to Safe phase. It will fail if\n there are inconsistencies in form of intermediate updates to the\n variables that the transaction has read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "tryCommit",
          "package": "twilight-stm",
          "signature": "STM r Twi Safe ()",
          "source": "src/Control-Concurrent-STM-Twilight.html#tryCommit",
          "type": "function"
        },
        "index": {
          "description": "Phase transition from Twi phase to Safe phase It will fail if there are inconsistencies in form of intermediate updates to the variables that the transaction has read",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "tryCommit",
          "normalized": "STM a Twi Safe()",
          "package": "twilight-stm",
          "partial": "Commit",
          "signature": "STM r Twi Safe()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:tryCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGoing from the Atomic phase and the Twi phase. The return value\n indicates if there were intermediate updates to the variables that\n have been read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "twilight",
          "package": "twilight-stm",
          "signature": "STM r Atomic Twi Bool",
          "source": "src/Control-Concurrent-STM-Twilight.html#twilight",
          "type": "function"
        },
        "index": {
          "description": "Going from the Atomic phase and the Twi phase The return value indicates if there were intermediate updates to the variables that have been read",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "twilight",
          "package": "twilight-stm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:twilight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed an IO action into any phase of the transaction. Due to\n conflicts with other transactions, this action will be re-executed\n if the transaction aborts and restarts.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "unsafeTwiIO",
          "package": "twilight-stm",
          "signature": "IO a -\u003e STM r p p a",
          "source": "src/Control-Concurrent-STM-Twilight.html#unsafeTwiIO",
          "type": "function"
        },
        "index": {
          "description": "Embed an IO action into any phase of the transaction Due to conflicts with other transactions this action will be re-executed if the transaction aborts and restarts",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "unsafeTwiIO",
          "normalized": "IO a-\u003eSTM b c c a",
          "package": "twilight-stm",
          "partial": "Twi IO",
          "signature": "IO a-\u003eSTM r p p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:unsafeTwiIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a TVar by replacing its old value with the supplied one.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "writeTVar",
          "package": "twilight-stm",
          "signature": "TVar a -\u003e a -\u003e STM r Atomic Atomic ()",
          "source": "src/Control-Concurrent-STM-Twilight.html#writeTVar",
          "type": "function"
        },
        "index": {
          "description": "Modify TVar by replacing its old value with the supplied one",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "writeTVar",
          "normalized": "TVar a-\u003ea-\u003eSTM b Atomic Atomic()",
          "package": "twilight-stm",
          "partial": "TVar",
          "signature": "TVar a-\u003ea-\u003eSTM r Atomic Atomic()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:writeTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a TVar by replacing its old value with the supplied\n one. The function returns a write handle to the TVar which can be\n used for latter modifications of this TVar.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "writeTVarR",
          "package": "twilight-stm",
          "signature": "TVar a -\u003e a -\u003e STM r Atomic Atomic (WTwiVar a)",
          "source": "src/Control-Concurrent-STM-Twilight.html#writeTVarR",
          "type": "function"
        },
        "index": {
          "description": "Modify TVar by replacing its old value with the supplied one The function returns write handle to the TVar which can be used for latter modifications of this TVar",
          "hierarchy": "Control Concurrent STM Twilight",
          "module": "Control.Concurrent.STM.Twilight",
          "name": "writeTVarR",
          "normalized": "TVar a-\u003ea-\u003eSTM b Atomic Atomic(WTwiVar a)",
          "package": "twilight-stm",
          "partial": "TVar",
          "signature": "TVar a-\u003ea-\u003eSTM r Atomic Atomic(WTwiVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twilight-stm/docs/Control-Concurrent-STM-Twilight.html#v:writeTVarR"
      }
    }
  ]
]