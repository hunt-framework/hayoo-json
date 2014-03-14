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
        "word": "expiring-mvar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "Expiring",
          "package": "expiring-mvar",
          "source": "src/Control-Concurrent-MVar-Expiring.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent MVar Expiring",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "Expiring",
          "package": "expiring-mvar",
          "partial": "Expiring",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ExpiringMVar contains a value that will be thrown out after\n   a given period of time. The timer can be reset before the value\n   expires. \n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "ExpiringMVar",
          "package": "expiring-mvar",
          "source": "src/Control-Concurrent-MVar-Expiring.html#ExpiringMVar",
          "type": "data"
        },
        "index": {
          "description": "An ExpiringMVar contains value that will be thrown out after given period of time The timer can be reset before the value expires",
          "hierarchy": "Control Concurrent MVar Expiring",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "ExpiringMVar",
          "package": "expiring-mvar",
          "partial": "Expiring MVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#t:ExpiringMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you decide that a value should never expire, you can cancel the timer. \n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "cancelExpiration",
          "package": "expiring-mvar",
          "signature": "ExpiringMVar a -\u003e IO ()",
          "source": "src/Control-Concurrent-MVar-Expiring.html#cancelExpiration",
          "type": "function"
        },
        "index": {
          "description": "If you decide that value should never expire you can cancel the timer",
          "hierarchy": "Control Concurrent MVar Expiring",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "cancelExpiration",
          "normalized": "ExpiringMVar a-\u003eIO()",
          "package": "expiring-mvar",
          "partial": "Expiration",
          "signature": "ExpiringMVar a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:cancelExpiration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the value hasn't yet expired, change the timer and reset it. \n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "changeExpiration",
          "package": "expiring-mvar",
          "signature": "Int-\u003e ExpiringMVar a-\u003e IO (ExpiringMVar a)",
          "type": "function"
        },
        "index": {
          "description": "If the value hasn yet expired change the timer and reset it",
          "hierarchy": "Control Concurrent MVar Expiring",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "changeExpiration",
          "normalized": "Int-\u003eExpiringMVar a-\u003eIO(ExpiringMVar a)",
          "package": "expiring-mvar",
          "partial": "Expiration",
          "signature": "Int-\u003eExpiringMVar a-\u003eIO(ExpiringMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:changeExpiration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether an MVar has expired. \n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "isExpiredMVar",
          "package": "expiring-mvar",
          "signature": "ExpiringMVar a -\u003e IO Bool",
          "source": "src/Control-Concurrent-MVar-Expiring.html#isExpiredMVar",
          "type": "function"
        },
        "index": {
          "description": "Determine whether an MVar has expired",
          "hierarchy": "Control Concurrent MVar Expiring",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "isExpiredMVar",
          "normalized": "ExpiringMVar a-\u003eIO Bool",
          "package": "expiring-mvar",
          "partial": "Expired MVar",
          "signature": "ExpiringMVar a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:isExpiredMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new value that is set to be thrown away after a minimum period of time. Each call to newExpiringMVar spawns a thread that runs until the value expires. \n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "newExpiringMVar",
          "package": "expiring-mvar",
          "signature": "a-\u003e Int-\u003e IO (ExpiringMVar a)",
          "type": "function"
        },
        "index": {
          "description": "Create new value that is set to be thrown away after minimum period of time Each call to newExpiringMVar spawns thread that runs until the value expires",
          "hierarchy": "Control Concurrent MVar Expiring",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "newExpiringMVar",
          "normalized": "a-\u003eInt-\u003eIO(ExpiringMVar a)",
          "package": "expiring-mvar",
          "partial": "Expiring MVar",
          "signature": "a-\u003eInt-\u003eIO(ExpiringMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:newExpiringMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the value has not yet expired, you are able to retrieve it.\n   Reading the value does not expire it. In other words, readExpiringMVar behaves like readMVar.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "readExpiringMVar",
          "package": "expiring-mvar",
          "signature": "ExpiringMVar a -\u003e IO (Maybe a)",
          "source": "src/Control-Concurrent-MVar-Expiring.html#readExpiringMVar",
          "type": "function"
        },
        "index": {
          "description": "If the value has not yet expired you are able to retrieve it Reading the value does not expire it In other words readExpiringMVar behaves like readMVar",
          "hierarchy": "Control Concurrent MVar Expiring",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "readExpiringMVar",
          "normalized": "ExpiringMVar a-\u003eIO(Maybe a)",
          "package": "expiring-mvar",
          "partial": "Expiring MVar",
          "signature": "ExpiringMVar a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:readExpiringMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a collection of ExpiringMVars, filter out the ones that have expired, and put the remaining ExpiringMVars in a new collection. \n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "removeExpiredMVars",
          "package": "expiring-mvar",
          "signature": "t (ExpiringMVar a) -\u003e IO (f (ExpiringMVar a))",
          "source": "src/Control-Concurrent-MVar-Expiring.html#removeExpiredMVars",
          "type": "function"
        },
        "index": {
          "description": "For collection of ExpiringMVars filter out the ones that have expired and put the remaining ExpiringMVars in new collection",
          "hierarchy": "Control Concurrent MVar Expiring",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "removeExpiredMVars",
          "normalized": "a(ExpiringMVar b)-\u003eIO(c(ExpiringMVar b))",
          "package": "expiring-mvar",
          "partial": "Expired MVars",
          "signature": "t(ExpiringMVar a)-\u003eIO(f(ExpiringMVar a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:removeExpiredMVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the value has not yet expired, reset the timer. If the value expired,\n   no timer is created. \n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "resetExpiringMVarTimer",
          "package": "expiring-mvar",
          "signature": "ExpiringMVar a -\u003e IO (ExpiringMVar a)",
          "source": "src/Control-Concurrent-MVar-Expiring.html#resetExpiringMVarTimer",
          "type": "function"
        },
        "index": {
          "description": "If the value has not yet expired reset the timer If the value expired no timer is created",
          "hierarchy": "Control Concurrent MVar Expiring",
          "module": "Control.Concurrent.MVar.Expiring",
          "name": "resetExpiringMVarTimer",
          "normalized": "ExpiringMVar a-\u003eIO(ExpiringMVar a)",
          "package": "expiring-mvar",
          "partial": "Expiring MVar Timer",
          "signature": "ExpiringMVar a-\u003eIO(ExpiringMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:resetExpiringMVarTimer"
      }
    }
  ]
]